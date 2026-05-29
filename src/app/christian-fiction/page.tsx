"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "classics" | "contemporary" | "poetry" | "theology";

const CLASSICS = [
  {
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    year: "1950–1956",
    color: PURPLE,
    genre: "Fantasy / Allegory",
    desc: "Seven novels set in Narnia — a world where Aslan the lion is an analog for Christ. Lewis insisted they were not allegory but 'supposal': what would Christ be like if he entered a world of talking animals? The Lion, the Witch and the Wardrobe centers on Aslan's death and resurrection on the Stone Table — a parallel to Calvary legible to children before they have the doctrinal vocabulary for it. 'The Last Battle' is one of the most moving depictions of the Second Coming and the new creation in fiction.",
    why_read: "Gives children (and adults) imaginative access to the gospel before they have intellectual access; Lewis believed that 'myth baptizes the imagination' — preparing the heart for truth",
    best_for: "Children 8+; adults who want to re-encounter the gospel through story; parents reading aloud",
    start_with: "The Lion, the Witch and the Wardrobe",
    themes: ["Atonement", "Resurrection", "New Creation", "Obedience and Faith", "Spiritual Deception"]
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: "1954–1955",
    color: GREEN,
    genre: "Epic Fantasy",
    desc: "Tolkien, a devout Catholic, called The Lord of the Rings 'a fundamentally religious and Catholic work.' He embedded Christian themes without allegory: the eucatastrophe (sudden turn from sorrow to joy — Tolkien's word for what happens at Easter), the Christological resonances of Gandalf's death and resurrection, the vocation of the humble (the Hobbits' carrying of the Ring), and the theology of power — that the Ring cannot be used for good because power corrupts. His mythology of Middle-earth is an act of sub-creation — a human participation in God's creativity.",
    why_read: "The deepest engagement of Christian imagination with the English literary tradition; teaches courage, friendship, vocation, and the limits of power through narrative rather than proposition",
    best_for: "Adults and older teens; those willing to commit to a long read; fantasy readers who want depth",
    start_with: "The Fellowship of the Ring (preceded by The Hobbit for introduction)",
    themes: ["Eucatastrophe", "Sub-creation", "Vocation of the Humble", "Limits of Power", "Friendship and Sacrifice"]
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    year: "1866",
    color: "#EF4444",
    genre: "Literary Fiction / Psychological",
    desc: "The story of Raskolnikov, a student who murders a pawnbroker to prove his theory that extraordinary men are above ordinary morality — and the devastating psychological and spiritual consequences. Dostoevsky was a Russian Orthodox Christian whose novels are theological arguments dressed as fiction. Crime and Punishment is ultimately about guilt, confession, and redemption — the prostitute Sonya, who reads Raskolnikov the story of Lazarus, becomes his road to salvation. The novel is the fullest literary exploration of what happens when a person believes they are God.",
    why_read: "Shows the internal devastation of sin more powerfully than any sermon; a profound case for why humanity cannot bear the weight of playing God",
    best_for: "Adults; readers willing to engage difficulty; those interested in Russian literature or the psychology of sin",
    start_with: "Begin here — it is more accessible than The Brothers Karamazov",
    themes: ["Sin and Guilt", "Confession and Redemption", "Hubris", "Grace through the Outcast"]
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    year: "1880",
    color: "#F59E0B",
    genre: "Literary Fiction / Philosophical",
    desc: "Dostoevsky's masterpiece — the story of three brothers and their father's murder, containing within it the most devastating atheist argument ever written (Ivan's 'Rebellion' and 'Grand Inquisitor' chapters) and the most convincing Christian response (the Elder Zosima). Pope John Paul II cited Zosima's 'love in action' as one of the most important spiritual teachings he had encountered. The novel ends with Alyosha speaking to children over a grave — a vision of resurrection and new creation.",
    why_read: "The greatest novel ever written — it contains the strongest case against Christianity and answers it with a life, not an argument; essential for serious Christians thinking about suffering and doubt",
    best_with: "Pevear/Volokhonsky translation (recommended by scholars); preceded by the chapter 'The Grand Inquisitor' read as a standalone essay",
    start_with: "Read Crime and Punishment first if you haven't; then commit to this",
    themes: ["Theodicy", "Doubt and Faith", "Love in Action", "Resurrection", "The Problem of Suffering"]
  },
  {
    title: "Silence",
    author: "Shusaku Endo",
    year: "1966",
    color: "#3B82F6",
    genre: "Historical Fiction",
    desc: "A Portuguese Jesuit missionary in seventeenth-century Japan — where Christianity has been outlawed and Christians are being tortured to death — wrestles with God's silence in the face of suffering. When faced with the choice between apostasy (stepping on an image of Christ) or watching believers die, he hears Christ speak from the image: 'Trample. It was to be trampled on by men that I was born into this world.' Martin Scorsese's 2016 film adaptation brought the novel to wider attention. One of the most theologically serious novels of the twentieth century.",
    why_read: "The most honest literary confrontation with theodicy — why does God seem silent when his people suffer? No easy answers, only faithful presence",
    best_for: "Adults; those struggling with unanswered prayer or the hiddenness of God; Christians in hostile environments",
    start_with: "This novel; Endo's 'Deep River' is also excellent",
    themes: ["Theodicy", "Apostasy", "The Silence of God", "Persecution", "The Cost of Faith"]
  },
  {
    title: "Pilgrim's Progress",
    author: "John Bunyan",
    year: "1678",
    color: "#10B981",
    genre: "Allegory",
    desc: "Written in Bedford Gaol where Bunyan was imprisoned for unlicensed preaching, Pilgrim's Progress is the most widely read Christian book after the Bible. Christian's journey from the City of Destruction to the Celestial City names every major obstacle to faith: the Slough of Despond, Vanity Fair, Doubting Castle, the Giant Despair, and the River of Death. For two centuries it was standard reading in every literate English-speaking household. C.H. Spurgeon read it over 100 times.",
    why_read: "Maps the Christian life in unforgettable images that stay with readers for decades; shows that the obstacles to faith are the same in every generation",
    best_for: "All ages — the narrative accessibility belies its theological depth",
    start_with: "The original Part 1; several excellent modern English adaptations exist for younger readers",
    themes: ["Spiritual Journey", "Perseverance", "Temptation", "Grace", "Heaven"]
  },
  {
    title: "Wise Blood",
    author: "Flannery O'Connor",
    year: "1952",
    color: "#EC4899",
    genre: "Southern Gothic / Literary Fiction",
    desc: "O'Connor, a devout Catholic writing for a secular audience she called 'hostile,' used grotesque characters and violent plots to show grace arriving uninvited. Hazel Motes founds the 'Church of Christ Without Christ' — a religion of pure negation — and the novel traces his violent conversion. O'Connor wrote: 'To the hard of hearing you shout, and for the almost blind you draw large and startling figures.' Her short stories (Collected Stories) are more accessible and include 'A Good Man is Hard to Find' — one of the most analyzed short stories in American literature.",
    why_read: "Shows that grace is strange, violent, and uninvited — not comfortable or sentimental; essential for Christians who want to engage secular culture through fiction",
    best_for: "Adults; literary readers; those interested in how Christianity can be present in realistic/difficult fiction",
    start_with: "The short story 'A Good Man is Hard to Find' before the novel",
    themes: ["Grace as Disruption", "Redemption", "Spiritual Blindness", "The South", "Death and Salvation"]
  },
  {
    title: "A Wrinkle in Time",
    author: "Madeleine L'Engle",
    year: "1962",
    color: "#6366F1",
    genre: "Science Fiction / Fantasy (YA)",
    desc: "Rejected by 26 publishers before winning the Newbery Medal, this novel follows Meg Murry through space and time to rescue her father from IT — a disembodied brain that enforces conformity. L'Engle embedded Christian themes: the Tesseract (the wrinkle in time) echoes John 1's concept of the Logos holding creation together; the battle against IT is a cosmic spiritual warfare; the weapon against darkness is love, not power. L'Engle was an Episcopalian who described the novel as her 'hymn of praise to God.'",
    why_read: "Introduces children to cosmic spiritual conflict, love as the ultimate power, and the dignity of individuality against conformity",
    best_for: "Children 9-14; adults with children; those who enjoyed Narnia and want a science fiction register",
    start_with: "The first book in the Time Quintet",
    themes: ["Love Over Power", "Cosmic Spiritual Conflict", "Individuality vs. Conformity", "Faith"]
  },
];

