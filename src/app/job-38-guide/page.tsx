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
  "Overview",
  "Where Were You",
  "God Speaks from the Whirlwind",
  "Confronting Human Limits",
  "Application",
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
    heading: "Overview of Job 38",
    reference: "Job 38:1&ndash;41",
    paragraphs: [
      "Job 38 is one of the most breathtaking chapters in the entire Bible &mdash; the moment when God himself breaks the long silence and speaks to Job out of the whirlwind. For thirty-seven chapters the afflicted patriarch has demanded an audience with the Almighty, insisting on his innocence and crying out for an answer to his suffering. Three friends have offered theology after theology, each one collapsing under the weight of Job&rsquo;s experience. A young man named Elihu has had his say. And now, at last, God speaks.",
      "What God says is not what anyone expected. He does not explain Job&rsquo;s suffering. He does not vindicate Job&rsquo;s friends or condemn them. He does not present a theodicy &mdash; a theoretical justification for why innocent people suffer. Instead, he asks questions. More than sixty questions cascade across chapters 38 and 39, each one directed at Job and each one drawing attention to the vast complexity and majesty of the created order that Job could neither make nor fully understand. &ldquo;Where were you when I laid the foundation of the earth?&rdquo; (38:4) &mdash; the opening question sets the tone for everything that follows.",
      "The divine speech from the whirlwind is not cruelty. God is not mocking Job in his misery. Rather, by unfolding the architecture of creation before Job&rsquo;s eyes, God is situating Job&rsquo;s suffering within a reality that is vastly larger than Job can see. Job has been reasoning about his situation from inside a very small room, with only his own suffering and his friends&rsquo; words as data. God opens a window &mdash; or rather, throws open the wall &mdash; and shows Job a universe of staggering proportions, governed by a wisdom that Job cannot fathom and a care that extends to the most obscure corners of creation.",
      "Scholars have noted that the speech in Job 38 draws on ancient Near Eastern traditions of creation and cosmology, recasting them in the service of Israel&rsquo;s theology of a personal, sovereign Creator. The sea does not represent primordial chaos that must be defeated; God speaks to it as a parent setting a boundary for an unruly child. The dawn does not arise from a divine battle but from God&rsquo;s command. The stars of the Pleiades and Orion are not rival powers but decorations in the Creator&rsquo;s sky. Everything in creation is subordinate to the one who made it.",
      "The chapter belongs to a literary tradition known as the &ldquo;onomasticon,&rdquo; an ordered catalogue of natural phenomena, found also in Egyptian and Babylonian wisdom literature. But Job 38 transforms this genre. Where Egyptian onomastica list the wonders of creation to demonstrate human mastery of knowledge, Job 38 lists them to demonstrate human limitation and divine incomprehensibility. Every phenomenon in the list is something that God does and that Job cannot do, cannot explain, and cannot fully comprehend. The cumulative effect is humbling in the deepest sense of that word.",
      "Yet the chapter is not ultimately about humiliation. It is about revelation. When God asks &ldquo;Where were you?&rdquo; he is not saying &ldquo;You do not matter.&rdquo; He is saying &ldquo;You are not God, and that is precisely the point.&rdquo; Job has been trying to occupy a position that belongs only to God &mdash; the position of one who can render a final verdict on the justice of events. The divine speech is an invitation to release that pretension and to encounter the living God as he actually is &mdash; not as an idea in a theological argument but as the awesome Creator who manages a universe far beyond human comprehension.",
    ],
  },
  {
    id: "Where Were You",
    heading: "Where Were You? The Foundations of the Earth",
    reference: "Job 38:1&ndash;7",
    paragraphs: [
      "The divine speech begins with a challenge to Job&rsquo;s identity as much as to his understanding: &ldquo;Who is this that darkens counsel by words without knowledge?&rdquo; (38:2). Throughout the long debate with his friends, Job has spoken with confidence about how God ought to behave, what justice demands, and what God&rsquo;s governance of the world should look like. God&rsquo;s opening question is not a rebuke of Job&rsquo;s honesty or his anguish &mdash; it is a challenge to Job&rsquo;s epistemological confidence. Job has been speaking about things he did not fully understand.",
      "&ldquo;Dress for action like a man; I will question you, and you make it known to me&rdquo; (38:3). This is the language of a courtroom, or of an oral examination. Job has repeatedly demanded that God appear and answer his questions. Now God appears &mdash; and instead of answering, he examines. The tables are turned completely. The questioner is now being questioned. The one who demanded a trial now finds himself in the dock.",
      "The first great question cuts to the heart of the matter: &ldquo;Where were you when I laid the foundation of the earth? Tell me, if you have understanding. Who determined its measurements &mdash; surely you know! Or who stretched the line upon it? On what were its bases sunk, or who laid its cornerstone, when the morning stars sang together and all the sons of God shouted for joy?&rdquo; (38:4&ndash;7). The imagery is architectural: God is described as a master builder, setting foundations and stretching measuring lines, sinking bases and laying cornerstones.",
      "The question &ldquo;Where were you?&rdquo; is not a put-down but a genuine calibration of Job&rsquo;s vantage point. Job was not there when the world was made. He did not watch the foundations being laid or hear the morning stars sing. His knowledge of creation is that of a creature who arrived late in a universe already constructed and operating by principles he did not design and cannot fully understand. This is not a deficit to be ashamed of; it is the simple truth of what it means to be a creature rather than the Creator.",
      "The image of the morning stars singing together at creation&rsquo;s birth is one of the most evocative in the entire Old Testament. It suggests that the creation of the world was not a solitary act performed in silence but a joyful, communal event &mdash; a cosmic celebration presided over by God and witnessed by the host of heaven. Into this order of joyful praise Job has been born, whether or not he can see it through the lens of his suffering. The creation that surrounds him is not a cold machine but a work of art that drew shouts of joy from those who saw it made.",
      "The theological implication is significant: if Job cannot answer the question of where the foundations of the earth were laid, he cannot answer the question of why everything in the earth unfolds as it does. The same wisdom that designed the cosmos and determined its measurements is the wisdom that governs the events of Job&rsquo;s life. Job does not have access to the blueprints. He sees the building from the inside of a single room. This does not mean the building has no architect or that the architect is indifferent &mdash; it means that Job&rsquo;s view is limited in ways he had not fully acknowledged.",
    ],
  },
  {
    id: "God Speaks from the Whirlwind",
    heading: "God Speaks from the Whirlwind: The Wonders of Creation",
    reference: "Job 38:8&ndash;41",
    paragraphs: [
      "Having established the foundational question of Job&rsquo;s absence at creation, God proceeds to interrogate Job about the ongoing governance of the created order. The questions move through the domains of sea, light, darkness, snow, lightning, rain, stars, and animals &mdash; a panoramic tour of the world as God manages it day by day. Each question has the same structure: this is what God does; can you do this? This is how the world works; do you understand it?",
      "&ldquo;Who shut in the sea with doors when it burst out from the womb, when I made clouds its garment and thick darkness its swaddling band, and prescribed limits for it and set bars and doors, and said, &lsquo;Thus far shall you come, and no farther, and here shall your proud waves be stayed&rsquo;?&rdquo; (38:8&ndash;11). The sea, in ancient Near Eastern mythology, was often a symbol of primal chaos threatening to overwhelm the ordered world. Here God domesticates the image entirely: the sea is not a rival power but a newborn creature that God wrapped in clouds and contained within boundaries, speaking to it with the authority of a parent setting bedtime rules for an energetic child.",
      "The questions about light are equally arresting. &ldquo;Have you commanded the morning since your days began, and caused the dawn to know its place&rdquo; (38:12)? Every morning the dawn rises and takes hold of the edges of the earth, shaking out the wicked who operate in darkness as one shakes a garment to dislodge what clings to it (38:13). This daily renewal of light is not automatic or mechanical &mdash; it is the response of creation to the ongoing command of God. Dawn does not simply happen; it is called.",
      "The questions about the storehouses of snow and hail (38:22&ndash;23) introduce a note of sovereign mystery. God has reserved these not merely as weather phenomena but as instruments for times of trouble, for the day of battle and war. Creation is not merely decorative or cyclical; it is purposeful and directed toward ends that only God can see. The snow and hail in their storehouses are waiting for moments in history that have not yet arrived &mdash; moments that are planned and prepared for in the counsel of God.",
      "The astronomical questions push into domains entirely beyond human reach: &ldquo;Can you bind the chains of the Pleiades or loose the belt of Orion? Can you lead forth the Mazzaroth in their season, or can you guide the Bear with its children?&rdquo; (38:31&ndash;32). The great star clusters that ancient people observed with wonder are acknowledged here as real features of the cosmos &mdash; but they are features governed by God&rsquo;s wisdom, not forces that human beings can bind or loose. The stars in their courses are not fate; they are creation under the hand of the Creator.",
      "The final portion of the chapter turns to the animal kingdom, anticipating the extended treatment of animals in chapter 39. God provides food for the lion and the raven (38:39&ndash;41). The raven&rsquo;s young ones cry to God when they have no food &mdash; a detail that echoes Jesus&rsquo; later teaching that God feeds the birds of the air (Matthew 6:26). The point is that God&rsquo;s providential care extends to every creature, including the ones most remote from human concern and management. The world is not a place of indifferent mechanism but of purposeful divine care at every level.",
      "Throughout this cascade of questions, God is painting a picture of a world that is ordered, governed, and cared for by a wisdom infinitely greater than Job&rsquo;s. The suffering Job has experienced does not indicate that the world is out of control or that its Maker is indifferent. It indicates that Job is encountering a reality too large for his current categories. The response God is calling for is not intellectual comprehension but a kind of enlargement of the soul &mdash; a willingness to inhabit a bigger story than the one Job has been telling himself.",
    ],
  },
  {
    id: "Confronting Human Limits",
    heading: "Confronting Human Limits: What the Whirlwind Reveals",
    reference: "Job 38 &mdash; Theology of Finitude",
    paragraphs: [
      "One of the most profound theological contributions of Job 38 is its treatment of human limitation not as a problem to be solved but as a condition to be accepted and even embraced. Every culture has its strategy for denying or transcending human limits. Ancient empires claimed divine status for their kings. Modern culture places enormous faith in technological mastery and the accumulation of data. Job himself, in his anguish, had moved toward a position of demanding that God give an account of himself as if Job stood on equal footing with the divine. Job 38 addresses all of these strategies with the same simple, devastating question: Where were you?",
      "The specific limits that God catalogues in the chapter are not arbitrary. He focuses precisely on those aspects of creation that were most important to human life and most beyond human control: the boundaries of the sea, the return of the dawn, the sources of weather, the pathways of the stars, the feeding of wild animals. These are not peripheral features of the world but the most fundamental conditions of existence. And Job can command none of them.",
      "There is a paradox in this confrontation. Job is a sufferer, already humbled by loss and pain. Why does God find it necessary to humble him further? The answer seems to be that Job&rsquo;s suffering, far from producing genuine humility, has actually generated a kind of theological overreach. In his pain, Job has come to believe that he can evaluate God&rsquo;s conduct with authority, that he can render a verdict on divine justice, that if God would simply show up and explain himself, Job could assess the explanation and decide whether it was adequate. This is a very human response to suffering, but it rests on an inflated view of the sufferer&rsquo;s own capacity to judge.",
      "God&rsquo;s response does not deny Job&rsquo;s suffering or dismiss his complaints. What it does is reframe the entire relationship between the sufferer and the One who governs the universe. Job is not God&rsquo;s peer or judge &mdash; he is God&rsquo;s creature, beloved and valued but limited in ways that are simply irreducible. Acknowledging those limits is not defeat; it is the precondition for genuine faith. A God small enough for Job fully to comprehend would not be a God capable of governing a universe. The very incomprehensibility of God that frustrates Job is evidence of a greatness that can be trusted.",
      "The whirlwind itself is significant as the medium of divine speech. Throughout the ancient Near East, storms were associated with the presence of the divine &mdash; the theophany, or visible appearance of God, came in wind, fire, cloud, and thunder. But the whirlwind in Job 38 is neither destructive nor threatening; it is the vehicle of conversation. God comes in power but speaks in words, in questions, in an invitation to engage. The storm does not sweep Job away; it draws him into a dialogue that will ultimately restore him. Power and intimacy are held together in the same moment.",
      "The encounter with divine majesty in Job 38 produces something in Job that nothing else in the book has produced: silence, and then a new kind of speech. After God finishes speaking, Job responds: &ldquo;I had heard of you by the hearing of the ear, but now my eye sees you&rdquo; (42:5). The transformation is not intellectual but experiential. Job has not been given answers; he has been given an encounter. And the encounter with the living God proves to be more than sufficient &mdash; not because Job now understands his suffering, but because he has met the One who does, and found him to be worthy of trust.",
      "For believers in every age, Job 38 offers a theology of unknowing that is profoundly liberating. We do not need to understand everything God does in order to trust God. We do not need answers to every question about suffering in order to remain faithful. We need the kind of encounter that Job received &mdash; a fresh vision of the God who made the morning stars and feeds the ravens and sets the limit of the sea. When we have truly seen who God is, the unanswered questions do not disappear, but they are held in a different kind of hand.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Job 38 Today",
    reference: "Job 38 &mdash; Living with the Unanswered",
    paragraphs: [
      "Job 38 speaks with extraordinary relevance to anyone who has suffered and demanded to know why. The human need for explanation in the face of pain is among the most universal of experiences. We want to know why a child died, why a marriage collapsed, why the cancer came back, why the prayer was not answered. We come to God, as Job did, with questions that feel unanswerable and a need for justice that feels unmet. Job 38 does not give us the answer to these questions, but it shows us what God gave to Job, and what God still gives to those who cry out in their anguish.",
      "What God gave to Job was not an explanation but a presence. The divine speech from the whirlwind does not resolve the narrative puzzle of Job&rsquo;s suffering &mdash; God never tells Job about the opening scene in the heavenly court, never explains the wager with the adversary, never provides a rational account of why an innocent man was afflicted. Instead, God showed up. He came in the whirlwind. He spoke. He engaged Job as a conversation partner worthy of address. For someone who had been crying into the silence for what felt like forever, that presence was itself the answer.",
      "Christians reading Job 38 through the lens of the New Testament have additional resources that Job did not. We know the God who spoke from the whirlwind in the incarnation of Jesus Christ, who entered the suffering of the world not as an observer but as a participant. The God who asks &ldquo;Where were you when I laid the foundations of the earth?&rdquo; is the same God who, in Jesus, entered the world he made and suffered within it. The cross does not explain suffering, but it demonstrates that God does not stand at a safe distance from it.",
      "Job 38 is also a corrective to the prosperity theology that promises followers of God a life free from suffering, loss, and confusion. The book of Job as a whole, and chapter 38 in particular, insists that faithfulness and prosperity are not automatically linked. God himself declares Job righteous (1:8, 42:7) while allowing him to suffer intensely. The divine speech does not promise Job that his suffering will be ended if he believes the right things or behaves the right way. It invites Job into a relationship with a God who is trustworthy even when not fully comprehensible.",
      "In pastoral practice, Job 38 offers important guidance for those who minister to the suffering. Well-meaning people often respond to others&rsquo; pain with premature explanation &mdash; offering reasons, finding silver linings, or suggesting that the suffering is somehow deserved or corrective. Job&rsquo;s three friends did exactly this, and God condemned their words as not having spoken rightly about him (42:7). The response of Job 38 to suffering is not explanation but encounter &mdash; the willingness to show up, to be present, to speak even when the speech is question rather than answer.",
      "The humility that Job 38 teaches is not passive resignation but an active orientation of the whole person toward the God who is larger than our categories. It is the willingness to hold our questions openly rather than as accusations, to remain in relationship with God even when God&rsquo;s ways are incomprehensible, and to find in the beauty and order of creation &mdash; even the storm, even the wild animal, even the stars in their courses &mdash; a testimony to the faithfulness of the One who governs all things. Creation itself becomes a form of comfort: the world is not chaos, and the God who orders it has not forgotten the ones who suffer within it.",
      "Finally, Job 38 invites us to an enlarged imagination &mdash; a willingness to live inside a story that is far bigger than our own chapter of it. We see our lives from the inside, from within our own suffering and confusion. God sees the whole arc of the story &mdash; the foundations, the ending, and every chapter in between. To trust God in the face of suffering is not to stop feeling the pain or to stop asking questions. It is to recognize that the questions are held within a story whose author is worthy of trust, and whose final chapter has already been written in the resurrection of Jesus Christ from the dead.",
    ],
  },
];

const videoItems = [
  { videoId: "xQwnH8th_fs", title: "Job 38 - God Speaks from the Whirlwind" },
  { videoId: "GswSg2ohqmA", title: "The Book of Job Explained - BibleProject Overview" },
  { videoId: "kHEiYh8C6-Y", title: "Where Were You? - The Divine Speech in Job" },
  { videoId: "tSNEWHNkJLY", title: "Job and the Problem of Suffering - A Deep Study" },
];

export default function Job38GuidePage() {
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
            Job 38: God Speaks from the Whirlwind
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            After chapters of silence and suffering, God answers Job out of the whirlwind &mdash; not with explanations but with questions that reveal the majesty of the Creator and invite the sufferer into a larger story than they could have imagined.
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

        <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {videoItems.map((v) => (
            <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId={v.videoId} title={v.title} />
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Where Were You When the Morning Stars Sang?</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Job 38 does not offer a neat explanation for suffering &mdash; it offers something far greater: an encounter with the God who laid the foundations of the earth, who shut in the sea, who calls the dawn into being, and who feeds the raven&rsquo;s young. To meet this God is to find that the unanswered questions can be held in a hand large enough to hold the cosmos itself.
          </p>
        </div>
      </main>
    </div>
  );
}
