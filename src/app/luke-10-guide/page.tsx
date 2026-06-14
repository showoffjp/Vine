"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "The Great Commission (70)",
  "Good Samaritan Story",
  "Mary and Martha",
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
    heading: "Overview: Mission, Mercy, and Devotion",
    reference: "Luke 10:1&ndash;42",
    paragraphs: [
      "Luke 10 is among the richest single chapters in the Gospels, packing together a commissioning of the seventy disciples, a fierce woe against unrepentant cities, the return of the missionaries with joy, a doxology of praise from Jesus himself, a test from a lawyer that becomes the occasion for the most beloved parable in history, and a quiet domestic scene that cuts to the heart of the Christian life. Each episode is complete in itself, yet together they form a portrait of what it means to follow Jesus &mdash; his mission, his mercy, and his call to sitting at his feet.",
      "The chapter belongs to the great central section of Luke&rsquo;s Gospel (9:51&ndash;19:27), the so-called &ldquo;Travel Narrative,&rdquo; in which Jesus is steadfastly on his way to Jerusalem and the cross. Everything in this section is shaped by that trajectory. The mission of the seventy is an urgent pre-evangelism campaign ahead of Jesus&rsquo;s own arrival in towns and villages. The Good Samaritan is told in response to a lawyer who wants to &ldquo;justify himself&rdquo; &mdash; a word that will become central to the theology of the cross. The scene at Bethany shows that the &ldquo;one thing necessary&rdquo; is to hear the word of Jesus, the word that will cost him everything in Jerusalem.",
      "Luke alone records both the sending of the seventy (or seventy-two, in some manuscripts &mdash; both echoing the nations in Genesis 10) and the story of Mary and Martha. These Lukan distinctives are part of his consistent interest in the universality of the gospel &mdash; its reach to those outside Israel (the Samaritan in the parable, the dimensions of the seventy) &mdash; and in the full inclusion of women as hearers and followers of Jesus (Mary sitting at his feet in the posture of a disciple).",
      "The chapter also contains one of the most exalted moments in the Synoptic Gospels: Jesus&rsquo;s prayer of thanksgiving in verses 21&ndash;22, sometimes called the &ldquo;Johannine thunderbolt.&rdquo; Here Jesus addresses God as Father and speaks of a mutual knowledge shared only between Father and Son, a knowledge that Jesus can choose to reveal to &ldquo;anyone to whom the Son chooses to reveal him.&rdquo; In the midst of a chapter full of mission and story and domestic detail, Jesus pauses to lift his voice in joy at what the Father is doing &mdash; hiding these things from the wise and understanding and revealing them to little children.",
      "Luke 10 invites every reader into three connected postures: the posture of the sent (going out as harvest workers into the world), the posture of the merciful (acting like the Samaritan toward the person in need right in front of us), and the posture of the disciple (sitting at the feet of Jesus and listening to what he says). These three postures are not in competition; they are the integrated shape of Christian life.",
    ],
  },
  {
    id: "The Great Commission (70)",
    heading: "The Sending of the Seventy: Workers for the Harvest",
    reference: "Luke 10:1&ndash;24",
    paragraphs: [
      "Jesus appoints seventy (or seventy-two) others and sends them out in pairs, two by two, ahead of him into every town and place he himself was about to go. The number seventy echoes the table of nations in Genesis 10 &mdash; seventy descendants of Noah who became the peoples of the earth. In Jewish tradition the Sanhedrin had seventy members, and there were seventy elders appointed to assist Moses. The number suggests comprehensiveness: this mission is for all peoples, all places. The sending is deliberate and ordered, not improvised.",
      "The opening charge is urgent and agricultural: &ldquo;The harvest is plentiful, but the laborers are few. Therefore pray earnestly to the Lord of the harvest to send out laborers into his harvest&rdquo; (10:2). Jesus sees the world as a field already ripe for gathering, not a field that must be plowed and planted before any harvest can come. Everywhere he goes, there are people ready to receive. The crisis is not opportunity &mdash; opportunity abounds. The crisis is personnel. There are not enough workers for the scale of the harvest.",
      "The instructions for the mission are deliberately spartan: no moneybag, no knapsack, no sandals. Greet no one on the road. Accept the hospitality of whatever household receives you. Eat and drink what they provide. Do not move from house to house. The effect is to create missionaries who are dependent, present, and deeply embedded in local households rather than maintaining a traveling lifestyle of self-sufficiency. They are to live on the hospitality of those they serve &mdash; because &ldquo;the laborer deserves his wages&rdquo; (10:7).",
      "The message they carry is deceptively simple: &ldquo;The kingdom of God has come near to you&rdquo; (10:9). This is the announcement of an arriving reality, not an invitation to religious improvement. The kingdom &mdash; God&rsquo;s reign, his active rule over all things &mdash; is at hand in Jesus. The works of healing that accompany the proclamation (10:9) are not optional extras or crowd-pleasers; they are demonstrations of the kingdom itself, signs that the powers of sin and sickness that have held human beings captive are being broken.",
      "When the seventy return with joy, reporting that even the demons submit to them in the name of Jesus, Jesus responds with a vision of cosmic scope: &ldquo;I saw Satan fall like lightning from heaven&rdquo; (10:18). The successful mission of the seventy is not just a pleasant episode in Galilean outreach; it is a tremor in the spiritual architecture of the universe. But Jesus quickly reorients their joy: &ldquo;Do not rejoice in this, that the spirits are subject to you, but rejoice that your names are written in heaven&rdquo; (10:20). Power is not the foundation of their security; grace is.",
      "Jesus then turns aside from the crowds and breaks into an extraordinary prayer of thanksgiving: &ldquo;I thank you, Father, Lord of heaven and earth, that you have hidden these things from the wise and understanding and revealed them to little children; yes, Father, for such was your gracious will&rdquo; (10:21). The success of the mission &mdash; ordinary people as bearers of world-shaking news &mdash; moves Jesus to worship. He then addresses the disciples privately: &ldquo;Blessed are the eyes that see what you see!&rdquo; (10:23). Prophets and kings longed to see it and did not. The disciples are living in the hour of fulfilment.",
    ],
  },
  {
    id: "Good Samaritan Story",
    heading: "The Good Samaritan: Who Is My Neighbor?",
    reference: "Luke 10:25&ndash;37",
    paragraphs: [
      "The parable of the Good Samaritan is one of the most famous stories ever told, yet its power is regularly domesticated by familiarity. To recover its force we need to hear it as a first-century Jewish audience would have heard it. The expert in the Torah who poses the question &ldquo;Who is my neighbor?&rdquo; is not asking an innocent question &mdash; he is trying to draw a boundary around the obligation of love, to define who qualifies as close enough to require his care. He wants the law to give him a smaller and more manageable circle.",
      "Jesus begins the story in the most dangerous stretch of road in Judea: the descent from Jerusalem to Jericho, seventeen miles of rocky, winding terrain long known for bandits. A man (identified only as &ldquo;a man,&rdquo; with no ethnicity stated) is stripped, beaten, and left half-dead. The first two figures to pass are a priest and a Levite &mdash; the two most expected carriers of covenant mercy, the religious professionals of Israel&rsquo;s world. Each of them sees the man and passes by on the other side. The text gives no motive. It simply records the choice.",
      "Then comes the Samaritan &mdash; and at this point the Jewish listeners would have expected a Jewish layman, the ordinary person who would finally show up the religious leaders. Instead they hear the word that in their culture was a term of contempt: Samaritan. Half-breeds, heretics, the despised enemies of proper Jewish identity. And it is the Samaritan who has compassion. It is the Samaritan who goes to him, binds his wounds, pours in oil and wine, sets him on his own animal, brings him to an inn, cares for him through the night, pays for his continued care, and promises to cover any additional expense on his return. The extravagance of the mercy is without limit.",
      "When Jesus has finished, he refuses to answer the lawyer&rsquo;s original question. He does not say, &ldquo;The neighbor is anyone in need.&rdquo; Instead he turns the question around entirely: &ldquo;Which of these three, do you think, proved to be a neighbor to the man who fell among the robbers?&rdquo; (10:36). The question has been reversed. It is not &ldquo;Who is my neighbor?&rdquo; (Who is close enough to obligate me?) but &ldquo;Which one became a neighbor?&rdquo; (What kind of person will you be?). The lawyer cannot bring himself to say &ldquo;the Samaritan&rdquo; &mdash; he says &ldquo;the one who showed him mercy.&rdquo; Jesus says: &ldquo;Go and do likewise.&rdquo;",
      "The parable confronts religious professionalism at its deepest level. The priest and Levite were not wicked men; they were busy men with reasons &mdash; possible reasons about ritual purity, about the demands of their calling, about the risks of stopping on a dangerous road. They had obligations elsewhere. What the Samaritan had was not superior knowledge or better theology; he had compassion that overrode the calculation. Love as Jesus defines it is not primarily a feeling or a duty &mdash; it is a movement toward the person in front of you, regardless of the cost.",
      "The Samaritan has also been read throughout church history as a figure of Christ himself &mdash; the despised outsider (John 8:48 calls Jesus a Samaritan) who comes to those left for dead by the systems of the world, binds their wounds, pays the full price of their rescue, and promises to return. Whether or not Luke intends an allegory, the shape of the story rhymes with the shape of the gospel: unexpected grace, from an unexpected source, at a cost the recipient could not afford. And the call to &ldquo;go and do likewise&rdquo; is a call to embody that same grace toward every broken person we encounter.",
    ],
  },
  {
    id: "Mary and Martha",
    heading: "Mary and Martha: The One Thing Necessary",
    reference: "Luke 10:38&ndash;42",
    paragraphs: [
      "The final episode in Luke 10 is brief &mdash; only five verses &mdash; yet it has generated more reflection than many longer passages. Jesus enters a village (identified elsewhere as Bethany, near Jerusalem) and is welcomed into the home of a woman named Martha. Her sister Mary sits at the feet of Jesus and listens to his teaching. Martha is distracted with much serving and comes to Jesus to complain: &ldquo;Lord, do you not care that my sister has left me to serve alone? Tell her then to help me&rdquo; (10:40).",
      "The complaint is understandable. Hospitality in the ancient world was a serious social and moral obligation. Receiving a guest with honor required significant preparation &mdash; food, service, attention. Martha is not wrong to be working; she is wrong in the shape of her anxiety. The word translated &ldquo;distracted&rdquo; (perispao) means to be drawn around, to be pulled in many directions, to be so consumed with activity that one cannot be present. Martha has so much service happening that she cannot hear the one who has come to serve her.",
      "Jesus does not criticize Martha for working. He addresses what has happened inside her: &ldquo;Martha, Martha, you are anxious and troubled about many things&rdquo; (10:41). The double use of her name is tender, not harsh &mdash; it is the tone of someone who genuinely loves the person he is correcting. He is not scolding; he is diagnosing. The anxiety and the being troubled are the problem, not the cooking. Activity in service of Jesus is good; anxiety that makes one resentful and accusatory has gone wrong somewhere.",
      "Then comes the defining statement: &ldquo;but one thing is necessary. Mary has chosen the good portion, which will not be taken away from her&rdquo; (10:42). The &ldquo;one thing necessary&rdquo; is to hear the word of Jesus. Everything else &mdash; even good and necessary things like hospitality &mdash; flows from this. Mary has positioned herself as a disciple, literally sitting at his feet in the classic posture of a student before a rabbi. In a culture that would not normally have allowed a woman to take this position, Jesus not only permits it but defends it as her right and her best choice.",
      "The contrast between the sisters is not a contrast between the active and the contemplative life as if one were superior to the other. It is a contrast between service that has lost its grounding and service that flows from a listening heart. The church needs both Marys and Marthas &mdash; but it needs Marthas who have first been Marys. When action is disconnected from listening to Jesus, it becomes anxious, resentful, and comparative (&ldquo;do you not care that my sister has left me to serve alone?&rdquo;). When action flows from time at the feet of Jesus, it has a different quality entirely.",
      "The placement of this story at the end of Luke 10 is significant. The chapter opened with the sending of the seventy &mdash; urgent mission, active service, going out with nothing into dangerous terrain. It then gave us the Good Samaritan &mdash; active, costly, immediate mercy toward a stranger. And it closes with Mary sitting still, doing nothing visible, listening to a teacher. Luke seems to be saying that the activist and the contemplative are not opposed but ordered: the listening to Jesus is not the interruption of mission; it is its source. &ldquo;The good portion&rdquo; is the one thing from which all the rest should flow.",
    ],
  },
];

