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
  "What Is Reformed Theology",
  "The Sovereignty of God",
  "The Five Points (TULIP)",
  "Covenant Theology",
  "Calvinism and Arminianism",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "What Is Reformed Theology",
    heading: "What Is Reformed Theology",
    paragraphs: [
      "Reformed theology is the theological tradition that flows from the second generation of the Protestant Reformation, especially the work of John Calvin (1509&ndash;1564) in Geneva, alongside Huldrych Zwingli, Martin Bucer, and the theologians who built on their foundations. It is one of the great streams of Protestant Christianity, and it has shaped churches, nations, and minds for nearly five centuries.",
      "The word &ldquo;Reformed&rdquo; is broader than &ldquo;Calvinist.&rdquo; To be Calvinist, in the narrow sense, is to hold particular convictions about salvation. To be Reformed is to embrace a whole vision of God, salvation, the church, and the Christian life &mdash; a vision expressed in a family of confessional documents: the Westminster Confession of Faith, the Heidelberg Catechism, the Belgic Confession, and the Canons of Dort. These confessions are not the tradition&rsquo;s scripture but its considered summary, hammered out by assemblies of pastors and theologians.",
      "At the heart of Reformed theology is a particular vision of God: utterly sovereign, perfectly holy, freely gracious, and infinitely glorious &mdash; a God who does all things for the praise of his own glory. This is not the small, manageable deity of human invention but the great God of Scripture, before whom the proper response is awe. The Reformed motto captures the whole orientation in three Latin words: soli Deo gloria &mdash; glory to God alone.",
      "From this vision flow the tradition&rsquo;s emphases. Reformed theology stresses the radical priority of God&rsquo;s grace in salvation: the sinner does not contribute to his own rescue but receives it as a gift from first to last. It stresses the authority of Scripture over all of life, not merely over &ldquo;religious&rdquo; matters. And it stresses the comprehensive lordship of Christ over every sphere &mdash; church, family, work, art, politics, and culture.",
      "This last emphasis found memorable expression in the Dutch theologian and statesman Abraham Kuyper, whose &ldquo;Kuyperian&rdquo; vision insists that no corner of life lies outside Christ&rsquo;s claim. &ldquo;There is not a square inch in the whole domain of human existence over which Christ, who is Sovereign over all, does not cry, Mine!&rdquo; For the Reformed Christian, faith is not a private hobby tucked into the margins of life but a total allegiance that reorders everything.",
      "It is worth saying at the outset that Reformed theology is held by serious, joyful, Bible-loving Christians, and that its reputation for cold abstraction is largely a caricature. At its best, the tradition has produced not only rigorous theologians but warm-hearted pastors, hymn-writers, missionaries, and reformers. The doctrines that can look forbidding on paper have, in practice, been the source of deep comfort, durable hope, and a profound sense of being held by a God who does not let go.",
    ],
  },
  {
    id: "The Sovereignty of God",
    heading: "The Sovereignty of God",
    paragraphs: [
      "The center of gravity in Reformed theology is the sovereignty of God &mdash; the conviction that God is the absolute Lord of all things, who works all things according to the counsel of his will (Ephesians 1:11). Everything else in the tradition radiates outward from this central sun. To understand Reformed theology, one must first grasp how seriously it takes the kingship of God.",
      "This is not abstract philosophy but the source of deep pastoral comfort. If God truly governs all things, then nothing happens by accident, no suffering is finally meaningless, and the believer&rsquo;s salvation rests not on his own fragile choosing but on God&rsquo;s unshakeable purpose. The doctrine that can sound austere in the lecture hall becomes a pillow for the dying and a rock for the grieving. A God who is sovereign is a God who can be trusted in the dark.",
      "The Heidelberg Catechism&rsquo;s very first question and answer captures this Reformed spirit better than any treatise. &ldquo;What is your only comfort in life and in death?&rdquo; The answer: &ldquo;That I am not my own, but belong &mdash; body and soul, in life and in death &mdash; to my faithful Savior Jesus Christ.&rdquo; The sovereignty of God is, at bottom, the assurance of belonging to One who is strong enough to keep what he has claimed.",
      "Reformed theology traces God&rsquo;s sovereignty through three great works. In providence, God governs all of creation &mdash; not merely setting the world in motion but sustaining and directing every moment of it. In election, God chooses a people for himself before the foundation of the world. And in salvation, God both accomplishes redemption through the cross and applies it to his people by the Spirit. Sovereignty is not one doctrine among many; it is the thread that runs through all of them.",
      "The hardest objection, of course, concerns human freedom and responsibility. If God ordains all things, how can human choices be genuinely free, and how can anyone be justly held responsible? Reformed theology answers this tension with the concept of &ldquo;compatibilism&rdquo; &mdash; the claim that God&rsquo;s sovereignty and genuine human responsibility are compatible, not contradictory. Human beings really choose, and choose freely in the sense that matters morally; yet their choices fall within, and never frustrate, the larger purpose of God.",
      "This does not dissolve every mystery, and the best Reformed thinkers have not pretended that it does. They have been content to affirm both truths that Scripture affirms &mdash; that God reigns and that human beings are accountable &mdash; without forcing a tidy resolution that Scripture itself does not offer. The result is a theology that holds firmly to God&rsquo;s rule while taking human action with full seriousness, and that finds in this combination not a problem to be solved but a comfort to be received.",
    ],
  },
  {
    id: "The Five Points (TULIP)",
    heading: "The Five Points (TULIP)",
    paragraphs: [
      "The &ldquo;five points of Calvinism&rdquo; are probably the most famous &mdash; and most misunderstood &mdash; feature of Reformed theology. It is important to know that they did not arise as a summary of Calvin&rsquo;s own thought. Calvin never wrote them. They emerged later, as a response to the five points of the Arminian Remonstrance, debated and answered at the Synod of Dort (1618&ndash;19). The five points are reactive: they are the Reformed reply to five specific Arminian proposals.",
      "The points are remembered by the acronym TULIP. The first is Total Depravity: sin has affected every part of human nature &mdash; mind, will, affections &mdash; so thoroughly that no one, left to himself, seeks God. This does not mean people are as wicked as they could possibly be, but that no aspect of human nature is untouched by the fall, and that no one is able to save himself.",
      "The second is Unconditional Election: God chose to save a people not on the basis of any foreseen merit or faith in them, but according to the free purpose of his own will. Election rests on God&rsquo;s grace, not on anything attractive or deserving in the chosen. The third is Limited Atonement &mdash; better called &ldquo;particular redemption&rdquo; &mdash; the teaching that Christ&rsquo;s death actually accomplished salvation for his people, rather than merely making salvation possible for everyone in general while securing it for no one in particular.",
      "The fourth is Irresistible Grace, better named &ldquo;effectual calling.&rdquo; When God calls his elect to himself, his grace effectively brings them to faith; it does not merely offer a possibility that the sinner might accept or refuse, but actually accomplishes the conversion it intends. The fifth is the Perseverance of the Saints: those whom God saves, he keeps. True believers will persevere to the end, not because their grip on God is strong, but because his grip on them is.",
      "Each point is, in the Reformed understanding, a logical extension of the others. If human beings are totally unable to save themselves, then salvation must originate in God&rsquo;s free choice (election); that choice is secured by an atonement that actually redeems (particular redemption); applied by a grace that actually converts (effectual calling); and preserved by a God who actually keeps (perseverance). The five points hang together as a single coherent account of grace from beginning to end.",
      "It is worth stressing that each point is grounded, in Reformed exposition, in specific biblical texts that the tradition expounds at length &mdash; Romans 9, Ephesians 1, John 6 and 10, and many others. The points are not philosophical deductions imposed on Scripture but, in the Reformed view, summaries drawn out of it. Whether one finds that exposition persuasive is precisely the substance of the long debate that follows. But the points are best understood not as slogans to be cheered or jeered, but as careful claims to be weighed against the text.",
    ],
  },
  {
    id: "Covenant Theology",
    heading: "Covenant Theology",
    paragraphs: [
      "Reformed theology reads the whole Bible through the lens of covenant &mdash; the binding relationships God establishes with his people. Where some traditions read Scripture as a collection of episodes, the Reformed read it as a single unfolding story held together by God&rsquo;s covenant commitments. The covenant is the architecture of redemptive history; it is how the many parts of Scripture cohere into one drama of grace.",
      "The classic Reformed scheme identifies two principal covenants in history. The first is the covenant of works: God&rsquo;s arrangement with Adam before the fall, in which life was promised on condition of obedience. The second, and the one that now governs the whole story, is the covenant of grace: God&rsquo;s saving arrangement after the fall, in which life is given freely through a Mediator. Where the covenant of works asked obedience and met failure, the covenant of grace gives what it demands.",
      "The covenant of grace unfolds progressively through the great figures of Scripture &mdash; Noah, Abraham, Moses, David &mdash; each administration adding clarity and scope, until the whole reaches its fulfillment in Christ. The promises made to Abraham, the law given through Moses, the throne promised to David: all of these are stages in one developing covenant, not competing systems. They are chapters in a single book whose final chapter is Christ.",
      "Behind these historical covenants, many Reformed theologians posit a yet deeper one: the covenant of redemption &mdash; an eternal agreement among the persons of the Trinity to save a people. In this eternal pact, the Father gives a people to the Son, the Son agrees to redeem them, and the Spirit agrees to apply that redemption. Salvation, on this view, is not an afterthought or an emergency measure but the outworking in time of a plan settled in eternity within God himself.",
      "Covenant theology emphasizes, above all, the unity of God&rsquo;s plan across both testaments. There is one people of God, not two; one way of salvation &mdash; grace through faith &mdash; in both the Old Testament and the New. Abraham was justified by faith (Romans 4), just as believers are today. The difference between the testaments is one of clarity and fulfillment, not of fundamental method. The same gospel runs through the whole Bible, dimly in the shadows of the law and brightly in the light of Christ.",
      "This covenantal framework has practical consequences. It grounds the Reformed practice of infant baptism: as circumcision was the sign of the covenant applied to the children of believers under the old administration, so baptism is the corresponding sign under the new. And it shapes the Reformed understanding of the church (the covenant community), the sacraments (the covenant signs), and the Christian life (covenant faithfulness in response to covenant grace). Covenant is not one Reformed doctrine among many; it is the lens through which the tradition reads everything.",
    ],
  },
  {
    id: "Calvinism and Arminianism",
    heading: "Calvinism and Arminianism",
    paragraphs: [
      "The most enduring debate in Protestant theology is between Calvinism and Arminianism. The latter is named for Jacobus Arminius (1560&ndash;1609), a Dutch theologian who, working within the Reformed church, came to question several aspects of its teaching on salvation. After his death, his followers set out their objections in the Remonstrance of 1610, and the controversy has continued, in one form or another, for four centuries since.",
      "The core difference concerns the relationship between God&rsquo;s sovereignty and human freedom in salvation. Both sides affirm that human beings are sinful and that salvation is by grace; the dispute is over the nature and reach of that grace. The two systems are best understood not as belief in grace versus disbelief in grace, but as two accounts of how grace operates and how far human choice enters in.",
      "Calvinism holds that God&rsquo;s electing grace is the decisive cause of salvation: God chooses his people, calls them effectually, and keeps them to the end. The initiative and the accomplishment belong to God. Arminianism holds that God&rsquo;s grace, while genuinely necessary, is finally resistible: election is based on God&rsquo;s foreknowledge of who will believe; Christ died for all without exception; and true believers can, by persistent unbelief, fall away from grace. Where the Calvinist sees grace as ultimately determining, the Arminian sees it as enabling but not compelling.",
      "It is essential to recognize that both positions are held by serious, Bible-believing Christians, and have been across the centuries. The Calvinist can point to John Calvin, Jonathan Edwards, Charles Spurgeon, and J.I. Packer; the Arminian can point to John Wesley, the whole Methodist tradition, and a great cloud of evangelical witnesses. This is not a contest between the faithful and the faithless but a disagreement within the family of grace.",
      "The debate has been conducted, over four centuries, with both great rigor and, at times, regrettable rancor. At its best, it has sharpened both sides and driven each deeper into Scripture; at its worst, it has produced caricature, suspicion, and division between people who confess the same Lord. Many Christians, it should be noted, hold positions somewhere between the two poles &mdash; affirming aspects of each, or declining to systematize where Scripture seems to hold both truths in tension.",
      "Charitable engagement recognizes the genuine biblical concerns on both sides. The Calvinist is jealous to guard the freedom and glory of God&rsquo;s grace, lest salvation be made to depend on the sinner; the Arminian is jealous to guard the sincerity of God&rsquo;s universal offer and the reality of human responsibility, lest God be made the author of sin. Each is trying to honor something Scripture clearly teaches. The wise Christian engages the strongest form of the other view, not a straw man, and remembers that those on the other side of this debate are not opponents to be defeated but brothers and sisters to be loved.",
    ],
  },
];

