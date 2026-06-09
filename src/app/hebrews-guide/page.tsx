"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "superior", label: "Jesus Superior" },
  { id: "priesthood", label: "High Priest" },
  { id: "covenant", label: "New Covenant" },
  { id: "warnings", label: "Warning Passages" },
  { id: "faith11", label: "Hebrews 11" },
  { id: "persevere", label: "Hebrews 12" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const SUPERIOR_ITEMS = [
  {
    id: "sup1",
    title: "Superior to Angels (Heb 1–2)",
    content: "Hebrews opens: \'In the past God spoke to our ancestors through the prophets at many times and in various ways, but in these last days he has spoken to us by his Son, whom he appointed heir of all things, and through whom also he made the universe\' (1:1–2). The Son is the radiance of God\'s glory, the exact representation of his being, sustaining all things by his powerful word. He is superior to angels — the messengers who mediated the old covenant (Acts 7:53; Gal 3:19). Seven OT quotations prove his divine Sonship (Ps 2:7; 2 Sam 7:14; Deut 32:43; Ps 104:4; Ps 45:6–7; Ps 102:25–27; Ps 110:1). Angels worship him. Yet he became fully human — \'made lower than the angels\' (2:9) to taste death for everyone.",
  },
  {
    id: "sup2",
    title: "Superior to Moses (Heb 3–4)",
    content: "Moses was faithful in God\'s house as a servant; Christ is faithful as the Son who is over the house (3:5–6). Moses pointed forward; Christ is the reality. Hebrews 3:7–4:11 expounds Psalm 95: Israel failed to enter God\'s rest (Canaan) through unbelief. The \'rest\' remains available: \'there remains, then, a Sabbath-rest for the people of God\' (4:9). The great warning: \'Do not harden your hearts as you did in the rebellion\' (3:15). The wilderness generation had seen miracles, heard God\'s voice, participated in the covenant — and still fell. The warning is to those who are already inside the covenant community.",
  },
  {
    id: "sup3",
    title: "Superior to the Levitical Priesthood (Heb 4:14–7:28)",
    content: "Jesus is the great high priest who has \'passed through the heavens\' (4:14) — not into an earthly sanctuary but into the very presence of God. He is able to sympathize with our weaknesses, having been tempted in every way as we are — yet without sin (4:15). He is appointed by God, not self-appointed (5:4–5; Ps 2:7 + Ps 110:4). He is in the order of Melchizedek — a priest-king before the Levitical system existed (Gen 14:18–20), whose priesthood is therefore eternal and superior to the Aaronic order that had a beginning and an end.",
  },
  {
    id: "sup4",
    title: "Superior to the Old Covenant Tabernacle (Heb 8–10)",
    content: "The earthly tabernacle and its priests were \'a copy and shadow of what is in heaven\' (8:5). The real tabernacle is in heaven, where Christ ministers. The old covenant was provisional: Jeremiah prophesied a new covenant (Jer 31:31–34) — quoted in full in Heb 8:8–12, the longest OT quotation in the NT. The fact that a new covenant was promised proves the first was inadequate (8:7). Christ entered the Most Holy Place once for all by his own blood — not by the blood of goats and bulls (9:12). \'Where there is a will, there must first be the death of the one who made it\' (9:16–17). His one sacrifice is permanently sufficient.",
  },
];

const PRIESTHOOD_ITEMS = [
  {
    title: "Melchizedek — the Eternal Priest-King",
    color: GOLD,
    body: "Melchizedek (Gen 14:18–20; Ps 110:4) was king of Salem (Jerusalem) and priest of God Most High who met Abraham returning from battle. He brought bread and wine, blessed Abraham, and received a tithe. Hebrews reads the silence of Genesis as theologically significant: no genealogy, no birth, no death — \'Without father or mother, without genealogy, without beginning of days or end of life, like the Son of God he remains a priest forever\' (Heb 7:3). Melchizedek is not eternal — but in the narrative he functions as a type of eternal priesthood. Jesus is a Melchizedekian priest — priest-king, eternal, superior to Abraham and the Levitical system.",
  },
  {
    title: "The Sympathetic High Priest",
    color: GREEN,
    body: "\'For we do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are — yet he did not sin. Let us then approach God\'s throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need\' (4:15–16). Jesus did not become human as a disguise — he genuinely experienced hunger, thirst, fatigue, loneliness, grief, temptation. He is the compassionate mediator who brings us to God not from a distance of divine indifference but from the inside of human experience. This is the pastoral heart of Hebrews.",
  },
  {
    title: "Once for All",
    color: TEAL,
    body: "The phrase \'once for all\' (hapax or ephapax) appears five times in Hebrews (7:27; 9:12; 9:26; 9:28; 10:10). Each repetition hammers home the contrast with the Levitical system: those priests offered sacrifices \'again and again\' (10:11) — standing because they never finished. Christ \'sat down at the right hand of God\' (10:12) because his work is complete. \'It is finished\' (John 19:30) — Hebrews is the theology behind those words. There is no supplementation needed, no further sacrifice required, no ongoing purgatorial refinement — one perfect offering, one complete atonement, permanent access.",
  },
  {
    title: "Intercession Now",
    color: PURPLE,
    body: "\'Therefore he is able to save completely those who come to God through him, because he always lives to intercede for them\' (7:25). Jesus not only died for us — he lives for us now, at the right hand of the Father, praying for us. This is simultaneously the most comforting and most disorienting truth in Hebrews: the risen, ascended Christ is actively interceding for you right now. When you cannot pray, he is praying. When you fail, he does not condemn (Rom 8:34) — he advocates (1 John 2:1). The Christian is never abandoned; they have a permanent Advocate in the highest court.",
  },
];

const COVENANT_ITEMS = [
  {
    id: "cov1",
    title: "The Better Covenant (Heb 8)",
    content: "The new covenant is \'enacted on better promises\' (8:6). The old covenant promised blessing for obedience; Israel could not meet the condition. Jeremiah\'s prophecy of the new covenant (Jer 31:31–34) promises something radically different: God will put his law in their minds and write it on their hearts; he will be their God and they will be his people; they will all know him from the least to the greatest; he will forgive their wickedness and remember their sins no more. The new covenant is not an improved version of Sinai — it is qualitatively different. The Mosaic covenant had external commandments; the new covenant writes them internally by the Spirit.",
  },
  {
    id: "cov2",
    title: "The Blood of the Covenant (Heb 9)",
    content: "Covenants are sealed with blood (9:18–22: \'Without the shedding of blood there is no forgiveness\'). The old covenant was inaugurated with the blood of sacrificed animals (Exod 24:5–8). The new covenant is inaugurated with Christ\'s own blood — not the blood of animals \'unable to clear the conscience\' (9:14) but the blood of one \'who through the eternal Spirit offered himself unblemished to God.\' This blood \'cleanses our consciences from acts that lead to death\' (9:14). The contrast is between external ritual purification (the old) and internal conscience cleansing (the new). The new covenant reaches deeper.",
  },
  {
    id: "cov3",
    title: "The Veil Torn (Heb 10:19–22)",
    content: "The most liberating passage in Hebrews: \'Therefore, brothers and sisters, since we have confidence to enter the Most Holy Place by the blood of Jesus, by a new and living way opened for us through the curtain, that is, his body, and since we have a great priest over the house of God, let us draw near to God with a sincere heart and with the full assurance that faith brings.\' The Most Holy Place — where only the High Priest could enter, only once a year, only with blood — is now open to all believers, always. The torn veil at the crucifixion (Matt 27:51) is the enacted event; Hebrews is the theology. Direct access to God for every believer.",
  },
  {
    id: "cov4",
    title: "The Threefold Exhortation (Heb 10:23–25)",
    content: "Based on this access, three imperatives: \'Let us hold unswervingly to the hope we profess, for he who promised is faithful.\' \'Let us consider how we may spur one another on toward love and good deeds.\' \'Not giving up meeting together, as some are in the habit of doing, but encouraging one another — and all the more as you see the Day approaching.\' The theological foundation (covenant access) produces practical community: holding to hope, spurring one another toward love, gathering regularly. The exhortation against forsaking assembly is motivated by eschatology — the Day is approaching. The community that gathers is the foretaste of the gathering of all things.",
  },
];

const WARNING_ITEMS = [
  {
    title: "Warning 1 — Drifting (Heb 2:1–4)",
    color: GOLD,
    body: "\'We must pay the most careful attention, therefore, to what we have heard, so that we do not drift away.\' The image is nautical: not a sudden storm but a gradual drift. If the word spoken through angels was binding and every violation was punished, how much more the word spoken through the Son? The warning is to those who have heard — it presupposes engagement with the gospel. Drifting is the passive failure: not active rebellion but neglect of \'such a great salvation.\' Lesson: the Christian life requires active engagement, not passive maintenance.",
  },
  {
    title: "Warning 2 — Unbelief (Heb 3:7–4:13)",
    color: GREEN,
    body: "The wilderness generation example. Despite the Exodus, the cloud and fire, the manna, they \'hardened their hearts\' and were unable to enter Canaan. \'See to it, brothers and sisters, that none of you has a sinful, unbelieving heart that turns away from the living God.\' The word of God is living and active, sharper than a double-edged sword — it judges the thoughts and attitudes of the heart (4:12). The warning: the same gospel that can save can be rejected, and the hardening is progressive. \'Encourage one another daily, as long as it is called \'Today\'\' (3:13).",
  },
  {
    title: "Warning 3 — Apostasy (Heb 6:4–8)",
    color: TEAL,
    body: "The most debated warning in Hebrews. Those who have been enlightened, tasted the heavenly gift, shared in the Holy Spirit, tasted the goodness of God\'s word and powers of the coming age — and then fallen away — cannot be renewed to repentance. The interpretive debate: (1) Arminian: describes genuine believers who truly apostatize; (2) Reformed: describes those with covenant privileges but not genuine saving faith (external experience, not regeneration); (3) Hypothetical: describes a possibility that cannot actually happen for the truly elect. All agree: the warning is severe, real, and aimed at those inside the covenant community. Comfortable presumption is the danger.",
  },
  {
    title: "Warning 5 — Refusing God\'s Voice (Heb 12:25–29)",
    color: PURPLE,
    body: "\'See to it that you do not refuse him who speaks.\' Those who refused Moses\'s word at Sinai did not escape; how much less will we if we reject the one who speaks from heaven? At Sinai, the earth shook; God has promised to shake not only earth but heaven — removing what can be shaken (created things) so that what cannot be shaken (the kingdom) remains. \'Therefore, since we are receiving a kingdom that cannot be shaken, let us be thankful, and so worship God acceptably with reverence and awe, for our God is a consuming fire.\' The culminating warning: respond to grace with reverent worship, or face the God who is fire.",
  },
];

const FAITH11 = [
  { name: "Abel", ref: "11:4", body: "By faith offered a better sacrifice than Cain. God commended him as righteous. Though he died, he still speaks — the first martyr, the first model of faith that costs everything." },
  { name: "Enoch", ref: "11:5", body: "By faith he was taken from this life so that he did not experience death. \'Before he was taken, he was commended as one who pleased God\' — the only way to please God is faith (v.6)." },
  { name: "Noah", ref: "11:7", body: "By faith he built an ark for things not yet seen. In holy fear he obeyed — and condemned the world by his contrast. \'The ark\' became heir of the righteousness that is in keeping with faith." },
  { name: "Abraham", ref: "11:8–19", body: "The great faith example: obeyed and went, not knowing where; lived as a foreigner; believed the resurrection (Isaac). He was \'looking forward to the city with foundations, whose architect and builder is God\' (v.10)." },
  { name: "Moses", ref: "11:24–28", body: "Refused to be called son of Pharaoh\'s daughter; chose to be mistreated with God\'s people rather than enjoy the pleasures of sin for a short time. He regarded disgrace for Christ\'s sake greater than Egypt\'s treasures." },
  { name: "Rahab", ref: "11:31", body: "By faith the prostitute Rahab welcomed the spies. Her faith was not sophisticated theology — it was a courageous bet on the God of Israel based on what she had heard. She is included by name in this hall of faith and in Matthew\'s genealogy of Jesus." },
];

const VIDEOS = [
  { videoId: "1fNWTZZwgbs", title: "The Book of Hebrews — BibleProject Overview" },
  { videoId: "JLDSXwbJRaA", title: "Hebrews Part 1 — BibleProject" },
  { videoId: "kE6SZ1ogOVU", title: "Hebrews Part 2 — BibleProject" },
  { videoId: "FiUWsBOD4jo", title: "Hebrews 11 — The Hall of Faith" },
  { videoId: "TL2zJzAVJFI", title: "Jesus as High Priest in Hebrews" },
  { videoId: "0q6yoKvjL04", title: "Melchizedek in Hebrews — Who Was He?" },
];

export default function HebrewsGuide() {
  const [activeTab, setActiveTab] = useLocalStorage("vine_heb_tab", "overview");
  const [openSup, setOpenSup] = useLocalStorage("vine_heb_sup", "");
  const [openCov, setOpenCov] = useLocalStorage("vine_heb_cov", "");
  const [journal, setJournal] = useLocalStorage("vine_heb_journal", "");

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>
        <div style={{ marginBottom: 8 }}>
          <span style={{ color: GOLD, fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Bible Study</span>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>The Book of Hebrews</h1>
        <p style={{ color: MUTED, marginBottom: 24, lineHeight: 1.6 }}>
          Hebrews is the New Testament&apos;s most sustained meditation on the person and work of Christ — presented as the fulfillment and replacement of everything in the OT. Jesus is better than angels, Moses, the Levitical priesthood, the tabernacle, and the old covenant. He is the great High Priest in the order of Melchizedek, whose one perfect sacrifice has opened permanent access to God for all who come to him in faith.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ padding: "8px 16px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
                background: activeTab === t.id ? GREEN : CARD,
                color: activeTab === t.id ? "#fff" : MUTED }}>
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Introduction to Hebrews</h2>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }}>
                Hebrews is an anonymous early Christian sermon (it calls itself &#8220;a word of exhortation&#8221; — 13:22, the same phrase used for a synagogue sermon in Acts 13:15) written to Jewish Christians facing pressure to return to Judaism. The argument is theological and pastoral: Christ is the fulfillment of everything Judaism promised. To return to the shadow when you have the substance is not faithfulness — it is regression.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>
                Authorship is unknown. Origen (3rd century): &#8220;But who wrote the epistle, only God knows the truth.&#8221; Candidates include Paul (unlikely — the Greek is too polished), Apollos (Luther&apos;s suggestion — an eloquent Alexandrian Jew; Acts 18:24), Priscilla (Harnack&apos;s suggestion), or Barnabas. The early church accepted it as authoritative regardless of authorship.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 12 }}>Structure: Argument and Exhortation Alternating</h3>
              {[
                "Ch 1–2: Christ superior to angels → Don\'t drift",
                "Ch 3–4: Christ superior to Moses → Don\'t harden your heart",
                "Ch 5–7: Christ the Melchizedekian High Priest",
                "Ch 8–10: New covenant, new sanctuary, once-for-all sacrifice → Hold fast",
                "Ch 11: The great cloud of witnesses (Hall of Faith)",
                "Ch 12: Run with endurance, fix your eyes on Jesus",
                "Ch 13: Practical exhortations and benediction",
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                  <span style={{ color: GOLD, fontWeight: 700, minWidth: 24 }}>{i + 1}.</span>
                  <span style={{ color: MUTED, lineHeight: 1.5 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "superior" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Jesus Is Superior</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>The word &#8220;better&#8221; (kreittōn) appears 13 times in Hebrews. The argument is cumulative: Jesus is better than every element of the old covenant system.</p>
            {SUPERIOR_ITEMS.map((item) => {
              const isOpen = openSup === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenSup(isOpen ? "" : item.id)}
                    style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontWeight: 700 }}>{item.title}</span>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.7 }}>{item.content}</div>}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "priesthood" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Jesus as High Priest</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {PRIESTHOOD_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "covenant" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>The New Covenant</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>Hebrews 8–10 is the NT&apos;s most extended exposition of the new covenant — what it is, why the old was insufficient, and what Christ&apos;s blood has accomplished.</p>
            {COVENANT_ITEMS.map((item) => {
              const isOpen = openCov === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenCov(isOpen ? "" : item.id)}
                    style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontWeight: 700 }}>{item.title}</span>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.7 }}>{item.content}</div>}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "warnings" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>The Warning Passages</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>Hebrews contains five major warning passages — among the most sobering texts in the NT. They are addressed to those within the covenant community and warn against specific forms of spiritual regression.</p>
            <div style={{ display: "grid", gap: 16 }}>
              {WARNING_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "faith11" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Hebrews 11 — The Hall of Faith</h2>
            <p style={{ color: MUTED, marginBottom: 16, lineHeight: 1.6 }}>\'Now faith is confidence in what we hope for and assurance about what we do not see\' (11:1). Hebrews 11 demonstrates that faith has always been the way of relationship with God — OT saints lived and died in faith, \'not having received the things promised\' but seeing them from a distance. Their faith makes them witnesses to us as we run.</p>
            <div style={{ display: "grid", gap: 12 }}>
              {FAITH11.map((person, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ background: GOLD, color: "#000", fontWeight: 700, padding: "2px 8px", borderRadius: 6, fontSize: 13, flexShrink: 0 }}>{person.ref}</div>
                    <div>
                      <div style={{ fontWeight: 700, marginBottom: 4 }}>{person.name}</div>
                      <p style={{ color: MUTED, lineHeight: 1.6, fontSize: 14 }}>{person.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${TEAL}40`, borderRadius: 12, padding: 20, marginTop: 16, borderLeft: `4px solid ${TEAL}` }}>
              <h3 style={{ fontWeight: 700, color: TEAL, marginBottom: 8 }}>The Promise Not Yet Fulfilled (11:39–40)</h3>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>\'These were all commended for their faith, yet none of them received what had been promised, since God had planned something better for us so that only together with us would they be made perfect.\' These heroes of faith were looking forward to what we have received. They died in faith — still trusting in promises they could not yet see fulfilled. Now that Christ has come, we are the generation they were waiting for. We share in their inheritance; they are made perfect with us.</p>
            </div>
          </div>
        )}

        {activeTab === "persevere" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Hebrews 12 — Run with Endurance</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {[
                { title: "\'Fix Your Eyes on Jesus\' (12:1–3)", color: GOLD, body: "\'Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith.\' The cloud of witnesses (Heb 11) is the stadium cheering us on. The race metaphor: distance running, not sprinting — requires shedding weight, choosing the right pace, staying on course. The single focus: Jesus. Not the race, not the crowd, not your performance — but the one who ran the race before you and is now at the finish line." },
                { title: "The Discipline of God (12:4–13)", color: GREEN, body: "Suffering as divine discipline: \'the Lord disciplines the one he loves, and he chastens everyone he accepts as his son\' (Prov 3:11–12). Suffering is not evidence of abandonment but of sonship — God treats us as children, not strangers. The gymnasium metaphor: painful training produces a harvest of righteousness and peace for those trained by it. The exhortation: \'Therefore, strengthen your feeble arms and weak knees. Make level paths for your feet, so that the lame may not be disabled, but rather healed.\' Endurance serves others — your steadiness under suffering helps weaker believers." },
                { title: "You Have Come to Mount Zion (12:18–24)", color: TEAL, body: "The contrast: you have not come to the terrifying mount (Sinai — fire, darkness, storm, the voice that Moses asked to silence) but to Mount Zion, to the heavenly Jerusalem, to myriads of angels in joyful assembly, to the church of the firstborn, to God the judge of all, to the spirits of the righteous made perfect, to Jesus the mediator of a new covenant, and to the sprinkled blood that speaks a better word than Abel\'s blood. This is the believer\'s present status — already arrived at the heavenly Jerusalem through faith in Christ." },
                { title: "Practical Exhortations (Heb 13)", color: PURPLE, body: "Love for fellow Christians. Hospitality to strangers (\'some have entertained angels without knowing it\' — 13:2). Care for prisoners. Sexual faithfulness in marriage. Freedom from the love of money (\'Never will I leave you; never will I forsake you\' — 13:5). Remember your leaders who spoke the word of God; imitate their faith. \'Jesus Christ is the same yesterday and today and forever\' (13:8). Offer sacrifices of praise — the fruit of lips that confess his name. Share with others and do good — these are the sacrifices God is pleased with. The beautiful benediction: \'May the God of peace... equip you with everything good for doing his will\' (13:20–21)." },
              ].map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: 16, lineHeight: 1.6 }}>What does it mean to you that Jesus sympathizes with your weaknesses? Is there any area where you are tempted to drift or harden your heart?</p>
            <textarea value={journal} onChange={(e) => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 200, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, color: TEXT, fontSize: 15, lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }} />
            <p style={{ color: MUTED, fontSize: 12, marginTop: 8 }}>Saved locally to your device.</p>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Video Teaching</h2>
            <div style={{ display: "grid", gap: 20 }}>
              {VIDEOS.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                  </div>
                  <div style={{ padding: "12px 16px" }}>
                    <p style={{ color: TEXT, fontWeight: 600, fontSize: 14 }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
