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
  "A Letter from Prison",
  "Onesimus the Runaway",
  "An Appeal of Love",
  "No Longer a Slave but a Brother",
  "The Gospel and Reconciliation",
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
    id: "A Letter from Prison",
    heading: "A Letter from Prison",
    reference: "Philemon 1&ndash;7",
    paragraphs: [
      "The Letter to Philemon is the shortest of Paul&rsquo;s letters, a single page of just twenty-five verses, yet it is one of the most tender and personal documents in all of Scripture. It is not a treatise on doctrine or a corrective to a wayward church, but a private letter written about a single man &mdash; a runaway slave named Onesimus. In this brief note we see the gospel at work not in the abstract, but in the messy realities of a broken human relationship.",
      "Paul writes as &ldquo;a prisoner for Christ Jesus&rdquo; (v. 1), most likely from his imprisonment in Rome, around the same time he wrote Colossians. He does not appeal to his apostolic authority or his official office; instead he calls himself a prisoner, an old man, and a friend. The letter is addressed to Philemon, &ldquo;our beloved fellow worker&rdquo; (v. 1), along with Apphia, Archippus, and the church that meets in Philemon&rsquo;s house &mdash; for though the matter is personal, it is also a concern of the whole community.",
      "Philemon was a wealthy believer in Colossae, almost certainly converted under Paul&rsquo;s own ministry, who hosted a church in his home and was known for his generosity and faith. Paul opens, as he so often does, with warm thanksgiving: &ldquo;I thank my God always when I remember you in my prayers&rdquo; (v. 4), because he hears of Philemon&rsquo;s love and faith toward the Lord Jesus and all the saints.",
      "Paul commends the genuine fruit of Philemon&rsquo;s faith, praying &ldquo;that the sharing of your faith may become effective for the full knowledge of every good thing that is in us for the sake of Christ&rdquo; (v. 6). He adds a heartfelt note of encouragement: &ldquo;I have derived much joy and comfort from your love, my brother, because the hearts of the saints have been refreshed through you&rdquo; (v. 7). Philemon is a man whose Christianity is visible in deeds of love.",
      "These opening words are not mere flattery; they lay the foundation for the request that is coming. Paul reminds Philemon of who he already is &mdash; a man who refreshes the hearts of the saints &mdash; before asking him to do something extraordinarily costly and counter-cultural. The whole letter is a masterclass in how love appeals to love, and how the gospel reshapes the way believers treat one another, even across the deepest social divides of the ancient world.",
    ],
  },
  {
    id: "Onesimus the Runaway",
    heading: "Onesimus the Runaway",
    reference: "Philemon 10&ndash;11",
    paragraphs: [
      "At the heart of the letter is a man named Onesimus. He was a slave in the household of Philemon who had run away &mdash; and, it seems, had wronged his master in the process, perhaps stealing from him to fund his escape (v. 18). In the Roman world, a runaway slave faced terrible consequences: branding, imprisonment, or even death. Onesimus was a fugitive with everything to fear, a man who had broken both the law and the trust of his master.",
      "Somehow, in the providence of God, this runaway came into contact with the imprisoned Paul. Perhaps he sought out the apostle deliberately, or perhaps their paths crossed by what looked like chance. However it happened, the encounter changed everything: Onesimus heard the gospel from Paul and was converted to faith in Christ. Paul calls him &ldquo;my child, Onesimus, whose father I became in my imprisonment&rdquo; (v. 10) &mdash; born again behind prison walls.",
      "Paul makes a delightful play on the man&rsquo;s name. Onesimus means &ldquo;useful&rdquo; or &ldquo;profitable&rdquo; in Greek, a common name for a slave. Paul writes, &ldquo;Formerly he was useless to you, but now he is indeed useful to you and to me&rdquo; (v. 11). The slave who had been worse than useless &mdash; a runaway and a thief &mdash; has been transformed by grace into one who now lives up to his name, made truly profitable through the change Christ has worked in his heart.",
      "Onesimus had become so dear and helpful to Paul that the apostle would gladly have kept him close as a companion and helper in the gospel. &ldquo;I would have been glad to keep him with me, in order that he might serve me on your behalf during my imprisonment for the gospel&rdquo; (v. 13). The once-worthless fugitive had become a treasured fellow servant, a living testimony to the power of the gospel to redeem and remake a life.",
      "Yet Paul knew that the matter could not simply be left there. Onesimus was still, in the eyes of the law and of his master, a runaway slave who had fled his obligations. For genuine reconciliation to take place, he had to return. So Paul sends him back to Colossae &mdash; not as a captured fugitive dragged home in chains, but bearing this letter, and carrying with him the apostle&rsquo;s heartfelt appeal: &ldquo;I am sending him back to you, sending my very heart&rdquo; (v. 12).",
    ],
  },
  {
    id: "An Appeal of Love",
    heading: "An Appeal of Love",
    reference: "Philemon 8&ndash;14",
    paragraphs: [
      "The way Paul makes his request reveals the gentleness of the gospel at work in him. As an apostle, he could have simply commanded Philemon to receive Onesimus: &ldquo;Though I am bold enough in Christ to command you to do what is required&rdquo; (v. 8). Paul had the authority. But he deliberately sets it aside, choosing the harder and better path of appeal. &ldquo;Yet for love&rsquo;s sake I prefer to appeal to you&rdquo; (v. 9).",
      "He appeals as &ldquo;Paul, an old man and now a prisoner also for Christ Jesus&rdquo; (v. 9). Rather than pulling rank, he leans on relationship and affection, presenting himself as an aged friend in chains. He wants Philemon&rsquo;s obedience to flow not from compulsion but from a willing heart: &ldquo;in order that your goodness might not be by compulsion but of your own accord&rdquo; (v. 14). The gospel produces a glad and free obedience, not a grudging one.",
      "There is a profound principle here about Christian persuasion. Paul understood that a good deed forced is not the same as a good deed freely given. He could have extracted compliance through authority, but he wanted something deeper &mdash; a transformation of Philemon&rsquo;s heart that would freely choose love. So he reasons, he pleads, he reminds, and he trusts the Spirit to move his friend rather than coercing him.",
      "Paul&rsquo;s tenderness toward Onesimus shines through every line. He calls him &ldquo;my very heart&rdquo; (v. 12), expressing how dear the new convert has become to him. To send him back is a genuine sacrifice; Paul would have loved to keep this useful brother near. But he refuses to make the decision for Philemon. &ldquo;I preferred to do nothing without your consent&rdquo; (v. 14), he writes, honoring his friend even as he hopes for the right outcome.",
      "In all of this, Paul models the way Christians are to deal with one another &mdash; not lording authority over each other, but appealing to love, treating one another as beloved brothers and sisters whose hearts matter. He wraps his request in courtesy, affection, and respect, giving Philemon every reason to say yes, yet leaving the choice truly his. It is a portrait of how grace, not law, governs relationships in the family of God.",
    ],
  },
  {
    id: "No Longer a Slave but a Brother",
    heading: "No Longer a Slave but a Brother",
    reference: "Philemon 15&ndash;20",
    paragraphs: [
      "The heart of Paul&rsquo;s appeal arrives in verses 15 and 16, where he reframes the entire situation in the light of God&rsquo;s providence. Perhaps, Paul suggests, Onesimus was parted from Philemon for a little while &ldquo;that you might have him back forever, no longer as a slave but more than a slave, as a beloved brother&rdquo; (v. 15&ndash;16). What looked like loss and betrayal was being woven by God into something far greater than either man could have planned.",
      "This is the radical heart of the letter. Onesimus is to be welcomed back &ldquo;no longer as a slave but more than a slave, as a beloved brother &mdash; especially to me, but how much more to you, both in the flesh and in the Lord&rdquo; (v. 16). The relationship of master and slave is to be utterly transformed. The two men are now brothers in Christ, sharing the same Father, the same Savior, the same eternal inheritance. The deepest bond between them is no longer ownership but family.",
      "Paul presses the point with a striking request: &ldquo;So if you consider me your partner, receive him as you would receive me&rdquo; (v. 17). Onesimus is to be welcomed home with the same warmth and honor that Philemon would extend to the apostle himself. The runaway slave is to be received as if he were Paul &mdash; an astonishing elevation of a man who, days earlier, had been a fugitive criminal.",
      "Then Paul makes one of the most beautiful gestures in the New Testament. Acknowledging that Onesimus may have wronged or robbed Philemon, he writes, &ldquo;If he has wronged you at all, or owes you anything, charge that to my account&rdquo; (v. 18). Taking up the pen himself, he adds, &ldquo;I, Paul, write this with my own hand: I will repay it&rdquo; (v. 19). Paul offers to pay the debt of another, stepping in to absorb the cost of Onesimus&rsquo;s wrongdoing so the relationship can be restored.",
      "With a gentle touch of holy pressure, Paul reminds Philemon, &ldquo;to say nothing of your owing me even your own self&rdquo; (v. 19) &mdash; for Philemon owed his very salvation to Paul&rsquo;s ministry. Then he closes the appeal with warmth: &ldquo;Yes, brother, I want some benefit from you in the Lord. Refresh my heart in Christ&rdquo; (v. 20). The man who refreshes the hearts of the saints is asked to refresh the heart of his friend once more, by receiving a brother home.",
    ],
  },
  {
    id: "The Gospel and Reconciliation",
    heading: "The Gospel and Reconciliation",
    reference: "Philemon 17&ndash;25",
    paragraphs: [
      "Though Philemon is a brief and personal letter, it carries within it the whole logic of the gospel. In Paul&rsquo;s offer to pay Onesimus&rsquo;s debt we see a living picture of what Christ has done for us. Onesimus, the guilty runaway, cannot pay what he owes; so a mediator steps in and says, &ldquo;Charge that to my account&hellip; I will repay&rdquo; (v. 18&ndash;19). In just the same way, Christ took upon himself the debt of our sin, paying with his own life what we never could, that we might be received by the Father.",
      "Here is the great exchange at the heart of the faith. We come to God as Onesimus came to Philemon &mdash; guilty, indebted, with no claim of our own. But Christ presents us to the Father with the words, in effect, &ldquo;Receive him as you would receive me.&rdquo; Clothed in Christ&rsquo;s righteousness and with our debt charged to his account, we are welcomed not as condemned criminals but as beloved sons and daughters. Philemon is the gospel told in miniature, through the story of one runaway slave.",
      "The letter also shows the gospel&rsquo;s power to dismantle the deepest divisions of society. In the Roman world, the gulf between master and slave was absolute. Yet here Paul declares that in Christ that gulf is bridged: the two are now brothers, equal members of one family, called to love one another. Without staging a political revolt, the gospel quietly plants a seed that would, in time, undermine the very institution of slavery &mdash; for how can a man own his own brother?",
      "Reconciliation is the great theme of this little letter. Sin had fractured the relationship between Onesimus and Philemon, just as sin fractures every human bond. But the gospel reconciles &mdash; first to God, and then to one another. Paul labors to bring two estranged men back together in love, mirroring the ministry of reconciliation that God has entrusted to all his people, who have themselves been reconciled to God through Christ.",
      "Paul ends with confidence and warmth: &ldquo;Confident of your obedience, I write to you, knowing that you will do even more than I say&rdquo; (v. 21). He asks Philemon to prepare a guest room, hoping to visit soon, and sends greetings from his fellow workers. Though we are never told how Philemon responded, the very preservation of this letter in the church&rsquo;s Scriptures strongly suggests that he received Onesimus home as a brother. The gospel had done its reconciling work, turning a runaway slave and an offended master into two brothers in the Lord &mdash; a lasting testimony that in Christ, no division is beyond healing.",
    ],
  },
];

