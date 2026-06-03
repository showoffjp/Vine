"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "masterworks" | "architecture" | "contemporary" | "videos";

const THEOLOGY = [
  { title: "All beauty points to God — the Transcendentals", color: GREEN, content: "Medieval Christian theology identified three transcendental properties of being: Truth, Goodness, and Beauty — each of which is a name of God. Jonathan Edwards wrote that 'the beauty of the world is a communication of God's beauty.' Augustine's Confessions opens with the agonized recognition: 'our heart is restless until it repose in Thee' — that beauty disordered him before it was rightly ordered toward God. Great Christian art does not depict religious content; it participates in divine beauty." },
  { title: "The Incarnation makes material art theologically necessary", color: PURPLE, content: "The great iconoclasm controversies of the eighth century were resolved at the Second Council of Nicaea (787) with a decisive argument: if God became flesh in Jesus Christ, then the material world can bear divine meaning. John of Damascus argued that icons do not depict the divine nature (which is invisible) but the human nature of Christ (which is visible). The Incarnation is the theological license for all Christian visual art — matter matters because God took on matter." },
  { title: "Art as doxology — making for the glory of God", color: "#3B82F6", content: "Bach signed his compositions 'S.D.G.' — Soli Deo Gloria (To God alone the glory). This was not mere convention; it was a theological statement about the purpose of artistic creation. Makoto Fujimura, one of the most articulate contemporary Christian artists, writes that 'art is not a tool for evangelism but a form of generosity — creating beauty into the world because God is beautiful.' Christian art-making is not Christian because it depicts Christian subjects; it is Christian when it is made by Christians unto God." },
  { title: "The image of God — humans as makers", color: "#EF4444", content: "The Hebrew word tselem (image) in Genesis 1:26 was primarily used of royal statues placed in territories to represent the king's presence and authority. Humans as image-bearers are God's representative makers in creation. J.R.R. Tolkien called human creativity 'sub-creation' — we create because we were made by the Creator. Dorothy Sayers's 'The Mind of the Maker' argues that the Trinity itself — Father as Idea, Son as Expression, Spirit as Power — is mirrored in all creative acts." },
  { title: "The problem of kitsch — sentimentality as spiritual danger", color: "#F59E0B", content: "Makoto Fujimura, Francis Schaeffer, and Dorothy Sayers all identified a distinctive danger in Christian art: sentimentality — the preference for safe, comfortable, predictable beauty over the genuine article. A painting of Jesus with soft light and friendly eyes that evokes sentiment without encounter is kitsch. True art disturbs before it comforts; it tells the truth before it soothes. The Psalms of lament, Job's suffering, Revelation's terrifying imagery — all resist easy aesthetics. The cross is not pretty." },
  { title: "Integration — all of life as art", color: "#10B981", content: "Francis Schaeffer at L'Abri argued that Christianity must have answers in every domain — including aesthetics. His 'Art and the Bible' (1973) challenged evangelicals to engage art seriously: to support Christian artists, to understand art history through Christian eyes, and to reject the sacred-secular split that relegates art to mere entertainment. A Christian view of culture takes art seriously because culture is the medium through which humanity expresses its ultimate commitments." },
];

