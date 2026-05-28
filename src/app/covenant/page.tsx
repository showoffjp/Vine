"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const COVENANTS = [
  {
    id: "creation",
    name: "Creation Covenant",
    ref: "Genesis 1–2",
    icon: "🌱",
    color: "#10B981",
    parties: "God and Adam (representing humanity)",
    obligation: "Obey, cultivate, multiply, exercise dominion",
    promise: "Life and flourishing in God's presence",
    sign: "The Sabbath rest",
    fulfilled: "Broken by Adam; fulfilled by Christ as second Adam (Romans 5:12-21, 1 Cor. 15:45)",
    summary: "The foundational covenant establishes human identity as God's image-bearers, given the task of cultivating creation and reflecting God's character. Adam's failure is not merely personal — it has cosmic consequences. The rest of the Bible is the story of God restoring what was lost here.",
  },
  {
    id: "noahic",
    name: "Noahic Covenant",
    ref: "Genesis 6–9",
    icon: "🌈",
    color: "#3B82F6",
    parties: "God and Noah (all humanity, all creation)",
    obligation: "None on humanity — this is purely unconditional",
    promise: "No global flood; preservation of the created order",
    sign: "The rainbow",
    fulfilled: "Ongoing — God preserves the world until final judgment despite human sin",
    summary: "After the flood, God makes a unilateral commitment to preserve the created order regardless of human behavior. This covenant requires nothing from Noah or his descendants. It is pure grace — a pledge that despite human evil, God will not abandon his world.",
  },
  {
    id: "abrahamic",
    name: "Abrahamic Covenant",
    ref: "Genesis 12, 15, 17",
    icon: "⭐",
    color: "#F59E0B",
    parties: "God and Abraham (and his offspring)",
    obligation: "Walk before God and be blameless (Gen. 17:1)",
    promise: "Land, descendants, and blessing to all nations",
    sign: "Circumcision",
    fulfilled: "In Christ, the promised offspring (Gal. 3:16); Gentiles included through faith (Gal. 3:7-9)",
    summary: "God calls one man, Abraham, through whom he will reverse the curse and bless all nations. The Abrahamic covenant is the hinge of redemptive history. Everything after it — Sinai, David, the prophets, Jesus — is the story of how this promise is kept. Paul argues in Galatians that faith has always been the path of belonging to Abraham's family.",
  },
  {
    id: "mosaic",
    name: "Mosaic (Sinai) Covenant",
    ref: "Exodus 19–24, Deuteronomy",
    icon: "📜",
    color: "#EF4444",
    parties: "God and the nation of Israel",
    obligation: "Obedience to the Torah (613 commandments)",
    promise: "Land, blessing, prosperity, God's presence",
    sign: "Sabbath",
    fulfilled: "The law reveals sin and points to Christ (Gal. 3:24); Christ fulfills its righteous requirements (Matt. 5:17, Rom. 8:3-4)",
    summary: "The national covenant between God and Israel at Sinai defines Israel's life as a community. It is not the path of salvation (which runs through Abraham's faith) but Israel's constitutional law as God's covenant people. The prophets repeatedly declare Israel has broken this covenant. Jeremiah promises a new covenant that will accomplish what Sinai could not (Jer. 31).",
  },
  {
    id: "davidic",
    name: "Davidic Covenant",
    ref: "2 Samuel 7, Psalm 89",
    icon: "👑",
    color: PURPLE,
    parties: "God and David (and his royal line)",
    obligation: "None unconditional; the king must obey",
    promise: "An eternal throne; a son who will reign forever",
    sign: "The temple (later)",
    fulfilled: "In Jesus, son of David, whose kingdom has no end (Luke 1:32-33, Acts 2:29-36)",
    summary: "God promises David that his throne will be established forever — one of his descendants will reign eternally. This is the covenant the Psalms and prophets appeal to repeatedly. The book of Matthew opens by calling Jesus 'Son of David' — announcing that the promise is now being fulfilled. Jesus is the eternal Davidic king.",
  },
  {
    id: "new",
    name: "New Covenant",
    ref: "Jeremiah 31:31-34, Luke 22:20, Hebrews 8-10",
    icon: "✝️",
    color: GREEN,
    parties: "God and all who believe, sealed in Christ's blood",
    obligation: "Faith and obedience from transformed hearts",
    promise: "Forgiveness, God's Spirit, the law written on hearts, personal knowledge of God",
    sign: "Baptism and the Lord's Supper",
    fulfilled: "Inaugurated in Christ's death and resurrection; consummated in the new creation",
    summary: "Jeremiah prophesied a new covenant unlike Sinai — not written on stone but on hearts, not requiring a priest as intermediary because all will know God personally, not conditioned on keeping law because God will give his own Spirit to enable obedience. Jesus declares this covenant sealed in his blood at the Last Supper. The New Testament is the document of the new covenant.",
  },
];

