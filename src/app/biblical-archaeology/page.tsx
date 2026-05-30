"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const ERA_FILTERS = ["All", "Patriarchal Era", "Exodus & Conquest", "Kingdom Period", "Exile & Return", "New Testament Era"];

const DISCOVERIES = [
  {
    title: "Dead Sea Scrolls",
    year_discovered: "1947",
    era: "Exile & Return",
    color: GREEN,
    location: "Qumran Caves, West Bank",
    biblical_connection: "Entire Old Testament (except Esther); Isaiah 53 in full",
    current_location: "Israel Museum, Jerusalem — Shrine of the Book",
    description: "Discovered by a Bedouin shepherd boy who threw a stone into a cave and heard pottery break. The 972 manuscripts found between 1947 and 1956 in the caves near Qumran include the oldest known copies of nearly every Old Testament book, predating the previously oldest manuscripts by 1,000 years. The Great Isaiah Scroll (1QIsa-a), written around 125 BC, is virtually identical to the Masoretic text used in modern Bibles.",
    significance: "Silences the argument that the Old Testament was corrupted during transmission. The Isaiah scroll written before Christ matches our modern text almost perfectly — including Isaiah 53, the Suffering Servant passage, which prophecies the crucifixion in stunning detail.",
    learn_more: "dss.collections.imj.org.il — Israel Museum digital archive; also The Dead Sea Scrolls Bible (Abegg, Flint, Ulrich)",
    initials: "DSS",
  },
  {
    title: "Tel Dan Inscription",
    year_discovered: "1993",
    era: "Kingdom Period",
    color: "#3B82F6",
    location: "Tel Dan, Northern Israel",
    biblical_connection: "2 Samuel 7; 1 Kings 12; confirms the historical David",
    current_location: "Israel Museum, Jerusalem",
    description: "A basalt stele fragment discovered at Tel Dan in northern Israel, dating to the 9th century BC. It contains the phrase BYTDWD — widely translated as House of David — making it the first extrabiblical reference to King David ever found. The inscription was made by an Aramean king (likely Hazael of Damascus) boasting of his military victories, including over the king of the House of David.",
    significance: "Until 1993, critical scholars argued David was a mythical figure invented by later Jewish writers. The Tel Dan inscription proved there was a genuine historical dynasty called the House of David within 150 years of David himself. It remains one of the most significant vindications of biblical historicity in the 20th century.",
    learn_more: "Biblical Archaeology Review archives (biblicalarchaeology.org); The Bible Unearthed by Finkelstein & Silberman",
    initials: "TDI",
  },
  {
    title: "Pilate Stone",
    year_discovered: "1961",
    era: "New Testament Era",
    color: "#EF4444",
    location: "Caesarea Maritima, Israel",
    biblical_connection: "Matthew 27; Luke 3:1; John 18-19 — confirms Pontius Pilate",
    current_location: "Israel Museum, Jerusalem (replica at Caesarea)",
    description: "A limestone dedication block found in the ruins of a theater at Caesarea Maritima bears the inscription: TO THE TIBERIUM... PONTIUS PILATE... PREFECT OF JUDEA. It was the first archaeological evidence of Pilate's historicity and his title of Prefect (not Procurator, as some ancient sources stated). The stone dates to approximately AD 26-37, precisely overlapping with Jesus' ministry and crucifixion.",
    significance: "Confirms that Pontius Pilate was a real historical figure with exactly the role the Gospels describe. Critics had long questioned whether Pilate was a literary invention — the stone ended that argument definitively.",
    learn_more: "Israel Antiquities Authority (antiquities.org.il); detailed article at biblicalarchaeology.org",
    initials: "PS",
  },
  {
    title: "Caiaphas Ossuary",
    year_discovered: "1990",
    era: "New Testament Era",
    color: PURPLE,
    location: "Jerusalem Peace Forest (construction excavation)",
    biblical_connection: "Matthew 26:3; John 11:49-53; Acts 4:6 — the High Priest who condemned Jesus",
    current_location: "Israel Museum, Jerusalem",
    description: "Twelve ossuaries (bone boxes) were found when construction workers accidentally broke into a first-century burial cave in Jerusalem. The most ornate, bearing the inscription Yehosef bar Qayafa (Joseph son of Caiaphas), is almost certainly the burial box of the High Priest Caiaphas who presided over Jesus' trial. It contained the bones of six individuals, including a 60-year-old male.",
    significance: "Confirms the historical existence of the High Priest who condemned Jesus. Combined with the Pilate Stone, archaeology has now confirmed the two most powerful Jewish and Roman figures in the Passion narrative were real historical persons with the roles the Gospels describe.",
    learn_more: "Israel Museum catalog; Zvi Greenhut's original excavation report; Biblical Archaeology Society",
    initials: "CAI",
  },
  {
    title: "Cyrus Cylinder",
    year_discovered: "1879",
    era: "Exile & Return",
    color: "#F59E0B",
    location: "Babylon (modern Iraq)",
    biblical_connection: "Ezra 1:1-4; 2 Chronicles 36:22-23; Isaiah 44:28; 45:1",
    current_location: "British Museum, London",
    description: "A baked clay cylinder inscribed with the proclamation of Cyrus the Great of Persia after his conquest of Babylon in 539 BC. The cylinder records that Cyrus allowed displaced peoples to return to their homelands and rebuild their temples — exactly what Ezra 1 records him doing for the Jewish exiles in Babylon. Isaiah 44-45 called Cyrus by name over 150 years before his birth.",
    significance: "The Cyrus Cylinder confirms the biblical account of the Edict of Cyrus (Ezra 1). It also supports the extraordinary prophecy in Isaiah 44-45, where Isaiah names Cyrus 150+ years before his birth as the one who will authorize the rebuilding of Jerusalem and the Temple.",
    learn_more: "British Museum collection at britishmuseum.org; The Cyrus Cylinder: The King of Persia and the Idol from Babylon (Irving Finkel)",
    initials: "CC",
  },
  {
    title: "Hezekiah's Tunnel",
    year_discovered: "1838 (re-explored 1880)",
    era: "Kingdom Period",
    color: "#10B981",
    location: "City of David, Jerusalem",
    biblical_connection: "2 Kings 20:20; 2 Chronicles 32:30 — Hezekiah's water tunnel",
    current_location: "In situ — walkable today in Jerusalem",
    description: "A 1,750-foot tunnel carved through solid rock beneath Jerusalem, channeling water from the Gihon Spring to the Pool of Siloam inside the city walls. In 1880, a boy discovered an inscription (the Siloam Inscription) inside the tunnel describing the moment the two teams of workers, digging from opposite ends, met in the middle. The tunnel dates to approximately 701 BC.",
    significance: "Confirms the biblical account of Hezekiah preparing Jerusalem for the Assyrian siege (2 Kings 20:20). The Siloam Inscription is one of the oldest examples of classical Hebrew writing. Visitors today can wade through the actual tunnel Hezekiah's workers cut, mentioned in Scripture.",
    learn_more: "City of David archaeological site (ir-david.org.il); walkable today with a tour of Jerusalem",
    initials: "HZT",
  },
  {
    title: "Pool of Siloam",
    year_discovered: "2004",
    era: "New Testament Era",
    color: "#3B82F6",
    location: "City of David, Jerusalem",
    biblical_connection: "John 9:1-11 — Jesus heals the blind man, tells him to wash in the Pool of Siloam",
    current_location: "City of David excavation site, Jerusalem",
    description: "Accidentally discovered in 2004 during sewer repairs in Jerusalem, the Pool of Siloam is a large stepped ritual bath (mikveh) dating to the Second Temple period (1st century BC - 1st century AD). The pool matches the description in John 9 exactly — a public pool where Jesus sent the man born blind to wash and receive his sight. The stone steps and mikveh structure are preserved in situ.",
    significance: "For decades, a small Byzantine-era pool was believed to be the Pool of Siloam. The 2004 discovery revealed the authentic first-century pool where Jesus performed the healing miracle in John 9, placing the Gospel account precisely in the Jerusalem archaeology.",
    learn_more: "Hershel Shanks, Biblical Archaeology Review (2005); City of David ongoing excavations",
    initials: "PSL",
  },
  {
    title: "Lachish Letters",
    year_discovered: "1935",
    era: "Kingdom Period",
    color: "#EF4444",
    location: "Lachish (Tell ed-Duweir), Israel",
    biblical_connection: "Jeremiah 34:7; 2 Kings 18:14 — the Assyrian and Babylonian siege of Lachish",
    current_location: "British Museum, London; Israel Antiquities Authority",
    description: "Eighteen ostraca (pottery fragments with ink writing) discovered in the guardroom of the ancient city of Lachish, dating to approximately 588 BC — just before the Babylonian siege. The letters are military dispatches between a commander in Lachish and an outpost, mentioning they can no longer see the fire signals from Azekah. Jeremiah 34:7 records that Lachish and Azekah were the last two fortified cities before Jerusalem fell.",
    significance: "The Lachish Letters place us within months — possibly weeks — of the moment recorded in Jeremiah 34:7. The anxiety in the letters, the reference to failing to see Azekah, maps precisely onto the biblical narrative of the last days before Jerusalem's fall to Babylon.",
    learn_more: "British Museum online collection; Harry Torczyner's original publication; ANET (Ancient Near Eastern Texts)",
    initials: "LL",
  },
  {
    title: "Balaam Inscription (Deir Alla)",
    year_discovered: "1967",
    era: "Kingdom Period",
    color: "#6366F1",
    location: "Deir Alla, Jordan (ancient Transjordan)",
    biblical_connection: "Numbers 22-24 — Balaam son of Beor, the prophet hired to curse Israel",
    current_location: "Jordan Archaeological Museum, Amman",
    description: "Plaster texts discovered at Deir Alla in the Jordan Valley, dating to approximately 800 BC, contain a prophecy attributed to Balaam son of Beor — the exact name of the non-Israelite prophet in Numbers 22-24. The Balaam of the inscription is described as a seer who received a divine vision, using language remarkably similar to the biblical account.",
    significance: "Balaam was long considered a fictional character. The Deir Alla inscription confirms he was a real historical figure — a recognized prophet or seer in the ancient Transjordan region — and that his name and reputation were preserved in non-biblical traditions for centuries after his biblical appearance.",
    learn_more: "Jo Ann Hackett, The Balaam Text from Deir Alla; Biblical Archaeology Review archives",
    initials: "BA",
  },
  {
    title: "Ebla Tablets",
    year_discovered: "1974-1976",
    era: "Patriarchal Era",
    color: GREEN,
    location: "Tell Mardikh (ancient Ebla), Syria",
    biblical_connection: "Genesis 10-14; the Cities of the Plain; patriarchal names and practices",
    current_location: "National Museum of Aleppo, Syria; Idlib Museum",
    description: "Over 17,000 cuneiform tablets discovered at Tell Mardikh in Syria, dating to approximately 2400-2300 BC — the era of the biblical patriarchs. The tablets mention cities named Sodom, Gomorrah, Admah, Zeboim, and Bela (the five Cities of the Plain listed in Genesis 14:2) as real trading partners of Ebla. They also contain personal names identical to those in Genesis: Eber, Ishmael, Israel, and Abraham-equivalents.",
    significance: "Critics had long argued the Cities of the Plain were invented by the Genesis author. The Ebla tablets confirm these cities existed in exactly the period and geography Genesis describes. The tablets also confirm that the patriarchal naming practices and social customs in Genesis accurately reflect 2nd millennium BC Mesopotamian culture.",
    learn_more: "Alfonso Archi, Ebla and Its Archives (2016); Alfonso Archi in Studia Eblatica; Biblical Archaeology Review (Pettinato, 1976-1980)",
    initials: "EB",
  },
  {
    title: "James Ossuary",
    year_discovered: "2002 (publication)",
    era: "New Testament Era",
    color: "#F59E0B",
    location: "Origin unclear — surfaced in antiquities market",
    biblical_connection: "Galatians 1:19; Acts 15 — James, the brother of Jesus and leader of Jerusalem church",
    current_location: "Israel Antiquities Authority storage; displayed at Royal Ontario Museum",
    description: "A first-century limestone ossuary bearing the Aramaic inscription Yaakov bar Yosef akhui diYeshua (James son of Joseph, brother of Jesus). First published by Andre Lemaire in Biblical Archaeology Review (2002), the box triggered enormous controversy — including forgery charges that went to trial in Israel. After an eight-year legal process, the Israel Antiquities Authority judge ruled the inscription was not proven to be a forgery.",
    significance: "If authentic, this is the only physical artifact mentioning Jesus of Nazareth from near his own time. The inscription uniquely specifies James as the brother of Jesus, not merely the son of Joseph — suggesting the brother relationship was notable enough to record, consistent with James being a major leader in the early church.",
    learn_more: "Hershel Shanks and Ben Witherington, The Brother of Jesus (2003); Biblical Archaeology Review archives",
    initials: "JO",
  },
  {
    title: "Mesha Stele (Moabite Stone)",
    year_discovered: "1868",
    era: "Kingdom Period",
    color: PURPLE,
    location: "Dhiban, Jordan (ancient Dibon, capital of Moab)",
    biblical_connection: "2 Kings 3; Numbers 21 — the Moabite king Mesha and the tribe of Gad in Israel",
    current_location: "Louvre Museum, Paris",
    description: "A black basalt stele inscribed in Moabite (closely related to Hebrew), recording the victories of King Mesha of Moab over Israel. The inscription mentions the Israelite tribe of Gad, the Israelite king Omri, and the name YHWH (the divine name of God). It describes Mesha taking vessels of YHWH from a city and presenting them to his own god Chemosh. The stone dates to approximately 840 BC.",
    significance: "One of the most important extrabiblical inscriptions in existence. It confirms the historical existence of the kingdom of Omri and the tribe of Gad as recorded in the Old Testament. The mention of YHWH by a non-Israelite king confirms the distinctiveness of Israel's God was recognized internationally.",
    learn_more: "Louvre Museum collection online; The Moabite Stone (A.H. Sayce, 1888); recent analysis: Ahituv, Echoes from the Past",
    initials: "MS",
  },
];

