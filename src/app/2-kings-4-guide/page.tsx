"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "The Widow's Oil",
  "The Shunammite's Son",
  "Stew and Loaves",
  "Application",
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
    heading: "Overview of 2 Kings 4",
    reference: "2 Kings 4:1&ndash;44",
    paragraphs: [
      "Second Kings 4 is one of the richest miracle chapters in all of the Old Testament, gathering four distinct acts of divine power through the prophet Elisha into a single dramatic sequence. Elisha had inherited the mantle of the great prophet Elijah, literally and spiritually, and these miracles demonstrate that the God of Israel had indeed placed a double portion of prophetic power upon his new servant. The chapter moves from a desperate widow on the verge of losing her sons to slavery, to a promised son who dies and is restored, to a pot of poisonous stew rendered harmless, to a miraculous multiplication of loaves that feeds a crowd with bread left over &mdash; each miracle a testimony to a God who provides, gives life, purifies, and satisfies.",
      "The four miracles of 2 Kings 4 are not random wonders scattered across the chapter for dramatic effect. They form a carefully constructed portrait of God&rsquo;s sustaining power through the prophetic word. Each crisis is met by Elisha not with spectacular theater but with quiet, purposeful action taken in obedience to the Lord. The widow&rsquo;s oil multiplies in proportion to her faith and obedience. The Shunammite&rsquo;s son is restored through the prophet&rsquo;s intercession, stretching himself over the body of the child in a posture of total identification with the need. The poisoned stew is cured with a handful of flour. The loaves multiply beyond all natural expectation, with food to spare.",
      "The chapter also develops the human characters around Elisha with unusual warmth and texture. The widow of a prophet&rsquo;s son is unnamed but her desperation is vividly drawn &mdash; her husband is dead, the creditor is coming, and her sons are all she has left. The Shunammite woman is portrayed as a person of remarkable spiritual perception and practical generosity, a woman of substance who sees clearly who Elisha is and acts on what she sees. Elisha&rsquo;s servant Gehazi appears as a capable but somewhat limited figure, sent ahead in the later episode but unable to effect the miracle that only the prophet himself can perform. These human textures keep the chapter from becoming a mere catalogue of wonders and invest each miracle with genuine emotional weight.",
      "Theologically, 2 Kings 4 stands in the same tradition as Elijah&rsquo;s miracles in 1 Kings 17&ndash;19 &mdash; the feeding of the widow of Zarephath, the raising of her son &mdash; and anticipates the miracles of Jesus himself, who would multiply loaves, raise the dead, and provide for the desperate out of supernatural abundance. The chapter invites comparison and draws a line of divine provision from Elisha through to the greater Prophet who would come. Each of these four miracles shows that the Lord is not absent from the suffering of his people but is present and active, working through his word and his servants to bring life where there was death, provision where there was want, and purity where there was poison.",
      "Reading 2 Kings 4 as a complete unit teaches something important about the nature of prophetic ministry and about the character of God. Elisha does not perform these miracles to establish his own reputation or to exercise power for its own sake. He responds to need. A widow cries out and he asks what she has. A mother grieves and he goes to her son. Men are in danger of eating poison and he removes it. Hungry men are fed. The prophet is, in each case, the instrument of a compassionate God who hears the cry of the needy and acts through his word. This is the God of the Bible &mdash; not an unmoved deity indifferent to human suffering, but a living Lord who bends down to the desperate and the grieving and the hungry and the poisoned, and who multiplies what little remains into more than enough.",
    ],
  },
  {
    id: "The Widow's Oil",
    heading: "The Widow&rsquo;s Oil",
    reference: "2 Kings 4:1&ndash;7",
    paragraphs: [
      "The chapter opens with a crisis that was all too common in the ancient world: a widow unable to pay her debts. The woman who comes to Elisha is identified as the wife of one of the sons of the prophets &mdash; a member of the prophetic community that had gathered around Elisha, trained in devotion to the Lord. Her husband had died, and in his death he had left behind not only grief but debt. The creditor was coming to take her two sons as debt-slaves, a legal practice of the time that was nonetheless a kind of destruction of what little the family had left. She has nothing but a single jar of oil.",
      "Elisha&rsquo;s response is characteristically practical and quietly miraculous. He asks her what she has &mdash; &ldquo;Tell me; what have you in the house?&rdquo; (4:2). This question is not merely informational. It is an invitation to begin with what exists, however little it may be, and to trust God with that small beginning. When she names the jar of oil, Elisha gives her simple instructions: go out and borrow as many empty vessels as you can from your neighbors &mdash; do not borrow a few, but gather as many as possible. Then go into your house with your sons, shut the door, and pour the oil from your jar into all the vessels you have gathered.",
      "The miracle that follows is elegant in its simplicity and staggering in its implications. As she pours, the oil flows. She fills vessel after vessel from the single jar she possessed, and the oil does not stop until there are no more vessels to fill. &ldquo;When the vessels were full, she said to her son, &lsquo;Bring me another vessel.&rsquo; And he said to her, &lsquo;There is not another.&rsquo; Then the oil stopped&rdquo; (4:6). The miracle is proportional to her obedience and her faith in borrowing vessels. Had she borrowed more, presumably there would have been more oil. The extent of the miracle was measured by the extent of her preparation.",
      "Elisha then gives the final instruction: go, sell the oil, pay your debt, and live with your sons on the rest. The miracle has done exactly what was needed. It has not made her wealthy beyond measure; it has cleared the debt and provided for their sustenance. The widow is delivered from the crisis that had threatened to destroy what remained of her family, and she is given a future. The oil that overflowed the vessels also overflowed the disaster that had pressed upon her.",
      "The miracle of the widow&rsquo;s oil carries unmistakable echoes of Elijah&rsquo;s provision for the widow of Zarephath in 1 Kings 17, where a jar of flour and a jug of oil were sustained throughout the famine. In both cases the provision comes through the prophetic word, involves a woman in desperate circumstances, and demonstrates that the God of Israel is the God of abundance even when everything visible suggests scarcity. The miracle also looks forward to Jesus&rsquo; multiplication of the loaves and fish, where a small and finite amount of food is more than sufficient in the hands of the one who gives life. What God has, he shares; what his people possess, however little, becomes the starting point for his overflowing provision.",
      "There is also a deeply communal dimension to this miracle. The widow&rsquo;s deliverance was not accomplished in isolation. It required her neighbors, who lent their empty vessels. It required her sons, who helped carry and hold and arrange the vessels as she poured. The miracle of the oil was worked in community, in the hidden interior of a shut door, and then it overflowed into the clearing of a public debt. What happened privately became a public testimony that the God of Israel had not forgotten a widow and her sons.",
    ],
  },
  {
    id: "The Shunammite's Son",
    heading: "The Shunammite&rsquo;s Son",
    reference: "2 Kings 4:8&ndash;37",
    paragraphs: [
      "The longest and most emotionally complex episode in 2 Kings 4 centers on a wealthy woman from Shunem who perceives, with unusual spiritual clarity, that Elisha is &ldquo;a holy man of God&rdquo; (4:9). She persuades her husband to build a small room on the roof of their house &mdash; a bed, a table, a chair, and a lamp &mdash; so that Elisha can rest there whenever he passes through. This is an act of pure, unsolicited generosity to the prophet, and it reveals a woman who sees beyond surfaces to what is truly valuable and acts on that perception.",
      "Elisha is moved by her hospitality and asks his servant Gehazi what can be done for her. She is a woman who has everything materially, but Gehazi notes the crucial lack: she has no son, and her husband is old. Elisha calls her and makes a promise that must have seemed impossible: &ldquo;At this season, about this time next year, you shall embrace a son&rdquo; (4:16). The woman&rsquo;s response is almost a rebuke &mdash; &ldquo;No, my lord, O man of God; do not lie to your servant&rdquo; (4:16). She has guarded her heart against this particular hope. She will not allow herself to be given a promise she does not believe can come true, only to be disappointed. But the promise comes true: the following spring she holds a son.",
      "Then the son grows up, and one day he goes out to his father among the reapers in the field. Something happens to his head &mdash; the text does not specify exactly what, possibly sunstroke, possibly an aneurysm &mdash; and he is carried home. He sits on his mother&rsquo;s lap until noon, and then he dies. What follows is one of the most striking portraits of faith under pressure anywhere in the Old Testament. The Shunammite woman lays her dead son on Elisha&rsquo;s bed in the prophet&rsquo;s room, shuts the door, and goes to find Elisha. She does not tell her husband the child is dead. When he asks why she is going, she simply says, &ldquo;All is well.&rdquo;",
      "When she reaches Elisha on Mount Carmel, she falls at his feet and Gehazi tries to push her away. But Elisha sees that something is deeply wrong &mdash; &ldquo;her soul is in bitter distress&rdquo; (4:27) &mdash; and he listens. Her words are a kind of accusation and a prayer at once: &ldquo;Did I ask my lord for a son? Did I not say, &lsquo;Do not deceive me&rsquo;?&rdquo; (4:28). She is holding Elisha accountable to the promise. The child was given by the word of God through this prophet, and now the child is dead, and she will not accept that as the final word. Her faith is fierce, tenacious, and utterly fixed on the one who had made the promise.",
      "Elisha sends Gehazi ahead with his staff to lay on the child&rsquo;s face, but the woman refuses to leave without Elisha himself. Gehazi arrives first and lays the staff on the child, but there is no response. When Elisha arrives at the house, he goes alone into the room, shuts the door, and prays to the Lord. Then he stretches himself out over the child &mdash; mouth to mouth, eyes to eyes, hands to hands &mdash; and the child&rsquo;s flesh grows warm. He does it again, and the child sneezes seven times and opens his eyes. Elisha calls the mother and presents her son alive. She falls at his feet, bows to the ground, and takes up her son.",
      "The raising of the Shunammite&rsquo;s son is one of only three resurrection miracles in the Old Testament (with Elijah&rsquo;s raising of the widow of Zarephath&rsquo;s son in 1 Kings 17 and Ezekiel&rsquo;s vision of the dry bones). Each one points forward to the resurrection power that would be displayed in its fullness in Jesus Christ, who raised Lazarus, the widow&rsquo;s son at Nain, and ultimately rose himself from the dead. The Shunammite&rsquo;s fierce refusal to accept death as the final word, and her insistence on going to the prophet with the full weight of her grief, is a model of the kind of faith that brings the desperate to the feet of Christ and does not leave until it has received what was promised.",
    ],
  },
  {
    id: "Stew and Loaves",
    heading: "The Poisoned Stew and the Loaves",
    reference: "2 Kings 4:38&ndash;44",
    paragraphs: [
      "The final two miracles of 2 Kings 4 are brief but theologically rich, forming a fitting close to a chapter structured around the provision and sustaining power of God. The third miracle takes place during a time of famine. Elisha comes to Gilgal, where the sons of the prophets are gathered, and he instructs his servant to put on a large pot and boil stew for the company. One of the young men goes out into the field to gather herbs and finds a wild vine, perhaps a desert gourd or wild cucumber. Not knowing what it is, he shreds the gourds into the pot. The result is immediate and alarming: as the men begin to eat, they cry out &mdash; &ldquo;O man of God, there is death in the pot!&rdquo; (4:40) &mdash; because the stew is bitter and evidently poisonous.",
      "Elisha&rsquo;s remedy is strikingly simple: he calls for flour, throws it into the pot, and tells the men to serve it. They eat, and there is nothing harmful in the pot. The narrator gives no further explanation of how this worked. The flour was not medicinal &mdash; flour does not neutralize plant toxins. The point is that the healing came through the prophetic word and action, and through a symbolic gesture of restoration. What had been contaminated and deadly was made wholesome and safe. The community that had been threatened by hidden poison within its own provision was restored to shared table fellowship.",
      "The symbolism of the purified stew has a long resonance in Christian interpretation. The pot of poison represents the way that even well-intentioned effort can introduce something deadly when not guided by wisdom and the word of God. The young man did not intend to poison anyone; he simply did not know what he was gathering. Yet ignorance does not neutralize danger, and what was brought into the community&rsquo;s common meal became a threat to everyone at the table. The cure &mdash; the flour thrown in by the prophet &mdash; is a word of grace applied to a situation of danger, healing what unaided human effort had corrupted.",
      "The fourth miracle immediately follows without a break in the narrative. A man comes from Baal-shalishah bringing twenty loaves of barley bread made from the first fruits, along with fresh ears of grain. Elisha tells his servant: give these to the people to eat. The servant objects that twenty loaves are not enough for a hundred men. But Elisha simply repeats the command and adds the Lord&rsquo;s word: &ldquo;They shall eat and have some left&rdquo; (4:43). And it happens exactly as the prophetic word had said &mdash; the hundred men eat and there is bread left over.",
      "The multiplication of the loaves in 2 Kings 4 stands as one of the most direct Old Testament anticipations of Jesus&rsquo; feeding of the five thousand in all four Gospels. The similarities are striking: a small quantity of food, a large number of people, a doubtful servant who questions whether it can be enough, the command to distribute, and the miracle that not only satisfies but leaves a remainder. Jesus himself, in John 6, draws the connection between the manna in the wilderness and his own provision, claiming to be the true bread from heaven. The feeding miracles in the Old Testament and the New Testament together proclaim that the God of Israel is the one who provides abundantly for his people, who does not leave them hungry, and whose provision always exceeds what human calculation would predict as possible.",
      "Taken together, the purified stew and the multiplied loaves complete a chapter that has portrayed God as provider in the widest sense &mdash; providing for a widow in financial ruin, providing a son and then life again to the Shunammite, providing safety from poison, and providing food from scarcity. The God who works through Elisha is the God who attends to every dimension of his people&rsquo;s need: their economic crises, their deepest personal griefs, the hidden dangers in their midst, and their daily hunger. No need is too small or too large for the God who provides.",
    ],
  },
  {
    id: "Application",
    heading: "Applying 2 Kings 4 Today",
    reference: "2 Kings 4 &mdash; For the Life of the Believer",
    paragraphs: [
      "The four miracles of 2 Kings 4 are not merely ancient history to be catalogued and admired from a distance. They are windows into the character of a God who has not changed, active through the new covenant in the person and work of Jesus Christ and through the Spirit he has given to his people. Reading this chapter with the New Testament in hand, the Christian finds not a foreign narrative but a family resemblance &mdash; the same God who multiplied oil for a widow, raised a son, purified poisoned stew, and fed a crowd from twenty loaves is the God who raised Jesus from the dead and promises to supply every need of his people according to his riches in glory.",
      "The first application is the call to begin with what you have. Elisha&rsquo;s question to the widow &mdash; &ldquo;What do you have in the house?&rdquo; &mdash; is a question that reorients the desperate from what they lack to what they possess, however little it may be. The miracle of the oil began not with a full storehouse but with a single jar. The multiplication of the loaves began not with a banquet but with twenty loaves and a hundred hungry men. God routinely works with small beginnings, insufficient resources, and unpromising materials &mdash; and he asks his people not to wait until they have enough but to offer what they have and to trust that his word will accomplish what human calculation cannot.",
      "The second application is the Shunammite woman&rsquo;s fierce, tenacious refusal to accept the final word of death and loss without going to the source of life. When her son died, she did not sit in the house and mourn as though the story were over. She laid him on the prophet&rsquo;s bed, saddled a donkey, and rode hard to find Elisha. This is a picture of the kind of faith that does not resign itself to apparent defeat but presses through grief and desperation to the feet of the one who has power over life and death. For the Christian, this means that prayer in the face of impossible circumstances is not a last resort but a first response &mdash; the urgent, persistent, expectant turning to the living God who has promised to hear.",
      "The third application concerns the hidden poison that can enter a community&rsquo;s common life. The sons of the prophets were not sinning deliberately when the poisonous gourds went into the stew &mdash; they were simply ignorant. But ignorance did not make the stew safe, and the community&rsquo;s shared meal became a shared danger. Churches and Christian communities can admit poisonous things into their common life through good intentions and lack of discernment &mdash; false teaching that sounds plausible, relational dynamics that damage rather than heal, practices that seem edifying but introduce corruption. The antidote, like Elisha&rsquo;s flour, is the word of God applied with prophetic clarity to what has gone wrong. The church needs people with the discernment to say &ldquo;there is death in the pot&rdquo; and the wisdom to know how to apply the remedy.",
      "The fourth application is the miracle of overflowing sufficiency in the face of apparent scarcity. Gehazi&rsquo;s objection &mdash; &ldquo;How can I set this before a hundred men?&rdquo; &mdash; is the objection of a mind trained to think in terms of natural limitation. It is the same objection the disciples made before the feeding of the five thousand. The answer in both cases is the same: give what you have, trust the word, and discover that the Lord provides not only enough but more than enough. The Christian life is not one of perpetual abundance in the material sense, but it is a life of proven sufficiency in which the God who fed Elisha&rsquo;s prophetic community from twenty loaves has promised never to leave or forsake his people &mdash; and who demonstrated in the death and resurrection of his Son that his provision extends even beyond death itself.",
      "Finally, 2 Kings 4 teaches that the prophetic ministry &mdash; and by extension the ministry of the church, which carries the word of God into the world &mdash; is fundamentally a ministry of life against death. Elisha confronted debt-slavery, bereavement, poison, and hunger, and through the word of the Lord he brought freedom, life, safety, and satisfaction. The church is called to the same ministry in Christ&rsquo;s name: to bring the life-giving word to people crushed by debt they cannot pay, bereaved of what they held most dear, poisoned by false teaching and destructive patterns, and hungry for bread that truly satisfies. The God of Elisha is the God of the church, and his provision does not fail.",
    ],
  },
];

