"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const TYPE_FILTERS = ["All", "24/7 Prayer Houses", "Missions Prayer", "Intercession Networks", "Youth & Campus", "Historical Movements"];

const MOVEMENTS = [
  {
    name: "International House of Prayer (IHOPKC)",
    abbr: "IHOPKC",
    type: "24/7 Prayer Houses",
    color: GREEN,
    location: "Kansas City, Missouri (and global network)",
    founded: "1999",
    founder: "Mike Bickle",
    description: "Founded by Mike Bickle in 1999, IHOPKC has maintained continuous 24/7 prayer and worship without interruption for over 25 years. The prayer room streams live on the internet around the clock. IHOPKC has trained thousands of intercessors and missionaries through its internship programs and Forerunner Christian Fellowship. It has launched a global network of Houses of Prayer that have spread to dozens of nations.",
    what_they_do: "Continuous worship-based intercession; missions training (IHOP University); the OneThing Conference (New Year's, 20,000+ attendees); and equipping churches worldwide in prayer and intercession.",
    key_resource: "ihopkc.org — 24/7 livestream; free teaching archive from Mike Bickle and others",
    impact: "Over 1,000 full-time staff and interns; 24/7 prayer maintained since May 7, 1999; global network of Houses of Prayer",
    initials: "IHK",
  },
  {
    name: "24-7 Prayer International",
    abbr: "24-7 Prayer",
    type: "24/7 Prayer Houses",
    color: PURPLE,
    location: "Guildford, UK (global movement)",
    founded: "1999",
    founder: "Pete Greig",
    description: "Beginning in a church basement in Chichester, England in September 1999, Pete Greig and a group of young adults began praying without stopping — and kept going for months. The movement they sparked became 24-7 Prayer International, now operating in over 120 countries. The Boiler Rooms and Prayer Spaces they planted combine contemplative prayer with radical action in some of the world's most broken communities.",
    what_they_do: "Prayer room networks; the Lectio 365 daily prayer app (over 1 million users); Boiler Rooms (communities of prayer and service in hard places); training resources; missions; the Red Moon Rising book movement.",
    key_resource: "24-7prayer.com; Lectio 365 app (free); Red Moon Rising by Pete Greig",
    impact: "Over 100 million prayer sessions logged globally; prayer rooms in prisons, hospitals, brothels, universities, and churches in 120 nations",
    initials: "247",
  },
  {
    name: "World Prayer Center",
    abbr: "WPC",
    type: "Intercession Networks",
    color: "#3B82F6",
    location: "Colorado Springs, Colorado",
    founded: "1998",
    founder: "Ted Haggard / C. Peter Wagner",
    description: "Founded in partnership with New Life Church and the World Prayer Center network, the Colorado Springs center serves as a hub for global intercession — particularly for unreached peoples, missions, and spiritual mapping. The center provides prayer intelligence on global spiritual conditions and connects intercessors worldwide through its prayer networks.",
    what_they_do: "Global prayer coordination; prayer intelligence on unreached peoples; spiritual mapping training; connecting intercessors across nations",
    key_resource: "worldprayercenter.org",
    impact: "Connected to global prayer networks in dozens of nations; resource center for the AD2000 and Beyond prayer movement",
    initials: "WPC",
  },
  {
    name: "Concerts of Prayer International",
    abbr: "COPI",
    type: "Intercession Networks",
    color: "#F59E0B",
    location: "Minneapolis, Minnesota",
    founded: "1988",
    founder: "David Bryant",
    description: "Founded by David Bryant to promote united, concerted prayer for spiritual awakening and world evangelization. Bryant's Concerts of Prayer model — bringing churches together for focused, united intercession — has been implemented in hundreds of cities. He has been one of the leading voices for the primacy of prayer in the modern missions movement.",
    what_they_do: "Training churches in united prayer events; publishing resources on prayer for revival and missions; Proclaim Hope! proclamation movement",
    key_resource: "davidbryantministries.org; Concerts of Prayer by David Bryant",
    impact: "Concerts of Prayer model implemented in hundreds of cities across America and internationally; Bryant's books have shaped a generation of prayer leaders",
    initials: "COP",
  },
  {
    name: "The Call (TheCall)",
    abbr: "TheCall",
    type: "Youth & Campus",
    color: "#EF4444",
    location: "Nashville, Tennessee (and global events)",
    founded: "2000",
    founder: "Lou Engle",
    description: "Founded by Lou Engle in 2000 with The Call DC — a gathering of over 400,000 young adults on the National Mall in Washington DC for a day of fasting and prayer. TheCall has since held massive prayer gatherings in Nashville, Bangalore, Jerusalem, South Africa, and Brazil, drawing hundreds of thousands to unified days of intercession for national and global transformation.",
    what_they_do: "Massive prayer and fasting gatherings; mobilizing young adults for intercession; prayer for justice, abortion, and moral issues; the Justin connection to Burn 24-7 movement",
    key_resource: "thecall.com; Lou Engle on YouTube",
    impact: "The Call DC (2000): over 400,000 attendees; multiple six-figure gatherings worldwide; catalyzed the 24/7 prayer movement among American youth",
    initials: "TC",
  },
  {
    name: "Burn 24-7",
    abbr: "Burn",
    type: "Youth & Campus",
    color: GREEN,
    location: "Global network (founded in Atlanta)",
    founded: "2007",
    founder: "Sean Feucht & Karl Dedmon",
    description: "A worship and prayer movement that travels globally, setting up 24-hour worship sets in churches, venues, and public spaces. Burn 24-7 events combine continuous worship music with intercession, and have been held in over 50 nations. Sean Feucht has become one of the most prominent voices in worship-based intercession in America, having also led massive outdoor worship gatherings during the COVID-19 period.",
    what_they_do: "24-hour worship and prayer sets in local churches; traveling worship gatherings; mobilizing youth and young adults; Let Us Worship movement",
    key_resource: "burn24-7.com; Let Us Worship by Sean Feucht",
    impact: "Over 50 nations; Let Us Worship gatherings attracted hundreds of thousands; active network of local Burn chapters",
    initials: "B24",
  },
  {
    name: "Herrnhut / Moravian Prayer Legacy",
    abbr: "Moravian",
    type: "Historical Movements",
    color: PURPLE,
    location: "Herrnhut, Germany (founded 1722)",
    founded: "1727",
    founder: "Count Nikolaus von Zinzendorf",
    description: "The Moravian Brethren of Herrnhut began an unbroken prayer meeting on August 13, 1727 that lasted for 100 years without ceasing. From this prayer meeting came the first large-scale Protestant mission movement — Moravian missionaries went to the Caribbean, Greenland, North America, and Africa. Their motto: May the Lamb receive the reward of His suffering. John Wesley's encounter with Moravians on a ship led to his conversion and the Methodist revival.",
    what_they_do: "The historical Moravian model inspired every modern 24/7 prayer movement. The original community at Herrnhut (Germany) still exists and welcomes visitors.",
    key_resource: "moravian.org; Count Zinzendorf: His Life and Times by John Weinlick",
    impact: "The 100-year prayer watch (1727-1827); launched the modern Protestant missions movement; inspired John Wesley, Hudson Taylor, and countless others",
    initials: "MOR",
  },
  {
    name: "World Prayer Assembly",
    abbr: "WPA",
    type: "Intercession Networks",
    color: "#10B981",
    location: "Global (hosted in different countries each gathering)",
    founded: "2012",
    founder: "Global prayer networks coalition",
    description: "A global gathering of prayer movements, networks, and prayer leaders from across the world. The World Prayer Assembly brings together thousands of prayer leaders from every continent to seek God for global awakening, unreached peoples, and the body of Christ united in intercession. The assembly is hosted by different nations and connects the full diversity of the global church in prayer.",
    what_they_do: "Global prayer leader gatherings; connecting national prayer movements; prayer intelligence on global spiritual conditions; strategy for global intercession",
    key_resource: "worldprayerassembly.com; International Prayer Council (ipcprayer.org)",
    impact: "Represents prayer networks spanning virtually every nation; catalyzes national and global prayer movements across all Christian traditions",
    initials: "WPA",
  },
  {
    name: "Awake & Alive (Campus Prayer)",
    abbr: "Campus Prayer",
    type: "Youth & Campus",
    color: "#F59E0B",
    location: "Multiple US and international universities",
    founded: "2010s (growing movement)",
    founder: "Various campus ministries",
    description: "A growing movement of early morning (5am or 6am) prayer gatherings on university campuses, inspired by the historical campus prayer revivals at Wheaton, Asbury, and other Christian colleges. Students gather in dorms, chapels, and campus spaces for intercession before classes. The Asbury Revival of 2023 was preceded by years of these campus prayer meetings and is the most recent major expression of what sustained campus intercession produces.",
    what_they_do: "Early morning campus prayer gatherings; intercession for classmates, campuses, and the world; connecting students to global prayer movements",
    key_resource: "cru.org/prayer; intervarsity.org; also check with your campus ministry",
    impact: "Connected to historic Asbury revival (2023) and preceding decades of Asbury campus prayer; growing across secular and Christian campuses worldwide",
    initials: "CAP",
  },
  {
    name: "Operation World / Global Prayer Digest",
    abbr: "Prayercast",
    type: "Missions Prayer",
    color: "#6366F1",
    location: "Global (UK-based with global network)",
    founded: "1964",
    founder: "Patrick Johnstone (Operation World)",
    description: "Operation World by Patrick Johnstone is the standard reference book for praying through every nation on earth. Published first in 1964 and updated through multiple editions (7th edition 2010), it provides detailed prayer intelligence on the church, unreached peoples, spiritual challenges, and needs of every nation. The Prayercast website and app provide daily video prayer guides for nations. Global Prayer Digest covers unreached people groups daily.",
    what_they_do: "Daily prayer guides for nations and people groups; the most comprehensive resource for informed global intercession available",
    key_resource: "operationworld.org; prayercast.com; Global Prayer Digest at global-prayer-digest.org",
    impact: "Operation World used by millions of intercessors worldwide; Prayercast videos have been viewed millions of times; foundational resource for the global prayer movement",
    initials: "OPW",
  },
];

