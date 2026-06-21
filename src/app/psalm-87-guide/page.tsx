"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const videos = [
  { videoId: "k8VJrR4M2L4", title: "Psalm 87 -- The City of God and the Nations" },
  { videoId: "IFZzHPFHvto", title: "Songs of Zion: Zion as Mother of All Nations" },
];

const tabs = ["overview", "themes", "verse", "application"] as const;
type Tab = typeof tabs[number];

export default function Psalm87Guide() {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState<Tab>("overview");
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, color: TEXT, minHeight: "100vh", fontFamily: "var(--font-geist-sans, system-ui, sans-serif)" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #050e07 0%, #0a1a0e 50%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <Link href="/psalms-guide" style={{ color: MUTED, fontSize: "0.78rem", textDecoration: "none" }}>Psalms Guide</Link>
            <span style={{ color: BORDER }}>{">"}</span>
            <span style={{ color: GREEN, fontSize: "0.78rem" }}>Psalm 87</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(107,79,187,0.12)", border: `1px solid rgba(107,79,187,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8B6FDB", marginBottom: "1rem" }}>Song of Zion &mdash; Missional Prophecy</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 87: Glorious Things<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>Are Said of You, City of God</em>
          </h1>
          <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.75, maxWidth: 680, margin: "0 0 1.5rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 87 is perhaps the most astonishing of the Songs of Zion &mdash; a prophetic vision in which the ancient enemies of Israel (Egypt, Babylon, Philistia, Tyre, Ethiopia) are enrolled not as conquered subjects but as <em>native-born citizens</em> of Zion. God himself registers them in his book as those born there. The psalm is a missional explosion hidden in seven verses, anticipating the day when all nations will call Zion their mother." }} />
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {["Korah", "Zion as Mother", "Gentile Inclusion", "Mission", "New Jerusalem"].map(t => (
              <span key={t} style={{ background: "rgba(107,79,187,0.08)", border: `1px solid rgba(107,79,187,0.2)`, borderRadius: 999, padding: "0.2rem 0.75rem", fontSize: "0.72rem", color: "#8B6FDB" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: "#09090F", position: "sticky", top: "var(--header-height, 80px)", zIndex: 20 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1.5rem", display: "flex", gap: 0 }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ background: "none", border: "none", borderBottom: tab === t ? `2px solid ${GREEN}` : "2px solid transparent", color: tab === t ? TEXT : MUTED, padding: "0.9rem 1.1rem", fontSize: "0.82rem", fontWeight: tab === t ? 600 : 400, cursor: "pointer", textTransform: "capitalize", transition: "all 0.2s", letterSpacing: "0.02em" }}>
              {t === "verse" ? "Verse-by-Verse" : t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", fontWeight: 600, color: "#f2e6c8", marginBottom: "1rem" }}>Overview: The Most Missional Psalm</h2>
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 87 has been called &ldquo;the most missionary of all the Psalms&rdquo; (F.B. Meyer) and &ldquo;a prophecy that leaps over all history to plant its feet in the kingdom of God&rdquo; (Spurgeon). It is the shortest of the Songs of Zion but perhaps the most theologically daring. In just seven verses, the psalmist imagines what no one in ancient Israel could have rationally anticipated: Israel&rsquo;s greatest historical enemies enrolled as citizens of the very city God loves." }} />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The psalm opens (v. 1) with Zion&rsquo;s foundation &mdash; not in conquest or human achievement but in God&rsquo;s sovereign love: &ldquo;His foundation is on the holy mountains.&rdquo; What follows proceeds from this: because God chose Zion, everything about Zion participates in his universal purposes. The declaration of verse 2 &mdash; that God loves &ldquo;the gates of Zion more than all the dwelling places of Jacob&rdquo; &mdash; is not ethnic favoritism but canonical pointer: Zion is the center of redemptive history." }} />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The heart of the psalm (vv. 4&ndash;6) is a divine monologue in which God himself speaks of registering the nations as Zion-born. Egypt (called Rahab, the chaos monster &mdash; a name dripping with historical hostility), Babylon, Philistia, Tyre, and Ethiopia are each spoken of as those who &ldquo;know me&rdquo; and who will be enrolled in God&rsquo;s register as having been &ldquo;born there.&rdquo; This is not mere political alliance; it is spiritual nativity. They become, in some profound sense, native-born children of Zion." }} />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Calvin saw in Psalm 87 nothing less than a preview of the New Testament gospel: the great commission spoken prophetically in David&rsquo;s era. Tremper Longman calls it &ldquo;a theological bombshell in the Old Testament canon &mdash; a vision of salvation so wide that it must await the New Covenant for its fulfillment.&rdquo; Derek Kidner notes that the use of the word &ldquo;born&rdquo; is deliberate and radical: birth is the most fundamental form of belonging, the thing that cannot be earned or revoked. These nations are not guests in Zion; they are children of it." }} />
              <p style={{ color: MUTED, lineHeight: 1.85 }} dangerouslySetInnerHTML={{ __html: "The psalm ends (v. 7) with a liturgical note: singers and dancers celebrate Zion with the declaration that &ldquo;all my springs are in you.&rdquo; This is a metaphor for life&rsquo;s source &mdash; every good thing these former enemies possess flows from this city and its God. What was once a place of threat has become the fountain of all their joy." }} />
            </section>

            <div style={{ background: "linear-gradient(135deg, rgba(107,79,187,0.08), rgba(201,162,39,0.06))", border: `1px solid rgba(201,162,39,0.2)`, borderRadius: 10, padding: "1.5rem", marginBottom: "2.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.2rem", color: "#c9a227", marginBottom: "0.75rem" }}>The Text: Psalm 87 (ESV)</h3>
              <div style={{ color: MUTED, lineHeight: 2, fontSize: "0.92rem" }}>
                <p style={{ margin: "0 0 0.5rem", fontStyle: "italic", color: TEXT }} dangerouslySetInnerHTML={{ __html: "<sup>1</sup> On the holy mount stands the city he founded; <sup>2</sup> the LORD loves the gates of Zion more than all the dwelling places of Jacob. <sup>3</sup> Glorious things are spoken of you, O city of God." }} />
                <p style={{ margin: "0 0 0.5rem", fontStyle: "italic", color: TEXT }} dangerouslySetInnerHTML={{ __html: "<sup>4</sup> Among those who know me I mention Rahab and Babylon; behold, Philistia and Tyre, with Cush &mdash; &lsquo;This one was born there,&rsquo; they say. <sup>5</sup> And of Zion it shall be said, &lsquo;This one and that one were born in her&rsquo;; for the Most High himself will establish her. <sup>6</sup> The LORD records as he registers the peoples, &lsquo;This one was born there.&rsquo;" }} />
                <p style={{ margin: "0", fontStyle: "italic", color: TEXT }} dangerouslySetInnerHTML={{ __html: "<sup>7</sup> Singers and dancers alike say, &lsquo;All my springs are in you.&rsquo;" }} />
              </div>
            </div>

            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", fontWeight: 600, color: "#f2e6c8", marginBottom: "1rem" }}>New Testament Fulfillment</h2>
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 87 is impossible to read after Pentecost without seeing its fulfillment. Acts 2 lists the nations present at Pentecost &mdash; Parthians, Medes, Elamites, Mesopotamians (Babylon!), Egyptians &mdash; all hearing in their own language the mighty works of God, all becoming part of the church born in Jerusalem. They were &ldquo;born there&rdquo; in the most profound sense: regenerated by the Spirit in the city of God&rsquo;s dwelling." }} />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Galatians 4:26 identifies the &ldquo;Jerusalem above&rdquo; as &ldquo;our mother&rdquo; &mdash; Paul is reading Psalm 87 as fulfilled in the church. Hebrews 12:22&ndash;23 describes the assembly of the firstborn enrolled in heaven &mdash; the very register of verse 6 found in the heavenly ledger of those born in the city of God. Revelation 21:24&ndash;26 completes the vision: the kings of the earth bring their glory into the New Jerusalem, the eternal city where all nations find their springs." }} />
            </section>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Book", value: "Book III (Psalms 73-89)" },
                { label: "Author", value: "Sons of Korah" },
                { label: "Type", value: "Song of Zion / Prophecy" },
                { label: "Key Theme", value: "Nations born into Zion" },
                { label: "Key Verse", value: "v. 5 -- This one was born there" },
                { label: "NT Echo", value: "Acts 2; Gal 4:26; Rev 21:24-26" },
              ].map(({ label, value }) => (
                <div key={label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GREEN, marginBottom: "0.4rem" }}>{label}</div>
                  <div style={{ fontSize: "0.9rem", color: TEXT }}>{value}</div>
                </div>
              ))}
            </div>

            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", fontWeight: 600, color: "#f2e6c8", marginBottom: "1rem" }}>Video Commentary</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
              {videos.map(v => <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />)}
            </div>
          </div>
        )}

        {/* THEMES */}
        {tab === "themes" && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", fontWeight: 600, color: "#f2e6c8", marginBottom: "0.5rem" }}>Major Themes</h2>
            <p style={{ color: MUTED, marginBottom: "2rem" }}>Psalm 87&rsquo;s seven verses contain one of the most explosive theological visions in the Old Testament.</p>

            {[
              {
                color: PURPLE, title: "1. God&rsquo;s Sovereign Choice of Zion",
                body: "The psalm begins not with Zion&rsquo;s impressive features but with a simple theological fact: God founded this city (v. 1). The choice is entirely his, grounded not in Jerusalem&rsquo;s military advantage or geographic beauty but in sovereign grace. Verse 2 &mdash; &ldquo;the LORD loves the gates of Zion more than all the dwelling places of Jacob&rdquo; &mdash; is a statement of election. As Calvin notes, God&rsquo;s love is always purposeful: he loves Zion because it is through Zion that his redemptive purposes for the whole earth will flow. The Christian reads this through the lens of the new covenant: God&rsquo;s election of Abraham, then Israel, then Zion &mdash; all of it was always about more than one people. It was always about every people. God chose narrowly so that he could give broadly."
              },
              {
                color: GREEN, title: "2. Former Enemies Becoming Citizens",
                body: "The specific nations listed in verse 4 are not chosen arbitrarily. Egypt (Rahab) was the nation of slavery and oppression. Babylon was the empire that destroyed Jerusalem. Philistia was the perpetual neighbor-enemy. Tyre was the great trading city, famously hostile. Ethiopia (Cush) represented the far reaches of the known world. Together they represent the full spectrum of Israel&rsquo;s historical enemies &mdash; and all of them are enrolled as citizens born in Zion. Spurgeon: &ldquo;Who would have thought that Egypt would become a nursing mother of the faith? But so it has been, and so it shall be.&rdquo; Matthew Henry observes that this is the only citizenship that ultimately matters &mdash; not nationality, ethnicity, or empire, but enrollment in the city of God. This is Paul&rsquo;s point in Philippians 3:20: &ldquo;our citizenship is in heaven.&rdquo;"
              },
              {
                color: GOLD, title: "3. Spiritual Nativity &mdash; Born Again into Zion",
                body: "The repetition of &ldquo;born there&rdquo; across verses 4&ndash;6 is theologically loaded. Birth is not achievement; it is gift. To be born in Zion means to belong to it by the most fundamental and irreversible bond. Jesus picks up this exact language in John 3:3&ndash;8: &ldquo;unless one is born again he cannot see the kingdom of God.&rdquo; The new birth is the fulfillment of Psalm 87&rsquo;s enrollment &mdash; the Spirit writes us into God&rsquo;s register as those born of him, citizens of the city that is above. Tremper Longman III sees Psalm 87 as one of the Old Testament&rsquo;s clearest anticipations of the doctrine of regeneration: not reform or improvement but new birth into a new city. This is why conversion is described not as improvement but as new creation (2 Cor 5:17)."
              },
              {
                color: TEAL, title: "4. The Divine Register &mdash; The Book of Life",
                body: "Verse 6 &mdash; &ldquo;The LORD records as he registers the peoples, &lsquo;This one was born there&rsquo;&rdquo; &mdash; introduces the image of the divine register, the book in which God enrolls citizens of his city. This image reappears throughout Scripture: the book of life (Phil 4:3; Rev 3:5; Rev 20:12&ndash;15; Rev 21:27). To have one&rsquo;s name in this register is the ultimate security &mdash; not contingent on performance, not subject to earthly rulers, not erased by death. Matthew Henry writes: &ldquo;The registry of heaven is infinitely more important than the registry of any city or kingdom on earth. To be enrolled there is to be secure forever.&rdquo; Jesus tells his disciples: &ldquo;Rejoice that your names are written in heaven&rdquo; (Luke 10:20). Psalm 87 was anticipating that register."
              },
              {
                color: ROSE, title: "5. All Springs Are in You &mdash; Zion as the Source of All Good",
                body: "The final verse (v. 7) is the worshipers&rsquo; declaration: &ldquo;All my springs are in you.&rdquo; Springs are the source of life in a dry land &mdash; the place where water wells up from the deep. To say that all one&rsquo;s springs are in Zion is to confess that every source of vitality, joy, provision, and blessing traces back to the city of God and its King. Kidner notes this is one of the most comprehensive confessions in the Psalter: not merely &ldquo;some good things&rdquo; or &ldquo;my spiritual blessings&rdquo; but <em>all</em> springs. Calvin: &ldquo;The faithful look for all good things in God alone, and are satisfied with him alone.&rdquo; This is the total-life claim of the gospel: Jesus as the living water from whom rivers of living water flow (John 7:38), the One from whom all good things come."
              },
            ].map(({ color, title, body }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${color}`, borderRadius: "0 10px 10px 0", padding: "1.5rem", marginBottom: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.25rem", color: "#f2e6c8", marginBottom: "0.75rem" }} dangerouslySetInnerHTML={{ __html: title }} />
                <p style={{ color: MUTED, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: body }} />
              </div>
            ))}
          </div>
        )}

        {/* VERSE */}
        {tab === "verse" && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", fontWeight: 600, color: "#f2e6c8", marginBottom: "0.5rem" }}>Verse-by-Verse Commentary</h2>
            <p style={{ color: MUTED, marginBottom: "2rem" }}>Walking through Psalm 87&rsquo;s seven verses with the Reformers and their successors.</p>

            {[
              {
                ref: "Verses 1&ndash;3", heading: "The Beloved City Founded by God",
                text: "&ldquo;On the holy mount stands the city he founded; the LORD loves the gates of Zion more than all the dwelling places of Jacob. Glorious things are spoken of you, O city of God.&rdquo;",
                comment: "The opening three verses establish the theological basis of all that follows: God founded this city and God loves this city. This is not civic pride but covenant declaration. &ldquo;The gates of Zion&rdquo; &mdash; the city in its public, accessible aspect &mdash; are loved by God more than all the private dwelling places of Jacob. This preference is not about excluding Jacob but about the city&rsquo;s universal purpose: gates are where strangers enter, where commerce happens, where the world meets the city. God&rsquo;s love for Zion&rsquo;s gates is his love for the city&rsquo;s openness to all peoples. Spurgeon: &ldquo;The gates of Zion are the places where gospel preaching opens the way for all nations to enter. God loves them because through them flows the stream of salvation to the world.&rdquo;"
              },
              {
                ref: "Verses 4&ndash;6", heading: "The Nations Enrolled as Native-Born",
                text: "&ldquo;Among those who know me I mention Rahab and Babylon; behold, Philistia and Tyre, with Cush &mdash; &lsquo;This one was born there,&rsquo; they say. And of Zion it shall be said, &lsquo;This one and that one were born in her&rsquo;; for the Most High himself will establish her. The LORD records as he registers the peoples, &lsquo;This one was born there.&rsquo;&rdquo;",
                comment: "These three verses constitute one of the Old Testament&rsquo;s most extraordinary prophetic visions. God himself speaks in verse 4 (&ldquo;among those who know me&rdquo;) &mdash; this is divine declaration, not human aspiration. The nations named represent the full arc of Israel&rsquo;s international history: oppressor (Egypt/Rahab), destroyer (Babylon), perpetual antagonist (Philistia), wealthy foreign power (Tyre), distant nation (Ethiopia/Cush). All are enrolled. Calvin: &ldquo;The Holy Spirit testifies here that the church shall be so enlarged that it shall comprehend in it the nations which had been formerly most fierce enemies.&rdquo; Matthew Henry notes the three-fold repetition of &lsquo;born there&rsquo; across vv. 4&ndash;6 &mdash; the insistence is deliberate: God records this enrollment in his own register. It cannot be revoked. Kidner: &ldquo;To be born is to belong: not as a tourist or a resident alien, but as one who has full and inalienable membership in the family.&rdquo;"
              },
              {
                ref: "Verse 7", heading: "The Song of Universal Springs",
                text: "&ldquo;Singers and dancers alike say, &lsquo;All my springs are in you.&rsquo;&rdquo;",
                comment: "The psalm ends with the liturgical celebration of those who have been enrolled &mdash; singers and dancers, the former enemies now worshiping as citizens. Their declaration is comprehensive: <em>all</em> my springs are in you. This is the experiential counterpart to the theological reality of verses 4&ndash;6. Once enrolled as born-in-Zion citizens, they discover that every source of life has its origin there. Spurgeon comments: &ldquo;The converted nations will not feel that they have lost anything by coming to Zion, but rather that they have found in her the fountainhead of all good things &mdash; which was always there but which they had never known.&rdquo; For the Christian who came to faith from outside any Christian heritage, Psalm 87:7 is autobiography: &ldquo;I was far off and now I know that all my springs are in him.&rdquo;"
              },
            ].map(({ ref, heading, text, comment }) => (
              <div key={ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GREEN, marginBottom: "0.3rem" }} dangerouslySetInnerHTML={{ __html: ref }} />
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.2rem", color: "#f2e6c8", marginBottom: "0.75rem" }}>{heading}</h3>
                <blockquote style={{ borderLeft: `3px solid ${GOLD}`, background: "rgba(201,162,39,0.04)", borderRadius: "0 6px 6px 0", padding: "0.75rem 1rem", margin: "0 0 1rem", fontStyle: "italic", color: "#c9b98a", fontSize: "0.92rem", lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: text }} />
                <p style={{ color: MUTED, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: comment }} />
              </div>
            ))}
          </div>
        )}

        {/* APPLICATION */}
        {tab === "application" && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", fontWeight: 600, color: "#f2e6c8", marginBottom: "0.5rem" }}>Application & Reflection</h2>
            <p style={{ color: MUTED, marginBottom: "2rem" }}>Psalm 87 challenges every assumption about who belongs and who is excluded from the people of God.</p>

            {[
              {
                color: PURPLE, title: "Your Name Is Written There",
                body: "Psalm 87:6 describes God registering the nations as born in Zion. This is the Old Testament version of what Jesus describes as having one&rsquo;s name written in heaven (Luke 10:20) and what Revelation calls the book of life. If you are in Christ, your name is enrolled in this register. Not because of your nationality, your ethnic heritage, your family&rsquo;s Christian history, or your moral performance &mdash; but because the Most High himself established Zion and chose to include you. The question for reflection: do you live like someone whose name is written there? Is there the security, the joy, the belonging of a citizen? Or are you still living as though your standing with God is provisional?",
                prayer: "Father, thank you that you have enrolled my name in your register. Not because I was born in the right place or into the right family, but because you chose to include me through Jesus Christ, born of your Spirit. Let me live from the security of citizenship in your city, not from the anxiety of one who must earn his place."
              },
              {
                color: GREEN, title: "The Person You Think Can Never Belong",
                body: "Egypt and Babylon in Psalm 87 are not abstract national designations &mdash; they are the worst enemies Israel could imagine. If the psalmist had drawn a Venn diagram of &ldquo;People who will never be part of God&rsquo;s people,&rdquo; Egypt and Babylon would be in the center. Yet God enrolls them as Zion-born. Who is your Egypt? Who is the person you cannot imagine ever belonging to the people of God &mdash; whose lifestyle, history, ideology, or crimes seem to put them permanently outside? Psalm 87 is a prophetic rebuke to that imagination. God has a register, and it regularly surprises us. The history of the church is full of Egypts &mdash; persecutors who became apostles, rebels who became reformers, atheists who became theologians.",
                prayer: "Lord, expand my imagination of who can be born in your city. Forgive me for the people I have written off as too far gone, too hostile, too different. You enrolled Egypt. You enrolled Babylon. There is no one outside your sovereign grace. Give me faith that exceeds my categories."
              },
              {
                color: GOLD, title: "All My Springs &mdash; Tracing Every Good Thing to God",
                body: "The declaration of Psalm 87:7 &mdash; &ldquo;All my springs are in you&rdquo; &mdash; is an invitation to a theological audit of your life. Where do you draw life from? Where do you seek renewal, vitality, meaning, and joy? The psalm is not asking whether you do &ldquo;spiritual things&rdquo; regularly &mdash; it is asking whether the city of God is the source from which everything else flows. For many Christians, God is one spring among many: career is a spring, family is a spring, recreation is a spring, God is a spring. Psalm 87 calls us to a deeper reorientation: all springs find their source in him. Career, family, and recreation are good &mdash; but they are tributaries, not the source.",
                prayer: "God of all springs, teach me to trace every good thing I enjoy back to you. You are the source of the spring, not just a spring. Let me find in you the origin of my joy in marriage, in friendship, in beauty, in work &mdash; so that when tributaries run dry, I am not undone, because I know where the springs are."
              },
              {
                color: TEAL, title: "Singing as a Citizen of the City to Come",
                body: "Psalm 87 ends with singing and dancing &mdash; the natural response of those who have been enrolled as citizens and have discovered that all their springs are in Zion. Christian worship is properly understood as a rehearsal of this: the gathered community of former-enemies-now-citizens, celebrating together the God who brought us in. The diversity of the church &mdash; different nations, cultures, histories &mdash; is not a problem to be managed but a fulfillment to be celebrated. Every time a congregation gathers that includes people from different backgrounds, it is enacting Psalm 87. It is saying, by its very composition: behold, this one and that one were born here.",
                prayer: "Lord, let me sing like a citizen who knows where he belongs. Give me the joy of one who was once far off but has been brought near, who was once Egypt but has been enrolled as Zion-born. Let me treasure your diverse people as a sign that your promises are being kept, one enrollment at a time."
              },
            ].map(({ color, title, body, prayer }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.2rem", color: "#f2e6c8", marginBottom: "0.75rem" }}>{title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: body }} />
                <div style={{ background: `rgba(${color === PURPLE ? "107,79,187" : color === GREEN ? "58,125,86" : color === GOLD ? "217,119,6" : "13,148,136"},0.06)`, border: `1px solid rgba(${color === PURPLE ? "107,79,187" : color === GREEN ? "58,125,86" : color === GOLD ? "217,119,6" : "13,148,136"},0.2)`, borderRadius: 8, padding: "1rem" }}>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color, marginBottom: "0.4rem" }}>Prayer</div>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, fontStyle: "italic", margin: 0 }} dangerouslySetInnerHTML={{ __html: prayer }} />
                </div>
              </div>
            ))}

            <div style={{ background: "linear-gradient(135deg, rgba(107,79,187,0.08), rgba(58,125,86,0.06))", border: `1px solid rgba(107,79,187,0.2)`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.2rem", color: "#f2e6c8", marginBottom: "1rem" }}>Continue the Songs of Zion</h3>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {[
                  { label: "Psalm 46 Guide", href: "/psalm-46-guide" },
                  { label: "Psalm 48 Guide", href: "/psalm-48-guide" },
                  { label: "Psalm 76 Guide", href: "/psalm-76-guide" },
                  { label: "Psalm 122 Guide", href: "/psalm-122-guide" },
                  { label: "Psalms Overview", href: "/psalms-guide" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} style={{ background: "rgba(107,79,187,0.1)", border: "1px solid rgba(107,79,187,0.25)", borderRadius: 6, padding: "0.5rem 1rem", fontSize: "0.82rem", color: "#8B6FDB", textDecoration: "none" }}>{label}</Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
