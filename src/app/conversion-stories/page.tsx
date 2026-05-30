"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const ERA_FILTERS = ["All", "Early Church", "Medieval", "Reformation", "Modern", "Contemporary"];

const STORIES = [
  {
    name: "Augustine of Hippo",
    era: "Early Church",
    year: "386 AD",
    color: PURPLE,
    from: "Manichaean philosopher and hedonist",
    background: "Augustine was brilliant, sexually compulsive, and spiritually restless. He had a mistress for 15 years, was deeply immersed in Manichaeism (a dualist religion), and later neoplatonism. His mother Monica prayed for his conversion for over 30 years. He pursued rhetoric, philosophy, and pleasure, famously praying: 'Lord, make me chaste — but not yet.'",
    conversion: "In a garden in Milan, 386 AD, Augustine heard a child's voice say 'Take up and read.' He opened Paul's letter to the Romans and read Romans 13:13-14: 'Not in carousing and drunkenness, not in sexual immorality and sensuality, not in quarreling and jealousy. But put on the Lord Jesus Christ, and make no provision for the flesh, to gratify its desires.' In that moment, his will changed. He described it as a light of security flooding his heart.",
    legacy: "Augustine became the most influential theologian in Western Christianity. His Confessions (the first autobiography in Western literature) and The City of God shaped both Catholic and Protestant theology. His articulation of grace, predestination, and original sin remain foundational.",
    quote: "You have made us for yourself, O Lord, and our heart is restless until it rests in you.",
    source: "Confessions, Book VIII",
    initials: "AUG",
  },
  {
    name: "Francis of Assisi",
    era: "Medieval",
    year: "1205 AD",
    color: "#F59E0B",
    from: "Wealthy merchant's son, aspiring knight",
    background: "Francis Bernardone grew up in wealth, popularity, and ambition. He dreamed of military glory, joined a crusade, was captured and imprisoned, then fell seriously ill. In a vision, Christ asked him: 'Francis, which is better — to serve the master or the servant?' He returned to Assisi, sold his father's cloth for a church restoration, renounced his inheritance publicly, and committed himself to radical poverty.",
    conversion: "The decisive moment came in a crumbling chapel of San Damiano, where Francis heard the crucifix speak: 'Francis, go and rebuild my church, which as you see is falling into ruins.' He initially understood this literally and rebuilt the physical church; over time he understood the spiritual mission and founded the Franciscan order — a movement of radical poverty that renewed the medieval church.",
    legacy: "Francis became the most beloved saint in Western Christianity. His embrace of poverty, care for the sick, and preaching of peace created a movement that shaped Catholicism and influenced Christian piety globally. His Canticle of the Sun is one of the first Italian-language literary works.",
    quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
    source: "Attributed to Francis of Assisi",
    initials: "FRA",
  },
  {
    name: "Martin Luther",
    era: "Reformation",
    year: "1515 AD",
    color: "#3B82F6",
    from: "Augustinian monk tormented by sin and God's wrath",
    background: "Luther entered the monastery in 1505 after a terrifying thunderstorm, vowing to become a monk if he survived. He threw himself into religious discipline with extraordinary intensity, confessing for hours, fasting, and flagellating himself — yet found no peace. He was terrified of a wrathful God and hated the phrase 'righteousness of God' in Romans, believing it meant God's condemning standard that no one could meet.",
    conversion: "While studying Romans 1:17 — 'the righteousness of God is revealed from faith to faith, as it is written: The righteous shall live by faith' — Luther had a breakthrough. He realized that the righteousness of God in this passage was not the righteous standard God demands, but the righteousness he gives by grace through faith. 'I felt that I was altogether born again and had entered paradise itself through open gates.'",
    legacy: "Luther's discovery of justification by faith alone triggered the Protestant Reformation. His 95 Theses (1517), translation of the Bible into German, and theological writings reshaped the entire Western church. Half of Christianity today traces directly to his work.",
    quote: "Here I stand. I can do no other. God help me. Amen.",
    source: "Diet of Worms, 1521",
    initials: "LUT",
  },
  {
    name: "John Newton",
    era: "Modern",
    year: "1748 AD",
    color: "#EF4444",
    from: "Slave ship captain",
    background: "John Newton lived a life of spectacular moral failure: he rejected his Christian upbringing, was press-ganged into the Royal Navy, deserted, was caught and flogged, became a slave trader in West Africa, and described himself as living 'without God in the world.' He mocked Christianity, corrupted other sailors, and participated in one of history's greatest crimes.",
    conversion: "On March 10, 1748, Newton's slave ship encountered a severe storm. Facing death, he cried out to God. He later wrote that in that moment something 'began to work upon his heart.' He became a devout Christian, though he did not immediately abandon the slave trade — a fact he later repented of deeply. He eventually became an evangelical Anglican minister, a close friend of William Wilberforce, and a vocal abolitionist.",
    legacy: "Newton wrote Amazing Grace — perhaps the most recognized Christian hymn in the world — reflecting on his own story of being a wretch who was lost and then found. His testimony and advocacy helped fuel the abolition movement in Britain. His epitaph (which he wrote himself) read: 'John Newton, Clerk, once an infidel and libertine, a servant of slaves in Africa, was by the rich mercy of our Lord and Savior Jesus Christ, preserved, restored, pardoned, and appointed to preach the faith he had long labored to destroy.'",
    quote: "Amazing grace, how sweet the sound, that saved a wretch like me. I once was lost but now am found, was blind but now I see.",
    source: "Amazing Grace, 1779",
    initials: "NEW",
  },
  {
    name: "C.S. Lewis",
    era: "Modern",
    year: "1931 AD",
    color: GREEN,
    from: "Oxford atheist and materialist",
    background: "Clive Staples Lewis was a brilliant Oxford literary scholar who had been an atheist since adolescence. He described himself as 'very angry at God for not existing.' He believed in materialist naturalism: reality is matter, consciousness is an illusion, and there is no meaning beyond physics. His colleagues J.R.R. Tolkien and Hugo Dyson challenged his thinking over years of conversation.",
    conversion: "Lewis's conversion happened in two stages. First, in 1929, he acknowledged God's existence ('perhaps the most reluctant convert in all England' — kneeling in his room at Magdalen, admitting God was God). Then in 1931, after a famous night conversation with Tolkien and Dyson about myth and truth, he went on a motorcycle ride to Whipsnade Zoo and arrived a Christian: 'When we set out I did not believe that Jesus Christ is the Son of God, and when we reached the zoo I did.'",
    legacy: "Lewis became the most influential popular Christian apologist of the 20th century. Mere Christianity, The Screwtape Letters, The Problem of Pain, and the Narnia Chronicles have been read by hundreds of millions. His combination of intellectual rigor and imaginative power is unmatched in Christian apologetics.",
    quote: "I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.",
    source: "The Weight of Glory, 1949",
    initials: "CSL",
  },
  {
    name: "Aleksandr Solzhenitsyn",
    era: "Modern",
    year: "1950s",
    color: "#6366F1",
    from: "Soviet Marxist; political prisoner in the Gulag",
    background: "Solzhenitsyn was raised as an atheist under the Soviet system, became a committed Marxist, and served in the Red Army. In 1945 he was arrested for criticizing Stalin in a private letter and sent to a Soviet labor camp (Gulag). In the camps, stripped of everything, surrounded by suffering and cruelty, he began to encounter men of genuine faith — especially Christian believers — whose inner life could not be broken by the State.",
    conversion: "In the Gulag, Solzhenitsyn experienced a deepening toward Orthodox Christianity. He described a 'divine spark' he encountered in camp believers. His suffering led him not to atheism but through atheism — the system that denied God had produced the Gulag. He returned to Orthodox faith and later said that his years in the camps were the most spiritually formative of his life: 'Bless you, prison, for having been in my life.'",
    legacy: "Solzhenitsyn's The Gulag Archipelago (1973) exposed the Soviet terror to the world and helped bring down the USSR ideologically. His 1978 Harvard commencement address challenged Western materialism from a Christian perspective. He is one of the great spiritual voices of the 20th century.",
    quote: "The line separating good and evil passes not through states, nor between classes, nor between political parties either — but right through every human heart.",
    source: "The Gulag Archipelago",
    initials: "SOL",
  },
  {
    name: "Chuck Colson",
    era: "Contemporary",
    year: "1973 AD",
    color: "#10B981",
    from: "Nixon's 'hatchet man'; Watergate conspirator",
    background: "Charles Colson was Special Counsel to President Nixon, known as his 'hatchet man' — the most feared political operative in Washington. He boasted he would run over his own grandmother for Nixon. He was a brilliant, ruthless man who helped cover up the Watergate scandal. Facing indictment in 1973, he was visited by Tom Phillips, CEO of Raytheon, who read him a passage from C.S. Lewis's Mere Christianity about pride.",
    conversion: "Sitting in his car after the visit with Phillips, Colson wept uncontrollably. He later said: 'Something happened to me that night that I cannot explain.' He converted to Christianity, pled guilty to Watergate-related crimes, and went to prison — a move many thought was political theater. In prison, he met a community of prisoners whose faith was genuine and transformative.",
    legacy: "After release, Colson founded Prison Fellowship (1976) — the world's largest outreach to prisoners, ex-prisoners, and their families, now operating in 100+ countries. He became one of the most significant evangelical voices on criminal justice, culture, and Christian worldview until his death in 2012. His book Born Again remains one of the most important conversion narratives of the 20th century.",
    quote: "God's refining fire had burned away a lot of the dross of self-reliance, self-sufficiency, and pride. What was left was something new and clean.",
    source: "Born Again, 1976",
    initials: "COL",
  },
  {
    name: "Lee Strobel",
    era: "Contemporary",
    year: "1981 AD",
    color: "#F59E0B",
    from: "Atheist journalist at the Chicago Tribune",
    background: "Lee Strobel was an award-winning legal editor at the Chicago Tribune and a committed atheist. When his wife Leslie converted to Christianity, Strobel was furious and determined to disprove Christianity using his journalistic skills. He spent nearly two years systematically investigating the claims of Christianity — interviewing leading scholars, scientists, and historians from both supportive and skeptical perspectives.",
    conversion: "Strobel found the evidence for the resurrection and the historical Jesus far more substantial than he had assumed. After approximately 21 months of investigation, he concluded that it would require more faith to remain an atheist than to become a Christian. He converted in November 1981. He later documented his investigation in The Case for Christ (1998), which became a bestseller and a 2017 film.",
    legacy: "The Case for Christ and subsequent 'Case for...' books have sold millions of copies and are among the most-read lay apologetics books ever written. Strobel has become one of the most effective communicators of evidential apologetics to skeptical audiences, speaking to millions on college campuses and through media.",
    quote: "To continue in atheism, I would have to believe that nothing produces everything, non-life produces life, randomness produces fine-tuning, chaos produces information, and unconsciousness produces consciousness. That requires too much faith.",
    source: "The Case for Faith, 2000",
    initials: "STR",
  },
  {
    name: "Rosaria Butterfield",
    era: "Contemporary",
    year: "1999 AD",
    color: "#EC4899",
    from: "Gay rights activist and tenured professor of Queer Theory",
    background: "Rosaria Champagne was a tenured professor of English and Women's Studies at Syracuse University, an active lesbian in a long-term committed relationship, and a prominent voice in queer theory. She was a postmodern feminist academic who regarded Christianity as primarily oppressive and harmful. In 1997 she began writing a book critiquing the Religious Right's response to the Promise Keepers movement.",
    conversion: "Her research required reading the Bible, which she did with academic detachment — but found herself unable to dismiss it as easily as she expected. She began corresponding with Pastor Ken Smith of a local Presbyterian church, who (with his wife) befriended her without demanding she change. Over two years, she was deeply unsettled by the Scriptures and eventually could not resist what she came to recognize as the call of God. She converted in 1999, ended her lesbian relationship, and eventually married a Reformed pastor.",
    legacy: "Butterfield's book The Secret Thoughts of an Unlikely Convert (2012) became one of the most-read conversion narratives of the 21st century. She is a leading voice on sexuality, hospitality, and costly discipleship, speaking with both conviction and compassion on some of the most contested issues in contemporary Christianity.",
    quote: "The Bible tells me that I am a sinner rescued by a Savior. Not a straight person or a gay person rescued by a Savior. A sinner. The categories that the world uses are not the categories God uses.",
    source: "The Secret Thoughts of an Unlikely Convert, 2012",
    initials: "BUT",
  },
];

