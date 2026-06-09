"use client";
import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";

type LevTab = "overview" | "sacrifices" | "holiness" | "dayofatonement" | "feasts" | "cleanunclean" | "themes" | "journal" | "videos";
type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

const TABS: { id: LevTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "sacrifices", label: "The Sacrificial System" },
  { id: "holiness", label: "The Holiness Code" },
  { id: "dayofatonement", label: "Day of Atonement" },
  { id: "feasts", label: "The Feast Calendar" },
  { id: "cleanunclean", label: "Clean & Unclean" },
  { id: "themes", label: "Key Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const OFFERINGS = [
  {
    num: "1",
    name: "Burnt Offering",
    hebrew: "Olah — \"That Which Goes Up\"",
    ref: "Leviticus 1",
    color: TEAL,
    desc: "The entire animal is consumed by fire on the altar — nothing is kept back by the worshiper. This is the only offering that is wholly given to God, rising as a fragrant aroma. It is voluntary, expressing total devotion and complete surrender. The worshiper receives no food from it; the only benefit is atonement and the act of worship itself. This offering pictures Christ's entire life as a burnt offering of unbroken, total consecration to the Father. Unlike the rest of us, Jesus held nothing back — not his time, his comfort, his reputation, or ultimately his life.",
  },
  {
    num: "2",
    name: "Grain Offering",
    hebrew: "Minchah — \"Gift\"",
    ref: "Leviticus 2",
    color: GOLD,
    desc: "Fine flour, oil, salt, and incense — never leaven or honey. Always accompanied animal sacrifice; it never stands alone. The grain offering recognizes that all of ordinary life — work, harvest, the cultivation of the earth — belongs to God. The priest burns a handful as a memorial portion; the rest goes to the priests as their food. The absence of leaven (which represents corruption and pride) and the presence of salt (which represents covenant fidelity, Num 18:19) are rich with meaning. Our daily labor is not secular — it is potential worship.",
  },
  {
    num: "3",
    name: "Peace Offering",
    hebrew: "Shelem — \"Fellowship / Wholeness\"",
    ref: "Leviticus 3",
    color: GREEN,
    desc: "The most remarkable feature of the peace offering is the shared meal: fat goes to God, the priest receives the breast and thigh, and the worshiper eats the rest. This is the only offering in which the worshiper participates at the table — God, priest, and offerer sharing a meal together. This is a meal of reconciliation, of restored relationship, of shalom — wholeness and well-being with God. The theological connection to the Lord's Supper is profound: at the Table, Christ hosts us in a peace offering that he himself is — the one who makes peace through the blood of his cross (Col 1:20).",
  },
  {
    num: "4",
    name: "Sin Offering",
    hebrew: "Chatat — \"Missing the Mark\"",
    ref: "Leviticus 4–5",
    color: PURPLE,
    desc: "The sin offering covers unintentional sins — violations of God's law committed in ignorance or weakness. Different procedures apply depending on who sinned: the high priest, the whole congregation, a ruler, or a common person. Strikingly, a more senior sinner (the high priest) requires a more costly sacrifice (a bull rather than a goat). The blood is applied to different places depending on the offerer: inside the veil for the priest, on the outer altar for the layperson. 'Without the shedding of blood there is no forgiveness of sins' (Heb 9:22). The sin offering makes the cost of sin visible — it cannot simply be overlooked.",
  },
  {
    num: "5",
    name: "Guilt Offering",
    hebrew: "Asham — \"Guilt / Reparation\"",
    ref: "Leviticus 5–6",
    color: GOLD,
    desc: "Where the sin offering covers the offense against God, the guilt offering specifically addresses sins involving property, deception, or breach of trust against another person. It requires restitution of the full amount plus a twenty percent penalty, plus the sacrifice itself. This is theologically significant: the guilt offering insists that sin has both a vertical dimension (against God) and a horizontal dimension (against neighbor). You cannot just offer sacrifice to God and skip making right what you did to your neighbor. Isaiah 53:10 uses the word 'asham' — the Servant's life is made a guilt offering, covering the full reparation that sin demands.",
  },
];

const NEIGHBOR_ETHICS = [
  { ref: "19:9-10", text: "Do not reap your field to its edges or strip your vineyard bare — leave it for the poor and the stranger." },
  { ref: "19:11", text: "Do not steal. Do not deal falsely. Do not lie to one another." },
  { ref: "19:12", text: "Do not swear by my name falsely, profaning the name of your God." },
  { ref: "19:13", text: "Do not oppress your neighbor. Do not rob him. Do not withhold wages overnight." },
  { ref: "19:14", text: "Do not curse the deaf. Do not put a stumbling block before the blind." },
  { ref: "19:15", text: "Do not be partial in judgment — neither to the poor nor to the great. Judge your neighbor justly." },
  { ref: "19:16", text: "Do not go around as a slanderer among your people. Do not profit by your neighbor's blood." },
  { ref: "19:17", text: "Do not hate your brother in your heart. Rebuke your neighbor, lest you incur sin because of him." },
  { ref: "19:18a", text: "Do not take vengeance. Do not bear a grudge against the sons of your own people." },
  { ref: "19:18b", text: "\"You shall love your neighbor as yourself: I am the LORD.\" — This is not a New Testament innovation; it is Mosaic law. Jesus quotes it as one of the two great commandments.", highlight: true },
];

