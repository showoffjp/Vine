"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const DOMAIN_FILTERS = ["All", "Abolition & Justice", "Science", "Politics & Law", "Education", "Arts & Literature", "Medicine & Charity"];

const FIGURES = [
  {
    name: "William Wilberforce",
    years: "1759–1833",
    domain: "Abolition & Justice",
    country: "United Kingdom",
    color: PURPLE,
    what_changed: "Abolished the British slave trade (1807) and slavery throughout the British Empire (1833)",
    story: "William Wilberforce was a young, gifted Member of Parliament who experienced an evangelical conversion in 1785. He nearly left politics for ordained ministry, but his friend John Newton (who wrote Amazing Grace and had himself been a slave trader) urged him to stay: 'God has raised you up for the good of the church and for the good of the nation.' Wilberforce spent the next 46 years of his life fighting for the abolition of the slave trade and slavery itself.",
    faith_connection: "Wilberforce's activism was explicitly theological — grounded in the conviction that all human beings bear the image of God and that slavery was therefore not merely inhumane but an offense against God. He and his friends (the Clapham Sect) combined political activism with prayer, Scripture, and community. He described himself as having two great objects: the abolition of the slave trade and the reformation of manners (moral culture).",
    legacy: "The Slavery Abolition Act passed on July 26, 1833 — three days before Wilberforce died. He received the news on his deathbed. The abolition of the British slave trade was the most significant human rights achievement of the 19th century and is almost entirely attributable to one man sustained by evangelical faith.",
    quote: "So enormous, so dreadful, so irremediable did the [slave] trade's wickedness appear that my own mind was completely made up for abolition.",
    read: "Amazing Grace by Eric Metaxas",
    initials: "WW",
  },
  {
    name: "Harriet Tubman",
    years: "1822–1913",
    domain: "Abolition & Justice",
    country: "United States",
    color: "#10B981",
    what_changed: "Led 70+ enslaved people to freedom via the Underground Railroad; served as Union spy and nurse",
    story: "Harriet Tubman escaped slavery in 1849 and made 13 missions back into slave territory to lead approximately 70 people to freedom via the Underground Railroad. During the Civil War, she served as a spy, nurse, and armed scout for the Union Army — leading the Combahee River Raid in 1863 that freed over 700 enslaved people. She was deeply religious, reporting divine visions and voices that guided her missions.",
    faith_connection: "Tubman attributed every successful escape and rescue to direct divine guidance. She reportedly said: 'I never ran my train off the track and I never lost a passenger.' She believed God spoke to her in specific directions during her missions. Her faith was not passive — it animated the most dangerous kind of active courage.",
    legacy: "Tubman became the most celebrated conductor of the Underground Railroad and a symbol of resistance against slavery. Her combination of practical courage and deep spirituality makes her one of the most important figures in American history. She will appear on the $20 bill.",
    quote: "I was the conductor of the Underground Railroad for eight years, and I can say what most conductors can't say — I never ran my train off the track and I never lost a passenger.",
    read: "Bound for the Promised Land by Kate Clifford Larson",
    initials: "HT",
  },
  {
    name: "Isaac Newton",
    years: "1643–1727",
    domain: "Science",
    country: "United Kingdom",
    color: "#F59E0B",
    what_changed: "Formulated laws of gravity and motion; invented calculus; advanced optics; transformed natural philosophy into modern physics",
    story: "Isaac Newton is widely considered the greatest scientist in human history. His Principia Mathematica (1687) and Opticks (1704) essentially created modern physics. He was a deeply religious man who spent more time on theology than on physics — he wrote approximately 1 million words on theology, including extensive biblical prophecy studies. He viewed his scientific work as 'thinking God's thoughts after him.'",
    faith_connection: "Newton believed the ordered, mathematically describable universe was evidence of God's rational mind. He wrote: 'This most beautiful system of the sun, planets, and comets could only proceed from the counsel and dominion of an intelligent and powerful Being.' He was unitarian in his Christology (a theological position not standard evangelicalism), but his theism was profound and his scientific work explicitly framed as natural theology.",
    legacy: "Newton's laws of motion and universal gravitation held for over 200 years until Einstein. Calculus (co-developed with Leibniz) is foundational to all of modern mathematics and engineering. Newton remains the clearest case for the claim that serious science and serious faith are not only compatible but historically intertwined.",
    quote: "The most beautiful system of the sun, planets, and comets could only proceed from the counsel and dominion of an intelligent and powerful Being.",
    read: "Newton and the Origin of Civilization by Jed Buchwald",
    initials: "IN",
  },
  {
    name: "Gregor Mendel",
    years: "1822–1884",
    domain: "Science",
    country: "Czech Republic (then Austria)",
    color: "#3B82F6",
    what_changed: "Founded the science of genetics through his pea plant experiments",
    story: "Gregor Mendel was an Augustinian monk who conducted meticulous experiments with pea plants in the monastery garden, discovering the laws of genetic inheritance that now bear his name. His work, published in 1866, was largely ignored until 1900 when it was rediscovered and recognized as foundational to biology.",
    faith_connection: "Mendel conducted his genetics research as a monk, within the monastery, with the support of his religious superiors. His work was not separated from his faith but grew within the context of it. He was ordained a priest and eventually became abbot of his monastery. There is no evidence of any tension between his scientific work and his Catholic faith.",
    legacy: "Mendel's laws of segregation and independent assortment are foundational to genetics, evolution, and modern medicine. The discovery of DNA's structure and function in the 20th century confirmed and extended Mendel's insights. He is often cited as evidence that clerical and scientific vocations can coexist.",
    quote: "My scientific studies have afforded me great gratification; and I am convinced that it will not be long before the whole world acknowledges the results of my work.",
    read: "The Monk in the Garden by Robin Marantz Henig",
    initials: "GM",
  },
  {
    name: "Abraham Lincoln",
    years: "1809–1865",
    domain: "Politics & Law",
    country: "United States",
    color: PURPLE,
    what_changed: "Preserved the Union; issued the Emancipation Proclamation; shepherded the 13th Amendment abolishing slavery",
    story: "Abraham Lincoln's religious beliefs are complex and debated. He was not a conventional evangelical, but his Second Inaugural Address is one of the most theologically sophisticated public documents ever produced by an American president. He explicitly attributed the Civil War to divine judgment on American slavery and called for 'malice toward none, with charity for all.' His providential theology shaped his entire presidency.",
    faith_connection: "Lincoln increasingly framed the Civil War in theological terms — particularly as God's judgment on the nation for the sin of slavery. His Second Inaugural (1865): 'If God wills that it continue until all the wealth piled by the bondsman's two hundred and fifty years of unrequited toil shall be sunk, and until every drop of blood drawn with the lash shall be paid by another drawn with the sword, as was said three thousand years ago, so still it must be said — the judgments of the Lord are true and righteous altogether.'",
    legacy: "Lincoln is the only American president whose Second Inaugural Address reads as a theological document. His providential interpretation of American history — that God was judging the nation for slavery — placed the Civil War in a framework of divine justice. His legacy is permanently linked to the abolition of American slavery.",
    quote: "Both read the same Bible and pray to the same God, and each invokes His aid against the other... The Almighty has His own purposes.",
    read: "Lincoln's Melancholy by Joshua Wolf Shenk; Lincoln by David Herbert Donald",
    initials: "AL",
  },
  {
    name: "Dorothy Day",
    years: "1897–1980",
    domain: "Abolition & Justice",
    country: "United States",
    color: "#EC4899",
    what_changed: "Founded the Catholic Worker Movement; championed the poor, immigrants, and pacifism through a life of radical voluntary poverty",
    story: "Dorothy Day was a radical journalist and activist who converted to Catholicism in 1927. She co-founded the Catholic Worker with Peter Maurin in 1933, establishing Houses of Hospitality across America to serve the poor and homeless. She lived in voluntary poverty throughout her life, sharing everything with the poor she served. She was arrested multiple times for anti-war civil disobedience.",
    faith_connection: "Day's entire life was a sustained embodiment of the Sermon on the Mount. The Catholic Worker's commitment to 'the works of mercy' (feeding the hungry, clothing the naked, welcoming the stranger) was explicitly grounded in Matthew 25: 'When you did it to one of the least of these brothers and sisters of mine, you were doing it to me.' She saw Christ in the face of every person who came through the door.",
    legacy: "The Catholic Worker movement now has over 200 communities worldwide. Day is considered a serious candidate for Catholic sainthood. Pope Francis cited her as an example of American religious heroism in his 2015 address to Congress. She is one of the clearest examples in American history of what radical Christian social action looks like.",
    quote: "The greatest challenge of the day is: how to bring about a revolution of the heart, a revolution which has to start with each one of us.",
    read: "The Long Loneliness by Dorothy Day",
    initials: "DD",
  },
  {
    name: "George Washington Carver",
    years: "1864–1943",
    domain: "Science",
    country: "United States",
    color: "#F59E0B",
    what_changed: "Developed hundreds of products from peanuts and sweet potatoes; transformed Southern agriculture; pioneered sustainable farming",
    story: "Born into slavery, George Washington Carver became one of the most distinguished American scientists of the early 20th century. His work at Tuskegee Institute developing hundreds of products from peanuts and sweet potatoes helped transform Southern agriculture, which had been devastated by boll weevil infestations and soil depletion from cotton monoculture. He was deeply and explicitly Christian throughout his life.",
    faith_connection: "Carver began every morning with prayer and Bible reading. He described his scientific work as talking with God through nature. He wrote that he would go into his laboratory and say to the Creator: 'Why did you make the peanut? With such knowledge as I had of chemistry and physics, I talked to the peanut.' He consistently attributed his discoveries to divine guidance and insisted that God had given him his gifts for the service of others.",
    legacy: "Carver's work helped free Southern farmers from dependence on cotton and poverty. His synthesis of deep faith and serious science, combined with extraordinary personal generosity (he gave away most of his income and patents), makes him one of the most remarkable figures in American history.",
    quote: "When I touch that flower, I am not merely touching a flower... I am touching Infinity. It is only through the Divine that I can reach this Infinite... I search for these secrets in prayer.",
    read: "George Washington Carver: An American Biography by Rackham Holt",
    initials: "GWC",
  },
  {
    name: "C.S. Lewis",
    years: "1898–1963",
    domain: "Arts & Literature",
    country: "United Kingdom",
    color: GREEN,
    what_changed: "Made Christianity intellectually and imaginatively credible to a post-Christian generation; the Narnia Chronicles shaped the imagination of millions of children",
    story: "C.S. Lewis was an Oxford literary scholar who converted from atheism to Christianity in 1931. He became the most popular Christian apologist and literary figure of the 20th century. His wartime BBC radio addresses (later published as Mere Christianity) reached millions. The Chronicles of Narnia have sold over 100 million copies. His influence on the imaginative life of Western Christianity is incalculable.",
    faith_connection: "Lewis's Christianity was hard-won — through intellectual struggle, the influence of his friend J.R.R. Tolkien, and the slow recognition that his desire for 'Joy' pointed beyond naturalism to something transcendent. His apologetics integrated logic and imagination in a way that made Christianity accessible to modern secular minds. He wrote: 'I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.'",
    legacy: "Lewis's books have never gone out of print. More people have come to faith through Mere Christianity and The Problem of Pain than through any other 20th-century lay theological works. The Narnia Chronicles shaped the religious imagination of entire generations. He is arguably the most influential Christian writer of the 20th century.",
    quote: "I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.",
    read: "Surprised by Joy (autobiography); Mere Christianity",
    initials: "CSL",
  },
];

