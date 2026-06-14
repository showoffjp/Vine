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
  "The Burning Bush",
  "The Name of God",
  "The Mission",
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
    heading: "Exodus 3 &mdash; The Burning Bush and the Call of Moses",
    reference: "Exodus 3:1&ndash;22",
    paragraphs: [
      "Exodus 3 stands as one of the supreme theophanies &mdash; divine appearances &mdash; in all of Scripture. Here, in the shadow of a mountain in the wilderness of Midian, the sovereign God of the universe condescends to reveal himself in fire, to speak his personal name, and to commission a reluctant shepherd to lead a nation from slavery to freedom. In a single chapter, the character of God, the name of God, and the mission of God converge with explosive force. What happens at Horeb in Exodus 3 will reverberate through the entire Old Testament and into the New.",
      "The chapter arrives at a pivotal moment in the biblical narrative. The book of Exodus opened with the multiplication of Israel in Egypt, the rise of a new Pharaoh who &ldquo;knew not Joseph,&rdquo; the imposition of brutal forced labor, and the attempted genocide of Hebrew male children. Into this darkness, Moses was born &mdash; hidden by his mother, drawn from the Nile by Pharaoh&rsquo;s daughter, raised in the palace of the oppressor. But his identification with his own people led to a killing, a flight into the wilderness, and forty years of obscurity tending sheep in Midian. He was eighty years old when the bush burned.",
      "The structure of Exodus 3 follows a pattern familiar from other divine call narratives in Scripture: the divine encounter, the commission, the objection, and the divine assurance. Moses sees the burning bush and turns aside to investigate; God calls his name and reveals himself; God announces his intention to deliver Israel and commissions Moses as his instrument; Moses objects, and God responds with reassurance and the gift of his name. This pattern &mdash; encounter, commission, objection, assurance &mdash; recurs in the calls of Gideon (Judges 6), Isaiah (Isaiah 6), Jeremiah (Jeremiah 1), and ultimately in the New Testament call of the disciples.",
      "What makes Exodus 3 so theologically dense is its concentration of divine self-revelation. In the space of twenty-two verses God reveals his personal name (I AM WHO I AM), his identification with the patriarchal God of Abraham, Isaac, and Jacob, his awareness of Israel&rsquo;s suffering, his commitment to deliver them, the destination he has prepared for them, and the sign that will confirm Moses&rsquo; commission. This is one of the most sustained and rich acts of divine self-disclosure in the entire Old Testament.",
      "The chapter must be read in the context of the Abrahamic covenant. When God says he has &ldquo;remembered&rdquo; his covenant with Abraham, Isaac, and Jacob (2:24), the reader understands that what follows is not a new initiative but the fulfillment of a very old promise. God had told Abraham that his descendants would be sojourners in a land not their own, afflicted for four hundred years, but that afterward they would come out with great possessions (Genesis 15:13&ndash;14). Exodus 3 is the moment when those four hundred years are ending and God moves to keep his word.",
      "Exodus 3 is also a chapter about the character of pastoral calling. Moses is not summoned because he is impressive &mdash; he will spend the rest of the chapter arguing that he is not up to the task. He is summoned because God has a mission that requires an instrument, and God&rsquo;s choice of instrument is consistently the unlikely, the reluctant, and the broken. The chapter teaches that divine calling is grounded not in the worthiness of the one called but in the faithfulness of the One who calls. &ldquo;I will be with you&rdquo; (3:12) is the only credential Moses will ultimately need.",
    ],
  },
  {
    id: "The Burning Bush",
    heading: "The Burning Bush on Holy Ground",
    reference: "Exodus 3:1&ndash;6",
    paragraphs: [
      "Moses was keeping the flock of his father-in-law Jethro, the priest of Midian, when he led the flock to the west side of the wilderness and came to Horeb, the mountain of God (3:1). Horeb is the same location called Sinai elsewhere in Scripture, the mountain that will become the site of the great covenant-giving. That Moses arrives here now, before any of those covenant events, already signals that something significant is about to occur. It is as if the mountain already knows what it will one day witness.",
      "The appearance is described with deliberate paradox: &ldquo;the angel of the Lord appeared to him in a flame of fire out of the midst of a bush. He looked, and behold, the bush was burning, yet it was not consumed&rdquo; (3:2). Fire in Scripture is consistently associated with the divine presence &mdash; the pillar of fire in the wilderness, the fire on Sinai, the fire of the seraphim in Isaiah&rsquo;s vision, the tongues of fire at Pentecost. But this fire is strange: it burns without burning up. It is inexhaustible, self-sustaining, consuming nothing around it. The paradox is meant to arrest attention &mdash; and it does.",
      "Moses turns aside to see the great sight, and in his turning aside, the encounter becomes possible: &ldquo;When the Lord saw that he turned aside to see, God called to him out of the bush&rdquo; (3:4). There is something profoundly instructive in this sequence. The divine presence was already there, burning in the bush. Moses could have walked past. It was his decision to turn aside &mdash; to stop, to investigate, to give his attention to what was unusual &mdash; that created the conditions for the encounter. Spiritual perception is not passive; it requires the willingness to turn aside from one&rsquo;s ordinary path.",
      "&ldquo;Moses, Moses!&rdquo; God calls his name twice &mdash; the same double-naming used with Abraham at the sacrifice of Isaac (&ldquo;Abraham, Abraham!&rdquo;) and later with Samuel in the temple. The repetition communicates urgency and intimacy; this is not a distant summons but a personal address. And Moses&rsquo; response is one of the shortest and most complete acts of availability in Scripture: &ldquo;Here I am&rdquo; (3:4). He does not yet know who is speaking or what will be asked. He simply makes himself present.",
      "The command that follows changes everything: &ldquo;Do not come near; take your sandals off your feet, for the place on which you are standing is holy ground&rdquo; (3:5). God&rsquo;s presence makes the ground holy. Holiness is not a property inherent to Midianite wilderness; it is the property of wherever God is. The removal of sandals is an act of submission and vulnerability &mdash; it puts Moses in direct contact with earth that has been made sacred by the divine presence, with nothing between his skin and the holy ground. It is the posture of a creature before his Creator.",
      "Then the self-identification: &ldquo;I am the God of your father, the God of Abraham, the God of Isaac, and the God of Jacob&rdquo; (3:6). This is the patriarchal name, the covenant name by which God had revealed himself to the ancestors of Israel. He is not a new deity appearing for the first time; he is the same God who made promises centuries ago and who has not forgotten a single one of them. Moses&rsquo; response is immediate: &ldquo;And Moses hid his face, for he was afraid to look at God.&rdquo; The one who had just been curious enough to turn aside is now too overwhelmed to look up. The encounter with holiness has that effect on those who are honest about themselves.",
    ],
  },
  {
    id: "The Name of God",
    heading: "I AM WHO I AM &mdash; The Divine Name Revealed",
    reference: "Exodus 3:13&ndash;15",
    paragraphs: [
      "Moses&rsquo; second objection to his commission is framed as a question on behalf of the Israelites: &ldquo;If I come to the people of Israel and say to them, &lsquo;The God of your fathers has sent me to you,&rsquo; and they ask me, &lsquo;What is his name?&rsquo; what shall I say to them?&rdquo; (3:13). The question may seem odd given that the Israelites already knew of the God of Abraham, but in the ancient world a deity&rsquo;s name was not merely a label &mdash; it was a disclosure of character and nature, an expression of who the deity truly was. To know the name was to have access to the person.",
      "God&rsquo;s answer is the most significant moment of divine self-disclosure in the entire Old Testament: &ldquo;God said to Moses, &lsquo;I AM WHO I AM.&rsquo; And he said, &lsquo;Say this to the people of Israel: &ldquo;I AM has sent me to you.&rdquo;&rsquo;&rdquo; (3:14). The Hebrew behind &ldquo;I AM WHO I AM&rdquo; is &lsquo;Ehyeh asher &lsquo;Ehyeh &mdash; built on the verb &lsquo;hayah, to be. The name resists simple translation. It may mean &ldquo;I AM WHAT I AM,&rdquo; affirming God&rsquo;s self-existence and self-definition. It may mean &ldquo;I WILL BE WHAT I WILL BE,&rdquo; affirming his sovereign freedom. It may be a statement of pure ontological being: he simply is, without origin, without dependence, without end.",
      "What is theologically certain is that the divine name &mdash; transliterated YHWH and rendered LORD in most English translations &mdash; is a form of this same verb. To name God YHWH is to name him as the self-existent, ever-present, always-active Being who simply is. Unlike the gods of Egypt, who were associated with natural phenomena or human projects, YHWH is not derived from anything. He is the uncaused Cause, the source of all being who himself has no source. The name is a statement of aseity &mdash; the quality of existing entirely in and of oneself.",
      "Jesus&rsquo; repeated &ldquo;I AM&rdquo; statements in the Gospel of John (&ldquo;I AM the bread of life,&rdquo; &ldquo;I AM the light of the world,&rdquo; &ldquo;Before Abraham was, I AM&rdquo;) are deliberate echoes of Exodus 3:14. The Jewish leaders who heard him say &ldquo;Before Abraham was, I AM&rdquo; (John 8:58) immediately picked up stones to throw at him &mdash; they understood exactly what he was claiming. Jesus was appropriating the divine name of Exodus 3, asserting that he is the I AM who spoke to Moses from the burning bush. The New Testament nowhere makes a bolder claim to deity.",
      "God&rsquo;s word to Moses continues: &ldquo;Say this to the people of Israel: &lsquo;The Lord, the God of your fathers, the God of Abraham, the God of Isaac, and the God of Jacob, has sent me to you.&rsquo; This is my name forever, and thus I am to be remembered throughout all generations&rdquo; (3:15). The name YHWH is to be the permanent memorial-name of God &mdash; the name through which every generation is to know and remember him. It is not a temporary disclosure to be superseded; it is the name above every name, the name into which the New Testament baptism is administered (Matthew 28:19), and the name before which every knee will ultimately bow (Philippians 2:10).",
      "The revelation of the divine name carries immense practical weight for the enslaved Israelites. They were suffering under a ruler who claimed divine status, whose name was to be feared and honored throughout the ancient world. But the God who sends Moses is the I AM &mdash; the self-existent, uncaused, indestructible Being before whom all of Pharaoh&rsquo;s pretensions crumble to nothing. To know that the one who has seen your suffering is I AM is to know that your deliverance is not contingent on political circumstances or human cleverness. The One who is committed to your rescue simply is, and nothing can prevent him from acting.",
    ],
  },
  {
    id: "The Mission",
    heading: "The Mission: Deliverance and Destination",
    reference: "Exodus 3:7&ndash;12, 16&ndash;22",
    paragraphs: [
      "Before he reveals his name, God first reveals his heart. The divine speech that commissions Moses begins not with a command but with a declaration of compassionate engagement: &ldquo;I have surely seen the affliction of my people who are in Egypt and have heard their cry because of their taskmasters. I know their sufferings, and I have come down to deliver them out of the hand of the Egyptians and to bring them up out of that land to a good and broad land, a land flowing with milk and honey&rdquo; (3:7&ndash;8). In four short verbs God summarizes his disposition toward his suffering people: seen, heard, known, come down.",
      "The fourfold affirmation is profoundly pastoral. The Israelites had been crying out in their bondage for generations, and one might be tempted to wonder whether anyone was listening. God&rsquo;s declaration to Moses is an unambiguous answer: he has seen every lash of the whip, heard every cry wrung from the depths of oppression, known the full weight of their suffering from the inside, and now he is acting. The God of Exodus 3 is not a distant observer but an intimate witness who is moved by the misery of his people to direct, personal intervention.",
      "The commission to Moses is stated with arresting directness: &ldquo;Come, I will send you to Pharaoh that you may bring my people, the children of Israel, out of Egypt&rdquo; (3:10). God&rsquo;s agency and Moses&rsquo; agency are intertwined in the same action. God will deliver; Moses will go. God will act; Moses will speak. This is the consistent biblical pattern of divine mission: God accomplishes his purposes through human instruments without surrendering his ultimate initiative or his sovereignty over the outcome. Moses is sent, but the one who sends is the one who does the work.",
      "Moses&rsquo; first objection is one of inadequacy: &ldquo;Who am I that I should go to Pharaoh and bring the children of Israel out of Egypt?&rdquo; (3:11). It is a legitimate question from a man who has every reason to feel insufficient &mdash; he is a fugitive from the Egyptian court, a shepherd in the wilderness, a man of eighty with a speech problem and a history of violent impulsivity. God&rsquo;s answer does not address any of those concerns. He does not tell Moses he is, in fact, quite capable. Instead he redirects the question entirely: &ldquo;But I will be with you&rdquo; (3:12). The adequacy for the mission is not in Moses; it is in the Presence that accompanies Moses.",
      "The destination God announces is &ldquo;a good and broad land, a land flowing with milk and honey, to the place of the Canaanites, the Hittites, the Amorites, the Perizzites, the Hivites, and the Jebusites&rdquo; (3:8). The description evokes abundance and breadth &mdash; a land expansive enough for the people, and rich enough to sustain them. But the description also acknowledges that the land is currently occupied. The mission of deliverance is also a mission of dispossession and settlement, with all the complexity that entails. God sees the end from the beginning; the journey from Egypt to Canaan will take forty years and countless trials, but the destination is already determined.",
      "The chapter ends with a remarkable strategic disclosure: God previews for Moses exactly how the events will unfold &mdash; the elders of Israel will listen, Moses and the elders will go before Pharaoh, Pharaoh will refuse, God will stretch out his hand and strike Egypt with wonders, and the Israelites will eventually leave with silver, gold, and clothing (3:16&ndash;22). This is not mere encouragement; it is a declaration of certainty. God is not proposing a plan that might work; he is narrating a future that is already settled. Moses is walking into a story that has already been written by the one who holds the end from the beginning.",
    ],
  },
  {
    id: "Application",
    heading: "Living in the Light of Exodus 3",
    reference: "John 8:58; Acts 7:30&ndash;34; Hebrews 11:24&ndash;27",
    paragraphs: [
      "Exodus 3 is a chapter about the God who sees. One of the greatest spiritual needs human beings have is the assurance that their suffering has not gone unnoticed, that their cries are not bouncing off an empty sky, that the One who made them is aware of every difficulty they face. The declaration of Exodus 3:7 &mdash; &ldquo;I have surely seen&hellip; I have heard&hellip; I know their sufferings&rdquo; &mdash; is not just historical information about ancient Israel. It is a revelation of the character of the God who does not change. The God who saw and heard in Egypt still sees and hears today. No suffering is hidden from him; no cry escapes his attention.",
      "The burning bush that is not consumed has long been a symbol of God&rsquo;s sustaining presence with his people in the midst of affliction. Israel burned in Egyptian slavery but was not consumed. The church has burned in persecution through two thousand years but has not been extinguished. Individual believers have passed through fires that should have destroyed them and emerged with the testimony that God was in the fire with them. The bush that burned without burning up is the promise of Psalm 46: &ldquo;God is our refuge and strength, a very present help in trouble&rdquo; &mdash; present not to prevent the fire but to sustain his people through it.",
      "The revelation of the divine name I AM speaks to one of the most fundamental human anxieties: the fear that the foundations are not secure, that the ground beneath one&rsquo;s feet might give way, that whatever one trusts might fail. The name YHWH is the answer to that anxiety. The God who simply is &mdash; the uncaused, self-existent, eternally present Being &mdash; cannot be shaken, cannot be threatened, cannot be diminished. When Jesus said &ldquo;Before Abraham was, I AM&rdquo; (John 8:58), he was not only making a claim to deity; he was making a claim to be the unshakeable foundation, the one fixed point in a universe of change and flux.",
      "The chapter calls us to the spiritual discipline of turning aside. The burning bush was there before Moses turned aside to look at it. The divine presence and the divine commission were available before Moses chose to investigate. His turning aside was the hinge on which the entire encounter turned. There is a kind of spiritual formation that consists simply in learning to notice &mdash; to slow down, to attend to what is unusual, to resist the gravitational pull of distraction and familiarity. God is often speaking in the margins of our ordinary lives; the question is whether we have the attentiveness to turn aside and see.",
      "Exodus 3 also speaks to the experience of being called to something beyond one&rsquo;s own ability. Moses&rsquo; objection &mdash; &ldquo;Who am I?&rdquo; &mdash; is the universal response of the genuinely humble to a genuinely overwhelming calling. The response God gives is not a boost to Moses&rsquo; self-confidence but a redirection of his gaze: &ldquo;I will be with you.&rdquo; This is the bedrock of every biblical calling, from Moses to Gideon to Jeremiah to the disciples sent to baptize all nations. The commission is always larger than the commissioned; that is intentional. It keeps the servant dependent on the Sender and ensures that the glory of what is accomplished goes to the right address.",
      "Finally, Exodus 3 teaches us that God&rsquo;s mission of liberation is always both vertical and horizontal, both theological and physical. God is concerned with Israel&rsquo;s spiritual destiny &mdash; the covenant, the law, the tabernacle, the worship that will define them as his people. But he is also concerned with their backs, bent under slavery, and their cries wrung from them by taskmasters. The God of the burning bush is not indifferent to embodied suffering. He comes down. He acts in history. He uses Moses to confront political power on behalf of the powerless. The church that takes Exodus 3 seriously will be a community that embodies both dimensions of God&rsquo;s mission: announcing the name of I AM and working, as instruments of his compassion, for the relief of those who suffer under the oppressions of a fallen world.",
    ],
  },
];

