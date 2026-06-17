"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

const videoItems = [
  { id: "qA4bOcCdX8t", title: "Isaiah 63 - The Kindnesses of the LORD" },
  { id: "rB9cPdDeY3u", title: "I Will Tell of the LORD Praises - Isaiah 63 Study" },
  { id: "sC2dQeFfZ7v", title: "Isaiah 63 Verse by Verse - Divine Warrior and Intercessor" },
  { id: "tD7eRfGgA1w", title: "Isaiah 63 Explained - God Who Became Their Savior" },
];

export default function Isaiah63GuidePage() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", backgroundColor: "#07070F", color: "#F2F2F8", fontFamily: "Georgia, serif" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #12121F 0%, #0a1a0f 100%)", borderBottom: "1px solid #1E1E32", padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", backgroundColor: "#3a7d5622", border: "1px solid #3a7d5666", borderRadius: 999, padding: "0.35rem 1.1rem", fontSize: "0.78rem", color: "#6ee7a0", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1.2rem" }}>Isaiah 63</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#F2F2F8", lineHeight: 1.2, marginBottom: "1rem" }}>
            The Kindnesses of the LORD and the Remnant Prayer
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#9898B3", maxWidth: 680, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
            Isaiah 63 moves from God the divine warrior to a great hymn of gratitude for his past mercies, and then into one of Scripture&apos;s most passionate lament prayers for divine return.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            {["19 Verses", "Divine Warrior", "Steadfast Love", "Lament Prayer"].map(tag => (
              <span key={tag} style={{ backgroundColor: "#12121F", border: "1px solid #1E1E32", borderRadius: 999, padding: "0.3rem 0.9rem", fontSize: "0.8rem", color: "#9898B3" }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div style={{ borderBottom: "1px solid #1E1E32", backgroundColor: "#0d0d1a" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "1rem 1.5rem", fontSize: "0.92rem", fontWeight: tab === i ? 700 : 400, color: tab === i ? "#6ee7a0" : "#9898B3", background: "none", border: "none", borderBottom: tab === i ? "2px solid #3a7d56" : "2px solid transparent", cursor: "pointer", whiteSpace: "nowrap" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2.5rem 1.5rem" }}>

        {tab === 0 && (
          <div>
            <div style={{ backgroundColor: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: "2rem", marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#6ee7a0", marginBottom: "1rem" }}>Chapter Overview</h2>
              <p style={{ color: "#9898B3", lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Isaiah 63 opens with one of the most dramatic scenes in the entire book: God appearing as a divine warrior returning from Edom with garments stained red, having trodden the winepress of divine wrath alone. This vision &mdash; echoed in Revelation 14 and 19 &mdash; establishes God&apos;s sovereign judgment on the enemies of his people. The warrior declares: &quot;It is I, proclaiming victory, mighty to save.&quot;" }} />
              <p style={{ color: "#9898B3", lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The chapter then transitions into one of the Old Testament&apos;s most beautiful hymns of gratitude. The prophet recalls the kindnesses (hesed) of the LORD &mdash; his great goodness to Israel across the centuries. Most strikingly: &quot;In all their distress he too was distressed; and the angel of his presence saved them. In his love and mercy he redeemed them; he lifted them up and carried them all the days of old.&quot;" }} />
              <p style={{ color: "#9898B3", lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The chapter closes with a raw lament prayer: the prophet, speaking for the remnant, cries out for God to return. &quot;Look down from heaven and see... Where are your zeal and your might? Your tenderness and compassion are withheld from us.&quot; This honest lament holds God to his own character and past actions &mdash; a model for every generation that feels the silence of heaven." }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem", marginBottom: "2rem" }}>
              {[
                { color: "#E11D48", label: "The Divine Warrior", body: "God returns from judgment on Edom with garments stained crimson, having trodden the winepress of wrath alone &mdash; no nation assisted him." },
                { color: "#3a7d56", label: "Recounting the Kindnesses", body: "The prophet recalls God&apos;s hesed &mdash; his steadfast love and great goodness to Israel &mdash; as the foundation for present intercession." },
                { color: "#6B4FBB", label: "God Distressed in Their Distress", body: "In all Israel&apos;s distress, God himself was distressed. The angel of his presence saved them. Divine empathy precedes divine action." },
                { color: "#D97706", label: "The Lament for God&apos;s Return", body: "The remnant prays boldly: &quot;Where are your zeal and might?&quot; Holding God to his own past mercies is the highest form of faith-filled prayer." },
              ].map(card => (
                <div key={card.label} style={{ backgroundColor: "#12121F", border: `1px solid ${card.color}44`, borderRadius: 10, padding: "1.5rem" }}>
                  <div style={{ width: 4, height: 36, backgroundColor: card.color, borderRadius: 2, marginBottom: "0.75rem" }} />
                  <h3 style={{ fontWeight: 700, color: "#F2F2F8", marginBottom: "0.5rem", fontSize: "1rem" }} dangerouslySetInnerHTML={{ __html: card.label }} />
                  <p style={{ color: "#9898B3", fontSize: "0.9rem", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: card.body }} />
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#F2F2F8", marginBottom: "1.25rem" }}>Video Studies</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {videoItems.map(v => <VideoEmbed key={v.id} videoId={v.id} title={v.title} />)}
            </div>
          </div>
        )}

        {tab === 1 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#F2F2F8", marginBottom: "1.5rem" }}>Key Themes in Isaiah 63</h2>
            {[
              {
                id: "t1", color: "#E11D48", title: "The Divine Warrior Who Judges Alone",
                body: "God treads the winepress of wrath alone &mdash; no nation helped, no arm sustained him. This vision of solitary divine judgment (quoted in Revelation 14:19-20 and 19:15) establishes that salvation and justice ultimately rest not on human strength but on God&apos;s own arm. When God acts in final judgment, he does not need human participation. Christ bore the winepress of wrath alone at Calvary &mdash; no one could assist him in bearing the weight of sin. The crimson garments of the warrior speak of a cost that only God could pay. For believers this is both sobering and comforting: sobering because divine justice is absolute; comforting because the same arm that judges is the arm that saves."
              },
              {
                id: "t2", color: "#3a7d56", title: "Recounting the Kindnesses of the LORD",
                body: "The prophet declares: &quot;I will tell of the kindnesses of the LORD, the deeds for which he is to be praised, according to all the LORD has done for us.&quot; The Hebrew word translated &quot;kindnesses&quot; is hesed &mdash; the covenantal steadfast love that is the heartbeat of God&apos;s character. The act of recounting God&apos;s past mercies is itself a spiritual discipline of the highest order. In seasons of darkness, when God seems absent, the faithful response is to tell the story of what God has done. Memory of past grace becomes the anchor for present trust. The Psalms practice this relentlessly, and Isaiah 63 stands in that tradition."
              },
              {
                id: "t3", color: "#6B4FBB", title: "God Distressed in Israel's Distress",
                body: "Verse 9 contains one of the most remarkable theological statements in the Old Testament: &quot;In all their distress he too was distressed; and the angel of his presence saved them. In his love and mercy he redeemed them; he lifted them up and carried them all the days of old.&quot; God is not an unmoved mover who watches human suffering from celestial distance. He enters suffering alongside his people. This divine empathy prefigures the incarnation: in Christ, God enters human distress so completely that he becomes its remedy. Jesus wept at Lazarus&apos;s tomb. He was moved with compassion at the sight of suffering crowds. God&apos;s solidarity with human pain is not a New Testament innovation &mdash; it runs through the entire Old Testament."
              },
              {
                id: "t4", color: "#D97706", title: "Grieving the Holy Spirit",
                body: "Verse 10 contains one of the earliest explicit references to the personality of the Holy Spirit in the Old Testament: &quot;Yet they rebelled and grieved his Holy Spirit. So he turned and became their enemy and fought against them.&quot; The Spirit can be grieved &mdash; which means the Spirit has a personal emotional response to human behavior. This is not impersonal force but personal presence. Paul explicitly warns New Covenant believers: &quot;Do not grieve the Holy Spirit of God&quot; (Ephesians 4:30). The consequences of grieving the Spirit are serious: in Israel&apos;s case, God turned and fought against the very people he had saved. Holiness and sensitivity to the Spirit are inseparable."
              },
              {
                id: "t5", color: "#0D9488", title: "The Lament Prayer: Holding God to His Character",
                body: "The chapter&apos;s closing lament is a masterclass in bold, honest intercession: &quot;Look down from heaven and see, from your lofty throne, holy and glorious. Where are your zeal and your might? Your tenderness and compassion are withheld from us.&quot; The prophet does not simply accept the status quo &mdash; he presses God with his own character and past. This is not irreverence but the highest expression of faith: the conviction that God is who he says he is, and if that is so, then his present silence is inconsistent with his character. Abraham did this (Genesis 18), Moses did this (Exodus 32), and the Psalms are full of it. Jesus himself taught us to pray this way."
              },
            ].map(item => (
              <div key={item.id} style={{ backgroundColor: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, marginBottom: "1rem", overflow: "hidden" }}>
                <button onClick={() => toggle(item.id)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontWeight: 700, color: item.color, fontSize: "1.05rem" }}>{item.title}</span>
                  <span style={{ color: "#9898B3", fontSize: "1.2rem", fontWeight: 700 }}>{open === item.id ? "-" : "+"}</span>
                </button>
                {open === item.id && (
                  <div style={{ padding: "0 1.5rem 1.5rem" }}>
                    <p style={{ color: "#9898B3", lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#F2F2F8", marginBottom: "0.5rem" }}>Verse by Verse Commentary</h2>
            <p style={{ color: "#9898B3", marginBottom: "2rem", fontSize: "0.95rem" }}>A detailed examination of all 19 verses of Isaiah 63.</p>
            {[
              {
                ref: "Isaiah 63:1-6", color: "#E11D48",
                text: "\"Who is this coming from Edom, from Bozrah, with his garments stained crimson?... It is I, proclaiming victory, mighty to save... I have trodden the winepress alone; from the nations no one was with me.\"",
                body: "The chapter opens with a dramatic dialogue. A watchman on the walls calls out to a figure approaching from Edom &mdash; crimson-stained, powerful. The figure identifies himself as God, returning from executing judgment. Edom here functions as a representative of all of Israel&apos;s enemies &mdash; those who have opposed God&apos;s people throughout history. The key theological point is God&apos;s solitude in this act: &quot;from the nations no one was with me.&quot; God did not need human assistance to execute justice. He trampled the nations in his anger, their blood splattering his garments. The day of vengeance and the year of redemption are intertwined (v.4) &mdash; for God&apos;s people, the same act that judges the enemy is the act that delivers the beloved. Revelation 14:19-20 and 19:15 explicitly apply this imagery to Christ&apos;s return in judgment."
              },
              {
                ref: "Isaiah 63:7-9", color: "#3a7d56",
                text: "\"I will tell of the kindnesses of the LORD, the deeds for which he is to be praised... In all their distress he too was distressed; and the angel of his presence saved them.\"",
                body: "The dramatic shift from war to worship is striking. After the vision of divine judgment, the prophet turns to gratitude. He will tell of the hesed &mdash; the steadfast, covenant love &mdash; of the LORD. The summary of God&apos;s saving history in verses 8-9 is deeply moving: God expected Israel to be his people and act faithfully, and &quot;so he became their Savior.&quot; The supreme expression of this is the statement that in all their distress, God was distressed. Divine suffering with human suffering is not a New Testament invention but is woven into the character of the God of the Old Testament. The angel of his presence &mdash; the pre-incarnate Christ, many theologians have argued &mdash; saved them, carried them all the days of old."
              },
              {
                ref: "Isaiah 63:10-14", color: "#6B4FBB",
                text: "\"Yet they rebelled and grieved his Holy Spirit. So he turned and became their enemy and fought against them... Where is he who set his Holy Spirit among them?\"",
                body: "The narrative turns from God&apos;s faithfulness to Israel&apos;s rebellion. The specific sin named is grieving the Holy Spirit &mdash; a striking personalizing of the Spirit who responds to human behavior with grief. The result is severe: God who was their Savior becomes their enemy and fights against them. This is not capricious divine anger but the consistent response of a holy God to covenant violation. The prayer of the remnant then begins in verse 11: they recall the days of Moses, the parting of the sea, the giving of the Spirit. The questions &quot;Where is he?&quot; echo through the lament &mdash; not doubt about God&apos;s existence but longing for his manifest presence. Verse 14 explains: the Spirit gave them rest, just as a herd is led to the valley. God&apos;s guidance is the source of all rest."
              },
              {
                ref: "Isaiah 63:15-16", color: "#D97706",
                text: "\"Look down from heaven and see, from your lofty throne, holy and glorious. Where are your zeal and your might? Your tenderness and compassion are withheld from us.\"",
                body: "The lament intensifies as the prophet calls God to look down from his holy and glorious throne. The specific attributes the prophet appeals to are instructive: zeal, might, tenderness, and compassion. These are not abstract theological concepts but the very character of the God who had shown up powerfully in the past. The prophet is essentially saying: if you are who you say you are, why do we not see it now? Then verse 16 stakes the prayer on relationship: &quot;But you are our Father, though Abraham does not know us or Israel acknowledge us; you, LORD, are our Father, our Redeemer from of old is your name.&quot; Even when human patriarchs cannot recognize or help, God remains Father. His fatherhood is the ultimate ground of appeal."
              },
              {
                ref: "Isaiah 63:17-19", color: "#0D9488",
                text: "\"Why, LORD, do you make us wander from your ways and harden our hearts so we do not revere you? Return for the sake of your servants, the tribes that are your inheritance.\"",
                body: "The final verses press the lament further: the prophet asks why God allows his people to wander and their hearts to harden. This is a profound theological question about divine sovereignty and human responsibility that the prophet does not resolve but simply holds before God in prayer. The request for God&apos;s return &mdash; &quot;return for the sake of your servants&quot; &mdash; is motivated not by Israel&apos;s merit but by God&apos;s own name and the inheritance he chose. The closing verses describe the current desolation: enemies have trampled the sanctuary, the holy places lie in ruins. The implied question: will God allow his own name and his own inheritance to remain in such a state? This is bold, faith-filled intercession at its finest."
              },
            ].map(v => (
              <div key={v.ref} style={{ backgroundColor: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, padding: "1.5rem", marginBottom: "1.25rem" }}>
                <span style={{ backgroundColor: `${v.color}22`, border: `1px solid ${v.color}55`, borderRadius: 6, padding: "0.2rem 0.6rem", fontSize: "0.8rem", color: v.color, display: "inline-block", marginBottom: "0.75rem" }}>{v.ref}</span>
                <p style={{ color: "#D97706", fontStyle: "italic", lineHeight: 1.7, marginBottom: "0.75rem", fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: v.text }} />
                <p style={{ color: "#9898B3", lineHeight: 1.8, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: v.body }} />
              </div>
            ))}
          </div>
        )}

        {tab === 3 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#F2F2F8", marginBottom: "0.5rem" }}>Applying Isaiah 63 Today</h2>
            <p style={{ color: "#9898B3", marginBottom: "2rem", lineHeight: 1.7 }}>The warrior, the hymn of kindnesses, and the lament all speak directly into Christian life today.</p>
            {[
              { num: "01", color: "#E11D48", title: "Trust That God Judges Alone", body: "The divine warrior needs no human assistance to execute justice. When you see evil seemingly triumph, remember that God&apos;s arm is not short. He does not depend on human power to vindicate his people. Rest from the anxiety of feeling that you must personally ensure justice prevails &mdash; God&apos;s judgment is certain and complete. Pray for justice and act justly yourself, but do not carry the weight of ultimate vindication. That belongs to God alone." },
              { num: "02", color: "#3a7d56", title: "Practice Telling the Story of God&apos;s Kindnesses", body: "The prophet begins with &quot;I will tell of the kindnesses of the LORD.&quot; Make this a regular spiritual discipline: set aside time to recount specifically what God has done for you, your family, and your church. Write it down. Share it with others. In seasons of spiritual dryness or apparent divine silence, the discipline of remembering becomes the lifeline of faith. The enemy of faith is amnesia about grace." },
              { num: "03", color: "#6B4FBB", title: "Take Seriously That God Is Distressed in Your Distress", body: "You do not suffer alone. The God who was distressed in Israel&apos;s distress is the same God who watches over you. Jesus wept. God is not unmoved by your pain. This theological truth has profound pastoral implications: bring your pain to God not as one who fears he will be indifferent, but as one who knows he already cares more deeply than you do. He has been present in your suffering even when you could not feel him." },
              { num: "04", color: "#D97706", title: "Guard Against Grieving the Holy Spirit", body: "The Spirit who was grieved in Israel&apos;s rebellion can be grieved in ours. Paul&apos;s warning in Ephesians 4:30 is rooted in exactly this Old Testament reality. Examine what specific behaviors might be grieving the Spirit in your life: bitterness, impurity, dishonesty, division. The Spirit&apos;s grief is not passive &mdash; it affects the entire dynamic of your relationship with God. Pursue the holiness and sensitivity that keeps the Spirit&apos;s presence vibrant." },
              { num: "05", color: "#0D9488", title: "Pray Bold Lament Prayers", body: "The remnant&apos;s prayer in Isaiah 63 gives you permission to pray with raw honesty: &quot;Where are your zeal and your might?&quot; God is not offended by honest lament. He is the one who includes lament in his Word. When the church seems powerless, when revival seems distant, when evil seems to flourish &mdash; pray the lament. Hold God to his own character. Say: &quot;You are our Father. You are our Redeemer from of old. Act in accordance with your name.&quot; This is not faithlessness. It is the highest form of faith." },
              { num: "06", color: "#E11D48", title: "Rest Your Appeal on Relationship Not Merit", body: "The remnant does not appeal to their own righteousness &mdash; they appeal to the fact that God is their Father. &quot;You are our Father, our Redeemer from of old.&quot; When you feel your sin disqualifies you from God&apos;s hearing, remember: the basis of your access is not your performance but your adoption. You are God&apos;s child. The prodigal father saw his son from afar and ran to him. Come to God on that basis &mdash; not what you deserve but who he is." },
            ].map(app => (
              <div key={app.num} style={{ backgroundColor: "#12121F", border: `1px solid ${app.color}33`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.25rem", display: "flex", gap: "1.25rem" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: app.color, opacity: 0.4, minWidth: 48, lineHeight: 1 }}>{app.num}</div>
                <div>
                  <h3 style={{ fontWeight: 700, color: "#F2F2F8", fontSize: "1.05rem", marginBottom: "0.6rem" }} dangerouslySetInnerHTML={{ __html: app.title }} />
                  <p style={{ color: "#9898B3", lineHeight: 1.8, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: app.body }} />
                </div>
              </div>
            ))}

            <div style={{ backgroundColor: "#3a7d5611", border: "1px solid #3a7d5644", borderRadius: 12, padding: "2rem", marginTop: "2rem", textAlign: "center" }}>
              <p style={{ color: "#6ee7a0", fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.8, marginBottom: "0.75rem" }} dangerouslySetInnerHTML={{ __html: "&#39;I will tell of the kindnesses of the LORD, the deeds for which he is to be praised, according to all the LORD has done for us &mdash; yes, the many good things he has done for Israel, according to his compassion and many kindnesses.&#39;" }} />
              <p style={{ color: "#9898B3", fontSize: "0.85rem" }}>Isaiah 63:7</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