const FEASTS = [
  { num: "1", name: "The Sabbath", ref: "23:3", heb: "Shabbat", color: MUTED, nt: "Col 2:17 — a shadow of things to come", season: "Weekly", desc: "The foundation of all sacred time. Every seventh day is set apart — ceasing from work in imitation of God's rest on the seventh day of creation. The Sabbath is not merely a hygiene rule for tired workers; it is a theological statement that the world belongs to God and that humanity is not defined by its productivity. Rest is an act of trust." },
  { num: "2", name: "Passover", ref: "23:5", heb: "Pesach", color: GOLD, nt: "1 Cor 5:7 — \"Christ our Passover has been sacrificed\"", season: "14th Nisan (Spring)", desc: "Commemorates the Exodus — the night the LORD struck down Egypt's firstborn and passed over the blood-marked houses of Israel. The NT identification is unambiguous: Jesus IS the Passover Lamb (1 Cor 5:7; John 1:29). The Last Supper is a Passover meal. The crucifixion happens on Passover. The entire feast is fulfilled in Christ." },
  { num: "3", name: "Feast of Unleavened Bread", ref: "23:6-8", heb: "Chag HaMatzot", color: TEAL, nt: "1 Cor 5:8 — \"sincerity and truth\"", season: "15–21 Nisan (Spring)", desc: "Seven days of eating bread without leaven. Leaven throughout Scripture symbolizes corruption, pride, and the pervasive influence of sin. The removal of leaven pictures the moral dimension of redemption: leaving the old life behind. Paul applies this directly: 'Let us therefore celebrate the festival, not with the old leaven, the leaven of malice and evil, but with the unleavened bread of sincerity and truth' (1 Cor 5:8)." },
  { num: "4", name: "Firstfruits", ref: "23:10-11", heb: "Bikkurim", color: GREEN, nt: "1 Cor 15:20 — \"firstfruits of those who have fallen asleep\"", season: "Day after Sabbath of Passover week", desc: "A sheaf of the first grain of the harvest is waved before the LORD — giving back to God the very beginning of the harvest as an act of faith that the rest will come. Paul applies this directly to the resurrection: 'Christ has been raised from the dead, the firstfruits of those who have fallen asleep' (1 Cor 15:20). Jesus' resurrection is the first-sheaf of the great harvest of resurrection to come." },
  { num: "5", name: "Feast of Weeks / Pentecost", ref: "23:15-22", heb: "Shavuot", color: PURPLE, nt: "Acts 2 — the Spirit poured out", season: "50 days after Firstfruits (Spring)", desc: "Fifty days after Firstfruits, at the completion of the wheat harvest. The very name 'Pentecost' (fiftieth) comes from the Greek translation. In Acts 2, the Holy Spirit is poured out on the disciples on the exact day of Shavuot — fifty days after Christ's resurrection on Firstfruits Sunday. The harvest feast becomes the moment the first great harvest of souls enters God's kingdom. The timing is not accidental." },
  { num: "6", name: "Feast of Trumpets", ref: "23:23-25", heb: "Rosh Hashana", color: GOLD, nt: "1 Cor 15:52 — \"at the last trumpet\"", season: "1st Tishri (Fall)", desc: "The blowing of trumpets (shofar) on the first day of the seventh month. A day of solemn rest and convocation. The trumpet blast throughout Scripture signals the presence and action of God — his approach, his declaration, his summons to assembly. Paul's language of 'the last trumpet' (1 Cor 15:52; 1 Thess 4:16) resonates with this eschatological feast. Many read the fall feasts as pointing to Christ's second coming." },
  { num: "7", name: "Day of Atonement", ref: "23:26-32", heb: "Yom Kippur", color: TEAL, nt: "Hebrews 9 — Christ's once-for-all entry", season: "10th Tishri (Fall)", desc: "The most solemn day in the Hebrew calendar — the only day the High Priest enters the Holy of Holies, with blood for atonement. See the Day of Atonement tab for the full theological treatment. Fulfilled in Christ's once-for-all entry into the heavenly sanctuary with his own blood (Heb 9:12)." },
  { num: "8", name: "Feast of Booths / Tabernacles", ref: "23:33-44", heb: "Sukkot", color: GREEN, nt: "John 1:14 — \"tabernacled among us\"", season: "15–21 Tishri (Fall)", desc: "Seven days of living in temporary shelters (sukkot), remembering the forty years Israel wandered in the wilderness and lived in tents. It is a feast of joy and dependence — living without permanent structures, trusting God's provision daily. John 1:14 uses the verb eskēnōsen (tabernacled): 'The Word became flesh and tabernacled among us.' Jesus appears at this feast in John 7-8, declaring himself the light of the world (7:2, 8:12) and the source of living water (7:37-38) — fulfilling both the wilderness memories and the eschatological hopes embedded in Sukkot." },
];

const PURITY_SECTIONS = [
  { ref: "Lev 11", color: TEAL, title: "Food Laws", content: "Clean land animals chew the cud AND have split hooves; unclean animals have one but not the other (pig: split hoof but does not chew cud; camel: chews cud but does not have split hoof). Clean sea creatures have fins AND scales; unclean do not. Clean birds are listed by name. The logic of 'both/and' versus 'only one or the other' reflects Mary Douglas's influential anthropological analysis: wholeness and completeness signal holiness; incomplete or mixed categories signal impurity. Every meal was a theological act — a reminder of boundaries, categories, and the distinctiveness of Israel as God's people." },
  { ref: "Lev 12", color: PURPLE, title: "Post-Partum Impurity", content: "A woman who gives birth is ritually impure for a period (longer for a female child than a male — details that have generated centuries of commentary). The purification offering after childbirth is a sin offering and a burnt offering (12:6). This is not a statement that childbirth is sinful; rather, the flow of blood connects birth to the broader purity-death connection. Luke 2:22-24 records that Mary offered the purification offering after Jesus' birth — the very sacrifice Leviticus 12 prescribes. The Son of God enters human life in a family that observes the Torah's requirements fully." },
  { ref: "Lev 13–14", color: GOLD, title: "Skin Diseases and Mold", content: "The priest functions as a public health inspector for skin conditions and mold in houses. Someone with an infectious skin disease (traditionally translated 'leprosy' though it covers a range of conditions) is declared unclean and must live outside the camp, tearing their garments and crying 'Unclean! Unclean!' (13:45). The connection to death and decay is explicit: skin conditions that spread and consume the body evoke mortality. The healing of 'lepers' by Jesus is therefore not merely a medical miracle — it is a restoration of social and theological standing, a movement from outside the camp (death) to inside the community (life)." },
  { ref: "Lev 15", color: MUTED, title: "Bodily Discharges", content: "Both male and female bodily discharges create temporary impurity. The connection is consistently to the flow of bodily substances associated with life — blood, semen — which when uncontrolled become markers of the body's mortality and fragility. The woman with a flow of blood for twelve years (Mark 5:25-34) would have been perpetually unclean under these laws — cut off from full worship participation for a decade. When she touches Jesus, the expected transfer is that he becomes unclean. Instead, power flows from him to her and she is healed. His holiness is stronger than her impurity." },
];

