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
    videoId: "HGHqu9-DtXk",
    title: "Mark 14 - The Last Supper and Gethsemane",
  },
  {
    videoId: "Lr6kF3HLB-M",
    title: "This Is My Blood of the Covenant - The Lord's Supper",
  },
  {
    videoId: "qZc9Tj0xR2A",
    title: "Not My Will but Yours - The Agony in the Garden",
  },
  {
    videoId: "8mWg4D7sN1p",
    title: "Peter's Denial and the Mercy of Restoration",
  },
];

const THEMES = [
  {
    color: GOLD,
    title: "Extravagant Devotion Against the Backdrop of Betrayal",
    body:
      "Mark frames the chapter with a deliberate contrast. On one side stands an unnamed woman who breaks an alabaster flask of pure nard and pours it over Jesus, a gift worth nearly a year&rsquo;s wages. On the other side stands Judas, one of the Twelve, who goes to the chief priests to sell his Master for money. The woman gives everything and is criticized; Judas takes payment and is welcomed by the powerful. Jesus declares that wherever the gospel is preached in the whole world, what she has done will be told in memory of her &mdash; teaching that love poured out on Christ is never wasted, however the world counts its worth.",
  },
  {
    color: PURPLE,
    title: "The New Covenant in Jesus' Blood",
    body:
      "At the Passover table Jesus takes bread and wine and gives them a meaning that will shape the church forever: this is my body, and this is my blood of the covenant, poured out for many. He does not abolish the Passover; he fulfills it, becoming himself the Lamb whose blood delivers his people from a deeper bondage than Egypt. The language of the blood of the covenant recalls Exodus 24, where Moses sealed the old covenant with blood, and Jeremiah 31, where God promised a new covenant written on the heart. In one meal Jesus announces that the great hope of the prophets is now arriving through his own death.",
  },
  {
    color: ROSE,
    title: "The Agony of Gethsemane and Submission to the Father",
    body:
      "In the garden Jesus is greatly distressed and troubled, his soul sorrowful even to death. He falls to the ground and prays that, if it were possible, the hour might pass from him: Abba, Father, all things are possible for you; remove this cup from me. Yet the prayer does not end in escape but in surrender: yet not what I will, but what you will. Here is the costliest obedience in all of Scripture, the Son freely embracing the Father&rsquo;s will at the price of his own anguish. The cup he shrinks from is not merely death but the cup of God&rsquo;s judgment, which he chooses to drink in the place of sinners.",
  },
  {
    color: TEAL,
    title: "Human Weakness, Sleep, and Denial",
    body:
      "Around the praying Christ the disciples collapse into failure. Peter, James, and John cannot stay awake one hour; the band scatters when the soldiers come; Peter follows at a distance only to deny three times that he ever knew Jesus. Mark does not soften the portrait of human frailty even in the most devoted followers. The spirit indeed is willing, but the flesh is weak, Jesus says &mdash; a diagnosis of the whole human condition. The chapter exposes how quickly bold promises dissolve under pressure, and how desperately we need a Savior who remains faithful when we do not.",
  },
  {
    color: GREEN,
    title: "Jesus as the Suffering Messiah and Son of Man",
    body:
      "Before the Sanhedrin the high priest asks directly, Are you the Christ, the Son of the Blessed? Jesus answers without evasion: I am, and you will see the Son of Man seated at the right hand of Power, and coming with the clouds of heaven. He claims to be the Messiah of Israel and the exalted figure of Daniel 7, yet he claims it while bound and about to be condemned. Mark holds together the two truths the disciples found hardest to unite: that Jesus is the glorious Son of Man and that his path to glory runs through suffering, rejection, and the cross.",
  },
];