const MASTERWORKS = [
  {
    title: "The Creation of Adam",
    artist: "Michelangelo Buonarroti",
    year: "1512",
    location: "Sistine Chapel, Vatican City",
    color: PURPLE,
    medium: "Fresco",
    desc: "The central panel of the Sistine Chapel ceiling — perhaps the most recognized image in Western art. What is theologically precise: Adam is already alive (his eyes are open) but his arm is limp, not yet reaching toward God. God reaches with full extension; Adam with half. The image captures the dependency of creation — life is not self-generated but received from the Creator's initiative. Michelangelo also painted God surrounded by figures in a shape that anatomist Frank Meshberger identified in 1990 as the human brain — possibly suggesting that God gives Adam the gift of the intellect.",
    why_important: "Defines Renaissance Christian humanism — the dignity of the body as created by God; shows the Incarnation doctrine in visual form decades before Vatican II theology articulated it",
    where: "Sistine Chapel, Vatican Museums; high-resolution online at the Vatican Museum website"
  },
  {
    title: "The Last Supper",
    artist: "Leonardo da Vinci",
    year: "1495–1498",
    location: "Santa Maria delle Grazie, Milan, Italy",
    color: GREEN,
    medium: "Tempera and oil on gesso, pitch and mastic",
    desc: "Painted on the refectory wall of a Dominican convent — a place where monks ate their own last supper. Leonardo captures the moment after Christ says 'One of you will betray me' — each of the twelve apostles reacts differently. The groupings of three (twelve apostles in four groups of three) mirror Trinitarian theology. Judas clutches a bag (the thirty pieces of silver) and is in shadow while reaching for the bread simultaneously with Christ — the betrayal of the Eucharist as its act is instituted.",
    why_important: "The most studied painting in history; established the compositional conventions for Last Supper depictions ever since; theologically integrates the Eucharist with the betrayal — the body given is the body betrayed",
    where: "Reservations required months in advance; high-resolution study at the Royal Academy's online archives"
  },
  {
    title: "The Isenheim Altarpiece",
    artist: "Matthias Grünewald",
    year: "1512–1516",
    location: "Unterlinden Museum, Colmar, Alsace, France",
    color: "#EF4444",
    medium: "Oil on limewood panels",
    desc: "Created for the chapel of a hospital that treated patients with Saint Anthony's Fire (ergotism) — a fungal disease causing gangrenous rotting of the extremities. The crucifixion panel shows Christ's body covered in sores, his skin greenish with decomposition, his fingers curled in agony. It is the most agonizing depiction of the crucifixion in Western art — and it was made for people who were dying in physical agony. Suffering patients were meant to see Christ sharing their suffering. The Resurrection panel on the opposite side shows Christ blazing with glory — death destroyed.",
    why_important: "Theology of the cross in visual form before Luther articulated it in writing; Barth's 'Church Dogmatics' was written in front of a reproduction; defines the German Reformation aesthetic",
    where: "Unterlinden Museum, Colmar; multiple full-resolution images at Wikipedia and art history databases"
  },
  {
    title: "Rembrandt's Return of the Prodigal Son",
    artist: "Rembrandt van Rijn",
    year: "c. 1668",
    location: "Hermitage Museum, St. Petersburg, Russia",
    color: "#F59E0B",
    medium: "Oil on canvas",
    desc: "Painted near the end of Rembrandt's life, after personal bankruptcy, the death of his wife and son, and a lifetime of documented failure and grace. The father's hands — one masculine, one feminine — are distinctly different, suggesting both fatherly and motherly qualities of divine love. The son's head is shaved (slave's mark), his clothes are rags, one shoe is off. The light in the painting comes from the embrace itself, not from an external source. Henri Nouwen lived with this painting for months and wrote 'The Return of the Prodigal Son' — one of the most beloved Christian books of the twentieth century.",
    why_important: "Defines the theology of divine compassion in paint; shows that a broken artist in his final years can make his greatest work; inspired one of the most important books on spiritual identity of the 20th century",
    where: "Hermitage Museum, St. Petersburg; Henri Nouwen's book available at Henri Nouwen Society (henrinouwen.org)"
  },
  {
    title: "The Arnolfini Portrait",
    artist: "Jan van Eyck",
    year: "1434",
    location: "National Gallery, London",
    color: "#3B82F6",
    medium: "Oil on oak panel",
    desc: "One of the first oil paintings in Western art and a masterclass in Christian symbolism embedded in everyday life. The single candle burning in the chandelier in broad daylight represents the omnipresence of God or the wedding candle of covenant. The dog represents fidelity. The shoes removed echo Exodus 3 — holy ground. The convex mirror on the back wall reflects the entire room and two witnesses. The inscription 'Jan van Eyck was here' above the mirror transforms the painter into a legal witness to a covenant. Every element in this domestic scene carries theological meaning.",
    why_important: "Demonstrates the Reformation principle (before the Reformation) that the domestic and ordinary is saturated with divine significance — sacred and secular are unified",
    where: "National Gallery, London (national-gallery.org.uk); high-resolution image available online"
  },
  {
    title: "The Baptism of Christ",
    artist: "Piero della Francesca",
    year: "c. 1450",
    location: "National Gallery, London",
    color: "#10B981",
    medium: "Egg tempera on poplar",
    desc: "The clearest painted theology of the Trinity: the dove descends from above in a direct vertical line through Christ's head into the water below. The bowl of water in John's hands reflects the dove and sky. Three angels at left hold hands — a visual representation of perichoresis (the mutual indwelling of the Trinity). The Umbrian landscape behind is unmistakably Italian — the Incarnation has come into real geography, real time, real water. The formal geometry of the composition (Christ is centered and forms the vertical axis of an underlying equilateral triangle) is theological architecture.",
    why_important: "One of the clearest Trinitarian statements in Western painting; shows how formal composition can carry theological meaning independent of iconographic content",
    where: "National Gallery, London; scholarly commentary at the National Gallery's online collection"
  },
  {
    title: "The Conversion of Saint Paul",
    artist: "Caravaggio",
    year: "1601",
    location: "Santa Maria del Popolo, Rome",
    color: "#EC4899",
    medium: "Oil on cypress panel",
    desc: "Caravaggio painted two versions of this scene; the second — in Santa Maria del Popolo — is among the most revolutionary paintings in Western art. Saul lies on the ground, thrown from his horse, arms outstretched in an almost Crucifixion posture. The horse occupies most of the painting. There are no angels, no light from heaven in the traditional sense — only a single powerful light source (Caravaggio's signature chiaroscuro) hitting Paul's upturned face and body. The horse groom is more concerned with the horse than with the prostrate man. The conversion is intimate, physical, and unremarkable to everyone except the man it happens to.",
    why_important: "Caravaggio's use of real models (working-class people, not idealized types) revolutionized religious painting; captures that conversion is internal and personally overwhelming even when externally invisible",
    where: "Santa Maria del Popolo, Rome — still in its original chapel setting; art.com and museum databases for study images"
  },
  {
    title: "The Peaceable Kingdom",
    artist: "Edward Hicks",
    year: "Multiple versions 1820–1849",
    location: "Various US museums",
    color: "#6366F1",
    medium: "Oil on canvas",
    desc: "Quaker minister Edward Hicks painted over sixty versions of this scene — Isaiah 11's vision of the lion lying down with the lamb in the background of William Penn's treaty with the Lenape people. As a Quaker, Hicks was deeply ambivalent about painting (his tradition rejected visual art as potential idolatry) yet could not stop making these images. The tension within the artist mirrors the tension in the image — peace is promised but not yet arrived. The paintings grew more anguished as Hicks aged and saw the American republic fail to live up to its peaceable ideals.",
    why_important: "One of the few distinctly American contributions to Christian iconography; shows an artist in theological conflict with his own art; prophetic vision of eschatological peace as political critique",
    where: "National Gallery of Art, Washington DC; Brooklyn Museum; Philadelphia Museum of Art; Abby Aldrich Rockefeller Folk Art Museum"
  },
];