const CONTEMPORARY = [
  { title: "Gilead", author: "Marilynne Robinson", year: "2004", color: GREEN, genre: "Literary Fiction", desc: "A Pulitzer Prize-winning letter from dying Congregationalist minister John Ames to his young son — full of Calvinist theology, wonder at creation, and meditation on mortality, grace, and memory. The prose is among the most beautiful in contemporary American fiction. Followed by three companion novels: Home, Lila, and Jack. Tim Keller called Robinson one of the most important Christian voices in contemporary culture.", why: "Shows that faithful Christianity produces people of extraordinary depth and beauty; a model of what a life of prayer and thought looks like from the inside" },
  { title: "The Shack", author: "William Paul Young", year: "2007", color: PURPLE, desc: "A grieving father encounters the Trinity at the site of his daughter's murder. Sold 20 million copies, making it one of the most widely read Christian novels of the twenty-first century. Theologically controversial — critics (including Eugene Peterson, who initially endorsed it, and Wayne Grudem) have raised concerns about its depictions of the Trinity. Nevertheless, it addressed suffering and divine love in ways that reached millions of people beyond evangelical culture.", why: "A cultural touchpoint for conversations about suffering, theodicy, and the nature of God; read critically but widely", genre: "Inspirational Fiction" },
  { title: "The Sparrow", author: "Mary Doria Russell", year: "1996", color: "#EF4444", genre: "Science Fiction", desc: "Jesuit priests are the first to make contact with an alien civilization — and the mission ends in catastrophe. One priest survives, broken and accused of a crime. The novel is a profound meditation on theodicy, missionary zeal, and the nature of faith after disaster. Russell was a non-practicing Jew who said she became a Catholic by the end of writing the book. One of the most theologically serious science fiction novels ever written.", why: "A devastating and honest engagement with what happens when good people, doing what seems right, are destroyed — and how faith can survive it" },
  { title: "Till We Have Faces", author: "C.S. Lewis", year: "1956", color: "#3B82F6", genre: "Literary Fiction / Myth", desc: "Lewis's own favorite of his works — a retelling of the myth of Cupid and Psyche from the perspective of Psyche's jealous sister Orual. Lewis uses the Greek myth to explore unanswered prayer, the complaint against God, and the answer that can only come through self-knowledge. 'How can they meet us face to face till we have faces?' The novel is more subtle and complex than Narnia — written for adults ready to engage myth and philosophy.", why: "The most mature of Lewis's fiction; particularly powerful for those wrestling with unanswered prayer and the complaint against God" },
  { title: "Peace Like a River", author: "Leif Enger", year: "2001", color: "#F59E0B", genre: "Literary Fiction / Magical Realism", desc: "An eleven-year-old boy narrates his family's cross-country journey to find his fugitive brother — a journey marked by miracles that the narrator reports with the matter-of-fact tone of someone for whom the miraculous is simply part of reality. The father Jeremiah's faith, the Minnesota landscape, and Enger's prose style combine into one of the most beautifully written Christian novels of the twenty-first century.", why: "Shows that miraculous faith integrated into ordinary life is not naive but clear-eyed; accessible to readers who don't consider themselves religious" },
  { title: "Les Misérables", author: "Victor Hugo", year: "1862", color: "#10B981", genre: "Literary Fiction", desc: "Jean Valjean's transformation from convict to saint through one act of grace — Bishop Myriel giving him the silver candlesticks after Valjean stole them — is one of the great conversion narratives in literature. Hugo embedded a sustained theological argument: that law without grace destroys (Javert), and grace received and given transforms (Valjean). The 2012 musical adaptation has introduced millions to themes of redemption, justice, and love that are recognizably Christian.", why: "One of the most sustained literary arguments for the transforming power of grace over law; shows that conversion produces a life of generosity" },
];

