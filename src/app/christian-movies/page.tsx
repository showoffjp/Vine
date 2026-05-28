"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const GENRES = ["All", "Biblical Epic", "True Story", "Drama", "Documentary", "Family"];

const MOVIES = [
  {
    title: "The Passion of the Christ",
    director: "Mel Gibson",
    year: 2004,
    genre: "Biblical Epic",
    color: "#EF4444",
    rating: "R",
    theme: "The Crucifixion",
    description: "Mel Gibson's unflinching depiction of the final 12 hours of Jesus's life, based primarily on the Gospel accounts and the Stations of the Cross. Shot entirely in Aramaic and Latin, it is the highest-grossing subtitled film of all time and one of the highest-grossing independent films. The brutality of the crucifixion sequences was intentional — Gibson wanted viewers to grasp what the atonement actually cost. Controversial on its release, it nonetheless brought millions into church and catalyzed significant conversations about the theology of atonement.",
    why: "Theologically serious. Watch the Aramaic version with subtitles for full impact. Warning: extremely graphic violence.",
    streaming: "Available on Amazon Prime, Apple TV, YouTube",
    initials: "POC",
  },
  {
    title: "A Hidden Life",
    director: "Terrence Malick",
    year: 2019,
    genre: "True Story",
    color: GREEN,
    rating: "PG-13",
    theme: "Conscience / Martyrdom",
    description: "The true story of Franz Jägerstätter, an Austrian farmer and Catholic conscientious objector who refused to swear loyalty to Hitler and was executed in 1943. His wife Fani and their children are left behind in their village while he is imprisoned. Malick's characteristic style — wide skies, whispered prayers, natural light — creates a meditation on what it costs to follow conscience when the cost is everything. One of the most theologically profound films made in the 21st century. Jägerstätter was beatified by Pope Benedict XVI in 2007.",
    why: "The greatest film about conscience, faith, and martyrdom made in recent decades. Demands patience but rewards it.",
    streaming: "Available on Amazon Prime, Apple TV",
    initials: "AHL",
  },
  {
    title: "Silence",
    director: "Martin Scorsese",
    year: 2016,
    genre: "True Story",
    color: PURPLE,
    rating: "R",
    theme: "Persecution / Doubt / Apostasy",
    description: "Based on Shusaku Endo's 1966 novel, Silence follows two Portuguese Jesuit priests who travel to 17th-century Japan to find their mentor and support the underground Christian community. When they are captured by authorities who demand they apostatize — literally step on an icon of Christ — the film descends into an agonizing meditation on suffering, silence, and what faithfulness demands. Scorsese called it his life's project. It raises the hardest questions about suffering without offering easy answers.",
    why: "The most theologically serious American film of the 2010s. Not for easy faith — but for honest, tested faith.",
    streaming: "Available on Netflix, Amazon Prime",
    initials: "SIL",
  },
  {
    title: "Chariots of Fire",
    director: "Hugh Hudson",
    year: 1981,
    genre: "True Story",
    color: "#F59E0B",
    rating: "PG",
    theme: "Calling / Conviction / Sport",
    description: "The true story of Eric Liddell, Scottish Olympic runner and Christian missionary, and Harold Abrahams, a Jewish runner competing in the 1924 Paris Olympics. Liddell refuses to run his best event (100m) because the heats fall on a Sunday — and his conviction is non-negotiable. He switches to the 400m and wins. The film is a portrait of principled integrity in an age of pragmatism. Eric Liddell later served as a missionary in China, where he died in a Japanese internment camp in 1945. Won the Academy Award for Best Picture.",
    why: "Timeless portrait of conscience and Christian conviction. Liddell's 'God made me fast' speech remains one of cinema's best.",
    streaming: "Available on Amazon Prime, Criterion Channel",
    initials: "COF",
  },
  {
    title: "End of the Spear",
    director: "Jim Hanon",
    year: 2005,
    genre: "True Story",
    color: "#3B82F6",
    theme: "Missions / Forgiveness",
    rating: "PG-13",
    description: "Based on the true story of five American missionaries — Jim Elliot, Pete Fleming, Ed McCully, Nate Saint, and Roger Youderian — who were killed by the Waodani tribe in Ecuador in 1956. The film focuses on the aftermath: the decision of the missionaries' wives and children to return to the tribe, the eventual conversion of the very men who killed their husbands and fathers, and the extraordinary transformation of a violently vengeful culture through the gospel. Based on Steve Saint's memoir.",
    why: "One of the most powerful true stories in missions history. The forgiveness shown by these families is almost incomprehensible.",
    streaming: "Available on Amazon Prime, Tubi",
    initials: "EOS",
  },
  {
    title: "Amazing Grace",
    director: "Michael Apted",
    year: 2006,
    genre: "True Story",
    color: "#EC4899",
    theme: "Justice / Abolition / Calling",
    rating: "PG",
    description: "The story of William Wilberforce and his 20-year campaign to abolish the British slave trade, culminating in the Slave Trade Act of 1807. The film shows the cost of moral conviction — Wilberforce's health, relationships, and reputation were sacrificed for the cause. His partnership with John Newton (the slave-trader-turned-pastor who wrote Amazing Grace) is depicted as foundational to his sustaining faith. An essential film for anyone thinking about the relationship between Christian faith and social justice.",
    why: "Required viewing for any Christian thinking about the relationship between faith and justice activism.",
    streaming: "Available on Amazon Prime, Apple TV",
    initials: "AMG",
  },
  {
    title: "Hacksaw Ridge",
    director: "Mel Gibson",
    year: 2016,
    genre: "True Story",
    color: "#10B981",
    theme: "Conscience / Service / Courage",
    rating: "R",
    description: "The true story of Desmond Doss, a Seventh-day Adventist who served as a combat medic in World War II without carrying a weapon — citing the commandment 'Thou shalt not kill.' He was mocked, harassed, and court-martialed for his refusal. At the Battle of Okinawa, he single-handedly saved 75 wounded soldiers while the battle raged around him, repeatedly praying 'Lord, let me save one more.' He became the first conscientious objector to receive the Congressional Medal of Honor. Won two Academy Awards.",
    why: "Extraordinary portrait of Seventh-day Adventist conviction. The second half is one of the most intense combat sequences in cinema.",
    streaming: "Available on Amazon Prime, Netflix",
    initials: "HSR",
  },
  {
    title: "The Bible Project",
    director: "Tim Mackie & Jon Collins",
    year: "2014-present",
    genre: "Documentary",
    color: "#A855F7",
    theme: "Scripture / Biblical Theology",
    rating: "All Ages",
    description: "Though technically a YouTube series rather than a film, the Bible Project's animated overviews of every book of the Bible and major biblical themes (shalom, covenant, image of God, son of God, etc.) are the most effective biblical education resources produced in the digital era. Each video is 5-8 minutes, uses compelling animation, and reflects solid evangelical scholarship. Over 50 million subscribers. The feature-length exploration of the book of Job is particularly outstanding.",
    why: "The most accessible, visually engaging, theologically serious biblical education resource available for free.",
    streaming: "Free on YouTube: youtube.com/@TheBibleProject",
    initials: "TBP",
  },
  {
    title: "I Can Only Imagine",
    director: "Andrew & Jon Erwin",
    year: 2018,
    genre: "True Story",
    color: "#00D4AA",
    theme: "Redemption / Family / Music",
    rating: "PG",
    description: "The true story behind the most-played contemporary Christian song in radio history — I Can Only Imagine by MercyMe's Bart Millard. The film depicts Millard's abusive childhood and the extraordinary transformation of his violent father through a genuine conversion experience. The scene of his father's transformation — and Millard's corresponding release from bitterness — is one of the most moving depictions of adult conversion in recent Christian film. The film became the highest-grossing Christian film on its release weekend.",
    why: "Honest about abuse and genuine about redemption. The father's conversion story is unusually authentic for the genre.",
    streaming: "Available on Netflix, Amazon Prime",
    initials: "ICI",
  },
  {
    title: "Luther",
    director: "Eric Till",
    year: 2003,
    genre: "Drama",
    color: "#F59E0B",
    theme: "Reformation / Scripture / Conviction",
    rating: "PG-13",
    description: "A dramatization of Martin Luther's life from his entry into the Augustinian monastery through his posting of the 95 Theses, his trial at the Diet of Worms, and the translation of the New Testament into German. Joseph Fiennes portrays Luther with unusual psychological depth — including his spiritual anguish, his bouts of depression, and his certainty at key moments. 'Here I stand, I can do no other' is rendered here as a moment of terrified conviction rather than triumphalism. An accessible introduction to the Reformation's most dramatic story.",
    why: "Best feature-length film on the Reformation. Captures both Luther's genius and his demons.",
    streaming: "Available on Amazon Prime, Tubi",
    initials: "LUT",
  },
  {
    title: "Courageous",
    director: "Alex Kendrick",
    year: 2011,
    genre: "Drama",
    color: "#3B82F6",
    theme: "Fatherhood / Integrity",
    rating: "PG-13",
    description: "A Kendrick Brothers film (produced by Sherwood Baptist Church in Albany, Georgia) about four law enforcement officers who, after a tragic accident, commit to being intentional, covenant-keeping fathers. Lower production values than Hollywood films but enormous resonance with evangelical audiences — because it takes fatherhood, masculinity, and covenant seriously as theological categories rather than social conventions. Grossed over $34 million. Part of the Kendrick Brothers series (Fireproof, War Room, Overcomer).",
    why: "The best evangelical family drama of the 2010s. Imperfect production but genuine heart.",
    streaming: "Available on Amazon Prime, Apple TV",
    initials: "CRG",
  },
  {
    title: "Risen",
    director: "Kevin Reynolds",
    year: 2016,
    genre: "Biblical Epic",
    color: "#EF4444",
    theme: "Resurrection / Evidence / Encounter",
    rating: "PG-13",
    description: "A fictional Roman tribune (Clavius) is tasked by Pilate to investigate the disappearance of Jesus's body and prevent political unrest. His investigation — interrogating witnesses, visiting the empty tomb, hunting for the disciples — leads him to an encounter with the risen Christ that transforms him. The film works as both apologetics (addressing the historical arguments for the resurrection) and encounter narrative (what would a genuine first-person encounter with the risen Jesus be like?). Joseph Fiennes stars.",
    why: "Unusually thoughtful for the genre. Addresses the historical evidence for the resurrection through narrative rather than lecture.",
    streaming: "Available on Amazon Prime, Apple TV",
    initials: "RSN",
  },
];

