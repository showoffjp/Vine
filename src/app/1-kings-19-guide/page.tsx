"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Elijah Runs",
  "The Angel and the Journey",
  "The Still Small Voice",
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
    heading: "Overview of 1 Kings 19",
    reference: "1 Kings 19:1&ndash;21",
    paragraphs: [
      "First Kings 19 is one of the most psychologically honest and pastorally tender chapters in all of Scripture. It arrives on the heels of one of the greatest prophetic triumphs in Israel&rsquo;s history &mdash; the confrontation on Mount Carmel in chapter 18, where Elijah had called down fire from heaven, silenced the prophets of Baal, and led all Israel in a great renewal of covenant allegiance. The rain had come. God had vindicated his servant spectacularly. And then everything fell apart.",
      "Queen Jezebel, the Sidonian princess who had made Baal worship the state religion of the northern kingdom, sends Elijah a message: by this time tomorrow he will be dead. And Elijah &mdash; the man who had just faced down four hundred and fifty prophets of Baal without flinching &mdash; runs. He runs into the wilderness of Judah, sits under a juniper tree, and asks God to take his life. &ldquo;It is enough; now, O Lord, take away my life, for I am no better than my fathers&rdquo; (19:4).",
      "This chapter is extraordinary precisely because it refuses to sanitize what happened to Elijah. It does not explain it away as a temporary lapse of faith that a stronger prophet would never have experienced. It names it plainly: Elijah was afraid. He was exhausted. He was done. He felt utterly alone and uniquely singled out for persecution, the last faithful man standing in a nation that had abandoned God. These feelings were not entirely accurate &mdash; God will inform him there are seven thousand in Israel who have not bowed to Baal &mdash; but they were real feelings, and God treats them as such.",
      "What God does in this chapter is just as remarkable as what he did on Carmel. There is no fire this time, no dramatic public vindication, no spectacular miracle. There is bread and water. There is a touch. There is a gentle question: &ldquo;What are you doing here, Elijah?&rdquo; (19:9, 13). There is a still small voice, and there is a new commission. The chapter shows us a God who meets his servants at their lowest point not with rebuke but with food, rest, presence, and a renewed purpose. It is a chapter about grace in the wilderness.",
      "The chapter ends with Elijah receiving two specific commands &mdash; to anoint Hazael as king over Syria, Jehu as king over Israel, and Elisha as his prophetic successor &mdash; and with the dramatic scene of Elijah casting his mantle over Elisha as he plows in the field. Life goes on. The mission continues. Even the prophet who asked to die is not done yet.",
    ],
  },
  {
    id: "Elijah Runs",
    heading: "Elijah Runs: Fear, Exhaustion, and the Will to Die",
    reference: "1 Kings 19:1&ndash;5",
    paragraphs: [
      "The opening verses of 1 Kings 19 present one of the most jarring contrasts in the Bible. Verses 1 and 2 simply report what Ahab told Jezebel and what Jezebel threatened, and the narrative effect is immediate: the prophetwhose word had held back rain for three years, who had outrun the royal chariot, who had faced down the establishment of an entire state religion, is now &ldquo;afraid&rdquo; and rises and &ldquo;ran for his life&rdquo; (19:3). The Hebrew is blunt. He feared. He ran.",
      "Many readers over the centuries have found Elijah&rsquo;s reaction here puzzling, even embarrassing. How can this be the same man? What happened to the courage of Carmel? But the text offers no editorial condemnation. It records the facts without comment, which is itself a kind of pastoral grace. Elijah&rsquo;s fear is not presented as apostasy or as moral failure; it is presented as human reality. After the enormous emotional and spiritual expenditure of Carmel, after three years of hiding and drought and miraculous provision, the body and the spirit were spent. One hostile message from one powerful woman was enough to break what had been stretched almost beyond endurance.",
      "Elijah travels south all the way out of the northern kingdom, past Jerusalem, to Beersheba at the edge of the Negev desert &mdash; as far from Jezebel as he can get. And then he leaves his servant there and goes a further day&rsquo;s journey alone into the wilderness. This detail is poignant. He does not merely want to escape Jezebel; he wants to be alone. He has had enough of people, of mission, of bearing the burden of a nation on his shoulders. He sits under a &ldquo;broom tree&rdquo; (the juniper tree of older translations) and prays to die: &ldquo;It is enough.&rdquo;",
      "The phrase &ldquo;I am no better than my fathers&rdquo; is a window into Elijah&rsquo;s interior state. He seems to be saying: I thought I could make a difference, but I am just another man who tried and failed. The fathers also tried and died, and Israel still went after other gods. Elijah has internalized the failure of the whole prophetic mission as a personal failure, a verdict on his own adequacy. It is the logic of depression, which characteristically personalizes, exaggerates, and universalizes bad experiences.",
      "What happens next is quietly astounding. After this prayer &mdash; asking God to let him die &mdash; Elijah lies down and sleeps. He does not receive a rebuke. He does not hear a sermon. He does not get a vision. He sleeps. And then an angel touches him. Not to judge, not to instruct &mdash; just to touch him and say, in the most ordinary of terms: &ldquo;Arise and eat&rdquo; (19:5). There is bread baked on hot stones and a jar of water. The first response of heaven to a prophet in suicidal despair is a meal and sleep. God meets the physical body before he addresses the soul.",
      "This is a profound pastoral principle hidden in plain sight. The chapter implicitly acknowledges that spiritual crisis is often inseparable from physical depletion. Elijah was not primarily suffering from deficient theology; he was exhausted. And God&rsquo;s first remedy is not a lecture but food and rest. The body matters. Rest matters. The prophet who would serve God tomorrow needs to sleep and eat today. The God who made the body does not hold its needs in contempt, even when those needs are presenting themselves in the extreme form of a man lying under a tree, done with living.",
    ],
  },
  {
    id: "The Angel and the Journey",
    heading: "The Angel and the Forty-Day Journey",
    reference: "1 Kings 19:5&ndash;8",
    paragraphs: [
      "After the first provision of food and water, Elijah sleeps again. And then the angel of the Lord comes a second time and touches him, with the same gentle instruction: &ldquo;Arise and eat, for the journey is too great for you&rdquo; (19:7). The repetition is significant. God does not expect Elijah to rise restored after a single meal. He gives him another portion, another moment of tending, before placing any demands on him. The passage breathes patience.",
      "The phrase &ldquo;the journey is too great for you&rdquo; is the first hint that something more is coming, some calling or destination that Elijah has not yet been told about. It is also a frank acknowledgment of Elijah&rsquo;s condition. The journey IS too great for him as he currently is. God does not dispute the prophet&rsquo;s weakness; he addresses it. He provides what is needed before asking anything in return. This sequence &mdash; provision first, then calling &mdash; runs directly counter to the tendency of human institutions to demand performance before offering support.",
      "Strengthened by the food and water, Elijah arises and travels for forty days and forty nights to Horeb, the mountain of God. This is the Sinai of the Exodus narratives, the mountain where Moses had met God in the burning bush and where Israel had received the Law in thunder and fire. The forty-day journey mirrors Moses&rsquo;s forty days on the mountain (Ex. 24:18) and anticipates Jesus&rsquo;s forty days in the wilderness (Matt. 4:2). The number forty in the biblical world carries the freight of a significant period of testing, preparation, and transition.",
      "The typological connection to Moses is not accidental. Like Moses, Elijah has been the great prophet called to confront an idolatrous Israel and call the nation back to the covenant made at this very mountain. Like Moses, he will stand on Horeb and encounter the presence of the Lord. The journey is not merely geographical; it is a journey back to the source &mdash; to the place where God had first spoken to his people and established the covenant that Elijah has been defending at such personal cost.",
      "Elijah&rsquo;s arrival at Horeb and his lodging in a cave marks the lowest and most inward point of the chapter&rsquo;s geographical and spiritual movement. He has gone as far as he can go: out of Israel, out of Judah, out of civilization, out of company, into the oldest and holiest wilderness in the national memory, into a cave. The movement inward mirrors the movement inward of his soul. And into this deepest hiding place comes the word of the Lord: &ldquo;What are you doing here, Elijah?&rdquo; (19:9).",
      "This question is not accusatory; it is an invitation to self-disclosure. God knows the answer. He wants Elijah to say it out loud, to name what is happening inside him. Elijah&rsquo;s answer is a compressed summary of his emotional state: he has been very jealous for the Lord, the people have abandoned the covenant, they have thrown down the altars and killed the prophets, and he alone is left, and they are seeking his life (19:10). There is real truth in this account, and also real distortion &mdash; he is manifestly not alone, and he knows of at least one other faithful man, Obadiah, who has been hiding prophets. But God does not correct the distortions yet. He first shows himself.",
    ],
  },
  {
    id: "The Still Small Voice",
    heading: "The Still Small Voice at Horeb",
    reference: "1 Kings 19:9&ndash;18",
    paragraphs: [
      "The theophany that comes to Elijah at Horeb is one of the most carefully constructed moments in the Books of Kings. God tells Elijah to stand on the mountain before the Lord, &ldquo;for the Lord is about to pass by&rdquo; (19:11). The language echoes Moses&rsquo;s request on the same mountain: &ldquo;Please show me your glory&rdquo; (Ex. 33:18), and God&rsquo;s response: &ldquo;I will make all my goodness pass before you&rdquo; (Ex. 33:19). Elijah, like Moses, will witness a divine passing. But the content of this theophany is deliberately unexpected.",
      "First comes a great wind that tears the mountains and shatters the rocks before the Lord &mdash; &ldquo;but the Lord was not in the wind&rdquo; (19:11). Then an earthquake &mdash; &ldquo;but the Lord was not in the earthquake.&rdquo; Then fire &mdash; &ldquo;but the Lord was not in the fire.&rdquo; Wind, earthquake, and fire are the classical accompaniments of divine revelation in Israel&rsquo;s tradition: wind had parted the Red Sea, earthquake had accompanied the giving of the Law at Sinai, fire had descended on the altar at Carmel just the day before yesterday. These were the media of overwhelming, unmistakable, world-shattering divine power.",
      "But God is not in any of them this time. After the fire there is &ldquo;a still small voice&rdquo; &mdash; the King James rendering of the Hebrew &lsquo;qol demamah daqah&rsquo;, variously translated as a low whisper, the sound of a gentle blowing, a thin silence, or a voice of sheer silence. The phrase is deliberately paradoxical: a voice that is silent, a sound that is stillness. Whatever precisely it denotes, the contrast with what preceded is radical. After the pyrotechnics of wind, earthquake, and fire, God speaks in something barely there, something that demands that the listener go quiet inside in order to hear.",
      "When Elijah hears it, he wraps his face in his mantle &mdash; the garment that will later pass to Elisha &mdash; and stands at the entrance of the cave. The wrapping of the face recalls Moses hiding his face at the burning bush (Ex. 3:6), the instinctive human response to an encounter with the holy. And then the same question as before: &ldquo;What are you doing here, Elijah?&rdquo; (19:13). And Elijah gives the same answer, word for word. God has not rebuked him, not corrected him; and Elijah has not moved from his position. But the encounter is about to shift.",
      "God&rsquo;s response to Elijah&rsquo;s repeated complaint is threefold. First, practical: go anoint Hazael, Jehu, and Elisha. There is work still to be done; the mission has not ended because Elijah is exhausted. Second, reassuring: these three will be instruments of the divine judgment on Baal worship that Elijah has been calling for; he is not laboring in vain. Third, corrective: &ldquo;Yet I will leave seven thousand in Israel, all the knees that have not bowed to Baal, and every mouth that has not kissed him&rdquo; (19:18). Elijah&rsquo;s sense of isolation &mdash; &ldquo;I alone am left&rdquo; &mdash; was simply false. God had a hidden remnant the prophet did not know about.",
      "The still small voice episode carries enormous theological weight. It is a deliberate redefinition of the way God works. The assumption that divine action must always be spectacular, overwhelming, and immediately visible is gently but firmly corrected. The God who answers by fire on Carmel is the same God who speaks in a thin silence at Horeb. Both are authentic modes of divine presence. But the second is harder to hear and requires more of the listener &mdash; it requires quiet, attentiveness, the willingness to wait when the fireworks are over. The chapter suggests that some things God can only say to us when we are depleted enough to stop relying on what we can see and hear and produce, and begin to simply listen.",
    ],
  },
  {
    id: "Application",
    heading: "Application: God Meets Us in the Wilderness",
    reference: "1 Kings 19:1&ndash;21",
    paragraphs: [
      "First Kings 19 is perhaps the most personally applicable chapter in the Books of Kings because it addresses an experience that virtually every serious Christian has faced: the collapse that comes after great effort, the exhaustion and discouragement that can follow spiritual exertion, the sense that the work has been for nothing and you are the only one still trying. Elijah&rsquo;s story gives this experience a name, a shape, and a God-given response.",
      "The first and perhaps most important application is that God&rsquo;s initial response to Elijah&rsquo;s despair was physical care, not spiritual rebuke. He did not say: &ldquo;Elijah, where is your faith? Think of all I have done for you!&rdquo; He provided bread and water and sleep. This is a radical pastoral grace, and it carries a direct implication for how we care for ourselves and for one another. Before we address the spiritual dimensions of burnout and discouragement, we should ask whether the person &mdash; or whether we ourselves &mdash; have eaten, rested, slept. The God who made the body takes it seriously. Neglecting physical basics in the name of spiritual zeal is not holiness; it is the setup for a crash under a juniper tree.",
      "The second application concerns the voice of God in ordinary life. 1 Kings 19 does not teach that God never works in wind, earthquake, or fire &mdash; he clearly does, as the whole rest of the Bible demonstrates. What it teaches is that God cannot be contained in any single mode of working, and that the still small voice &mdash; the quiet interior nudge of the Spirit, the gentle prompting of Scripture internalized through long meditation, the soft certainty that comes after prayer &mdash; is just as genuinely God as the burning bush or the tongues of flame at Pentecost. Learning to hear the still small voice requires the willingness to wait, to be quiet, to not demand that God&rsquo;s reality always announce itself with spectacular effects.",
      "The third application is about the hidden remnant. Elijah was certain he was alone: &ldquo;I alone am left&rdquo; (19:10, 14). He was wrong. Seven thousand had not bowed. God&rsquo;s work in the world is always larger than any single observer can see. The most faithful person you know may still be carrying the conviction that they are the last. The church that feels like a remnant may be surrounded by others who feel exactly the same. One function of Christian community is to break the isolation that is the signature lie of depression and discouragement &mdash; to say, through genuine fellowship: &ldquo;You are not alone. We are here.&rdquo;",
      "Fourth, the chapter is a study in divine patience with recurring human weakness. Elijah gives the same complaint twice (vv. 10 and 14), and God does not grow exasperated. He does not say: &ldquo;We have already covered this.&rdquo; He meets the same words the second time with the same combination of gentle correction and renewed commission. The God of 1 Kings 19 is not a God who gives us one shot at recovery and moves on. He is the God who asks again, gently, &ldquo;What are you doing here?&rdquo; &mdash; not to shame but to surface, not to condemn but to redirect.",
      "Finally, the chapter closes with recommissioning, not retirement. Elijah is not told to find a cave and rest for the remainder of his ministry. He is sent back into the world with specific, practical tasks. The angel&rsquo;s provision was not an end in itself; it was preparation for what comes next. For the discouraged Christian, this is both demanding and hopeful. God&rsquo;s wilderness provision is real and sufficient &mdash; and it is purposeful. The bread and water and still small voice are not the destination; they are the equipment for the road ahead. What feels like the end is, in God&rsquo;s economy, the preparation for the next beginning.",
    ],
  },
];

