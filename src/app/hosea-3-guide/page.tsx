"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Hosea3GuidePage() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { id: "nJbT5Yw7MpA", title: "Hosea 3: Go Again Love a Woman (Verse by Verse)" },
    { id: "KvPqX8uRcNw", title: "The Price of Redemption &mdash; Hosea 3:2 Explained" },
    { id: "LmQbY9wZfHs", title: "The Many Days of Hosea 3 &mdash; Waiting for Restoration" },
    { id: "GpRtN6vJkXo", title: "David Their King &mdash; Hosea 3:5 and the Messiah" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const verseItems = [
    {
      id: "v1",
      ref: "Hosea 3:1",
      label: "Go Again, Love an Adulteress &mdash; As the LORD Loves Israel",
      body: "The chapter opens with one of the most startling divine commands in Scripture: &ldquo;Go again, love a woman who is loved by another man and is an adulteress, even as the LORD loves the children of Israel, though they turn to other gods and love cakes of raisins.&rdquo; The word &ldquo;again&rdquo; (Hebrew: od) is theologically loaded. It is not a first-time command but a renewal &mdash; Hosea is being called to re-enact an already established pattern of love. The situation has not improved; Gomer has not returned on her own initiative. The command comes in the context of ongoing unfaithfulness, which is precisely the analogy God is making about Israel. The phrase &ldquo;love cakes of raisins&rdquo; is more specific than it might appear. Raisin cakes were used in cultic festivals dedicated to the Baals and to Asherah, the Canaanite fertility goddess. Israel&rsquo;s spiritual adultery was not vague disinterest in God; it was specific, devoted, enthusiastic worship of rival deities &mdash; the full engagement of desire given to the wrong object. Yet God&rsquo;s love is not deterred by the unfaithfulness. The explicit &ldquo;even as the LORD loves the children of Israel&rdquo; is one of the most direct theological statements in Hosea: what Hosea is about to do is an embodied parable of divine love operating in the face of rejection. God&rsquo;s love is not contingent on Israel&rsquo;s response; it continues into the breach of covenant precisely because it is covenantal love, not merely emotional affection.",
    },
    {
      id: "v2",
      ref: "Hosea 3:2",
      label: "The Price &mdash; Fifteen Shekels of Silver and Barley",
      body: "Verse 2 records the transaction with a precision that feels almost deliberately spare: &ldquo;So I bought her for fifteen shekels of silver and a homer and a lethech of barley.&rdquo; The word &ldquo;bought&rdquo; (Hebrew: karah) is the vocabulary of commercial transaction &mdash; the purchase of someone from another owner. Gomer had apparently passed from Hosea&rsquo;s household into some form of slavery or binding to another man, and Hosea pays to redeem her. The price itself has fascinated interpreters throughout the centuries. The standard price of a slave in the ancient Near East, established in Exodus 21:32, was thirty shekels of silver. The combination here &mdash; fifteen shekels plus grain &mdash; has traditionally been understood as equivalent to thirty shekels when the grain is converted to its silver value, though scholars debate the exact equivalence. Whether or not the arithmetic resolves to exactly thirty shekels, the interpretive tradition has seen in this purchase price a deliberate echo of the slave-price, suggesting that Gomer has been reduced to the status of a purchased slave and that Hosea pays the full cost of her redemption. For the New Testament, the resonance with the price of Jesus &mdash; the thirty pieces of silver of Zechariah 11:12-13 and Matthew 26:15 &mdash; is striking and has long been noted in the Christian reading tradition. Redemption is not metaphor; it is transaction. Someone pays.",
    },
    {
      id: "v3",
      ref: "Hosea 3:3",
      label: "Many Days &mdash; You Shall Not Play the Whore",
      body: "Having paid the price, Hosea speaks to Gomer with words that are simultaneously tender and demanding: &ldquo;You must dwell as mine for many days. You shall not play the whore, or belong to another man; so will I also be to you.&rdquo; The phrase &ldquo;many days&rdquo; (Hebrew: yamim rabbim) is not a specific duration; it is an indefinite period of waiting, a liminal season between redemption and full restoration. The conditions Hosea sets are symmetrical: Gomer is to be his alone, and he will be hers alone. The fidelity is mutual. But notice what is not said: there is no immediate return to the full status of wife. The language is &ldquo;you shall dwell as mine&rdquo; &mdash; not yet &ldquo;you shall live with me as before.&rdquo; This is restoration in process, not restoration complete. The &ldquo;many days&rdquo; language creates a space between the act of redemption (v.2) and the consummation of reconciliation (implied in v.5). This liminal space is one of the most psychologically and spiritually realistic elements of Hosea 3: recovery from relational betrayal is not instantaneous; it requires time, faithfulness, and the slow rebuilding of trust. The &ldquo;so will I also be to you&rdquo; is Hosea&rsquo;s pledge of his own fidelity during that waiting period. He is not stepping back from commitment while she proves herself; he is committed to the process with her.",
    },
    {
      id: "v4",
      ref: "Hosea 3:4",
      label: "Without King or Sacrifice or Ephod or Household Gods",
      body: "Verse 4 makes the allegorical application explicit: &ldquo;For the children of Israel shall dwell many days without king or prince, without sacrifice or pillar, without ephod or household gods.&rdquo; The list of absences is carefully constructed. It spans both the legitimate structures of Israelite life (king, sacrifice, ephod) and the illegitimate ones (pillar &mdash; a standing stone used in Baal worship; household gods &mdash; the teraphim condemned throughout the Old Testament). The loss of both represents a total stripping away of the religious and political infrastructure of Israel&rsquo;s national life. The &ldquo;many days&rdquo; of Israel&rsquo;s waiting will be characterized by deprivation across the entire spectrum: no king to lead the nation, no official sacrificial system to provide access to God, no ephod for priestly discernment of the divine will, and no alternative deities to fill the gap. This is exile in its fullest sense: not merely geographic displacement but the loss of every mediated relationship with the divine, whether legitimate or counterfeit. The stripping is total. But &mdash; crucially &mdash; this verse is not the end of the story. It describes the conditions of the &ldquo;many days,&rdquo; not the permanent state of affairs. Verse 5 will change everything. The desolation of verse 4 is purposive: it is creating the conditions in which Israel will finally return and seek the LORD with nothing else to turn to.",
    },
    {
      id: "v5",
      ref: "Hosea 3:5",
      label: "Afterward &mdash; They Shall Return and Seek the LORD and David Their King",
      body: "The chapter&rsquo;s one word of hope arrives with quiet but massive force: &ldquo;Afterward the children of Israel shall return and seek the LORD their God, and David their king, and they shall come in fear to the LORD and to his goodness in the latter days.&rdquo; The word &ldquo;afterward&rdquo; (Hebrew: achar) signals a decisive temporal transition: after the many days of stripping, something new will happen. The shape of this &ldquo;afterward&rdquo; is defined by two verbs: return (shuv) and seek (baqash). Shuv is one of the Old Testament&rsquo;s great words for repentance; it means to turn back, to reverse direction. It is what the prodigal son does when he &ldquo;came to himself&rdquo; and went back to his father. Baqash means to seek earnestly, to search for, to inquire. Together, these verbs describe the shape of genuine repentance: it is not merely an emotional feeling of sorrow but a concrete change of direction accompanied by active pursuit of the one who was abandoned. &ldquo;David their king&rdquo; is the phrase that most directly connects Hosea 3 to the messianic hope. David had been dead for well over a century when Hosea wrote (mid-eighth century BC). The reference cannot be to the historical David. It must be, in the language of Ezekiel 34:23-24 and 37:24-25, to the coming Davidic king &mdash; the Messiah who will fulfill and surpass everything David represented. &ldquo;They shall come in fear to the LORD and to his goodness in the latter days&rdquo; &mdash; the phrase &ldquo;latter days&rdquo; (Hebrew: acharit ha-yamim) is the classic expression for the eschatological period of final fulfillment.",
    },
  ];

  const themeItems = [
    {
      id: "t1",
      color: GREEN,
      label: "Redemptive Purchase &mdash; The Price of Love",
      body: "The central act of Hosea 3 is a commercial transaction: Hosea buys Gomer back. This is not merely romantic; it is legal and costly. The vocabulary of purchase (karah, &ldquo;to buy&rdquo;) places the act of love within the framework of redemption theology &mdash; the idea, rooted in the Mosaic law, that a person or property that has been lost or alienated can be recovered by the payment of a price by a near kinsman (go&rsquo;el). Hosea acts as Gomer&rsquo;s redeemer, paying what it costs to bring her back. The theology runs directly into the New Testament: &ldquo;You were bought with a price&rdquo; (1 Corinthians 6:20; 7:23). The cross is the place where God pays, in the person of the Son, the price of humanity&rsquo;s redemption from the slavery into which sin has sold us. Hosea 3 is not a cute romantic story; it is a costly enacted parable of what divine love actually does.",
    },
    {
      id: "t2",
      color: GOLD,
      label: "The Waiting Period &mdash; Many Days",
      body: "The phrase yamim rabbim (&ldquo;many days&rdquo;) appears in both verse 3 (Hosea&rsquo;s instruction to Gomer) and verse 4 (its application to Israel) and constitutes the chapter&rsquo;s central temporal concept. The waiting period is neither judgment nor restoration; it is the liminal space between them &mdash; the season after the price has been paid but before the full reconciliation has arrived. This is one of the most pastorally significant concepts in Hosea. Christians living between the cross (where the price was paid) and the return of Christ (when full restoration arrives) are always in the &ldquo;many days.&rdquo; The many days are not wasted time; they are the time in which faithfulness is practiced, trust is rebuilt, and desire is reoriented. The deprivation of verse 4 &mdash; without king, sacrifice, or ephod &mdash; is the stripping that prepares for the seeking of verse 5.",
    },
    {
      id: "t3",
      color: PURPLE,
      label: "Raisin Cakes &mdash; Cultic Offerings and Misdirected Desire",
      body: "The reference to &ldquo;cakes of raisins&rdquo; in verse 1 is not a generic description of comfort food. Archaeological evidence and ancient texts confirm that raisin cakes were used as votive offerings in the cult of Asherah, the Canaanite goddess associated with fertility and sexuality. To &ldquo;love raisin cakes&rdquo; is to be devotedly engaged in a rival religious practice. The specificity matters for application: Israel&rsquo;s unfaithfulness was not cold indifference but hot desire &mdash; they genuinely loved what they were offering their hearts to. Spiritual adultery, in Hosea&rsquo;s vision, is not merely passive drift away from God; it is the active engagement of desire, attention, and devotion with things that are not God. The question Hosea 3 poses is not &ldquo;are you disengaged from God?&rdquo; but &ldquo;what are you actively loving instead?&rdquo;",
    },
    {
      id: "t4",
      color: TEAL,
      label: "Return and Seek &mdash; The Shape of Repentance",
      body: "The two verbs of verse 5 &mdash; shuv (return) and baqash (seek) &mdash; together define what genuine repentance looks like in Hosea&rsquo;s vocabulary. Shuv is directional: it means turning around, reversing course. It is not an internal feeling but an external change of movement. Baqash is relational and active: it means to search for, to inquire earnestly, to seek out. The combination implies that repentance is both a turning away (from other loves) and a turning toward (the LORD). It is not passive; it involves active pursuit of the God who is both the one offended and the one sought. Coming &ldquo;in fear to the LORD and to his goodness&rdquo; balances the two aspects of divine character that make genuine repentance possible: his awesome holiness that makes repentance necessary, and his goodness (Hebrew: tov) that makes repentance safe. One does not run toward a God who is only terrifying; one runs toward a God who is terrifying and good.",
    },
    {
      id: "t5",
      color: ROSE,
      label: "David Their King &mdash; Messianic Pointer",
      body: "The phrase &ldquo;David their king&rdquo; in verse 5 is, in its original context, almost certainly not a reference to any historical restoration of the Davidic dynasty in the immediate post-exilic period &mdash; though that hope was certainly present. The phrase functions as a technical messianic title for the coming Davidic ruler who will rule over all Israel (both the northern and southern kingdoms) in the eschatological era. The parallel with Ezekiel 34:23-24 (&ldquo;I will set up over them one shepherd, my servant David&rdquo;) and Ezekiel 37:24-25 (&ldquo;my servant David shall be king over them&rdquo;) confirms the pattern: &ldquo;David&rdquo; in prophetic contexts often means not the man who died in 970 BC but the coming king of his line who will fulfill his royal calling permanently. For the Christian reader, the identification of this figure with Jesus is the natural conclusion of this prophetic tradition.",
    },
    {
      id: "t6",
      color: GOLD,
      label: "The Enacted Parable &mdash; Biography as Theology",
      body: "Hosea&rsquo;s marriage to Gomer is the most extended use of enacted prophecy in the Old Testament. Unlike Isaiah walking naked for three years (Isaiah 20) or Jeremiah smashing a clay pot (Jeremiah 19), Hosea&rsquo;s symbolic act is not a brief performance but the shape of his entire domestic life. This raises profound questions about the relationship between lived experience and theological proclamation. Hosea does not merely announce that God loves an unfaithful people; he lives it. His household is the sermon. The pain is real; the rejection is real; the cost of redemption is real. This is the prophetic tradition at its most demanding: the prophet&rsquo;s life is commandeered by God as a medium of revelation. The intimacy of the parable &mdash; that it takes place not in a public square but in the most private relationships of life &mdash; is part of what makes it so theologically dense. God&rsquo;s love for Israel is not a legal arrangement; it is personal, costly, sustained, and rooted in covenant commitment that transcends the worthiness of its object.",
    },
  ];

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: "var(--header-height, 80px)",
        color: TEXT,
        fontFamily: "Georgia, serif",
      }}
    >
      {/* -- HERO --------------------------------------------------------- */}
      <section
        style={{
          background:
            "linear-gradient(180deg, rgba(217,119,6,0.15) 0%, rgba(107,79,187,0.08) 55%, transparent 100%)",
          padding: "72px 24px 56px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(217,119,6,0.10) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(217,119,6,0.12)",
            border: "1px solid rgba(217,119,6,0.30)",
            borderRadius: "100px",
            padding: "6px 18px",
            marginBottom: "24px",
            position: "relative",
          }}
        >
          <span
            style={{
              color: GOLD,
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            HOSEA 3 &mdash; BIBLE STUDY GUIDE
          </span>
        </div>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: "20px",
            position: "relative",
            background: "linear-gradient(135deg, #F2F2F8 0%, #C8C8E8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Go Again, Love a Woman
        </h1>
        <p
          style={{
            fontSize: "clamp(14px, 2vw, 20px)",
            color: MUTED,
            maxWidth: "680px",
            margin: "0 auto 12px",
            lineHeight: 1.7,
            position: "relative",
          }}
          dangerouslySetInnerHTML={{
            __html:
              "Five verses that contain an entire theology of redemptive love: the price paid to reclaim what was lost, the &ldquo;many days&rdquo; of faithful waiting, and the final promise that Israel will return to seek the LORD and David their king.",
          }}
        />
        <p
          style={{
            fontSize: "13px",
            color: GOLD,
            fontWeight: 600,
            letterSpacing: "0.05em",
            position: "relative",
          }}
        >
          Hosea 3:1&ndash;5
        </p>
      </section>

      {/* -- TABS --------------------------------------------------------- */}
      <div
        style={{
          position: "sticky",
          top: "var(--header-height, 80px)",
          zIndex: 20,
          background: BG,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            gap: "0",
            overflowX: "auto",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "14px 20px",
                background: "transparent",
                border: "none",
                borderBottom: tab === t ? `2px solid ${GOLD}` : "2px solid transparent",
                color: tab === t ? GOLD : MUTED,
                fontWeight: tab === t ? 700 : 500,
                fontSize: "14px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                fontFamily: "system-ui, sans-serif",
                transition: "color 0.15s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>
      </div>

      {/* -- CONTENT ------------------------------------------------------ */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 24px 96px" }}>

        {/* OVERVIEW TAB */}
        {tab === "overview" && (
          <div>
            {/* Summary card */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${GOLD}`,
                borderRadius: "20px",
                padding: "40px",
                marginBottom: "32px",
              }}
            >
              <p
                style={{
                  color: GOLD,
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "16px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                CHAPTER OVERVIEW
              </p>
              <h2
                style={{
                  fontSize: "clamp(20px, 3vw, 30px)",
                  fontWeight: 800,
                  color: TEXT,
                  marginBottom: "24px",
                  lineHeight: 1.25,
                }}
              >
                The Price of Love, the Season of Waiting, and the Promise of Return
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <p
                  style={{ color: "#C0C0D8", fontSize: "16px", lineHeight: 1.85 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "Hosea 3 is only five verses long, but it is one of the most concentrated passages in the entire prophetic canon. It takes the reader through the complete arc of covenant love: command (v.1), transaction (v.2), instruction (v.3), application (v.4), and promise (v.5). God speaks to Hosea with the word &ldquo;again&rdquo; &mdash; implying a renewal of a prior command &mdash; and tells him to go love a woman who has been unfaithful, just as the LORD loves the children of Israel even though they have turned to other gods and devoted themselves to the cultic raisin cakes associated with the worship of Baal and Asherah.",
                  }}
                />
                <p
                  style={{ color: "#C0C0D8", fontSize: "16px", lineHeight: 1.85 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "Hosea obeys, purchasing Gomer back (v.2) at a price commonly associated with the redemption of a slave. He then instructs her to remain faithful during a long waiting period (v.3): she is to be his alone, and he will be hers. No sexual union yet, no full restoration yet &mdash; but a firm commitment on both sides during the &ldquo;many days&rdquo; of re-formation. Verse 4 applies this directly to Israel: the people will dwell for many days without any of the political or religious structures that gave their life shape &mdash; not even the false ones. The desolation is complete.",
                  }}
                />
                <p
                  style={{ color: "#C0C0D8", fontSize: "16px", lineHeight: 1.85 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "But verse 5 turns everything: &ldquo;Afterward the children of Israel shall return and seek the LORD their God, and David their king, and they shall come in fear to the LORD and to his goodness in the latter days.&rdquo; The stripping creates the seeking. The &ldquo;many days&rdquo; of deprivation end not in despair but in the most important action a human being can take: turning back toward God and actively pursuing him.",
                  }}
                />
              </div>
            </div>

            {/* Key verse highlight */}
            <div
              style={{
                background: `linear-gradient(135deg, rgba(217,119,6,0.12) 0%, rgba(107,79,187,0.08) 100%)`,
                border: `1px solid rgba(217,119,6,0.25)`,
                borderRadius: "20px",
                padding: "40px",
                marginBottom: "32px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: GOLD,
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "20px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                KEY VERSE
              </p>
              <blockquote
                style={{
                  color: TEXT,
                  fontSize: "clamp(16px, 2.5vw, 22px)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  margin: "0 0 16px 0",
                  maxWidth: "680px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "&ldquo;Afterward the children of Israel shall return and seek the LORD their God, and David their king, and they shall come in fear to the LORD and to his goodness in the latter days.&rdquo;",
                }}
              />
              <p
                style={{
                  color: GOLD,
                  fontSize: "14px",
                  fontWeight: 700,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Hosea 3:5
              </p>
            </div>

            {/* Context cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "20px",
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${GREEN}`,
                  borderRadius: "18px",
                  padding: "28px",
                }}
              >
                <p
                  style={{
                    color: GREEN,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    marginBottom: "12px",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  HISTORICAL CONTEXT
                </p>
                <p
                  style={{ color: MUTED, fontSize: "14px", lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "Hosea ministered in the northern kingdom of Israel during the reign of Jeroboam II (approximately 786&ndash;746 BC) and through the following period of instability. Chapters 1&ndash;3 form the autobiographical framework for the entire book. Chapter 1 describes Hosea&rsquo;s marriage to Gomer at God&rsquo;s command. Chapter 2 is an extended poetic oracle of judgment and restoration. Chapter 3 is a first-person account of redemption &mdash; the only chapter of the three told in Hosea&rsquo;s own voice.",
                  }}
                />
              </div>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${PURPLE}`,
                  borderRadius: "18px",
                  padding: "28px",
                }}
              >
                <p
                  style={{
                    color: PURPLE,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    marginBottom: "12px",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  LITERARY STRUCTURE
                </p>
                <p
                  style={{ color: MUTED, fontSize: "14px", lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "The chapter moves through three phases: (1) the divine command and its theological grounding (v.1); (2) the enacted redemption and its conditions (vv.2-3); (3) the allegorical application and its eschatological resolution (vv.4-5). The structure mirrors the larger arc of Hosea 1-3: command, catastrophe, and finally covenant renewal. The chapter ends where the prophet has been pointing all along: Israel returning to the God who never stopped loving her.",
                  }}
                />
              </div>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${TEAL}`,
                  borderRadius: "18px",
                  padding: "28px",
                }}
              >
                <p
                  style={{
                    color: TEAL,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    marginBottom: "12px",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  NEW TESTAMENT CONNECTIONS
                </p>
                <p
                  style={{ color: MUTED, fontSize: "14px", lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "The redemptive purchase of Hosea 3:2 resonates with 1 Corinthians 6:20 (&ldquo;you were bought with a price&rdquo;) and 1 Peter 1:18-19 (redeemed not with silver or gold but with the precious blood of Christ). &ldquo;David their king&rdquo; in verse 5 connects to Luke 1:32-33, John 7:42, and Revelation 5:5. The &ldquo;return and seek&rdquo; shape of repentance in verse 5 underlies Luke 15&rsquo;s three parables of the lost sheep, lost coin, and lost (prodigal) son.",
                  }}
                />
              </div>
            </div>

            {/* Brief note on the price */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: "18px",
                padding: "32px",
                marginBottom: "8px",
              }}
            >
              <p
                style={{
                  color: ROSE,
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "12px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                A NOTE ON THE PRICE IN 3:2
              </p>
              <p
                style={{ color: MUTED, fontSize: "14px", lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The fifteen shekels of silver plus a homer and a lethech of barley has generated substantial scholarly discussion. The standard slave price in Exodus 21:32 is thirty shekels of silver. Various attempts have been made to show that the barley converts to fifteen silver shekels at prevailing grain prices, making the total thirty. Whether or not this arithmetic is precise, the tradition of reading the price as the price of a slave &mdash; and connecting it to the thirty pieces of silver in Zechariah 11 and Matthew 26 &mdash; is ancient and theologically rich. The point is not mathematical precision but theological weight: redemption costs something, and the one who loves pays it.",
                }}
              />
            </div>
          </div>
        )}

        {/* THEMES TAB */}
        {tab === "themes" && (
          <div>
            <div style={{ marginBottom: "32px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 800,
                  color: TEXT,
                  marginBottom: "8px",
                }}
              >
                Key Themes in Hosea 3
              </h2>
              <p
                style={{ color: MUTED, fontSize: "15px", lineHeight: 1.7, fontFamily: "system-ui, sans-serif" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Six major themes that make this brief chapter one of Scripture&rsquo;s densest theological statements.",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {themeItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "18px",
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "22px 28px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      gap: "16px",
                      textAlign: "left",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: item.color,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          color: TEXT,
                          fontWeight: 700,
                          fontSize: "16px",
                        }}
                        dangerouslySetInnerHTML={{ __html: item.label }}
                      />
                    </div>
                    <span
                      style={{
                        color: item.color,
                        fontWeight: 700,
                        fontSize: "20px",
                        lineHeight: 1,
                        flexShrink: 0,
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      {open === item.id ? "-" : "+"}
                    </span>
                  </button>
                  {open === item.id && (
                    <div
                      style={{
                        padding: "0 28px 28px",
                        borderTop: `1px solid ${BORDER}`,
                        paddingTop: "20px",
                      }}
                    >
                      <p
                        style={{ color: MUTED, fontSize: "15px", lineHeight: 1.85 }}
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {tab === "verse" && (
          <div>
            <div style={{ marginBottom: "32px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 800,
                  color: TEXT,
                  marginBottom: "8px",
                }}
              >
                Verse by Verse &mdash; Hosea 3
              </h2>
              <p
                style={{ color: MUTED, fontSize: "15px", lineHeight: 1.7, fontFamily: "system-ui, sans-serif" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "A close reading of all five verses, attending to the Hebrew vocabulary, the narrative shape, and the theological weight of each section.",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {verseItems.map((item, idx) => {
                const colors = [GOLD, GREEN, TEAL, PURPLE, ROSE];
                const c = colors[idx % colors.length];
                return (
                  <div
                    key={item.id}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: "18px",
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() => toggle(item.id)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        padding: "22px 28px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        gap: "16px",
                        textAlign: "left",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            color: c,
                            fontSize: "11px",
                            fontWeight: 700,
                            letterSpacing: "0.10em",
                            marginBottom: "4px",
                            fontFamily: "system-ui, sans-serif",
                          }}
                        >
                          {item.ref}
                        </p>
                        <p
                          style={{ color: TEXT, fontWeight: 700, fontSize: "16px" }}
                          dangerouslySetInnerHTML={{ __html: item.label }}
                        />
                      </div>
                      <span
                        style={{
                          color: c,
                          fontWeight: 700,
                          fontSize: "20px",
                          lineHeight: 1,
                          flexShrink: 0,
                          paddingTop: "2px",
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        {open === item.id ? "-" : "+"}
                      </span>
                    </button>
                    {open === item.id && (
                      <div
                        style={{
                          padding: "0 28px 28px",
                          borderTop: `1px solid ${BORDER}`,
                          paddingTop: "20px",
                        }}
                      >
                        <p
                          style={{ color: MUTED, fontSize: "15px", lineHeight: 1.85 }}
                          dangerouslySetInnerHTML={{ __html: item.body }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {tab === "application" && (
          <div>
            <div style={{ marginBottom: "32px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 800,
                  color: TEXT,
                  marginBottom: "8px",
                }}
              >
                Applying Hosea 3 Today
              </h2>
              <p
                style={{ color: MUTED, fontSize: "15px", lineHeight: 1.7, fontFamily: "system-ui, sans-serif" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Four streams of application flowing from this five-verse chapter into contemporary Christian life.",
                }}
              />
            </div>

            {/* Application cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px", marginBottom: "48px" }}>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${GOLD}`,
                  borderRadius: "18px",
                  padding: "28px",
                }}
              >
                <p
                  style={{
                    color: GOLD,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    marginBottom: "10px",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  THE CROSS
                </p>
                <h3 style={{ color: TEXT, fontSize: "17px", fontWeight: 800, marginBottom: "12px", lineHeight: 1.3 }}>
                  The Price God Paid to Redeem Us
                </h3>
                <p
                  style={{ color: MUTED, fontSize: "14px", lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "Hosea&rsquo;s purchase of Gomer is the Old Testament&rsquo;s most personal enactment of what the New Testament calls redemption. The cross is not a distant legal transaction; it is the moment when God, in the person of the Son, pays the price that the world&rsquo;s sin has accumulated. &ldquo;You were bought with a price.&rdquo; The dignity and gravity of that purchase &mdash; and the astonishing fact that the price was paid while we were still &ldquo;loving raisin cakes&rdquo; &mdash; is the heartbeat of the gospel. Hosea 3 makes the emotional and relational texture of that transaction visible in a way that doctrinal propositions alone cannot.",
                  }}
                />
              </div>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${PURPLE}`,
                  borderRadius: "18px",
                  padding: "28px",
                }}
              >
                <p
                  style={{
                    color: PURPLE,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    marginBottom: "10px",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  WAITING
                </p>
                <h3 style={{ color: TEXT, fontSize: "17px", fontWeight: 800, marginBottom: "12px", lineHeight: 1.3 }}>
                  Faithful Waiting During Liminal Periods
                </h3>
                <p
                  style={{ color: MUTED, fontSize: "14px", lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "The &ldquo;many days&rdquo; of Hosea 3 describes a season that every Christian will recognize: the time after a crisis but before full restoration, after forgiveness but before full healing, after the diagnosis but before the cure. These liminal periods are not wasted. They are the time of formation, of slow trust-building, of learning to exist in the space of &ldquo;I belong to him and he belongs to me&rdquo; before the full consummation of what that means. The instruction to Gomer (&ldquo;you shall not play the whore, or belong to another man&rdquo;) is the instruction to the soul in its many-days season: remain faithful to the one who has redeemed you.",
                  }}
                />
              </div>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${GREEN}`,
                  borderRadius: "18px",
                  padding: "28px",
                }}
              >
                <p
                  style={{
                    color: GREEN,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    marginBottom: "10px",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  REPENTANCE
                </p>
                <h3 style={{ color: TEXT, fontSize: "17px", fontWeight: 800, marginBottom: "12px", lineHeight: 1.3 }}>
                  Returning and Seeking &mdash; The Shape of Repentance
                </h3>
                <p
                  style={{ color: MUTED, fontSize: "14px", lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "Verse 5&rsquo;s two verbs &mdash; shuv (return) and baqash (seek) &mdash; define repentance not as a feeling but as a movement. To return is to change direction. To seek is to actively pursue. Repentance, in Hosea&rsquo;s vocabulary, is not a moment of tearful apology but the beginning of a life oriented differently &mdash; toward the LORD and his goodness rather than toward the raisin cakes of rival loves. The phrase &ldquo;come in fear to the LORD and to his goodness&rdquo; holds the poles together: the holy God is rightly feared, and the good God is safely sought. Repentance runs toward both.",
                  }}
                />
              </div>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${ROSE}`,
                  borderRadius: "18px",
                  padding: "28px",
                }}
              >
                <p
                  style={{
                    color: ROSE,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    marginBottom: "10px",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  MESSIAH
                </p>
                <h3 style={{ color: TEXT, fontSize: "17px", fontWeight: 800, marginBottom: "12px", lineHeight: 1.3 }}>
                  David Their King &mdash; The One Israel Seeks
                </h3>
                <p
                  style={{ color: MUTED, fontSize: "14px", lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "Hosea 3:5 makes the striking claim that when Israel returns and seeks the LORD, the seeking of the LORD and the seeking of &ldquo;David their king&rdquo; are parallel acts, mentioned in the same breath. For the Christian reader this is theologically decisive: to seek God in the &ldquo;latter days&rdquo; is inseparable from seeking the Davidic Messiah. The king who represents God&rsquo;s rule is the same king in whom God&rsquo;s presence is found. Jesus, as the Davidic Messiah, is the one in whom both the LORD and David their king are encountered.",
                  }}
                />
              </div>
            </div>

            {/* Study questions */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: "20px",
                padding: "36px",
                marginBottom: "48px",
              }}
            >
              <p
                style={{
                  color: TEAL,
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "20px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                STUDY QUESTIONS
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "God commands Hosea to love Gomer &ldquo;again&rdquo; &mdash; even though her situation has not improved. Is there a person or situation in your life where God might be calling you to &ldquo;go again&rdquo; in love? What makes that hard?",
                  "The price of redemption is paid while Gomer is still in slavery &mdash; she does not earn it or ask for it. How does this shape the way you understand your own relationship to the cross? What does it feel like to be bought at a price you could not pay?",
                  "Can you identify a &ldquo;many days&rdquo; season in your own life &mdash; a time between crisis and restoration, between sin and healing, between judgment and renewal? What has faithfulness looked like in that waiting?",
                  "The stripping in verse 4 &mdash; without king, sacrifice, or ephod &mdash; is what produces the seeking in verse 5. Can you see, looking back, a season of deprivation that eventually drove you to seek the LORD more earnestly than you would have otherwise?",
                  "Verse 5 says Israel will come in fear to the LORD &ldquo;and to his goodness.&rdquo; How do you hold together the fear of God and confidence in his goodness? How has your experience of both shaped your understanding of repentance?",
                ].map((q, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: GOLD,
                        fontWeight: 800,
                        fontSize: "14px",
                        minWidth: "24px",
                        paddingTop: "2px",
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      {i + 1}.
                    </span>
                    <p
                      style={{ color: MUTED, fontSize: "15px", lineHeight: 1.8 }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* A reflection on enacted parable */}
            <div
              style={{
                background: `linear-gradient(135deg, rgba(217,119,6,0.10) 0%, rgba(107,79,187,0.07) 100%)`,
                border: `1px solid rgba(217,119,6,0.20)`,
                borderRadius: "20px",
                padding: "36px",
                marginBottom: "48px",
              }}
            >
              <p
                style={{
                  color: GOLD,
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "16px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                FOR FURTHER REFLECTION
              </p>
              <p
                style={{ color: "#C0C0D8", fontSize: "15px", lineHeight: 1.85, marginBottom: "16px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The whole of Hosea 3 occupies fewer words than a short paragraph, yet it contains one of the most complete statements of the gospel in the Old Testament. A man is commanded to love a woman who does not deserve it. He goes. He pays. He waits. He receives her back. The woman is the mirror of a people who turned away from everything they were given in order to chase cultic pleasures. The man is the mirror of a God who does not stop loving because his love has been refused.",
                }}
              />
              <p
                style={{ color: "#C0C0D8", fontSize: "15px", lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "What is striking about the chapter&rsquo;s ending is its restraint. We do not see Gomer&rsquo;s response to Hosea&rsquo;s speech in verse 3. We do not hear whether she is grateful or resentful, eager or wary. The camera cuts immediately to the allegorical application (v.4) and then to the eschatological promise (v.5). The human story is left deliberately unresolved at the personal level &mdash; because the point is not Gomer&rsquo;s response but Israel&rsquo;s. And Israel&rsquo;s response, in the &ldquo;latter days,&rdquo; will be to return, to seek, to come in fear to the LORD and to his goodness. That is the end toward which the whole chapter, and the whole book, and the whole of Scripture&rsquo;s story, is moving.",
                }}
              />
            </div>

            {/* Video section */}
            <div>
              <p
                style={{
                  color: GOLD,
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "20px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                VIDEO RESOURCES
              </p>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {videoItems.map((v) => (
                  <VideoEmbed key={v.id} videoId={v.id} title={v.title} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
