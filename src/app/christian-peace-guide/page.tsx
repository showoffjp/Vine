"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["The Meaning of Shalom", "Peace with God", "The Peace That Surpasses Understanding", "Peace in a Troubled World", "Becoming Peacemakers", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "The Meaning of Shalom",
    heading: "The Meaning of Shalom: Far More Than the Absence of Conflict",
    paragraphs: [
      "When the Hebrew Scriptures speak of peace, the word is &ldquo;shalom,&rdquo; and it carries a freight of meaning so much heavier than the English word that to translate it simply as &ldquo;peace&rdquo; is almost to lose it. To the modern Western ear, peace means the absence of something &mdash; the absence of war, of noise, of conflict, of disturbance. Peace is what is left when the trouble stops. But shalom is not an absence at all; it is a presence, a fullness, a positive and overflowing reality. Shalom means wholeness, completeness, soundness, well-being, and flourishing. It describes not a vacuum where conflict used to be but a world that is full, knit together, and functioning as it was made to function.",
      "Shalom reaches into every dimension of existence. It speaks of peace with God &mdash; the restoration of a right relationship with the Creator. It speaks of peace with others &mdash; reconciled, just, and loving human relationships. It speaks of peace within oneself &mdash; an inner integration and rest of soul. And it speaks of peace with creation itself &mdash; a world set right, ordered, and fruitful. Shalom is therefore comprehensive; it touches the body and the soul, the individual and the community, the human and the natural world. To bless someone with shalom in the Hebrew world was to wish them not merely an absence of trouble but the presence of every good thing &mdash; health, prosperity, security, righteousness, and right relationship in every direction.",
      "This is why shalom can be used to ask after a person&rsquo;s whole welfare. When David sends to inquire after the &ldquo;shalom&rdquo; of his brothers and the shalom of the battle, he is asking about their total condition, their well-being in every respect. Shalom is the word for a life that is whole. It is the condition of a person, a family, a nation, or a world in which nothing is broken and nothing is missing &mdash; in which all the parts are working together as they should, bound together in right relationship and overflowing with flourishing. It is, in a sense, the biblical word for the way things are supposed to be.",
      "The Hebrew prophets took up shalom as their great vision of the world as God intends it &mdash; the world set right. The prophet Isaiah dreamed of a day when the wolf would dwell with the lamb, when nations would beat their swords into plowshares, when the knowledge of the Lord would cover the earth as the waters cover the sea. This is shalom on a cosmic scale: not merely the cessation of hostilities but the healing of all things, the reordering of the entire creation into harmony, justice, and abundant life. The prophetic vision of shalom is the vision of a world in which God&rsquo;s good order has been fully restored and every relationship &mdash; with God, with neighbor, with self, with the earth &mdash; has been made whole.",
      "Set against this rich biblical vision, the world&rsquo;s ordinary notion of peace looks thin and impoverished. The world calls it peace when the guns fall silent, when the divorce is finalized without too much bitterness, when an uneasy truce holds. But this is peace as mere ceasefire &mdash; a fragile cessation of open conflict that leaves the underlying brokenness untouched. Two parties may stop fighting while remaining alienated, suspicious, and unreconciled; a person may have no external conflict while being torn apart within. The world&rsquo;s peace is largely negative, defined by what is absent. Shalom is positive, defined by what is present: wholeness, healing, and flourishing in every dimension of life.",
      "This distinction matters enormously for understanding the Christian gospel, because the salvation Christ brings is nothing less than the restoration of shalom. He does not come merely to stop the war between God and humanity; he comes to make us whole &mdash; to reconcile us to God, to one another, to ourselves, and ultimately to all creation. The gospel is the announcement that the broken world will be made whole again, that the shattered relationships will be healed, that the flourishing for which the world was made will be restored. To be saved is to be brought back into shalom &mdash; into the wholeness and well-being that sin destroyed and that Christ came to recover.",
      "Understanding shalom rightly therefore reframes the whole Christian hope and calling. Peace is not a small, private, inward thing &mdash; a quiet feeling for the individual believer. It is the vast and comprehensive purpose of God for his whole creation: a world made whole, relationships made right, the flourishing of all things under the loving reign of God. When the Christian prays and works for peace, they are not merely seeking the absence of conflict but the presence of God&rsquo;s shalom &mdash; the wholeness that God intends and has promised to bring. This is the peace that Scripture proclaims, and it is far greater, far richer, and far more wonderful than the world&rsquo;s thin idea of a quiet life.",
    ],
  },
  {
    id: "Peace with God",
    heading: "Peace with God: The Foundational Reconciliation",
    paragraphs: [
      "Before there can be peace within, peace with others, or peace in the world, there must first be peace with God &mdash; for this is the foundational peace from which all other peace flows. The deepest fracture in the universe is not between nation and nation or person and person but between humanity and its Creator. Sin has set us at odds with God, made us, in the stark language of Scripture, his enemies. And no amount of inner tranquility or social harmony can heal that primary breach. The good news of the gospel begins precisely here: that the broken relationship between God and humanity has been restored through Jesus Christ. The root of all peace is reconciliation with God.",
      "Paul states it with magnificent clarity in Romans 5:1: &ldquo;Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ.&rdquo; This is the cornerstone. Peace with God is not something the believer achieves by trying harder or feeling more serene; it is the settled result of justification &mdash; of being declared righteous before God through faith in Christ. It is an objective reality, a change in our standing before God, not merely a subjective feeling. The war is over. The hostility is ended. The one who was at enmity with God now stands before him in peace, not because of anything in themselves but because of what Christ has done. This is peace as a legal and relational fact before it is ever a felt experience.",
      "Scripture does not soften the language of what we were before this reconciliation. Paul writes that &ldquo;while we were enemies we were reconciled to God by the death of his Son&rdquo; (Romans 5:10). We were not neutral parties, not merely distant acquaintances of God, but enemies &mdash; alienated, hostile, in rebellion. This makes the reconciliation all the more astonishing. It was not that we sought peace and God responded; it was that God, while we were still his enemies, took the initiative to make peace, at the cost of his own Son. In Colossians 1:20 Paul says that God was pleased &ldquo;through him to reconcile to himself all things&hellip; making peace by the blood of his cross.&rdquo; Peace with God was purchased; it cost the blood of Christ.",
      "So central is Christ to this peace that Paul does not merely say Christ made peace but that Christ is our peace. Writing of the great division between Jew and Gentile, he declares: &ldquo;For he himself is our peace, who has made us both one and has broken down in his flesh the dividing wall of hostility&rdquo; (Ephesians 2:14). Christ does not simply broker a peace treaty between estranged parties; he is himself the peace, the meeting-place where the alienated are brought together. And the reconciliation he accomplishes is not only vertical, between humanity and God, but horizontal, between divided peoples. The same cross that reconciles us to God breaks down the walls of hostility between us, creating one new humanity where there were two warring camps.",
      "This is why peace with God is the root from which all other peace grows. The person who is reconciled to God has been brought back into right relationship with the source of all wholeness, and from that restored center the healing radiates outward. Peace with God makes possible peace within the self, for the deepest anxiety of the human heart is its unresolved standing before its Maker, and when that is settled, the soul can finally rest. Peace with God makes possible peace with others, for those who have been forgiven an unpayable debt are freed to forgive, and those who have been reconciled across the greatest divide are equipped to be reconciled across lesser ones.",
      "It is crucial to see that this peace is received, not achieved. The endless human projects of self-improvement, of religious effort, of trying to make ourselves acceptable to God, all founder on the same rock: we cannot reconcile ourselves to God by our own striving. Peace with God is a gift, secured entirely by Christ and received entirely by faith. The believer does not work toward peace with God as a distant goal; they begin from it as an accomplished fact. &ldquo;We have peace with God,&rdquo; Paul says &mdash; present tense, settled, done. This frees the Christian from the exhausting treadmill of trying to earn God&rsquo;s favor and grounds their whole life in a peace that was won for them.",
      "To grasp peace with God as the foundation transforms the entire Christian life. Every other peace the believer seeks &mdash; inner calm, reconciled relationships, a world set right &mdash; rests upon this primary reconciliation. The Christian builds on solid ground because the most fundamental relationship of their existence, the one with God, has been healed. No matter what storms rage in the world or in the heart, the believer who is at peace with God has an unshakable foundation beneath them. The war that mattered most has already been won, and won not by them but for them, by the One who is himself their peace.",
    ],
  },
  {
    id: "The Peace That Surpasses Understanding",
    heading: "The Peace That Surpasses Understanding: A Gift Not of This World",
    paragraphs: [
      "Beyond the objective peace with God that the believer possesses as a settled fact, there is also a subjective peace that God gives &mdash; an inner tranquility of heart and mind that is unlike anything the world can offer or even comprehend. The classic passage is Philippians 4:6-7, written, remarkably, by a man in prison: &ldquo;Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and minds in Christ Jesus.&rdquo; Here is a peace that does not depend on favorable circumstances, that comes not from the resolution of our problems but from bringing them to God in prayer.",
      "Notice what Paul does not say. He does not say, &ldquo;and your problems will be solved.&rdquo; He says the peace of God will guard your hearts and minds &mdash; even while the circumstances that provoked the anxiety remain. The peace is given in the midst of the trouble, not after it has passed. And Paul calls it the peace &ldquo;which surpasses all understanding,&rdquo; because it makes no rational sense by the world&rsquo;s calculus. It is a peace that the situation does not warrant, a calm that the circumstances cannot explain. The watching world looks at the believer who is at rest in the middle of the storm and cannot account for it; the peace exceeds what the mind can reason its way to. It is supernatural, a gift from beyond.",
      "The image Paul uses is military: the peace of God will &ldquo;guard&rdquo; your hearts and minds, like a garrison of soldiers standing watch over a city. This peace is not a passive feeling but an active sentinel, posted at the gates of the heart and the mind to keep out the invading forces of anxiety, fear, and despair. The Christian under siege by worry finds that the peace of God stands guard, holding the line, protecting the inner citadel even when the enemy presses hard outside the walls. And this guarding peace is located &ldquo;in Christ Jesus&rdquo; &mdash; it is not a technique or a mood but a reality found in union with the risen Lord.",
      "Jesus himself gave this peace as a parting gift to his disciples on the night before he died: &ldquo;Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid&rdquo; (John 14:27). The phrase &ldquo;not as the world gives&rdquo; is the heart of it. The world&rsquo;s peace is conditional and fragile, dependent on everything going well; it is the peace of a calm sea that the first storm destroys. Christ&rsquo;s peace is of an altogether different order. It is his own peace &mdash; the very tranquility with which he himself faced betrayal, suffering, and the cross &mdash; given to his followers as a possession that no external circumstance can take away.",
      "This explains how the believer can experience a supernatural calm in the midst of the storm. The peace Christ gives is not anchored in the believer&rsquo;s circumstances but in the believer&rsquo;s Lord, and because the Lord does not change, neither does the ground of the peace. A Christian facing a frightening diagnosis, a financial crisis, or the loss of someone they love may be visited by a peace that astonishes even them &mdash; a calm they did not manufacture and cannot explain, that holds them steady when by every rational measure they should be undone. This is not denial or stoicism; it is the peace of God standing guard over a heart that has cast its cares on him.",
      "The pathway into this peace, according to Paul, is prayer with thanksgiving. The antidote to anxiety is not to suppress it or to talk oneself out of it, but to turn it into prayer &mdash; to take the very thing that is fueling the worry and bring it, specifically and honestly, to God, with thanksgiving for who he is and what he has already done. The act of casting the burden on God, of replacing anxious rumination with grateful petition, is the channel through which the peace flows. The believer does not achieve peace by trying to feel peaceful; they receive it by bringing everything to God and leaving it with him.",
      "This peace that surpasses understanding is therefore one of the most precious and distinctive gifts of the Christian life &mdash; a tangible foretaste, even now, of the wholeness of shalom. It is the inner counterpart to the objective peace with God: having been reconciled to God in our standing, we are also calmed by God in our experience. The world cannot give this peace because the world&rsquo;s peace is always tied to circumstance, and circumstances always fail. But Christ&rsquo;s peace, given not as the world gives, remains when everything else is shaken &mdash; a garrison at the gates of the heart, a calm in the storm, a gift from the Prince of Peace himself.",
    ],
  },
  {
    id: "Peace in a Troubled World",
    heading: "Peace in a Troubled World: Calm That Coexists with the Storm",
    paragraphs: [
      "The Christian is not promised a life free of trouble. This is a crucial point, and one that much popular religion gets badly wrong. The peace of Christ is not a guarantee of smooth circumstances, of health and prosperity and the absence of hardship. On the very night he promised his peace, Jesus also said plainly: &ldquo;In the world you will have tribulation. But take heart; I have overcome the world&rdquo; (John 16:33). The two halves of that sentence belong together. Tribulation is promised; so is peace; and the peace is to be found not in the absence of the tribulation but in the victory of Christ over the world that produces it.",
      "This is the great paradox of Christian peace: it coexists with trouble. The believer can have peace and tribulation at the same time, because the source of the peace is not the circumstance but Christ. The world assumes that peace requires the removal of all that disturbs us &mdash; that we cannot be at peace until the threat is gone, the conflict resolved, the danger past. But Christian peace operates on an entirely different basis. Its source lies outside the storm altogether, in the One who has overcome the world, and so it can remain steady while the storm still rages. The believer does not wait for the trouble to end in order to have peace; they have peace in the very midst of it.",
      "Anxiety, conflict, and turmoil are the ordinary weather of human life, and the Christian is not exempt from them. Illness comes, relationships fracture, finances collapse, nations rage, and the believer feels the weight of all of it. The Christian life is not a denial of these realities or a pretense that they do not hurt. But the believer faces them anchored to a different center. When Jesus says &ldquo;take heart,&rdquo; he is calling his followers to courage in the face of real tribulation, not to a fantasy in which the tribulation does not exist. The peace he gives is a peace for the storm, not a peace that requires the storm to be over first.",
      "The reason this peace can hold is that its foundation is Christ, not circumstances, and Christ does not change. Circumstances are by nature unstable; they rise and fall, improve and deteriorate, and a peace built on them is as unstable as they are. But Christ is the same yesterday, today, and forever, and the peace anchored to him shares his stability. This is why two believers in identical hardships, or the same believer on two different days, may experience such different measures of peace &mdash; the peace is steady to the degree that the heart is fixed on Christ rather than on the shifting circumstances. The discipline of the troubled Christian is to keep returning the gaze to the unchanging Lord.",
      "Scripture gives intensely practical counsel for anchoring the soul in trouble, and at its heart is the act of casting our cares on God. &ldquo;Cast all your anxiety on him, because he cares for you&rdquo; (1 Peter 5:7). The word picture is of throwing a heavy burden off oneself and onto another who is able to bear it. The anxious believer is not told to carry their cares more bravely but to hand them over &mdash; to transfer the crushing weight of worry onto the shoulders of a God who both is able to bear it and genuinely cares for them. This is prayer as relief, the deliberate unloading of the heart onto the One who invites the burden.",
      "Trust is the inner posture from which this casting of cares proceeds. To cast our anxiety on God is an act of trust &mdash; a declaration that we believe he is both sovereign over our circumstances and good toward us in them. The troubled believer practices peace by repeatedly choosing to trust: trusting that God reigns over the storm, that he is working even in the hardship, that he will not abandon his own. This trust does not always feel triumphant; often it is exercised through tears and trembling. But it is real, and it is the doorway through which the peace of Christ enters a troubled heart. The believer trusts, and casts their cares, and finds the peace that the circumstances cannot explain.",
      "And so the Christian moves through a troubled world as one who has trouble but is not defined by it, who feels the storms but is anchored beneath them. The peace of Christ does not lift the believer out of the world&rsquo;s tribulation; it sustains them through it. It is a peace that coexists with grief, with fear, with conflict, with all the hard weather of a fallen world, because its source is the risen Lord who has already overcome that world. &ldquo;Take heart,&rdquo; he says, &ldquo;I have overcome the world&rdquo; &mdash; and on the strength of that finished victory the believer finds a peace that no present trouble can finally take away.",
    ],
  },
  {
    id: "Becoming Peacemakers",
    heading: "Becoming Peacemakers: The Active Calling to Make Peace",
    paragraphs: [
      "Christian peace is not only a gift to be received but a calling to be obeyed. Having been reconciled to God and given his peace, the believer is sent out to extend that peace into the world &mdash; to become, in the words of Jesus, a peacemaker. &ldquo;Blessed are the peacemakers, for they shall be called sons of God&rdquo; (Matthew 5:9). This beatitude carries an extraordinary weight. To make peace is to bear the family resemblance of God himself; the peacemaker is recognized as a child of God because peacemaking is what God does. The same God who reconciled the world to himself now calls his children to share in that work, and promises that those who do so will be known as his own.",
      "It is essential to notice that Jesus blesses peace-makers, not merely peace-keepers. The two are very different. The peacekeeper avoids conflict, smooths over tensions, and keeps an uneasy quiet by not disturbing the surface. The peacemaker, by contrast, actively works to create peace where it does not yet exist &mdash; entering into the conflict, addressing the brokenness, doing the hard and often costly labor of reconciliation. Peacemaking is not passive or conflict-averse; it frequently requires confronting what is wrong, speaking difficult truths, and bearing the discomfort of engagement. The peacemaker does not keep a false peace by leaving wounds untended; they make true peace by healing what is broken.",
      "Paul gives this calling a realistic and humble frame: &ldquo;If possible, so far as it depends on you, live peaceably with all&rdquo; (Romans 12:18). The two qualifications are important and gracious. &ldquo;If possible&rdquo; acknowledges that peace is not always attainable, for it takes two to reconcile and the other party may refuse. &ldquo;So far as it depends on you&rdquo; locates the believer&rsquo;s responsibility precisely: they are answerable for their own part, for doing everything within their power to pursue peace, even though they cannot control the response of others. This frees the peacemaker from the impossible burden of guaranteeing outcomes while holding them firmly to the duty of pursuing peace with everything that is in them.",
      "Paul describes this calling as a ministry &mdash; indeed, as the central work entrusted to the church. &ldquo;All this is from God, who through Christ reconciled us to himself and gave us the ministry of reconciliation&rdquo; (2 Corinthians 5:18). The believer is not merely a recipient of reconciliation but an agent of it, an ambassador through whom God makes his appeal to the world. The ministry of reconciliation is first the proclamation of peace between God and humanity through Christ, but it flows outward into every reconciling work: the mending of broken relationships, the healing of divisions, the building of bridges across every wall of hostility that sin has erected.",
      "This peacemaking is to be lived out in the most ordinary and the most difficult arenas of human life &mdash; in relationships, in families, in churches, and in the wider world. In relationships, the peacemaker pursues forgiveness and reconciliation rather than letting bitterness fester. In families, the peacemaker labors to heal the fractures that so often run deepest precisely where love should be strongest. In churches, the peacemaker resists the divisions and factions that have splintered the people of God, working for the unity for which Christ prayed. And in the world, the peacemaker pursues justice and reconciliation across the dividing lines of race, class, and nation, refusing to accept hostility as the final word.",
      "In all of this, the peacemaker reflects the character of the Prince of Peace himself. The prophet Isaiah gave the coming Messiah that very title: &ldquo;For to us a child is born, to us a son is given&hellip; and his name shall be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace&rdquo; (Isaiah 9:6). Jesus is the Prince of Peace, the one whose reign establishes shalom, and the Christian peacemaker is one who participates in his reign, extending his peace into a fractured world. To make peace is to do the King&rsquo;s own work, to carry his character, to be unmistakably marked as belonging to him. This is why the peacemaker is called a child of God: they bear the likeness of the Prince of Peace.",
      "Christian peace, then, comes full circle. It begins as a gift &mdash; peace with God, the peace that surpasses understanding, peace in the midst of a troubled world &mdash; and it issues in a calling: to extend that peace to others, to become makers of peace in the pattern of the Prince of Peace. The two are inseparable. Those who have received God&rsquo;s shalom are sent to be agents of his shalom, carrying the wholeness they have been given into every broken place. To be a Christian is to be both a recipient and a bearer of peace, reconciled to God and entrusted with the ministry of reconciliation, blessed as a peacemaker and called a child of God.",
    ],
  },
];

