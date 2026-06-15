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
  "Rachel at the Well",
  "The Deceiver Deceived",
  "Leah's Sons",
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
    heading: "Jacob in Paddan-aram: Love, Deceit, and the Birth of the Tribes",
    reference: "Genesis 29",
    paragraphs: [
      "Genesis 29 follows Jacob as he completes his long flight from Esau and arrives at last in Paddan-aram, the land of his mother&rsquo;s kindred. The chapter opens with a scene of providence at a well, where Jacob meets Rachel, the daughter of his uncle Laban, and is welcomed warmly into the family (vv.1&ndash;14). What begins as a tender story of love and homecoming, however, soon turns into a sobering account of deception &mdash; and the man who deceived his blind father now finds himself deceived in turn.",
      "Jacob falls deeply in love with Rachel and agrees to serve Laban seven years for her hand. So great is his love that &ldquo;they seemed to him but a few days&rdquo; (v.20). Yet on the wedding night Laban substitutes his older daughter, Leah, exploiting the veil and the darkness. When Jacob discovers the deception in the morning, his outrage echoes the very crime he himself once committed: he protests that he has been tricked about the firstborn (vv.15&ndash;30). The deceiver has been deceived, and he must serve another seven years for the woman he truly loves.",
      "The final movement of the chapter shifts the focus to the unloved Leah. &ldquo;When the Lord saw that Leah was hated, he opened her womb, but Rachel was barren&rdquo; (v.31). In tender response to her affliction, God grants Leah four sons &mdash; Reuben, Simeon, Levi, and Judah &mdash; while Rachel remains childless. The names Leah gives her children trace a quiet pilgrimage of the heart, from longing to be loved toward simple praise of the Lord (vv.31&ndash;35).",
      "Beneath the family drama runs a profound theological current. The household chosen to carry God&rsquo;s covenant is again revealed in all its brokenness &mdash; rivalry, favoritism, manipulation, and heartache. And yet through this very mess God advances his redemptive purposes. From Levi will come the priesthood, and from Judah will come the royal line of David and, in the fullness of time, Jesus the Messiah. The God of Genesis 29 works through the overlooked and the afflicted.",
      "The chapter also marks a turning point in Jacob&rsquo;s own story. The schemer who left Canaan with the blessing in his grasp now enters a long season of being on the receiving end of deception. The exile that began as flight becomes a school of discipline in which Jacob will learn, over twenty hard years in Laban&rsquo;s house, something of what it means to be sinned against. The reaping of what he has sown begins here, at the well and at the wedding feast.",
      "For the reader, Genesis 29 holds together two truths that the whole Bible insists belong together: the seriousness of human sin and its consequences, and the patient sovereignty of a God who is not thwarted by it. The same chapter that shows us Laban&rsquo;s treachery and the bitter rivalry of two sisters also shows us a God who sees the unloved, hears the afflicted, and quietly weaves the line of redemption through their tears. It is a story of providence at a well, irony at a wedding, and grace in a nursery.",
    ],
  },
  {
    id: "Rachel at the Well",
    heading: "Jacob Meets Rachel at the Well",
    reference: "Genesis 29:1&ndash;14",
    paragraphs: [
      "&ldquo;Then Jacob went on his journey and came to the land of the people of the east&rdquo; (v.1). After the night at Bethel, where God had met him in a dream and renewed the covenant promise, Jacob travels on with new resolve. He arrives at a well in the open country, where three flocks of sheep lie waiting beside a stone that covers the well&rsquo;s mouth. It is a quiet, ordinary scene of shepherd life, and yet it is precisely here that the providence of God will bring Jacob to the very family he has come so far to find.",
      "Jacob falls into conversation with the shepherds gathered at the well. He learns that they are from Haran and that they know Laban, his uncle &mdash; and just as they speak, the narrator notes, &ldquo;Rachel came with her father&rsquo;s sheep, for she was a shepherdess&rdquo; (v.9). The timing is exquisite. This meeting at a well is no accident but a recurring pattern in Scripture: Abraham&rsquo;s servant met Rebekah at a well, Moses would meet Zipporah at a well. The well is a place of betrothal, where God&rsquo;s quiet hand arranges the future of his covenant people.",
      "Jacob is moved to action. &ldquo;Now as soon as Jacob saw Rachel the daughter of Laban his mother&rsquo;s brother, and the sheep of Laban his mother&rsquo;s brother, Jacob came near and rolled the stone from the well&rsquo;s mouth and watered the flock&rdquo; (v.10). The stone that the other shepherds waited together to move, Jacob rolls away alone &mdash; a burst of strength stirred by the sight of Rachel. It is an act of service and welcome, the first gift of a man already drawn to the woman before him.",
      "Then comes a moment of raw emotion: &ldquo;Jacob kissed Rachel and wept aloud&rdquo; (v.11). The weary traveler, exiled from home and family, is overwhelmed by the meeting. His tears are the tears of a homecoming &mdash; relief, joy, and the sense that God has indeed gone before him on the road. He tells Rachel that he is Rebekah&rsquo;s son, her kinsman, and she runs to tell her father the astonishing news that a relative from Canaan has arrived.",
      "Laban&rsquo;s response is warm and immediate. &ldquo;As soon as Laban heard the news about Jacob, his sister&rsquo;s son, he ran to meet him and embraced him and kissed him and brought him to his house&rdquo; (v.13). The embrace is generous, the welcome whole-hearted; Laban declares, &ldquo;Surely you are my bone and my flesh!&rdquo; (v.14). For a month Jacob is received as family, a son of the household, sharing in its life and labor. The scene radiates the kindness of kinship and the joy of belonging after a long and lonely road.",
      "Yet the careful reader senses a shadow gathering even here. Laban&rsquo;s eager welcome will soon reveal a calculating streak, and his warm embrace of &ldquo;his sister&rsquo;s son&rdquo; will give way to hard bargaining. For now, though, the chapter lets us rest in the goodness of the moment: a providential meeting, a stone rolled away, tears of homecoming, and a family reunited across the distance of years and miles. God has brought Jacob safely to the place of his calling, and the promise made at Bethel begins to unfold in flesh and blood.",
    ],
  },
  {
    id: "The Deceiver Deceived",
    heading: "Leah for Rachel: The Deceiver Deceived",
    reference: "Genesis 29:15&ndash;30",
    paragraphs: [
      "After a month, Laban raises the question of wages: &ldquo;Because you are my kinsman, should you therefore serve me for nothing? Tell me, what shall your wages be?&rdquo; (v.15). The narrator now introduces the two daughters: &ldquo;Leah&rsquo;s eyes were weak, but Rachel was beautiful in form and appearance&rdquo; (v.17). Jacob&rsquo;s heart is already settled. &ldquo;Jacob loved Rachel,&rdquo; and so he answers, &ldquo;I will serve you seven years for your younger daughter Rachel&rdquo; (v.18). The terms are set, and a long courtship of labor begins.",
      "What follows is one of the most beautiful descriptions of love in all of Scripture: &ldquo;So Jacob served seven years for Rachel, and they seemed to him but a few days because of the love he had for her&rdquo; (v.20). Seven years of hard shepherding shrink in his memory to a handful of days, so completely is his heart given to Rachel. Here the man who had grasped and schemed for the blessing shows a tender, patient, self-giving love &mdash; willing to wait, willing to labor, all for the woman he longs to marry.",
      "But Laban is a man of cunning, and the wedding night becomes the scene of a great deception. &ldquo;In the evening he took his daughter Leah and brought her to Jacob&rdquo; (v.23). Under cover of the veil and the darkness, with the feast and its wine clouding all clarity, Laban substitutes Leah for Rachel. Jacob, believing he has at last received his beloved, is utterly deceived &mdash; and the chapter that began with tears of joy now turns toward bitter irony.",
      "&ldquo;And in the morning, behold, it was Leah!&rdquo; (v.25). The shock of dawn reveals the trick, and Jacob erupts: &ldquo;What is this you have done to me? Did I not serve you for Rachel? Why then have you deceived me?&rdquo; The irony is impossible to miss. The man who once disguised himself to deceive his blind father about the firstborn has now, under cover of darkness, been deceived about the firstborn daughter. He who exploited Isaac&rsquo;s failing eyes is undone by his own. The deceiver has been deceived.",
      "Laban&rsquo;s excuse only sharpens the point: &ldquo;It is not so done in our country, to give the younger before the firstborn&rdquo; (v.26). With a calm appeal to custom, Laban defends his treachery by invoking the very principle &mdash; the rights of the firstborn &mdash; that Jacob had trampled in Canaan. The younger before the firstborn is precisely what Jacob had arranged for himself when he seized Esau&rsquo;s blessing. Now that principle returns to bind him. God&rsquo;s providence has a long memory, and Jacob is reaping what he sowed.",
      "Laban proposes a further bargain: complete Leah&rsquo;s bridal week, and then take Rachel as well, in exchange for another seven years of service. &ldquo;So Jacob did so, and completed her week. Then Laban gave him his daughter Rachel to be his wife&rdquo; (vv.27&ndash;28). Jacob serves a second seven years, and the narrator notes the painful truth at the heart of the household: &ldquo;he loved Rachel more than Leah&rdquo; (v.30). The seeds of a bitter sisterly rivalry are sown, and a home built on deception now carries the wound of favoritism into the next generation.",
    ],
  },
  {
    id: "Leah's Sons",
    heading: "Leah's Sons and the Birth of the Tribes",
    reference: "Genesis 29:31&ndash;35",
    paragraphs: [
      "The chapter&rsquo;s final movement turns the spotlight on the unloved sister: &ldquo;When the Lord saw that Leah was hated, he opened her womb, but Rachel was barren&rdquo; (v.31). The word &ldquo;hated&rdquo; here means loved less, set aside in favor of another &mdash; and it is precisely this overlooked woman whom the Lord notices. God&rsquo;s tender attention falls on the one passed over by human affection. While the beloved Rachel remains barren, the unloved Leah is given the gift of children, a quiet reversal that runs throughout the story of God.",
      "Leah bears her first son and names him Reuben, saying, &ldquo;Because the Lord has looked upon my affliction; for now my husband will love me&rdquo; (v.32). The name carries her ache: she longs for her husband&rsquo;s love and hopes that motherhood will win it. Yet even in her sorrow she confesses that the Lord has seen her affliction. Her first word is a word of being noticed by God in her pain &mdash; a confession that the One who sees the unloved has looked upon her.",
      "A second son follows, named Simeon: &ldquo;Because the Lord has heard that I am hated, he has given me this son also&rdquo; (v.33). Again Leah&rsquo;s naming weaves together her grief and her faith. The Lord not only sees but hears; he is attentive to the cry of the unloved heart. With Levi, her third son, she still reaches for her husband&rsquo;s affection: &ldquo;Now this time my husband will be attached to me, because I have borne him three sons&rdquo; (v.34). The longing persists, but something is beginning to shift.",
      "The fourth son marks a turning point. Leah names him Judah and says simply, &ldquo;This time I will praise the Lord&rdquo; (v.35). The progression in her naming is striking: from affliction seen, to being heard, to a husband&rsquo;s hoped-for attachment, and now at last to pure praise. With Judah, Leah&rsquo;s gaze lifts from the love she cannot secure to the God who has been faithful to her all along. Her heart moves from longing for a husband&rsquo;s love toward resting in the Lord&rsquo;s.",
      "The names of Leah&rsquo;s sons are far more than a record of family sorrow; they are the seedbed of the nation of Israel. From these sons will come tribes, and from two of them in particular the very channels of redemption. From Levi descends the priesthood that will mediate between God and his people. From Judah descends the royal line &mdash; the line of David, and ultimately of Jesus the Messiah, &ldquo;the Lion of the tribe of Judah.&rdquo; The unloved wife becomes mother to the priestly and kingly lines of the covenant.",
      "Here is the deep comfort of Genesis 29. God works his redemptive purposes through the overlooked and the afflicted. The Messiah comes not through the beloved and beautiful Rachel but through the unloved Leah, not through human preference but through divine grace. The God who sees the affliction of an unwanted wife and answers her with sons is the God who delights to lift up the lowly and to bring his greatest gifts through those whom the world passes by. Leah&rsquo;s tears were not wasted; they water the line that leads to Christ.",
    ],
  },
];

