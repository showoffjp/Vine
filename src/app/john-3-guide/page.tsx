"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Born of the Spirit",
  "The Wind Blows Where It Wills",
  "The Bronze Serpent Lifted Up",
  "For God So Loved the World",
  "Light and Darkness",
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
    id: "Born of the Spirit",
    heading: "Born of the Spirit",
    reference: "John 3:1&ndash;8",
    paragraphs: [
      "John 3 opens with a single named visitor stepping out of the shadows: &ldquo;Now there was a man of the Pharisees named Nicodemus, a ruler of the Jews. This man came to Jesus by night&rdquo; (3:1&ndash;2). Nicodemus is no ordinary inquirer. He is a Pharisee, a member of the Sanhedrin, a teacher of Israel &mdash; a man at the very heart of the religious establishment. And yet he comes, and he comes by night. John mentions the darkness deliberately. It hints at caution, at fear of being seen, perhaps at the spiritual darkness Nicodemus himself is still groping through. He is drawn to Jesus but not yet ready to be counted among his followers.",
      "Nicodemus begins with a careful, respectful compliment: &ldquo;Rabbi, we know that you are a teacher come from God, for no one can do these signs that you do unless God is with him&rdquo; (3:2). It is an honest assessment as far as it goes. But Jesus does not let him finish constructing a polite theological conversation. He cuts straight to the heart of the matter with words that must have stunned this learned man: &ldquo;Truly, truly, I say to you, unless one is born again he cannot see the kingdom of God&rdquo; (3:3).",
      "The phrase rendered &ldquo;born again&rdquo; can also mean &ldquo;born from above,&rdquo; and both senses are at work. To enter the kingdom of God, a person needs more than reformation, more than education, more than religious credentials. He needs a new beginning &mdash; a birth that comes down from God himself. Nicodemus, with all his learning, cannot manufacture this. Neither can anyone else. It is the great leveler of the gospel: the ruler of the Jews and the outcast both need exactly the same thing, a birth they cannot produce.",
      "Nicodemus takes the words literally and is baffled: &ldquo;How can a man be born when he is old? Can he enter a second time into his mother&rsquo;s womb and be born?&rdquo; (3:4). His confusion is not foolish; it exposes the real difficulty. A second physical birth is impossible &mdash; and that is precisely the point. The birth Jesus speaks of is impossible by human power. It lies entirely outside what Nicodemus can do for himself.",
      "Jesus answers by deepening the mystery: &ldquo;Truly, truly, I say to you, unless one is born of water and the Spirit, he cannot enter the kingdom of God. That which is born of the flesh is flesh, and that which is born of the Spirit is spirit&rdquo; (3:5&ndash;6). To be born of water and the Spirit is to be cleansed and made new from within &mdash; an echo of the promise in Ezekiel that God would sprinkle clean water on his people and put a new heart and a new Spirit within them. Flesh can only produce flesh; only the Spirit of God can produce spiritual life.",
      "Here is the foundation of the whole chapter, and of the Christian life. We do not climb up to God by effort or merit; we are born from above by his Spirit. This is humbling for the religious and hope-giving for the desperate. No one is too good to need it, and no one is too far gone to receive it. The new birth is God&rsquo;s work, and where the Spirit gives life, even a cautious man who comes by night may yet walk in the light.",
    ],
  },
  {
    id: "The Wind Blows Where It Wills",
    heading: "The Wind Blows Where It Wills",
    reference: "John 3:7&ndash;12",
    paragraphs: [
      "&ldquo;Do not marvel that I said to you, &lsquo;You must be born again,&rsquo;&rdquo; Jesus continues. &ldquo;The wind blows where it wishes, and you hear its sound, but you do not know where it comes from or where it goes. So it is with everyone who is born of the Spirit&rdquo; (3:7&ndash;8). In both Greek and Hebrew the same word means &ldquo;wind,&rdquo; &ldquo;breath,&rdquo; and &ldquo;Spirit,&rdquo; and Jesus plays on that overlap. The new birth is like the wind: real, powerful, and beyond our control.",
      "You cannot command the wind, schedule it, or trace its hidden course. You only perceive that it is there by what it does &mdash; the rustling leaves, the cooling air, the moving clouds. So it is with the Spirit. We cannot manage or manufacture the work of God in a soul. But we can see its effects: a changed life, a softened heart, a new love for God and for his people, a turning from sin toward the light.",
      "This image is meant to free Nicodemus from the very trap his training set for him. As a teacher of the law, his instinct is to master, to define, to control, to fit God into a system. Jesus tells him that the deepest work of God is not something we operate; it is something we receive. The Spirit moves sovereignly, like the wind, and our part is not to harness him but to be born of him.",
      "Nicodemus is still reeling: &ldquo;How can these things be?&rdquo; (3:9). And Jesus presses gently on the irony of the moment: &ldquo;Are you the teacher of Israel and yet you do not understand these things?&rdquo; (3:10). The Scriptures Nicodemus has studied all his life &mdash; the promise of a new heart, of God&rsquo;s Spirit poured out, of cleansing and renewal &mdash; pointed toward exactly this. The teacher of Israel has the text but has missed the truth standing in front of him.",
      "Jesus also marks the difference between hearsay and witness: &ldquo;We speak of what we know, and bear witness to what we have seen, but you do not receive our testimony&rdquo; (3:11). He is not theorizing about heavenly things; he speaks as one who has come down from the Father. If Nicodemus cannot believe the earthly picture of the wind, how will he believe when Jesus tells him heavenly things about the Son of Man, his cross, and the love of God?",
      "For us the lesson is both sobering and liberating. We cannot argue, organize, or educate ourselves or anyone else into the kingdom. Conversion is not a project we complete; it is a wind we wait upon in prayer. That should keep us humble and prayerful as we share the gospel &mdash; and hopeful too, for the same Spirit who blows where he wills delights to give life to those who feel themselves furthest from God.",
    ],
  },
  {
    id: "The Bronze Serpent Lifted Up",
    heading: "The Bronze Serpent Lifted Up",
    reference: "John 3:13&ndash;15",
    paragraphs: [
      "Jesus now turns Nicodemus back to a story etched in Israel&rsquo;s memory: &ldquo;As Moses lifted up the serpent in the wilderness, so must the Son of Man be lifted up, that whoever believes in him may have eternal life&rdquo; (3:14&ndash;15). The reference is to Numbers 21, where the grumbling Israelites were bitten by fiery serpents and dying in the desert, and God instructed Moses to make a bronze serpent and set it on a pole. Anyone who looked at it lived.",
      "It was a strange and humbling remedy. The people were not told to fight the serpents, to earn healing, or to make some great offering. They were simply told to look &mdash; to turn their eyes in faith to the bronze serpent God had provided. The cure was entirely outside themselves. To refuse to look, out of pride or unbelief, was to die; to look, however weakly, was to live.",
      "Jesus takes this ancient picture and applies it to himself. The Son of Man &ldquo;must be lifted up&rdquo; &mdash; a phrase John uses throughout his Gospel to point to the cross, where Jesus would be lifted up on the wood. As the bronze serpent was raised so that dying people might look and live, so the crucified Christ is raised up so that perishing sinners might look to him and have eternal life. The remedy God has provided is his own Son, hung in the place of the cursed.",
      "There is striking depth here. The serpent on the pole bore the image of the very thing that was killing the people. On the cross, Christ &mdash; who knew no sin &mdash; was made sin for us, bearing in his body the curse and judgment we deserved. The deadly thing was lifted up so that the deadly thing might be defeated. Looking to a crucified Savior, we are healed of the venom of sin and death.",
      "And note how simple the response is: not striving, not achieving, but believing &mdash; looking to Christ. &ldquo;Whoever believes in him may have eternal life.&rdquo; Faith is the empty hand that receives; it is the look of a dying person toward the only remedy God has given. This is good news for the weakest of believers. You do not have to look strongly; you only have to look truly, and the life is in the One you look to, not in the strength of your looking.",
      "For anyone weighed down by guilt, this image is pure mercy. You do not heal yourself before you come; you come to be healed. The invitation is not &ldquo;clean yourself up and then look,&rdquo; but &ldquo;look and live.&rdquo; However far the poison of sin has spread, the lifted-up Son of Man is sufficient. Turn your eyes to him, and the eternal life he won is yours.",
    ],
  },
  {
    id: "For God So Loved the World",
    heading: "For God So Loved the World",
    reference: "John 3:16&ndash;18",
    paragraphs: [
      "We come now to perhaps the most beloved verse in all of Scripture: &ldquo;For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life&rdquo; (3:16). In a single sentence the whole gospel is gathered up &mdash; its source, its scope, its cost, its means, and its end. It is the verse children learn first and saints meditate on last, and it never wears out.",
      "It begins with the love of God: &ldquo;For God so loved.&rdquo; The new birth, the lifting up of the Son, the offer of eternal life &mdash; all of it flows from a fountain of divine love. God was not coerced or persuaded into saving us. He acted out of his own free, overflowing, generous heart. Behind the cross is not a reluctant deity but a loving Father.",
      "Consider the scope: &ldquo;the world.&rdquo; Not a favored nation only, not the deserving, not the religious elite, but the world &mdash; a world in rebellion, a world that loved darkness. The love of God reaches out to the very people who had turned from him. No one can say, &ldquo;I am outside the boundaries of that love.&rdquo; The offer goes out as wide as the world.",
      "Consider the cost: &ldquo;he gave his only Son.&rdquo; This love is not sentiment but sacrifice. God gave what was most precious to him, his only Son, handing him over to the cross. Real love gives, and the measure of this love is the measure of the gift. The Father did not spare his own Son but gave him up for us all.",
      "And consider the means and the end: &ldquo;that whoever believes in him should not perish but have eternal life.&rdquo; The way in is faith &mdash; &ldquo;whoever believes&rdquo; &mdash; a door flung open to anyone who will trust the Son. The outcome is the difference between two eternities: to perish, or to have eternal life. Jesus immediately adds the heart of God&rsquo;s purpose: &ldquo;God did not send his Son into the world to condemn the world, but in order that the world might be saved through him&rdquo; (3:17). He came not as a judge to destroy but as a Savior to rescue.",
      "Yet Jesus does not soften the seriousness of the choice: &ldquo;Whoever believes in him is not condemned, but whoever does not believe is condemned already, because he has not believed in the name of the only Son of God&rdquo; (3:18). To rest in Christ by faith is to stand acquitted, free, beyond condemnation. To refuse him is to remain under a condemnation that is already in place. The dividing line runs through this one response &mdash; not how good we have been, but whether we have trusted the Son God so lovingly gave.",
    ],
  },
  {
    id: "Light and Darkness",
    heading: "Light and Darkness",
    reference: "John 3:19&ndash;36",
    paragraphs: [
      "The chapter now exposes the deep reason people refuse such a gift: &ldquo;And this is the judgment: the light has come into the world, and people loved the darkness rather than the light because their works were evil&rdquo; (3:19). The tragedy is not that the light is hidden but that it has come &mdash; and been rejected. People do not stumble away from Christ in the dark; they turn from him because they love the dark, and he exposes what they wish to keep hidden.",
      "Jesus explains the instinct: &ldquo;For everyone who does wicked things hates the light and does not come to the light, lest his works should be exposed. But whoever does what is true comes to the light, so that it may be clearly seen that his works have been carried out in God&rdquo; (3:20&ndash;21). Sin loves concealment. The thought of being seen, known, and judged drives the guilty away. But the one who is ready to be honest with God comes into the light, with nothing left to hide.",
      "This is where Nicodemus, who came by night, is quietly challenged. Will he stay in the shadows, or step into the light? John&rsquo;s Gospel gives us the answer in two later glimpses: Nicodemus speaks up for Jesus before the hostile council, and at the end he comes openly, with Joseph of Arimathea, to bury the body of Jesus, bringing a costly weight of spices. The man who came by night comes at last into the light of day.",
      "The chapter closes with the testimony of John the Baptist, whose disciples grow jealous that the crowds are now flocking to Jesus. John&rsquo;s reply is one of the noblest sentences in the Bible: &ldquo;He must increase, but I must decrease&rdquo; (3:30). He compares himself to the friend of the bridegroom, who rejoices simply to hear the bridegroom&rsquo;s voice. John knows his whole purpose is to point away from himself to Christ, and he embraces his own decreasing with joy.",
      "John the Baptist then gathers up the themes of the chapter: &ldquo;The Father loves the Son and has given all things into his hand. Whoever believes in the Son has eternal life; whoever does not obey the Son shall not see life, but the wrath of God remains on him&rdquo; (3:35&ndash;36). Once again everything turns on the Son and on belief. To have the Son is to have life; to reject him is to remain under wrath. There is no neutral ground.",
      "So John 3 lays before us the great choice of the human heart. Will we love the light or the darkness? Will we come to Christ to be exposed and forgiven, or hide from him to be condemned? The new birth makes us love the light; the lifted-up Savior heals us; the love of God draws us; and the witness of the Baptist points us. The call of this chapter is clear: do not stay in the night. Come to the light, believe in the Son, and live.",
    ],
  },
];

