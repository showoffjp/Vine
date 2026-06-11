"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";


const TABS = [
  { id: "overview", label: "Overview" },
  { id: "what-is", label: "What Is Covenant?" },
  { id: "covenant-works", label: "Covenant of Works" },
  { id: "biblical-covenants", label: "Biblical Covenants" },
  { id: "new-covenant", label: "New Covenant" },
  { id: "dispensation", label: "vs. Dispensationalism" },
  { id: "implications", label: "Implications" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const COV_TEXTS = [
  { ref: "Genesis 17:7", text: "I will establish my covenant as an everlasting covenant between me and you and your descendants after you for the generations to come, to be your God and the God of your descendants after you.", color: GOLD },
  { ref: "Jeremiah 31:31–33", text: "The days are coming, declares the LORD, when I will make a new covenant with the people of Israel... I will put my law in their minds and write it on their hearts. I will be their God, and they will be my people.", color: GREEN },
  { ref: "Luke 22:20", text: "This cup is the new covenant in my blood, which is poured out for you.", color: RED },
  { ref: "Hebrews 8:6", text: "The ministry Jesus has received is as superior to theirs as the covenant of which he is mediator is superior to the old one, since the new covenant is established on better promises.", color: BLUE },
  { ref: "2 Corinthians 3:6", text: "He has made us competent as ministers of a new covenant — not of the letter but of the Spirit; for the letter kills, but the Spirit gives life.", color: TEAL },
];

type BiblicalCovenant = {
  name: string;
  ref: string;
  parties: string;
  sign: string;
  promise: string;
  color: string;
};

const BIBLICAL_COVENANTS: BiblicalCovenant[] = [
  { name: "Noahic Covenant", ref: "Gen 9:8–17", parties: "God and all creation", sign: "Rainbow", promise: "No more global flood; preservation of creation's order for redemption's purposes.", color: BLUE },
  { name: "Abrahamic Covenant", ref: "Gen 12; 15; 17", parties: "God and Abraham/descendants", sign: "Circumcision", promise: "Land, seed (great nation), and blessing to all nations. Unconditional — ratified by God alone (Gen 15).", color: GOLD },
  { name: "Mosaic Covenant", ref: "Exod 19–24; Deut", parties: "God and Israel at Sinai", sign: "Sabbath", promise: "Be my people, I will be your God — conditioned on obedience. National-theocratic administration of the Abrahamic covenant.", color: GREEN },
  { name: "Davidic Covenant", ref: "2 Sam 7:12–16; Ps 89", parties: "God and David/his line", sign: "Temple", promise: "Eternal throne and dynasty — 'Your house and your kingdom will endure forever.' Fulfilled in Christ, Son of David.", color: PURPLE },
  { name: "New Covenant", ref: "Jer 31:31–34; Luke 22:20; Heb 8", parties: "God and his people in Christ", sign: "Baptism / Lord's Supper", promise: "Universal knowledge of God, forgiveness of sins, internalized law (by the Spirit), universal access (no longer only Israel).", color: RED },
];

const COVENANT_GRACE = [
  {
    title: "The Covenant of Redemption (Pactum Salutis)",
    desc: "The eternal intra-Trinitarian agreement: the Father elects a people, the Son agrees to become incarnate and accomplish their redemption, the Spirit agrees to apply that redemption. This is the eternal foundation of the covenant of grace — before time, before creation, within the life of the Trinity itself.",
    color: PURPLE,
  },
  {
    title: "The Covenant of Works",
    desc: "Reformed theology identifies an implied covenant in Genesis 2 between God and Adam as federal head of humanity. Condition: perfect obedience. Consequence of obedience: confirmed eternal life. Consequence of disobedience: death. Adam failed; Christ succeeded as the second Adam, fulfilling what Adam failed to do (Rom 5:12–21).",
    color: GOLD,
  },
  {
    title: "The Covenant of Grace",
    desc: "After the fall, God graciously enters a covenant with fallen humanity — promising redemption through the seed of the woman (Gen 3:15). This single covenant of grace, administered differently in different eras, runs from the proto-evangelion through Noah, Abraham, Moses, David, and culminates in the new covenant in Christ.",
    color: GREEN,
  },
  {
    title: "Unity of the Covenant of Grace",
    desc: "Covenant theology's key insight: the OT and NT are administrations of the same covenant of grace — not two different programs. Abraham was justified by faith (Gen 15:6; Rom 4); Israel's ceremonies pointed forward to Christ; the church is the continuation of Israel's covenant people, now including Gentiles.",
    color: TEAL,
  },
];

const NEW_COVENANT_CONTENT = [
  {
    title: "How Is the New Covenant 'New'?",
    desc: "Jeremiah 31:31–34 identifies what makes it new: (1) universal knowledge of God — not mediated through priests and teachers; (2) internalized law — not external tablets but written on hearts; (3) definitive forgiveness — not covered but removed. Hebrews 8–10 argues these features make the new covenant superior and the old obsolete.",
    color: GREEN,
  },
  {
    title: "New Covenant Membership",
    desc: "Who are the members of the new covenant? All those who know God and whose sins are forgiven (Jer 31:34). This distinguishes the new covenant from the Mosaic — the Mosaic included mixed membership (regenerate and unregenerate); the new covenant's membership is fully regenerate. This is why baptism replaces circumcision as the sign — not for national/physical descent but for those who have believed.",
    color: BLUE,
  },
  {
    title: "Christ as Mediator and Guarantor",
    desc: "Hebrews 7:22; 9:15: Jesus is the mediator and guarantor of the new covenant. By his blood the covenant is ratified (Luke 22:20). He fulfills the Mosaic law, fulfills the Davidic covenant as eternal King, and fulfills the Abrahamic covenant as the seed in whom all nations are blessed (Gal 3:16, 29).",
    color: GOLD,
  },
  {
    title: "New Covenant and the Spirit",
    desc: "Ezekiel 36:26–27 and Jeremiah 31 both point to the Spirit's role in the new covenant — giving a new heart, putting God's Spirit within his people. Pentecost (Acts 2) is the fulfillment of these promises — the Spirit-filled community is the covenant community of the last days.",
    color: TEAL,
  },
];

const DISPENSATIONALISM_COMPARE = [
  {
    aspect: "The Bible's Structure",
    covenant: "One redemptive-historical story unified by the covenant of grace across two administrations (old and new).",
    dispensational: "Seven distinct dispensations — different ways God tests and relates to humanity in different eras; qualitative differences between the ages.",
    color: GREEN,
  },
  {
    aspect: "Israel and the Church",
    covenant: "The church is the continuation and expansion of Israel — the same covenant people, now including Gentiles. No future national restoration for ethnic Israel distinct from the church.",
    dispensational: "Israel and the church are distinct peoples of God with distinct promises. Ethnic Israel has a future national role in God's plan (Rom 9–11).",
    color: BLUE,
  },
  {
    aspect: "The Law of Moses",
    covenant: "The Mosaic law is the old-covenant administration of the single covenant of grace. Its moral core (Ten Commandments) continues; its ceremonial elements are fulfilled and abrogated.",
    dispensational: "The Mosaic covenant was strictly for Israel. The church is not under any aspect of the law; it lives under the 'law of Christ' in the new covenant.",
    color: GOLD,
  },
  {
    aspect: "Infant Baptism",
    covenant: "Since the new covenant continues the covenant of grace, covenant children of believers are included in the covenant community and may receive the covenant sign (baptism). Paedobaptism.",
    dispensational: "Tends toward credobaptism — only professing believers receive baptism. No continuity between circumcision and baptism.",
    color: TEAL,
  },
  {
    aspect: "Millennium / Eschatology",
    covenant: "Tends toward amillennialism or postmillennialism — the millennium is the current age or a period of gospel flourishing before Christ returns.",
    dispensational: "Tends toward premillennialism, especially dispensational premillennialism — a literal 1000-year reign of Christ on earth from Jerusalem, preceded by a rapture and tribulation.",
    color: PURPLE,
  },
];

const IMPLICATIONS_CONTENT = [
  { title: "The Bible as One Story", desc: "Covenant theology gives the Bible coherence. The OT is not a different religion; it is the preparation and anticipation of the same gospel. This shapes preaching (every text is part of one story leading to Christ) and study (understanding the OT's covenantal context unlocks its meaning).", color: GREEN },
  { title: "Understanding Old Testament Worship", desc: "Israel's sacrifices, feasts, priesthood, and tabernacle are not arbitrary — they are covenant signs pointing forward to their fulfillment in Christ. The book of Hebrews opens up the typological richness that covenant theology illuminates.", color: GOLD },
  { title: "Grounds for Christian Ethics", desc: "The Ten Commandments are the moral law of God expressed in covenantal terms — not abolished in Christ but fulfilled and confirmed. This gives covenant theology a strong basis for ongoing moral obligation rooted in God's character, not merely new covenant commands.", color: BLUE },
  { title: "Baptism and Church Membership", desc: "The covenant framework grounds the paedobaptist understanding of baptism (covenant sign for covenant children) and provides the theological context for church membership (entering the covenant community). Even credobaptists can affirm the covenantal context of baptism.", color: TEAL },
];

const VIDEOS = [
  { videoId: "A4VzA0oJPag", title: "Covenant Theology Explained — R.C. Sproul" },
  { videoId: "G3hR6m9YQXM", title: "The Covenant of Grace — Michael Horton" },
  { videoId: "oiLnl-hpxBE", title: "Biblical Covenants Overview — Tim Mackie" },
  { videoId: "InjrDHHt3P0", title: "Covenant vs. Dispensational Theology" },
  { videoId: "bz4FRbAFdxI", title: "The New Covenant — Jeremiah 31 Explained" },
];

export default function CovenantTheologyGuidePage() {
  const [tab, setTab] = usePersistedState<string>("vine_cov_tab", "overview");
  const [openCov, setOpenCov] = usePersistedState<string>("vine_cov_grace", "");
  const [openBib, setOpenBib] = usePersistedState<string>("vine_cov_bib", "");
  const [journal, setJournal] = usePersistedState<string>("vine_cov_journal", "");

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" };
  const accordionBtn = (open: boolean, color: string) => ({
    width: "100%", textAlign: "left" as const, display: "flex", justifyContent: "space-between",
    alignItems: "center", padding: "1rem 1.25rem", background: open ? `${color}12` : "transparent",
    border: `1px solid ${open ? color + "40" : BORDER}`, borderRadius: 12, cursor: "pointer", marginBottom: 8,
    color: TEXT, fontWeight: 700, transition: "all .2s",
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT , paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>📜</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: GOLD, textTransform: "uppercase" }}>Biblical Theology</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Covenant Theology: A Comprehensive Guide
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            Covenant theology is the Reformed framework for reading the whole Bible as a unified redemptive story — organized around God&apos;s covenants with humanity. Understanding it unlocks the deep unity of the Old and New Testaments and transforms how we read Scripture.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t.id ? GOLD : "transparent", color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? GOLD : BORDER}`, cursor: "pointer", transition: "all .18s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GOLD }}>Key Covenant Texts</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {COV_TEXTS.map((t) => (
                  <div key={t.ref} style={{ background: `${t.color}10`, border: `1px solid ${t.color}30`, borderRadius: 12, padding: "1rem 1.25rem", borderLeft: `3px solid ${t.color}` }}>
                    <span style={{ fontWeight: 800, color: t.color, fontSize: "0.85rem" }}>{t.ref}</span>
                    <p style={{ color: TEXT, lineHeight: 1.7, marginTop: "0.3rem" }}>{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...card }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GREEN }}>The Three Covenant Framework</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
                {[
                  { label: "Covenant of Redemption", desc: "Eternal intra-Trinitarian pact: Father elects, Son redeems, Spirit applies. The eternal foundation of salvation.", color: PURPLE },
                  { label: "Covenant of Works", desc: "God and Adam: obey and live; disobey and die. Adam failed; Christ succeeded as the second Adam.", color: GOLD },
                  { label: "Covenant of Grace", desc: "God and fallen humanity: 'I will be your God, you will be my people.' One covenant administered through Noah, Abraham, Moses, David, and fulfilled in Christ.", color: GREEN },
                ].map((item) => (
                  <div key={item.label} style={{ background: `${item.color}0A`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1rem" }}>
                    <div style={{ fontWeight: 800, color: item.color, marginBottom: "0.4rem" }}>{item.label}</div>
                    <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "what-is" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: BLUE }}>What Is a Covenant?</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "Definition", desc: "A covenant (Heb: berit; Gk: diatheke) is a solemn, binding commitment that establishes a relationship with specified obligations, consequences, and signs. Covenants in the ancient Near East were formal, legal-social structures — more than a contract (transactional), more like an adopted family relationship.", color: GOLD },
                { title: "Elements of a Covenant", desc: "Biblical covenants typically include: (1) parties — the covenant-makers; (2) conditions — the obligations; (3) promises — the blessings; (4) threats — the curses for violation; (5) a sign or seal — the visible ratification (rainbow, circumcision, Sabbath, temple, baptism/Supper).", color: BLUE },
                { title: "Conditional vs. Unconditional Covenants", desc: "Some covenants are conditional (Mosaic: 'if you obey... then I will bless'). Others appear unconditional (Abrahamic: God alone passes through the pieces in Gen 15; Davidic: 'Your house will endure forever'). Reformed theology holds that even 'unconditional' covenants have conditions fulfilled by the covenant mediator — Christ.", color: GREEN },
                { title: "Covenant Relationship Formula", desc: "'I will be your God and you will be my people' — this covenant formula (Lev 26:12; Jer 31:33; Rev 21:3) threads through the entire Bible. It is the summary of the covenant relationship: intimate personal belonging. Everything in the story works toward this.", color: TEAL },
              ].map((item) => (
                <div key={item.title} style={{ background: `${item.color}0A`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1.25rem" }}>
                  <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "covenant-works" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: GOLD }}>The Covenant Framework</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Reformed theology organizes redemptive history around three structural covenants that precede and ground all the biblical covenants.
            </p>
            {COVENANT_GRACE.map((item, i) => {
              const key = String(i);
              const open = openCov === key;
              return (
                <div key={item.title}>
                  <button type="button" style={accordionBtn(open, item.color)} onClick={() => setOpenCov(open ? "" : key)}>
                    <span>{item.title}</span>
                    <span style={{ color: item.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${item.color}0A`, border: `1px solid ${item.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "biblical-covenants" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: GREEN, margin: 0 }}>The Five Biblical Covenants</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              Five major covenants in Scripture — each a distinct administration of God&apos;s redemptive purposes, each pointing forward to their fulfillment in Christ.
            </p>
            {BIBLICAL_COVENANTS.map((cov, i) => {
              const key = String(i);
              const open = openBib === key;
              return (
                <div key={cov.name}>
                  <button type="button" style={accordionBtn(open, cov.color)} onClick={() => setOpenBib(open ? "" : key)}>
                    <span style={{ fontWeight: 800 }}>{cov.name} <span style={{ fontWeight: 400, color: MUTED, fontSize: "0.85rem" }}>— {cov.ref}</span></span>
                    <span style={{ color: cov.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${cov.color}0A`, border: `1px solid ${cov.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "0.5rem 1rem", marginBottom: "0.75rem" }}>
                        <span style={{ fontWeight: 700, color: cov.color }}>Parties:</span><span style={{ color: MUTED }}>{cov.parties}</span>
                        <span style={{ fontWeight: 700, color: cov.color }}>Sign:</span><span style={{ color: MUTED }}>{cov.sign}</span>
                      </div>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{cov.promise}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "new-covenant" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: RED, margin: 0 }}>The New Covenant</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              The new covenant is the fulfillment toward which all prior covenants pointed. Hebrews calls it &quot;better&quot; (7:22; 8:6) — not because the prior covenants were bad but because they were preparatory.
            </p>
            {NEW_COVENANT_CONTENT.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "dispensation" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: TEAL }}>Covenant Theology vs. Dispensationalism</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              These are the two major theological systems for reading the Bible as a whole. Both are evangelical and hold Scripture as authoritative; they differ in how they understand the relationship between the testaments.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr 1fr", gap: "0.5rem", background: `${MUTED}08`, borderRadius: 10, padding: "0.75rem" }}>
                <div style={{ fontWeight: 700, color: MUTED, fontSize: "0.82rem" }}>Aspect</div>
                <div style={{ fontWeight: 700, color: GREEN, fontSize: "0.82rem" }}>Covenant Theology</div>
                <div style={{ fontWeight: 700, color: BLUE, fontSize: "0.82rem" }}>Dispensationalism</div>
              </div>
              {DISPENSATIONALISM_COMPARE.map((row) => (
                <div key={row.aspect} style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr", gap: "0.75rem", background: `${row.color}08`, border: `1px solid ${row.color}20`, borderRadius: 10, padding: "0.75rem" }}>
                  <div style={{ fontWeight: 700, color: row.color, fontSize: "0.9rem" }}>{row.aspect}</div>
                  <div style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{row.covenant}</div>
                  <div style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{row.dispensational}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "implications" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: TEAL, margin: 0 }}>Practical Implications</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              Covenant theology is not merely academic — it transforms how we read Scripture, worship, preach, and understand Christian identity.
            </p>
            {IMPLICATIONS_CONTENT.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: PURPLE }}>Personal Reflection</h2>
            <p style={{ color: MUTED, marginBottom: "1rem" }}>How does understanding the Bible as one unified covenantal story change how you read the Old Testament? What aspect of covenant theology most challenges or enriches your faith?</p>
            <textarea
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 200, background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", outline: "none", boxSizing: "border-box" }}
            />
            {journal && <div style={{ marginTop: "0.75rem", fontSize: "0.82rem", color: MUTED }}>Auto-saved · {journal.length} characters</div>}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: TEAL }}>Video Teaching on Covenant Theology</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {[
            { label: "Dispensationalism", href: "/covenant-dispensationalism" },
            { label: "Kingdom of God", href: "/kingdom-of-god-guide" },
            { label: "Hermeneutics Guide", href: "/hermeneutics-guide" },
            { label: "Biblical Theology Primer", href: "/biblical-theology-primer" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ padding: "0.4rem 1rem", borderRadius: 999, fontSize: "0.82rem", fontWeight: 700, border: `1px solid ${BORDER}`, color: MUTED, textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
