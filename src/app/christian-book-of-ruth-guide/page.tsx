"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ROSE = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "A Story in the Dark Times",
  "Loss and Loyalty",
  "Ruth and Boaz",
  "The Kinsman-Redeemer",
  "The Line of David",
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
    id: "A Story in the Dark Times",
    heading: "A Story in the Dark Times",
    reference: "Ruth 1",
    paragraphs: [
      "The Book of Ruth opens with a deceptively simple line that locates the entire story in its historical and moral setting: &ldquo;In the days when the judges ruled&rdquo; (1:1). To anyone who has just read the Book of Judges, those words carry a heavy weight. That era was one of recurring chaos, idolatry, and violence, summarized by the haunting refrain that &ldquo;there was no king in Israel; everyone did what was right in his own eyes.&rdquo; It was a time of spiritual darkness, of a nation drifting far from its God.",
      "Against this grim backdrop, Ruth tells a small, quiet story of ordinary faithfulness &mdash; and that contrast is the whole point. Where Judges shows us the public collapse of a society, Ruth shows us the hidden persistence of covenant love in the lives of a few obscure people. It is as if the narrator turns the camera away from the battlefields and the tribal feuds to a single grieving family, and there, in the small kindnesses between widows and neighbors, we glimpse the kind of faithfulness that God has been seeking all along.",
      "The crisis that sets the story in motion is a famine. A man named Elimelech, of Bethlehem in Judah, takes his wife Naomi and their two sons and leaves the promised land to sojourn in Moab, a neighboring country east of the Dead Sea. The move is one of desperation, and it carries a quiet irony: Bethlehem means &ldquo;house of bread,&rdquo; yet the house of bread has run empty, driving its people into a foreign land for survival.",
      "In Moab the family&rsquo;s troubles only deepen. Elimelech dies, leaving Naomi a widow in a strange country. Her two sons marry Moabite women, Orpah and Ruth, but after about ten years both sons also die, leaving no children. In a single devastating sweep, Naomi is stripped of her husband and both her sons. Three widows remain, with no men to provide for them and no heirs to carry on the family name &mdash; in the ancient world, a situation of almost total vulnerability and loss.",
      "It is worth pausing on how exposed these women are. In that society a woman&rsquo;s security and identity were bound up with husband and sons; a widow without male relatives stood at the very edge of poverty and danger. Naomi has lost everything that gave her a place in the world, and she is far from home among a people her own nation regarded as outsiders. The opening of Ruth is, quite simply, a portrait of catastrophe.",
      "And yet the narrator drops a hint of hope. Naomi hears &ldquo;that the LORD had visited his people and given them food&rdquo; (1:6) &mdash; the famine in Bethlehem has ended. She resolves to return home. The house of bread is being filled again, and Naomi, emptied of everything, turns her face back toward it. The reader senses that behind the bare facts of famine and death, a hidden hand is quietly at work, beginning to draw a broken family back toward the place of blessing.",
      "So the stage is set. In the darkest of times, when the nation has lost its way, the story narrows to one widow and her foreign daughter-in-law walking the road back to Bethlehem. Everything that follows &mdash; loyalty, redemption, the surprising twist of providence &mdash; will unfold from this beginning. Ruth invites us to believe that God is no less present in the quiet faithfulness of ordinary people than in the great public dramas of history, and perhaps even more so.",
    ],
  },
  {
    id: "Loss and Loyalty",
    heading: "Loss and Loyalty",
    reference: "Ruth 1",
    paragraphs: [
      "As the three widows set out on the road toward Judah, Naomi stops and urges her daughters-in-law to turn back. It is a moment of striking selflessness in the midst of her own grief. She has nothing to offer them &mdash; no more sons for them to marry, no future security &mdash; and so she releases them to return to their mothers&rsquo; homes in Moab, where they might yet find new husbands and new lives. &ldquo;Go, return each of you to her mother&rsquo;s house,&rdquo; she says, blessing them and weeping with them (1:8).",
      "Orpah, after much weeping, takes Naomi&rsquo;s advice and turns back to her people and her gods. The narrative does not condemn her; she does the sensible, expected thing. But her departure throws into sharp relief the astonishing choice of Ruth, who &ldquo;clung&rdquo; to Naomi and refused to leave. Naomi presses her once more to follow Orpah, and Ruth answers with words that have echoed through the centuries as one of the supreme expressions of covenant loyalty in all of Scripture.",
      "&ldquo;Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God. Where you die I will die, and there will I be buried&rdquo; (1:16&ndash;17). In this pledge Ruth renounces her homeland, her people, and her former gods, binding herself to Naomi and to the LORD with a solemn oath. She has no husband to bind her to this family, no obligation that custom could enforce; her loyalty is pure gift, chosen freely in the face of an uncertain future.",
      "This kind of love has a name in the Hebrew of the Old Testament: hesed. It is the steadfast, covenant loyalty that goes beyond duty &mdash; the faithful, loving-kindness that God himself shows to his people, and that he delights to see reflected among them. Ruth, a Moabite outsider, becomes one of the great embodiments of hesed in the Bible. Her devotion to a destitute mother-in-law mirrors the very character of the God to whom she is pledging herself.",
      "When the two women finally reach Bethlehem, the whole town is stirred. The women exclaim, &ldquo;Is this Naomi?&rdquo; But Naomi, crushed by her losses, will not even own her name. &ldquo;Do not call me Naomi&rdquo; &mdash; which means &ldquo;pleasant&rdquo; &mdash; &ldquo;call me Mara&rdquo; &mdash; &ldquo;bitter&rdquo; &mdash; &ldquo;for the Almighty has dealt very bitterly with me. I went away full, and the LORD has brought me back empty&rdquo; (1:20&ndash;21). Her words are raw and honest, a lament that does not flinch from naming her pain or from laying it before God.",
      "Naomi&rsquo;s bitterness is not presented as a failure of faith but as the unvarnished truth of grief. The Bible makes room for such honesty; it does not require the suffering to pretend. Yet there is a poignant irony in her complaint that she returns &ldquo;empty,&rdquo; for at her very side stands Ruth, whose loyalty is worth more, the women will later say, than seven sons. The emptiness Naomi feels is already, unknown to her, being quietly filled.",
      "And the chapter ends with one more hint of providence: they arrived in Bethlehem &ldquo;at the beginning of barley harvest&rdquo; (1:22). The famine is over; the fields are ripe. Into this scene of harvest the destitute widows walk, and the reader, watching the timing of it all, begins to suspect that the God who seems absent in Naomi&rsquo;s lament has in fact been guiding every step. Loss is real, but so is the loyalty that holds these two women together &mdash; and behind it, the unseen faithfulness of God.",
    ],
  },
  {
    id: "Ruth and Boaz",
    heading: "Ruth and Boaz",
    reference: "Ruth 2&ndash;3",
    paragraphs: [
      "With no husband to provide for them, the two widows must find some way to survive, and Ruth takes the initiative. She goes out to glean &mdash; to follow behind the harvesters and gather the stalks of grain they leave behind. This was a provision built into the law of Israel: landowners were commanded to leave the edges of their fields and the dropped sheaves for the poor, the widow, and the foreigner (Lev 19; Deut 24). Ruth, who is all three, throws herself on this mercy to feed herself and Naomi.",
      "The narrator then tells us that Ruth &ldquo;happened to come to the part of the field belonging to Boaz&rdquo; (2:3). The word is chosen with gentle irony, for in the world of this book nothing merely &ldquo;happens.&rdquo; Boaz is a relative of Naomi&rsquo;s late husband, a man of standing and means. Of all the fields in Bethlehem, Ruth&rsquo;s feet carry her to his &mdash; and the reader understands that the hidden hand of providence has guided her there. What looks like chance is the quiet outworking of God&rsquo;s care.",
      "Boaz proves to be a man of remarkable kindness and integrity. When he learns who Ruth is and how she has loyally cared for Naomi, he goes far beyond what the law required. He invites her to glean only in his fields, tells his young men not to touch or harass her, offers her water and food at mealtime, and secretly instructs his workers to pull out extra grain from their bundles and leave it for her. He blesses her in the name of the LORD, &ldquo;under whose wings you have come to take refuge&rdquo; (2:12).",
      "Ruth returns to Naomi at evening with an astonishing quantity of grain, and when Naomi hears that the man is Boaz, her spirit revives. &ldquo;The man is a close relative of ours, one of our redeemers,&rdquo; she exclaims (2:20). For the first time since her losses, Naomi sees a glimmer of hope, and she blesses Boaz and the LORD together. The bitter widow who said the Almighty had dealt harshly with her now begins to glimpse his kindness breaking through.",
      "Encouraged, Naomi devises a plan to seek a permanent future for Ruth. At the end of the barley harvest, she instructs Ruth to wash and anoint herself and to go down to the threshing floor at night, where Boaz will be sleeping after the winnowing. There, when he has lain down, Ruth is to uncover his feet and lie down, signaling in a culturally understood way her request that Boaz take responsibility for her as a redeemer. It is a bold and delicate move, entrusting both women&rsquo;s futures to Boaz&rsquo;s character.",
      "Ruth carries out the plan, and when Boaz wakes startled in the night, she speaks with quiet courage: &ldquo;Spread your wings over your servant, for you are a redeemer&rdquo; (3:9). The image deliberately echoes Boaz&rsquo;s own earlier blessing &mdash; he had prayed that Ruth would find refuge under the wings of the LORD, and now Ruth asks him to become, in a sense, the answer to that prayer, extending the covering of marriage and protection over her. She appeals not to romance but to redemption and faithfulness.",
      "Boaz responds with honor and gratitude. He praises Ruth&rsquo;s loyalty &mdash; this last kindness greater than the first, for she has not sought after younger men but has acted to preserve the family line. He pledges to do all she asks, &ldquo;for all my fellow townsmen know that you are a worthy woman&rdquo; (3:11). Yet he is scrupulously honest: there is a nearer kinsman who has the first right to redeem, and that man must be given the opportunity before Boaz can act. He sends Ruth home with more grain and a promise that he will settle the matter that very day.",
    ],
  },
  {
    id: "The Kinsman-Redeemer",
    heading: "The Kinsman-Redeemer",
    reference: "Ruth 4",
    paragraphs: [
      "At the heart of the resolution of Ruth lies an institution unique to ancient Israel: the kinsman-redeemer, the go&rsquo;el. Under the law, when a family fell into poverty, lost its land, or faced the extinction of its line, the nearest male relative bore the responsibility to step in and &ldquo;redeem&rdquo; &mdash; to buy back sold or mortgaged property so it would remain in the family, to rescue a relative who had fallen into servitude, and, in cases involving a childless widow, to raise up an heir so the dead man&rsquo;s name would not be blotted out. The redeemer used his own resources to restore what another had lost.",
      "This is the role Ruth has invited Boaz to take up. To do so, however, Boaz must navigate the claim of a nearer relative. So he goes to the gate of the city &mdash; the place where legal and civic matters were transacted &mdash; and gathers ten elders as witnesses. When the nearer kinsman arrives, Boaz lays the matter before him publicly, with care and precision, ensuring that everything is done openly and according to custom.",
      "Boaz first raises the question of Naomi&rsquo;s parcel of land, which is for sale. The nearer kinsman is willing to redeem the field &mdash; until Boaz adds that redeeming the land also means taking Ruth the Moabite as wife, in order to raise up an heir for the dead man, an heir who would then inherit the very land he had just bought. At this the kinsman draws back: &ldquo;I cannot redeem it for myself, lest I impair my own inheritance&rdquo; (4:6). He cedes his right, sealing the transfer in the old custom of removing his sandal and handing it over.",
      "With the nearer redeemer having stepped aside, the way is now clear for Boaz, and he announces before all the witnesses that he is acquiring everything that belonged to Elimelech and his sons, and taking Ruth as his wife, &ldquo;to perpetuate the name of the dead in his inheritance&rdquo; (4:10). The elders and all the people at the gate bless the union, praying that Ruth would be like Rachel and Leah who built up the house of Israel, and that the house of Boaz would be like the house of Perez. What began in famine and death now moves toward marriage and new life.",
      "It is hard to miss how the figure of the kinsman-redeemer points beyond itself. Boaz, the willing redeemer, uses his own wealth and standing to rescue the destitute, to restore what was lost, and to take a powerless outsider as his own. In this the New Testament sees a living picture of Christ, our Redeemer, who at his own cost rescues those who could never rescue themselves, restoring our inheritance and claiming us as his own. The Hebrew go&rsquo;el foreshadows the greater Redeemer to come.",
      "The contrast between the two relatives sharpens the picture. The nearer kinsman refuses to redeem because it would cost him &mdash; it would &ldquo;impair his inheritance.&rdquo; Boaz redeems precisely by being willing to bear the cost, to spend himself for the sake of another&rsquo;s restoration. Redemption, in this book and in the gospel, is never cheap; it is the loving choice of one who is able to pay, willingly taking on himself the loss of those he loves.",
      "And so a story that began with three grieving widows and an empty future arrives at a wedding. The redeemer has acted, the family line is preserved, and the land is secured. Yet the narrator is not finished, for the marriage of Boaz and Ruth will open onto a horizon far wider than Bethlehem &mdash; reaching, in the end, to a king, and beyond the king to the King of kings. The institution of redemption, woven into the fabric of Israel&rsquo;s law, becomes here the very means by which God advances his great purpose of salvation.",
    ],
  },
  {
    id: "The Line of David",
    heading: "The Line of David",
    reference: "Ruth 4",
    paragraphs: [
      "Boaz takes Ruth as his wife, and the LORD gives her a son. The women of Bethlehem, who once heard Naomi&rsquo;s bitter lament, now rejoice with her: &ldquo;Blessed be the LORD, who has not left you this day without a redeemer&hellip; He shall be to you a restorer of life and a nourisher of your old age, for your daughter-in-law who loves you, who is more to you than seven sons, has given birth to him&rdquo; (4:14&ndash;15). The empty woman is full again. Naomi takes the child to her bosom, and the story that began in death closes in new life.",
      "Then comes the line that recasts the entire book. The neighbor women name the child, saying, &ldquo;A son has been born to Naomi.&rdquo; And the narrator tells us his name: &ldquo;They named him Obed. He was the father of Jesse, the father of David&rdquo; (4:17). Suddenly the small domestic tale of two widows and a kind farmer is revealed to be nothing less than the backstory of Israel&rsquo;s greatest king. The child cradled in Naomi&rsquo;s arms is the grandfather of David.",
      "The surprise of this is meant to take our breath away. Ruth is a Moabite &mdash; a foreigner from a people often at odds with Israel, a people the law treated with suspicion. Yet this outsider, by her loyalty and through God&rsquo;s providence, becomes the great-grandmother of King David, and thus is woven directly into the royal line of Israel. The God of this story delights to bring the excluded in, to set the foreigner at the very center of his redemptive plan.",
      "The book closes with a short genealogy running from Perez down to David, and the New Testament picks up the thread and carries it further. In the opening chapter of Matthew&rsquo;s Gospel, Ruth is named in the genealogy of Jesus the Messiah (Matt 1:5) &mdash; one of only a handful of women, and a Gentile, listed among the ancestors of Christ. The quiet faithfulness of a Moabite widow on the road to Bethlehem turns out to be a strand in the lineage that leads to the Savior of the world, born in that same Bethlehem generations later.",
      "Here we see most clearly the great theme that has hummed beneath the whole narrative: the hidden hand of God&rsquo;s providence. Never once does the Lord appear to speak or act in a dramatic, visible way. There are no miracles, no prophetic visions, no parting seas. There is only famine and return, gleaning and kindness, a night at the threshing floor, a transaction at the gate. And yet through this chain of ordinary events and ordinary faithfulness, God is steadily, silently steering history toward David and toward the Christ.",
      "This is the quiet theology of Ruth: that God works just as surely through the small, faithful choices of unremarkable people as through the thunder of great public deliverances. Naomi could see only bitterness; she did not know she was carrying redemption home with her. Boaz did not know that his act of kindness was forging a link in the chain of salvation. The characters live their lives in faith, and only the reader, standing at the end, sees the whole pattern that providence has been weaving.",
      "And so Ruth leaves us with a deep encouragement. In our own dark times, when God seems absent and our losses feel final, this little book testifies that he has not left the world without a redeemer. The same providence that guided a grieving widow and a loyal foreigner into the lineage of David and of Jesus is at work still &mdash; quietly, faithfully, drawing every ordinary act of covenant love into the grand narrative of redemption that finds its center in Christ.",
    ],
  },
];