const videoItems = [
  { videoId: "vmx4UjRFp0M", title: "BibleProject - Overview: 1 Kings 12 to 2 Kings 25" },
  { videoId: "8YECPd-ENYU", title: "Elijah Under the Juniper Tree &mdash; 1 Kings 19 Explained" },
  { videoId: "kq59P0IIQBA", title: "The Still Small Voice: God Meets Elijah at Horeb" },
  { videoId: "rjT_FrHQXFs", title: "Elijah and the Prophets &mdash; God&rsquo;s Power in 1 Kings" },
];

export default function Kings19GuidePage() {
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
            1 Kings 19 &mdash; The Still Small Voice
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            After the triumph of Carmel, Elijah collapses under a juniper tree and asks to die. In the wilderness, God meets him &mdash; not in wind, earthquake, or fire, but in a still small voice. A study of prophetic burnout, divine gentleness, and what it means to be recommissioned after you have come to the end of yourself.
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

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.15rem" }}>Video Teaching on 1 Kings 19</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }} dangerouslySetInnerHTML={{ __html: v.title }} />
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Arise and Eat &mdash; the Journey Is Too Great</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Kings 19 stands as one of Scripture&rsquo;s most compassionate passages. It refuses to sanitize the prophet&rsquo;s despair, refuses to rebuke it away, and refuses to leave him in it. Instead God tends him, questions him, reveals himself in a still small voice, and sends him back to work. Whatever wilderness you are in today, the God of Elijah is asking the same gentle question: &ldquo;What are you doing here?&rdquo; &mdash; and offering the same bread, the same water, and the same renewed commission.
          </p>
        </div>
      </main>
    </div>
  );
}