const POETS = [
  { name: "Gerard Manley Hopkins", years: "1844–1889", color: PURPLE, tradition: "Catholic", desc: "Jesuit priest and the most technically innovative English poet of the nineteenth century — inventor of 'sprung rhythm' and 'inscape' (the distinctive inner nature of each created thing). Hopkins burned all his early poems when he became a Jesuit, then began writing again when his rector suggested it. His poems — 'God's Grandeur,' 'Pied Beauty,' 'The Windhover' — are acts of praise for particular created things. His 'Terrible Sonnets' (including 'I wake and feel the fell of dark, not day') are among the most honest poems about spiritual desolation ever written.", famous: "God's Grandeur; Pied Beauty; The Windhover; The Wreck of the Deutschland" },
  { name: "George Herbert", years: "1593–1633", color: GREEN, tradition: "Anglican", desc: "Country parson and metaphysical poet whose collection The Temple (published posthumously) is one of the most sustained acts of spiritual reflection in English poetry. Herbert's poems are conversations with God — ranging from praise to complaint to surrender. 'Love (III)' — in which the soul resists Love's (Christ's) invitation to dinner until gently compelled to sit — is one of the most perfect short poems in English. Simone Weil memorized it and said it transformed her.", famous: "Love (III); The Collar; Easter Wings; The Pulley" },
  { name: "John Donne", years: "1572–1631", color: "#3B82F6", tradition: "Anglican (Dean of St. Paul's)", desc: "Dean of St. Paul's Cathedral whose Holy Sonnets are among the most viscerally urgent poems of faith in English. 'Death, Be Not Proud' (Holy Sonnet X) dismantles death's power with logical precision. 'Batter my heart, three-person'd God' (Holy Sonnet XIV) is a prayer for violent conversion. Donne's devotional prose — Meditations (from which 'No man is an island' and 'Ask not for whom the bell tolls' come) — is equally powerful.", famous: "Holy Sonnet XIV; Death Be Not Proud; The Devotions Upon Emergent Occasions" },
  { name: "T.S. Eliot", years: "1888–1965", color: "#EF4444", tradition: "Anglican", desc: "The most important poet of the twentieth century became an Anglo-Catholic Christian in 1927 — a conversion that shocked the literary world. 'Ash Wednesday' (1930) is a meditation on repentance and surrender. 'Four Quartets' (1943) — widely considered his masterwork — is an extended meditation on time, eternity, redemption, and the Incarnation. 'The Journey of the Magi' retells the Wise Men's visit from the perspective of one of the Magi in old age, questioning what they saw and what it cost them.", famous: "Ash Wednesday; Four Quartets; The Journey of the Magi; Murder in the Cathedral" },
  { name: "Luci Shaw", years: "1928–present", color: "#F59E0B", tradition: "Evangelical / Anglican", desc: "One of the most beloved contemporary Christian poets, co-founder of Harold Shaw Publishers, and longtime poet-in-residence at Regent College, Vancouver. Shaw's poetry is known for its close observation of the natural world and its sacramental sensibility — seeing the spiritual in the particular. She has published over 35 collections.", famous: "Polishing the Petoskey Stone; The Green Earth; Harvesting Fog" },
  { name: "Malcolm Guite", years: "1957–present", color: "#10B981", tradition: "Anglican (priest)", desc: "Cambridge academic, rock musician, Anglican priest, and poet whose sonnets for the seasons of the church year have found an enormous audience online and in print. His books 'Sounding the Seasons' and 'The Singing Bowl' offer sonnets for every Sunday of the Christian year. His blog and YouTube channel have introduced thousands to the practice of reading theology through poetry.", famous: "Sounding the Seasons; Word in the Wilderness; The Singing Bowl" },
];