const videoItems = [
  { videoId: "0qg7sFZyADc", title: "R.C. Sproul — What Is Reformed Theology?" },
  { videoId: "qz0X0d6dmKw", title: "TULIP — The Five Points of Calvinism Explained" },
  { videoId: "iVgZSjbZj3o", title: "Calvinism vs. Arminianism — The Debate Explained" },
];

export default function ChristianReformedTheologyGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);
  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.75rem" };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: ACCENT, textTransform: "uppercase" }}>Christian Theology</span>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, margin: "0.75rem 0 1rem" }}>
            Reformed Theology Guide
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680, margin: 0 }}>
            An introduction to Reformed theology &mdash; the legacy of John Calvin, the sovereignty of God, the five points of Calvinism (TULIP), covenant theology, and the long debate between Calvinism and Arminianism.
          </p>
        </header>

        <nav style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)}
              style={{
                padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t ? ACCENT : "transparent",
                color: tab === t ? "#fff" : MUTED,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                cursor: "pointer", transition: "all .18s",
              }}>
              {t}
            </button>
          ))}
        </nav>

        {currentSection && (
          <article style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.4rem", marginBottom: "1.25rem", color: ACCENT }}>{currentSection.heading}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p key={i} style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "1.02rem" }} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>
          </article>
        )}

        {tab === "Videos" && (
          <section style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.4rem", marginBottom: "1.25rem", color: ACCENT }}>Video Teaching</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {videoItems.map((v) => (
                <div key={v.videoId}>
                  <div style={{ fontWeight: 700, color: TEXT, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{v.title}</div>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                </div>
              ))}
            </div>
          </section>
        )}

        <aside style={{ marginTop: "2.5rem", padding: "1.5rem 1.75rem", background: `${ACCENT}0F`, border: `1px solid ${ACCENT}33`, borderRadius: 16 }}>
          <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontSize: "1.02rem" }} dangerouslySetInnerHTML={{ __html: "Soli Deo gloria &mdash; glory to God alone. At its heart, Reformed theology is not a set of cold abstractions but a vision of a sovereign, gracious God whose grip on his people does not let go &mdash; and a summons to honor him in every square inch of life." }} />
        </aside>
      </main>
    </div>
  );
}