const VERSES = [
  {
    ref: "Mark 14:1-2",
    color: ROSE,
    title: "The Plot to Kill Jesus",
    body:
      "It is now two days before the Passover and the Feast of Unleavened Bread, and the chief priests and the scribes are seeking how to arrest Jesus by stealth and kill him. They are afraid of the crowds who hang on his words, so they conspire to seize him away from the festival pilgrims, saying, Not during the feast, lest there be an uproar among the people. Mark sets the clock ticking: the religious leaders have resolved on murder, and only their fear of a riot restrains the timing. The reader is reminded that the events to follow are not an accident of mob anger but a deliberate plan, which God will nonetheless turn to his saving purpose.",
  },
  {
    ref: "Mark 14:3-9",
    color: GOLD,
    title: "The Anointing at Bethany",
    body:
      "In the house of Simon the leper a woman comes with an alabaster flask of pure nard, very costly, and she breaks the flask and pours it over Jesus&rsquo; head. Some are indignant, complaining that the ointment might have been sold for more than three hundred denarii and given to the poor, and they scold her. But Jesus defends her: Leave her alone; why do you trouble her? She has done a beautiful thing to me. She has anointed my body beforehand for burial. He adds the astonishing promise that wherever the gospel is proclaimed in the whole world, what she has done will be told in memory of her. Her lavish love, poured out without calculation, becomes a permanent part of the gospel story.",
  },
  {
    ref: "Mark 14:10-11",
    color: TEAL,
    title: "Judas Goes to Betray Him",
    body:
      "Then Judas Iscariot, who was one of the Twelve, went to the chief priests in order to betray Jesus to them. When they heard it they were glad and promised to give him money, and he began to seek an opportunity to betray him. Mark places this dark transaction directly after the woman&rsquo;s extravagant devotion, so the two scenes interpret one another. She gives a fortune to honor Jesus; Judas accepts a fee to destroy him. The betrayal is all the more terrible because it comes from within the circle of the Twelve, from one who had been called, taught, and trusted. The mention of money exposes the hollowness of a discipleship that follows Christ for gain rather than love.",
  },
  {
    ref: "Mark 14:12-21",
    color: PURPLE,
    title: "Preparing the Passover; One Will Betray Me",
    body:
      "On the first day of Unleavened Bread the disciples ask where to prepare the Passover, and Jesus sends two of them into the city to follow a man carrying a jar of water to a large upper room furnished and ready. As they recline at table he says, Truly, I say to you, one of you will betray me, one who is eating with me. Sorrowful, they ask one after another, Is it I? Jesus answers that it is one of the Twelve, one who dips bread into the dish with him, and pronounces a solemn woe: it would have been better for that man if he had not been born. The shadow of betrayal falls across the meal even as Jesus prepares to give the supper its enduring meaning.",
  },
  {
    ref: "Mark 14:22-25",
    color: GOLD,
    title: "This Is My Body, This Is My Blood",
    body:
      "As they are eating, Jesus takes bread, blesses and breaks it, and gives it to them, saying, Take; this is my body. And he takes a cup, gives thanks, and gives it to them, and they all drink of it, and he says to them, This is my blood of the covenant, which is poured out for many. He adds that he will not drink again of the fruit of the vine until that day when he drinks it new in the kingdom of God. In these few words the Lord&rsquo;s Supper is instituted, the Passover fulfilled, and the new covenant inaugurated through his death. The bread broken and the cup poured out preach the cross before it happens, and call the church to remember and proclaim it until he comes.",
  },
  {
    ref: "Mark 14:26-31",
    color: TEAL,
    title: "Peter's Denial Foretold",
    body:
      "After singing a hymn they go out to the Mount of Olives, and Jesus warns that they will all fall away, for it is written, I will strike the shepherd, and the sheep will be scattered. Yet he gives a word of hope: after I am raised up, I will go before you to Galilee. Peter protests that even if all fall away, he never will, but Jesus answers, Truly, I tell you, this very night, before the rooster crows twice, you will deny me three times. Peter insists vehemently that he would die rather than deny him, and all the others say the same. Their confidence is sincere but built on the flesh, and within hours it will collapse under fear.",
  },
  {
    ref: "Mark 14:32-42",
    color: ROSE,
    title: "Gethsemane - Not My Will but Yours",
    body:
      "At a place called Gethsemane Jesus takes Peter, James, and John, and begins to be greatly distressed and troubled, telling them his soul is sorrowful even to death. He falls to the ground and prays, Abba, Father, all things are possible for you; remove this cup from me. Yet not what I will, but what you will. Three times he returns to find them sleeping and says, Could you not watch one hour? Watch and pray that you may not enter into temptation; the spirit indeed is willing, but the flesh is weak. At last he rises in settled resolve: the hour has come; the Son of Man is betrayed into the hands of sinners; rise, let us be going. Submission, not escape, is the fruit of his agony.",
  },
  {
    ref: "Mark 14:43-52",
    color: PURPLE,
    title: "The Betrayal and Arrest",
    body:
      "While Jesus is still speaking, Judas arrives with a crowd carrying swords and clubs from the chief priests, and he gives them a sign: the one I kiss is the man; seize him. He comes up at once and says, Rabbi, and kisses him, and they lay hands on Jesus and arrest him. A bystander draws a sword and cuts off the ear of the high priest&rsquo;s servant, but Jesus asks why they came against him as a robber when he taught daily in the temple and they did not seize him &mdash; this is happening that the Scriptures might be fulfilled. Then all the disciples flee. Mark alone records a young man who follows wearing only a linen cloth, and when they grab him he leaves the cloth and runs away naked, a vivid emblem of the total abandonment of Jesus.",
  },
  {
    ref: "Mark 14:53-65",
    color: GOLD,
    title: "Jesus Before the Sanhedrin",
    body:
      "They lead Jesus to the high priest, where the whole council seeks testimony against him to put him to death but finds none, for the witnesses do not agree. The high priest finally asks him directly, Are you the Christ, the Son of the Blessed? And Jesus says, I am, and you will see the Son of Man seated at the right hand of Power, and coming with the clouds of heaven. The high priest tears his garments and cries blasphemy, and they all condemn him as deserving death. Then some begin to spit on him, to blindfold and strike him, mocking him to prophesy. In the very moment he is condemned for claiming heavenly glory, he is treated with the deepest human contempt.",
  },
  {
    ref: "Mark 14:66-72",
    color: TEAL,
    title: "Peter Denies Jesus Three Times",
    body:
      "While Peter is below in the courtyard, a servant girl of the high priest sees him warming himself and says he was with Jesus of Nazareth, but he denies it. The girl presses him before the bystanders, and again he denies it. A little later they insist that he is one of them, a Galilean, and Peter begins to curse and to swear, I do not know this man of whom you speak. Immediately the rooster crows a second time, and Peter remembers the word Jesus had spoken, that before the rooster crows twice you will deny me three times. And he breaks down and weeps. The fall of the boldest disciple closes the chapter on a note of bitter grief, yet his tears are not the end of his story.",
  },
];

