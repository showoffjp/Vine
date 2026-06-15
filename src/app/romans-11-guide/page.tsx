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
  "Remnant by Grace",
  "The Olive Tree",
  "Doxology of Wonder",
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
    heading: "Has God Rejected His People?",
    reference: "Romans 11:1&ndash;36",
    paragraphs: [
      "Romans 11 stands as one of the most theologically dense and emotionally charged chapters in the entire New Testament. Paul begins it with a question that must have felt devastating to any Jewish reader: &ldquo;Has God rejected his people?&rdquo; The answer he thunders back is equally forceful: &ldquo;By no means!&rdquo; (v.1). The Greek here is the strongest negative Paul could reach for &mdash; me genoito &mdash; a particle of horrified refusal. The very suggestion is unthinkable, and Paul intends to show why.",
      "Romans 9&ndash;11 forms a continuous argument about the fate of ethnic Israel in light of the gospel. Romans 9 argued that God&rsquo;s word has not failed &mdash; election was always by sovereign grace, not by descent. Romans 10 argued that Israel&rsquo;s stumbling was not ignorance but disobedience, for the gospel went out to all and Israel refused. Now in Romans 11 Paul asks: is this refusal permanent? Is the story of Israel simply over?",
      "The chapter unfolds in three great movements. First, Paul shows that even now God has preserved a remnant in Israel (v.1&ndash;10). Second, he explains that Israel&rsquo;s failure has a redemptive purpose &mdash; it opened the door to the Gentiles &mdash; and that this Gentile inclusion is itself meant to provoke Israel to jealousy and ultimately to salvation (v.11&ndash;32). Third, overwhelmed by the staggering complexity and mercy of God&rsquo;s plan, Paul breaks into a doxology of wonder (v.33&ndash;36).",
      "What binds the whole chapter together is Paul&rsquo;s conviction that God is a covenant-keeping God whose purposes cannot be thwarted. The gifts and calling of God are irrevocable (v.29). Whatever has happened in history &mdash; however dark the chapter of Israel&rsquo;s hardening appears &mdash; God has not abandoned his people. He is working all things toward a mercy so comprehensive that Paul can find no words adequate to describe it except an act of worship.",
      "Romans 11 is essential reading for anyone who wants to understand the relationship between the church and Israel, between grace and election, between divine sovereignty and human responsibility. It is a chapter that humbles human pride &mdash; both Jewish and Gentile &mdash; and points to a God whose wisdom runs so deep that his very judgments become the instruments of his mercy. &ldquo;For from him and through him and to him are all things. To him be glory forever. Amen&rdquo; (v.36).",
    ],
  },
  {
    id: "Remnant by Grace",
    heading: "The Remnant by Grace",
    reference: "Romans 11:1&ndash;10",
    paragraphs: [
      "Paul opens his defense of God&rsquo;s faithfulness with the most personal piece of evidence imaginable: himself. &ldquo;I myself am an Israelite, a descendant of Abraham, a member of the tribe of Benjamin&rdquo; (v.1). Paul&rsquo;s own conversion is living proof that God has not cast off his people. Here is an Israelite &mdash; a zealous persecutor of the church, a man who consented to the murder of Stephen &mdash; who has been apprehended by the grace of God and made an apostle of the Messiah. If God has not rejected Paul, his rejection of Israel cannot be total.",
      "Paul then reaches back to Elijah to show that this pattern of a preserved remnant within a disobedient nation is nothing new in Israel&rsquo;s history. Elijah, in the depths of his despair, cried out to God against Israel: &ldquo;Lord, they have killed your prophets, they have demolished your altars, and I alone am left, and they seek my life&rdquo; (v.3, quoting 1 Kings 19:14). From the prophet&rsquo;s vantage point at the bottom of his depression, it looked like total abandonment &mdash; one faithful man left in a nation of apostates.",
      "But God&rsquo;s answer reframes the entire situation: &ldquo;I have kept for myself seven thousand men who have not bowed the knee to Baal&rdquo; (v.4). Notice the grammar carefully. God says &ldquo;I have kept&rdquo; &mdash; not &ldquo;seven thousand have resisted.&rdquo; The preservation of the remnant is an act of divine keeping, not human resilience. God himself, in his sovereign grace, had maintained a people for himself even in the darkest hour of Israel&rsquo;s apostasy.",
      "&ldquo;So too at the present time there is a remnant, chosen by grace&rdquo; (v.5). Paul draws the direct parallel. Just as there was a remnant in Elijah&rsquo;s day whom God had preserved, so now there is a remnant of Jewish believers in Jesus &mdash; Paul himself, the Jerusalem church, the thousands of Jewish Christians throughout the Mediterranean world. Their existence is proof that God has not abandoned his covenant people.",
      "Then Paul drives home a crucial theological point about the nature of this grace: &ldquo;But if it is by grace, it is no longer on the basis of works; otherwise grace would no longer be grace&rdquo; (v.6). Grace and works are mutually exclusive grounds for divine acceptance. The moment you introduce merit as even a partial basis for God&rsquo;s favor, grace ceases to be grace. The remnant is not preserved because they figured it out while others did not. They are preserved by the sheer unmerited favor of God, from first to last.",
      "The corollary is sobering: &ldquo;The rest were hardened&rdquo; (v.7). Paul cites two devastating texts from Israel&rsquo;s own scriptures. First, Isaiah 29:10: &ldquo;God gave them a spirit of stupor, eyes that would not see and ears that would not hear, down to this very day.&rdquo; Second, Psalm 69:22&ndash;23, a psalm of David that the earliest Christians read as messianic, in which the table of the wicked becomes a snare and their eyes are darkened. The hardening of Israel is not accidental or arbitrary. It is a judicial act of God in response to persistent rejection &mdash; and it is itself a fulfillment of the prophets. Even the hardening is within God&rsquo;s control and plan.",
    ],
  },
  {
    id: "The Olive Tree",
    heading: "The Olive Tree and the Mystery of Israel",
    reference: "Romans 11:11&ndash;32",
    paragraphs: [
      "Having established that a remnant remains, Paul now turns to the bigger question: what is the purpose of Israel&rsquo;s stumbling? The answer he gives is astonishing: &ldquo;Through their trespass salvation has come to the Gentiles, so as to make Israel jealous&rdquo; (v.11). Israel&rsquo;s rejection of the Messiah opened a door that was previously more narrowly conceived. The gospel went out to the nations of the world, and this Gentile inclusion is itself a strategic act &mdash; designed by God to provoke Israel to desire what the Gentiles are receiving.",
      "Paul presses the logic further: &ldquo;Now if their trespass means riches for the world, and if their failure means riches for the Gentiles, how much more will their full inclusion mean!&rdquo; (v.12). If Israel&rsquo;s stumbling produced such a wealth of blessing for the Gentile world, what will it look like when that stumbling is reversed? Paul answers his own question in the starkest possible terms: it will be nothing less than &ldquo;life from the dead&rdquo; (v.15). The restoration of Israel is eschatologically connected to resurrection itself &mdash; Paul seems to envision it as part of the final consummation of all things.",
      "Paul then deploys one of the most vivid metaphors in all of his letters: the cultivated olive tree. The tree represents the people of God, rooted in the patriarchal promises to Abraham. Some natural branches &mdash; ethnic Israelites &mdash; have been broken off the tree because of their unbelief. In their place, wild olive shoots &mdash; Gentile believers &mdash; have been grafted in against nature, sharing in the rich root of the patriarchs. This is the church: not a separate organism, but a branch grafted into the ancient olive tree of Israel&rsquo;s covenant.",
      "Paul is at pains to prevent Gentile Christians from drawing the wrong conclusion from this. &ldquo;Do not boast over the branches&rdquo; (v.18). The Gentile who looks at the broken-off Jewish branches and feels superior has utterly misunderstood their own position. &ldquo;Remember that it is not you who support the root, but the root that supports you&rdquo; (v.18). Gentile believers exist on the covenant root of Israel, not the other way around. They have been granted participation in something ancient and foundational, and they hold that position by faith, not by ethnic privilege.",
      "The warning is severe: &ldquo;They were broken off because of their unbelief, but you stand by faith. So do not become proud, but fear. For if God did not spare the natural branches, neither will he spare you&rdquo; (v.20&ndash;21). The severity of God toward those who do not continue in his kindness is as real as his kindness toward those who do. Paul is not talking about losing individual salvation here but about the historical pattern of God&rsquo;s dealings with peoples: privilege does not guarantee permanence apart from faith.",
      "Then comes the mystery (v.25&ndash;27): Paul does not want his Gentile readers to be wise in their own conceits, so he discloses what he calls a musterion &mdash; a divine secret now revealed. The partial hardening that has come upon Israel is not permanent. It will last until &ldquo;the fullness of the Gentiles&rdquo; comes in &mdash; a number or completeness known to God. And then, &ldquo;in this way all Israel will be saved.&rdquo; Paul quotes Isaiah 59:20&ndash;21 to ground this: the Deliverer will come from Zion and banish ungodliness from Jacob. The ultimate salvation of Israel is not a human achievement but a divine act of the returning Messiah.",
      "&ldquo;For the gifts and calling of God are irrevocable&rdquo; (v.29). This single verse is one of the most important in the chapter. Whatever God has purposed and promised, he does not take back. The election of Israel, the covenants, the promises &mdash; these remain operative even through Israel&rsquo;s present disobedience. Paul drives toward the great paradox: Israel is currently an enemy in respect of the gospel for the sake of Gentile benefit, yet beloved in respect of election for the sake of the patriarchs. Both are true simultaneously. The disobedience of all &mdash; Gentile first, then Israel &mdash; is the very ground upon which God exercises mercy toward all: &ldquo;For God has consigned all to disobedience, that he may have mercy on all&rdquo; (v.32).",
    ],
  },
  {
    id: "Doxology of Wonder",
    heading: "The Doxology of Wonder",
    reference: "Romans 11:33&ndash;36",
    paragraphs: [
      "The argument of Romans 9&ndash;11 &mdash; three chapters of the most sustained theological wrestling in the New Testament &mdash; ends not with a conclusion but with an eruption of praise. Paul has been reasoning about the deepest mysteries of divine sovereignty, election, the fate of Israel, the inclusion of the Gentiles, and the ultimate triumph of mercy. He has laid out the argument as carefully as he can. And then, at the end, the argument gives way to worship. No human mind can fully follow God to the depths of his counsel, and Paul knows it.",
      "&ldquo;Oh, the depth of the riches and wisdom and knowledge of God! How unsearchable are his judgments and how inscrutable his ways!&rdquo; (v.33). The Greek word for &ldquo;unsearchable&rdquo; is anexereuneta &mdash; it cannot be tracked down, traced out, or followed to its source. The word for &ldquo;inscrutable&rdquo; is anexichniastoi &mdash; the footprints cannot be found. Paul is reaching for words that confess the limits of human understanding. God&rsquo;s judgments cannot be explained with the tools of human logic. His ways leave no footprints that we can follow.",
      "Paul quotes two texts from the Hebrew Bible to anchor the doxology. First, Isaiah 40:13: &ldquo;For who has known the mind of the Lord, or who has been his counselor?&rdquo; (v.34). No one has ever stood at God&rsquo;s right hand and advised him. His wisdom is self-originating. Second, Job 41:11: &ldquo;Or who has given a gift to him that he might be repaid?&rdquo; (v.35). No one has ever put God in their debt. His grace is sovereign and free. These two questions destroy any residual human pride in the face of divine mystery &mdash; we have not counseled him, and we have not paid him first.",
      "Then Paul reaches the capstone of the entire letter so far: &ldquo;For from him and through him and to him are all things. To him be glory forever. Amen&rdquo; (v.36). The three prepositional phrases &mdash; from him, through him, to him &mdash; encompass the totality of existence. God is the source of all things (from him), the sustaining ground of all things (through him), and the final goal of all things (to him). Everything that exists comes from God, is held in being by God, and is moving toward the glorification of God. Creation, redemption, history, Israel, the church, the consummation &mdash; all of it is gathered up into this one comprehensive affirmation.",
      "The doxology teaches us something crucial about how to handle divine mysteries. Paul does not end Romans 11 with all questions resolved. There are things he has pointed to without fully explaining &mdash; the fullness of the Gentiles, the salvation of all Israel, the way in which God consigns all to disobedience that he might have mercy on all. These are not puzzles that yield easily to theological analysis. Paul&rsquo;s response is not frustration but worship. When the mind reaches the limit of what it can grasp, the right move is not to force a resolution but to bow before the One who holds it all together. The doxology is not an evasion. It is the most honest and fitting response to a God whose wisdom outruns our comprehension.",
      "The echo of this passage runs through the whole of Christian spirituality. Augustine wrestled with predestination and grace and came here. Luther, rediscovering the gospel, came here. The great Reformed confessions come here. Whenever the church has pressed hardest into the deepest doctrines of God&rsquo;s sovereign grace, it has arrived at the same destination as Paul: not a neat theological system fully resolved, but a living, trembling, joy-filled acknowledgment that the ways of God are past finding out, and that this is not a problem to be solved but a God to be worshiped. To him be glory forever. Amen.",
    ],
  },
];