const THEMES_DATA = [
  { color: TEAL, title: "Holiness: Imitating God's Character", text: "The word 'holy' (qadosh) and its cognates appear more in Leviticus than in any other book of the Bible. Holiness is not merely ceremonial separation — it is the very character of God. The command 'You shall be holy, for I the LORD your God am holy' (19:2) is the ethical engine of the entire book. Israel's worship, ethics, economics, family life, and social structures are all meant to reflect the character of the holy God in their midst. Holiness is not being different from other people for its own sake; it is being like God — which turns out to make you radically different from a world shaped by other loves." },
  { color: GOLD, title: "Atonement: The Costly Solution to Sin", text: "The Hebrew word kippur (atonement) shares its root with kapporeth — the mercy seat on top of the ark of the covenant, where the High Priest sprinkles blood on the Day of Atonement. Atonement means 'covering' — the blood covers the sin so that the holy God's wrath passes over. The entire sacrificial system makes one reality inescapable: sin costs life. Blood must be shed. The problem of sin is not trivial, and the solution must be proportionate to it. Leviticus's insistence on the shedding of blood as the mechanism of atonement is not primitive — it is an honest reckoning with the gravity of sin before a holy God." },
  { color: PURPLE, title: "Nearness and Distance: The Unresolved Tension", text: "Leviticus holds two things in permanent tension: God is terrifyingly holy (Nadab and Abihu die for offering unauthorized fire in chapter 10), and God is intimately near (he has chosen to dwell in the Tabernacle in the midst of his people). The elaborate system of priests, sacrifices, purity laws, and festivals exists precisely because both of these are simultaneously true. The tension is not resolved until Christ, who is both the holy God and the one who 'draws near to God on our behalf' (Heb 7:25) — the great High Priest who is also the sacrifice, who by his death tears open the veil that separated the Holy of Holies." },
  { color: GREEN, title: "Mediation: The Necessity of a Priest", text: "Israel cannot approach God directly. The priests serve as mediators — touching what the people cannot touch, entering where the people cannot enter, bearing the names of the tribes on their breastplate before God (Ex 28:29). The priest stands in the gap. This structural necessity of mediation is not incidental: it points inexorably forward to 'the one mediator between God and man, the man Christ Jesus' (1 Tim 2:5). Jesus is not just one more priest in a long line — he is the fulfillment of what every priest was pointing toward, the mediator who makes all other mediation unnecessary." },
  { color: TEAL, title: "Grace Before Law: The Sequence Matters", text: "It is essential to understand Leviticus in its canonical context: it comes after the Exodus. Israel was redeemed first — by grace, through blood, by God's power — and then given the law. Leviticus is not a ladder by which Israel earns God's favor; it is a gift to a people who already have God's favor, showing them how to live in light of it. This sequence — gospel first, law second; indicative first, imperative second — is the pattern of the entire Bible, culminating in Romans, where grace is established in chapters 1-11 before the ethical imperatives of chapter 12 begin with 'therefore.'" },
  { color: GOLD, title: "Fulfilled in Christ: Every Strand Leads There", text: "The book of Hebrews is the NT's sustained commentary on Leviticus, and its argument is stunning: Jesus is simultaneously the High Priest (who offers the sacrifice), the Sacrifice (who is offered), the Scapegoat (who carries sins away), the Passover Lamb, the Firstfruits of resurrection, the Temple itself (where God and humanity meet), and the heavenly mercy seat (where wrath is propitiated). No single image is sufficient — it takes the entire Levitical system to begin to describe the magnitude of what Christ has done. Leviticus is not an obstacle to reading the NT; it is the theological grammar without which the NT cannot be fully understood." },
];

