"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "The Miraculous Catch",
  "Breakfast and Restoration",
  "The Beloved Disciple",
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
    heading: "Overview of John 21",
    reference: "John 21:1&ndash;25",
    paragraphs: [
      "John chapter 21 is the epilogue of the fourth Gospel, a tender and luminous closing scene that follows the great resurrection appearances of the preceding chapter. Here, beside the Sea of Tiberias in the early light of morning, the risen Lord meets his disciples once more, and in a quiet and homely setting he draws them back into fellowship, mission, and love. It is a chapter of restoration and recommissioning, a fitting close to the Gospel of the Word made flesh.",
      "The scene opens with seven disciples gathered by the sea (21:1&ndash;3). Peter announces, &ldquo;I am going fishing,&rdquo; and the others join him, but they toil through the whole night and catch nothing. Their empty nets recall the truth that apart from Christ they can do nothing, and the long fruitless darkness sets the stage for the dawn appearance of the Lord upon the shore.",
      "At daybreak Jesus stands on the shore, though the disciples do not recognize him (21:4&ndash;8). He bids them cast the net on the right side of the boat, and at his word they take so great a haul of fish that they cannot draw it in. The beloved disciple perceives the truth and cries, &ldquo;It is the Lord!&rdquo; and Peter, ever impetuous, throws himself into the sea to come to his Master.",
      "When they come to land they find a charcoal fire with fish and bread, and Jesus invites them, &ldquo;Come and have breakfast&rdquo; (21:9&ndash;14). The risen Lord serves his own with his own hands, and the count of the great catch is given as one hundred fifty-three fish, the net unbroken. This is the third time Jesus is revealed to his disciples after his rising from the dead.",
      "After the meal comes the great restoration of Peter (21:15&ndash;19). Three times Jesus asks, &ldquo;Simon, son of John, do you love me?&rdquo; matching the threefold denial with a threefold confession, and three times he commissions Peter to feed and tend his flock. He then foretells the death by which Peter will glorify God and gives the simple, searching command, &ldquo;Follow me.&rdquo;",
      "The Gospel closes with a word concerning the beloved disciple and the testimony of the whole book (21:20&ndash;25). Peter asks about the other disciple, and Jesus answers that his own concern must be to follow. The Gospel affirms the truth of its witness and ends with the boundless declaration that the world itself could not contain the books that might be written of all that Jesus did.",
    ],
  },
  {
    id: "The Miraculous Catch",
    heading: "The Miraculous Catch of Fish",
    reference: "John 21:1&ndash;14",
    paragraphs: [
      "&ldquo;After this Jesus revealed himself again to the disciples by the Sea of Tiberias, and he revealed himself in this way&rdquo; (21:1). The risen Lord seeks out his own once more, this time in the familiar setting of the lake where he had first called them. Seven disciples are gathered together, among them Peter, Thomas, Nathanael, the sons of Zebedee, and two others, waiting in a kind of restless uncertainty for what their Master would do.",
      "&ldquo;Simon Peter said to them, I am going fishing. They said to him, We will go with you&rdquo; (21:3). Peter returns to the trade he knew before he followed Christ, and the others go with him. They go out and get into the boat, but that night they catch nothing. The long, fruitless labor in the dark is a parable of the truth the Lord had taught them: apart from him they can do nothing.",
      "&ldquo;Just as day was breaking, Jesus stood on the shore; yet the disciples did not know that it was Jesus&rdquo; (21:4). As so often in the resurrection appearances, the Lord is not at first recognized. He calls out to them across the water, &ldquo;Children, do you have any fish?&rdquo; and they answer him, &ldquo;No.&rdquo; The question gently exposes their emptiness and prepares them to receive what only he can give.",
      "&ldquo;He said to them, Cast the net on the right side of the boat, and you will find some. So they cast it, and now they were not able to haul it in, because of the quantity of fish&rdquo; (21:6). At the word of the unrecognized stranger they obey, and the empty night is transformed into overwhelming abundance. The net strains under a multitude of fish, a living sign of the fruitfulness of mission undertaken at the command of Christ.",
      "&ldquo;That disciple whom Jesus loved therefore said to Peter, It is the Lord!&rdquo; (21:7). The beloved disciple, quick in spiritual perception, recognizes the Master in the miracle, while Peter, quick in action, answers in his own way. &ldquo;When Simon Peter heard that it was the Lord, he put on his outer garment and threw himself into the sea,&rdquo; unable to wait for the boat, eager to be near the one he loves.",
      "&ldquo;The other disciples came in the boat, dragging the net full of fish, for they were not far from the land&rdquo; (21:8). They bring the great catch to shore, and there they find a charcoal fire already laid, with fish on it and bread. &ldquo;Jesus said to them, Bring some of the fish that you have just caught&rdquo; (21:10), joining the fruit of their labor to the provision he himself has prepared.",
      "&ldquo;So Simon Peter went aboard and hauled the net ashore, full of large fish, 153 of them. And although there were so many, the net was not torn&rdquo; (21:11). The precise number marks the reality of the miracle, and the unbroken net speaks of the security of those whom Christ gathers. &ldquo;Jesus said to them, Come and have breakfast&rdquo; (21:12). None dared ask who he was, for they knew it was the Lord, the third time he was revealed to them after he was raised from the dead.",
    ],
  },
  {
    id: "Breakfast and Restoration",
    heading: "Breakfast and the Restoration of Peter",
    reference: "John 21:15&ndash;19",
    paragraphs: [
      "&ldquo;When they had finished breakfast, Jesus said to Simon Peter, Simon, son of John, do you love me more than these?&rdquo; (21:15). The charcoal fire on the shore recalls another charcoal fire in the high priest&rsquo;s courtyard, where Peter had warmed himself and denied his Lord three times. Now, beside this fire, the risen Christ gently and deliberately leads his fallen disciple back to the place of healing and renewed love.",
      "&ldquo;He said to him, Yes, Lord; you know that I love you. He said to him, Feed my lambs&rdquo; (21:15). To the first question Peter answers with humble affirmation, and the Lord responds not with rebuke but with commission. The one who had denied is entrusted with the care of the flock, for grace does not merely forgive the penitent but restores him to service and lays upon him the work of love.",
      "&ldquo;He said to him a second time, Simon, son of John, do you love me? He said to him, Yes, Lord; you know that I love you. He said to him, Tend my sheep&rdquo; (21:16). The threefold questioning answers the threefold denial, each affirmation undoing a former failure. The Lord presses Peter not to wound him but to heal him fully, that no shadow of the old denial might remain to trouble his conscience or hinder his calling.",
      "&ldquo;He said to him the third time, Simon, son of John, do you love me? Peter was grieved because he said to him the third time, Do you love me?&rdquo; (21:17). The repetition pierces Peter to the heart, yet his grief is the grief of love, not of despair. He casts himself wholly upon the Lord&rsquo;s own knowledge: &ldquo;Lord, you know everything; you know that I love you.&rdquo; And Jesus says to him, &ldquo;Feed my sheep,&rdquo; sealing the restoration completely.",
      "&ldquo;Truly, truly, I say to you, when you were young, you used to dress yourself and walk wherever you wanted, but when you are old, you will stretch out your hands, and another will dress you and carry you where you do not want to go&rdquo; (21:18). The Lord foretells the manner of Peter&rsquo;s death, the costly path of discipleship that will lead him at last to a cross of his own. To love Christ is to follow him even unto death.",
      "&ldquo;This he said to show by what kind of death he was to glorify God&rdquo; (21:19). What the world counts as defeat, the death of the martyr, is in truth the glorifying of God. Peter, who had once denied his Lord to save his life, would one day lay down his life in faithful witness, and in that very death bring honor to the name of the one he had come to love above all.",
      "&ldquo;And after saying this he said to him, Follow me&rdquo; (21:19). The whole scene gathers into a single, searching command. The same word with which Jesus first called Peter by the lakeside is now spoken again to the restored disciple. Forgiven, recommissioned, and forewarned, Peter is summoned once more to the path of obedience, to follow his Lord wherever he leads, through service and through suffering, to the very end.",
    ],
  },
  {
    id: "The Beloved Disciple",
    heading: "The Beloved Disciple and the Gospel's Close",
    reference: "John 21:20&ndash;25",
    paragraphs: [
      "&ldquo;Peter turned and saw the disciple whom Jesus loved following them, the one who also had leaned back against him during the supper&rdquo; (21:20). Even in the moment of his recommissioning, Peter&rsquo;s eye is drawn to another, and he asks concerning the beloved disciple, &ldquo;Lord, what about this man?&rdquo; It is the natural curiosity of the heart, wondering what path the Lord has appointed for a fellow disciple and friend.",
      "&ldquo;Jesus said to him, If it is my will that he remain until I come, what is that to you? You follow me!&rdquo; (21:22). The Lord gently redirects Peter from comparison to obedience. The destiny of another disciple is the Master&rsquo;s concern, not Peter&rsquo;s; his one task is to follow. Each servant of Christ has his own appointed way, and faithfulness consists not in measuring oneself against others but in following the Lord.",
      "&ldquo;So the saying spread abroad among the brothers that this disciple was not to die&rdquo; (21:23). The Lord&rsquo;s words were misunderstood and gave rise to a rumor among the believers that the beloved disciple would not see death. The Gospel takes care to correct this error, for Jesus did not say that he would not die, but only, &ldquo;If it is my will that he remain until I come, what is that to you?&rdquo;",
      "&ldquo;This is the disciple who is bearing witness about these things, and who has written these things, and we know that his testimony is true&rdquo; (21:24). The author now sets his seal upon the whole Gospel. The witness behind these pages is the beloved disciple himself, an eyewitness of the things he records, and the church joins its confident affirmation that his testimony is trustworthy and true.",
      "The verse stands as the authentication of the Gospel, grounding all that has been written in the firsthand witness of one who saw and heard and touched the Word of life. This is not a tale gathered from rumor but the sober record of a man who leaned upon the Lord&rsquo;s breast, who stood by the cross, and who looked into the empty tomb, and whose testimony the believing community receives as reliable.",
      "&ldquo;Now there are also many other things that Jesus did. Were every one of them to be written, I suppose that the world itself could not contain the books that would be written&rdquo; (21:25). The Gospel ends not with a full stop but with a window flung open upon infinity. What has been written is only a portion of the works of Christ, for the greatness of his person and the abundance of his deeds overflow every effort to record them.",
      "Here is a fitting conclusion to the Gospel of the Word made flesh. It affirms the reliability of the witness, yet humbly confesses that no book could ever contain the boundless significance of Jesus. The reader is left not with a sense of completion but with a sense of wonder, drawn to the inexhaustible riches of the Lord and invited to go on knowing him whom to know is life eternal.",
    ],
  },
];