const videoItems = [
  { videoId: "mjOmAbN6ies", title: "2 Kings 4 Explained - Elisha and the Miracles" },
  { videoId: "ggXzxoZD1O4", title: "BibleProject Overview - 1-2 Kings" },
  { videoId: "6z_VbZGSVAY", title: "The Widow's Oil and the Shunammite's Son - 2 Kings 4" },
  { videoId: "q-XfqBcQlPE", title: "Elisha the Prophet - Miracles in the Old Testament" },
];

export default function TwoKings4GuidePage() {
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
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            2 Kings 4 &mdash; Miracles of Elisha
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Four miracles of the prophet Elisha &mdash; the widow&rsquo;s oil that never ran out, the Shunammite&rsquo;s son raised from the dead, poison in the stew made harmless, and twenty loaves feeding a hundred men with food to spare.
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
              Explore the miracles of Elisha in 2 Kings 4 through these video teachings on the widow&rsquo;s oil, the Shunammite&rsquo;s son, the poisoned stew, and the multiplication of loaves.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The God Who Provides</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Second Kings 4 presents a God who attends to every dimension of human need &mdash; financial ruin, the death of a child, hidden danger in the community, and daily hunger &mdash; and who works through the prophetic word to bring life, provision, purity, and satisfaction. The same God who worked through Elisha works through Christ, the greater Prophet, who feeds the hungry, raises the dead, and provides abundantly for all who come to him.
          </p>
        </div>
      </main>
    </div>
  );
}
