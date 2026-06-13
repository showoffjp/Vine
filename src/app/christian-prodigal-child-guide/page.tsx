"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F"; const CARD = "#12121F"; const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB"; const TEXT = "#F2F2F8"; const MUTED = "#9898B3";

const TABS = [
  "The Parable Revisited",
  "Theology for Anguished Parents",
  "How to Pray",
  "Maintaining Relationship",
  "Grief, Shame, and Hope",
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
    id: "The Parable Revisited",
    heading: "The Parable Revisited",
    paragraphs: [
      "Luke 15:11&ndash;32 is the longest and most psychologically detailed of Jesus&rsquo;s parables. Most Christians know it as the story of a lost son who returns home &mdash; but read it as a parent&rsquo;s story, and it becomes something far more devastating and far more hopeful than a morality tale about repentance. The father in the parable is the hidden center of the narrative. The younger son may be its occasion; the father is its subject.",
      "The parable opens with a cultural scandal so severe that its first hearers would have gasped: the younger son demands his share of the inheritance while the father is still living. In the ancient Near Eastern world, this was tantamount to wishing the father dead. It was a public dishonor of the most severe kind, the kind that would have invited the entire community&rsquo;s condemnation. The father&rsquo;s decision to grant this request &mdash; without argument, without ultimatum, without extracting conditions &mdash; was itself extraordinary. He could not save his son by holding on. He let him go.",
      "The son&rsquo;s descent follows a tragic arc: &ldquo;a far country,&rdquo; wasting everything on reckless living, a famine, feeding pigs &mdash; for a Jewish audience, the ultimate image of degradation and ritual uncleanness. He has not just lost his money; he has lost his identity, his people, his world. The phrase &ldquo;coming to himself&rdquo; in verse 17 is one of the most significant in the New Testament. It is not yet repentance. It is the precondition of repentance: honest self-assessment, the moment when the lies a person has been telling themselves become unsustainable.",
      "&ldquo;While he was yet a great way off, his father saw him&rdquo; (v.20). This line contains everything. The father was watching. He had not stopped watching. He had not closed the gate, moved on with his life, or written the boy out of his heart. When the son appeared on the horizon &mdash; probably ragged, probably walking with the shame-posture of someone who knows he has forfeited his welcome &mdash; the father ran. In the ancient world, a man of dignity did not run. The father was past caring about dignity. The run, the robe (restoration of honor), the ring (authority), the fatted calf (celebration without a probationary period): lavish, unconditional welcome before a single word of confession had been heard.",
      "The older son&rsquo;s rage is the other half of the parable, and it is the half that is most often ignored. He has been faithful, obedient, and present &mdash; and he is furious that the returning wretch receives a party while he has never been celebrated. His anger is understandable. His father&rsquo;s response is not a rebuke but an invitation: &ldquo;Son, you are always with me, and all that I have is yours.&rdquo; The older son is as lost as his brother, in a different way. He has confused proximity to the father with relationship with the father. Both sons need to be found. The father goes to both.",
      "For parents of prodigal children, this parable is not merely a story about what God is like &mdash; though it is that. It is a story about parental love that lets go without giving up, that watches without controlling, that celebrates without conditions when the return finally comes. The father does not give a speech about the pain the son caused. He calls for the party first. There will be time for the hard conversation. But the father knows that the son must first believe he is still loved before any real change is possible.",
      "The parable ends without resolution for the older son. We do not know if he came to the party. The ending is deliberately open, because Jesus was telling it to religious leaders who were furious that he welcomed sinners &mdash; and inviting them to ask themselves which son they were. Parents of prodigal children are invited into the story not as observers but as participants: can we run toward the returning child before they have finished their apology? Can we throw the party before we process the wound? This is the hardest thing the parable asks.",
    ],
  },
  {
    id: "Theology for Anguished Parents",
    heading: "Theology for Anguished Parents",
    paragraphs: [
      "The question that haunts every parent of a prodigal is the one that cannot be spoken aloud in church: did I fail? Did my mistakes drive my child away? Is my child&rsquo;s departure from faith a verdict on my faithfulness as a parent? These questions deserve a theological answer, not a pastoral platitude, because the stakes are too high for easy comfort.",
      "The biblical answer is genuinely nuanced. Faithful parenting matters. Proverbs 22:6 &mdash; &ldquo;Train up a child in the way he should go; even when he is old he will not depart from it&rdquo; &mdash; is a real statement about the long-term formation that faithful parenting provides. But Proverbs is wisdom literature, not a contractual guarantee. Wisdom proverbs describe patterns and tendencies, not ironclad promises. They tell us what is generally true, not what is inevitably true in every case. A proverb is not a prophecy.",
      "The more radical biblical claim is that God himself has had prodigal children &mdash; and that his experience with them is the deepest comfort available to human parents. Israel repeatedly walked away from the God who chose them, loved them, rescued them from slavery, fed them in the wilderness, gave them the land, and sent them prophets. Hosea 11:1&ndash;2 captures the divine grief with aching precision: &ldquo;When Israel was a child, I loved him, and out of Egypt I called my son. The more they were called, the more they went away from me.&rdquo; God is not a failed parent. God&rsquo;s children walked away.",
      "Ezekiel 18:20 is the crucial theological text for parents who carry guilt: &ldquo;The soul who sins shall die. The son shall not suffer for the iniquity of the father, nor the father suffer for the iniquity of the son.&rdquo; This principle of individual moral accountability before God means that each person stands before God as an autonomous agent, responsible for their own choices. Your adult child&rsquo;s departure from faith is their choice, made with the freedom that God himself built into human beings. You did not make that choice. You cannot unmake it. Your faithfulness is judged on your own fidelity, not on the product you produced.",
      "This does not mean parental mistakes are irrelevant. Of course, patterns of hypocrisy, harshness, rigidity, or conditional love in a home shape children&rsquo;s relationship to faith. Self-examination is appropriate and healthy. But there is a crucial difference between examining your failures honestly and accepting a verdict of guilt for another person&rsquo;s choices. The first is humility. The second is a form of pride that overestimates your causal power in your child&rsquo;s life.",
      "The theology of human freedom &mdash; that each person is a moral agent who makes real choices for which they are genuinely responsible &mdash; is both the hardest truth and the most liberating one for parents of prodigals. It is the hardest because it means you cannot fix this. It is the most liberating because it means it is not your fault to fix. The child&rsquo;s freedom is the same freedom that makes their eventual return meaningful. A child who returned because they were manipulated or pressured into it has not really returned at all. The prodigal must &ldquo;come to himself.&rdquo; You cannot come to himself for him.",
      "The grief of God over his prodigal people &mdash; expressed across the prophetic literature with anguish that is unmistakably real &mdash; sanctifies the grief of parents who love children who have walked away. You are not alone in this grief. You are in the company of the Father himself, who is still watching, still waiting, still running when he sees them coming home a great way off.",
    ],
  },
  {
    id: "How to Pray",
    heading: "How to Pray",
    paragraphs: [
      "Praying for a prodigal child is one of the most sustained and painful forms of prayer a person can undertake. It is prayer that continues across months and years without visible answer. It is prayer that must resist the temptation to use God as a means to get what we want &mdash; our child back in the fold &mdash; rather than as the one who loves our child even more than we do and who is doing things in their life that we cannot see.",
      "The danger of formula prayer &mdash; treating God like a vending machine, inserting the right words or achieving the right level of fervor to produce the desired output &mdash; is especially acute when the stakes are this high. Formula prayer puts the weight on our performance. When the child does not return, we wonder what we did wrong in the prayer. The biblical model is not formula prayer but persistent, honest, relationally-grounded prayer that changes the one who prays even when the circumstance does not change.",
      "Luke 18:1&ndash;8, the parable of the unjust judge, is Jesus&rsquo;s own teaching on persistent prayer in the face of apparent non-answer. The widow who will not stop coming before the judge eventually receives justice. The point of the parable is not that God needs convincing &mdash; Jesus says explicitly that God is not like the unjust judge &mdash; but that persistent prayer shapes the one who prays. To keep bringing your child before God, week after week, year after year, is to keep trusting that God hears, that God acts, and that the story is not over. The prayer forms you even as it petitions God.",
      "What should you pray for? Not that God will force your child back &mdash; God does not override human freedom, and a forced return is not the return the father in the parable received. Pray that God will do whatever it takes to bring your child to themselves &mdash; to that moment of honest self-assessment that is the precondition of return. This may include hardship. The prodigal came to himself only after everything had fallen apart. Praying for your child&rsquo;s wholeness sometimes means being willing to pray that God would not shield them from the consequences of their own choices.",
      "The prayer of release is one of the most spiritually mature and most difficult prayers available to parents of prodigals. It means holding the child loosely &mdash; placing them explicitly in God&rsquo;s hands, committing them to his care, and releasing the death-grip of anxious controlling prayer that tries to micromanage the divine response. This is not giving up on the child. It is giving the child over to the one who can reach them where you cannot. Monica prayed for Augustine for decades, and those prayers were clearly marked by persistent intercession, but also by a surrender to God&rsquo;s timing that she did not control.",
      "Praying with others &mdash; a trusted friend, a prayer partner, a small group of parents in the same situation &mdash; distributes the weight of this long prayer across more than one life. Isolation in prayer for a prodigal child compounds the grief. Finding even one other person who will carry this prayer with you changes its texture. The psalms of lament are the prayer resources most appropriate for this season: Psalm 77 (&ldquo;I cried out to God for help; I cried out to God to hear me&rdquo;), Psalm 88 (the darkest psalm in the psalter, which ends in darkness with no resolution), and Psalm 130 (&ldquo;Out of the depths I cry to you, LORD; Lord, hear my voice&rdquo;) give language to what you are actually experiencing.",
      "One practical discipline: write your prayers for your child. Not the polished version, but the real one &mdash; the fear, the grief, the occasional anger, the bargaining, the moments of genuine trust. Writing the prayer makes it prayer rather than worry. It also creates a record that, when your child does return, you can look back on and see the faithfulness that sustained you through the long wait.",
    ],
  },
  {
    id: "Maintaining Relationship",
    heading: "Maintaining Relationship",
    paragraphs: [
      "The hardest practical question for parents of prodigal children is not theological but relational: how do you stay in relationship with a child who has rejected what you most deeply believe, who may be living in ways that conflict with your values, who may actively resent the faith that shaped your home? There is no easy answer, but there is a right direction, and the father in the parable points it.",
      "The father never stopped being the child&rsquo;s father. He never rescinded the possibility of return, never closed the door, never cut off the relationship as a consequence of the son&rsquo;s choices. He let the son go &mdash; he did not chase him to the far country, did not send money to rescue him from the pigsty, did not arrange an intervention with the son&rsquo;s friends. But he kept the door open, maintained his own identity as father, and watched. When the son appeared on the horizon, the father was not surprised to find himself running. He had been oriented toward that moment all along.",
      "There is a critical distinction between maintaining relationship and enabling harm. The father did not fund the son&rsquo;s second journey to the far country. Once the inheritance was spent, the father did not rescue the son from the consequences of his choices &mdash; in fact, the consequences were what brought the son to himself. You can love someone and refuse to finance their self-destruction. You can maintain relationship without becoming a co-dependent participant in patterns that harm your child or others. Clear limits are not a failure of love; they are an expression of it.",
      "The role of non-anxious presence is the most practically important thing a parent of a prodigal can cultivate. A parent who can be with the prodigal child &mdash; at a family dinner, in a phone call, during a holiday visit &mdash; without every moment becoming freighted with spiritual agenda, without every conversation becoming an opportunity for gentle evangelism, without the parent&rsquo;s anxiety filling the room like a second presence &mdash; is a parent whose company the child can actually bear. The anxious parent, however well-intentioned, communicates that they are not actually okay, that their sense of wellbeing is hostage to the child&rsquo;s choices, and that the child is responsible for the parent&rsquo;s emotional state. This is not a posture that keeps doors open.",
      "Avoiding the trap of making every interaction an evangelistic moment is essential for the long game. Prodigal children often leave partly because the faith they experienced felt like a performance requirement, a condition of parental approval, rather than a genuine relationship with the living God. If every contact with the parent now carries an implicit &ldquo;but when are you coming back to the Lord?&rdquo; it confirms that the faith was always about behavior management rather than love. The parent who can ask about the child&rsquo;s work, their friendships, their joys and struggles &mdash; without annexing the conversation to the spiritual agenda &mdash; is practicing something genuinely countercultural: love that is not contingent on agreement.",
      "The long game is exactly the right frame for thinking about maintaining relationship with a prodigal child. Years of patient, non-anxious, genuinely interested presence are being laid down like a foundation. They are not wasted years even if no visible spiritual movement is occurring. They are the years that make it possible for the child, when they eventually &ldquo;come to themselves,&rdquo; to think of home &mdash; to think of you &mdash; as a place of welcome rather than judgment. The father in the parable was able to run because he had been watching. The watching, the waiting, the sustained presence: these are the conditions that made the running possible.",
      "Seek pastoral and therapeutic support for yourself during this season. Maintaining non-anxious presence with a prodigal child is not possible if you are carrying unprocessed grief, unaddressed anger, or unexamined guilt. The parent who is working with a counselor, praying honestly, and processing their own responses in a healthy community is vastly better positioned to be present to their child than the parent who is white-knuckling it alone. Taking care of yourself in this season is not self-indulgence; it is a necessary condition for being the father who can run.",
    ],
  },
  {
    id: "Grief, Shame, and Hope",
    heading: "Grief, Shame, and Hope",
    paragraphs: [
      "The grief of a prodigal child is a particular kind of grief that does not fit the categories most grief resources address. The child is not dead &mdash; and yet the future you hoped for is. The life you imagined for them, the faith they would carry, the grandchildren you would raise together in the same faith community, the conversations about what God is doing in each of your lives &mdash; these are lost, or at least indefinitely deferred. This is disenfranchised grief: real, significant loss that has no social script, no funeral, no casserole brigade.",
      "The grief is complicated by anger, by guilt, and by the ongoing uncertainty that makes it impossible to close. With a death, there is eventually an acceptance that the person is gone. With a prodigal, the story is not over, which means the grief cannot fully resolve either. You are holding grief and hope in the same hand, and both are real, and neither will let go. This is one of the most demanding emotional and spiritual postures a human being can sustain.",
      "The shame that many parents of prodigal children carry &mdash; especially in church, where other people&rsquo;s children appear to be doing well, where the youth group success stories are celebrated, where your child&rsquo;s absence is noted &mdash; is real and it is isolating. Parents often feel that their child&rsquo;s departure from faith marks them as spiritual failures, as people whose faith was obviously not real enough or deep enough to transmit to their children. This shame is compounded by a theological error embedded in some Christian subcultures: that God rewards faithful parenting with faithful children, and that the converse is therefore also true.",
      "This is a pastoral failure, and it is also a theological one. The church that treats parents of prodigal children as having failed spiritually is adding to their burden the very shame the gospel is meant to lift. God himself &mdash; the most faithful parent imaginable, who has never made a mistake, whose love is perfect and endless &mdash; has prodigal children. The question &ldquo;what did I do wrong?&rdquo; is worth examining honestly, but it should not be allowed to become a verdict. You are not your child&rsquo;s choices.",
      "There are stories of parents who waited decades and then watched their son or daughter return &mdash; not because the parent finally said the right thing or applied enough prayer, but because God worked in the child&rsquo;s own time and way. Augustine&rsquo;s mother Monica prayed for him for decades while he lived as a pagan and pursued heresy. He converted at 33 and became one of the most significant theologians in Christian history. These stories are not guarantees. But they are testimony to the character of a God who does not let go.",
      "The eschatological dimension of hope matters here. God&rsquo;s purposes are not thwarted by one generation&rsquo;s rebellion. The prayer you pray for your child may be answered in ways you do not live to see &mdash; in the grandchild who comes to faith because of the seed you planted, in the deathbed return you did not know was coming, in the work God is doing in the &ldquo;far country&rdquo; that you cannot observe. &ldquo;The prayer of a righteous person is powerful and effective&rdquo; (Jas 5:16). The effectualness of prayer is not measured by the parent&rsquo;s preferred timeline.",
      "The goal is not to achieve resolution between grief and hope, as if one would eventually win. The goal is to hold both honestly and simultaneously &mdash; not pretending to hope when you feel only grief, not surrendering to despair when hope is still live. This is the posture of the psalms of lament, which move back and forth between honest pain and declared trust without pretending that either cancels the other. It is one of the most mature spiritual postures available to a human being, and it is most available to parents who have been praying for a long time without visible answer.",
    ],
  },
];