const videoItems = [
  { videoId: "Yq8mWx3Ln7R", title: "BibleProject - The Gospel of John and Its Epilogue" },
  { videoId: "Gb5cTz9Ks4M", title: "153 Fish - The Miraculous Catch by the Sea of Tiberias" },
  { videoId: "Qk7gJy1Vn6D", title: "Do You Love Me - The Restoration of Peter" },
  { videoId: "Vt8hCx2Dm9L", title: "Follow Me - The Beloved Disciple and the Gospel's Close" },
];

export default function John21GuidePage() {
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
            The Gospel of John, Chapter 21
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            In the epilogue of John&rsquo;s Gospel the risen Jesus appears to seven disciples by the Sea of Tiberias. After a fruitless night they catch one hundred fifty-three fish at his word and know that it is the Lord. Jesus prepares breakfast on the shore, restores Peter with the threefold question &ldquo;Do you love me?&rdquo; and the charge &ldquo;Feed my sheep,&rdquo; and foretells how Peter will glorify God. He corrects a rumor about the beloved disciple, and the Gospel closes with its true and boundless testimony.
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
              Deepen your study of John 21 through visual teaching on the risen Lord&rsquo;s appearance by the Sea of Tiberias and the miraculous catch of one hundred fifty-three fish, the breakfast on the shore and the threefold restoration of Peter with the call to feed the sheep, the foretelling of Peter&rsquo;s death and the command to follow, and the witness of the beloved disciple that closes the Gospel.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Do You Love Me? Follow Me</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            John 21 closes the Gospel not with farewell but with renewal. By the lakeside the risen Lord turns an empty night into an overflowing net, a charcoal fire into a place of healing, and a threefold denial into a threefold confession of love. He restores Peter, recommissions him to feed the flock, and calls him to follow even unto death. And he leaves the church with a testimony both true and inexhaustible, for the world itself could not contain all that Jesus did.
          </p>
        </div>
      </main>
    </div>
  );
}
