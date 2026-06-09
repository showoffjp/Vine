"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { BookOpen, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";

const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const BLUE = "#3B82F6";
const AMBER = "#F59E0B";
const TEAL = "#0D9488";
const MUTED = "#9898B3";
const TEXT = "#F2F2F8";

const TABS = ["overview", "covenant", "dispensational", "new-covenant", "israel", "practical", "voices", "journal"] as const;
type Tab = (typeof TABS)[number];

const COVENANT_FRAMEWORK = [
  { covenant: "Covenant of Works / Creation", parties: "God and Adam", terms: "Perfect obedience for life; disobedience for death. Adam is federal head of all humanity.", ref: "Genesis 2:15–17; Hosea 6:7; Romans 5:12" },
  { covenant: "Covenant of Grace", parties: "God and fallen humanity in Christ", terms: "God promises salvation through the seed of the woman — Christ. All subsequent covenants are administrations of this one covenant.", ref: "Genesis 3:15; Galatians 3:15–29" },
  { covenant: "Noahic Covenant", parties: "God and all creation", terms: "God preserves creation until judgment. Rainbow as sign. Universal scope.", ref: "Genesis 9:8–17" },
  { covenant: "Abrahamic Covenant", parties: "God and Abraham", terms: "Land, descendants, blessing to all nations. Fulfilled ultimately in Christ and the church (the true offspring of Abraham, Gal 3:29).", ref: "Genesis 12:1–3; 15; 17; Galatians 3:6–29" },
  { covenant: "Mosaic Covenant", parties: "God and Israel at Sinai", terms: "A national, typological covenant pointing to Christ. The law reveals sin and serves as a tutor to Christ. The old covenant is fulfilled and superseded by the new.", ref: "Exodus 19–24; Galatians 3:19–25; Hebrews 8–10" },
  { covenant: "Davidic Covenant", parties: "God and David", terms: "An eternal throne for David's son — fulfilled ultimately in Christ, the eternal king.", ref: "2 Samuel 7:12–16; Luke 1:32–33; Acts 2:29–36" },
  { covenant: "New Covenant", parties: "God and all who trust in Christ", terms: "The ultimate fulfillment of the covenant of grace: law written on hearts, complete forgiveness, universal knowledge of God. Ratified by Christ's blood.", ref: "Jeremiah 31:31–34; Hebrews 8–10; Luke 22:20" },
];

const DISPENSATIONAL_DISPENSATIONS = [
  { name: "1. Innocency", period: "Creation to Fall", desc: "Adam and Eve in the garden — responsible for obedience; tested by the tree of knowledge." },
  { name: "2. Conscience", period: "Fall to Flood", desc: "Humans governed by conscience; failed catastrophically, leading to the Flood judgment." },
  { name: "3. Human Government", period: "Flood to Babel", desc: "God delegates governance to humanity; humans unite in rebellion at Babel." },
  { name: "4. Promise", period: "Abraham to Moses", desc: "God establishes his covenant promises to Abraham and his descendants." },
  { name: "5. Law", period: "Moses to Pentecost", desc: "Israel governed by the Mosaic Law as God's chosen nation. Failure leads to exile and ultimately the cross." },
  { name: "6. Grace / Church Age", period: "Pentecost to Rapture", desc: "The current age: the church (Gentiles and Jewish believers) governed by grace. God's program for Israel is 'paused' during this parenthesis." },
  { name: "7. Millennium", period: "Christ's Return to Final Judgment", desc: "Christ reigns on earth for 1,000 years, fulfilling the OT promises to national Israel. Jerusalem is the capital. The Temple is rebuilt." },
];