const ERA_COLOR: Record<string, string> = {
  "Patriarchal Era": "#F59E0B",
  "Exodus & Conquest": "#EF4444",
  "Kingdom Period": PURPLE,
  "Exile & Return": "#3B82F6",
  "New Testament Era": GREEN,
};

export default function BiblicalArchaeologyPage() {
  const [era, setEra] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = DISCOVERIES.filter(d => era === "All" || d.era === era);
  const discovery = DISCOVERIES.find(d => d.title === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⛏️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Biblical Archaeology Discoveries</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            Real archaeological discoveries that confirm the historical accuracy of Scripture — from the Dead Sea Scrolls to the Pontius Pilate Stone. The ground itself testifies.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: "12px 18px", marginBottom: 28 }}>
          <span style={{ color: GREEN, fontWeight: 700, fontSize: 12 }}>Note: </span>
          <span style={{ color: MUTED, fontSize: 13 }}>
            Archaeology cannot prove theological claims about God. What it can do is confirm historical facts — that the people, places, and events recorded in Scripture correspond to real history. Every discovery listed here has been peer-reviewed and accepted by the mainstream archaeological community.
          </span>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {ERA_FILTERS.map(e => (
            <button key={e} onClick={() => setEra(e)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${era === e ? GREEN : BORDER}`, background: era === e ? `${GREEN}15` : "transparent", color: era === e ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {e}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: discovery ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((d, i) => (
              <button key={i} onClick={() => setSelected(selected === d.title ? null : d.title)}
                style={{ background: selected === d.title ? `${d.color}12` : CARD, border: `1px solid ${selected === d.title ? d.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${d.color}20`, border: `1px solid ${d.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: d.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                    {d.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{d.title}</span>
                      <span style={{ background: `${ERA_COLOR[d.era] || GREEN}15`, color: ERA_COLOR[d.era] || GREEN, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{d.era}</span>
                    </div>
                    <div style={{ display: "flex", gap: 8, marginTop: 3, alignItems: "center" }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>Discovered {d.year_discovered}</span>
                      <span style={{ color: MUTED, fontSize: 10 }}>·</span>
                      <span style={{ color: MUTED, fontSize: 11 }}>{d.location}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {discovery && (
            <div style={{ background: CARD, border: `1px solid ${discovery.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <h2 style={{ color: discovery.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{discovery.title}</h2>
              <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>Discovered {discovery.year_discovered} · {discovery.location}</div>

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                <span style={{ background: `${ERA_COLOR[discovery.era] || GREEN}15`, color: ERA_COLOR[discovery.era] || GREEN, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{discovery.era}</span>
              </div>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12, marginBottom: 14 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>BIBLICAL CONNECTION</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{discovery.biblical_connection}</p>
              </div>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{discovery.description}</p>

              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHY IT MATTERS</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{discovery.significance}</p>
              </div>

              <div style={{ background: "#3B82F608", border: "1px solid #3B82F615", borderRadius: 8, padding: 10, marginBottom: 10 }}>
                <div style={{ color: "#3B82F6", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHERE IT IS NOW</div>
                <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{discovery.current_location}</p>
              </div>

              <div style={{ background: `${discovery.color}08`, border: `1px solid ${discovery.color}20`, borderRadius: 8, padding: 10 }}>
                <div style={{ color: discovery.color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>LEARN MORE</div>
                <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{discovery.learn_more}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