const ARCHITECTURE = [
  { name: "Chartres Cathedral", location: "Chartres, France", built: "1194–1220", style: "Gothic", color: PURPLE, desc: "The high-water mark of Gothic architecture — the style whose entire purpose was to flood a building with light, replacing the thick Romanesque walls with stained glass. The three Rose windows filter colored light into the nave across the day. The labyrinth on the floor was walked as a substitute pilgrimage. Every sculpture, every window tells a scene from Scripture or tradition. Gothic architecture is a theological argument: matter can be filled with spirit; the material world can be transparent to the divine." },
  { name: "Hagia Sophia", location: "Istanbul, Turkey", built: "532–537 AD", style: "Byzantine", color: GREEN, desc: "Built by Emperor Justinian in six years — a feat so improbable he reportedly said 'Solomon, I have surpassed thee.' The dome appears to float above the nave on a ring of light from forty windows, creating the Byzantine theological effect: the earthly liturgy mirrors the heavenly one; the church building is an icon of the cosmos ordered under God. Procopius wrote that the dome seemed 'suspended from heaven by a golden chain.' Now a mosque; still one of the most significant buildings in human history." },
  { name: "St. Peter's Basilica", location: "Vatican City, Rome", built: "1506–1626", style: "Renaissance / Baroque", color: "#3B82F6", desc: "The largest church building in the world by interior volume. Bramante, Michelangelo, Carlo Maderno, and Bernini all contributed to its design over 120 years. Michelangelo designed the dome at age 71 and died before its completion. Bernini's colonnade embraces pilgrims arriving in the piazza — the outstretched arms of the Church. The Pietà (Michelangelo, 1499) inside the basilica is one of the most technically perfect sculptures ever made. The building is simultaneously an architectural and political statement: the Church is the center of civilization." },
  { name: "The Sainte-Chapelle", location: "Paris, France", built: "1242–1248", style: "Rayonnant Gothic", color: "#EF4444", desc: "Built by Louis IX to house the Crown of Thorns, Sainte-Chapelle is nearly all glass — the walls have been almost entirely replaced by 1,113 stained glass panels depicting 1,113 scenes from the Old and New Testaments. Standing inside on a sunny day is the closest most Western people will ever come to the experience Byzantine theology describes: being inside a building of light, surrounded by Scripture made visible, with no clear boundary between material and spiritual reality." },
  { name: "Westminster Abbey", location: "London, United Kingdom", built: "960 AD (current structure 1245+)", style: "Gothic", color: "#F59E0B", desc: "The burial place of English monarchs, poets, scientists, and statesmen — Charles Dickens, Isaac Newton, Geoffrey Chaucer, Stephen Hawking — alongside kings and queens since William the Conqueror. It is simultaneously a functioning Anglican church (eight services per week) and the most visited historic site in England. The Coronation Chair, used for every English coronation since 1308, sits in the chapel. The building represents the English conviction that faith, culture, and political life are inseparable." },
  { name: "The Thorncrown Chapel", location: "Eureka Springs, Arkansas", built: "1980", style: "Contemporary / Organic", color: "#10B981", desc: "Arkansas architect E. Fay Jones designed this tiny chapel in the Ozark woods — 48 feet high, built entirely from 2x4 and 2x6 lumber because no large equipment could reach the site. The 425 windows create a structure that is more light than material, allowing the surrounding forest to become the sanctuary. In 2000, the American Institute of Architects named it the best American building of the twentieth century. Jones was a student of Frank Lloyd Wright, and Thorncrown shows what organic architecture looks like when it serves worship." },
];

