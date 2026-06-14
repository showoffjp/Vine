"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Shepherd the Flock of God",
  "Clothe Yourselves with Humility",
  "Cast Your Anxieties on Him",
  "Your Adversary the Devil",
  "The God of All Grace",
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
    id: "Shepherd the Flock of God",
    heading: "Shepherd the Flock of God",
    reference: "1 Peter 5:1&ndash;4",
    paragraphs: [
      "Having spent four chapters preparing scattered and suffering believers to stand firm under trial, Peter turns in his final chapter to the leaders of those churches: &ldquo;So I exhort the elders among you, as a fellow elder and a witness of the sufferings of Christ, as well as a partaker in the glory that is going to be revealed&rdquo; (5:1). He does not write down to them from a height but alongside them as a &ldquo;fellow elder,&rdquo; one who has himself seen the Lord suffer and who waits, with them, for the glory to come. The tone is pastoral, tender, and weighty.",
      "His central charge is simple and rich: &ldquo;shepherd the flock of God that is among you, exercising oversight&rdquo; (5:2). The image of shepherding runs deep in Scripture, reaching back to David and the prophets and forward to Christ the Good Shepherd. It reminds every leader that the people are not their own possession but &ldquo;the flock of God&rdquo; &mdash; a flock that belongs to another, entrusted to their care. To shepherd is to feed, guide, guard, and tend the sheep with patient, watchful love.",
      "Peter then sets out three contrasts that mark true spiritual leadership. First, elders are to serve &ldquo;not under compulsion, but willingly, as God would have you&rdquo; (5:2). The work is to be done not as a grudging duty but with a glad and free heart. The shepherd who serves only because he must will sooner or later resent the sheep; the shepherd who serves willingly tends them as a joy.",
      "Second, they are to serve &ldquo;not for shameful gain, but eagerly&rdquo; (5:2). Leadership in the church is not a path to personal profit or advantage. The shepherd who eyes the flock for what he can get from it has already betrayed his trust. Instead, the elder is to throw himself eagerly into the work, motivated not by money or status but by love for Christ and his people.",
      "Third, they are to lead &ldquo;not domineering over those in your charge, but being examples to the flock&rdquo; (5:3). Christian authority is never the heavy-handed rule of a tyrant lording it over others. It leads from the front by example, not from above by force. The true shepherd shows the way of humility, faith, and obedience by walking in it himself, so that the sheep follow not because they are driven but because they are drawn.",
      "All of this rests on a glorious hope: &ldquo;And when the chief Shepherd appears, you will receive the unfading crown of glory&rdquo; (5:4). Every elder is an under-shepherd serving beneath the Chief Shepherd, Jesus Christ, who will one day appear. The reward for faithful service is not earthly recognition, which fades, but an unfading crown of glory from the Lord himself. Leaders who shepherd God&rsquo;s flock with willing, eager, humble, exemplary love serve with their eyes fixed on that day.",
    ],
  },
  {
    id: "Clothe Yourselves with Humility",
    heading: "Clothe Yourselves with Humility",
    reference: "1 Peter 5:5&ndash;6",
    paragraphs: [
      "From elders Peter turns to the whole congregation, beginning with the young: &ldquo;Likewise, you who are younger, be subject to the elders&rdquo; (5:5). The health of the church depends not only on leaders who shepherd well but on a people who receive that shepherding with a teachable, submissive spirit. Yet Peter quickly broadens the appeal beyond any one group, for the virtue he is after belongs to everyone.",
      "&ldquo;Clothe yourselves, all of you, with humility toward one another&rdquo; (5:5). The word translated &ldquo;clothe&rdquo; pictures tying on a garment or an apron, the dress of a servant &mdash; an image that surely recalled for Peter the night his Lord girded himself with a towel and washed the disciples&rsquo; feet. Humility is to be put on deliberately, like clothing, and worn in every relationship within the body of Christ. It is not a mood that comes and goes but a settled posture toward one another.",
      "Peter grounds this command in a quotation from Proverbs that cuts to the heart: &ldquo;God opposes the proud but gives grace to the humble&rdquo; (5:5). This is one of the great spiritual principles of the whole Bible. Pride sets a person against God himself, for the proud heart claims a place that belongs to God alone, and God actively resists it. But to the humble &mdash; those who know their need and look to him &mdash; God delights to give grace. The way up, in God&rsquo;s kingdom, is always down.",
      "So Peter draws the application: &ldquo;Humble yourselves, therefore, under the mighty hand of God so that at the proper time he may exalt you&rdquo; (5:6). The &ldquo;mighty hand of God&rdquo; is an Old Testament phrase for God&rsquo;s sovereign power, the hand that delivered Israel and that also disciplines and shapes his people. To humble ourselves under that hand is to accept God&rsquo;s dealings with us &mdash; including hardship and lowliness &mdash; as coming from a wise and powerful Father, rather than struggling and grasping for our own exaltation.",
      "The promise attached is precious: God himself will do the exalting, and he will do it &ldquo;at the proper time.&rdquo; The humble do not need to push themselves forward or anxiously defend their standing; they can entrust their future to God, confident that he lifts up the lowly in his own perfect timing. This was the very pattern of Christ, who humbled himself even to death on a cross and whom God therefore highly exalted. The servant follows the same path: down into humility now, and up into glory at the time God appoints.",
      "Humility, then, is not weakness or self-contempt but a clear-eyed trust in God that frees us from the exhausting work of self-promotion. It allows believers to serve one another gladly, to receive correction without bristling, and to leave the question of their own honor entirely in God&rsquo;s hands. Clothed in this garment, the church becomes a place of peace rather than rivalry, where each prefers the other and all look together to the God who gives grace to the lowly.",
    ],
  },
  {
    id: "Cast Your Anxieties on Him",
    heading: "Cast Your Anxieties on Him",
    reference: "1 Peter 5:7",
    paragraphs: [
      "Out of the command to humble ourselves under God&rsquo;s mighty hand flows one of the most beloved verses in all of Scripture: &ldquo;casting all your anxieties on him, because he cares for you&rdquo; (5:7). In the original, this is not a separate sentence but a phrase attached to &ldquo;humble yourselves&rdquo; &mdash; which tells us something profound. Casting our cares on God is itself an act of humility; clinging to them is a subtle form of pride, an attempt to carry what only God can bear.",
      "The word &ldquo;casting&rdquo; is vivid &mdash; it means to throw off, to hurl, to deliberately transfer a burden from ourselves onto another. Anxiety is pictured as a heavy load we are bent under, and the call is to fling that whole weight onto God. It is a decisive, repeated act of the will: again and again, as the worries return, we throw them back upon the Lord rather than letting them settle as a crushing weight upon our own shoulders.",
      "And the scope is sweeping: &ldquo;all your anxieties.&rdquo; Nothing is excluded &mdash; not the great fears nor the small nagging cares, not the burdens of the suffering churches to whom Peter wrote nor the private worries of an individual heart. Every anxiety, of every kind, is meant to be cast upon God. He does not ask us to sort our worries into those worth bringing and those too trivial; he invites us to bring them all.",
      "The reason given is the heart of the matter: &ldquo;because he cares for you.&rdquo; We can cast our cares on God precisely because he is not indifferent to us. The sovereign Lord, whose mighty hand orders all things, bends toward his people with personal, tender concern. He is not a distant force to be feared but a Father who cares. The same hand under which we humble ourselves is the hand into which we may pour out every fear, knowing it is moved by love for us.",
      "This transforms the way believers face anxiety. The world says to manage worry by control, by distraction, or by sheer willpower; Peter says to transfer it &mdash; to take the burden too heavy for us and place it on the One strong enough and loving enough to carry it. Prayer becomes the great act of casting, the moment by moment handing over of our cares to God. We are not promised a life free of trouble, but we are promised that we need not bear its weight alone.",
      "Peter wrote these words to Christians facing real suffering and uncertainty, scattered as exiles and threatened with persecution. To such people anxiety was no abstract problem. Yet his counsel was not to deny their fears but to redirect them &mdash; to take the very real cares pressing upon them and cast them, all of them, upon a God who genuinely cares. For every believer who has lain awake under the weight of worry, this verse remains one of the sweetest invitations in the Bible: hand it over to him, for he cares for you.",
    ],
  },
  {
    id: "Your Adversary the Devil",
    heading: "Your Adversary the Devil",
    reference: "1 Peter 5:8&ndash;9",
    paragraphs: [
      "Having urged believers to cast their anxieties on God, Peter does not leave them careless. In the very next breath he sounds an alarm: &ldquo;Be sober-minded; be watchful. Your adversary the devil prowls around like a roaring lion, seeking someone to devour&rdquo; (5:8). Casting our cares on God is not the same as dropping our guard. The Christian rests in God&rsquo;s care precisely so that he can be alert and clear-headed in the face of a real and dangerous enemy.",
      "&ldquo;Be sober-minded; be watchful&rdquo; calls for spiritual clarity and vigilance. The believer is not to be drowsy, distracted, or intoxicated with the comforts and worries of this world, but awake and watchful like a soldier on duty. Spiritual danger does not announce itself loudly; it requires a sober mind to discern the enemy&rsquo;s approach and a watchful heart to resist him before he strikes.",
      "The enemy is named plainly: &ldquo;your adversary the devil.&rdquo; The word adversary means an opponent in a lawsuit, one who stands against us; the name devil means slanderer or accuser. He is real, personal, and hostile, set against the people of God. Peter does not allow believers the false comfort of pretending the battle is merely against their own weakness or against other people; behind the trials of the church stands a spiritual enemy who actively opposes Christ and his flock.",
      "The picture is fearsome: he &ldquo;prowls around like a roaring lion, seeking someone to devour.&rdquo; The roaring lion is on the hunt, looking for the straggler, the isolated, the careless sheep. His aim is not to wound but to devour &mdash; to destroy faith, to drag down into sin and despair. For believers already suffering, the great danger was that persecution and fear might be used by the enemy to swallow up their faith altogether. The lion roars loudest where the sheep are weakest.",
      "Yet Peter&rsquo;s word is not finally fear but resistance: &ldquo;Resist him, firm in your faith&rdquo; (5:9). The believer is not helpless prey. The lion may roar, but he is to be resisted &mdash; stood up to, refused, withstood &mdash; by those who stand firm in their faith. Faith is the ground on which we plant our feet against him: not confidence in ourselves, but trust in the God who is stronger than every enemy. The same God on whom we cast our cares is the God in whose strength we resist the devil.",
      "And Peter reminds the scattered churches that they do not suffer alone: &ldquo;knowing that the same kinds of suffering are being experienced by your brotherhood throughout the world&rdquo; (5:9). The roaring lion would isolate his victims, but the truth is that the whole worldwide family of believers is enduring the same trials and resisting the same enemy. There is strength in knowing that we stand not as solitary sheep but as part of a great flock, resisting together, firm in a common faith, under the care of one Shepherd.",
    ],
  },
  {
    id: "The God of All Grace",
    heading: "The God of All Grace",
    reference: "1 Peter 5:10&ndash;14",
    paragraphs: [
      "After the warning of the roaring lion, Peter lifts the believers&rsquo; eyes to a magnificent promise: &ldquo;And after you have suffered a little while, the God of all grace, who has called you to his eternal glory in Christ, will himself restore, confirm, strengthen, and establish you&rdquo; (5:10). The whole weight of the chapter &mdash; the suffering, the humility, the anxiety, the spiritual warfare &mdash; comes to rest at last on the character of God himself, the &ldquo;God of all grace.&rdquo;",
      "Notice first how Peter frames the suffering: &ldquo;after you have suffered a little while.&rdquo; He does not deny the reality or the pain of the trials, but he sets them against the backdrop of eternity. Measured against the &ldquo;eternal glory&rdquo; to which God has called us in Christ, even severe and lasting affliction is &ldquo;a little while.&rdquo; This is the same perspective that ran through the whole letter: present suffering is real but temporary; the glory to come is real and unending.",
      "Then comes a cascade of promises, four strong verbs heaped one upon another to describe what God himself will do. He will &ldquo;restore&rdquo; &mdash; mend and make whole what suffering has broken. He will &ldquo;confirm&rdquo; &mdash; make firm and steady those who have been shaken. He will &ldquo;strengthen&rdquo; &mdash; supply power to the weak. He will &ldquo;establish&rdquo; &mdash; settle them on a sure foundation, immovable. The very trials the enemy means for destruction become, in God&rsquo;s hands, the means by which he makes his people strong and steadfast.",
      "And the emphatic word is &ldquo;himself&rdquo;: the God of all grace will &ldquo;himself&rdquo; do this work. It is not left to the believer&rsquo;s effort or endurance; God personally takes responsibility to bring his suffering people through and to perfect them. The same God under whose mighty hand they humble themselves, on whom they cast their cares, and in whose strength they resist the devil, will himself see to it that they are restored and established. Small wonder Peter bursts into doxology: &ldquo;To him be the dominion forever and ever. Amen&rdquo; (5:11).",
      "Peter closes the letter with personal greetings and a final summary of its purpose. He has written, he says, by Silvanus, &ldquo;exhorting and declaring that this is the true grace of God. Stand firm in it&rdquo; (5:12). The whole letter has been about the true grace of God &mdash; grace that meets us in suffering, grace given to the humble, grace that restores and strengthens. The believer&rsquo;s task is simply to stand firm in that grace. He sends greetings from the church in &ldquo;Babylon&rdquo; and from Mark, and bids them &ldquo;greet one another with the kiss of love&rdquo; (5:14).",
      "His final word is a benediction perfectly suited to the suffering saints to whom he wrote: &ldquo;Peace to all of you who are in Christ&rdquo; (5:14). After all the talk of humility and anxiety, of roaring lions and a little while of suffering, the letter ends in peace &mdash; the deep, settled peace that belongs to all who are in Christ. For those who humble themselves under God&rsquo;s mighty hand, cast their cares upon him, resist the enemy in faith, and rest in the God of all grace, the last word is not fear or striving but peace.",
    ],
  },
];

