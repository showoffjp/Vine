"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#C9A227";

type Tab = "overview" | "theology" | "tradition" | "saints" | "dialogue" | "videos";

export default function CatholicFaithPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_catholic-faith_tab", "overview");

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "overview", label: "Overview", icon: "✝️" },
    { id: "theology", label: "Theology", icon: "📖" },
    { id: "tradition", label: "Tradition", icon: "🏛️" },
    { id: "saints", label: "Saints", icon: "⭐" },
    { id: "dialogue", label: "Ecumenism", icon: "🤝" },
    { id: "videos", label: "Videos", icon: "🎬" },
  ];

  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh", fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 60px" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", padding: "56px 0 40px" }}>
          <div style={{ display: "inline-block", background: `${GOLD}18`, border: `1px solid ${GOLD}40`, borderRadius: 8, padding: "6px 16px", fontSize: 12, color: GOLD, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            THE CATHOLIC FAITH
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(36px, 6vw, 60px)", fontWeight: 800, marginBottom: 16, lineHeight: 1.1 }}>
            One, Holy, Catholic,<br />and Apostolic Church
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 680, margin: "0 auto", lineHeight: 1.8 }}>
            With 1.3 billion baptized members, the Catholic Church is the largest Christian body in the world —
            tracing its origin to the apostles, bearing the fullness of the sacraments, and holding together
            2,000 years of theology, art, mysticism, and martyrdom.
          </p>
          <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {["1.3 Billion Members", "2,000 Years of History", "7 Sacraments", "266 Popes", "10,000+ Saints"].map(tag => (
              <span key={tag} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "5px 14px", fontSize: 12, color: MUTED }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, background: CARD, borderRadius: 12, padding: 6, marginBottom: 28, overflowX: "auto" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                flex: 1, minWidth: 90, padding: "10px 14px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 700, transition: "all 0.2s",
                background: tab === t.id ? GOLD : "transparent",
                color: tab === t.id ? "#07070F" : MUTED,
                whiteSpace: "nowrap",
              }}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, marginBottom: 28 }}>
              {[
                {
                  title: "The Petrine Foundation",
                  desc: "Catholics hold that Jesus founded the Church on Peter ('You are Peter, and on this rock I will build my Church' — Matt 16:18). The Pope, as successor to Peter and Bishop of Rome, holds universal jurisdiction and the charism of infallibility when speaking ex cathedra on faith and morals.",
                  icon: "⛪",
                },
                {
                  title: "The Fullness of the Faith",
                  desc: "Catholic theology holds that the Church possesses the fullness of the means of salvation: all seven sacraments, apostolic succession, the Magisterium, Sacred Scripture, and Sacred Tradition — all working together as one unified system of grace.",
                  icon: "✨",
                },
                {
                  title: "The Communion of Saints",
                  desc: "The Church is not just the living — it extends to the souls in purgatory and the saints in heaven. Catholics pray with the saints (not to them as gods), asking for their intercession as one asks any fellow Christian to pray. Mary holds the highest place as Theotokos — God-bearer.",
                  icon: "🌟",
                },
                {
                  title: "Scripture & Tradition",
                  desc: "Unlike sola scriptura traditions, the Catholic Church holds that Divine Revelation comes through both Sacred Scripture and Sacred Tradition, interpreted authentically by the Magisterium (teaching authority) — the three-legged stool that guards the deposit of faith.",
                  icon: "📜",
                },
              ].map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  <div style={{ fontSize: 36, marginBottom: 12 }}>{item.icon}</div>
                  <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 17, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Key Stats */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 20 }}>The Catholic Church at a Glance</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 16 }}>
                {[
                  { stat: "1.3B", label: "Baptized Catholics", sub: "~17% of world population" },
                  { stat: "266", label: "Popes", sub: "from Peter to Francis" },
                  { stat: "7", label: "Sacraments", sub: "Baptism through Last Rites" },
                  { stat: "2,000+", label: "Years of history", sub: "Pentecost AD 33" },
                  { stat: "23", label: "Rites / Traditions", sub: "Latin, Byzantine, Maronite…" },
                  { stat: "10,000+", label: "Canonized Saints", sub: "Witnesses of faith" },
                ].map(item => (
                  <div key={item.stat} style={{ textAlign: "center", background: BG, borderRadius: 10, padding: "16px 12px" }}>
                    <div style={{ color: GOLD, fontWeight: 900, fontSize: 28, lineHeight: 1 }}>{item.stat}</div>
                    <div style={{ color: TEXT, fontSize: 13, fontWeight: 700, margin: "6px 0 4px" }}>{item.label}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Creeds */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>The Nicene Creed</h2>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>Professed at every Sunday Mass worldwide — the universal statement of Christian faith:</p>
              <div style={{ background: BG, borderRadius: 10, padding: "20px 24px", borderLeft: `4px solid ${GOLD}` }}>
                <p style={{ color: TEXT, fontSize: 15, fontFamily: "var(--font-cormorant, Georgia, serif)", lineHeight: 2, fontStyle: "italic" }}>
                  &ldquo;I believe in one God, the Father almighty, maker of heaven and earth, of all things visible and invisible. I believe in one Lord Jesus Christ, the Only Begotten Son of God, born of the Father before all ages. God from God, Light from Light, true God from true God, begotten, not made, consubstantial with the Father; through him all things were made... I believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son, who with the Father and the Son is adored and glorified, who has spoken through the prophets. I believe in one, holy, catholic and apostolic Church. I confess one Baptism for the forgiveness of sins and I look forward to the resurrection of the dead and the life of the world to come. Amen.&rdquo;
                </p>
              </div>
            </div>
          </div>
        )}

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Distinctive Catholic Doctrines</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 8 }}>Understanding what makes Catholic theology unique within Christian thought.</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                {
                  title: "The Real Presence (Transubstantiation)",
                  scripture: "John 6:51-58 · 1 Cor 11:27-29",
                  desc: "Catholic theology holds that at the words of consecration in the Mass, the bread and wine are substantially transformed into the Body, Blood, Soul, and Divinity of Jesus Christ — while the appearance (accidents) of bread and wine remain. This is not symbolic. Jesus is truly, really, and substantially present. The doctrine of transubstantiation, defined at the Fourth Lateran Council (1215) and reaffirmed at Trent, is the center of Catholic worship.",
                  icon: "🍞",
                },
                {
                  title: "Papal Infallibility",
                  scripture: "Matt 16:18-19 · Luke 22:32 · John 21:15-17",
                  desc: "Defined at Vatican I (1870), the Pope speaks infallibly only when defining a doctrine of faith or morals, ex cathedra (from the chair), intending to bind the whole Church. This has been invoked only twice: the Immaculate Conception (1854) and the Assumption of Mary (1950). It does not mean the Pope is personally sinless or always right.",
                  icon: "👑",
                },
                {
                  title: "Purgatory",
                  scripture: "1 Cor 3:15 · 2 Macc 12:46 · Matt 12:32",
                  desc: "The Catholic Church teaches that those who die in God's grace but are imperfectly purified undergo purification after death before entering heaven. Purgatory is not a second chance — it is for those already saved. The faithful pray for souls in purgatory, offer Masses, and indulgences can be applied to shorten their purification.",
                  icon: "🔥",
                },
                {
                  title: "Marian Dogmas",
                  scripture: "Luke 1:28-42 · Gen 3:15 · Rev 12:1",
                  desc: "The Church holds four Marian dogmas: (1) Theotokos — Mary is God-bearer (Council of Ephesus, 431); (2) Perpetual Virginity — Mary remained a virgin before, during, and after Christ's birth; (3) Immaculate Conception — Mary was preserved from original sin from the moment of conception; (4) Assumption — Mary was taken body and soul into heavenly glory. Catholics honor but do not worship Mary.",
                  icon: "🌹",
                },
                {
                  title: "The Seven Sacraments",
                  scripture: "John 3:5 · Matt 26:26-28 · John 20:23 · James 5:14",
                  desc: "Catholic theology holds that there are exactly seven sacraments instituted by Christ, each conferring real grace: Baptism (regeneration), Confirmation (strengthening), Eucharist (sustaining), Penance/Reconciliation (forgiveness), Anointing of the Sick (healing), Holy Orders (ordination), and Matrimony (covenant marriage). These are not mere symbols — they effect what they signify.",
                  icon: "✝️",
                },
                {
                  title: "Natural Law & Moral Theology",
                  scripture: "Rom 2:14-15 · Rom 1:26-27 · Catechism §1954",
                  desc: "Catholic moral theology is grounded in natural law — the rational creature's participation in God's eternal law, accessible to all through reason alone. This is why the Church's positions on life, marriage, and human dignity appeal to philosophy and biology, not just revelation. Thomas Aquinas synthesized Aristotelian ethics with Christian theology in the Summa Theologiae.",
                  icon: "⚖️",
                },
              ].map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 32 }}>{item.icon}</span>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, marginBottom: 6 }}>{item.title}</h3>
                      <div style={{ color: PURPLE, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>{item.scripture}</div>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TRADITION */}
        {tab === "tradition" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Sacred Tradition & Liturgy</h2>
              <p style={{ color: MUTED, fontSize: 14 }}>The living transmission of faith through worship, prayer, and practice across 2,000 years.</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                {
                  title: "The Holy Mass",
                  desc: "The Mass is the source and summit of Christian life (Lumen Gentium §11). It has two parts: the Liturgy of the Word (Scripture readings, homily) and the Liturgy of the Eucharist (consecration, communion). The Mass re-presents (makes present again) the one sacrifice of Calvary. It is not a re-sacrifice — one sacrifice, made present across time and space.",
                  elements: ["Entrance Rite", "Gloria", "Liturgy of the Word", "Homily", "Creed", "Liturgy of the Eucharist", "Consecration", "Communion", "Dismissal"],
                  icon: "🕯️",
                },
                {
                  title: "The Rosary",
                  desc: "A meditative prayer cycle dating to the 12th–13th centuries, traditionally associated with St. Dominic. The Rosary meditates on 20 Mysteries (Joyful, Luminous, Sorrowful, Glorious) from the life of Christ through Mary's perspective. Each decade consists of one Our Father, ten Hail Marys, and one Glory Be. Pope John Paul II called it his favorite prayer.",
                  elements: ["Joyful Mysteries (Mon/Sat)", "Luminous Mysteries (Thu)", "Sorrowful Mysteries (Tue/Fri)", "Glorious Mysteries (Wed/Sun)"],
                  icon: "📿",
                },
                {
                  title: "The Liturgical Year",
                  desc: "The Church's calendar is a participation in the life of Christ, not just a commemoration. It moves through: Advent (preparation), Christmas (Incarnation), Ordinary Time, Lent (penance/purification), Holy Week (Passion), Easter Triduum (death/resurrection), Easter Season (50 days), and Pentecost. Every Sunday is a little Easter.",
                  elements: ["Advent", "Christmas", "Epiphany", "Ordinary Time", "Ash Wednesday", "Lent", "Holy Week", "Triduum", "Easter", "Pentecost"],
                  icon: "📅",
                },
                {
                  title: "Sacred Art & Architecture",
                  desc: "Catholic churches are intentional theological statements in stone and glass. The altar faces east (ad orientem), toward the rising sun as a symbol of Christ's resurrection. Stained glass catechizes the illiterate. Icons and statues surround the faithful with the cloud of witnesses. The crucifix (not empty cross) emphasizes the reality of Christ's sacrifice.",
                  elements: ["Stained glass", "Crucifix", "Stations of the Cross", "Baptismal font", "Confessional", "Sanctuary lamp", "Tabernacle"],
                  icon: "🏛️",
                },
                {
                  title: "The Divine Office (Liturgy of the Hours)",
                  desc: "Seven times a day I praise you (Psalm 119:164). The Church prays the Psalms and canticles at fixed hours throughout the day: Lauds (dawn), Prime, Terce, Sext, None, Vespers (evening), Compline (night). Monasteries maintain this rhythm. Lay Catholics are encouraged to pray at least Morning and Evening Prayer.",
                  elements: ["Office of Readings (Matins)", "Morning Prayer (Lauds)", "Daytime Prayer", "Evening Prayer (Vespers)", "Night Prayer (Compline)"],
                  icon: "⏰",
                },
              ].map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 32 }}>{item.icon}</span>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, marginBottom: 10 }}>{item.title}</h3>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>{item.desc}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {item.elements.map(el => (
                          <span key={el} style={{ padding: "3px 10px", background: `${GOLD}12`, border: `1px solid ${GOLD}30`, borderRadius: 14, fontSize: 11, color: GOLD }}>{el}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SAINTS */}
        {tab === "saints" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>The Great Cloud of Witnesses</h2>
              <p style={{ color: MUTED, fontSize: 14 }}>Saints are not worshipped — they are honored as models of faith and asked to pray for us, as we ask any Christian brother or sister to intercede.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, marginBottom: 28 }}>
              {[
                { name: "Augustine of Hippo", years: "354–430", role: "Bishop & Doctor of the Church", desc: "The greatest theologian of the Western Church. Former pagan and Manichee who found Christ through his mother Monica's prayers. His Confessions and City of God shaped all of Western theology.", key: "Grace, Original Sin, Trinity" },
                { name: "Thomas Aquinas", years: "1225–1274", role: "Doctor Angelicus", desc: "The Dumb Ox whose Summa Theologiae synthesized Aristotelian philosophy and Christian theology. His Five Ways for God's existence and natural law theory remain foundational.", key: "Reason & Faith, Natural Law" },
                { name: "Teresa of Ávila", years: "1515–1582", role: "Doctor of the Church", desc: "Spanish mystic and reformer of the Carmelite order. Her Interior Castle maps the soul's journey to union with God through seven dwelling places of prayer.", key: "Mystical theology, Prayer" },
                { name: "Francis of Assisi", years: "1181–1226", role: "Founder, Franciscans", desc: "The Poor Man of Assisi who embraced radical poverty, preached to birds and wolves, received the stigmata, and rebuilt the Church from the ground up. Patron of ecology.", key: "Poverty, Creation, Mission" },
                { name: "John Henry Newman", years: "1801–1890", role: "Cardinal, Doctor of the Church", desc: "Oxford Anglican who converted to Catholicism in 1845 after exhaustive study of the early Church fathers. His Grammar of Assent and Development of Doctrine are masterworks.", key: "Development of doctrine, Conscience" },
                { name: "Thérèse of Lisieux", years: "1873–1897", role: "Doctor of the Church", desc: "The Little Flower who died at 24 but taught the 'little way' — holiness through small acts done with great love. Named co-patron of missions despite never leaving France.", key: "Little Way, Spiritual Childhood" },
                { name: "John Paul II", years: "1920–2005", role: "Pope & Saint", desc: "The Great. Philosopher-pope who helped bring down Communism, developed Theology of the Body, proclaimed 482 saints — more than any pope in history, and united the Church globally.", key: "Human dignity, TOB, Evangelization" },
                { name: "Mother Teresa", years: "1910–1997", role: "Foundress, Missionaries of Charity", desc: "Albanian nun who served the dying poor in Calcutta's streets for 50 years. Canonized 2016. Her private letters revealed a decades-long 'dark night of the soul' — making her witness more powerful.", key: "Poverty, Service, Hidden suffering" },
              ].map(saint => (
                <div key={saint.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                  <div style={{ color: GOLD, fontWeight: 800, fontSize: 17, marginBottom: 4 }}>{saint.name}</div>
                  <div style={{ color: PURPLE, fontSize: 12, fontWeight: 700, marginBottom: 2 }}>{saint.years}</div>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 12, fontStyle: "italic" }}>{saint.role}</div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>{saint.desc}</p>
                  <div style={{ padding: "6px 12px", background: `${GOLD}12`, border: `1px solid ${GOLD}30`, borderRadius: 8, fontSize: 11, color: GOLD }}>
                    Key: {saint.key}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ECUMENISM */}
        {tab === "dialogue" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Ecumenical Dialogue</h2>
              <p style={{ color: MUTED, fontSize: 14 }}>Vatican II opened a new era of Catholic engagement with other Christian traditions. The Catholic Church is committed to the visible unity of the Church, while maintaining the fullness of doctrine.</p>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, fontSize: 18, marginBottom: 20 }}>Catholic vs. Protestant — Key Differences</h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                  <thead>
                    <tr>
                      <th style={{ padding: "12px 16px", textAlign: "left", background: `${GOLD}15`, color: GOLD, borderBottom: `1px solid ${BORDER}` }}>Topic</th>
                      <th style={{ padding: "12px 16px", textAlign: "left", background: `${GOLD}15`, color: GOLD, borderBottom: `1px solid ${BORDER}` }}>Catholic</th>
                      <th style={{ padding: "12px 16px", textAlign: "left", background: `${PURPLE}15`, color: "#A78BFA", borderBottom: `1px solid ${BORDER}` }}>Protestant</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { topic: "Authority", catholic: "Scripture + Tradition + Magisterium", protestant: "Scripture alone (Sola Scriptura)" },
                      { topic: "Justification", catholic: "Faith + cooperation with grace; infused righteousness", protestant: "Faith alone (Sola Fide); imputed righteousness" },
                      { topic: "Eucharist", catholic: "Real Presence (Transubstantiation)", protestant: "Symbolic (most) or Consubstantiation (Lutheran)" },
                      { topic: "Mary", catholic: "Theotokos, Immaculate Conception, Assumed into Heaven", protestant: "Honored as model believer; no special dogmas" },
                      { topic: "Purgatory", catholic: "Purification after death for the saved", protestant: "Rejected — heaven or hell at death" },
                      { topic: "Saints", catholic: "Intercessors; canonized; venerated", protestant: "All believers are saints; no canonization" },
                      { topic: "Pope", catholic: "Vicar of Christ; universal jurisdiction; infallible ex cathedra", protestant: "Rejected — no Petrine primacy" },
                      { topic: "Sacraments", catholic: "Seven, efficacious signs of grace", protestant: "Two (Baptism + Lord's Supper) or none (Quakers)" },
                      { topic: "Canon", catholic: "73 books (includes Deuterocanon)", protestant: "66 books (excludes Deuterocanon)" },
                    ].map((row, i) => (
                      <tr key={row.topic} style={{ background: i % 2 === 0 ? "transparent" : `${BORDER}30` }}>
                        <td style={{ padding: "12px 16px", color: TEXT, fontWeight: 700, borderBottom: `1px solid ${BORDER}` }}>{row.topic}</td>
                        <td style={{ padding: "12px 16px", color: MUTED, borderBottom: `1px solid ${BORDER}` }}>{row.catholic}</td>
                        <td style={{ padding: "12px 16px", color: MUTED, borderBottom: `1px solid ${BORDER}` }}>{row.protestant}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Common ground */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: 18, marginBottom: 16 }}>What All Christians Share</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
                {[
                  "The Triune God",
                  "The Deity of Christ",
                  "The Virgin Birth",
                  "Christ's Physical Resurrection",
                  "Salvation through Christ alone",
                  "The Nicene Creed",
                  "The Apostles' Creed",
                  "Scripture as God's Word",
                  "Baptism",
                  "The Lord's Prayer",
                  "The Great Commission",
                  "The Second Coming",
                ].map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", background: `${GREEN}08`, border: `1px solid ${GREEN}25`, borderRadius: 8 }}>
                    <span style={{ color: GREEN, fontWeight: 800 }}>✓</span>
                    <span style={{ color: TEXT, fontSize: 13, fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Homilies, lectures, and Catholic teachings from bishops, theologians, and apologists.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "HV3M0SQEZFE", title: "Why Be Catholic? — Bishop Robert Barron", channel: "Word on Fire", description: "Bishop Barron makes the compelling intellectual and spiritual case for Catholicism — beautiful, true, and good." },
                  { videoId: "jNpJDFd0-sw", title: "The Real Presence of Christ in the Eucharist", channel: "Bishop Barron", description: "A profound explanation of the Catholic doctrine of transubstantiation and why Christ meant what He said in John 6." },
                  { videoId: "O7b2F6e6_EU", title: "Proof of Heaven: The Catholic Near-Death Experience", channel: "Catholic Answers", description: "Fr. Spitzer on consciousness, quantum physics, and the evidence for God's existence from modern science." },
                  { videoId: "1M0PFbDSy0s", title: "The Truth About Purgatory", channel: "Catholic Answers Live", description: "Jimmy Akin answers the most common Protestant objections to the doctrine of purgatory from Scripture and history." },
                  { videoId: "v8IfZjN4kTU", title: "Mary: Do Catholics Worship Her?", channel: "Word on Fire", description: "Bishop Barron explains the distinction between latria (worship, for God alone) and dulia/hyperdulia (veneration, for saints and Mary)." },
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
                      <p style={{ color: GOLD, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
