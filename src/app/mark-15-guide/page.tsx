"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verses", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  {
    videoId: "K2pYzd1jb9Q",
    title: "Mark 15 - The Crucifixion of Jesus",
  },
  {
    videoId: "wXz7Lm4Qr8T",
    title: "Why Have You Forsaken Me - The Cry of Dereliction",
  },
  {
    videoId: "Vb3nT9kPq2L",
    title: "The Torn Curtain and Our Access to God",
  },
  {
    videoId: "Hr8mD4sJ1xC",
    title: "Truly This Man Was the Son of God - The Centurion's Confession",
  },
];

const THEMES = [
  {
    color: ROSE,
    title: "The Silent Suffering King",
    body:
      "When Pilate questions him, Jesus offers no defense and makes no further answer, so that Pilate is amazed. The Lord who silenced storms and demons now stands silent before his accusers, fulfilling the portrait of Isaiah 53, where the servant is led like a lamb to the slaughter and opens not his mouth. His silence is not weakness or resignation but the deliberate self-offering of one who has set his face to the cross. Mark wants us to see a King who reigns precisely by refusing to save himself, whose majesty is hidden in his willingness to be condemned for the sake of the guilty.",
  },
  {
    color: PURPLE,
    title: "Barabbas and the Great Substitution",
    body:
      "The crowd is offered a choice between Jesus and Barabbas, a man imprisoned for insurrection and murder. Stirred up by the chief priests, they ask for the guilty man and demand that the innocent one be crucified. In that single exchange the gospel is dramatized: the guilty go free while the righteous one takes their place and bears their sentence. The name Barabbas itself means son of the father, so that one son of the father walks away alive because the true Son of the Father is led away to die in his stead. This is the heart of substitutionary atonement made visible at the gate of Pilate&rsquo;s hall.",
  },
  {
    color: GOLD,
    title: "The Mockery of the True King",
    body:
      "The soldiers clothe Jesus in a purple cloak, twist together a crown of thorns, and hail him as King of the Jews, striking him and spitting on him in cruel jest. Every gesture of contempt is, without their knowing, a confession of the truth. He truly is the King, robed and crowned, though his throne will be a cross and his coronation a death. Mark layers the irony so thickly that the mockery becomes a kind of unwitting worship, and the inscription over his head, The King of the Jews, written to condemn him, proclaims to all who pass by exactly who he is.",
  },
  {
    color: TEAL,
    title: "The Cry of Dereliction",
    body:
      "At the ninth hour, after three hours of darkness over the land, Jesus cries out with a loud voice, My God, my God, why have you forsaken me. He prays the opening line of Psalm 22, a psalm that begins in abandonment and ends in vindication and worldwide worship. In this cry we glimpse the deepest mystery of the cross, the Son experiencing the forsakenness due to sinners so that sinners might never be forsaken. He is bearing the cup of judgment he had dreaded in Gethsemane, drinking it to the bottom in the darkness, so that those for whom he dies may know the unbroken nearness of God.",
  },
  {
    color: GREEN,
    title: "The Torn Curtain and Access to God",
    body:
      "At the moment Jesus breathes his last, the curtain of the temple is torn in two from top to bottom. This was the veil that barred the way into the Most Holy Place, where the presence of God dwelt and which only the high priest could enter, once a year, with blood. Its tearing from top to bottom is God&rsquo;s own act, declaring that the way into his presence is now opened through the death of his Son. The letter to the Hebrews draws out the meaning: we now have confidence to enter the holy places by the blood of Jesus, by a new and living way that he opened for us through the curtain, that is, through his flesh.",
  },
  {
    color: GOLD,
    title: "The Centurion's Confession as the Gospel's Climax",
    body:
      "It is not a disciple, a priest, or an angel who speaks the verdict over the crucified Jesus, but a Gentile soldier who saw how he breathed his last and said, Truly this man was the Son of God. Mark opened his Gospel with the announcement of the gospel of Jesus Christ, the Son of God, and now at the foot of the cross that title returns on the lips of an outsider. The confession brackets the whole book and reveals where true sight is found, not in observing miracles but in beholding the crucified one. The centurion stands as the firstfruits of the nations who will come to worship the King they once helped to kill.",
  },
];

