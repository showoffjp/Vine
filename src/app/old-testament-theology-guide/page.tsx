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
const BLUE = "#3B82F6";

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
  { id: "reading", label: "Reading the OT" },
  { id: "covenants", label: "OT Covenants" },
  { id: "typology", label: "Typology" },
  { id: "law", label: "The Law Today" },
  { id: "psalms-prophets", label: "Psalms & Prophets" },
  { id: "promises", label: "OT Promises" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const READING_ITEMS = [
  { color: GREEN, title: "The OT Is Christian Scripture", body: "The Old Testament is not a historical preamble to the 'real' Bible — it is two-thirds of the Christian Bible and the foundation on which the New Testament stands. Jesus's most common citation: 'It is written' — always quoting the OT. Paul's gospel is explicitly from the OT: 'Christ died for our sins according to the Scriptures' (1 Cor 15:3). The NT writers were Jewish scholars who had memorized the OT and saw Jesus as its fulfillment. To know Jesus properly, Christians must know the OT." },
  { color: BLUE, title: "Christotelic Reading", body: "Luke 24:27: 'beginning with Moses and all the Prophets, he explained to them what was said in all the Scriptures concerning himself.' Jesus interpreted the entire OT as pointing to himself. Not every passage is a direct prophecy, but the whole narrative arc — creation, fall, covenant, exodus, kingdom, exile, restoration — finds its goal (Greek: telos) in Christ. Christotelic reading (the OT ends in/at Christ) differs from allegory (projecting NT meanings into OT texts) — it follows the text's own trajectory." },
  { color: GOLD, title: "The Two-Horizon Problem", body: "Interpreting the OT requires bridging two horizons: the original historical horizon (what did this mean to its first audience in its ancient near eastern context?) and the canonical horizon (how does this passage function in the larger biblical story?). Good OT interpretation honors both. Ignoring the first produces allegory; ignoring the second produces a decontextualized history that misses the theological purpose. The canonical horizon is not imposed on the text from outside — it was there from the beginning in the intentional structure of the canon." },
  { color: TEAL, title: "Progressive Revelation", body: "God did not reveal everything at once. The pattern in Scripture is progressive revelation: later texts build on, clarify, and sometimes reinterpret earlier ones. The Mosaic law is a fuller revelation than the Abrahamic covenant; the prophets call Israel back to covenant faithfulness while also revealing its eschatological fulfillment; the NT is the fullest revelation in the person of Jesus. Hebrews 1:1-2 is the summary: 'In the past God spoke to our ancestors through the prophets at many times and in various ways, but in these last days he has spoken to us by his Son.'" },
];

const COVENANT_ITEMS = [
  {
    id: "noah",
    label: "Noahic Covenant (Genesis 8-9)",
    content: "After the flood, God establishes a covenant with Noah — and through him with all creation. The sign is the rainbow. The covenant is unconditional and universal: God will not again destroy the earth by flood. This is the foundational promise that creation itself is preserved for redemption — the world remains a theater for God's saving purposes. The Noahic covenant establishes the value of human life (capital punishment as the expression of the image of God — 9:6) and the legitimacy of human government.",
  },
  {
    id: "abraham",
    label: "Abrahamic Covenant (Genesis 12, 15, 17)",
    content: "The call of Abraham (12:1-3) is the watershed of redemptive history: God will make Abraham into a great nation, give him a land, bless him, and through him bless all the families of the earth. Genesis 15 formalizes the covenant: the animal-cutting ceremony with God passing through as a smoking pot — God alone takes the covenant oath, making it unconditional. Genesis 17 adds the sign of circumcision. Paul interprets this in Romans 4 and Galatians 3: the Abrahamic covenant is the gospel pre-announced — justification by faith — the framework into which Christ fits.",
  },
  {
    id: "mosaic",
    label: "Mosaic / Sinai Covenant (Exodus 19-24)",
    content: "The Sinai covenant is the national covenant God makes with Israel at the exodus. Israel becomes God's 'kingdom of priests and a holy nation' (19:6). The Ten Commandments and the case laws (Exodus 20-23) define the terms. The pattern is: redemption first, then law (Israel is saved from Egypt before given the law — not saved by the law). This distinguishes the Mosaic covenant from works-righteousness: the law defines covenant faithfulness for a people already in covenant. The prophets later diagnose Israel's failure as covenant infidelity and anticipate a new covenant that writes the law on the heart.",
  },
  {
    id: "davidic",
    label: "Davidic Covenant (2 Samuel 7; Psalm 89)",
    content: "God's covenant with David: his son will build the temple; God will establish his throne forever; when he sins, God will discipline him but not withdraw his covenant love; David's house, kingdom, and throne will endure forever (2 Sam 7:16). This is the messianic foundation of the OT: the eternal king from David's line. Every king after David is evaluated against the standard of David's faithfulness. The exile appears to shatter the covenant — but the prophets anticipate a David who will truly fulfill it: the Branch (Jer 33:15), the Servant (Isa 42-53), the Son of Man (Dan 7).",
  },
  {
    id: "new",
    label: "New Covenant (Jeremiah 31; Ezekiel 36)",
    content: "Jeremiah 31:31-34 is the OT's own announcement that the Mosaic covenant will be replaced: 'I will put my law in their minds and write it on their hearts. I will be their God, and they will be my people.' The new covenant features: (1) Internal law, not external; (2) Universality — from least to greatest all shall know God; (3) Complete forgiveness — 'I will remember their sins no more.' Ezekiel 36:26-27 adds the Spirit: 'I will give you a new heart and put a new spirit in you.' Jesus says at the Last Supper: 'This cup is the new covenant in my blood' (Luke 22:20).",
  },
];

const TYPOLOGY_ITEMS = [
  { title: "What Is Typology?", color: GREEN, body: "A type is an OT person, institution, or event that God designed to foreshadow something greater that would come in the fullness of time (the antitype). Types are not allegories imposed on the text from outside — they reflect the intentional design of a sovereign God who authored the whole story. The Passover lamb is a type of Christ (1 Cor 5:7); the tabernacle/temple is a type of Christ's body (John 2:21) and the new creation (Rev 21); the Mosaic priesthood is a type of Christ's high priesthood (Hebrews). The NT explicitly interprets many OT figures as types." },
  { title: "Persons as Types", color: BLUE, body: "Adam is the first type: 'a pattern of the one to come' (Rom 5:14) — Christ as the last Adam restoring what the first Adam lost. Melchizedek (Gen 14) is a type of Christ's eternal, non-Levitical priesthood (Hebrews 7). Moses is a type: Israel's deliverer, lawgiver, mediator — Christ as the greater Moses (Deut 18:15-18; Acts 3:22; Hebrews 3). David: king, shepherd, man of sorrows — Christ as the greater David (Ezekiel 34:23-24; Luke 1:32). The types are not arbitrary — they reflect the pattern God built into the story." },
  { title: "Institutions as Types", color: GOLD, body: "The tabernacle/temple is one of the richest types: it is the place where heaven and earth overlap, where God dwells among his people. The whole sacrificial system — daily offerings, Passover, Day of Atonement — foreshadows Christ's once-for-all sacrifice (Hebrews 9-10). The Sabbath is a type of eschatological rest (Hebrews 4). The Jubilee is a type of Christ's proclamation of the year of the Lord's favor (Luke 4:18-21; Isaiah 61). The exodus is the type of redemption: God's powerful deliverance from slavery into covenant — fulfilled in Christ's death and resurrection." },
  { title: "Events as Types", color: TEAL, body: "The flood is a type: judgment and salvation through water — 1 Peter 3:20-21 draws the baptism parallel. The wilderness wandering is a type: the people of God on the way through the desert to the promised land — the church in the present age (1 Cor 10:1-13). The exile and return are types: death and resurrection at the corporate level — the prophets see the great return from exile as a new exodus. The pattern: sin → judgment → suffering → redemption → return — is the deep grammar of the whole OT, fulfilled in Christ's death and resurrection." },
];

const LAW_VIEWS = [
  { title: "The Three Uses of the Law", color: PURPLE, body: "Lutheran and Reformed theology distinguishes three uses: (1) Civil use — the law restrains sin in society; (2) Pedagogical use — the law reveals sin and drives sinners to Christ (Gal 3:24); (3) Normative use — the law guides the behavior of the redeemed (disputed by Lutherans). All three uses are compatible with justification by faith because the law is never the ground of salvation — it is the definition of covenant obedience for those already in covenant." },
  { title: "The Tripartite Division", color: GOLD, body: "Most Reformed theologians divide the Mosaic law into three categories: moral (timeless ethical principles, summarized in the Ten Commandments), civil (the case laws for Israel as a nation-state — expired with Israel's theocracy), and ceremonial (the worship regulations — fulfilled and therefore expired in Christ). Critics argue this division is imposed on the text; proponents argue it reflects the NT's own treatment of the law, which abolishes circumcision and dietary laws but maintains the Ten Commandments as binding." },
  { title: "New Covenant Ethics", color: TEAL, body: "Many NT scholars argue the new covenant replaces all Mosaic law and that new covenant ethics are derived entirely from Christ's teaching and the apostles' instruction. Certain Mosaic commandments are reaffirmed in the NT (nine of the Ten Commandments appear explicitly in the Epistles); others are not. The key is to look at what the NT affirms. The Sermon on the Mount (Matthew 5-7) is the 'new law' — not replacing the OT's moral content but intensifying it to reach the heart. The Spirit's indwelling produces from within what the law commanded from without." },
  { title: "Theonomy / Christian Reconstructionism", color: BLUE, body: "Theonomy (Rushdoony, Bahnsen) argues that the Mosaic civil laws retain their binding authority for modern societies, including penalties. This represents a minority evangelical position. Critics: the Mosaic civil code was for Israel's theocratic nation-state; applying it to contemporary pluralistic societies imports a redemptive-historical context that no longer exists. The broader Reformed consensus: the civil laws are expired as binding law but retain didactic value — they show the character of justice and the nature of God's moral order." },
];

const PROMISE_ITEMS = [
  { title: "The Seed of the Woman (Genesis 3:15)", color: GREEN, body: "'I will put enmity between you and the woman, and between your offspring and hers; he will crush your head, and you will strike his heel' — the protoevangelium (first gospel). The whole OT narrative is the unfolding answer to this promise: who is the seed? Through Seth, through Noah, through Abraham, through Isaac, through Jacob, through Judah, through David — to Jesus. The genealogies of the OT are not filler; they are the tracking of the seed line through which the promise runs." },
  { title: "The Suffering Servant (Isaiah 52:13–53:12)", color: BLUE, body: "Isaiah 53 is the most detailed OT prophecy of the Messiah's suffering: despised, rejected, a man of sorrows, bearing our griefs, stricken for our transgressions, by his wounds we are healed, the LORD has laid on him the iniquity of us all. The New Testament quotes it more than any other OT passage — applied to Jesus's ministry (Matt 8:17), his silence before Pilate (Mark 15:5), his death (Luke 22:37), and the proclamation of the gospel (Acts 8:30-35). This was written 700 years before Christ." },
  { title: "The Son of David (2 Samuel 7; Psalm 110)", color: GOLD, body: "The Davidic covenant promises an eternal king from David's line. Psalm 110:1 — 'The LORD says to my lord: Sit at my right hand until I make your enemies a footstool for your feet' — is the most quoted OT passage in the NT (14 times). Jesus interprets it as referring to the Messiah, who is both David's son and David's lord (Mark 12:35-37). Psalm 110:4 adds: 'You are a priest forever, in the order of Melchizedek' — the foundation for Hebrews' entire argument about Christ's priesthood." },
  { title: "The New Exodus (Isaiah 40-55)", color: TEAL, body: "Isaiah 40-55 (Deutero-Isaiah in critical scholarship) announces a new exodus: Israel in exile will be brought home by a new act of divine deliverance surpassing even the first exodus. 'Forget the former things; do not dwell on the past. See, I am doing a new thing' (43:18-19). The gospel of Mark opens by quoting Isaiah 40:3: 'a voice of one calling in the wilderness.' Jesus is the fulfillment of the new exodus — delivering not from political bondage but from sin and death, leading not to Canaan but to the new creation." },
];

const VIDEOS = [
  { videoId: "AvPbMbFq22g", title: "Reading the Old Testament as Christian Scripture — N.T. Wright" },
  { videoId: "7_CGP-12AE0", title: "Old Testament Covenants Overview — BibleProject" },
  { videoId: "SBbIf8X_6Fk", title: "Typology in the Old Testament — Michael Goheen" },
  { videoId: "5cKO3V5Kmv0", title: "The Law and the New Covenant — Tim Keller" },
  { videoId: "2zY0DHxCk1s", title: "Isaiah's Suffering Servant — John Oswalt" },
];

export default function OldTestamentTheologyGuide() {
  const [tab, setTab] = useLocalStorage("vine_ottheol_tab", "overview");
  const [covOpen, setCovOpen] = useLocalStorage("vine_ottheol_cov", "");
  const [journal, setJournal] = useLocalStorage("vine_ottheol_journal", "");

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: GOLD + "22", color: GOLD, padding: "0.2rem 0.7rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1 }}>BIBLICAL THEOLOGY · OT</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.5rem" }}>Old Testament Theology</h1>
        <p style={{ color: MUTED, fontSize: "1rem", marginBottom: "2rem", maxWidth: 680 }}>
          How to read the Old Testament as Christian Scripture — covenants, typology, the law, the Psalms, the prophets, and the promises that run through to Christ.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
                borderColor: tab === t.id ? GOLD : BORDER, background: tab === t.id ? GOLD + "22" : "transparent", color: tab === t.id ? GOLD : MUTED }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Why Old Testament Theology?</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Most Christians know the Old Testament less well than the New, and many treat it as a collection of inspiring stories and moral lessons rather than a unified theological narrative. But the OT is the soil from which the NT grows — without it, the NT is incomprehensible. Who is God? What is sin? Why does atonement require blood? What is the covenant? What is the kingdom? These are OT categories. Jesus assumes his audience knows them; so should we.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Proportion", value: "77% of Christian Bible", color: GOLD },
                { label: "Purpose", value: "Reveal God's character and plan", color: GREEN },
                { label: "Center", value: "Covenant with Abraham/David", color: BLUE },
                { label: "Goal", value: "Points to Christ", color: TEAL },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 12, padding: "1.2rem", textAlign: "center" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.label}</div>
                  <div style={{ color: item.color, fontWeight: 700 }}>{item.value}</div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 14, padding: "1.3rem", marginBottom: "1rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: GOLD, marginBottom: "0.5rem" }}>The Story in One Paragraph</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>
                God creates a good world (Genesis 1-2). Humanity rebels, breaking the relationship and bringing sin and death into creation (Genesis 3). Rather than destroying what is broken, God begins a rescue plan: he calls Abraham and makes a covenant to bless all nations through him (Genesis 12, 15). The rescue proceeds through Isaac, Jacob, and Joseph; through the slavery in Egypt, the exodus, and the Sinai covenant; through the conquest of Canaan, the judges, and the kingdom; through David's covenant and Solomon's temple; through the division of the kingdom, the prophetic critique, and the exile; through the return, the second temple, and the long silence — until the fullness of time, when God himself enters the story in the person of Jesus of Nazareth.
              </p>
            </div>
          </div>
        )}

        {/* READING THE OT */}
        {tab === "reading" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>How to Read the Old Testament</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Four key principles for reading the OT as the Christian book it is.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {READING_ITEMS.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* COVENANTS */}
        {tab === "covenants" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Five Major OT Covenants</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              The backbone of OT theology is the covenant — God's binding commitment to his people. Five major covenants develop the story progressively.
            </p>
            {COVENANT_ITEMS.map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${covOpen === item.id ? BLUE : BORDER}`, borderRadius: 12, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button onClick={() => setCovOpen(covOpen === item.id ? "" : item.id)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: "1rem", cursor: "pointer", textAlign: "left" }}>
                  <span>{item.label}</span>
                  <span style={{ color: BLUE, fontSize: "1.2rem" }}>{covOpen === item.id ? "−" : "+"}</span>
                </button>
                {covOpen === item.id && (
                  <div style={{ padding: "0 1.2rem 1rem", color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.content}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* TYPOLOGY */}
        {tab === "typology" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Typology: The OT's Foreshadowing of Christ</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              God designed the OT to foreshadow the NT. Typology is not allegory — it is the intentional correspondence between OT patterns and NT fulfillment.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {TYPOLOGY_ITEMS.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* THE LAW */}
        {tab === "law" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Law for Christians Today</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              One of the most practically significant questions in OT theology: which parts of the Mosaic law are binding for Christians today, and why?
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {LAW_VIEWS.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PSALMS AND PROPHETS */}
        {tab === "psalms-prophets" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Psalms and the Prophets</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Two of the most formative parts of the OT — the Psalms for Christian prayer and worship, the Prophets for understanding Christ.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "The Psalms as the Church's Prayer Book", color: GREEN, body: "The Psalter was the prayer book and hymnal of the second temple and the early church. Jesus quoted the Psalms on the cross (Psalm 22, 31). The church has sung and prayed the Psalms for two millennia. Dietrich Bonhoeffer: 'the Psalter is the prayer book of Jesus Christ.' They give language for every human experience before God: praise, lament, confession, trust, wisdom, doubt. Reading them christologically — hearing them as the prayers of the Messiah and of those united to him — is the oldest and richest tradition of Psalm interpretation." },
                { title: "Types of Psalms", color: BLUE, body: "Scholars identify several types: Hymns (pure praise — Ps 100, 148), Laments (individual — Ps 22; communal — Ps 44, 74), Psalms of Trust (Ps 23, 27), Thanksgiving (Ps 30, 138), Royal Psalms (Ps 2, 72, 110 — about the Davidic king/Messiah), Wisdom Psalms (Ps 1, 37, 73), and Torah Psalms (Ps 19, 119). Most psalms include multiple types; lament psalms typically move from complaint to petition to trust, modeling the theological journey through suffering." },
                { title: "Reading the Prophets", color: GOLD, body: "The OT prophets are primarily covenant enforcers, not predictors of the distant future. The prophetic pattern: covenant lawsuit (Israel has violated the covenant), call to repentance, warning of judgment, promise of restoration. The judgment came in the Assyrian (722 BC) and Babylonian (586 BC) exiles. The restoration promises are fulfilled in Christ and in the church as the restored Israel — and await final completion in the new creation. Reading the prophets requires knowing the covenant background and the historical context of each prophet." },
                { title: "Messianic Prophecy", color: TEAL, body: "Several OT texts speak of a coming king, servant, or son who will fulfill God's promises in ways no historical Israelite did. Key texts: Isaiah 7:14 (virgin birth), Isaiah 9:6-7 (Wonderful Counselor, Mighty God), Isaiah 52:13–53:12 (suffering servant), Micah 5:2 (born in Bethlehem), Zechariah 9:9 (king riding a donkey), Zechariah 12:10 (mourning for the one pierced), Daniel 7:13-14 (Son of Man), Psalm 110:1 (Lord at God's right hand). The NT applies all of these to Jesus." },
              ].map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* OT PROMISES */}
        {tab === "promises" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Great OT Promises Fulfilled in Christ</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              The OT is a book of promises — made and kept. These four are the most important.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {PROMISE_ITEMS.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Reflection Journal</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>Questions to deepen your engagement with the Old Testament.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                "Which part of the Old Testament do you find most difficult or confusing? What would help you engage with it more?",
                "Looking at the five major covenants — which one most shapes your understanding of your relationship with God today?",
                "Where have you noticed typology at work in your reading of the NT (a NT passage explicitly connects to an OT pattern)?",
                "How does the Psalms' permission to lament change how you pray? Have you prayed a lament psalm recently?",
              ].map((q, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem" }}>
                  <div style={{ color: GOLD, fontWeight: 600, fontSize: "0.9rem" }}>{q}</div>
                </div>
              ))}
            </div>
            <textarea value={journal} onChange={e => setJournal(e.target.value)}
              placeholder="Write your reflections here — saved locally in your browser..."
              style={{ width: "100%", minHeight: 220, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, color: TEXT, padding: "1rem", fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box" }} />
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Video Teaching</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>Teaching on OT theology, covenants, typology, and how to read the Hebrew Scriptures.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                  </div>
                  <div style={{ padding: "0.9rem 1rem" }}>
                    <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{v.title}</div>
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
