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
  "Mary's Anointing and the Entry",
  "The Hour Has Come",
  "The Verdict of Unbelief",
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
    heading: "Overview of John 12",
    reference: "John 12:1&ndash;50",
    paragraphs: [
      "John 12 is the great hinge of the Fourth Gospel, the chapter where the public ministry of Jesus comes to its close and the long shadow of the cross falls across the narrative. Everything in the first eleven chapters has been building toward this moment, and everything that follows &mdash; the upper room, the arrest, the trial, the crucifixion &mdash; flows out of it. Here the &ldquo;hour&rdquo; that Jesus had repeatedly said had not yet come (2:4, 7:30, 8:20) finally arrives. &ldquo;The hour has come for the Son of Man to be glorified&rdquo; (12:23), he declares, and the whole tone of the Gospel turns toward the Passion.",
      "The chapter opens at Bethany, six days before the Passover, in the home of the very family John has just placed at the center of his story. There Mary, the sister of Lazarus whom Jesus had raised from the dead, takes about a pint of pure nard, an expensive perfume, and pours it on Jesus&rsquo; feet, wiping them with her hair. The house is filled with the fragrance. When Judas objects that the perfume might have been sold to help the poor, Jesus defends her: &ldquo;Leave her alone. It was intended that she should save this perfume for the day of my burial&rdquo; (12:7). Mary&rsquo;s extravagant love stands as a foil to the calculating treachery that will soon betray him.",
      "John then notes that a large crowd had come not only to see Jesus but also Lazarus, whom he had raised from the dead, and that the chief priests now plotted to kill Lazarus as well, because on account of him many were believing in Jesus (12:9&ndash;11). The raising of Lazarus has set the final conflict in motion: the sign that proved Jesus to be the resurrection and the life has become the catalyst for his death.",
      "The next day comes the Triumphal Entry into Jerusalem. The great Passover crowd takes palm branches and goes out to meet Jesus, shouting, &ldquo;Hosanna! Blessed is he who comes in the name of the Lord! Blessed is the King of Israel!&rdquo; (12:13). Jesus finds a young donkey and sits on it, fulfilling the prophecy of Zechariah: &ldquo;Do not be afraid, Daughter Zion; see, your king is coming, seated on a donkey&rsquo;s colt&rdquo; (12:15). The exasperated Pharisees say to one another, &ldquo;Look how the whole world has gone after him!&rdquo; (12:19) &mdash; words more prophetic than they know.",
      "At the center of the chapter stands the arrival of certain Greeks who wish to see Jesus, and this becomes the trigger for his climactic teaching. &ldquo;The hour has come,&rdquo; he says, and he speaks of the grain of wheat that must fall into the ground and die in order to bear much fruit. His soul is troubled, yet he will not ask to be saved from this hour, &ldquo;for this very reason I came to this hour&rdquo; (12:27). A voice from heaven answers him, and he promises, &ldquo;And I, when I am lifted up from the earth, will draw all people to myself&rdquo; (12:32).",
      "John closes the chapter with a sober theological reflection on unbelief. Despite all the signs Jesus had performed, many still would not believe in him, and John sees in this the fulfillment of Isaiah&rsquo;s words about blinded eyes and hardened hearts (Isaiah 53:1; 6:10). Yet even among the leaders many secretly believed but would not confess him, because they loved human glory more than the glory of God. The chapter ends with Jesus&rsquo; final public proclamation: he has come as light into the world, and the one who rejects his words will be judged by them on the last day. The public ministry is over; the Passion is about to begin.",
    ],
  },
  {
    id: "Mary's Anointing and the Entry",
    heading: "Mary's Anointing and the Triumphal Entry",
    reference: "John 12:1&ndash;19",
    paragraphs: [
      "Six days before the Passover, Jesus came to Bethany, the home of Lazarus, whom he had raised from the dead. A dinner was given in his honor; Martha served, while Lazarus reclined at the table among the guests &mdash; a living testimony to the power that had called him out of the tomb. Into this scene of quiet celebration Mary brings an act of breathtaking devotion that John records in vivid detail.",
      "Mary took about a pint of pure nard, an expensive perfume, poured it on Jesus&rsquo; feet, and wiped his feet with her hair. The house was filled with the fragrance of the perfume (12:3). Nard was an imported luxury, and this quantity was worth roughly a year&rsquo;s wages for a laborer. To pour it out all at once, and to wipe his feet with her own hair &mdash; a gesture of stunning humility for a woman in that culture &mdash; was an act of total, uncalculating love. Mary holds nothing back.",
      "But one of his disciples, Judas Iscariot, who would later betray him, objected: &ldquo;Why wasn&rsquo;t this perfume sold and the money given to the poor? It was worth a year&rsquo;s wages&rdquo; (12:5). John adds the damning aside that Judas said this not because he cared about the poor but because he was a thief; as keeper of the money bag, he used to help himself to what was put into it. The contrast is deliberate and devastating: Mary gives everything in love, while Judas masks his greed behind the language of charity.",
      "Jesus comes to Mary&rsquo;s defense: &ldquo;Leave her alone. It was intended that she should save this perfume for the day of my burial. You will always have the poor among you, but you will not always have me&rdquo; (12:7&ndash;8). He interprets her act as an anointing for his burial, pointing forward to the death that now stands only days away. Mary, perhaps without fully understanding it, has prepared his body in advance; her love has unwittingly become a prophecy.",
      "Meanwhile, a large crowd of Jews found out that Jesus was there and came, not only because of him but also to see Lazarus, whom he had raised from the dead. So the chief priests made plans to kill Lazarus as well, for on account of him many of the Jews were going over to Jesus and believing in him (12:10&ndash;11). The greatest of the signs has produced both faith and fury; the same miracle that draws the crowds drives the authorities to deeper murder.",
      "The next day the great Passover crowd heard that Jesus was coming to Jerusalem. They took palm branches and went out to meet him, shouting, &ldquo;Hosanna! Blessed is he who comes in the name of the Lord! Blessed is the King of Israel!&rdquo; (12:13). The cry comes from Psalm 118, a psalm sung at the great festivals, and the palm branches were a symbol of national hope and victory. The crowd is hailing Jesus as the long-awaited messianic king come to deliver his people.",
      "Jesus found a young donkey and sat on it, as it is written: &ldquo;Do not be afraid, Daughter Zion; see, your king is coming, seated on a donkey&rsquo;s colt&rdquo; (12:15). The prophecy is from Zechariah 9:9, where the coming king is gentle and brings peace, riding not a war-horse but a humble colt. John notes that at first the disciples did not understand this; only after Jesus was glorified did they realize that these things had been written about him and done to him. The entry proclaims a kingship the crowds barely grasp &mdash; a king who comes in peace to die for his people. The Pharisees, watching their efforts collapse, say to one another, &ldquo;See, this is getting us nowhere. Look how the whole world has gone after him!&rdquo; (12:19).",
    ],
  },
  {
    id: "The Hour Has Come",
    heading: "The Hour Has Come: Greeks Seek Jesus",
    reference: "John 12:20&ndash;36",
    paragraphs: [
      "Among those who went up to worship at the festival were some Greeks. They came to Philip and asked, &ldquo;Sir, we would like to see Jesus&rdquo; (12:21). These were almost certainly God-fearing Gentiles, drawn to the worship of Israel&rsquo;s God. Philip told Andrew, and together they brought the request to Jesus. Their arrival is no incidental detail: the coming of the Greeks signals that the message of Jesus is about to break beyond the boundaries of Israel and reach the whole world. The Pharisees had just said that the whole world had gone after him, and now the world itself comes knocking.",
      "Jesus replied to them, &ldquo;The hour has come for the Son of Man to be glorified&rdquo; (12:23). Throughout John&rsquo;s Gospel the hour has been held back; now, at the very moment the Gentiles appear, it finally arrives. But the glory Jesus speaks of is not the glory the crowds expect. It is the glory of the cross, for it is precisely through his death that he will be lifted up and draw all people, Jew and Greek alike, to himself.",
      "He explains it with an image drawn from the soil: &ldquo;Very truly I tell you, unless a kernel of wheat falls to the ground and dies, it remains only a single seed. But if it dies, it produces many seeds&rdquo; (12:24). A grain of wheat held back and preserved stays alone and fruitless; only by being buried and dying does it multiply into a harvest. So too Jesus must die in order to bring life to the world &mdash; and this principle is then turned toward his followers: &ldquo;Anyone who loves their life will lose it, while anyone who hates their life in this world will keep it for eternal life&rdquo; (12:25). The way of the cross is the pattern of all discipleship.",
      "&ldquo;Whoever serves me must follow me; and where I am, my servant also will be. My Father will honor the one who serves me&rdquo; (12:26). Having stated the cost, Jesus opens a window onto his own inner struggle. &ldquo;Now my soul is troubled, and what shall I say? &lsquo;Father, save me from this hour&rsquo;? No, it was for this very reason I came to this hour&rdquo; (12:27). John has no Garden of Gethsemane scene as the other Gospels do; this is his parallel. Here we glimpse the genuine anguish of Jesus before the cross, and his deliberate, costly resolve to embrace it rather than escape it.",
      "&ldquo;Father, glorify your name!&rdquo; Jesus prayed. Then a voice came from heaven: &ldquo;I have glorified it, and will glorify it again&rdquo; (12:28). The crowd standing there heard it; some thought it had thundered, while others said an angel had spoken to him. Jesus told them the voice was for their benefit, not his. &ldquo;Now is the time for judgment on this world; now the prince of this world will be driven out&rdquo; (12:31). The cross, far from being a defeat, is the decisive victory in which the ruler of darkness is overthrown.",
      "&ldquo;And I, when I am lifted up from the earth, will draw all people to myself&rdquo; (12:32). John explains that Jesus said this to show the kind of death he was going to die: &ldquo;lifted up&rdquo; means both his lifting up on the cross and his exaltation to glory. The crowd was puzzled, for they had understood from the Law that the Messiah would remain forever; how then could the Son of Man be lifted up? Jesus answered not with an argument but with an appeal: &ldquo;You are going to have the light just a little while longer. Walk while you have the light&hellip; Believe in the light while you have the light, so that you may become children of light&rdquo; (12:35&ndash;36). Then he left and hid himself from them &mdash; the last words of his public ministry an urgent call to come into the light before the darkness falls.",
    ],
  },
  {
    id: "The Verdict of Unbelief",
    heading: "The Verdict of Unbelief",
    reference: "John 12:37&ndash;50",
    paragraphs: [
      "John now steps back from the narrative to offer his own theological reflection on the tragedy that has unfolded. &ldquo;Even after Jesus had performed so many signs in their presence, they still would not believe in him&rdquo; (12:37). This is the great riddle of the Gospel: the One who turned water to wine, healed the blind, fed the multitudes, and raised Lazarus from the tomb was met, in the end, by the unbelief of his own people. The signs that should have produced faith met hardened hearts instead.",
      "John finds the explanation in the prophets. This unbelief fulfilled the word of Isaiah: &ldquo;Lord, who has believed our message and to whom has the arm of the Lord been revealed?&rdquo; (Isaiah 53:1). And again, John quotes Isaiah 6:10: &ldquo;He has blinded their eyes and hardened their hearts, so they can neither see with their eyes, nor understand with their hearts, nor turn &mdash; and I would heal them&rdquo; (12:40). John adds the striking note that Isaiah said this &ldquo;because he saw Jesus&rsquo; glory and spoke about him&rdquo; (12:41) &mdash; the prophet&rsquo;s ancient vision was a vision of Christ. The mystery of human unbelief and divine judgment are held together without easy resolution.",
      "Yet not all rejected him. &ldquo;Many even among the leaders believed in him. But because of the Pharisees they would not openly acknowledge their faith for fear they would be put out of the synagogue&rdquo; (12:42). These were secret believers, convinced in private but silent in public. John&rsquo;s verdict on them is searching and sad: &ldquo;they loved human praise more than praise from God&rdquo; (12:43). Their faith, undeclared and ashamed, was paralyzed by the fear of losing their standing among others. It is a sober warning that intellectual conviction without open confession falls short of saving faith.",
      "Then John gives Jesus&rsquo; final public words, a summary that gathers up the great themes of the whole Gospel. Jesus cried out, &ldquo;Whoever believes in me does not believe in me only, but in the one who sent me. The one who looks at me is seeing the one who sent me&rdquo; (12:44&ndash;45). To see Jesus is to see the Father; to believe in Jesus is to believe in God himself. The Son is the perfect revelation of the One who sent him, and there is no knowing the Father apart from him.",
      "&ldquo;I have come into the world as a light, so that no one who believes in me should stay in darkness&rdquo; (12:46). Jesus returns to the image of light with which he closed his public teaching. His purpose in coming was not condemnation but salvation: &ldquo;If anyone hears my words but does not keep them, I do not judge that person. For I did not come to judge the world, but to save the world&rdquo; (12:47). The light has come to rescue, not to destroy.",
      "Yet rejection carries its own consequence. &ldquo;There is a judge for the one who rejects me and does not accept my words; the very words I have spoken will condemn them at the last day&rdquo; (12:48). The word that offers life, when refused, becomes the standard by which the rejecter is judged. And the authority of that word is total, for Jesus says he has not spoken on his own but as the Father commanded him: &ldquo;I know that his command leads to eternal life. So whatever I say is just what the Father has told me to say&rdquo; (12:50). With these words the public ministry of Jesus closes &mdash; an offer of light and eternal life, set against the solemn weight of judgment, leaving every hearer to decide whether they will walk in the light or remain in the dark.",
    ],
  },
];