const VERSES = [
  {
    ref: "Mark 15:1-5",
    color: ROSE,
    title: "Jesus Before Pilate",
    body:
      "As soon as it is morning the chief priests, with the elders and scribes and the whole council, bind Jesus and deliver him to Pilate. Pilate asks him, Are you the King of the Jews, and Jesus answers, You have said so, a reply that affirms the truth even as it leaves the questioner to weigh his own words. The chief priests accuse him of many things, but Jesus makes no further answer, so that Pilate is amazed. The Roman governor has surely seen many prisoners plead and protest, but never one who meets accusation with such sovereign silence, the silence of the servant who has chosen this hour.",
  },
  {
    ref: "Mark 15:6-15",
    color: PURPLE,
    title: "Barabbas Released, Jesus Condemned",
    body:
      "At the feast Pilate would release one prisoner for whom the people asked, and a man called Barabbas lay bound with the rebels who had committed murder in the insurrection. Pilate, perceiving that it was out of envy that the chief priests had delivered Jesus, offers to release the King of the Jews, but the chief priests stir up the crowd to have him release Barabbas instead. When Pilate asks what then he should do with the one they call King of the Jews, they cry out all the more, Crucify him. So Pilate, wishing to satisfy the crowd, releases Barabbas, and having scourged Jesus, delivers him to be crucified. The innocent is condemned and the guilty set free.",
  },
  {
    ref: "Mark 15:16-20",
    color: GOLD,
    title: "The Soldiers Mock Jesus",
    body:
      "The soldiers lead Jesus inside the palace and call together the whole battalion, and they clothe him in a purple cloak and twist together a crown of thorns and put it on him. They begin to salute him, Hail, King of the Jews, and they strike his head with a reed and spit on him and kneel down in homage in cruel parody. When they have mocked him they strip off the purple cloak and put his own clothes on him, and they lead him out to crucify him. Mark records the savage scene without comment, trusting the reader to see that the soldiers mock a King who is more truly royal than any they have ever served.",
  },
  {
    ref: "Mark 15:21-28",
    color: TEAL,
    title: "The Road to Golgotha",
    body:
      "They compel a passerby, Simon of Cyrene, coming in from the country, the father of Alexander and Rufus, to carry the cross of Jesus. They bring him to the place called Golgotha, which means Place of a Skull, and offer him wine mixed with myrrh, but he does not take it, choosing to meet his death with a clear mind. They crucify him at the third hour and divide his garments among them, casting lots, and the inscription of the charge against him reads, The King of the Jews. With him they crucify two robbers, one on his right and one on his left, so that he is numbered with the transgressors as Isaiah foretold.",
  },
  {
    ref: "Mark 15:29-32",
    color: ROSE,
    title: "The Mockery at the Cross",
    body:
      "Those who pass by deride him, wagging their heads and saying, Aha, you who would destroy the temple and rebuild it in three days, save yourself and come down from the cross. The chief priests with the scribes mock him among themselves, He saved others; he cannot save himself, and they sneer, Let the Christ, the King of Israel, come down now from the cross that we may see and believe. Even those crucified with him revile him. The mockers speak more truly than they know, for it is precisely because he will not save himself that he is able to save others, and his refusal to come down is the very heart of his saving work.",
  },
  {
    ref: "Mark 15:33-37",
    color: PURPLE,
    title: "The Death of Jesus",
    body:
      "When the sixth hour comes there is darkness over the whole land until the ninth hour, a supernatural night at midday signaling judgment and the hiding of God&rsquo;s face. At the ninth hour Jesus cries with a loud voice, Eloi, Eloi, lema sabachthani, which means, My God, my God, why have you forsaken me, the opening of Psalm 22. Some bystanders think he is calling Elijah and offer him sour wine on a sponge to see whether Elijah will come to take him down. But Jesus utters a loud cry and breathes his last, not whispering away in exhaustion but yielding up his life with a great voice, the King laying down his life of his own accord.",
  },
  {
    ref: "Mark 15:38-39",
    color: GREEN,
    title: "The Curtain Torn, the Centurion's Confession",
    body:
      "At the instant of his death the curtain of the temple is torn in two, from top to bottom, the barrier into God&rsquo;s presence rent by the hand of God himself. And when the centurion who stood facing him saw that in this way he breathed his last, he said, Truly this man was the Son of God. Mark joins these two events deliberately: the old way of approach through the temple is finished, and a new confession of faith rises from an unexpected mouth. A Gentile executioner, standing at the foot of a Roman cross, becomes the first human being in the Gospel to confess in the moment of the crucifixion what Mark announced in his very first verse.",
  },
  {
    ref: "Mark 15:40-41",
    color: TEAL,
    title: "The Women Watching from Afar",
    body:
      "There are also women looking on from a distance, among them Mary Magdalene, and Mary the mother of James the younger and of Joses, and Salome, who when Jesus was in Galilee followed him and ministered to him, along with many other women who had come up with him to Jerusalem. While the male disciples have fled, these faithful women remain, watching, refusing to abandon their Lord even in his death. Mark names them carefully because they will be the witnesses of the burial and, soon, of the empty tomb. Their steadfast presence is a quiet rebuke to cowardice and a testimony that love endures when courage fails.",
  },
  {
    ref: "Mark 15:42-47",
    color: GOLD,
    title: "The Burial by Joseph of Arimathea",
    body:
      "As evening comes, since it is the day of Preparation before the Sabbath, Joseph of Arimathea, a respected member of the council who was himself looking for the kingdom of God, takes courage and goes to Pilate to ask for the body of Jesus. Pilate is surprised that he is already dead and, after confirming it from the centurion, grants the corpse to Joseph. Joseph buys a linen shroud, takes him down, wraps him in the linen, and lays him in a tomb cut out of the rock, and he rolls a stone against the entrance of the tomb. Mary Magdalene and Mary the mother of Joses see where he is laid, so that the place of burial is established by reliable witnesses.",
  },
];