const THEOLOGY_DATA = [
  { point: "Story as the primary mode of human knowing", color: GREEN, content: "Aristotle noted that tragedy produces catharsis — the purging of emotion through vicarious experience. Fiction allows us to inhabit experiences we have not had, to practice responses we have not developed, and to feel the weight of choices we have not yet faced. This is not escapism; it is rehearsal. A person who has wept over Raskolnikov's self-destruction understands something about sin that no systematic theology conveys." },
  { point: "Tolkien's theology of sub-creation", color: PURPLE, content: "In his essay 'On Fairy-Stories' (1947), Tolkien argued that humans create stories because they are made in the image of the Creator. Fantasy in particular participates in what he called 'the real taste of subcreative art' — the experience of creating a world. This is not idolatry; it is worship. Making beautiful, true, and good stories is an act of reflecting God's nature as creator. Tolkien directly influenced Lewis's conversion through this argument." },
  { point: "Eucatastrophe — the gospel as the truest story", color: "#3B82F6", content: "Tolkien coined the term eucatastrophe for the sudden joyful turn at the end of fairy tales — the moment when all seems lost and then is saved. He argued that this narrative pattern exists because it participates in the shape of the one true story: the Resurrection. The joy that comes at eucatastrophe is a distant echo and premonition of the joy that will come at Christ's return. Every story with a eucatastrophe is, without necessarily knowing it, pointing toward Easter." },
  { point: "The danger of sentimental Christian fiction", color: "#EF4444", content: "Flannery O'Connor, whose Catholic fiction disturbed even Christian readers, wrote: 'The danger for the writer who is spared the risks of an open conflict with his environment is that he will unconsciously shape his work to what he supposes are the demands of a market whose needs he has reduced to the lowest common denominator of piety and sentiment.' Christian fiction that is merely inspirational — safe, comfortable, predictable, without genuine tension — fails both as fiction and as theology." },
  { point: "Reading non-Christian literature as a Christian", color: "#F59E0B", content: "C.S. Lewis argued in 'An Experiment in Criticism' that literature's value lies in its ability to give us access to lives we have not lived and perspectives we have not formed. Reading widely — including secular and non-Christian literature — is part of a Christian's calling to understand the world God loves. The question is not whether a book is Christian but whether it is true, good, and beautiful — and whether reading it forms us in wisdom or deforms us in vice." },
];