const videoItems = [
  { videoId: "WhP7AZQlzCg", title: "BibleProject - Overview - 1 Peter" },
  { videoId: "qGTUjAGW4VU", title: "Casting Your Anxieties on Him - 1 Peter 5" },
  { videoId: "5kxFXz_GxgU", title: "Clothe Yourselves with Humility - A Study of 1 Peter 5" },
  { videoId: "rN9zwaykuMM", title: "The God of All Grace - Suffering and Hope in 1 Peter" },
];

export default function FirstPeter5GuidePage() {
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
            1 Peter 5: Humility and Grace
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            A call to humble dependence on God &mdash; elders shepherding the flock of God, all clothing themselves with humility, casting every anxiety on the One who cares, standing firm against the adversary who prowls like a roaring lion, and resting at last in the God of all grace who restores and establishes his suffering people.
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
              Deepen your study of 1 Peter 5 through visual teaching on shepherding the flock, clothing yourself with humility, casting your anxieties on God, and resting in the God of all grace.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Humble Yourselves Under the Mighty Hand of God</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            1 Peter 5 gathers the burdens of the suffering Christian and answers them with grace. The proud are opposed, but grace is given to the humble; so we humble ourselves under God&rsquo;s mighty hand, cast our every anxiety on the One who cares, and resist the roaring lion firm in faith. And after a little while of suffering, the God of all grace will himself restore, confirm, strengthen, and establish us &mdash; to him be the dominion forever and ever.
          </p>
        </div>
      </main>
    </div>
  );
}
