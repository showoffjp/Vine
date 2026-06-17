"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Amos7Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { id: "e8mJw3A7JxA", title: "Amos 7: Visions and Confrontation at Bethel" },
    { id: "TmEJHZ5CoPk", title: "The Plumb Line of God &mdash; Amos 7 Study" },
    { id: "nFzl7o8gMuc", title: "Amos vs Amaziah &mdash; When Prophets Are Silenced" },
    { id: "K5dN9Q4wJmI", title: "I Was No Prophet &mdash; Amos 7:14 Explained" },
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
      ref: "Amos 7:1-3",
      title: "The Locust Vision &mdash; Amos Intercedes",
      body: "Thus the Lord God showed me: behold, he was forming locusts when the latter growth was just beginning to sprout, and behold, it was the latter growth after the king&rsquo;s mowings. When they had finished eating the grass of the land, I said, &ldquo;O Lord God, please forgive! How can Jacob stand? He is so small!&rdquo; The LORD relented concerning this: &ldquo;It shall not be,&rdquo; said the LORD. The first vision strikes at the food supply &mdash; locusts devouring the second crop after the king&rsquo;s portion is taken. Nothing would remain. Amos&rsquo;s intercession is notable for its simplicity and humility: Jacob is small, helpless, unable to stand on his own. God relents. This is not weakness but responsive love. The vision teaches that prayer changes things &mdash; not by overcoming God&rsquo;s reluctance but by aligning with his own mercy.",
    },
    {
      id: "v2",
      ref: "Amos 7:4-6",
      title: "The Fire Vision &mdash; A Second Intercession",
      body: "Thus the Lord God showed me: behold, the Lord God was calling for a judgment by fire, and it devoured the great deep and was eating up the land. Then I said, &ldquo;O Lord God, please cease! How can Jacob stand? He is so small!&rdquo; The LORD relented concerning this: &ldquo;This also shall not be,&rdquo; said the Lord God. The second vision escalates the threat &mdash; divine fire consuming the cosmic deep (tehom) and then the land itself. This is not ordinary fire but apocalyptic judgment. Again Amos intercedes with the same plea: Jacob is small. And again God relents. Two consecutive acts of intercession that succeed reinforce the power of prophetic prayer. But the third vision will reveal that relenting has a limit when the people remain unchanged.",
    },
    {
      id: "v3",
      ref: "Amos 7:7-9",
      title: "The Plumb Line &mdash; No More Pardons",
      body: "Thus he showed me: behold, the Lord was standing beside a wall built with a plumb line, with a plumb line in his hand. And the LORD said to me, &ldquo;Amos, what do you see?&rdquo; And I said, &ldquo;A plumb line.&rdquo; Then the Lord said, &ldquo;Behold, I am setting a plumb line in the midst of my people Israel; I will never again pass by them; the high places of Isaac shall be made desolate, and the sanctuaries of Israel shall be laid waste, and I will rise against the house of Jeroboam with the sword.&rdquo; The plumb line is the standard of God&rsquo;s righteousness held up against Israel&rsquo;s life. The verdict is clear: the wall is crooked. Notably, there is no intercession this time &mdash; Amos does not ask for relenting. The time of warning has passed. &ldquo;I will never again pass by them&rdquo; marks a point of no return. The sanctuaries and the royal house both face judgment &mdash; religion and politics together.",
    },
    {
      id: "v4",
      ref: "Amos 7:10-13",
      title: "Amaziah&rsquo;s Report and Expulsion",
      body: "Then Amaziah the priest of Bethel sent to Jeroboam king of Israel, saying, &ldquo;Amos has conspired against you in the midst of the house of Israel. The land is not able to bear all his words. For thus Amos has said, &lsquo;Jeroboam shall die by the sword, and Israel must go into exile away from his land.&rsquo;&rdquo; And Amaziah said to Amos, &ldquo;O seer, go, flee away to the land of Judah, and eat bread there, and prophesy there, but never again prophesy at Bethel, for it is the king&rsquo;s sanctuary, and it is a temple of the kingdom.&rdquo; Amaziah&rsquo;s response is a case study in how religious institutions protect themselves from prophetic truth. He reframes Amos&rsquo;s prophecy as political conspiracy. He appeals to royal authority. He offers a compromise: go back to Judah and make your living there. &ldquo;The king&rsquo;s sanctuary&rdquo; reveals how thoroughly religion and political power had merged at Bethel &mdash; it was not the LORD&rsquo;s house but the king&rsquo;s.",
    },
    {
      id: "v5",
      ref: "Amos 7:14-15",
      title: "I Was No Prophet &mdash; God Took Me",
      body: "Then Amos answered and said to Amaziah, &ldquo;I was no prophet, nor a prophet&rsquo;s son, but I was a herdsman and a dresser of sycamore figs. But the LORD took me from following the flock, and the LORD said to me, &lsquo;Go, prophesy to my people Israel.&rsquo;&rdquo; Amos&rsquo;s answer is one of Scripture&rsquo;s great statements of prophetic calling. He makes no claim to professional status, no appeal to prophetic guild credentials, no argument from tradition. His authority rests entirely on the divine initiative: &ldquo;The LORD took me.&rdquo; The language echoes the way God took kings and leaders throughout Israel&rsquo;s history. Amos did not aspire to prophecy &mdash; he was a farmer doing his work. God interrupted that ordinary life with an extraordinary call. His credentials are simply this: God spoke and he obeyed.",
    },
    {
      id: "v6",
      ref: "Amos 7:16-17",
      title: "Judgment on Amaziah",
      body: "&ldquo;Now therefore hear the word of the LORD. You say, &lsquo;Do not prophesy against Israel, and do not preach against the house of Isaac.&rsquo; Therefore thus says the LORD: &lsquo;Your wife shall be a prostitute in the city, and your sons and your daughters shall fall by the sword, and your land shall be divided up with a measuring line; you yourself shall die in an unclean land, and Israel shall surely go into exile away from its land.&rsquo;&rdquo; The personal judgment on Amaziah is severe precisely because he tried to silence God&rsquo;s word. The priest who defended the establishment&rsquo;s comfort will personally experience the catastrophe he tried to prevent from being spoken. His wife dishonored, his children killed, his land redistributed, himself dying in exile &mdash; the very exile he dismissed as dangerous political speech. Silencing the prophet does not silence the judgment.",
    },
  ];

  const themes = [
    {
      id: "t1",
      title: "Prophetic Intercession That Changes History",
      color: GREEN,
      body: "Two of the three visions in Amos 7 end with God relenting because Amos prayed. This is not a minor detail &mdash; it is a theological statement about the real power of intercessory prayer. &ldquo;How can Jacob stand? He is so small!&rdquo; is not an argument about Israel&rsquo;s merit but an appeal to God&rsquo;s mercy. The prophet who speaks judgment is also the prophet who stands in the gap. This dual calling &mdash; announcing God&rsquo;s word and interceding for the people &mdash; characterizes Moses, Jeremiah, Ezekiel, and Jesus himself.",
    },
    {
      id: "t2",
      title: "Divine Relenting and the Point of No Return",
      color: GOLD,
      body: "The transition from the second vision to the third is one of Scripture&rsquo;s most sobering moments. God relents twice, then says &ldquo;I will never again pass by them.&rdquo; This is not capricious change but reflects a real dynamic in God&rsquo;s relationship with his people: patience has limits when repentance never comes. The plumb line does not change &mdash; the people&rsquo;s failure to measure up to it accumulates. Amos 7 teaches that God&rsquo;s mercy is vast but not infinite when hearts remain hard.",
    },
    {
      id: "t3",
      title: "The Plumb Line of Righteousness",
      color: TEAL,
      body: "The plumb line is a builder&rsquo;s tool for determining whether a wall is straight. In God&rsquo;s hands it becomes the standard of covenant righteousness held against Israel&rsquo;s life. The image implies that judgment is not arbitrary &mdash; it is the objective measurement of what Israel has actually become compared to what God called them to be. The plumb line condemns both the sanctuaries (false worship) and the royal house (political injustice) &mdash; suggesting that no sphere of life escapes God&rsquo;s evaluating standard.",
    },
    {
      id: "t4",
      title: "Religion Protecting Power vs. Prophetic Truth",
      color: PURPLE,
      body: "Amaziah is the establishment religious official who has fully integrated into the political system. Bethel is &ldquo;the king&rsquo;s sanctuary&rdquo; &mdash; religion as ideological support for royal power. When Amos speaks uncomfortable truth, Amaziah&rsquo;s first instinct is to report him as a traitor, then to offer him a mercantile alternative: make your living prophesying in Judah. The implication is that prophecy is a profession and prophets can be bought off with bread. Amos&rsquo;s response dismantles this assumption entirely.",
    },
    {
      id: "t5",
      title: "The Call of the Ordinary Person",
      color: ROSE,
      body: "Amos is a farmer &mdash; a herdsman and dresser of sycamore figs. He has no prophetic training, no institutional affiliation, no family legacy in prophecy. Yet God takes him and sends him. This pattern of God choosing the ordinary, the unlikely, the unqualified recurs throughout Scripture &mdash; from Moses the fugitive to Gideon the smallest of his clan to the fishermen disciples. The call is not based on qualifications but on God&rsquo;s sovereign choice and the willingness to obey.",
    },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: `linear-gradient(135deg, ${PURPLE}22, ${TEAL}22)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: `${TEAL}22`, border: `1px solid ${TEAL}44`, borderRadius: 8, padding: "0.3rem 1rem", marginBottom: "1rem", color: TEAL, fontSize: "0.85rem", letterSpacing: "0.1em" }}>AMOS 7</div>
        <h1 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.2 }}>Thus the Lord Showed Me</h1>
        <p style={{ color: MUTED, maxWidth: 640, margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.6 }}>Three visions of judgment, two answered prayers, one confrontation at Bethel, and the prophet who had no credentials but the LORD&rsquo;s call.</p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", padding: "1.5rem 1rem", flexWrap: "wrap" }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.2rem", borderRadius: 999, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, cursor: "pointer", fontWeight: tab === t ? 700 : 400, fontSize: "0.9rem", transition: "all 0.2s" }}>{TAB_LABELS[t]}</button>
        ))}
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1rem 4rem" }}>

        {tab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", marginBottom: "2rem" }}>
              <h2 style={{ color: TEAL, fontSize: "1.4rem", marginBottom: "1rem", fontWeight: 700 }}>Chapter Overview</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Amos 7 is one of the Bible&rsquo;s most dramatic chapters &mdash; three visions of imminent judgment, two prayers that change the course of events, and a confrontation that cuts to the heart of the tension between institutional religion and genuine prophecy. The shepherd-prophet from Tekoa stands in Bethel, the royal sanctuary of the northern kingdom, and refuses to be silenced." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The chapter opens with three vision reports using the formula &ldquo;Thus the Lord God showed me.&rdquo; The first two &mdash; locusts devouring the land and fire consuming the deep &mdash; trigger Amos&rsquo;s intercession, and God relents both times. But the third vision, the plumb line, produces no intercession. The people have been measured and found crooked; the time of passing over has ended. &ldquo;I will never again pass by them&rdquo; (7:8) is one of Scripture&rsquo;s most chilling statements." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Then the confrontation: Amaziah, the priest of Bethel, reports Amos to King Jeroboam II as a traitor and tells him to flee south and make his living prophesying in Judah. Amos&rsquo;s response (7:14-15) has echoed through every generation since: &ldquo;I was no prophet, nor a prophet&rsquo;s son, but I was a herdsman and a dresser of sycamore figs. But the LORD took me.&rdquo; The chapter ends with a devastating personal judgment on Amaziah." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Amos 7 belongs to a section of the book (7:1&ndash;9:10) called the &ldquo;Vision Reports.&rdquo; It was likely written during the reign of Jeroboam II (786&ndash;746 BCE), a period of great military success and economic prosperity in Israel that masked deep internal rot. Amos ministered from the south (Tekoa, in Judah) to the northern kingdom at a moment when the institutions of religion and state had become mutually reinforcing systems that silenced dissent." }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Author", value: "Amos of Tekoa", color: TEAL },
                { label: "Date", value: "c. 760&ndash;750 BCE", color: GOLD },
                { label: "Setting", value: "Bethel, Northern Israel", color: PURPLE },
                { label: "Key Verse", value: "Amos 7:14&ndash;15", color: GREEN },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                  <div style={{ color: item.color, fontSize: "0.75rem", letterSpacing: "0.1em", marginBottom: "0.3rem" }}>{item.label.toUpperCase()}</div>
                  <div style={{ color: TEXT, fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: item.value }} />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", marginBottom: "2rem" }}>
              <h3 style={{ color: GOLD, fontSize: "1.1rem", marginBottom: "1rem", fontWeight: 700 }}>Historical Context</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Jeroboam II (786&ndash;746 BCE) presided over the greatest territorial expansion in northern Israel since Solomon. Military victories pushed the borders to their widest extent since the united kingdom. Trade flourished. The wealthy built winter houses and summer houses, decorated with ivory. Temples were full. But beneath the prosperity, Amos saw what others refused to acknowledge: the poor were being sold for a pair of sandals, justice was perverted in the courts, and worship had become performance divorced from ethics." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Bethel was not just any city. It was the premier sanctuary of the northern kingdom, established by Jeroboam I (the original) to prevent his subjects from going to Jerusalem to worship. It had golden calves, a priesthood, festivals &mdash; all the trappings of official religion. But it was religion in service of the state: &ldquo;the king&rsquo;s sanctuary and a temple of the kingdom&rdquo; (7:13). When Amos showed up there to preach, he was speaking in the most politically charged religious space in Israel." }} />
            </div>

            <div style={{ background: `${TEAL}11`, border: `1px solid ${TEAL}44`, borderRadius: 12, padding: "1.5rem" }}>
              <h3 style={{ color: TEAL, fontSize: "1rem", marginBottom: "0.75rem", fontWeight: 700 }}>Structure of Amos 7</h3>
              {[
                { ref: "7:1-3", desc: "Vision 1: Locusts &mdash; intercession, God relents" },
                { ref: "7:4-6", desc: "Vision 2: Fire &mdash; intercession, God relents" },
                { ref: "7:7-9", desc: "Vision 3: Plumb Line &mdash; no intercession, judgment fixed" },
                { ref: "7:10-13", desc: "Amaziah&rsquo;s report and command to flee" },
                { ref: "7:14-15", desc: "Amos&rsquo;s response: &ldquo;I was a herdsman&rdquo;" },
                { ref: "7:16-17", desc: "Judgment on Amaziah" },
              ].map(s => (
                <div key={s.ref} style={{ display: "flex", gap: "1rem", padding: "0.5rem 0", borderBottom: `1px solid ${BORDER}` }}>
                  <span style={{ color: TEAL, fontWeight: 700, minWidth: 60, fontSize: "0.9rem" }}>{s.ref}</span>
                  <span style={{ color: MUTED, fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: s.desc }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "themes" && (
          <div>
            <h2 style={{ color: TEXT, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>Key Themes in Amos 7</h2>
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
            <h2 style={{ color: TEXT, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>Verse by Verse &mdash; Amos 7</h2>
            {verses.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: "1.25rem", overflow: "hidden" }}>
                <button onClick={() => toggle(v.id)} style={{ width: "100%", background: "transparent", border: "none", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ color: TEAL, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.2rem" }} dangerouslySetInnerHTML={{ __html: v.ref }} />
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
            <h2 style={{ color: TEXT, fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>Application &mdash; Living Amos 7</h2>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", marginBottom: "2rem" }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: "1rem", fontWeight: 700 }}>Intercessory Prayer</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Amos&rsquo;s intercession in the first two visions models something profound: the prophet who announces judgment is also the person who prays against it. &ldquo;How can Jacob stand? He is so small!&rdquo; is an appeal to God&rsquo;s mercy over God&rsquo;s justice &mdash; and it works. This is not manipulation but partnership. God has designed his governance of the world to be responsive to the prayers of his people." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The practical application: when we see brokenness around us &mdash; in our cities, our families, our nation &mdash; our first response should not be despair or denunciation but intercession. We stand in the gap, appealing to God&rsquo;s mercy, asking him to relent, trusting that our smallness does not disqualify our prayers." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", marginBottom: "2rem" }}>
              <h3 style={{ color: TEAL, fontSize: "1.1rem", marginBottom: "1rem", fontWeight: 700 }}>The Plumb Line in Your Life</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "God holds a plumb line &mdash; the standard of his word and character &mdash; against every life, every institution, every community. The question Amos 7 invites us to ask is: when the plumb line is held against my life, does it reveal straight walls or crooked ones? This is not an invitation to anxious self-scrutiny but to honest self-examination in the presence of a merciful God." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The plumb line reveals both individual character and corporate life. It is as appropriate to hold the plumb line against our church&rsquo;s practices, our economic arrangements, our treatment of the vulnerable as it is to hold it against personal behavior. Amos&rsquo;s plumb line indicted both sanctuary and palace &mdash; both religion and power." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", marginBottom: "2rem" }}>
              <h3 style={{ color: GOLD, fontSize: "1.1rem", marginBottom: "1rem", fontWeight: 700 }}>When Institutions Try to Silence Truth</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Amaziah&rsquo;s response to Amos is timeless: when uncomfortable truth is spoken, institutions reach for accusation (&ldquo;you&rsquo;re a troublemaker&rdquo;), expulsion (&ldquo;go somewhere else&rdquo;), and compromise (&ldquo;you can still make a living, just not here&rdquo;). Every generation of Christians faces pressure to trim the prophetic message to fit cultural or institutional comfort." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Amos&rsquo;s example shows us how to respond: not with anger, not with accommodation, but with clarity about the call. &ldquo;The LORD said to me, &lsquo;Go, prophesy.&rsquo;&rdquo; The mandate is not from the institution; it cannot be revoked by the institution. Faithfulness sometimes means speaking in places that would prefer our silence." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", marginBottom: "2rem" }}>
              <h3 style={{ color: PURPLE, fontSize: "1.1rem", marginBottom: "1rem", fontWeight: 700 }}>Answering God&rsquo;s Call Without Credentials</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Amos had no prophetic resume. He was not the son of a prophet. He had no institutional training. He was a farmer. And God took him. This is one of Scripture&rsquo;s clearest statements that God&rsquo;s call does not depend on our qualifications but on his sovereign initiative and our willingness to go." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Many people hold back from what God is calling them to because they feel unqualified. The lesson of Amos is not that preparation is irrelevant but that qualifications are secondary. What matters is this: did God say go? If so, go. The credentials will come from the one who sends." }} />
            </div>

            <div style={{ background: `${GREEN}11`, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ color: GREEN, fontSize: "1rem", marginBottom: "1rem", fontWeight: 700 }}>Reflection Questions</h3>
              {[
                "Is there a situation where you have stopped interceding because it seemed hopeless? What would it look like to pray with Amos&rsquo;s humility: &lsquo;How can Jacob stand? He is so small!&rsquo;",
                "Where do you sense God holding his plumb line against your life or community? What would honest response to that look like?",
                "Have you ever experienced institutional pressure to soften or silence a truth you knew you were called to speak? How did you respond?",
                "Do you hold back from serving or speaking because you lack credentials? How does Amos&rsquo;s example challenge or encourage you?",
                "What is the difference between the religion that served Amaziah&rsquo;s purposes and the worship that honors God? Where do you see these tensions today?",
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