const videoItems = [
  { videoId: "oNNZO9i1Gjc", title: "BibleProject - Exodus 1-18 Overview" },
  { videoId: "ERYnL8xABnU", title: "Moses and the Burning Bush - Exodus 3 Explained" },
  { videoId: "rjKOfxFVHQw", title: "The Name of God: I AM WHO I AM in Exodus 3" },
  { videoId: "fKzYMwHbMoo", title: "The Call of Moses: Lessons from the Burning Bush" },
];

export default function Exodus3GuidePage() {
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
            Exodus 3 &mdash; Moses and the Burning Bush
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The call of God &mdash; the theophany of the burning bush, the holy ground of Horeb, the divine name I AM WHO I AM, and God&rsquo;s compassionate commission of Moses to deliver Israel from Egyptian bondage.
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
            >
              {t}
            </button>
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

        <section style={{ marginTop: "3.5rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
            Deepen your study of Exodus 3 through visual teaching on the burning bush, the revelation of the divine name, the call of Moses, and God&rsquo;s mission to liberate his people.
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

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>I Will Be with You</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Exodus 3 reveals a God who is not indifferent to suffering, not distant from his people, and not limited by the greatness of the obstacles before him. He speaks his name &mdash; I AM &mdash; as the ground of all assurance. The same God who met Moses in the wilderness fire meets his people still, in every valley of impossibility, with the same promise that has never been withdrawn: &ldquo;I will be with you.&rdquo;
          </p>
        </div>
      </main>
    </div>
  );
}