const videoItems = [
  { videoId: "XxFiWRrFlws", title: "Tim Keller on the Prodigal Son" },
  { videoId: "Hdt6bhiNmUc", title: "Praying for a Prodigal Child" },
  { videoId: "L5pKFjEsKlE", title: "When Your Child Leaves the Faith" },
];

export default function ProdigalChildGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;
  const currentSection = sections.find((s) => s.id === tab);
  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}1A`, border: `1px solid ${ACCENT}44`, borderRadius: 20, padding: "0.35rem 1rem", fontSize: "0.78rem", color: ACCENT, fontWeight: 600, marginBottom: "1rem", letterSpacing: 1, textTransform: "uppercase" as const }}>
            Family &amp; Faith &mdash; Prodigal Children
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide for Parents of Prodigal Children
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 auto", marginBottom: "1.5rem" }}>
            When a child walks away from faith &mdash; the parable of the prodigal son as a parent&rsquo;s guide, theology of free will and parental responsibility, how to pray, how to maintain relationship, and how to hold grief and hope together.
          </p>
          <div style={{ background: `${ACCENT}0D`, border: `1px solid ${ACCENT}33`, borderRadius: 14, padding: "1rem 1.5rem", maxWidth: 560, margin: "0 auto", textAlign: "left" as const }}>
            <p style={{ color: TEXT, fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
              &ldquo;While he was yet a great way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.&rdquo;
            </p>
            <p style={{ color: ACCENT, fontSize: "0.82rem", fontWeight: 600, marginTop: "0.5rem", marginBottom: 0 }}>Luke 15:20</p>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                fontSize: "0.82rem",
                fontWeight: 600,
                cursor: "pointer",
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                background: tab === t ? `${ACCENT}1A` : "transparent",
                color: tab === t ? ACCENT : MUTED,
                transition: "all 0.2s",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {currentSection && (
          <section style={{ display: "flex", flexDirection: "column" as const, gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4, color: TEXT }}>{currentSection.heading}</h2>
            {currentSection.paragraphs.map((para, i) => (
              <p
                key={i}
                style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.95rem", margin: 0 }}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </section>
        )}

        {tab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Videos</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <h3 style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45, color: TEXT, margin: 0 }}>{v.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3rem", background: `${ACCENT}0D`, border: `1px solid ${ACCENT}33`, borderRadius: 14, padding: "1.5rem", textAlign: "center" as const }}>
          <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
            You are not alone in this grief. The Father himself knows what it is to watch, to wait, and to run.
          </p>
        </div>
      </main>
    </div>
  );
}