const HOW_IT_FITS = [
  { heading: "One Story, Many Chapters", body: "The Bible is not a collection of disconnected moral lessons — it is one covenant story. Each covenant advances the same redemptive purpose: God rescuing and restoring humanity and creation to himself. Genesis 1-2 establishes what was lost; Revelation 21-22 shows it restored. Everything in between is the covenant story of how God gets there." },
  { heading: "Continuity and Discontinuity", body: "The covenants build on each other while also developing. The Mosaic law is not repeated in the new covenant, but its moral core (love God, love neighbor) is fulfilled in Christ. Circumcision is not required in the new covenant, but baptism takes an analogous role. Understanding what continues and what changes requires careful exegesis — not proof-texting." },
  { heading: "Christ as Covenant Fulfiller", body: "Jesus does not abolish the earlier covenants — he fulfills them (Matt. 5:17). He is the true Israel who obeys where Israel failed. He is the Davidic king who reigns forever. He is the offspring of Abraham through whom all nations are blessed. He is the second Adam who succeeds where the first failed. Reading the OT covenant promises through Christ transforms how they are understood." },
];

export default function CovenantPage() {
  const [activeTab, setActiveTab] = useState<"covenants" | "summary">("covenants");
  const [selected, setSelected] = useState("creation");

  const cov = COVENANTS.find(c => c.id === selected)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📜</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Covenant Theology</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The Bible is one story held together by covenant — a binding commitment between God and his people that runs from creation to new creation. Understanding the covenants is the key to reading the whole Bible.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "covenants" as const, label: "The Six Covenants", icon: "📖" },
            { id: "summary" as const, label: "How It Fits Together", icon: "🧩" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "covenants" && (
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
              {COVENANTS.map(c => (
                <button key={c.id} onClick={() => setSelected(c.id)}
                  style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selected === c.id ? c.color : BORDER}`, background: selected === c.id ? `${c.color}18` : CARD, color: selected === c.id ? c.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", textAlign: "left" }}>
                  {c.icon} {c.name.split(" ")[0] + (c.name.split(" ")[1] ? " " + c.name.split(" ")[1] : "")}
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ background: CARD, border: `1px solid ${cov.color}40`, borderRadius: 14, padding: 26 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                  <span style={{ fontSize: 32 }}>{cov.icon}</span>
                  <div>
                    <h2 style={{ color: cov.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{cov.name}</h2>
                    <span style={{ background: `${cov.color}20`, color: cov.color, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{cov.ref}</span>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0" }}>{cov.summary}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[
                    { label: "Parties", value: cov.parties },
                    { label: "Sign", value: cov.sign },
                    { label: "Obligation", value: cov.obligation },
                    { label: "Promise", value: cov.promise },
                  ].map(row => (
                    <div key={row.label} style={{ background: BG, borderRadius: 8, padding: "10px 14px" }}>
                      <div style={{ color: cov.color, fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{row.label}</div>
                      <div style={{ color: TEXT, fontSize: 13, lineHeight: 1.5 }}>{row.value}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 12, background: `${cov.color}10`, border: `1px solid ${cov.color}25`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: cov.color, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Fulfillment in Christ</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{cov.fulfilled}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "summary" && (
          <div>
            {HOW_IT_FITS.map((h, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 12 }}>{h.heading}</h3>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{h.body}</p>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}40`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, marginBottom: 14 }}>The Arc of the Covenants</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {COVENANTS.map((c, i) => (
                  <div key={c.id} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${c.color}20`, border: `2px solid ${c.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{c.icon}</div>
                      {i < COVENANTS.length - 1 && <div style={{ width: 2, height: 24, background: BORDER, margin: "4px 0" }} />}
                    </div>
                    <div style={{ paddingBottom: i < COVENANTS.length - 1 ? 16 : 0 }}>
                      <div style={{ color: c.color, fontWeight: 700, fontSize: 14 }}>{c.name}</div>
                      <div style={{ color: MUTED, fontSize: 12 }}>{c.ref}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
