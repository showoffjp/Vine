"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";

export default function Jeremiah2GuidePage() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { id: "6XLnYt0NKWE", title: "Jeremiah 2: The Broken Cisterns" },
    { id: "3Tl3_3ME2As", title: "What Is a Broken Cistern? (Jeremiah 2 Study)" },
    { id: "hGQ5IqsNLlM", title: "Israel's Apostasy Explained -- Jeremiah 2" },
    { id: "K7b0m8NN7Yk", title: "God's Covenant Lawsuit -- Jeremiah 2 Commentary" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };

  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "Georgia, serif" }}>

      {/* hero */}
      <div style={{ background: `linear-gradient(135deg, ${PURPLE}22, ${GREEN}22)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem", textAlign: "center" }}>
        <p style={{ color: GOLD, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.75rem" }}>Jeremiah Chapter 2</p>
        <h1 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, marginBottom: "1rem" }}>What Wrong Did Your Fathers Find in Me?</h1>
        <p style={{ color: MUTED, maxWidth: 640, margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: "God&rsquo;s covenant lawsuit against Israel &mdash; the nation that exchanged their Glory for worthless idols, forsook the living fountain for broken cisterns, and chased foreign gods with an insatiable, shameless desire." }} />
      </div>

      {/* tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", padding: "1.5rem 1rem", flexWrap: "wrap", borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.2rem", borderRadius: 999, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, cursor: "pointer", fontWeight: tab === t ? 700 : 400, fontFamily: "Georgia, serif", fontSize: "0.95rem" }}>{TAB_LABELS[t]}</button>
        ))}
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1rem 4rem" }}>

        {/* OVERVIEW TAB */}
        {tab === "overview" && (
          <div style={{ paddingTop: "2rem" }}>

            <div style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: "0.75rem" }}>Jeremiah&rsquo;s First Major Sermon</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Jeremiah 2 records the earliest and most foundational of Jeremiah&rsquo;s public oracles, delivered during the reign of King Josiah before the full weight of the coming Babylonian catastrophe was visible on the horizon. The chapter functions as a formal covenant lawsuit &mdash; in Hebrew, a <em>rib</em> &mdash; in which God, through the prophet, arraigns the nation of Israel before the court of history and of heaven for breach of covenant. The language is legal, the posture is prosecutorial, and the emotion is wounded: God speaks as a husband who has been abandoned, as a father who has been forgotten, and as a king whose glory has been exchanged for shameful idols." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The <em>rib</em> pattern involves a plaintiff presenting charges against a defendant in a covenantal setting. God calls witnesses (&ldquo;Hear, O heavens, and give ear, O earth&rdquo; echoes the Deuteronomy 32 pattern), states his case, itemizes the crimes, anticipates the defense, and announces the verdict. The verdict is not yet the destruction of Jerusalem &mdash; that will come in later chapters &mdash; but the chapter exposes the theological root of all Israel&rsquo;s problems: they have committed the double crime of abandoning the living God and replacing him with created non-entities." }} />
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", color: GREEN, marginBottom: "0.75rem" }}>Israel as the Devoted Bride (vv. 1-3)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "God opens the lawsuit not with accusation but with memory. He recounts the golden age of Israel&rsquo;s relationship with him: &ldquo;I remember the devotion of your youth, your love as a bride, how you followed me in the wilderness, in a land not sown&rdquo; (v.2). The word translated &ldquo;devotion&rdquo; is <em>hesed</em> &mdash; the covenant faithfulness and steadfast love that holds a relationship together. God is saying that there was a time, however brief, however imperfect, when Israel was genuinely oriented toward him, when the nation followed him through a trackless, unsown wilderness trusting that he would provide." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Israel was holy to the LORD, &ldquo;the firstfruits of his harvest&rdquo; (v.3) &mdash; the portion consecrated to God, set apart and therefore protected. Those who devoured Israel &ldquo;were held guilty, and disaster came upon them&rdquo; (v.3). This memory of consecration and protection makes the subsequent apostasy all the more shocking. The one who was once set apart as firstfruits is now chasing after the gods of the nations she was supposed to displace. The fall from devotion to debauchery is the emotional core of the entire chapter." }} />
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: "0.75rem" }}>The Priests, Prophets, and Rulers Who Forgot God (vv. 4-8)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "God broadens the indictment from the people in general to the leadership in particular. He addresses all Israel &mdash; &ldquo;the house of Jacob and all the clans of the house of Israel&rdquo; (v.4) &mdash; and asks the devastatingly simple question: &ldquo;What wrong did your fathers find in me that they went far from me, and went after worthlessness, and became worthless?&rdquo; (v.5). The rhetorical force is enormous. God is not the problem. He brought them out of Egypt, led them through the wilderness, brought them into a fruitful land. He gave them every reason to remain. Their departure was not rational; it was a turning toward &ldquo;worthlessness&rdquo; (<em>hebel</em>, the word used in Ecclesiastes for vanity, vapor, nothing)." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The spiritual leaders failed at every level. The priests did not ask, &ldquo;Where is the LORD?&rdquo; Those who handle the law did not know God. The shepherds (rulers) transgressed against the LORD. The prophets prophesied by Baal and &ldquo;went after things that do not profit&rdquo; (v.8). When the priests, prophets, and rulers all abandon God simultaneously, there is no check on the nation&rsquo;s descent. The leaders who should have been the conscience and compass of the nation became instead the vanguard of apostasy." }} />
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", color: TEAL, marginBottom: "0.75rem" }}>The Nations Were Shocked</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "God calls the pagan nations as witnesses to Israel&rsquo;s unnatural apostasy: &ldquo;Cross to the coasts of Cyprus and see, or send to Kedar and examine with care; see if there has been such a thing. Has a nation changed its gods, even though they are no gods?&rdquo; (vv.10-11). The rhetorical point is devastating: pagan nations, who worship idols that are actually nothing, are at least consistent. They do not abandon the gods of their fathers. But Israel, who has a living God, a God who performs real acts of deliverance in real history, has abandoned him. Their apostasy defies even the limited loyalty pagan peoples show to their manufactured deities." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The heavens are called to witness and react: &ldquo;Be appalled, O heavens, at this; be shocked, be utterly desolate, declares the LORD&rdquo; (v.12). Even inanimate creation recognizes what Israel cannot: that exchanging the living God for idols is a horror without precedent in human history. The universe itself reacts with desolation at the moral and spiritual insanity of what the covenant nation has done." }} />
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: "0.75rem" }}>Egypt and Assyria as Failed Saviors</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Jeremiah 2 closes with a series of images depicting Israel&rsquo;s failed foreign policy: seeking rescue from Assyria and Egypt rather than from God. &ldquo;What do you gain by going to Egypt to drink the waters of the Nile? Or what do you gain by going to Assyria to drink the waters of the Euphrates?&rdquo; (v.18). Both rivers were real and powerful. Egypt and Assyria were genuine superpowers. But God is not competing with them on military or political grounds. His point is that turning to these great powers is itself a form of abandonment &mdash; it is saying that God is insufficient for the crisis Israel faces." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The chapter ends with the verdict that Egypt, like Assyria, will bring shame. &ldquo;You will be put to shame by Egypt as you were put to shame by Assyria&rdquo; (v.36). Every human substitute for God will eventually fail &mdash; not because they lack power in themselves, but because they are not the living God. The broken cisterns will crack, and the water will drain out, and the one who ran to them will be left dry and disgraced." }} />
            </div>

          </div>
        )}

        {/* THEMES TAB */}
        {tab === "themes" && (
          <div style={{ paddingTop: "2rem" }}>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.3rem", color: TEAL, marginBottom: "0.75rem" }}>The Living Fountain vs. Broken Cisterns</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The central metaphor of Jeremiah 2 is announced in verse 13, one of the most famous lines in all of the prophetic literature: &ldquo;for my people have committed two evils: they have forsaken me, the fountain of living waters, and hewed out cisterns for themselves, broken cisterns that can hold no water.&rdquo; The image draws on the lived experience of an ancient Near Eastern world where water scarcity was a matter of life and death." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "A &ldquo;fountain of living waters&rdquo; is a spring &mdash; water that flows up from underground, always fresh, always moving, always available. You do not have to manage it, earn it, or maintain it. You simply come and drink. A &ldquo;cistern&rdquo; is a rock-hewn storage tank that collects rainwater. A broken cistern has a crack in it; whatever water you pour in will seep away. You can fill it repeatedly, but the capacity to hold what you need is structurally compromised. God is the spring; idols are the broken cisterns. Every human substitute for God is a crack-riddled tank &mdash; impressive in appearance, incapable in function." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The two evils are asymmetric. Forsaking the fountain is bad. But that alone does not explain the depth of the disaster. The people have also spent enormous effort constructing cisterns. They have poured their energy, their worship, their sacrifices, their political alliances into vessels that cannot hold. The combination of losing the true source and exhausting themselves on false alternatives is the full anatomy of spiritual bankruptcy." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.3rem", color: GOLD, marginBottom: "0.75rem" }}>Spiritual Adultery and Harlotry</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Jeremiah 2 is saturated with the language of marital unfaithfulness. God presents himself as a husband who gave his bride everything &mdash; redemption from slavery, guidance through the wilderness, a fruitful land, protection from enemies &mdash; and received abandonment in return. The metaphor of spiritual adultery (which Hosea pioneered and Jeremiah inherits) captures something that legal language cannot: the betrayal is not merely a contract violation but a relational devastation." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The harlotry language escalates through the chapter. By verse 20, Israel has &ldquo;played the whore&rdquo; on every high hill and under every green tree. By verse 25, the nation is like an addict who says, &ldquo;It is hopeless, for I have loved foreign gods, and after them I will go.&rdquo; The language of harlotry is not primarily about sexual sin, though the Baalistic fertility cults did involve literal sexual rites. It is about the willingness to give to another what belongs exclusively to God &mdash; the devotion, the trust, the dependent love that constitutes true worship." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.3rem", color: GREEN, marginBottom: "0.75rem" }}>The Stubborn Refusal to Return</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "One of the most ominous features of the chapter is Israel&rsquo;s refusal to return even when confronted. Verse 25 records the nation&rsquo;s self-incriminating confession: &ldquo;It is hopeless, for I have loved foreign gods, and after them I will go.&rdquo; This is the language of spiritual hardening &mdash; not ignorance but entrenched choice. They know the LORD; they have heard his voice through Moses, through Joshua, through the judges, through the kings and the former prophets. They are not confused about the claims of YHWH versus Baal. They have simply decided to go after what they want." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The imagery of the wild donkey in heat (v.24) is particularly striking: &ldquo;a wild donkey used to the wilderness, in her heat sniffing the wind! Who can restrain her lust? None who seek her need weary themselves; in her month they will find her.&rdquo; The point is that Israel&rsquo;s idolatry has become so predictable, so compulsive, that it is like an animal in heat &mdash; easily found, totally unashamed, impossible to redirect. The stubborn refusal to return is not a momentary failure but a habituated orientation of the will." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.3rem", color: PURPLE, marginBottom: "0.75rem" }}>God&rsquo;s Faithfulness vs. Israel&rsquo;s Fickleness</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The covenant lawsuit format puts God&rsquo;s faithfulness and Israel&rsquo;s fickleness into sharp relief. God reviews his own record: he brought them out of Egypt (v.6), led them through the wilderness, brought them into a fertile land (v.7). He did not change; his character did not shift; his provision did not fail. When God asks &ldquo;What wrong did your fathers find in me?&rdquo; (v.5), the expected answer is: nothing. The question answers itself. God has been completely faithful. The fault lies entirely with Israel." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This contrast has profound implications for how we read the rest of Jeremiah. The coming judgment is not the act of a fickle or cruel God who changes the rules midgame. It is the inevitable consequence of Israel repeatedly choosing the broken cisterns over the living fountain, the foreign lovers over the faithful husband. God&rsquo;s faithfulness is precisely what makes Israel&rsquo;s infidelity so serious and so tragic." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.3rem", color: TEAL, marginBottom: "0.75rem" }}>The Shame of Idolatry</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The word &ldquo;shame&rdquo; (<em>bosheth</em>) echoes through the chapter. In verse 26, &ldquo;as a thief is shamed when caught, so the house of Israel shall be shamed.&rdquo; The image is of exposure &mdash; the idolater who was sure his gods would deliver him instead discovers, at the moment of greatest crisis, that wood and stone cannot speak, cannot hear, cannot save. At the end of the chapter, Egypt will bring shame (v.36). The future holds nothing but exposure for those who trusted in the creatures rather than the Creator." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The tragedy of idolatry&rsquo;s shame is that it is entirely self-inflicted and entirely avoidable. God has done nothing to bring Israel into disgrace; they have done it to themselves by choosing objects of trust that cannot be trusted. The prophetic theme of idolatrous shame anticipates Paul&rsquo;s argument in Romans 1: those who exchange the glory of the Creator for images of the creature become futile in their thinking and are given over to their own choices until the consequences become undeniable." }} />
            </div>

          </div>
        )}

        {/* VERSE TAB */}
        {tab === "verse" && (
          <div style={{ paddingTop: "2rem" }}>

            <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: "Click each section to expand the verse-by-verse commentary. All verse references are from Jeremiah 2 (ESV)." }} />

            {/* Accordion 1 */}
            {[
              {
                id: "v1",
                label: "Jeremiah 2:1-3 -- Devotion in the Wilderness",
                color: GOLD,
                content: `<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">The word of the LORD came to Jeremiah in Jerusalem, and he was commanded to proclaim it &ldquo;in the hearing of Jerusalem&rdquo; (v.2). This is a public, civic declaration, not a private communication. The message has historical reach &mdash; it begins with what God &ldquo;remembers.&rdquo;</p>
<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">&ldquo;I remember the devotion of your youth, your love as a bride, how you followed me in the wilderness, in a land not sown&rdquo; (v.2). The Hebrew <em>hesed</em> translated &ldquo;devotion&rdquo; is the covenant word par excellence, the word for the loyalty that sustains relationship even when tested. The wilderness period was not romanticized in most of the Old Testament &mdash; Numbers and Deuteronomy record constant grumbling and rebellion. But here God highlights the essential fact that in the wilderness, Israel followed. There was no temple to return to, no land to fall back on, no alternative. They followed, and in that dependence, there was a beauty God names.</p>
<p style="color:${MUTED};line-height:1.8">&ldquo;Israel was holy to the LORD, the firstfruits of his harvest&rdquo; (v.3). The firstfruits designation means that Israel was set apart, consecrated, belonging to God in a special sense. Firstfruits could not be treated as ordinary; they were holy. Any nation that devoured Israel was guilty, &ldquo;and disaster came upon them&rdquo; &mdash; a reference to what happened to Egypt, Amalek, and the Canaanite nations. The God who protected Israel in the wilderness is the same God who now must prosecute Israel in the courthouse of the covenant.</p>`,
              },
              {
                id: "v2",
                label: "Jeremiah 2:4-8 -- Leaders Who Forgot God",
                color: PURPLE,
                content: `<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">The indictment broadens to address all of Israel, and especially its leaders. The rhetorical question of verse 5 is God&rsquo;s opening argument: &ldquo;What wrong did your fathers find in me that they went far from me, and went after worthlessness, and became worthless?&rdquo; The Hebrew word for worthlessness is <em>hebel</em> &mdash; the same word Qohelet uses throughout Ecclesiastes. Idols are nothing, vapor, breath. And those who go after nothing become nothing.</p>
<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">God&rsquo;s record is recited in vv.6-7: he brought them out of Egypt through a dangerous and inhospitable wilderness, brought them into a fruitful land. His track record is perfect. Then: &ldquo;But when you came in, you defiled my land and made my heritage an abomination&rdquo; (v.7). The land itself was polluted by the idolatry. Holiness had been given; defilement was what Israel introduced.</p>
<p style="color:${MUTED};line-height:1.8">Verse 8 names the guilty parties with precision. The priests &mdash; the religious professionals who should have maintained the knowledge of God &mdash; &ldquo;did not say, &lsquo;Where is the LORD?&rsquo;&rdquo; Those who handle the Torah did not know God. The shepherds (rulers) transgressed against the LORD. The prophets prophesied by Baal. When all three leadership pillars collapse simultaneously, there is no institutional resistance to the national descent. Every layer of Israel&rsquo;s society that should have been a firebreak instead became fuel.</p>`,
              },
              {
                id: "v3",
                label: "Jeremiah 2:9-13 -- The Two Evils: Broken Cisterns",
                color: TEAL,
                content: `<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">God announces that he will press his case further: &ldquo;Therefore I still contend with you, declares the LORD, and with your children&rsquo;s children I will contend&rdquo; (v.9). The lawsuit is not ending; it is escalating. The charge will be pressed to the next generation because the sin is generational.</p>
<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">The call to witness from the pagan nations (vv.10-11) is electrifying. Go to Cyprus in the west, to Kedar in the east &mdash; the breadth of the known world. Ask them: Has any nation ever changed its gods, even when those gods are not gods? The answer is no. Pagans maintain their inherited worship even when it is founded on nothing. But Israel has exchanged their Glory &mdash; the word is <em>kebod</em>, the weighty, magnificent reality of YHWH himself &mdash; for &ldquo;that which does not profit.&rdquo; The contrast could not be starker. Even pagans with false gods are more consistent in their worship than Israel with the true God.</p>
<p style="color:${MUTED};line-height:1.8">Then comes the verdict that crystallizes the entire case: &ldquo;for my people have committed two evils: they have forsaken me, the fountain of living waters, and hewed out cisterns for themselves, broken cisterns that can hold no water&rdquo; (v.13). Two evils: the negative act of forsaking, and the positive act of constructing. The energy Israel put into building idolatrous systems &mdash; building temples, funding prophets, arranging political alliances &mdash; was the energy of those hewing out cisterns. All the effort, all the expense, and the result holds nothing. The spring they walked away from was free and inexhaustible; the cisterns they built with such effort are structurally cracked.</p>`,
              },
              {
                id: "v4",
                label: "Jeremiah 2:14-19 -- Egypt and Assyria Will Disappoint",
                color: GREEN,
                content: `<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">&ldquo;Is Israel a slave? Is he a homeborn servant? Why then has he become a prey?&rdquo; (v.14). The rhetorical question cuts to the heart of Israel&rsquo;s situation. Israel is not supposed to be a prey nation. They were declared free at the Exodus. But by running to foreign powers for help rather than to God, they have effectively re-entered a slave status &mdash; trading one form of dependence for another, except that the new masters (Egypt and Assyria) will not actually protect them.</p>
<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">The lions &mdash; a common ancient Near Eastern symbol for great military powers &mdash; have roared over Israel; they have left his land in waste, his cities in ruins (v.15). The northern kingdom&rsquo;s devastation is evoked here. Noph (Memphis) and Tahpanhes, cities in Egypt, have broken the crown of Israel&rsquo;s head (v.16) &mdash; they have not delivered what they promised.</p>
<p style="color:${MUTED};line-height:1.8">&ldquo;And now what do you gain by going to Egypt to drink the waters of the Nile? Or what do you gain by going to Assyria to drink the waters of the Euphrates?&rdquo; (v.18). The water metaphor continues: the Nile and the Euphrates are real rivers, real water, real power. But to drink from them is to choose the water of the nations over the living fountain of God. It is a spiritual statement as much as a geopolitical one. Verse 19 delivers the diagnosis: &ldquo;Your evil will chastise you, and your apostasy will reprove you. Know and see that it is evil and bitter for you to forsake the LORD your God.&rdquo; The consequences of apostasy are not externally imposed punishments so much as the natural consequences of the choices made.</p>`,
              },
              {
                id: "v5",
                label: "Jeremiah 2:20-25 -- Insatiable Lust for Idols",
                color: GOLD,
                content: `<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">Verses 20-25 deploy a barrage of animal and agricultural images to depict Israel&rsquo;s insatiable idolatry. Verse 20: &ldquo;For long ago I broke your yoke and burst your bonds; but you said, &lsquo;I will not serve.&rsquo;&rdquo; The Exodus was the breaking of the yoke of Egypt. But instead of serving God in freedom, Israel declared independence even from him. On every high hill and under every green tree &mdash; the classic description of Canaanite worship sites &mdash; Israel played the whore.</p>
<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">Verse 21 introduces the vine metaphor that Jeremiah will return to: &ldquo;Yet I planted you a choice vine, wholly of pure seed. How then have you turned degenerate and become a wild vine?&rdquo; God planted Israel with the best possible stock &mdash; the patriarchal promises, the Exodus, the Torah, the land, the temple. The degeneration into a wild, useless vine is entirely Israel&rsquo;s own doing. You can wash a wild vine with lye and soap; the stain of its apostasy will remain (v.22).</p>
<p style="color:${MUTED};line-height:1.8">The animal imagery of vv.23-25 is among the most vivid in the prophetic literature. Israel is like a young camel running here and there, like a wild donkey used to the wilderness, sniffing the wind in heat, so unrestrained that &ldquo;none who seek her need weary themselves; in her month they will find her.&rdquo; The point is not moral contempt alone but the description of an addiction so advanced it has become predictable. And when God calls them back, the response is: &ldquo;It is hopeless, for I have loved foreign gods, and after them I will go&rdquo; (v.25). This is the saddest line in the chapter &mdash; the explicit, conscious, uncoerced decision to remain in spiritual adultery.</p>`,
              },
              {
                id: "v6",
                label: "Jeremiah 2:26-32 -- The Shame of Idolatry",
                color: PURPLE,
                content: `<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">&ldquo;As a thief is shamed when caught, so the house of Israel shall be shamed: they, their kings, their officials, their priests, and their prophets&rdquo; (v.26). The shame is comprehensive &mdash; it touches every level of Israelite society. The thief analogy is apt: the idolater is confident in what he is taking; the shame comes at the moment of exposure, when the theft is revealed as worthless and the thief as a fool.</p>
<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">Verses 27-28 expose the perverse logic of Israel&rsquo;s idolatry. They say to a tree, &ldquo;You are my father,&rdquo; and to a stone, &ldquo;You gave me birth.&rdquo; But in the time of trouble, they turn to God and say, &ldquo;Arise and save us!&rdquo; The idolater wants God as emergency backup while worshipping the idols as primary devotion. God&rsquo;s response is sharp: &ldquo;But where are your gods that you made for yourself? Let them arise, if they can save you, in your time of trouble; for as many as your cities are your gods, O Judah.&rdquo; (v.28). If the idols were worth worshipping, let them rescue. The crisis test exposes the bankruptcy of every cistern.</p>
<p style="color:${MUTED};line-height:1.8">Verse 32 delivers one of the chapter&rsquo;s most haunting lines: &ldquo;Can a virgin forget her ornaments, or a bride her attire? Yet my people have forgotten me days without number.&rdquo; A bride never forgets what she wears on her wedding day; a young woman never forgets her jewelry. These things are precious and memorable by nature. Yet Israel has forgotten God &mdash; not once, not occasionally, but &ldquo;days without number.&rdquo; The forgetting has become so habituated that it defines the relationship.</p>`,
              },
              {
                id: "v7",
                label: "Jeremiah 2:33-37 -- False Guides and Future Shame",
                color: TEAL,
                content: `<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">The final section turns to Israel&rsquo;s skill in the pursuit of idolatry: &ldquo;How well you direct your course to seek love!&rdquo; (v.33). The word &ldquo;love&rdquo; here is used sardonically &mdash; these are the foreign gods Israel pursues. They have become expert travelers on the roads of spiritual adultery, so much so that they could teach even the wicked women of their time (v.33). They have elevated their idolatry to an art form.</p>
<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">Verse 34 introduces a particularly grave charge: &ldquo;Also on your skirts is found the lifeblood of the guiltless poor; you did not find them breaking in.&rdquo; Idolatry has led to the oppression and murder of the innocent. The two great sins &mdash; against God and against neighbor &mdash; are inseparable. A nation that abandons the living God also loses the foundation for justice toward the vulnerable. The blood of the poor is on the skirts of their rulers and false prophets, and they did not even catch the victims in an act that might justify violence. They were simply poor, and they were killed.</p>
<p style="color:${MUTED};line-height:1.8">The chapter closes with the announcement that Egypt will fail as a deliverer just as Assyria did: &ldquo;You will be put to shame by Egypt as you were put to shame by Assyria. From it too you will come away with your hands on your head, for the LORD has rejected those in whom you trust, and you will not prosper by them&rdquo; (vv.36-37). &ldquo;Hands on your head&rdquo; is a gesture of mourning, defeat, and humiliation. The international alliances Israel has built at such spiritual cost will produce exactly the shame that trusting in broken cisterns always produces. The chapter ends not with hope but with sober, patient warning: God has rejected what Israel has trusted.</p>`,
              },
            ].map(({ id, label, color, content }) => (
              <div key={id} style={{ border: `1px solid ${BORDER}`, borderRadius: 10, marginBottom: "1rem", overflow: "hidden" }}>
                <button
                  onClick={() => toggle(id)}
                  style={{ width: "100%", textAlign: "left", background: CARD, border: "none", padding: "1rem 1.2rem", color: color, fontFamily: "Georgia, serif", fontSize: "1rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <span>{label}</span>
                  <span style={{ fontSize: "1.2rem", color: MUTED }}>{open === id ? "-" : "+"}</span>
                </button>
                {open === id && (
                  <div style={{ padding: "1.2rem", background: BG, borderTop: `1px solid ${BORDER}` }} dangerouslySetInnerHTML={{ __html: content }} />
                )}
              </div>
            ))}

          </div>
        )}

        {/* APPLICATION TAB */}
        {tab === "application" && (
          <div style={{ paddingTop: "2rem" }}>

            <div style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: "0.75rem" }}>Identifying Your Broken Cisterns</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The most personally searching application of Jeremiah 2 is the question of our own broken cisterns. The concept translates across every era. A broken cistern is any source of life, security, meaning, or identity that we seek from something other than God &mdash; any well we go to for water that only God can provide. The cistern is broken not because it contains nothing real, but because it cannot ultimately hold what we need. Career success, romantic love, social approval, financial security, health, family &mdash; none of these are evil in themselves, but any of them can become a broken cistern if we are looking to them to satisfy what only God can satisfy." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The diagnostic test is not: &ldquo;Do I enjoy this thing?&rdquo; The test is: &ldquo;What happens when this thing fails or is taken away?&rdquo; If the answer is &ldquo;I lose my foundation,&rdquo; then it has become a cistern. The idolater is not always the person at the pagan altar. He is often the person who has quietly organized his inner life around something that feels very important and very good, but that is not God. Jeremiah 2 invites us to be honest about where we are actually running for water." }} />
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", color: GREEN, marginBottom: "0.75rem" }}>The Invitation Back to the Living Fountain</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Jeremiah 2 is prosecutorial, but it contains within itself the logic of invitation. God does not bring a covenant lawsuit against a nation he is indifferent to. He brings it against a nation he once called his bride, his firstfruits, his holy people. The anguish in the divine voice &mdash; &ldquo;Can a virgin forget her ornaments... yet my people have forgotten me&rdquo; (v.32) &mdash; is the anguish of a husband who remembers what was and grieves what is. The lawsuit is meant to produce repentance." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The invitation embedded in the accusation is this: come back to the fountain. The fountain has not moved. The living water has not dried up. The broken cisterns will crack and fail &mdash; they always do &mdash; but the spring is still flowing. Jesus stood in the temple at the Feast of Tabernacles and cried out: &ldquo;If anyone thirsts, let him come to me and drink&rdquo; (John 7:37). He was standing in the lineage of Jeremiah, calling people away from the broken cisterns of religion, politics, nationalism, and self-sufficiency back to the only source of living water." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The same invitation stands today. When we recognize our broken cisterns, the grace of God does not condemn us to stay thirsty. The very recognition that the cistern is cracked, that the water keeps draining out no matter how many times we refill it, is the beginning of the return journey. God&rsquo;s charge in Jeremiah 2 is severe, but it is not final. The severity is in service of restoration." }} />
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: "0.75rem" }}>Diagnostic Questions for Personal Reflection</h2>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                {[
                  { q: "Where do I go first when I am afraid or anxious?", note: "The first instinct reveals the functional god &mdash; the thing we actually trust to make us safe." },
                  { q: "What would have to be taken from me for me to question whether life is worth living?", note: "Anything in that answer that is not God himself is a potential cistern." },
                  { q: "When the week goes well, what gets the credit in my heart?", note: "The god we thank in our hearts when things go right is often the same one we blame when things go wrong." },
                  { q: "What have I spent the most energy building in the last five years?", note: "Energy follows devotion. Where the time and money and emotional investment go reveals where the heart is placed." },
                  { q: "If I am honest, have I ever heard God calling me back from something and said, in effect, 'It is hopeless; I love this too much to leave'?", note: "Jeremiah 2:25 is a mirror. The question is whether we have our own verse 25 moments." },
                  { q: "What do the choices of my daily life say about where I am drinking?", note: "Not what I believe about God theoretically, but what my actual patterns of time, attention, and desire reveal about my functional source of life." },
                ].map((item, i) => (
                  <div key={i} style={{ borderBottom: i < 5 ? `1px solid ${BORDER}` : "none", paddingBottom: i < 5 ? "1rem" : 0, marginBottom: i < 5 ? "1rem" : 0 }}>
                    <p style={{ color: TEXT, fontWeight: 600, marginBottom: "0.4rem" }} dangerouslySetInnerHTML={{ __html: `${i + 1}. ${item.q}` }} />
                    <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.note }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", color: TEAL, marginBottom: "0.75rem" }}>Responding to the Covenant Lawsuit</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "When we sit with Jeremiah 2 and allow its charges to land, the only appropriate response is not despair but honest confession and reorientation. The lawsuit is meant to produce a verdict &mdash; not one in which we are condemned and abandoned, but one in which we agree with God about our condition and turn back toward the fountain. The Hebrew word for repentance, <em>shub</em>, means simply to turn &mdash; to stop going in one direction and face another." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Practically, responding to the covenant lawsuit means: (1) Naming the broken cisterns honestly before God rather than defending them. (2) Bringing to God the needs that we have been trying to meet from other sources &mdash; the longing for security, for significance, for love, for control. (3) Practicing the spiritual disciplines that keep us at the fountain: prayer, Scripture, worship, community &mdash; not as religious performance but as deliberate choices to drink from the right source. (4) Expecting the cisterns to crack. When they do &mdash; when the career fails, when the relationship disappoints, when the money runs out, when the health deteriorates &mdash; receiving that cracking as an invitation rather than a catastrophe." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The nations were shocked that Israel would exchange the Glory for worthless idols. The same exchange happens in every heart that was made for God and settles for less. Jeremiah 2 is God&rsquo;s tender, urgent, prosecutorial love calling us back to where we were made to drink." }} />
            </div>

            {/* videos */}
            <h2 style={{ fontSize: "1.4rem", color: GOLD, marginBottom: "1rem" }}>Video Resources</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {videoItems.map(v => <VideoEmbed key={v.id} videoId={v.id} title={v.title} />)}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
