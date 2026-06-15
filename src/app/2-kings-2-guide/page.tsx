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
  "Elijah Taken Up",
  "The Double Portion",
  "Elisha Begins His Ministry",
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
    heading: "Overview of 2 Kings 2",
    reference: "2 Kings 2",
    paragraphs: [
      "Second Kings 2 is one of the most dramatic chapters in the entire Old Testament &mdash; the account of the departure of Elijah, the greatest of Israel&rsquo;s prophets, and the beginning of the ministry of his successor Elisha. No other prophet in Scripture is taken from the earth the way Elijah is: in a whirlwind, accompanied by chariots and horses of fire, translated directly into God&rsquo;s presence without passing through death. Only Enoch before him shares this distinction (Genesis 5:24), and together they stand as figures of a life so fully yielded to God that even the final boundary was crossed differently.",
      "The chapter is also a study in succession &mdash; in how the prophetic mantle passes from one generation to the next. Elisha refuses three times to leave Elijah&rsquo;s side on what both know to be his last day on earth. When the moment comes, Elisha watches, picks up the fallen mantle, and immediately proves by his first miracle that the spirit resting on Elijah now rests on him. The transition is validated not by any council or appointment but by the power of God working through the new prophet as it had worked through the old.",
      "The chapter also raises profound questions about the nature of calling and succession. Elisha had been anointed Elijah&rsquo;s successor back in 1 Kings 19, but the work of actually becoming that successor required persistence, presence, and a willingness to ask for what seemed impossible &mdash; a double portion of Elijah&rsquo;s spirit. That request was &ldquo;a hard thing&rdquo; (v.10), not because God was unwilling but because the spirit cannot be transferred like a property deed; it can only be given by God himself, and given to those who are watching and waiting for it.",
      "What follows Elijah&rsquo;s departure confirms that God has indeed honored Elisha&rsquo;s request. The fifty sons of prophets who had watched from a distance witness Elisha parting the Jordan with Elijah&rsquo;s mantle and immediately bow to the ground before him, saying, &ldquo;The spirit of Elijah rests on Elisha&rdquo; (v.15). The ministry that Elijah began is not finished with Elijah &mdash; it continues and even expands through the man he left behind.",
      "Theologically, 2 Kings 2 teaches that prophetic succession is not inherited but bestowed, that persistence in following is itself a form of faithfulness, and that God does not leave his people without a witness even when the most visible voice of an era is removed. The chapter ends not with mourning but with Elisha actively at work &mdash; healing springs, confronting mockers, and beginning what will prove to be one of the most extensive miracle ministries in all of the Hebrew Scriptures.",
    ],
  },
  {
    id: "Elijah Taken Up",
    heading: "Elijah Taken Up",
    reference: "2 Kings 2:1&ndash;12",
    paragraphs: [
      "The chapter opens with the knowledge that the departure of Elijah is imminent: &ldquo;When the Lord was about to take Elijah up to heaven by a whirlwind&rdquo; (v.1). This information is given to the reader before the journey begins, which means we watch the events that follow knowing what Elijah and Elisha know &mdash; that this is a farewell. The journey itself takes them from Gilgal to Bethel to Jericho and finally to the Jordan &mdash; a route that traces some of the most significant locations in Israel&rsquo;s history.",
      "At each stopping point, Elijah attempts to send Elisha away. &ldquo;Please stay here, for the Lord has sent me as far as Bethel&rdquo; (v.2). And at each point, Elisha refuses with the same insistent words: &ldquo;As the Lord lives, and as you yourself live, I will not leave you&rdquo; (v.2). Three times this exchange takes place &mdash; at Bethel, at Jericho, and at the Jordan &mdash; and three times Elisha refuses to be separated from his master. His persistence is not sentimentality; it is intentional, purposeful presence on what he knows to be the defining day.",
      "At each stop, the sons of the prophets &mdash; the companies of prophetic apprentices who lived at Bethel and Jericho &mdash; come to Elisha privately with the question: &ldquo;Do you know that today the Lord will take your master away from you?&rdquo; (v.3, v.5). Elisha responds both times with &ldquo;Yes, I know; keep quiet.&rdquo; He knows. He is not in denial, not hoping for a last-minute reprieve. He is walking with his eyes open toward a moment of great loss and great transition, and he will not be talked out of being present for it.",
      "When they reach the Jordan, Elijah takes his mantle, rolls it up, and strikes the water with it &mdash; and the water parts, as it had parted for Moses at the Red Sea and for Joshua at this very river when Israel entered the Promised Land. The two of them cross over on dry ground. There, on the other side of the Jordan, Elijah asks his question: &ldquo;Ask what I shall do for you, before I am taken from you&rdquo; (v.9). It is a generous final offer, recalling Solomon&rsquo;s dream at Gibeon, and Elisha knows exactly what he wants.",
      "Fifty men from the sons of the prophets stood watching from a distance (v.7) &mdash; present enough to witness, too far away to hear. They see what happens but do not understand it in the moment. This detail is significant: the most important spiritual transactions are often invisible to those who are not close enough. Elisha&rsquo;s persistent closeness to Elijah was not incidental; it was the very thing that positioned him to receive what those watching from afar would only learn about second-hand.",
      "Then it happens: &ldquo;And as they still went on and talked, behold, chariots of fire and horses of fire separated the two of them. And Elijah went up by a whirlwind into heaven&rdquo; (v.11). The chariots of fire do not carry Elijah up; they separate the two men, as if to mark the moment when one era ends and another begins. The whirlwind takes Elijah, and Elisha is left standing, watching, calling out: &ldquo;My father, my father! The chariots of Israel and its horsemen!&rdquo; (v.12). He tears his own clothes in grief &mdash; the ancient sign of mourning &mdash; and there is no attempt to diminish the loss. A great man is gone, and Elisha feels it fully.",
    ],
  },
  {
    id: "The Double Portion",
    heading: "The Double Portion",
    reference: "2 Kings 2:9&ndash;15",
    paragraphs: [
      "When Elijah asks what he can do for Elisha before he is taken away, Elisha&rsquo;s answer is extraordinary: &ldquo;Please let there be a double portion of your spirit on me&rdquo; (v.9). The phrase &ldquo;double portion&rdquo; is drawn from the law of inheritance in Deuteronomy 21:17, where the firstborn son received twice the share of the other sons as the primary heir. Elisha is not asking to be twice as powerful as Elijah for its own sake; he is asking to be recognized as Elijah&rsquo;s true heir, the one who carries forward his master&rsquo;s work.",
      "Elijah&rsquo;s response is sobering: &ldquo;You have asked a hard thing&rdquo; (v.10). This is not a refusal, but it is a clarification &mdash; the granting of such a request is not within Elijah&rsquo;s power to simply authorize. The spirit of God is not property that can be willed from one man to another. What Elijah says next defines the condition: &ldquo;Yet, if you see me as I am being taken from you, it shall be so for you, but if you do not see me, it shall not be so&rdquo; (v.10). The seeing is the test. To see the departure, Elisha must remain present, attentive, and watching until the very last moment.",
      "This condition is deeply significant. Elijah does not say the spirit will be given if Elisha prays hard enough, or performs well enough, or has served long enough. He says it will be given if Elisha sees. Seeing here is active and costly &mdash; it has required three refusals to leave, a long journey, and the willingness to stand at the edge of an extraordinary moment without flinching. The double portion is, in this sense, the reward of persistent, attentive companionship.",
      "Elisha does see. He is watching when the chariots of fire appear and the whirlwind takes Elijah up. His cry &mdash; &ldquo;My father, my father! The chariots of Israel and its horsemen!&rdquo; (v.12) &mdash; is a witness statement as much as a lament. He saw it. The condition has been met. And immediately the story moves to confirm that the spirit has been granted: Elisha picks up the mantle of Elijah that had fallen from him, returns to the bank of the Jordan, and strikes the water with it.",
      "The words Elisha speaks at the Jordan river are crucial: &ldquo;Where is the Lord, the God of Elijah?&rdquo; (v.14). He does not say &ldquo;where is the God of Elijah and Elisha&rdquo; or simply strike the water trusting in himself. He invokes the God of his master, making clear that what he is relying on is not the mantle as a magical object, not his own authority, but the same God who had worked through Elijah. When he strikes the water, it parts (v.14). The miracle is immediate and unambiguous. The spirit of Elijah does rest on Elisha.",
      "When the fifty sons of the prophets who were watching from Jericho see Elisha return across the dry Jordan, they bow to the ground before him and declare, &ldquo;The spirit of Elijah rests on Elisha&rdquo; (v.15). This is not polite deference to a new authority figure; it is theological recognition &mdash; they can see that the spirit has been transferred. The double portion Elisha asked for is confirmed not by his own declaration but by the community&rsquo;s witness to what God has done through him. The succession is complete.",
    ],
  },
  {
    id: "Elisha Begins His Ministry",
    heading: "Elisha Begins His Ministry",
    reference: "2 Kings 2:15&ndash;25",
    paragraphs: [
      "The first act of Elisha&rsquo;s independent ministry is both practical and gracious. The men of Jericho come to him with a problem: &ldquo;Behold, the situation of this city is pleasant, as my lord sees, but the water is bad, and the land is unfruitful&rdquo; (v.19). The city sits in an oasis &mdash; pleasant by appearance &mdash; but something at its source is wrong, causing the water to be unwholesome and the land barren. It is a local catastrophe affecting everyone who depends on those springs.",
      "Elisha asks for a new bowl and salt, and throws the salt into the spring, declaring, &ldquo;Thus says the Lord, I have healed this water; from now on neither death nor miscarriage shall come from it&rdquo; (v.21). And the water was healed, as Elisha had said. Salt is the purifying agent, and the new bowl emphasizes that this is a fresh act of God, not a continuation of anything old. The healing of the spring is a sign of restoration &mdash; a barren, death-bringing source made life-giving again. For a new prophet beginning his ministry, it is an appropriate first miracle: a healing at the source.",
      "The episode that follows is more troubling and has generated much discussion: the mocking youths and the bears. As Elisha goes up to Bethel, a group of young men comes out of the city and mocks him, saying &ldquo;Go up, you baldhead! Go up, you baldhead!&rdquo; (v.23). Elisha turns and curses them in the name of the Lord, and two she-bears come out of the woods and maul forty-two of the youths (v.24). The story has seemed harsh to many readers &mdash; what appears to be a disproportionate response to mockery.",
      "Understanding the episode requires attention to the context. The phrase &ldquo;go up, you baldhead&rdquo; is not innocent teasing. In the immediate narrative context, &ldquo;go up&rdquo; echoes the language used of Elijah&rsquo;s translation into heaven &mdash; &ldquo;go up&rdquo; as he was taken up. The youths are, in effect, calling for Elisha to disappear as Elijah had, dismissing the prophetic authority that has just been established. Bethel is also the location of the golden calves set up by Jeroboam &mdash; the epicenter of apostate worship in the northern kingdom. These are not innocent children on the street; they are likely older youths from a city deeply hostile to the Lord&rsquo;s prophet.",
      "The judgment that falls is also God&rsquo;s judgment, not merely Elisha&rsquo;s personal revenge. The bears come from the woods &mdash; Elisha does not summon them by his own power. And the number forty-two is not accidental in a narrative where numbers carry meaning. The incident establishes at the very outset of Elisha&rsquo;s ministry that the prophetic word carries real weight, that the representative of God is not to be despised with impunity, and that the God of Elijah is also the God of Elisha &mdash; powerful, present, and not mocked.",
      "The chapter concludes with Elisha traveling to Mount Carmel and from there back to Samaria (v.25) &mdash; the very mountain where Elijah had confronted the prophets of Baal, and the capital of the apostate northern kingdom. His itinerary is deliberate: he is not retreating to safe corners but moving into the centers of both prophetic memory and royal power. The ministry that began with a double portion, confirmed by a parted river, begins to unfold across the whole landscape of Israel&rsquo;s life.",
      "Taken together, the miracles of 2 Kings 2 &mdash; the parting of the Jordan, the healing of the spring, and the judgment on the mocking youths &mdash; establish the full scope of the prophetic ministry that is beginning. Elisha can work in nature (the river), in the community&rsquo;s daily life (the water supply), and in confronting those who reject God&rsquo;s word. He is equipped for all of it because the spirit of Elijah rests on him &mdash; and the spirit of Elijah is the Spirit of the God of Israel.",
    ],
  },
];