const videoItems = [
  { videoId: "C6lYU5TKGKg", title: "BibleProject - Overview of Romans" },
  { videoId: "AHChRpPPD6E", title: "Romans 11 - The Olive Tree and the Mystery of Israel" },
  { videoId: "wJmCagUFLBQ", title: "Remnant, Grace, and the People of God - Romans 11 Explained" },
  { videoId: "M5lhHhBHRwA", title: "Romans 11 Doxology - Oh the Depth of the Riches of God" },
];

export default function Romans11GuidePage() {
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
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Romans 11
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            God&rsquo;s faithfulness to Israel explored through the remnant by grace, the olive tree of Jew and Gentile, the mystery that all Israel will be saved, and the doxology of wonder that brings three chapters of sustained theological argument to rest in worship.
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

        <div style={{ marginTop: "3.5rem", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
            Deepen your study of Romans 11 through visual teaching on the olive tree, the remnant by grace, the mystery of Israel&rsquo;s salvation, and the great doxology of wonder.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Gifts and Calling of God Are Irrevocable</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Romans 11 refuses to let the church forget what it owes. Gentile believers have been grafted into an ancient covenant tree that is not their own. They stand by faith in promises God made to Abraham. And the God who keeps those promises &mdash; whose gifts and calling are irrevocable &mdash; is working all of history toward a mercy so comprehensive that human wisdom has no category for it. The only fitting response is the one Paul gives: &ldquo;To him be glory forever. Amen.&rdquo;
          </p>
        </div>
      </main>
    </div>
  );
}