const CONTEMPORARY = [
  { name: "Makoto Fujimura", medium: "Nihonga painting", url: "makotofujimura.com", desc: "One of the most important living Christian artists and the most articulate theologian of Christian art-making. Fujimura works in the ancient Japanese Nihonga technique (mineral pigments on gold-leafed paper) producing abstract paintings of extraordinary beauty. His essay collections 'Refractions,' 'Culture Care,' and 'Art and Faith' are essential reading for anyone thinking about Christianity and culture. He illustrated the 400th anniversary edition of the King James Bible (2011) and co-founded the International Arts Movement.", color: GREEN },
  { name: "He Qi", medium: "Folk art-style painting", url: "heqiarts.com", desc: "Chinese Christian artist who blends Chinese folk art tradition with Christian iconography — producing images of the Nativity, the Crucifixion, and the Resurrection in vivid color and distinctly non-Western forms. His work demonstrates what it looks like when the gospel truly becomes culturally embedded rather than culturally imposed. Free prints available for non-commercial use at his website.", color: PURPLE },
  { name: "Sandra Bowden", medium: "Printmaking", url: "sandrabowden.com", desc: "Former president of Christians in the Visual Arts (CIVA) and one of the leading Christian printmakers in America. Bowden's work in intaglio, collagraph, and mixed media engages Scripture and Jewish visual tradition in ways that are formally sophisticated and spiritually serious. Her collection of Jewish paper cuts and objects informs work that bridges Christian and Jewish visual heritage.", color: "#3B82F6" },
  { name: "Christians in the Visual Arts (CIVA)", medium: "Organization", url: "civa.org", desc: "The primary professional organization for Christian visual artists — exhibitions, publications, artist residencies, and the biennial conference. CIVA's publications include a serious peer-reviewed journal on Christianity and the arts. If you are a Christian artist or want to support the field, this is the first place to engage.", color: "#EF4444" },
  { name: "Image Journal", medium: "Literary/Arts Journal", url: "imagejournal.org", desc: "The leading journal at the intersection of faith and the arts — publishing fiction, poetry, visual art, and criticism since 1989. The annual Image Award for Bearing Witness is the most significant recognition in Christian literary arts. Their online archive includes decades of essays on theology and aesthetics by the most serious voices in the field.", color: "#F59E0B" },
  { name: "International Arts Movement", medium: "Organization", url: "internationalarts.org", desc: "Founded by Makoto Fujimura in 1992 to nurture artists and inspire the broader culture with beautiful and illuminating art. Annual Encounter Conference brings together artists, theologians, and cultural leaders. One of the few organizations thinking seriously about Christianity's role in cultural formation rather than mere cultural critique.", color: "#10B981" },
];