const videoItems = [
  { videoId: "Hk7tR2nP9vL", title: "Genesis 29 - Jacob Meets Rachel at the Well" },
  { videoId: "Qm3pZ8Rx4Kw", title: "The Deceiver Deceived - Laban Gives Leah Instead" },
  { videoId: "Bv6nT1Vt7Hs", title: "Leah the Unloved - When the Lord Saw Her Affliction" },
  { videoId: "Zc4dK9Mp2Wn", title: "From Reuben to Judah - The Birth of the Tribes" },
];

export default function Genesis29GuidePage() {
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
            Genesis Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Genesis 29
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Jacob arrives in Paddan-aram, meets Rachel at the well, and is welcomed by Laban &mdash; only to be deceived into marrying Leah. The deceiver is now deceived, yet through the unloved Leah&rsquo;s sons God begins to build the tribes of Israel and the line that leads to Christ.
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
              Deepen your study of Genesis 29 through visual teaching on the providential meeting at the well, the irony of the deceiver deceived, the Lord&rsquo;s tender care for the unloved Leah, and the birth of the tribes of Israel.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed key={item.videoId} videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Grace for the Overlooked and the Afflicted</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Genesis 29 holds together the seriousness of human sin and the patient sovereignty of God. The same chapter that shows Laban&rsquo;s treachery and a bitter rivalry also shows a God who sees the unloved, hears the afflicted, and weaves the line of redemption &mdash; through Levi&rsquo;s priesthood and Judah&rsquo;s royal line &mdash; right through Leah&rsquo;s tears toward Christ.
          </p>
        </div>
      </main>
    </div>
  );
}