export default function LeviticusGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<LevTab>("vine_leviticus_tab", "overview");
  const [openOffering, setOpenOffering] = useState<string | null>(null);
  const [openPurity, setOpenPurity] = useState<string | null>(null);
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try {
      const s = localStorage.getItem("vine_leviticus_journal");
      return s ? JSON.parse(s) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("vine_leviticus_journal", JSON.stringify(jEntries));
    } catch {}
  }, [jEntries]);

  const saveEntry = useCallback(() => {
    if (!jForm.verse && !jForm.reflection) return;
    const entry: JEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      ...jForm,
    };
    setJEntries(prev => [entry, ...prev]);
    setJForm({ verse: "", reflection: "", prayer: "" });
    setJSaved(true);
    setTimeout(() => setJSaved(false), 2000);
  }, [jForm]);

  const deleteEntry = useCallback((id: string) => {
    setJEntries(prev => prev.filter(e => e.id !== id));
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
        <main
          id="main-content"
          style={{ maxWidth: 880, margin: "0 auto", padding: "40px 20px 80px", fontFamily: "var(--font-jost, system-ui, sans-serif)" }}
        >
          {/* Page Header */}
          <div style={{ marginBottom: 36 }}>
            <div
              style={{
                display: "inline-block",
                background: `${TEAL}20`,
                border: `1px solid ${TEAL}40`,
                borderRadius: 20,
                padding: "4px 14px",
                fontSize: 12,
                color: TEAL,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
                marginBottom: 14,
              }}
            >
              Law &middot; OT · Pentateuch
            </div>
            <h1 style={{ color: TEXT, fontSize: 36, fontWeight: 900, margin: "0 0 12px", lineHeight: 1.2 }}>
              The Book of Leviticus
            </h1>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: 0, maxWidth: 660 }}>
              The priestly handbook of Israel&apos;s worship — the theological core of the Pentateuch, and the key to understanding the entire
              sacrificial logic that reaches its fulfillment in Jesus Christ.
            </p>
          </div>

          {/* Tab Bar */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 36 }}>
            {TABS.map(t => (
              <button
                type="button"
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 20,
                  border: `1px solid ${activeTab === t.id ? TEAL : BORDER}`,
                  background: activeTab === t.id ? `${TEAL}20` : "transparent",
                  color: activeTab === t.id ? TEAL : MUTED,
                  fontWeight: activeTab === t.id ? 700 : 500,
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* ── OVERVIEW ── */}
          {activeTab === "overview" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 26 }}>
                  {[
                    ["Hebrew Title", "Vayikra — \"And He Called\""],
                    ["Author", "Moses (traditional)"],
                    ["Genre", "Law / Priestly Instruction"],
                    ["Period", "c. 1446–1406 BC"],
                    ["Key Theme", "Holiness — Atonement — Nearness to God"],
                    ["Central Verse", "Leviticus 19:2"],
                  ].map(([k, v]) => (
                    <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                      <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                      <div style={{ color: TEXT, fontSize: 13, fontWeight: 600, lineHeight: 1.4 }}>{v}</div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    background: BG,
                    borderLeft: `3px solid ${TEAL}`,
                    borderRadius: "0 8px 8px 0",
                    padding: "14px 18px",
                    marginBottom: 20,
                  }}
                >
                  <p style={{ color: TEAL, fontSize: 16, fontStyle: "italic", fontWeight: 600, lineHeight: 1.7, margin: 0 }}>
                    &ldquo;You shall be holy, for I the LORD your God am holy.&rdquo;
                  </p>
                  <p style={{ color: MUTED, fontSize: 12, margin: "6px 0 0" }}>Leviticus 19:2 — the theological axis of the entire book</p>
                </div>

                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                  Leviticus is the most skipped and most misunderstood book in the Bible. Many Christians begin the &quot;read the Bible in a year&quot; challenge and quietly abandon it somewhere in Leviticus 11. This is a serious loss, because Leviticus is not peripheral — it is the theological core of the Pentateuch, the book that answers the most urgent question raised by the Exodus: now that God has redeemed his people and come to dwell among them in the Tabernacle, <em>how does a sinful people live with a holy God in their midst?</em>
                </p>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                  The Hebrew title is <em>Vayikra</em> — &quot;And He Called.&quot; The book opens with God calling Moses from the Tent of Meeting. The book is not primarily about ritual rules; it is about God drawing his people near to himself. The elaborate system of sacrifices, priests, feasts, and purity laws is not bureaucratic religion — it is grace architecture: the infrastructure God provides so that sinful humans can safely and truly draw near to the holy God.
                </p>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                  The book divides naturally into two halves. Chapters 1–16 contain the laws of sacrifice and priesthood, culminating in chapter 16&apos;s towering chapter on the Day of Atonement. Chapters 17–27 are the &quot;Holiness Code&quot; — a sweeping vision of what holy communal life looks like, including the famous Leviticus 19 with its neighbor ethics and the command to love your neighbor as yourself.
                </p>
              </div>

              {/* The shock of ch 10 */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 800, fontSize: 15, marginBottom: 10 }}>
                  The Shock of Chapter 10: Holiness Is Real
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "0 0 12px" }}>
                  Modern readers are often startled by Leviticus 10: Aaron&apos;s sons Nadab and Abihu &quot;offered unauthorized fire before the LORD, which he had not commanded them,&quot; and fire came out from the LORD and consumed them (10:1-2). They die instantly. Aaron is commanded not to mourn publicly. The narrative is brutal and brief.
                </p>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                  This is not a story about an arbitrary God punishing innocent people. It is a story placed deliberately at the center of the book to communicate that the holiness of God is not a metaphor, not a polite religious sentiment, and not an invitation to casual approach. God&apos;s presence is genuinely dangerous to sin — not because God is capricious, but because the encounter of utter holiness with human uncleanness has consequences. The entire sacrificial system exists because God takes this seriously and provides a way through. Nadab and Abihu bypassed the provided way.
                </p>
              </div>

              {/* Structure */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
                <div style={{ color: TEAL, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>
                  Structure of Leviticus
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    ["1–7", "The Five Offerings", "Detailed laws for the burnt, grain, peace, sin, and guilt offerings — the full vocabulary of Israel's sacrificial worship."],
                    ["8–10", "The Ordination of the Priests", "Aaron and his sons are consecrated for priestly service; the glory of the LORD fills the Tabernacle. Then Nadab and Abihu's death."],
                    ["11–15", "Clean and Unclean Laws", "Food laws, post-partum impurity, skin diseases, mold, and bodily discharges — the purity system in full."],
                    ["16", "The Day of Atonement", "The climactic chapter of the first half: the annual ritual for purging all Israel's sin, with the two goats and the High Priest's entrance into the Holy of Holies."],
                    ["17–20", "Blood, Holiness, and Ethics", "The theological rationale for the blood prohibition; the call to holiness; the neighbor ethics of ch. 19."],
                    ["21–22", "Priestly Holiness", "Special purity requirements for priests, whose proximity to the holy demands greater care."],
                    ["23", "The Seven Feasts", "The annual calendar of appointed times — Sabbath, Passover, Unleavened Bread, Firstfruits, Pentecost, Trumpets, Atonement, and Booths."],
                    ["24–25", "Lamps, Bread, and the Jubilee", "The lampstand and showbread; the Jubilee year (every 50th year, debts canceled, slaves freed, land returned)."],
                    ["26–27", "Blessings, Curses, and Vows", "Covenant consequences for obedience and disobedience; the terms for vows and dedications to God."],
                  ].map(([ref, title, desc]) => (
                    <div
                      key={ref}
                      style={{
                        display: "flex",
                        gap: 14,
                        padding: "10px 0",
                        borderBottom: `1px solid ${BORDER}`,
                      }}
                    >
                      <span
                        style={{
                          background: `${TEAL}20`,
                          border: `1px solid ${TEAL}40`,
                          borderRadius: 8,
                          padding: "3px 10px",
                          fontSize: 11,
                          color: TEAL,
                          fontWeight: 700,
                          whiteSpace: "nowrap",
                          alignSelf: "flex-start",
                        }}
                      >
                        Ch. {ref}
                      </span>
                      <div>
                        <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{title}</div>
                        <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leviticus and Jesus */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: GOLD, fontWeight: 800, fontSize: 15, marginBottom: 10 }}>
                  Leviticus and Jesus: The Letter to the Hebrews
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "0 0 12px" }}>
                  The NT book of Hebrews is, at its core, a sustained theological commentary on Leviticus. The author argues, chapter by chapter, that the entire Levitical system — every priest, every sacrifice, every feast, the Tabernacle itself — was not merely ritual history but a forward-pointing shadow of the one true reality: Jesus Christ.
                </p>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                  Jesus is the Great High Priest who passes through the heavens (Heb 4:14). Jesus is the Lamb who takes away sin (John 1:29). Jesus&apos; blood speaks a better word than Abel&apos;s (Heb 12:24). The Last Supper is a transformed Passover. The tearing of the temple curtain at the crucifixion (Matt 27:51) — the curtain that barred entrance to the Holy of Holies — announces that Yom Kippur has been permanently enacted. Reading Leviticus transforms your reading of the entire New Testament.
                </p>
              </div>
            </div>
          )}

          {/* ── SACRIFICIAL SYSTEM ── */}
          {activeTab === "sacrifices" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
                <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, marginBottom: 14 }}>The Five Offerings (Leviticus 1–7)</h2>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>
                  The sacrificial system is not primitive superstition — it is a sophisticated theological vocabulary for the relationship between God and sinful humanity. Each of the five main offerings addresses a different dimension of that relationship: total devotion, the sanctification of ordinary life, fellowship and peace, forgiveness of unintentional sin, and reparation for sin against others. Together they form a complete theological portrait of what Christ&apos;s sacrifice accomplishes.
                </p>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                  The act of laying hands on the animal (<em>semikah</em>) before slaughter is theologically loaded: it signals identification — the worshiper transfers their identity to the animal, which then dies in their place. This is substitutionary logic, embedded from the very first pages of Israel&apos;s worship code.
                </p>
              </div>

              {OFFERINGS.map((o, i) => (
                <div
                  key={o.num}
                  style={{
                    background: CARD,
                    border: `1px solid ${openOffering === String(i) ? o.color : BORDER}`,
                    borderRadius: 12,
                    marginBottom: 10,
                    overflow: "hidden",
                    transition: "border-color 0.15s",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenOffering(openOffering === String(i) ? null : String(i))}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      padding: "18px 22px",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                      <span
                        style={{
                          background: `${o.color}20`,
                          border: `1px solid ${o.color}40`,
                          borderRadius: 8,
                          padding: "3px 10px",
                          fontSize: 11,
                          color: o.color,
                          fontWeight: 700,
                        }}
                      >
                        {o.ref}
                      </span>
                      <div>
                        <div style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{o.name}</div>
                        <div style={{ color: MUTED, fontSize: 12 }}>{o.hebrew}</div>
                      </div>
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, flexShrink: 0 }}>
                      {openOffering === String(i) ? "−" : "+"}
                    </span>
                  </button>
                  {openOffering === String(i) && (
                    <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}>{o.desc}</p>
                    </div>
                  )}
                </div>
              ))}

              {/* The Priest's Role */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginTop: 16 }}>
                <div style={{ color: GOLD, fontWeight: 800, fontSize: 15, marginBottom: 10 }}>The Priest: Mediator at the Boundary</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "0 0 12px" }}>
                  The priest is the one who touches what Israel cannot touch, enters where Israel cannot enter, and stands at the boundary between the holy God and the sinful people. He is not merely a ritual officiant — he is a theological necessity. Without the priest, there is no access. The priest bears the names of the twelve tribes on his breastplate when he enters the presence of God (Ex 28:29) — he carries the whole people before God in his very body.
                </p>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                  Hebrews 9–10 systematically maps the entire sacrificial system onto Christ. His single sacrifice replaces the ongoing cycle of daily offerings. His once-for-all entry into the true sanctuary replaces the High Priest&apos;s annual entrance on Yom Kippur. His blood does what animal blood could only gesture toward. &quot;For it is impossible for the blood of bulls and goats to take away sins&quot; (Heb 10:4) — the OT sacrifices were always pointing beyond themselves to the one sacrifice that actually would.
                </p>
              </div>
            </div>
          )}

          {/* ── HOLINESS CODE ── */}
          {activeTab === "holiness" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
                <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, marginBottom: 14 }}>The Holiness Code (Leviticus 17–26)</h2>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>
                  Scholars call Leviticus 17–26 &quot;the Holiness Code&quot; (abbreviated H) — a sustained vision of what holy communal life looks like in every dimension: worship, sexuality, family, economics, justice, care for the poor, treatment of strangers, agriculture, and the rhythms of the calendar. The driving refrain — repeated again and again throughout these chapters — is &quot;I am the LORD your God.&quot; Ethics is grounded in theology. The command to love your neighbor is not a free-floating ethical principle; it flows from the character of the God who is saying it.
                </p>
                <div
                  style={{
                    background: BG,
                    borderLeft: `3px solid ${TEAL}`,
                    borderRadius: "0 8px 8px 0",
                    padding: "14px 18px",
                    marginBottom: 16,
                  }}
                >
                  <p style={{ color: TEAL, fontSize: 16, fontStyle: "italic", fontWeight: 600, lineHeight: 1.7, margin: 0 }}>
                    &ldquo;You shall be holy, for I the LORD your God am holy.&rdquo;
                  </p>
                  <p style={{ color: MUTED, fontSize: 12, margin: "6px 0 0" }}>Leviticus 19:2 — the ethical engine of the Holiness Code</p>
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                  The logic is Trinitarian before the Trinity is fully revealed: holiness is not an abstract quality but a personal one. God is holy; therefore his people are to be holy — not in order to become his people, but because they already are his people. Holiness is imitation of God: &quot;walk in love, as Christ loved us&quot; (Eph 5:2) is the NT restatement of Leviticus 19&apos;s vision.
                </p>
              </div>

              {/* Leviticus 19 Neighbor Ethics */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
                <div style={{ color: GOLD, fontWeight: 800, fontSize: 16, marginBottom: 14 }}>
                  Leviticus 19: The Ethical Heart of the Law
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                  Leviticus 19 is one of the most ethically dense chapters in the entire OT. It covers the full range of neighbor relations — economic, judicial, relational, and emotional. And it culminates in the verse that Jesus identifies as one of the two greatest commandments in the entire Torah.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {NEIGHBOR_ETHICS.map(item => (
                    <div
                      key={item.ref}
                      style={{
                        background: item.highlight ? `${TEAL}12` : BG,
                        border: `1px solid ${item.highlight ? TEAL : BORDER}`,
                        borderRadius: 10,
                        padding: "12px 16px",
                        display: "flex",
                        gap: 12,
                      }}
                    >
                      <span
                        style={{
                          background: `${item.highlight ? TEAL : MUTED}20`,
                          border: `1px solid ${item.highlight ? TEAL : MUTED}40`,
                          borderRadius: 6,
                          padding: "2px 8px",
                          fontSize: 11,
                          color: item.highlight ? TEAL : MUTED,
                          fontWeight: 700,
                          whiteSpace: "nowrap",
                          alignSelf: "flex-start",
                        }}
                      >
                        {item.ref}
                      </span>
                      <p
                        style={{
                          color: item.highlight ? TEXT : MUTED,
                          fontSize: 14,
                          lineHeight: 1.65,
                          margin: 0,
                          fontWeight: item.highlight ? 600 : 400,
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* The stranger / alien */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 15, marginBottom: 10 }}>
                  The Stranger (Ger): Love Has No Borders
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "0 0 12px" }}>
                  &quot;When a stranger sojourns with you in your land, you shall not do him wrong. You shall treat the stranger who sojourns with you as the native among you, and you shall love him as yourself, for you were strangers in the land of Egypt: I am the LORD your God.&quot; (Lev 19:33-34)
                </p>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                  The Exodus is the theological basis for ethical hospitality to the stranger. Israel is not to love the stranger because it is cosmopolitan or enlightened, but because they were strangers. They know what it is to be vulnerable, marginalized, and dependent on the mercy of those with power. Their redemption does not elevate them above others — it obligates them toward others. The phrase &quot;I am the LORD your God&quot; grounds the ethical command in the redemptive relationship.
                </p>
              </div>

              {/* Jubilee */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: TEAL, fontWeight: 800, fontSize: 15, marginBottom: 10 }}>
                  The Jubilee Year (Leviticus 25): The Economic Sabbath
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "0 0 12px" }}>
                  Every fifty years, the trumpet sounds on the Day of Atonement and a Jubilee is declared: all debts are canceled, all Israelite slaves are freed, and all land reverts to its original family. The land ultimately belongs to God (&quot;the land is mine; for you are strangers and sojourners with me,&quot; 25:23), and therefore it cannot be permanently alienated from those to whom God gave it.
                </p>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                  Whether the Jubilee was ever fully observed in Israel&apos;s history is debated. What is clear is its theological vision: radical inequality is not the final word in God&apos;s economy. Jesus reads Isaiah 61:1-2 (&quot;to proclaim the year of the LORD&apos;s favor&quot;) in the synagogue at Nazareth and declares &quot;Today this Scripture has been fulfilled in your hearing&quot; (Luke 4:21) — reading his ministry as the ultimate Jubilee, the release of all debts, the liberation of all captives.
                </p>
              </div>
            </div>
          )}

          {/* ── DAY OF ATONEMENT ── */}
          {activeTab === "dayofatonement" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
                <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, marginBottom: 14 }}>
                  Yom Kippur — The Day of Atonement (Leviticus 16)
                </h2>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>
                  Leviticus 16 is the theological summit of the entire book — perhaps of the entire OT sacrificial system. On this single day each year, the accumulated sins of Israel are comprehensively dealt with: atoned for before God and carried away from the community. It is the day when the impossible happens: a sinful High Priest enters the presence of the utterly holy God, and Israel is cleansed.
                </p>
                <div
                  style={{
                    background: BG,
                    borderLeft: `3px solid ${TEAL}`,
                    borderRadius: "0 8px 8px 0",
                    padding: "14px 18px",
                    marginBottom: 16,
                  }}
                >
                  <p style={{ color: TEAL, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>
                    &ldquo;Tell Aaron your brother not to come at any time into the Holy Place inside the veil before the mercy seat that is on the ark, so that he may not die. For I will appear in the cloud over the mercy seat.&rdquo;
                  </p>
                  <p style={{ color: MUTED, fontSize: 12, margin: "6px 0 0" }}>Leviticus 16:2 — the context: after the death of Nadab and Abihu</p>
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                  The chapter opens in the shadow of chapter 10&apos;s tragedy. Two of Aaron&apos;s sons are dead because they presumed to enter God&apos;s presence without authorization. Now God establishes the one legitimate path: a single day, a single person, an elaborate preparation, and the blood of specific animals. The contrast could not be sharper: sinful entry means death; prescribed entry means life for the whole community.
                </p>
              </div>

              {/* The Preparation */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ color: GOLD, fontWeight: 800, fontSize: 15, marginBottom: 10 }}>
                  The High Priest&apos;s Preparation
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "0 0 12px" }}>
                  The High Priest must bathe completely (16:4), wear plain white linen rather than his gold-adorned high priestly garments — the magnificent vestments of his daily office are set aside. The gold represents glory and human honor; the white linen represents purity. On this day he enters not as the glorious High Priest of Israel but as a penitent seeking atonement.
                </p>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                  Before any offering for the people, Aaron sacrifices a bull as a sin offering for himself and his household (16:6). Even the High Priest must be purified before he can purify others. This iterative logic — the mediator himself needs mediation — is what Hebrews points to when it says Jesus, as our High Priest, &quot;has no need, like those high priests, to offer sacrifices daily, first for his own sins and then for those of the people, since he did this once for all when he offered up himself&quot; (Heb 7:27). Jesus needs no self-purification: he is the one truly sinless High Priest.
                </p>
              </div>

              {/* The Two Goats */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ color: TEAL, fontWeight: 800, fontSize: 15, marginBottom: 14 }}>
                  The Two Goats: Two Aspects of Atonement
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div style={{ background: BG, borderRadius: 10, padding: 18 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>
                      GOAT ONE — For the LORD
                    </div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                      Slaughtered as a sin offering. Its blood is brought by Aaron through the veil into the Holy of Holies — the most restricted space in the cosmos — and sprinkled on the <em>kapporeth</em>, the mercy seat (the lid of the ark of the covenant). The word <em>kippur</em> (atonement) shares its root with <em>kapporeth</em>: atonement is a &quot;covering.&quot; The blood covers the sin so that the holy God&apos;s judgment passes over. This goat addresses the judicial dimension of sin: satisfaction of God&apos;s holiness.
                    </p>
                  </div>
                  <div style={{ background: BG, borderRadius: 10, padding: 18 }}>
                    <div style={{ color: TEAL, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>
                      GOAT TWO — The Azazel (Scapegoat)
                    </div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                      Aaron lays both hands on the live goat, confessing over it all the iniquities, transgressions, and sins of Israel — the full accumulation of the year&apos;s guilt — and sends it into the wilderness &quot;to a remote area&quot; (16:22). The goat carries the sins away, never to return. Psalm 103:12: &quot;As far as the east is from the west, so far does he remove our transgressions from us.&quot; This goat addresses the relational dimension: sin is not merely covered but removed, expelled, gone.
                    </p>
                  </div>
                </div>
                <div style={{ marginTop: 14, background: `${TEAL}10`, border: `1px solid ${TEAL}30`, borderRadius: 10, padding: 16 }}>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                    The two goats together picture the two aspects of Christ&apos;s atonement: <strong>propitiation</strong> (the blood that satisfies God&apos;s justice and covers sin before the throne) and <strong>expiation</strong> (the removal and cancellation of sin&apos;s guilt). Both are essential; neither alone is the full picture. Romans 3:25 uses <em>hilasterion</em> — the very word used in the Greek OT for the mercy seat (<em>kapporeth</em>): &quot;God put forward Christ as a propitiation by his blood.&quot; Paul is saying: Jesus is the mercy seat.
                  </p>
                </div>
              </div>

              {/* Hebrews 9 */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ color: GOLD, fontWeight: 800, fontSize: 15, marginBottom: 10 }}>Hebrews 9: The Once-for-All Fulfillment</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "0 0 12px" }}>
                  &ldquo;But into the second tent only the high priest goes, and he but once a year, and not without taking blood, which he offers for himself and for the unintentional sins of the people... he entered once for all into the holy places, not by means of the blood of goats and calves but by means of his own blood, thus securing an eternal redemption.&rdquo; (Heb 9:7, 12)
                </p>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                  The word &quot;once for all&quot; (ephapax) appears four times in Hebrews. The contrast is deliberate: the Levitical system required annual repetition because it could not actually remove sin — it could only delay and picture the true removal. Christ&apos;s single sacrifice accomplishes what ten thousand Yom Kippurs could only foreshadow. The repetition of the OT rituals was not a flaw — it was a teaching device, signaling that the ultimate sacrifice was still coming.
                </p>
              </div>

              {/* The torn curtain */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: PURPLE, fontWeight: 800, fontSize: 15, marginBottom: 10 }}>
                  The Torn Curtain: Yom Kippur Made Permanent
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                  &ldquo;And behold, the curtain of the temple was torn in two, from top to bottom.&rdquo; (Matt 27:51) The veil separating the Holy of Holies from the rest of the temple — the barrier that only the High Priest could cross, once a year, with blood — was torn at the moment of Jesus&apos; death. &quot;From top to bottom&quot; signals that the tearing was God&apos;s act, not human. The way into the Most Holy Place is now permanently open. &quot;Therefore, brothers, since we have confidence to enter the holy places by the blood of Jesus, by the new and living way that he opened for us through the curtain, that is, through his flesh...&rdquo; (Heb 10:19-20). Every Christian now has access to what only Aaron had once a year.
                </p>
              </div>
            </div>
          )}

          {/* ── FEAST CALENDAR ── */}
          {activeTab === "feasts" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
                <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, marginBottom: 14 }}>
                  The Seven Appointed Times (Leviticus 23)
                </h2>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>
                  Leviticus 23 is one of the most structurally elegant chapters in the entire Bible. God establishes seven <em>mo&apos;adim</em> — appointed times, sacred assemblies — that give the whole year a theological rhythm. These are not arbitrary commemorations; they are a calendar structured around the story of redemption, encoding the gospel in time itself.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
                      Spring Feasts (Already Fulfilled)
                    </div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                      Passover, Unleavened Bread, Firstfruits, and Pentecost were all fulfilled in Christ&apos;s first coming: his death, burial, resurrection, and the outpouring of the Spirit. The timing was not coincidental — Jesus died on Passover, rose on Firstfruits, and poured out the Spirit on Pentecost.
                    </p>
                  </div>
                  <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                    <div style={{ color: GOLD, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
                      Fall Feasts (Awaiting Fulfillment)
                    </div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                      Trumpets, Atonement, and Tabernacles are widely understood to point toward Christ&apos;s second coming: the great trumpet summons, the final judgment and atonement, and God tabernacling permanently with his people (Rev 21:3).
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {FEASTS.map(f => (
                  <div
                    key={f.num}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      padding: 22,
                    }}
                  >
                    <div style={{ display: "flex", gap: 12, alignItems: "flex-start", flexWrap: "wrap", marginBottom: 10 }}>
                      <span
                        style={{
                          background: `${f.color}20`,
                          border: `1px solid ${f.color}40`,
                          borderRadius: 8,
                          padding: "3px 10px",
                          fontSize: 11,
                          color: f.color,
                          fontWeight: 700,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {f.ref}
                      </span>
                      <div>
                        <div style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>
                          {f.num}. {f.name}{" "}
                          <span style={{ color: MUTED, fontSize: 13, fontWeight: 400 }}>({f.heb})</span>
                        </div>
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{f.season}</div>
                      </div>
                    </div>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "0 0 10px" }}>{f.desc}</p>
                    <div
                      style={{
                        background: `${f.color}10`,
                        border: `1px solid ${f.color}30`,
                        borderRadius: 8,
                        padding: "8px 12px",
                        fontSize: 12,
                        color: f.color,
                        fontWeight: 600,
                      }}
                    >
                      NT Fulfillment: {f.nt}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── CLEAN AND UNCLEAN ── */}
          {activeTab === "cleanunclean" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
                <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, marginBottom: 14 }}>
                  Clean and Unclean (Leviticus 11–15)
                </h2>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>
                  The purity laws are arguably the most misunderstood section of Leviticus. They are dismissed as arbitrary hygiene rules or ancient taboos, but this dismissal misses their profound theological logic. The distinction between clean and unclean runs through Israel&apos;s daily existence — what you eat, what you touch, how your body behaves, the spaces you can enter. This is intentional: the purity system embeds theology into the body and daily life at the most routine level.
                </p>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                  The deepest insight into the purity system is this: nearly all uncleanness relates to death or its proximity — corpses, bodily flows that represent life diminished, skin conditions that spread and consume. Uncleanness is association with death. Holiness is association with the living God. The purity laws are a lived, embodied reminder that sinful humanity is on the side of death, and that approach to the God of life requires mediation and cleansing.
                </p>
              </div>

              {/* Four theories */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
                <div style={{ color: GOLD, fontWeight: 800, fontSize: 15, marginBottom: 14 }}>
                  Why These Laws? Four Major Interpretations
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {[
                    { color: TEAL, title: "Hygiene Theory", text: "The laws prevented disease and promoted health. Partially true — several laws do have hygiene benefits. But this is not the primary explanation: some clean animals are more dangerous than unclean ones, and the logic doesn't consistently map onto modern health science." },
                    { color: PURPLE, title: "Anti-Pagan Theory", text: "The laws separated Israel from Canaanite religious practices. Plausible for some laws — several prohibited practices were associated with pagan cults. But the laws cover too wide a range to be explained entirely by separation from paganism." },
                    { color: GOLD, title: "Anthropological Theory (Mary Douglas)", text: "Holiness = completeness, wholeness, blemish-free; impurity = incompleteness or mixed categories. Pigs have split hooves but don't chew cud — they belong to two categories at once. The law teaches category integrity as a metaphor for moral and spiritual integrity." },
                    { color: GREEN, title: "Theological / Symbolic Theory", text: "The laws teach that impurity and holiness cannot coexist. Every meal, every illness, every bodily function becomes a teaching moment: sinful humanity cannot approach a holy God without mediation. The laws create a daily, embodied awareness of the problem that only the sacrificial system can solve." },
                  ].map(t => (
                    <div key={t.title} style={{ background: BG, borderRadius: 10, padding: 16 }}>
                      <div style={{ color: t.color, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>{t.title}</div>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{t.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accordion sections */}
              {PURITY_SECTIONS.map((s, i) => (
                <div
                  key={s.ref}
                  style={{
                    background: CARD,
                    border: `1px solid ${openPurity === String(i) ? s.color : BORDER}`,
                    borderRadius: 12,
                    marginBottom: 10,
                    overflow: "hidden",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenPurity(openPurity === String(i) ? null : String(i))}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      padding: "16px 22px",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <span
                        style={{
                          background: `${s.color}20`,
                          border: `1px solid ${s.color}40`,
                          borderRadius: 8,
                          padding: "3px 10px",
                          fontSize: 11,
                          color: s.color,
                          fontWeight: 700,
                        }}
                      >
                        {s.ref}
                      </span>
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{s.title}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 20 }}>{openPurity === String(i) ? "−" : "+"}</span>
                  </button>
                  {openPurity === String(i) && (
                    <div style={{ padding: "0 22px 18px", borderTop: `1px solid ${BORDER}` }}>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}>{s.content}</p>
                    </div>
                  )}
                </div>
              ))}

              {/* Jesus reversal */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginTop: 4 }}>
                <div style={{ color: TEAL, fontWeight: 800, fontSize: 15, marginBottom: 10 }}>
                  Jesus and the Purity Laws: Holiness That Cleanses
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "0 0 12px" }}>
                  Jesus&apos; interactions with impure people follow a surprising pattern: he touches lepers (Mark 1:41), is touched by a hemorrhaging woman (Mark 5:27-29), touches a corpse (Luke 7:14), and handles the dead (John 11). According to the Levitical logic, each of these contacts should have rendered Jesus unclean. But the reverse happens: the leper is cleansed, the woman is healed, the dead are raised. Jesus&apos; holiness flows outward and overcomes impurity, rather than being contaminated by it.
                </p>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "0 0 12px" }}>
                  This is the NT&apos;s answer to the purity laws: in Christ, the direction of the transfer is reversed. Instead of impurity spreading to the holy, holiness spreads to the impure. &quot;How much more will the blood of Christ, who through the eternal Spirit offered himself without blemish to God, purify our conscience from dead works to serve the living God&quot; (Heb 9:14). The ultimate purity offering is Christ himself — blemish-free, the one truly clean sacrifice that makes all who touch him clean.
                </p>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                  In Acts 10, Peter&apos;s vision of a sheet filled with unclean animals and God&apos;s command &quot;Rise, Peter; kill and eat&quot; signals the abolition of the dietary laws in the new covenant. The laws of separation have served their purpose: Israel has been kept distinct until the Messiah came; now in Christ the dividing wall is broken down (Eph 2:14), and the nations are drawn into the family of God.
                </p>
              </div>
            </div>
          )}

          {/* ── KEY THEMES ── */}
          {activeTab === "themes" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
                <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, marginBottom: 10 }}>Key Theological Themes</h2>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                  Leviticus rewards sustained theological attention. The book that seems most foreign to modern readers turns out to be the one whose themes are most foundational: the nature of holiness, the problem of sin, the necessity of atonement, the need for mediation, and the grace-before-law structure of the entire biblical story.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {THEMES_DATA.map(t => (
                  <div
                    key={t.title}
                    style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}
                  >
                    <div
                      style={{
                        color: t.color,
                        fontWeight: 800,
                        fontSize: 16,
                        marginBottom: 12,
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: t.color,
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                      {t.title}
                    </div>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── JOURNAL ── */}
          {activeTab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
                <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>My Leviticus Journal</h2>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                  Record your reflections on holiness, atonement, the sacrificial system, and what Leviticus reveals about the God who calls us near. What does this book show you about the cost of sin and the depths of grace?
                </p>
              </div>

              {/* Entry form */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 28 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <label
                      style={{
                        color: MUTED,
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      Passage or Chapter
                    </label>
                    <textarea
                      rows={2}
                      value={jForm.verse}
                      onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))}
                      placeholder="e.g. Lev 1:4, Lev 16:21-22, Lev 19:18, Lev 25:10..."
                      style={{
                        width: "100%",
                        background: BG,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 8,
                        color: TEXT,
                        fontSize: 14,
                        padding: "10px 12px",
                        resize: "vertical",
                        boxSizing: "border-box",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        color: MUTED,
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      Reflection
                    </label>
                    <textarea
                      rows={5}
                      value={jForm.reflection}
                      onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))}
                      placeholder="What does this passage teach you about holiness, atonement, or the character of God? How does it connect to Jesus?"
                      style={{
                        width: "100%",
                        background: BG,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 8,
                        color: TEXT,
                        fontSize: 14,
                        padding: "10px 12px",
                        resize: "vertical",
                        boxSizing: "border-box",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        color: MUTED,
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      Prayer Response
                    </label>
                    <textarea
                      rows={3}
                      value={jForm.prayer}
                      onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))}
                      placeholder="How are you responding to God in prayer? What does Leviticus move you to confess, thank, or ask for?"
                      style={{
                        width: "100%",
                        background: BG,
                        border: `1px solid ${BORDER}`,
                        borderRadius: 8,
                        color: TEXT,
                        fontSize: 14,
                        padding: "10px 12px",
                        resize: "vertical",
                        boxSizing: "border-box",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={saveEntry}
                    style={{
                      alignSelf: "flex-start",
                      background: TEAL,
                      color: "#fff",
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 26px",
                      fontWeight: 700,
                      fontSize: 14,
                      cursor: "pointer",
                    }}
                  >
                    {jSaved ? "Saved ✓" : "Save Entry"}
                  </button>
                </div>
              </div>

              {/* Saved entries */}
              {jEntries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {jEntries.map(e => (
                    <div
                      key={e.id}
                      style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22 }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                        <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                        <button
                          type="button"
                          onClick={() => deleteEntry(e.id)}
                          style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13, padding: 0 }}
                        >
                          ✕
                        </button>
                      </div>
                      {e.verse && (
                        <div style={{ marginBottom: 10 }}>
                          <span style={{ color: TEAL, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Passage</span>
                          <p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0", lineHeight: 1.6 }}>{e.verse}</p>
                        </div>
                      )}
                      {e.reflection && (
                        <div style={{ marginBottom: 10 }}>
                          <span style={{ color: GOLD, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Reflection</span>
                          <p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0", lineHeight: 1.6 }}>{e.reflection}</p>
                        </div>
                      )}
                      {e.prayer && (
                        <div>
                          <span style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Prayer</span>
                          <p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0", lineHeight: 1.6 }}>{e.prayer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {jEntries.length === 0 && (
                <div
                  style={{
                    background: CARD,
                    border: `1px dashed ${BORDER}`,
                    borderRadius: 12,
                    padding: 32,
                    textAlign: "center",
                  }}
                >
                  <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                    No entries yet. Begin journaling through Leviticus — your reflections will be saved here.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ── VIDEOS ── */}
          {activeTab === "videos" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
                <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos on Leviticus</h2>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                  Sermons, lectures, and animated overviews on the sacrificial system, the Day of Atonement, the feast calendar, and how the entire book of Leviticus points forward to the person and work of Jesus Christ.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  {
                    videoId: "YHwB7JUEBjI",
                    title: "The Book of Leviticus Explained",
                    desc: "An animated overview of the entire book of Leviticus — the five offerings, the priesthood, the purity laws, the Day of Atonement, the feast calendar, and the Holiness Code. Essential foundation for understanding the NT&apos;s use of Levitical imagery.",
                  },
                  {
                    videoId: "5GZ4vWOkMzE",
                    title: "Day of Atonement — Yom Kippur",
                    desc: "A deep theological exploration of Leviticus 16 — the two goats, the High Priest&apos;s preparation, the sprinkling of blood on the mercy seat, and how Christ&apos;s once-for-all sacrifice fulfills and surpasses everything Yom Kippur pointed toward.",
                  },
                  {
                    videoId: "NnGBhG03g4M",
                    title: "Leviticus and the Sacrificial System",
                    desc: "A thorough treatment of the five main offerings — burnt, grain, peace, sin, and guilt — examining the theology of substitution, the role of blood, the priest as mediator, and how Hebrews 9–10 maps all of these onto the work of Christ.",
                  },
                  {
                    videoId: "hJkLBPIbZr4",
                    title: "Leviticus Feasts Fulfilled in Christ",
                    desc: "The seven mo&apos;adim (appointed times) of Leviticus 23 — how the spring feasts were fulfilled precisely in Christ&apos;s first coming, and what the fall feasts may signal about the second. A calendar structured around the gospel.",
                  },
                ].map(v => (
                  <div
                    key={v.videoId}
                    style={{
                      background: BG,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                  >
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "16px 18px" }}>
                      <h4 style={{ color: TEAL, fontWeight: 700, fontSize: 16, margin: "0 0 6px" }}>{v.title}</h4>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}