const KEY_DIFFERENCES = [
  { topic: "The Church and Israel", covenant: "The church IS Israel in its truest fulfillment. The promises to Abraham are inherited by all who are in Christ — 'Abraham's seed, heirs according to the promise' (Gal 3:29). There is one people of God across all ages, administered differently.", disp: "Israel and the church are two distinct peoples with two distinct programs. God has temporarily set aside his program with national Israel (the 'mystery' of Romans 11) and is now working through the church. He will return to Israel in the millennium." },
  { topic: "The Land Promises", covenant: "The land promises to Abraham pointed ultimately to 'a better country — a heavenly one' (Hebrews 11:16). Their spiritual fulfillment in Christ is greater than a narrow geographical fulfillment. The NT never applies land promises to a future reconstituted nation.", disp: "The land promises to Israel are literal and must be literally fulfilled. The modern state of Israel may be part of this prophetic fulfillment. National Israel will inherit the land in the millennium." },
  { topic: "The Rapture", covenant: "Most covenant theologians are amillennial or postmillennial — they do not hold a pre-tribulation rapture. Christ's return is a single, climactic event at the end of history.", disp: "Most dispensationalists hold a pre-tribulation rapture: the church is taken out before the 7-year great tribulation, during which God resumes his program with national Israel." },
  { topic: "The Millennium (Revelation 20)", covenant: "Amillennial: the 1,000 years symbolizes the entire church age — Christ reigns spiritually from heaven through the church. Postmillennial: the church will increasingly Christianize the world before Christ returns.", disp: "Premillennial: Christ returns before the millennium and reigns literally on earth for 1,000 years. The millennium fulfills OT promises to Israel." },
  { topic: "The Mosaic Law for Christians", covenant: "The entire Mosaic covenant is fulfilled in Christ. The moral law (natural law, summarized in the Ten Commandments) remains binding. The ceremonial and civil law is fulfilled/abolished in Christ.", disp: "The law was given to Israel specifically during the Law dispensation. Christians are under grace, not law — though the NT contains its own imperatives. The distinction between moral/ceremonial/civil law is often maintained differently." },
  { topic: "How Many People/Covenants of God", covenant: "One covenant of grace, one people of God (elect across all ages), progressively administered through multiple biblical covenants.", disp: "Multiple distinct groups (Israel, church, tribulation saints, millennium saints) and multiple distinct covenants with different terms for each." },
];

const VOICES = [
  { name: "Louis Berkhof", view: "Covenant Theology", color: BLUE, work: "Systematic Theology; Introduction to Systematic Theology", note: "Standard Reformed systematic theology. His treatment of the covenants remains definitive for many in the Reformed tradition." },
  { name: "O. Palmer Robertson", view: "Covenant Theology", color: BLUE, work: "The Christ of the Covenants", note: "Accessible and exegetically careful treatment of covenant theology across the whole Bible. A standard reference." },
  { name: "C.I. Scofield", view: "Dispensationalism", color: AMBER, work: "The Scofield Reference Bible (1909)", note: "His annotated Bible popularized dispensationalism across American evangelicalism. Millions of American evangelicals learned their theology from the Scofield notes." },
  { name: "Lewis Sperry Chafer", view: "Dispensationalism", color: AMBER, work: "Systematic Theology (8 vols.)", note: "Founder of Dallas Theological Seminary; the most comprehensive systematic theology from a classical dispensationalist perspective." },
  { name: "John MacArthur", view: "Dispensationalism", color: AMBER, work: "The MacArthur Study Bible", note: "Represents a classic dispensationalism that has remained influential in conservative evangelical and fundamentalist circles. His study Bible is widely used." },
  { name: "Michael Horton", view: "Covenant Theology", color: BLUE, work: "Introducing Covenant Theology; God of Promise", note: "Westminster Seminary California professor. His popular-level books have made covenant theology accessible to a new generation." },
  { name: "Vern Poythress & Craig Blomberg", view: "Progressive Covenantalism", color: TEAL, work: "Kingdom Through Covenant (Gentry & Wellum)", note: "A mediating position: shares covenant theology's hermeneutics but recognizes more discontinuity between old and new covenants than classical covenant theology." },
];