const videoItems = [
  { videoId: "qOM1jY3eHWI", title: "BibleProject - Book of Ruth Overview" },
  { videoId: "0Jp7iN5n_w4", title: "The Story of Ruth Explained" },
  { videoId: "Ja3I-8wzZ0g", title: "Boaz the Kinsman-Redeemer - Ruth" },
];

export default function ChristianBookOfRuthGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ROSE}22`, color: ROSE, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The Book of Ruth
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            A quiet story of loyalty and redemption set in the dark days of the judges &mdash; Naomi&rsquo;s loss and bitterness, Ruth&rsquo;s famous pledge of covenant love, Boaz the kinsman-redeemer, and the hidden providence of God that leads to the line of David and, at last, to Christ.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${tab === t ? ROSE : BORDER}`,
                background: tab === t ? ROSE : CARD,
                color: tab === t ? "#fff" : MUTED,
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
            <div style={{ color: ROSE, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
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

        {tab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Ruth through visual teaching on the structure of the book, the loyalty of Ruth, and Boaz as the kinsman-redeemer who points us to Christ.
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

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ROSE}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ROSE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Redeemer Who Draws Us In</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Ruth shows us a God who works quietly through ordinary faithfulness, who welcomes the outsider, and who never leaves his people without a redeemer. The same hidden providence that led a Moabite widow into the line of David is at work still, drawing every act of loyal love into the grand story of redemption that finds its center in Christ.
          </p>
        </div>
      </main>
    </div>
  );
}