const videoItems = [
  { videoId: "PpMnP4VFsRY", title: "BibleProject - Gospel of John Overview - Chapters 1-12" },
  { videoId: "1xeI3jVo5T8", title: "Nicodemus and the New Birth - John 3 Explained" },
  { videoId: "vCfW8wXjP3Y", title: "For God So Loved the World - John 3:16 Devotional" },
  { videoId: "Wd7m7QjQp1c", title: "The Bronze Serpent and the Son of Man Lifted Up" },
];

export default function John3GuidePage() {
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
            John 3
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Nicodemus comes by night and hears the most famous words ever spoken &mdash; &ldquo;you must be born again,&rdquo; the Spirit that blows where it wills, the Son of Man lifted up like the bronze serpent, and the love of God that gave his only Son so that whoever believes should not perish but have eternal life.
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
              Go deeper into John 3 through visual teaching on the new birth, the visit of Nicodemus, the Son of Man lifted up like the bronze serpent, and the love of God revealed in John 3:16.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Come to the Light</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            John 3 lays the whole gospel before us: a birth we cannot manufacture, a Savior lifted up for the dying, a love that gave the only Son, and a light that has come into the world. Its invitation still stands &mdash; do not stay in the night. Look to the lifted-up Christ, believe in the Son God so lovingly gave, and you will not perish but have eternal life.
          </p>
        </div>
      </main>
    </div>
  );
}