const videoItems = [
  { videoId: "vSxUiI0DLCM", title: "2 Kings 2 - Elijah Taken to Heaven and Elisha's Calling" },
  { videoId: "TrGVSJHCFXE", title: "Elisha and the Double Portion - 2 Kings 2 Study" },
  { videoId: "qTvKTFfNqZs", title: "The Chariot of Fire - Elijah and Elisha Explained" },
  { videoId: "UH8MiQoNVt0", title: "Succession and Calling - Lessons from 2 Kings 2" },
];

export default function TwoKings2GuidePage() {
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
            2 Kings 2
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Elijah and Elisha&rsquo;s final journey together, Elisha&rsquo;s persistent request for a double portion of Elijah&rsquo;s spirit, the whirlwind and chariot of fire, and Elisha beginning his own miracle ministry.
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
              Deepen your study of 2 Kings 2 through visual teaching on Elijah&rsquo;s departure, Elisha&rsquo;s double portion, the chariot of fire, and the beginning of Elisha&rsquo;s own prophetic ministry.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Spirit of Elijah Rests on Elisha</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Second Kings 2 teaches that God does not leave his people without a witness. When Elijah is taken up, the spirit that rested on him is poured out on his successor &mdash; not by automatic inheritance but by divine gift, received through persistent presence and earnest desire. &ldquo;The spirit of Elijah rests on Elisha&rdquo; (v.15) is the community&rsquo;s testimony that God&rsquo;s work continues past any single generation.
          </p>
        </div>
      </main>
    </div>
  );
}