const videoItems = [
  { videoId: "3dEh25pduQ8", title: "BibleProject - Overview of Luke 1-9" },
  { videoId: "fXaOoWoDPSE", title: "The Good Samaritan Parable Explained - Luke 10:25-37" },
  { videoId: "HoHPkNBkGFU", title: "Mary and Martha - Choosing the Better Part - Luke 10:38-42" },
  { videoId: "oRuS1wz4QQg", title: "The Sending of the Seventy - Luke 10 Bible Study" },
];

export default function Luke10GuidePage() {
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
            Luke 10 &mdash; The Good Samaritan and Mary and Martha
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Mission, mercy, and devotion &mdash; the sending of the seventy, the parable of the Good Samaritan who redefines neighborly love, and Mary&rsquo;s choice of the &ldquo;one thing necessary&rdquo; at the feet of Jesus.
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

        <div style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {videoItems.map((v) => (
            <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId={v.videoId} title={v.title} />
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Go and Do Likewise &mdash; and First, Sit and Listen</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Luke 10 holds together the call to go and the call to stay &mdash; to go as harvest workers into the world, to act as neighbors to the broken, and to sit at the feet of Jesus and choose the one thing necessary. These three postures are not competing; they are the integrated shape of the life that follows him.
          </p>
        </div>
      </main>
    </div>
  );
}