const videoItems = [
  { videoId: "RbeUMQX4Gv8", title: "The Biblical Meaning of Shalom" },
  { videoId: "Np_y1Y3wkbU", title: "The Peace That Surpasses Understanding - Philippians 4" },
  { videoId: "kqFc4DBVKfA", title: "Becoming Peacemakers - The Christian Calling" },
];

export default function ChristianPeaceGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        {/* Hero */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "0.78rem", color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.6rem" }}>
            Faith &amp; Peace
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Peace
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Peace through a Christian lens &mdash; the rich biblical meaning of shalom as wholeness, peace with God through the reconciling work of Christ, the peace that surpasses understanding, peace that coexists with a troubled world, and the calling to become peacemakers in the pattern of the Prince of Peace.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;Peace I leave with you; my peace I give to you. Not as the world gives do I give to you.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>John 14:27</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? `rgba(58, 125, 86, 0.12)` : "transparent",
              color: tab === t ? ACCENT : MUTED,
              cursor: "pointer", fontSize: "0.88rem", fontWeight: tab === t ? 600 : 400,
              transition: "all 0.15s ease", whiteSpace: "nowrap" as const,
            }}>
              {t}
            </button>
          ))}
        </nav>

        {/* Text tab content */}
        {currentSection && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>{currentSection.heading}</h2>
            {currentSection.paragraphs.map((para, i) => (
              <p key={i} style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </section>
        )}

        {/* Videos tab */}
        {tab === "Videos" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>Videos</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {videoItems.map((video) => (
                <div key={video.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={video.videoId} title={video.title} />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <h3 style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}>{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Closing callout */}
        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.5rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>Both a Gift Received and a Calling to Extend</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>Biblical peace is shalom &mdash; wholeness in every dimension of life. It begins with peace with God, secured by the blood of the cross, and flowers into the peace that surpasses understanding, a calm that coexists with the storm. And it issues in a calling: to become peacemakers in the pattern of the Prince of Peace. Those who have received God&rsquo;s shalom are sent to carry it into every broken place &mdash; reconciled to God and entrusted with the ministry of reconciliation.</p>
        </div>
      </main>
    </div>
  );
}