const VIDEOS = [
  { id: "xv0-2ER96UA", title: "Covenant Theology Explained — Michael Horton" },
  { id: "gldNB2BPYIE", title: "What Is Dispensationalism? — John MacArthur" },
  { id: "hYXCNhsEZns", title: "Covenant vs Dispensationalism — Key Differences" },
  { id: "QQjKb2bhQts", title: "The Role of Israel in God's Plan — Both Views" },
];

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

export default function CovenantDispPage() {
  const [tab, setTab] = useLocalStorage("vine_covdisp_tab", "overview");
  const [expandedDiff, setExpandedDiff] = useLocalStorage("vine_covdisp_diff", "");
  const [journalView, setJournalView] = useLocalStorage("vine_covdisp_view", "");
  const [journalQuestion, setJournalQuestion] = useLocalStorage("vine_covdisp_question", "");

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: "#07070F", color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      {/* Header */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
        <Link href="/dashboard" style={{ color: MUTED, display: "flex", alignItems: "center" }}>
          <ArrowLeft size={18} />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: BLUE + "22", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BookOpen size={18} color={BLUE} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 17 }}>Covenant Theology vs. Dispensationalism</div>
            <div style={{ color: MUTED, fontSize: 12 }}>Two frameworks for reading the whole Bible — Israel, church, end times</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "0 20px", display: "flex", gap: 2, overflowX: "auto" }}>
        {TABS.map((t) => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "12px 9px", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${BLUE}` : "2px solid transparent", color: tab === t ? TEXT : MUTED, fontWeight: tab === t ? 600 : 400, fontSize: 12, cursor: "pointer", whiteSpace: "nowrap" }}>
            {t === "covenant" ? "Covenant" : t === "dispensational" ? "Dispensational" : t === "new-covenant" ? "New Covenant" : t === "israel" ? "Israel & Church" : t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <div style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>

        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Two Ways of Reading the Bible's Story</h2>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              These two frameworks are not just different views on end times — they represent fundamentally different ways of understanding how the whole Bible fits together, how God relates to Israel and the church, and how we should read OT prophecy.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
              <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${BLUE}44`, padding: 16 }}>
                <div style={{ color: BLUE, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>COVENANT THEOLOGY</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>God works through one unified covenant of grace across all of history. The church is the true Israel — the fulfillment of OT promises. Christ's first coming is the climax; the new covenant is final.</p>
              </div>
              <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${AMBER}44`, padding: 16 }}>
                <div style={{ color: AMBER, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>DISPENSATIONALISM</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>God works through distinct periods (dispensations) with different rules for each. Israel and the church are distinct programs. OT prophecies to Israel will be literally fulfilled in a future millennium.</p>
              </div>
            </div>
            <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Why This Matters</div>
              <ul style={{ fontSize: 13, color: MUTED, margin: 0, paddingLeft: 16, lineHeight: 1.8 }}>
                <li>How you read OT promises (literal or typological/spiritual fulfillment)</li>
                <li>Whether the church is a 'parenthesis' in God's plan for Israel or the fulfillment of it</li>
                <li>Whether there will be a future restored Jewish state and temple</li>
                <li>Whether modern Israel has prophetic significance</li>
                <li>Pre-tribulation rapture vs. amillennialism vs. postmillennialism</li>
                <li>How the Mosaic Law relates to the Christian life</li>
              </ul>
            </div>
          </div>
        )}

        {tab === "covenant" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Covenant Theology</h2>
            <p style={{ color: BLUE, fontSize: 12, marginBottom: 16 }}>Classic Reformed position: Presbyterian, Dutch Reformed, many Anglican, Westminster Confession traditions</p>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>Covenant theology sees the Bible as telling one unified story held together by the covenant of grace — God's promise to save his people through Christ. All the individual biblical covenants are administrations of this one overarching covenant.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {COVENANT_FRAMEWORK.map((c, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BLUE}33`, padding: 14 }}>
                  <div style={{ fontWeight: 700, fontSize: 13, color: BLUE, marginBottom: 4 }}>{c.covenant}</div>
                  <div style={{ fontSize: 11, color: MUTED, marginBottom: 4 }}>Parties: <span style={{ color: TEXT }}>{c.parties}</span></div>
                  <p style={{ fontSize: 12, color: MUTED, margin: "0 0 6px" }}>{c.terms}</p>
                  <span style={{ fontSize: 11, color: GREEN }}>{c.ref}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "dispensational" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Dispensationalism</h2>
            <p style={{ color: AMBER, fontSize: 12, marginBottom: 16 }}>Popular among Baptists, Pentecostals, fundamentalists; Dallas Theological Seminary tradition</p>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>Dispensationalism reads the Bible as a series of distinct economies (dispensations) in which God tests humanity under different conditions. The key distinction is between Israel (national, physical) and the church (spiritual, multiethnic).</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {DISPENSATIONAL_DISPENSATIONS.map((d, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${AMBER}33`, padding: 14, display: "flex", gap: 12 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: AMBER + "22", border: `2px solid ${AMBER}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: AMBER, fontWeight: 700, fontSize: 12 }}>{i + 1}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{d.name}</div>
                    <div style={{ color: AMBER, fontSize: 11, marginBottom: 4 }}>{d.period}</div>
                    <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "new-covenant" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>New Covenant Theology / Progressive Covenantalism</h2>
            <p style={{ color: TEAL, fontSize: 12, marginBottom: 16 }}>A mediating position that has grown significantly in recent decades</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { title: "What It Is", body: "New Covenant Theology (Tom Wells, Fred Zaspel, John Reisinger) and Progressive Covenantalism (Gentry & Wellum's Kingdom Through Covenant) are mediating positions that agree with covenant theology's rejection of dispensationalism's Israel-church distinction but argue classic covenant theology imports too much continuity between old and new covenants." },
                { title: "How It Differs from Covenant Theology", body: "New covenant theologians reject the three-fold division of the Mosaic Law into moral, civil, and ceremonial. The entire Mosaic covenant is abrogated in Christ; Christians are not under the Mosaic law at all but under the law of Christ. The Ten Commandments are re-affirmed in the New Testament but as new covenant law, not as carried over from Sinai." },
                { title: "How It Differs from Dispensationalism", body: "New covenant theologians reject the Israel-church distinction. The church is the true Israel. OT promises find their fulfillment in Christ and his body, not in a future national Israel. The old covenant types (temple, priesthood, sacrifice) are fulfilled and superseded." },
                { title: "Key Text: Hebrews", body: "The book of Hebrews is central: it explicitly teaches that the old covenant is 'obsolete and aging' (8:13), that Christ's priesthood supersedes Levi's, that the new covenant is enacted on better promises, and that the sacrificial system is 'abolished' (10:9). The supersessionist reading of Hebrews is more radical than covenant theology and less dispensationalist than classical dispensationalism." },
              ].map((p, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${TEAL}33`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: TEAL, marginBottom: 8 }}>{p.title}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "israel" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Israel, the Church, and the Land</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>The central dividing point between covenant theology and dispensationalism.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {KEY_DIFFERENCES.map((d) => {
                const isOpen = expandedDiff === d.topic;
                return (
                  <div key={d.topic} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}` }}>
                    <button onClick={() => setExpandedDiff(isOpen ? "" : d.topic)} style={{ width: "100%", background: "none", border: "none", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}>
                      <span style={{ fontWeight: 600, fontSize: 14, textAlign: "left" }}>{d.topic}</span>
                      {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 16px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
                        <div style={{ background: BLUE + "11", borderLeft: `3px solid ${BLUE}`, padding: "8px 12px", borderRadius: "0 6px 6px 0" }}>
                          <div style={{ color: BLUE, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>COVENANT THEOLOGY</div>
                          <p style={{ fontSize: 12, color: "#BFDBFE", margin: 0 }}>{d.covenant}</p>
                        </div>
                        <div style={{ background: AMBER + "11", borderLeft: `3px solid ${AMBER}`, padding: "8px 12px", borderRadius: "0 6px 6px 0" }}>
                          <div style={{ color: AMBER, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>DISPENSATIONALISM</div>
                          <p style={{ fontSize: 12, color: "#FEF3C7", margin: 0 }}>{d.disp}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "practical" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Practical Differences</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { title: "End Times Expectations", body: "Covenant theology (typically amillennial) sees the end times as already underway — the church age is the last days. No pre-tribulation rapture. One coming of Christ. Dispensationalism expects the rapture, 7-year tribulation, and literal millennium." },
                { title: "The Modern State of Israel", body: "Covenant theology generally holds the modern state of Israel has no special prophetic significance — it is a political state like any other. Dispensationalism may see it as the fulfillment of prophecy and a sign of the approaching millennium. This has significant implications for political theology and the Middle East." },
                { title: "Reading the Psalms and Prophets", body: "Covenant theology reads OT prophecies about the land, temple, and Davidic throne as fulfilled in Christ and the church. Dispensationalism reads them as awaiting literal fulfillment in the millennium — a rebuilt temple, restored Davidic throne, national Israel in the land." },
                { title: "Sunday School and Study Bibles", body: "The Scofield and Ryrie Study Bibles have made dispensationalism the default framework for millions of American evangelicals. Many Christians inherit dispensationalism without knowing it by name — through Left Behind novels, prophecy conferences, and standard evangelical Bible tools." },
              ].map((p, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{p.title}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Key Voices</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {VOICES.map((v, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${v.color}33`, padding: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                    <span style={{ background: v.color + "22", color: v.color, borderRadius: 20, padding: "2px 8px", fontSize: 10, fontWeight: 700 }}>{v.view.toUpperCase()}</span>
                  </div>
                  <div style={{ color: v.color, fontSize: 11, fontWeight: 600, marginBottom: 6 }}>{v.work}</div>
                  <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{v.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Personal Reflection</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Saved to your device only.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>Which framework were you raised in? How has it shaped how you read the Bible and understand prophecy?</label>
                <textarea value={journalView} onChange={(e) => setJournalView(e.target.value)} placeholder="My church background is… I grew up thinking about Israel and the end times as… I now wonder…" rows={4} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>What questions does this topic raise for you about how to read the Old Testament?</label>
                <textarea value={journalQuestion} onChange={(e) => setJournalQuestion(e.target.value)} placeholder="The question this raises for me is… I've never understood why… The passage that most challenges my view is…" rows={3} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              {(journalView || journalQuestion) && (
                <p style={{ fontSize: 11, color: MUTED, textAlign: "center" }}>Saved automatically to your device.</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Videos */}
      <div style={{ padding: "0 20px", maxWidth: 720, margin: "0 auto" }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, color: MUTED }}>Video Teaching</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
          {VIDEOS.map((v) => (
            <div key={v.id} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
              <VideoEmbed videoId={v.id} title={v.title} />
              <div style={{ padding: "8px 10px" }}>
                <p style={{ fontSize: 11, fontWeight: 600, margin: 0 }}>{v.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related */}
      <div style={{ padding: "0 20px 32px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 16 }}>
          <p style={{ fontSize: 12, color: MUTED, marginBottom: 10 }}>Related Topics</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "Eschatology Views", href: "/eschatology-views" },
              { label: "Book of Revelation", href: "/book-of-revelation" },
              { label: "Reformed Theology", href: "/reformed-theology" },
              { label: "End Times", href: "/end-times" },
              { label: "OT Survey", href: "/old-testament-survey" },
            ].map((r) => (
              <Link key={r.href} href={r.href} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 12px", fontSize: 12, color: MUTED }}>
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