const videoItems = [
  { videoId: "aD3i27Mk1c8", title: "BibleProject - Overview - Philemon" },
  { videoId: "uxsi6kEZmIM", title: "Philemon - The Letter to a Slave Owner Explained" },
  { videoId: "qsVR_yc4UM0", title: "Onesimus and Forgiveness - Philemon Bible Study" },
  { videoId: "1grzS0a1Y2c", title: "The Gospel of Reconciliation in Philemon" },
];

export default function ChristianBookOfPhilemonGuidePage() {
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
            The Book of Philemon
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul&rsquo;s shortest and most personal letter &mdash; a tender appeal on behalf of Onesimus, the runaway slave turned beloved brother, in which the gospel transforms a master-slave relationship into family and displays its power to reconcile.
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
              Deepen your study of Philemon through visual teaching on Paul&rsquo;s tender appeal, the story of Onesimus the runaway slave, and the gospel&rsquo;s power to reconcile and to make brothers of those once divided.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Charge That to My Account</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            In this little letter the whole gospel shines: a guilty runaway who cannot pay his debt, a mediator who says &ldquo;charge that to my account,&rdquo; and a welcome offered as though to Paul himself. So Christ takes our debt upon his own account and presents us to the Father as beloved &mdash; turning enemies into brothers and displaying forever the reconciling power of grace.
          </p>
        </div>
      </main>
    </div>
  );
}