const REFLECTION = [
  "The woman at Bethany poured out a fortune to honor Jesus and was scolded for waste. What costly, uncalculating act of love is Jesus calling me to offer him, even if others see it as extravagant?",
  "Judas followed Jesus for years yet betrayed him for money. Where might I be tempted to follow Christ for what I can gain rather than for love of him?",
  "Jesus said this is my blood of the covenant, poured out for many. When I take the bread and the cup, do I receive them as a living proclamation of his death for me, or as empty routine?",
  "In Gethsemane Jesus prayed, not what I will, but what you will. Is there a cup the Father is asking me to drink that I would rather have removed, and can I pray his prayer of surrender?",
  "The disciples slept while Jesus agonized, and Jesus said the spirit is willing but the flesh is weak. Where do I need to watch and pray so that I do not collapse in the hour of testing?",
  "Peter wept bitterly after denying his Lord, yet Jesus would later restore him. When I fail, do I let my grief drive me to despair, or back to the mercy of the Savior who knew I would fall and loved me still?",
];

type MarkTab = "overview" | "themes" | "verses" | "application";

export default function Mark14GuidePage() {
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
            Gospel of Mark - Chapter 14
          </div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px" }}>
            The Passion Begins - Betrayal, the Last Supper, and Gethsemane
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 640 }}>
            A woman pours out a fortune in love while Judas sells his Lord for silver; Jesus gives
            the bread and cup of the new covenant, then kneels in agony at Gethsemane and is
            betrayed, arrested, condemned, and denied - yet drinks the cup the Father gives him.
          </p>
          <p
            style={{ color: ROSE, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: "14px 0 0", maxWidth: 640 }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;Abba, Father, all things are possible for you. Remove this cup from me. Yet not what I will, but what you will.&rdquo; &mdash; Mark 14:36",
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
                  ["Chapter", "14"],
                  ["Setting", "Bethany and Jerusalem"],
                  ["Time", "Passover Week"],
                  ["Key Theme", "The Passion Begins"],
                  ["Key Verse", "Mark 14:36"],
                ].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>The Longest Chapter in Mark</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Mark 14 is the longest chapter in the Gospel of Mark and the gateway into the passion narrative that dominates the book&rsquo;s final movement. From the opening verse the pace slows and the focus narrows: Mark has been hurrying through Galilee and Judea, but now he lingers over a single span of hours, tracing the betrayal, the supper, the garden, the arrest, the trial, and the denial. The whole Gospel has been pressing toward this hour, for Mark has insisted from the first half that the Son of Man came to give his life as a ransom for many. Here that mission begins to unfold in earnest.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter is woven from contrasts. Extravagant devotion stands beside cold betrayal; covenant intimacy at the table stands beside coming abandonment; bold promises of loyalty stand beside cowardly denial. Mark structures the material so these opposites illuminate one another, and at the center of it all stands Jesus, calm, sorrowful, and resolved. He is never a passive victim. He interprets the woman&rsquo;s act, gives the supper its meaning, predicts the betrayal, foretells the denial, and freely surrenders to the Father&rsquo;s will. The events happen to him, yet they also happen through his deliberate obedience.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Theologically the chapter is dense beyond almost any other in the Gospels. It contains the institution of the Lord&rsquo;s Supper and the words of the new covenant; the agonized prayer of submission that reveals the cost of the cross; and the climactic confession before the Sanhedrin that joins the titles Christ, Son of God, and Son of Man. To read Mark 14 well is to stand at the threshold of the atonement, watching the Savior set his face to drink the cup of judgment so that those who fail him, like Peter, might one day be restored.",
                }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>The Movement of the Chapter</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter opens with the plot of the chief priests and the anointing at Bethany, two scenes set side by side to contrast hostility and love (verses 1 to 9). Then comes the betrayal of Judas (verses 10 to 11) and the preparation and celebration of the Passover, where Jesus institutes the supper and announces the new covenant in his blood (verses 12 to 25). On the Mount of Olives he foretells that all will fall away and that Peter will deny him three times (verses 26 to 31).",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The garden of Gethsemane forms the emotional heart, where Jesus prays in anguish that the cup might pass yet yields to the Father&rsquo;s will while the disciples sleep (verses 32 to 42). The arrest follows, sealed by Judas&rsquo; kiss and marked by the flight of all, including a young man who escapes naked (verses 43 to 52). The trial before the Sanhedrin brings the great confession and the charge of blasphemy (verses 53 to 65), and the chapter closes with Peter&rsquo;s threefold denial, the crowing of the rooster, and his bitter weeping (verses 66 to 72).",
                }}
              />
            </div>
          </div>
        )}

        {/* Key Themes */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>The Major Themes of Mark 14</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Mark 14 gathers the deepest currents of the gospel into a single chapter &mdash; the contrast of devotion and betrayal, the new covenant sealed in blood, the agony of submission in the garden, the frailty of even the most loyal disciples, and the paradox of a Messiah who reaches glory through suffering. These five threads run through every scene and prepare the reader for the cross that follows.",
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
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Walking Through Mark 14</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Section by section, the chapter moves from the plot of the priests to the bitter tears of Peter. Each passage below traces the flow of the narrative, attending to the words of Jesus, the failures of his followers, and the quiet sovereignty by which the Son of Man walks into the hour appointed for him.",
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
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>The Passover, the Supper, and the New Covenant</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The setting of the supper is the Passover, the meal that commemorated Israel&rsquo;s deliverance from Egypt through the blood of a lamb. By choosing this meal to institute the new sign of bread and cup, Jesus reveals himself as the true Passover Lamb, whose blood delivers his people from sin and death. The Passover looked back to the exodus and forward to a greater redemption; in Jesus that redemption arrives. The unleavened bread he breaks becomes his body given, and the cup of the meal becomes his blood poured out, so that the ancient feast is filled with a new and final meaning.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The phrase my blood of the covenant deliberately echoes Exodus 24, where Moses sprinkled the blood of sacrifice on the people and declared, Behold the blood of the covenant that the Lord has made with you. Jesus announces that his own blood now seals a covenant, and the prophet Jeremiah had foretold exactly such a new covenant, one in which God would write his law on the heart, remember sins no more, and grant a knowledge of himself to all his people. The Lord&rsquo;s Supper is therefore the covenant meal of the people Jeremiah longed to see, established not in the blood of bulls but in the blood of the Son.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Jesus says his blood is poured out for many, an echo of the suffering servant of Isaiah 53 who bore the sin of many. The supper is thus not a bare memorial but a proclamation of substitution: his death is for the many who could never atone for themselves. And it is given with a promise, for Jesus vows not to drink of the fruit of the vine again until he drinks it new in the kingdom of God. Every celebration of the supper therefore looks back to the cross and forward to the marriage feast of the Lamb, holding the church in a remembrance that is also a hope.",
                }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 14 }}>
              <h3 style={{ color: ROSE, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>The Cup, the Abba Prayer, and the Son of Man</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "When Jesus prays for the cup to be removed, the cup is more than the suffering of death. Throughout the Old Testament the cup is a vivid image of God&rsquo;s wrath against sin, the cup of staggering that the nations and even Israel must drink in judgment. In Gethsemane the sinless Son contemplates drinking that cup of judgment in the place of sinners, and his soul recoils to the point of death. The horror is not cowardice before pain but the holy anguish of the One who will be made sin, bearing the righteous judgment that was never his to bear. That he drinks it anyway is the measure of his love.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Mark preserves the very word Jesus used in prayer, Abba, the intimate Aramaic address of a child to a father. Even in his deepest agony Jesus does not lose his trust in the Father&rsquo;s love; he comes as a beloved Son, certain that all things are possible for the One he calls Abba. Paul later teaches that by the Spirit believers cry the same Abba, so that the Son&rsquo;s costly obedience opens to us his own access to the Father. The garden thus gives the church both a Savior who drinks the cup and a pattern for every prayer of surrender: honest about the dread, yet ending in yes to the Father&rsquo;s will.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Before the Sanhedrin Jesus answers the high priest with I am, and points to the Son of Man seated at the right hand of Power and coming with the clouds of heaven. He is quoting Daniel 7, where one like a son of man comes on the clouds to the Ancient of Days and receives everlasting dominion, and also Psalm 110, where the Lord seats his king at his right hand. In the moment of his condemnation Jesus claims the highest dignity in heaven and earth, foretelling that his judges will one day see his exaltation. The cross is not the defeat of the Son of Man but the road to his enthronement.",
                }}
              />
            </div>
          </div>
        )}

        {/* Application */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Living Mark 14</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Mark 14 confronts us with the cost of our redemption and the frailty of our discipleship in the same breath. It calls us to extravagant love for Christ, to reverent participation in his supper, to honest prayer in our own gardens of trial, and to humble hope when we fail. To apply it well is to come to the table with gratitude, to the garden with surrender, and to our failures with the confidence that the Lord who foreknew Peter&rsquo;s denial also planned his restoration.",
                }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "First, let the woman at Bethany teach us a love that pours out without counting the cost. The world will always have reasons to call devotion to Christ wasteful, but Jesus receives such love as a beautiful thing and writes it into the gospel itself. Second, let the supper deepen our worship. Each time we take the bread and the cup we proclaim the Lord&rsquo;s death until he comes, and we are summoned to do so not as empty habit but as a covenant meal that joins us to the One whose body was broken and whose blood was poured out for many.",
                }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>Praying in Our Own Gethsemane</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The garden gives every suffering believer a pattern and a companion. Jesus did not pretend the cup was easy; he named his sorrow to the point of death and asked the Father to take it away. There is no false stoicism here, no shame in begging for relief. Yet his prayer did not end in his own preference but in the Father&rsquo;s will, and that surrender was not resignation but trust. When we face our own appointed cups, we may pray with the same honesty, pouring out our dread, and then with the same faith we may add the words that set us free: yet not what I will, but what you will.",
                }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The disciples slept while their Lord agonized, and their failure warns us that good intentions are not enough. The spirit is willing but the flesh is weak, and the only safeguard Jesus prescribes is to watch and pray that we may not enter into temptation. We are most vulnerable when we are most confident, as Peter discovered. The answer is not greater self-reliance but greater dependence, staying awake in prayer, leaning on the strength of Christ rather than the resolve of our own hearts. The same Lord who knew Peter would fall met him after the resurrection and restored him, so our failures, brought back to him in tears, are never the final word.",
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
            <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos on Mark 14</h2>
            <p
              style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}
              dangerouslySetInnerHTML={{
                __html:
                  "Sermons and teaching on Mark 14 &mdash; the anointing at Bethany, the institution of the Lord&rsquo;s Supper, the agony of Gethsemane, and the denial and restoration of Peter.",
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