const videoItems = [
  { videoId: "Jn2pQr5Tx8B", title: "BibleProject - Gospel of John Overview" },
  { videoId: "Hx9Lm4Vw3Kd", title: "Mary Anoints Jesus and the Triumphal Entry - John 12" },
  { videoId: "Gp7Yt2Bn6Qe", title: "The Hour Has Come: The Grain of Wheat - John 12" },
  { videoId: "Rz4Wk8Cd1Fp", title: "Belief and Unbelief: Jesus the Light of the World" },
];

export default function John12GuidePage() {
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
            The Gospel of John, Chapter 12
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The hinge between Jesus&rsquo; public ministry and the Passion &mdash; Mary&rsquo;s extravagant anointing at Bethany, the Triumphal Entry into Jerusalem, the coming of the Greeks and the declaration that &ldquo;the hour has come,&rdquo; and John&rsquo;s solemn reflection on belief and unbelief.
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
              Deepen your study of John 12 through visual teaching on Mary&rsquo;s anointing, the Triumphal Entry, the coming of the Greeks and the hour of glory, and John&rsquo;s reflection on belief and unbelief.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Walk While You Have the Light</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            John 12 turns the corner from public ministry to the cross. In Mary&rsquo;s broken jar of perfume, the palm-strewn road into Jerusalem, the grain of wheat that must die, and Jesus&rsquo; final cry to believe in the light, the chapter sets before every reader the same decision the crowds faced: to love the glory of God more than the praise of men, and to walk in the light while it is still day.
          </p>
        </div>
      </main>
    </div>
  );
}
