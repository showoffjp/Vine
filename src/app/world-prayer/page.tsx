"use client";

import { useState, useEffect } from "react";

interface CountryPrayer {
  id: string;
  flag: string;
  country: string;
  region: string;
  population: string;
  christians: string;
  christianPercent: number;
  unreachedGroups: number;
  status: "Open" | "Restricted" | "Persecuted";
  prayerPoints: string[];
  recentNews: string;
  verse: string;
  verseRef: string;
  missionaryPresence: "Strong" | "Moderate" | "Minimal" | "None";
}

const countries: CountryPrayer[] = [
  {
    id: "c1", flag: "🇮🇳", country: "India", region: "South Asia",
    population: "1.43B", christians: "28M", christianPercent: 2.3,
    unreachedGroups: 2200, status: "Restricted",
    prayerPoints: [
      "For protection of believers in Hindu-majority states where conversion is criminalized",
      "For the Dalit community — the most responsive to the Gospel — to receive deep discipleship",
      "For house church networks in north India to multiply without government interference",
      "For Indian missionaries being sent into the 10/40 Window",
    ],
    recentNews: "Christian pastors in Uttar Pradesh faced increased harassment in 2025. Underground churches growing rapidly in rural Bihar.",
    verse: "The harvest is plentiful but the workers are few.",
    verseRef: "Matthew 9:37",
    missionaryPresence: "Moderate",
  },
  {
    id: "c2", flag: "🇨🇳", country: "China", region: "East Asia",
    population: "1.41B", christians: "100M", christianPercent: 7.1,
    unreachedGroups: 490, status: "Persecuted",
    prayerPoints: [
      "For the underground church to remain strong under increasing surveillance and pressure",
      "For Chinese Christians to continue their extraordinary missionary sending movement",
      "For the Uyghur, Tibetan, and other minority peoples who have almost no access to the Gospel",
      "For registered Three-Self churches to speak prophetically despite government restriction",
    ],
    recentNews: "China's house church movement continues to be among the fastest-growing in the world despite crackdowns. Estimates suggest 2M+ come to faith annually.",
    verse: "Do not be afraid of those who kill the body but cannot kill the soul.",
    verseRef: "Matthew 10:28",
    missionaryPresence: "Minimal",
  },
  {
    id: "c3", flag: "🇮🇷", country: "Iran", region: "Middle East",
    population: "89M", christians: "800K", christianPercent: 0.9,
    unreachedGroups: 50, status: "Persecuted",
    prayerPoints: [
      "For the fastest-growing church in the world (per capita) to continue expanding",
      "For Persian believers imprisoned for their faith — many in Evin Prison",
      "For satellite broadcasts and digital evangelism reaching millions inside Iran",
      "For protection of converts from Muslim backgrounds who face death threats from family",
    ],
    recentNews: "Iranians continue to come to faith in record numbers via satellite TV and internet evangelism. The Iranian church outside Iran reports unprecedented baptisms.",
    verse: "For I am not ashamed of the gospel, because it is the power of God that brings salvation.",
    verseRef: "Romans 1:16",
    missionaryPresence: "Minimal",
  },
  {
    id: "c4", flag: "🇳🇬", country: "Nigeria", region: "West Africa",
    population: "223M", christians: "95M", christianPercent: 43,
    unreachedGroups: 180, status: "Restricted",
    prayerPoints: [
      "For an end to the Boko Haram and ISWAP violence targeting Christians in the north",
      "For unity between the historically divided Christian south and Muslim north",
      "For Nigerian missionaries — one of the world's largest missionary-sending nations",
      "For deep discipleship to counter prosperity gospel influence in Nigerian churches",
    ],
    recentNews: "Over 5,000 Christians killed in Nigeria in 2024, making it among the deadliest countries for believers. The Nigerian church continues to send missionaries globally.",
    verse: "The Lord will fight for you; you need only to be still.",
    verseRef: "Exodus 14:14",
    missionaryPresence: "Strong",
  },
  {
    id: "c5", flag: "🇸🇦", country: "Saudi Arabia", region: "Middle East",
    population: "37M", christians: "1.2M", christianPercent: 3.3,
    unreachedGroups: 15, status: "Persecuted",
    prayerPoints: [
      "For the 1.2M+ Christian migrant workers who have no freedom to worship openly",
      "For Saudi Arabians who secretly come to faith online and through personal witness",
      "For gradual cultural openings to be used for Gospel witness",
      "For protection of those distributing Scriptures digitally inside the kingdom",
    ],
    recentNews: "Saudi citizens who convert from Islam still face severe social and legal consequences. A growing number of secret believers are connected through encrypted apps.",
    verse: "Ask me and I will give you the nations as your inheritance.",
    verseRef: "Psalm 2:8",
    missionaryPresence: "None",
  },
  {
    id: "c6", flag: "🇰🇵", country: "North Korea", region: "East Asia",
    population: "26M", christians: "400K", christianPercent: 1.5,
    unreachedGroups: 4, status: "Persecuted",
    prayerPoints: [
      "For believers worshipping in absolute secrecy — discovered believers face labor camps",
      "For North Korean defectors to hear the Gospel in China and South Korea",
      "For the estimated 50,000–70,000 Christians in labor camps",
      "For a miracle opening of this most closed nation on earth",
    ],
    recentNews: "North Korea remains ranked #1 on the World Watch List for Christian persecution. Bibles are contraband. Entire families are imprisoned when one member is discovered.",
    verse: "He heals the brokenhearted and binds up their wounds.",
    verseRef: "Psalm 147:3",
    missionaryPresence: "None",
  },
  {
    id: "c7", flag: "🇧🇷", country: "Brazil", region: "Latin America",
    population: "215M", christians: "183M", christianPercent: 85,
    unreachedGroups: 42, status: "Open",
    prayerPoints: [
      "For the Brazilian evangelical church to lead with integrity amid scandals that harm witness",
      "For unreached indigenous peoples in the Amazon — over 100 groups remain uncontacted",
      "For Brazil's extraordinary missionary movement to be sustained and multiplied",
      "For revival that reaches the favelas with the full Gospel of justice and transformation",
    ],
    recentNews: "Brazil is now the 2nd largest missionary-sending nation in the world. Over 34,000 Brazilian missionaries serve in 170+ countries.",
    verse: "How beautiful are the feet of those who bring good news!",
    verseRef: "Romans 10:15",
    missionaryPresence: "Strong",
  },
  {
    id: "c8", flag: "🇪🇹", country: "Ethiopia", region: "East Africa",
    population: "126M", christians: "70M", christianPercent: 56,
    unreachedGroups: 45, status: "Restricted",
    prayerPoints: [
      "For an end to the Tigray conflict and reconciliation between ethnic groups",
      "For the Oromo, Somali, and Afar peoples — many unreached and Muslim majority",
      "For the ancient Ethiopian Orthodox Church to experience evangelical renewal",
      "For Ethiopian churches growing explosively to develop deep discipleship",
    ],
    recentNews: "Ethiopian evangelical churches are among the fastest-growing globally. Despite civil conflict, over 1M new believers baptized in 2024.",
    verse: "Ethiopia will stretch out her hands to God.",
    verseRef: "Psalm 68:31",
    missionaryPresence: "Moderate",
  },
  {
    id: "c9", flag: "🇮🇩", country: "Indonesia", region: "Southeast Asia",
    population: "277M", christians: "28M", christianPercent: 10,
    unreachedGroups: 310, status: "Restricted",
    prayerPoints: [
      "For Indonesian Christians facing local church closure orders and mob intimidation",
      "For the Sundanese and Javanese — the two largest unreached people groups in the world",
      "For Papuan believers to be discipled and equipped to reach their own people",
      "For Indonesian churches pioneering mission to neighboring Muslim nations",
    ],
    recentNews: "Indonesia saw a significant increase in church closure orders in 2025. Underground church networks in Java continue to grow despite pressure.",
    verse: "The name of the Lord is a fortified tower; the righteous run to it and are safe.",
    verseRef: "Proverbs 18:10",
    missionaryPresence: "Moderate",
  },
  {
    id: "c10", flag: "🇺🇦", country: "Ukraine", region: "Eastern Europe",
    population: "44M", christians: "35M", christianPercent: 80,
    unreachedGroups: 6, status: "Open",
    prayerPoints: [
      "For an end to the war and justice and restoration for those who have suffered",
      "For Ukrainian churches who are the primary providers of humanitarian aid in the country",
      "For Gospel witness among Russian soldiers and in Russian-occupied territories",
      "For believers displaced by war to find community and continue following Jesus",
    ],
    recentNews: "Ukrainian churches have maintained extraordinary ministry during the war. Over 3,000 churches actively provide aid, counsel, and Gospel witness to displaced people.",
    verse: "God is our refuge and strength, an ever-present help in trouble.",
    verseRef: "Psalm 46:1",
    missionaryPresence: "Strong",
  },
  {
    id: "c11", flag: "🇦🇫", country: "Afghanistan", region: "Central Asia",
    population: "41M", christians: "12K", christianPercent: 0.03,
    unreachedGroups: 60, status: "Persecuted",
    prayerPoints: [
      "For the tiny, hidden church — some of the world's most courageous believers",
      "For Afghans encountering Jesus through dreams, which are widely reported",
      "For Afghan refugees in Pakistan, Iran, and Europe to hear the Gospel",
      "For the Pashtun people — 45M across Afghanistan and Pakistan — still largely unreached",
    ],
    recentNews: "Since Taliban return to power in 2021, the known church has gone entirely underground. Multiple believers executed. Yet reports of new faith continue to emerge.",
    verse: "Do not be afraid of those who kill the body but cannot kill the soul.",
    verseRef: "Matthew 10:28",
    missionaryPresence: "None",
  },
  {
    id: "c12", flag: "🇯🇵", country: "Japan", region: "East Asia",
    population: "125M", christians: "1.9M", christianPercent: 1.5,
    unreachedGroups: 30, status: "Open",
    prayerPoints: [
      "For breakthrough in one of the world's least-reached developed nations",
      "For Japanese Christians to boldly share faith in a culture that values privacy and conformity",
      "For healing from the shame and trauma driving Japan's suicide crisis",
      "For diaspora Japanese around the world to encounter Christ and bring faith home",
    ],
    recentNews: "Japan remains one of the least evangelized nations in Asia. Church attendance has been slowly declining. Youth ministry is showing the most promising growth points.",
    verse: "The Lord is not slow in keeping his promise... not wanting anyone to perish.",
    verseRef: "2 Peter 3:9",
    missionaryPresence: "Moderate",
  },
];

