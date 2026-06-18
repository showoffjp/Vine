"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Amos9Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { id: "g0b0CtXFj3E", title: "Amos 9: Judgment and Restoration (Full Chapter Study)" },
    { id: "oXN6LJ2PQHI", title: "The Booth of David &mdash; Amos 9:11 Explained" },
    { id: "DwEy4cJhnaA", title: "Amos 9 and the Jerusalem Council &mdash; Acts 15 Connection" },
    { id: "Ij1K8q0yCjI", title: "No Place to Hide &mdash; God&rsquo;s Inescapable Presence in Amos 9" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };
  const toggle = (id: string) => setOpen(open === id ? null : id);

  const verses = [
    {
      id: "v1",
      ref: "Amos 9:1",
      title: "The Vision at the Altar &mdash; Strike the Capitals",
      body: "I saw the Lord standing beside the altar, and he said: &ldquo;Strike the capitals until the thresholds shake, and shatter them on the heads of all the people; and those who are left of them I will kill with the sword; not one of them shall flee away; not one of them shall escape.&rdquo; This is Amos&rsquo;s fifth and final vision &mdash; the most terrifying. Unlike the earlier visions where Amos intercedes and God relents, here there is no intercession, no relenting. God himself stands at Bethel&rsquo;s altar &mdash; the very center of Israel&rsquo;s official religion &mdash; and commands its destruction. The capitals of the pillars shall fall on the worshipers. Bethel is not sanctuary but trap. The place people trusted for safety becomes the instrument of their judgment.",
    },
    {
      id: "v2",
      ref: "Amos 9:2-4",
      title: "Nowhere to Hide from God",
      body: "&ldquo;If they dig into Sheol, from there shall my hand take them; if they climb up to heaven, from there I will bring them down. If they hide themselves on the top of Carmel, from there I will search them out and take them; and if they hide from my sight at the bottom of the sea, there I will command the serpent, and it shall bite them. And if they go into captivity before their enemies, there I will command the sword, and it shall kill them; and I will fix my eyes upon them for evil and not for good.&rdquo; The psalmist celebrated God&rsquo;s omnipresence as comfort (Psalm 139). Amos uses the same theological reality as warning. There is no territory outside God&rsquo;s jurisdiction, no hiding place beyond his sight. The list moves from cosmic heights (heaven) to cosmic depths (Sheol), from mountain peak to sea bottom. Even exile &mdash; which might seem like escape &mdash; is only relocation into the sword&rsquo;s range.",
    },
    {
      id: "v3",
      ref: "Amos 9:5-6",
      title: "Hymn of the Creator God",
      body: "The Lord God of hosts, he who touches the earth and it melts, and all who dwell in it mourn, and all of it rises like the Nile, and sinks again, like the Nile of Egypt; who builds his upper chambers in the heavens and founds his vault upon the earth; who calls for the waters of the sea and pours them out upon the surface of the earth &mdash; the LORD is his name. For the third time in Amos (see 4:13 and 5:8-9) a hymn fragment interrupts the judgment speech. The point is unmistakable: the God who judges Israel is not a tribal deity but the Creator of heaven and earth. He who makes the Pleiades and Orion (5:8) is the same one who brings the sword. The hymn functions as both warning and doxology: the power behind the judgment is infinite.",
    },
    {
      id: "v4",
      ref: "Amos 9:7",
      title: "Are You Not Like the Cushites to Me?",
      body: "&ldquo;Are you not like the Cushites to me, O people of Israel? declares the LORD. Did I not bring Israel up from Egypt, and the Philistines from Caphtor and the Syrians from Kir?&rdquo; This is one of Amos&rsquo;s most startling statements. The Exodus &mdash; the supreme act of divine election &mdash; does not grant Israel permanent immunity. God has also been at work in the migrations of Philistines and Syrians. Election is real but it does not exempt from accountability. Israel is not cosmically special in the sense that their sins carry no consequences. The rhetorical question challenges the comfortable assumption that covenant privilege means covenant protection regardless of covenant faithfulness.",
    },
    {
      id: "v5",
      ref: "Amos 9:8-10",
      title: "Not Utterly Destroyed &mdash; The Sieve",
      body: "&ldquo;Behold, the eyes of the Lord God are upon the sinful kingdom, and I will destroy it from the surface of the ground, except that I will not utterly destroy the house of Jacob,&rdquo; declares the LORD. &ldquo;For behold, I will command, and shake the house of Israel among all the nations as one shakes with a sieve, but no pebble shall fall to the earth. All the sinners of my people shall die by the sword, who say, &lsquo;Disaster shall not overtake or meet us.&rsquo;&rdquo; Judgment is certain but not total annihilation. The sieve image is extraordinary: Israel will be shaken among the nations, scattered, but the grain (the faithful remnant) will not be lost. What falls through are the sinners who said &ldquo;disaster shall not overtake us.&rdquo; Complacency is identified as the defining sin of the condemned &mdash; not the most spectacular evil but the quiet assumption that judgment is for others.",
    },
    {
      id: "v6",
      ref: "Amos 9:11-12",
      title: "The Fallen Booth of David Raised",
      body: "&ldquo;In that day I will raise up the booth of David that is fallen and repair its breaches, and raise up its ruins and rebuild it as in the days of old, that they may possess the remnant of Edom and all the nations who are called by my name,&rdquo; declares the LORD who does this. The &ldquo;booth of David&rdquo; (sukkah) is the Davidic dynasty &mdash; now fallen, riddled with breaches, in ruins. God promises to restore it. The imagery deliberately recalls the Feast of Booths (Sukkot), the harvest celebration of dwelling in temporary shelters. Crucially, the restored Davidic rule will encompass not just Israel but &ldquo;all the nations who are called by my name.&rdquo; James quotes Amos 9:11-12 at the Jerusalem Council (Acts 15:16-17) to argue that Gentile inclusion in the church fulfills this prophecy.",
    },
    {
      id: "v7",
      ref: "Amos 9:13-15",
      title: "Harvest Abundance &mdash; Plowman Overtakes Reaper",
      body: "&ldquo;Behold, the days are coming,&rdquo; declares the LORD, &ldquo;when the plowman shall overtake the reaper and the treader of grapes him who sows the seed; the mountains shall drip sweet wine, and all the hills shall flow with it. I will restore the fortunes of my people Israel, and they shall rebuild the ruined cities and inhabit them; they shall plant vineyards and drink their wine, and they shall make gardens and eat their fruit. I will plant them on their land, and they shall never again be uprooted out of the land that I have given them,&rdquo; says the LORD your God. The closing promise is one of Scripture&rsquo;s most extravagant images of abundance: harvests so rich that the plowman preparing for next year&rsquo;s crop overtakes the reaper still gathering this year&rsquo;s. Mountains dripping with wine. The final line is emphatic: &ldquo;never again be uprooted.&rdquo; The book that begins with &ldquo;The LORD roars from Zion&rdquo; ends with a garden, a vineyard, and a people permanently planted.",
    },
  ];

  const themes = [
    {
      id: "t1",
      title: "Divine Inescapability: Omnipresence as Warning",
      color: TEAL,
      body: "The seven-fold search through heaven, Sheol, Carmel, the sea, and exile (9:2-4) uses the same theological truth as Psalm 139 but to opposite effect. The psalmist celebrates that God is everywhere as comfort; Amos announces it as warning. God&rsquo;s inescapable presence means there is no hiding place for those who continue in sin. This is terrifying in judgment but ultimately good news for the repentant: the same God who searches out sinners for judgment also searches for the lost to bring them home.",
    },
    {
      id: "t2",
      title: "Election Without Immunity",
      color: GOLD,
      body: "Amos 9:7 is one of the Bible&rsquo;s most radical statements about election. God&rsquo;s choice of Israel, demonstrated supremely in the Exodus, does not provide blanket immunity from judgment. God is at work among all peoples (he also brought the Philistines from Caphtor and the Syrians from Kir). Election creates responsibility and accountability, not unconditional protection. This truth guards against the assumption that belonging to the right community or having the right heritage guarantees God&rsquo;s favor regardless of faithfulness.",
    },
    {
      id: "t3",
      title: "The Sieve: Judgment That Preserves a Remnant",
      color: GREEN,
      body: "The sieve image (9:8-10) is one of Scripture&rsquo;s most precise pictures of divine judgment. Unlike total destruction, sieving is discriminating: it shakes everything but distinguishes between grain (the faithful) and chaff (the complacent and corrupt). &ldquo;No pebble shall fall to the earth&rdquo; means the grain &mdash; the genuine remnant &mdash; will not be lost. Judgment is therefore not the end of God&rsquo;s people but a painful purification that preserves what is real.",
    },
    {
      id: "t4",
      title: "The Fallen Booth of David and Gentile Inclusion",
      color: PURPLE,
      body: "The promise to restore the &ldquo;fallen booth of David&rdquo; (9:11) is one of the Old Testament&rsquo;s clearest anticipations of the Messianic age. The Davidic dynasty that had fallen into ruin would be rebuilt. James&rsquo;s citation of this passage at the Jerusalem Council (Acts 15) to support Gentile inclusion reveals the early church&rsquo;s conviction that Jesus&rsquo; resurrection was the raising of this fallen booth. The restored Davidic rule encompasses &ldquo;all the nations who are called by my name&rdquo; &mdash; a universal mission built into the promise.",
    },
    {
      id: "t5",
      title: "Restoration Abundance: The Final Word",
      color: ROSE,
      body: "After seven chapters of judgment, Amos ends with a vision of extravagant abundance: harvests so rich they overlap, mountains dripping wine, ruined cities rebuilt, gardens flourishing, and a people permanently planted. The final word is not judgment but garden. This structure &mdash; extended warnings followed by a vision of restoration &mdash; is the shape of prophetic hope: God does not want to destroy but to restore, and his ultimate intention is abundance, not desolation.",
    },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: `linear-gradient(135deg, ${TEAL}22, ${PURPLE}22)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: `${TEAL}22`, border: `1px solid ${TEAL}44`, borderRadius: 8, padding: "0.3rem 1rem", marginBottom: "1rem", color: TEAL, fontSize: "0.85rem", letterSpacing: "0.1em" }}>AMOS 9</div>
        <h1 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.2 }}>I Will Restore the Fallen Booth of David</h1>
        <p style={{ color: MUTED, maxWidth: 640, margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.6 }}>Inescapable judgment, the sieve of God, and the most luminous restoration promise in the Minor Prophets &mdash; a book that opens with a roar ends with a garden.</p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", padding: "1.5rem 1rem", flexWrap: "wrap" }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.2rem", borderRadius: 999, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, cursor: "pointer", fontWeight: tab === t ? 700 : 400, fontSize: "0.9rem" }}>{TAB_LABELS[t]}</button>
        ))}
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1rem 4rem" }}>

        {tab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", marginBottom: "2rem" }}>
              <h2 style={{ color: TEAL, fontSize: "1.4rem", marginBottom: "1rem", fontWeight: 700 }}>Chapter Overview</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Amos 9 is the climactic final chapter of a book that has delivered seven chapters of relentless prophetic judgment against Israel&rsquo;s social injustice and religious hypocrisy. The chapter opens with the most terrifying of Amos&rsquo;s five visions &mdash; God himself standing at the altar of Bethel, commanding its destruction &mdash; and closes with one of the Old Testament&rsquo;s most extravagant promises of restoration: mountains dripping wine, plowmen overtaking reapers, a people planted and never again uprooted." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The theological architecture of Amos 9 is carefully constructed. First comes the inescapable vision (9:1) and the seven-fold affirmation that there is nowhere to hide from God (9:2-4). Then a hymn of the Creator establishes that the God judging Israel is the Lord of all creation (9:5-6). The shocking statement of 9:7 &mdash; that the Exodus does not grant Israel unique immunity &mdash; levels the playing field between Israel and the nations. But 9:8b-10 introduces mercy into the judgment: not total destruction but a sieve that preserves the grain." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The pivot comes at 9:11 with one of the Minor Prophets&rsquo; greatest promises: the restoration of the &ldquo;fallen booth of David.&rdquo; The language is deliberately humble (a booth, not a palace) yet historically momentous. This promise was quoted by James at the Jerusalem Council (Acts 15:16-17) as the scriptural basis for Gentile inclusion in the church &mdash; demonstrating that the early Christians understood Jesus&rsquo; resurrection as the raising of this fallen dynasty. The book ends not with ashes but with a garden." }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Author", value: "Amos of Tekoa", color: TEAL },
                { label: "Period", value: "c. 760&ndash;750 BCE", color: GOLD },
                { label: "Setting", value: "Northern Israel", color: PURPLE },
                { label: "Key Verse", value: "Amos 9:11", color: GREEN },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                  <div style={{ color: item.color, fontSize: "0.75rem", letterSpacing: "0.1em", marginBottom: "0.3rem" }}>{item.label.toUpperCase()}</div>
                  <div style={{ color: TEXT, fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: item.value }} />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", marginBottom: "2rem" }}>
              <h3 style={{ color: GOLD, fontSize: "1.1rem", marginBottom: "1rem", fontWeight: 700 }}>The Structure of Amos 9</h3>
              {[
                { ref: "9:1", desc: "Fifth vision: the LORD at the altar commands destruction" },
                { ref: "9:2-4", desc: "Seven-fold inescapability &mdash; from Sheol to heaven to the sea" },
                { ref: "9:5-6", desc: "Hymn fragment: the Creator God" },
                { ref: "9:7", desc: "Election without immunity: Are you not like the Cushites?" },
                { ref: "9:8-10", desc: "Not utter destruction &mdash; the sieve of judgment" },
                { ref: "9:11-12", desc: "The fallen booth of David raised &mdash; the nations called by his name" },
                { ref: "9:13-15", desc: "Restoration abundance &mdash; planted and never uprooted" },
              ].map(s => (
                <div key={s.ref} style={{ display: "flex", gap: "1rem", padding: "0.5rem 0", borderBottom: `1px solid ${BORDER}` }}>
                  <span style={{ color: TEAL, fontWeight: 700, minWidth: 60, fontSize: "0.9rem" }}>{s.ref}</span>
                  <span style={{ color: MUTED, fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: s.desc }} />
                </div>
              ))}
            </div>

            <div style={{ background: `${PURPLE}11`, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontSize: "1rem", marginBottom: "0.75rem", fontWeight: 700 }}>New Testament Connection: Acts 15</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "At the Jerusalem Council, James quoted Amos 9:11-12 to support the Gentile mission: &ldquo;After this I will return, and I will rebuild the tent of David that has fallen; I will rebuild its ruins, and I will restore it, that the remnant of mankind may seek the Lord, and all the Gentiles who are called by my name&rdquo; (Acts 15:16-17). This is remarkable: James understood the resurrection of Jesus as the fulfillment of the promise to raise the &ldquo;fallen booth of David,&rdquo; and the inclusion of Gentiles in the church as the fulfillment of &ldquo;all the nations who are called by my name.&rdquo; Amos&rsquo;s restoration promise was not merely about Israel&rsquo;s national future but about the universal scope of messianic salvation." }} />
            </div>
          </div>
        )}

        {tab === "themes" && (
          <div>
            <h2 style={{ color: TEXT, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>Key Themes in Amos 9</h2>
            {themes.map(theme => (
              <div key={theme.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: "1.25rem", overflow: "hidden" }}>
                <button onClick={() => toggle(theme.id)} style={{ width: "100%", background: "transparent", border: "none", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}>
                  <span style={{ fontWeight: 700, fontSize: "1rem", textAlign: "left", color: theme.color }}>{theme.title}</span>
                  <span style={{ color: theme.color, fontWeight: 700, fontSize: "1.2rem", marginLeft: "1rem" }}>{open === theme.id ? "-" : "+"}</span>
                </button>
                {open === theme.id && (
                  <div style={{ padding: "0 1.5rem 1.5rem" }}>
                    <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: theme.body }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "verse" && (
          <div>
            <h2 style={{ color: TEXT, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>Verse by Verse &mdash; Amos 9</h2>
            {verses.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: "1.25rem", overflow: "hidden" }}>
                <button onClick={() => toggle(v.id)} style={{ width: "100%", background: "transparent", border: "none", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ color: TEAL, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.2rem" }}>{v.ref}</div>
                    <div style={{ fontWeight: 700 }} dangerouslySetInnerHTML={{ __html: v.title }} />
                  </div>
                  <span style={{ color: TEAL, fontWeight: 700, fontSize: "1.2rem", marginLeft: "1rem" }}>{open === v.id ? "-" : "+"}</span>
                </button>
                {open === v.id && (
                  <div style={{ padding: "0 1.5rem 1.5rem" }}>
                    <p style={{ color: MUTED, lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.body }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "application" && (
          <div>
            <h2 style={{ color: TEXT, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>Application &mdash; Living Amos 9</h2>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", marginBottom: "2rem" }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: "1rem", fontWeight: 700 }}>Receiving God&rsquo;s Searching Presence</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The omnipresence of God depicted in Amos 9:2-4 is simultaneously sobering and comforting. For those in unrepentant sin it is a warning: there is nowhere to hide. But for those who are honestly seeking God, it is the best news possible: the God who searches the depths of Sheol and the heights of heaven is the same God who has promised never to leave or forsake his people (Heb 13:5)." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The practical application is an invitation to honesty: stop hiding and let God&rsquo;s presence become comfort rather than threat. Confession and transparency are the path from experiencing God&rsquo;s presence as searching-for-judgment to experiencing it as searching-for-restoration." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", marginBottom: "2rem" }}>
              <h3 style={{ color: TEAL, fontSize: "1.1rem", marginBottom: "1rem", fontWeight: 700 }}>No Privilege Without Responsibility</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Amos 9:7 challenges every form of religious entitlement. The Exodus was real, but it does not grant permanent immunity. This principle translates directly into contemporary Christian life: being born into a Christian family, attending church, having spiritual experiences, serving in ministry &mdash; none of these things provides blanket protection from accountability." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Jesus made the same point: &ldquo;Not everyone who says to me, &lsquo;Lord, Lord,&rsquo; will enter the kingdom of heaven&rdquo; (Matt 7:21). The challenge is to move from presumption to covenant faithfulness &mdash; to trust in what God has done while actually living accordingly." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", marginBottom: "2rem" }}>
              <h3 style={{ color: PURPLE, fontSize: "1.1rem", marginBottom: "1rem", fontWeight: 700 }}>Claiming the Restoration Promise</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The promise of Amos 9:11-15 is given to people who have just heard devastating judgment. This is the pattern of prophetic hope: the darkest prophecies are followed by the brightest promises. The &ldquo;fallen booth of David&rdquo; &mdash; a dynasty in ruins &mdash; will be raised. Mountains will drip wine. Cities will be rebuilt. The people will be planted and never again uprooted." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "For Christians, Jesus is the raised booth of David &mdash; his resurrection the fulfillment of this promise. The Gentile church is the &ldquo;nations called by my name.&rdquo; We live in the &ldquo;already&rdquo; of this restoration (the Spirit poured out, the nations included) and await the &ldquo;not yet&rdquo; (the full harvest abundance, the permanent planting). Both the already and the not yet give us courage and hope." }} />
            </div>

            <div style={{ background: `${GREEN}11`, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ color: GREEN, fontSize: "1rem", marginBottom: "1rem", fontWeight: 700 }}>Reflection Questions</h3>
              {[
                "Is there an area of your life where you have been trying to hide from God? What would it mean to stop hiding and let his presence become comfort?",
                "Do you have any form of religious entitlement &mdash; an assumption that your heritage, church attendance, or past experiences automatically guarantee God&rsquo;s favor? How does Amos 9:7 challenge that?",
                "Where do you see the &ldquo;sieve&rdquo; at work in your own life &mdash; seasons of shaking that are purifying rather than destroying?",
                "How does knowing that Jesus is the fulfillment of the &ldquo;fallen booth of David&rdquo; promise change how you read the Old Testament?",
                "The book of Amos ends with a garden. What does that image of restoration speak to the driest, most desolate places in your life right now?",
              ].map((q, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ color: GREEN, fontWeight: 700, minWidth: 20 }}>{i + 1}.</span>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                </div>
              ))}
            </div>

            <h2 style={{ color: TEXT, fontSize: "1.3rem", fontWeight: 700, marginBottom: "1.25rem" }}>Video Resources</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {videoItems.map(v => <VideoEmbed key={v.id} videoId={v.id} title={v.title} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