export default function ConversionStoriesPage() {
  const [era, setEra] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = STORIES.filter(s => era === "All" || s.era === era);
  const story = STORIES.find(s => s.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔄</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Famous Conversion Stories</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The most dramatic and significant conversions in Christian history — from Augustine's restless heart to C.S. Lewis's reluctant surrender. Every conversion reveals something about the grace of God.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 24, display: "flex", gap: 12, alignItems: "flex-start" }}>
          <span style={{ fontSize: 24, flexShrink: 0 }}>📜</span>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
            "If God can save the slave trader, the atheist philosopher, the Nixon hatchet man, and the queer theory professor — no one is beyond reach. These stories are evidence of what grace actually does."
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {ERA_FILTERS.map(e => (
            <button key={e} onClick={() => setEra(e)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${era === e ? GREEN : BORDER}`, background: era === e ? `${GREEN}15` : "transparent", color: era === e ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {e}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: story ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((s, i) => (
              <button key={i} onClick={() => setSelected(selected === s.name ? null : s.name)}
                style={{ background: selected === s.name ? `${s.color}12` : CARD, border: `1px solid ${selected === s.name ? s.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${s.color}20`, border: `1px solid ${s.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, fontWeight: 900, fontSize: 10, flexShrink: 0 }}>
                    {s.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{s.name}</span>
                      <span style={{ background: `${s.color}15`, color: s.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{s.era}</span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{s.year} · From: {s.from}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {story && (
            <div style={{ background: CARD, border: `1px solid ${story.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: `${story.color}20`, border: `1px solid ${story.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: story.color, fontWeight: 900, fontSize: 11, flexShrink: 0 }}>
                  {story.initials}
                </div>
                <div>
                  <h2 style={{ color: story.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{story.name}</h2>
                  <div style={{ color: MUTED, fontSize: 12 }}>{story.era} · {story.year}</div>
                </div>
              </div>

              <div style={{ background: "#EF444410", border: "1px solid #EF444420", borderRadius: 8, padding: 10, marginBottom: 12 }}>
                <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 10, marginBottom: 3 }}>FROM</div>
                <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{story.from}</p>
              </div>

              <div style={{ marginBottom: 12 }}>
                <div style={{ color: story.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>BACKGROUND</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{story.background}</p>
              </div>

              <div style={{ background: `${story.color}08`, border: `1px solid ${story.color}20`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                <div style={{ color: story.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>THE CONVERSION</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{story.conversion}</p>
              </div>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>LEGACY</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{story.legacy}</p>
              </div>

              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>FAMOUS QUOTE</div>
                <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", margin: "0 0 4px", lineHeight: 1.6 }}>"{story.quote}"</p>
                <p style={{ color: MUTED, fontSize: 11, margin: 0 }}>— {story.source}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