const regions = ["All Regions", "South Asia", "East Asia", "Middle East", "West Africa", "East Africa", "Latin America", "Southeast Asia", "Eastern Europe", "Central Asia"];
const statusColors = { Open: "#00FF88", Restricted: "#F59E0B", Persecuted: "#EF4444" };
const missionaryColors = { Strong: "#00FF88", Moderate: "#3B82F6", Minimal: "#F59E0B", None: "#EF4444" };

export default function WorldPrayerPage() {
  const [prayedFor, setPrayedFor] = useState<Set<string>>(new Set());
  const [savedCountries, setSavedCountries] = useState<Set<string>>(new Set());
  const [selected, setSelected] = useState<CountryPrayer | null>(null);
  const [filterRegion, setFilterRegion] = useState("All Regions");
  const [filterStatus, setFilterStatus] = useState("All");
  const [search, setSearch] = useState("");
  const [prayerLog, setPrayerLog] = useState<{ countryId: string; date: string }[]>([]);

  useEffect(() => {
    try {
      const p = localStorage.getItem("vine_world_prayer_prayed");
      if (p) setPrayedFor(new Set(JSON.parse(p)));
      const s = localStorage.getItem("vine_world_prayer_saved");
      if (s) setSavedCountries(new Set(JSON.parse(s)));
      const l = localStorage.getItem("vine_world_prayer_log");
      if (l) setPrayerLog(JSON.parse(l));
    } catch {}
  }, []);

  const handlePray = (id: string) => {
    setPrayedFor((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_world_prayer_prayed", JSON.stringify([...next])); } catch {}
      return next;
    });
    const log = [{ countryId: id, date: new Date().toISOString() }, ...prayerLog].slice(0, 200);
    setPrayerLog(log);
    try { localStorage.setItem("vine_world_prayer_log", JSON.stringify(log)); } catch {}
  };

  const handleSave = (id: string) => {
    setSavedCountries((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_world_prayer_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const filtered = countries.filter((c) => {
    if (filterRegion !== "All Regions" && c.region !== filterRegion) return false;
    if (filterStatus !== "All" && c.status !== filterStatus) return false;
    if (search && !c.country.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const totalPrayers = prayerLog.length;
  const countriesPrayed = new Set(prayerLog.map((l) => l.countryId)).size;

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #071428 0%, #07070F 100%)", padding: "52px 24px 36px", textAlign: "center", borderBottom: "1px solid #1E1E32" }}>
        <div style={{ fontSize: 44, marginBottom: 10 }}>🌍</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>World Prayer</h1>
        <p style={{ fontSize: 16, color: "#9898B3", maxWidth: 520, margin: "0 auto 24px" }}>
          Pray for nations. Every country. Every people group. Join thousands interceding for the globe.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          {[
            { value: countries.length.toString(), label: "Countries" },
            { value: totalPrayers.toString(), label: "Times You've Prayed" },
            { value: countriesPrayed.toString(), label: "Nations Interceded" },
            { value: prayedFor.size.toString(), label: "Currently Praying For" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#00FF88" }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "#9898B3" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 24px" }}>
        {/* Filters */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24, alignItems: "center" }}>
          <input value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Search country..."
            style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, padding: "9px 14px", color: "#F2F2F8", fontSize: 13, outline: "none", minWidth: 200 }} />

          <div style={{ display: "flex", gap: 6 }}>
            {["All", "Open", "Restricted", "Persecuted"].map((s) => (
              <button key={s} onClick={() => setFilterStatus(s)}
                style={{ padding: "6px 14px", borderRadius: 20, fontSize: 12, cursor: "pointer",
                  border: `1px solid ${filterStatus === s ? (s === "All" ? "#6B4FBB" : statusColors[s as keyof typeof statusColors]) : "#1E1E32"}`,
                  background: filterStatus === s ? `${s === "All" ? "#6B4FBB" : statusColors[s as keyof typeof statusColors]}20` : "transparent",
                  color: filterStatus === s ? (s === "All" ? "#6B4FBB" : statusColors[s as keyof typeof statusColors]) : "#9898B3" }}>
                {s}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 24 }}>
          {regions.map((r) => (
            <button key={r} onClick={() => setFilterRegion(r)}
              style={{ padding: "5px 12px", borderRadius: 20, fontSize: 11, cursor: "pointer",
                border: `1px solid ${filterRegion === r ? "#00FF88" : "#1E1E32"}`,
                background: filterRegion === r ? "#00FF8815" : "transparent",
                color: filterRegion === r ? "#00FF88" : "#9898B3" }}>
              {r}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18 }}>
          {filtered.map((c) => {
            const prayed = prayedFor.has(c.id);
            const saved = savedCountries.has(c.id);
            return (
              <div key={c.id}
                style={{
                  background: "#12121F",
                  border: `1px solid ${prayed ? "#00FF8830" : "#1E1E32"}`,
                  borderRadius: 16, padding: 20, cursor: "pointer",
                }}
                onClick={() => setSelected(c)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <div style={{ fontSize: 32 }}>{c.flag}</div>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "#F2F2F8" }}>{c.country}</div>
                      <div style={{ fontSize: 12, color: "#9898B3" }}>{c.region}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexDirection: "column", alignItems: "flex-end" }}>
                    <div style={{ padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600,
                      background: `${statusColors[c.status]}20`, color: statusColors[c.status], border: `1px solid ${statusColors[c.status]}40` }}>
                      {c.status}
                    </div>
                    <div style={{ fontSize: 10, color: missionaryColors[c.missionaryPresence] }}>
                      ✦ {c.missionaryPresence} presence
                    </div>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }}>
                  {[
                    { label: "Population", value: c.population },
                    { label: "Christians", value: `${c.christianPercent}%` },
                    { label: "Unreached Groups", value: c.unreachedGroups.toString() },
                  ].map((stat) => (
                    <div key={stat.label} style={{ background: "#07070F", borderRadius: 8, padding: "8px 10px", textAlign: "center" }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#F2F2F8" }}>{stat.value}</div>
                      <div style={{ fontSize: 9, color: "#9898B3" }}>{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ borderLeft: "2px solid #6B4FBB40", paddingLeft: 10, marginBottom: 14 }}>
                  <div style={{ fontSize: 12, color: "#9898B3", fontStyle: "italic" }}>"{c.verse}"</div>
                  <div style={{ fontSize: 10, color: "#6B4FBB", marginTop: 2 }}>{c.verseRef}</div>
                </div>

                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={(e) => { e.stopPropagation(); handlePray(c.id); }}
                    style={{
                      flex: 1, padding: "8px 12px", borderRadius: 8, border: "none",
                      background: prayed ? "#00FF8820" : "#6B4FBB",
                      color: prayed ? "#00FF88" : "#fff",
                      cursor: "pointer", fontWeight: 600, fontSize: 13,
                    }}>
                    {prayed ? "🙏 Praying" : "Pray for this Nation"}
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); handleSave(c.id); }}
                    style={{ padding: "8px 12px", borderRadius: 8, border: "none", background: saved ? "#6B4FBB20" : "#1E1E32", color: saved ? "#6B4FBB" : "#9898B3", cursor: "pointer", fontSize: 15 }}>
                    {saved ? "★" : "☆"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Country Detail Modal */}
      {selected && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 24 }}
          onClick={() => setSelected(null)}>
          <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 20, padding: 28, maxWidth: 580, width: "100%", maxHeight: "88vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", gap: 14, marginBottom: 20 }}>
              <div style={{ fontSize: 48 }}>{selected.flag}</div>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#F2F2F8", margin: "0 0 4px" }}>{selected.country}</h2>
                <div style={{ display: "flex", gap: 8 }}>
                  <span style={{ padding: "2px 10px", borderRadius: 20, fontSize: 11, background: `${statusColors[selected.status]}20`, color: statusColors[selected.status], border: `1px solid ${statusColors[selected.status]}40` }}>{selected.status}</span>
                  <span style={{ fontSize: 11, color: "#9898B3", padding: "2px 10px" }}>{selected.region}</span>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 20 }}>
              {[
                { label: "Population", value: selected.population },
                { label: "Christians", value: `${selected.christianPercent}%` },
                { label: "Unreached Groups", value: selected.unreachedGroups },
                { label: "Missionaries", value: selected.missionaryPresence },
              ].map((s) => (
                <div key={s.label} style={{ background: "#07070F", borderRadius: 10, padding: "10px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#F2F2F8" }}>{s.value}</div>
                  <div style={{ fontSize: 9, color: "#9898B3" }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ background: "#07070F", borderRadius: 10, padding: 14, marginBottom: 16, borderLeft: "3px solid #F59E0B" }}>
              <div style={{ fontSize: 12, color: "#F59E0B", fontWeight: 600, marginBottom: 6 }}>Recent News</div>
              <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, margin: 0 }}>{selected.recentNews}</p>
            </div>

            <h3 style={{ fontSize: 14, fontWeight: 700, color: "#F2F2F8", marginBottom: 12 }}>🙏 Prayer Points</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
              {selected.prayerPoints.map((pt, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#6B4FBB20", border: "1px solid #6B4FBB", color: "#6B4FBB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                  <div style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6 }}>{pt}</div>
                </div>
              ))}
            </div>

            <div style={{ borderLeft: "3px solid #6B4FBB", paddingLeft: 14, marginBottom: 24 }}>
              <div style={{ fontSize: 14, color: "#F2F2F8", fontStyle: "italic" }}>"{selected.verse}"</div>
              <div style={{ fontSize: 12, color: "#6B4FBB", marginTop: 4 }}>{selected.verseRef}</div>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => handlePray(selected.id)}
                style={{ flex: 1, padding: "12px 16px", borderRadius: 10, border: "none",
                  background: prayedFor.has(selected.id) ? "#00FF8820" : "#6B4FBB",
                  color: prayedFor.has(selected.id) ? "#00FF88" : "#fff",
                  cursor: "pointer", fontWeight: 700, fontSize: 15 }}>
                {prayedFor.has(selected.id) ? "🙏 Praying for " + selected.country : "Pray for " + selected.country}
              </button>
              <button onClick={() => setSelected(null)}
                style={{ padding: "12px 16px", borderRadius: 10, border: "1px solid #1E1E32", background: "transparent", color: "#9898B3", cursor: "pointer", fontSize: 15 }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