const REFLECTION = [
  "Jesus stood silent before Pilate, refusing to defend himself though he was innocent. When I am falsely accused or misunderstood, can I entrust myself to the Father rather than insisting on my own vindication?",
  "Barabbas walked free because Jesus took his place at the cross. Have I truly grasped that I am the guilty one set free, and that the innocent Son of God died in my stead?",
  "The soldiers mocked Jesus as King without knowing they spoke the truth. Do I treat the crucified Christ as my true King, or only as a comforting idea I keep at arm&rsquo;s length?",
  "In the darkness Jesus cried, My God, my God, why have you forsaken me, so that I would never be forsaken. When I feel abandoned by God, can I rest in the truth that Christ bore my forsakenness for me?",
  "The temple curtain was torn from top to bottom, opening the way to God. Do I draw near to the Father with the confidence the cross has purchased, or do I still live as if the curtain remained?",
  "A Gentile soldier looked at the dying Jesus and confessed him as the Son of God. As I behold the crucified Christ, does my heart make the same confession, and does my life proclaim it to others?",
];

type MarkTab = "overview" | "themes" | "verses" | "application";

export default function Mark15GuidePage() {
  const [activeTab, setActiveTab] = useState<MarkTab>("overview");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        background: BG,
        minHeight: "100vh",
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      <main id="main-content" style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 60px" }}>
        {/* Hero */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              display: "inline-block",
              background: `${ROSE}20`,
              border: `1px solid ${ROSE}40`,
              borderRadius: 20,
              padding: "4px 14px",
              fontSize: 12,
              color: ROSE,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              marginBottom: 12,
            }}
          >
            Gospel of Mark - Chapter 15
          </div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px" }}>
            The Crucifixion of Jesus - The King on the Cross
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 640 }}>
            Jesus stands silent before Pilate; Barabbas the guilty is released while the innocent one
            is condemned; mocked as King, crucified at Golgotha between two robbers, he cries out in
            the darkness and breathes his last - and the temple curtain is torn in two.
          </p>
          <p
            style={{ color: ROSE, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: "14px 0 0", maxWidth: 640 }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;And the centurion, who stood facing him, saw that in this way he breathed his last, and said, Truly this man was the Son of God.&rdquo; &mdash; Mark 15:39",
            }}
          />
        </div>

        {/* Sticky tab nav */}
        <div
          style={{
            position: "sticky",
            top: "var(--header-height, 80px)",
            zIndex: 10,
            background: BG,
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 32,
            padding: "10px 0",
          }}
        >
          {TABS.map((t) => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id as MarkTab)}
              style={{
                padding: "8px 16px",
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? ROSE : BORDER}`,
                background: activeTab === t.id ? `${ROSE}20` : "transparent",
                color: activeTab === t.id ? ROSE : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
                {[
                  ["Book", "Mark"],
                  ["Chapter", "15"],
                  ["Setting", "Jerusalem and Golgotha"],
                  ["Time", "Good Friday"],
                  ["Key Theme", "The Crucifixion"],
                  ["Key Verse", "Mark 15:39"],
                ].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>The Hour Toward Which the Gospel Has Moved</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Mark 15 is the chapter to which the whole Gospel has been pressing. From the moment Jesus first foretold that the Son of Man must suffer many things, be rejected, and be killed, the narrative has leaned toward this day. Now in a single, unhurried sequence Mark records the trial before Pilate, the release of Barabbas, the mockery of the soldiers, the road to Golgotha, the crucifixion, the death, and the burial. The Gospel that opened by announcing good news now shows us the costliest event in human history, the death of the Son of God.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Mark tells the story with remarkable restraint, declining to dwell on the physical horror of crucifixion and refusing to soften the human cruelty. He lets the bare facts carry their own weight, and he marks the passage of time by the hours, the third, the sixth, the ninth, so that the reader watches the day darken and the death draw near. Around the silent figure of Jesus the chapter swirls with mockery, casting of lots, and the cries of the crowd, yet at the center stands the King who will not save himself because he has come to save others.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Two moments crown the chapter. First, at the death of Jesus the curtain of the temple is torn from top to bottom, an act of God declaring the way into his presence now open. Second, a Gentile centurion confesses, Truly this man was the Son of God, echoing the title with which Mark began his Gospel and revealing that the cross, not the miracle, is where true faith is born. To read Mark 15 is to stand beneath the cross with that soldier and discover that the crucified one is the King and the Son of God.",
                }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>The Movement of the Chapter</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter opens with the council delivering Jesus to Pilate, who questions him and marvels at his silence (verses 1 to 5). The crowd, stirred by the chief priests, demands the release of Barabbas and the crucifixion of Jesus, and Pilate hands him over to be scourged and crucified (verses 6 to 15). The soldiers then mock him with a purple cloak and a crown of thorns before leading him out (verses 16 to 20). Simon of Cyrene is compelled to carry the cross to Golgotha, where Jesus is crucified between two robbers under the inscription The King of the Jews (verses 21 to 28).",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Passersby, priests, and even the robbers heap mockery on the crucified Lord, taunting him to save himself and come down (verses 29 to 32). From the sixth to the ninth hour darkness covers the land, and Jesus cries out the words of Psalm 22 before uttering a loud cry and breathing his last (verses 33 to 37). At that instant the temple curtain is torn and the centurion confesses him as the Son of God (verses 38 to 39). The chapter closes with the faithful women watching from afar (verses 40 to 41) and the burial by Joseph of Arimathea in a rock-cut tomb sealed with a stone (verses 42 to 47).",
                }}
              />
            </div>
          </div>
        )}

        {/* Key Themes */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>The Major Themes of Mark 15</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Mark 15 gathers the great themes of the cross into a single, terrible, glorious day &mdash; the silence of the suffering King, the substitution of Barabbas, the ironic mockery of the true King, the cry of dereliction in the darkness, the rending of the temple veil that opens the way to God, and the confession of a Gentile soldier that crowns the whole Gospel. These six threads turn a Roman execution into the saving center of history.",
                }}
              />
            </div>
            {THEMES.map((t) => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ color: t.color, fontWeight: 800, fontSize: 17, marginBottom: 10 }}>{t.title}</div>
                <p
                  style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: t.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Verse by Verse */}
        {activeTab === "verses" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Walking Through Mark 15</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Section by section, the chapter moves from the judgment hall of Pilate to the sealed tomb in the garden. Each passage below traces the flow of the narrative, attending to the words of Jesus, the cruelty of his accusers, and the quiet sovereignty by which the King of the Jews goes to the cross appointed for him.",
                }}
              />
            </div>
            {VERSES.map((v) => (
              <div key={v.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${v.color}20`, border: `1px solid ${v.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: v.color, fontWeight: 700 }}>{v.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{v.title}</span>
                </div>
                <p
                  style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: v.body }}
                />
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 6 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>Barabbas and the Logic of Substitution</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The episode of Barabbas is one of the clearest pictures of substitution in all the Gospels. Barabbas is a man guilty of insurrection and murder, deserving of death under Roman law, while Jesus is the one of whom Pilate himself can find no fault. Yet when the crowd is offered a choice, the guilty man is released and the innocent man is crucified. Barabbas walks out of his cell a free man, and somewhere in Jerusalem he could have looked toward Golgotha and seen, hanging on the cross meant for him, the one who took his place.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The name itself carries a sermon. Barabbas means son of the father, so that one bearing the name son of the father is set free because the true Son of the Father is condemned. Every reader who knows his own guilt is invited to find himself in Barabbas, the criminal who deserved the cross but was spared because another stood in his place. This is the meaning of substitutionary atonement, that Christ the righteous suffered for the unrighteous, the just for the unjust, to bring us to God.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The crucifixion between two robbers extends the same truth. Jesus is numbered with the transgressors, just as Isaiah 53 promised of the suffering servant who was counted among sinners and bore the sin of many. He does not die apart from the guilty but in their midst, taking his place among criminals so that he might bear their judgment. The whole scene declares that the cross is not a tragedy that befell an innocent man but a deliberate exchange, the sinless one dying in the place of sinners.",
                }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 14 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>The Cry of Dereliction, the Torn Veil, and the Confession</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The loud cry of Jesus, My God, my God, why have you forsaken me, is the opening line of Psalm 22, a psalm that begins in the agony of abandonment and rises to the praise of the nations and the proclamation of God&rsquo;s righteousness to a people yet unborn. By praying its first words, Jesus claims the whole psalm, taking its anguish upon himself and its triumph as his hope. Here at the heart of the darkness the Son bears the forsakenness that sin deserves, drinking the cup of judgment he had shrunk from in Gethsemane, so that for those he redeems the experience of being forsaken by God is forever ended.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "When Jesus breathes his last, the curtain of the temple is torn in two from top to bottom. That veil guarded the Most Holy Place, the inner sanctuary where God&rsquo;s presence dwelt, which only the high priest could enter once a year and never without blood. Torn from top to bottom, it is rent by God himself, not by human hands, announcing that the death of Jesus has opened the way into the very presence of God. The letter to the Hebrews makes this plain: we now have confidence to enter the holy places by the blood of Jesus, by the new and living way he opened for us through the curtain, that is, through his flesh, so let us draw near with a true heart in full assurance of faith.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Then comes the confession that crowns the Gospel. The very first verse of Mark announced the beginning of the gospel of Jesus Christ, the Son of God, and through the whole book demons and a voice from heaven have named him so, yet no human being had confessed it of the crucified Jesus until now. A Gentile centurion, watching how he breathed his last, declares, Truly this man was the Son of God. Mark frames his entire Gospel between this title at the start and this confession at the cross, teaching that the crucified Christ is rightly seen only when we behold him dying and confess, with the soldier, that he is the Son of God.",
                }}
              />
            </div>
          </div>
        )}

        {/* Application */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Living Mark 15</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Mark 15 is not a chapter to be observed from a distance but one that demands a place in the heart. It calls us to stand beneath the cross and recognize ourselves in Barabbas, the guilty one set free, and in the centurion, the outsider brought near. To apply this chapter well is to receive the substitution it portrays, to draw near through the torn curtain it opens, and to make the confession of faith it places on the lips of a Roman soldier. The crucifixion is both the ground of our forgiveness and the pattern of a love that does not save itself.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "First, let the release of Barabbas teach us the wonder of grace. We were the guilty who deserved condemnation, yet the innocent Son of God took our place, and we walk free not because we are good but because he was crucified for us. Second, let the torn veil teach us boldness in prayer. The way into God&rsquo;s presence is no longer barred; through the blood of Jesus we may come near with confidence, no longer cowering at a distance but drawing near as beloved children for whom the curtain has been rent.",
                }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>Beholding the Crucified King</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The mockers at the cross demanded that Jesus save himself and come down, assuming that a King who could not escape the cross could be no King at all. But the gospel turns their logic upside down, for it is precisely because he would not save himself that he could save others. His refusal to come down is the supreme display of his love, the King reigning from a tree, conquering by dying. When we are tempted to measure power by self-preservation and strength by escape from suffering, the cross teaches us a different kingdom, one in which the greatest glory is found in self-giving love.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The cry of dereliction speaks tenderly to every believer who has ever felt abandoned by God. In the darkness Jesus cried, My God, my God, why have you forsaken me, and he bore that forsakenness so that we might never be forsaken. When the night is darkest and God seems distant, we may look to the cross and know that the Son was forsaken in our place, that we might hear instead the promise, I will never leave you nor forsake you. Our deepest aloneness was carried by Christ, and so even our darkest hours are held within his unbreakable love.",
                }}
              />
            </div>

            {/* Reflection questions block */}
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {REFLECTION.map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span
                      style={{
                        flexShrink: 0,
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: `${GREEN}20`,
                        border: `1px solid ${GREEN}55`,
                        color: GREEN,
                        fontSize: 13,
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {i + 1}
                    </span>
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Always-visible video section */}
        <div style={{ marginTop: 40 }}>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
            <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos on Mark 15</h2>
            <p
              style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}
              dangerouslySetInnerHTML={{
                __html:
                  "Sermons and teaching on Mark 15 &mdash; the trial before Pilate and the release of Barabbas, the mockery and crucifixion at Golgotha, the cry of dereliction, the torn temple curtain, and the confession of the centurion.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: ROSE, fontWeight: 700, fontSize: 16, margin: 0 }}>{v.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