export default function ChristianArtGuidePage() {
  const [tab, setTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState(MASTERWORKS[0].title);
  const sel = MASTERWORKS.find(w => w.title === selected) || MASTERWORKS[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>🎨</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Art & Architecture</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: "0 auto" }}>
            Two thousand years of beauty made in response to the Incarnation — a theological guide to the greatest masterworks, sacred architecture, and living artists in the Christian tradition.
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["theology", "masterworks", "architecture", "contemporary", "videos"] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", textTransform: "capitalize" }}>
              {t === "theology" ? "Theology of Art" : t === "masterworks" ? "Masterworks" : t === "architecture" ? "Sacred Spaces" : t === "contemporary" ? "Contemporary Artists" : "🎬 Videos"}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {THEOLOGY.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${expanded[p.title] ? p.color + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button onClick={() => setExpanded(e => ({ ...e, [p.title]: !e[p.title] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ color: p.color, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{expanded[p.title] ? "−" : "+"}</span>
                </button>
                {expanded[p.title] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 0" }}>{p.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "masterworks" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {MASTERWORKS.map((w) => (
                <div key={w.title} onClick={() => setSelected(w.title)}
                  style={{ background: CARD, border: `1px solid ${selected === w.title ? w.color + "60" : BORDER}`, borderRadius: 12, padding: 18, cursor: "pointer" }}>
                  <div style={{ color: w.color, fontWeight: 800, fontSize: 14 }}>{w.title}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{w.artist} · {w.year} · {w.medium}</div>
                </div>
              ))}
            </div>
            <div style={{ position: "sticky", top: 20, background: CARD, border: `1px solid ${sel.color}40`, borderRadius: 14, padding: 20 }}>
              <div style={{ color: sel.color, fontWeight: 900, fontSize: 15, marginBottom: 2 }}>{sel.title}</div>
              <div style={{ color: MUTED, fontSize: 11, marginBottom: 12 }}>{sel.artist} · {sel.year} · {sel.location}</div>
              <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.7, marginBottom: 12 }}>{sel.desc}</p>
              <div style={{ background: `${sel.color}10`, border: `1px solid ${sel.color}20`, borderRadius: 8, padding: "10px 12px", marginBottom: 10 }}>
                <div style={{ color: sel.color, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>WHY IT MATTERS</div>
                <div style={{ color: TEXT, fontSize: 12, lineHeight: 1.6 }}>{sel.why_important}</div>
              </div>
              <div style={{ color: MUTED, fontSize: 11 }}>{sel.where}</div>
            </div>
          </div>
        )}

        {tab === "architecture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {ARCHITECTURE.map((a, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${a.color}25`, borderRadius: 12, padding: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div>
                    <div style={{ color: a.color, fontWeight: 900, fontSize: 16, marginBottom: 3 }}>{a.name}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{a.location} · {a.built} · {a.style}</div>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "contemporary" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 14 }}>
            {CONTEMPORARY.map((c, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${c.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: c.color, fontWeight: 900, fontSize: 15, marginBottom: 2 }}>{c.name}</div>
                <div style={{ color: MUTED, fontSize: 11, marginBottom: 10 }}>{c.medium} · {c.url}</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "lHdViyfMzNo", title: "Makoto Fujimura: Art and Faith", channel: "No Small Endeavor", description: "Renowned Christian artist Makoto Fujimura discusses the theology of art-making, the Incarnation's implications for material creativity, and what it means to make beauty in a broken world." },
                  { videoId: "heYEh7DwueE", title: "Is God in Charge of Art?", channel: "Francis Schaeffer", description: "Francis Schaeffer challenges evangelicals to take art seriously — arguing that Christians relegated art to the fringe of life and why that must change." },
                  { videoId: "rMm6NA1v4V8", title: "Art and the Bible: Francis Schaeffer Updated", channel: "L'Abri / Schaeffer Study", description: "An exploration of Schaeffer's landmark work 'Art and the Bible' and why his framework for Christian engagement with art remains vital today." },
                  { videoId: "WoAE15gtEzg", title: "C.S. Lewis and J.R.R. Tolkien on the Power of Fiction", channel: "Tim Keller", description: "Keller discusses how Lewis and Tolkien understood fiction and imagination as theological categories — sub-creation as participation in the Creator's work." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