export default function ChristianMoviesPage() {
  const [genre, setGenre] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = MOVIES.filter(m => genre === "All" || m.genre === genre);
  const movie = MOVIES.find(m => m.title === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎬</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Essential Christian Films</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            Movies that take faith seriously — from Mel Gibson's Passion to Terrence Malick's hidden martyrdom, from Eric Liddell's Olympic conviction to Desmond Doss's battlefield witness.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {GENRES.map(g => (
            <button key={g} onClick={() => setGenre(g)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${genre === g ? GREEN : BORDER}`, background: genre === g ? `${GREEN}15` : "transparent", color: genre === g ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {g}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: movie ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((m, i) => (
              <button key={i} onClick={() => setSelected(selected === m.title ? null : m.title)}
                style={{ background: selected === m.title ? `${m.color}12` : CARD, border: `1px solid ${selected === m.title ? m.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${m.color}20`, border: `1px solid ${m.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: m.color, fontWeight: 900, fontSize: 10, flexShrink: 0 }}>
                    {m.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{m.title}</span>
                      <span style={{ background: `${m.color}15`, color: m.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{m.genre}</span>
                      <span style={{ background: `${BORDER}`, color: MUTED, padding: "1px 6px", borderRadius: 6, fontSize: 10 }}>{m.rating}</span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{m.director} · {m.year}</div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 11, flexShrink: 0 }}>{m.theme}</span>
                </div>
              </button>
            ))}
          </div>

          {movie && (
            <div style={{ background: CARD, border: `1px solid ${movie.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: `${movie.color}20`, border: `1px solid ${movie.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: movie.color, fontWeight: 900, fontSize: 12, flexShrink: 0 }}>
                  {movie.initials}
                </div>
                <div>
                  <h2 style={{ color: movie.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{movie.title}</h2>
                  <div style={{ color: MUTED, fontSize: 12 }}>{movie.director} · {movie.year} · Rated {movie.rating}</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                <span style={{ background: `${movie.color}12`, color: movie.color, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{movie.genre}</span>
                <span style={{ background: `${PURPLE}12`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{movie.theme}</span>
              </div>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{movie.description}</p>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12, marginBottom: 14 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHY WATCH</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{movie.why}</p>
              </div>

              <div style={{ background: "#3B82F608", border: "1px solid #3B82F615", borderRadius: 8, padding: 10 }}>
                <div style={{ color: "#3B82F6", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHERE TO STREAM</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{movie.streaming}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