const STATS = [
  { label: "Nations with active prayer movements", value: "120+" },
  { label: "Years IHOPKC has prayed 24/7", value: "25+" },
  { label: "Years Moravian prayer watch lasted", value: "100" },
  { label: "Operation World nations covered", value: "232" },
];

export default function PrayerMovementsPage() {
  const [type, setType] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = MOVEMENTS.filter(m => type === "All" || m.type === type);
  const movement = MOVEMENTS.find(m => m.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔥</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Global Prayer Movements</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            From the Moravian 100-year prayer watch to IHOP to 24-7 Prayer — God is raising up intercessors across the world. The global prayer movement is one of the most significant signs of our time.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 28 }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: "14px 16px", textAlign: "center" }}>
              <div style={{ color: GREEN, fontWeight: 900, fontSize: 22, marginBottom: 4 }}>{s.value}</div>
              <div style={{ color: MUTED, fontSize: 11, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {TYPE_FILTERS.map(t => (
            <button key={t} onClick={() => setType(t)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${type === t ? GREEN : BORDER}`, background: type === t ? `${GREEN}15` : "transparent", color: type === t ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: movement ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((m, i) => (
              <button key={i} onClick={() => setSelected(selected === m.name ? null : m.name)}
                style={{ background: selected === m.name ? `${m.color}12` : CARD, border: `1px solid ${selected === m.name ? m.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${m.color}20`, border: `1px solid ${m.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: m.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                    {m.initials}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 14 }}>{m.name}</span>
                    </div>
                    <div style={{ display: "flex", gap: 8, marginTop: 3, flexWrap: "wrap" }}>
                      <span style={{ background: `${m.color}15`, color: m.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{m.type}</span>
                      <span style={{ color: MUTED, fontSize: 11 }}>Founded {m.founded}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {movement && (
            <div style={{ background: CARD, border: `1px solid ${movement.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <h2 style={{ color: movement.color, fontWeight: 900, fontSize: 17, margin: "0 0 2px" }}>{movement.name}</h2>
              <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>Founded {movement.founded} · {movement.location}</div>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{movement.description}</p>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHAT THEY DO</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{movement.what_they_do}</p>
              </div>

              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 10, marginBottom: 10 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>IMPACT</div>
                <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.6 }}>{movement.impact}</p>
              </div>

              <div style={{ background: `${movement.color}08`, border: `1px solid ${movement.color}20`, borderRadius: 8, padding: 10 }}>
                <div style={{ color: movement.color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>KEY RESOURCE</div>
                <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{movement.key_resource}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