export default function ChristiansWhoChangedHistoryPage() {
  const [domain, setDomain] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = FIGURES.filter(f => domain === "All" || f.domain === domain);
  const figure = FIGURES.find(f => f.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⚡</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christians Who Changed History</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The men and women whose Christian faith drove them to transform science, end slavery, serve the poor, and reshape culture. Faith that doesn't change things isn't the biblical kind.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 24, display: "flex", gap: 12, alignItems: "flex-start" }}>
          <span style={{ fontSize: 24, flexShrink: 0 }}>📣</span>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
            Christianity is sometimes accused of being irrelevant or harmful to human progress. This list is the counter-evidence: abolition of slavery, the founding of modern science, universal education, the hospital system, care for the poor — these are not incidental to Christianity but expressions of it.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {DOMAIN_FILTERS.map(d => (
            <button key={d} onClick={() => setDomain(d)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${domain === d ? GREEN : BORDER}`, background: domain === d ? `${GREEN}15` : "transparent", color: domain === d ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {d}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: figure ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((f, i) => (
              <button key={i} onClick={() => setSelected(selected === f.name ? null : f.name)}
                style={{ background: selected === f.name ? `${f.color}12` : CARD, border: `1px solid ${selected === f.name ? f.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${f.color}20`, border: `1px solid ${f.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: f.color, fontWeight: 900, fontSize: 10, flexShrink: 0 }}>
                    {f.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{f.name}</span>
                      <span style={{ background: `${f.color}15`, color: f.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{f.domain}</span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{f.years} · {f.country}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {figure && (
            <div style={{ background: CARD, border: `1px solid ${figure.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: `${figure.color}20`, border: `1px solid ${figure.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: figure.color, fontWeight: 900, fontSize: 11, flexShrink: 0 }}>
                  {figure.initials}
                </div>
                <div>
                  <h2 style={{ color: figure.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{figure.name}</h2>
                  <div style={{ color: MUTED, fontSize: 12 }}>{figure.years} · {figure.country}</div>
                </div>
              </div>

              <div style={{ background: `${figure.color}08`, border: `1px solid ${figure.color}15`, borderRadius: 8, padding: 10, marginBottom: 12 }}>
                <div style={{ color: figure.color, fontWeight: 700, fontSize: 10, marginBottom: 3 }}>WHAT CHANGED</div>
                <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{figure.what_changed}</p>
              </div>

              <div style={{ marginBottom: 12 }}>
                <div style={{ color: figure.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>THE STORY</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{figure.story}</p>
              </div>

              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>FAITH CONNECTION</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{figure.faith_connection}</p>
              </div>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>LEGACY</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{figure.legacy}</p>
              </div>

              <div style={{ background: `${figure.color}08`, border: `1px solid ${figure.color}20`, borderRadius: 8, padding: 10, marginBottom: 10 }}>
                <div style={{ color: figure.color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>QUOTE</div>
                <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", margin: 0, lineHeight: 1.6 }}>"{figure.quote}"</p>
              </div>

              <div style={{ color: MUTED, fontSize: 12 }}>
                📚 <span style={{ fontWeight: 600 }}>Read more:</span> {figure.read}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