export default function ChristianFictionPage() {
  const [tab, setTab] = useState<Tab>("classics");
  const [selected, setSelected] = useState(CLASSICS[0].title);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const selClassic = CLASSICS.find(c => c.title === selected) || CLASSICS[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>📖</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Fiction & Literature</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: "0 auto" }}>
            From Dostoevsky to Marilynne Robinson — fiction and poetry that baptizes the imagination, explores grace and sin with honesty, and points toward the one true Story.
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["classics", "contemporary", "poetry", "theology"] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t === "classics" ? "Classic Novels" : t === "contemporary" ? "Contemporary Fiction" : t === "poetry" ? "Christian Poets" : "Theology of Story"}
            </button>
          ))}
        </div>

        {tab === "classics" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {CLASSICS.map((c) => (
                <div key={c.title} onClick={() => setSelected(c.title)}
                  style={{ background: CARD, border: `1px solid ${selected === c.title ? c.color + "60" : BORDER}`, borderRadius: 12, padding: 18, cursor: "pointer" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ color: c.color, fontWeight: 800, fontSize: 14 }}>{c.title}</div>
                      <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{c.author} · {c.year} · {c.genre}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ position: "sticky", top: 20, background: CARD, border: `1px solid ${selClassic.color}40`, borderRadius: 14, padding: 20 }}>
              <div style={{ color: selClassic.color, fontWeight: 900, fontSize: 16, marginBottom: 2 }}>{selClassic.title}</div>
              <div style={{ color: MUTED, fontSize: 11, marginBottom: 12 }}>{selClassic.author} · {selClassic.year}</div>
              <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.7, marginBottom: 14 }}>{selClassic.desc}</p>
              <div style={{ background: `${selClassic.color}10`, border: `1px solid ${selClassic.color}20`, borderRadius: 8, padding: "10px 12px", marginBottom: 10 }}>
                <div style={{ color: selClassic.color, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>WHY READ IT</div>
                <div style={{ color: TEXT, fontSize: 12, lineHeight: 1.6 }}>{selClassic.why_read}</div>
              </div>
              <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>START WITH</div>
              <div style={{ color: TEXT, fontSize: 12, marginBottom: 10 }}>{selClassic.start_with}</div>
              <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 6 }}>THEMES</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                {selClassic.themes.map((theme, i) => (
                  <span key={i} style={{ background: `${selClassic.color}15`, color: selClassic.color, padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700 }}>{theme}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "contemporary" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {CONTEMPORARY.map((c, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${c.color}25`, borderRadius: 12, padding: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div>
                    <div style={{ color: c.color, fontWeight: 900, fontSize: 16 }}>{c.title}</div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{c.author} · {c.year} · {c.genre}</div>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{c.desc}</p>
                <div style={{ background: `${c.color}08`, border: `1px solid ${c.color}15`, borderRadius: 8, padding: "8px 12px" }}>
                  <span style={{ color: c.color, fontWeight: 700, fontSize: 11 }}>Why read it: </span>
                  <span style={{ color: TEXT, fontSize: 13 }}>{c.why}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "poetry" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 14 }}>
            {POETS.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${p.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: p.color, fontWeight: 900, fontSize: 15, marginBottom: 2 }}>{p.name}</div>
                <div style={{ color: MUTED, fontSize: 11, marginBottom: 10 }}>{p.years} · {p.tradition}</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, marginBottom: 12 }}>{p.desc}</p>
                <div style={{ background: `${p.color}08`, border: `1px solid ${p.color}15`, borderRadius: 6, padding: "6px 10px" }}>
                  <div style={{ color: p.color, fontSize: 10, fontWeight: 800, marginBottom: 2 }}>FAMOUS WORKS</div>
                  <div style={{ color: TEXT, fontSize: 11 }}>{p.famous}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {THEOLOGY_DATA.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${expanded[t.point] ? t.color + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button onClick={() => setExpanded(e => ({ ...e, [t.point]: !e[t.point] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ color: t.color, fontWeight: 800, fontSize: 15 }}>{t.point}</div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{expanded[t.point] ? "−" : "+"}</span>
                </button>
                {expanded[t.point] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 0" }}>{t.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
