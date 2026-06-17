"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";

export default function Amos3GuidePage() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { id: "RFiIl8H2_OE", title: "Amos 3: Can Two Walk Together? (Verse by Verse)" },
    { id: "v7sHb2JHLGE", title: "The Seven Questions of Amos 3 Explained" },
    { id: "aJn3KFkjKnc", title: "Amos and Social Justice -- Chapter 3 Study" },
    { id: "JBu5HT4DCSU", title: "Election and Accountability in Amos 3" },
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
        <p style={{ color: GOLD, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.75rem" }}>Amos Chapter 3</p>
        <h1 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, marginBottom: "1rem" }}>Can Two Walk Together Unless They Agree?</h1>
        <p style={{ color: MUTED, maxWidth: 640, margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: "The logic of divine judgment &mdash; Amos defends his prophetic calling with a series of cause-and-effect questions, demonstrating that God does nothing without first revealing it to his servants the prophets." }} />
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
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: "0.75rem" }}>The Solemn &ldquo;Hear This Word&rdquo;</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Amos 3 opens with a command that echoes through the entire prophetic tradition: &ldquo;Hear this word that the LORD has spoken against you, O people of Israel, against the whole family that I brought up out of the land of Egypt&rdquo; (v.1). The formula &ldquo;hear this word&rdquo; (<em>shimru et-hadavar hazeh</em>) is the prophetic summons that calls Israel into the position of defendant before the divine court. It appears again in Amos 4:1 and 5:1, structuring the entire middle section of the book as a succession of legal charges." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The address is striking in its scope: not just the northern kingdom, not just Samaria, but &ldquo;the whole family that I brought up out of the land of Egypt.&rdquo; The Exodus becomes both the foundation of the relationship and the basis of accountability. God is not charging a stranger; he is charging those he personally redeemed. The same act of grace that created the covenant is invoked as the very thing that makes the rebellion so inexcusable and so dangerous." }} />
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", color: GREEN, marginBottom: "0.75rem" }}>Election and Accountability (v. 2)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Verse 2 is one of the most theologically concentrated verses in all of the prophetic literature: &ldquo;You only have I known of all the families of the earth; therefore I will punish you for all your iniquities.&rdquo; The word &ldquo;known&rdquo; here is not mere cognitive awareness. The Hebrew <em>yada</em> in covenantal contexts carries the freight of intimate, chosen relationship &mdash; the same word used for the knowledge between husband and wife, between God and Abraham his friend. To be &ldquo;known&rdquo; by God in this sense is to be chosen, called, drawn into covenant intimacy." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The &ldquo;therefore&rdquo; that follows is the pivot on which the entire theology of election turns. Israel had apparently absorbed a theology of election as privilege without accountability: we are chosen, therefore we are protected; we are special, therefore we are insulated from judgment. Amos shatters this assumption with logical precision. The &ldquo;therefore&rdquo; of election is not immunity; it is heightened responsibility. Greater knowledge produces greater accountability. The nation that has been given the most has the most to answer for when it squanders the gift." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This principle runs throughout Scripture. Jesus makes the same argument in Luke 12:48: &ldquo;From everyone who has been given much, much will be demanded.&rdquo; The servant who knew his master&rsquo;s will and did not act accordingly received the more severe beating. Amos 3:2 is the prophetic statement of a principle that has never changed: God&rsquo;s particular grace creates particular obligation, and the failure to meet that obligation is measured against the grace received, not merely against some abstract moral standard." }} />
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: "0.75rem" }}>The Seven Rhetorical Questions (vv. 3-6)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Anticipating the objection that he has no right to prophesy against Israel, Amos defends the logical necessity of his message through a series of seven cause-and-effect questions. The questions establish an inviolable principle: every observable effect has a sufficient cause. Nothing happens without a reason. The questions move from the mundane to the cosmic, building an argument from common experience to divine revelation." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Two people walking together have agreed on a direction (v.3). A lion does not roar unless it has prey (v.4). A lion does not growl from its den unless it has caught something (v.4). A bird does not fall into a snare unless the snare is set (v.5). A snare does not spring unless it catches something (v.5). A trumpet blown in the city causes fear &mdash; and the fear has a reason (v.6a). Disaster in a city is not random &mdash; the LORD has done it (v.6b). The logical structure is unassailable: cause precedes effect, revelation precedes judgment, and the prophet&rsquo;s compulsion to speak is itself a caused effect. He speaks because God has spoken; God speaks because judgment is coming; judgment is coming because Israel has sinned." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The final question of the series is the most direct: &ldquo;Does disaster come to a city unless the LORD has done it?&rdquo; (v.6b). This is not a denial of secondary causes or a claim that all disasters are direct divine intervention. It is an assertion that in the moral order God sustains, the kind of covenant judgment Amos is announcing has a first cause: the God who governs history. The calamity Amos announces is not accident, not Assyrian geopolitics run amok, not the random turning of fortune. It is the deliberate act of the LORD who has been patient for long enough." }} />
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", color: TEAL, marginBottom: "0.75rem" }}>The Lion Has Roared: Divine Compulsion (vv. 7-8)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Verse 7 provides the theological capstone of the argument: &ldquo;For the Lord GOD does nothing without revealing his secret to his servants the prophets.&rdquo; The word &ldquo;secret&rdquo; (<em>sod</em>) is the word for the counsel of the divine court &mdash; the intimate deliberations of the heavenly assembly. God does not act in history without first disclosing his plans to those he has appointed as his spokesmen. The prophets are not self-appointed commentators; they are members of the divine council who have been admitted to the deliberations and sent back with the results." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "This verse is the Old Testament foundation for the theology of prophetic revelation. God acts; he also speaks before he acts; and the speaking comes through servants who did not choose the assignment. Amos was a shepherd and dresser of sycamore trees from Tekoa &mdash; he had no prophetic pedigree, no school credentials, no institutional authorization. He makes this explicit later in the book when challenged by the priest Amaziah. But the Lord took him and commanded him to go. That divine command is what makes him a prophet." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Verse 8 draws the personal conclusion: &ldquo;The lion has roared; who will not fear? The Lord GOD has spoken; who can but prophesy?&rdquo; When a lion roars, fear is not optional; it is the only rational response to the sound. When God speaks, prophecy is not optional; it is the only faithful response to the word. Amos did not choose to prophesy; he was compelled. The word of God is not a perspective Amos has decided to share; it is a fire in his bones (to use Jeremiah&rsquo;s phrase) that cannot be contained. The question of whether Amos has credentials is answered by the question of whether anyone can hear a lion roar and stay silent." }} />
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: "0.75rem" }}>Judgment on Bethel and the Wealthy (vv. 9-15)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The chapter closes with a stunning reversal: the pagan nations &mdash; Egypt and Ashdod (a Philistine city) &mdash; are called to come and witness Israel&rsquo;s behavior (v.9). The nations have their own sins, but even they are capable of recognizing the particular outrage of Israel&rsquo;s &ldquo;great tumults within her, and the oppression in her midst&rdquo; (v.9). The witnesses are not called to condemn; they are called to observe and be appalled. The nations that Israel has been forbidden to imitate are now invited to evaluate Israel&rsquo;s conduct." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The charge is stated plainly in verse 10: &ldquo;they do not know how to do right, declares the LORD, those who store up violence and robbery in their strongholds.&rdquo; This is not a moral lapse or a temporary failure; they have lost the capacity for righteousness. The wealthy elite of Samaria have accumulated in their luxury homes the proceeds of violence and robbery. The &ldquo;strongholds&rdquo; that should protect the poor have become storage facilities for what was taken from them." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The judgment announced is correspondingly specific. An enemy will surround the land, bring down the strongholds (v.11). Only a remnant will be rescued &mdash; and the image of that rescue is deliberately pathetic: &ldquo;as a shepherd rescues from the mouth of the lion two legs, or a piece of an ear&rdquo; (v.12). The survival of a few scraps is all that will remain. The altars of Bethel &mdash; the premier worship site of the northern kingdom &mdash; will be demolished (v.14). The winter houses and summer houses of the wealthy, the houses decorated with ivory, will fall (vv.14-15). Everything the comfortable and powerful of Samaria have built will come down." }} />
            </div>

          </div>
        )}

        {/* THEMES TAB */}
        {tab === "themes" && (
          <div style={{ paddingTop: "2rem" }}>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.3rem", color: GOLD, marginBottom: "0.75rem" }}>Election and Accountability</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The theological heart of Amos 3 is the insistence that election creates accountability rather than exempting from it. Israel had developed a theology of chosenness that functioned as a shield: God chose us, therefore God will not judge us. Amos&rsquo;s opening salvo demolishes this comfort. The &ldquo;you only have I known&rdquo; of verse 2 is not modified or softened. Yes, God chose Israel uniquely. But the &ldquo;therefore&rdquo; is not &ldquo;therefore you are safe&rdquo; but &ldquo;therefore I will punish you for all your iniquities.&rdquo;" }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This theme resonates through the New Testament as well. The parable of the talents turns on exactly this logic: the servant given the most is held most accountable for what he did with it. The letter to the Hebrews warns that those who have received the greater revelation face greater judgment if they neglect it (Heb 2:3, 10:26-31). The church, like Israel, must resist the temptation to treat grace as immunity. We are not chosen because we deserve favor, and we are not protected from accountability because we have received it. The grace that saves is also the grace that obliges." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.3rem", color: TEAL, marginBottom: "0.75rem" }}>The Prophetic Calling as Divine Compulsion</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Amos 3:7-8 presents the prophetic vocation as something other than a career choice or a spiritual gift to be developed and deployed at will. The prophet is compelled. &ldquo;Who can but prophesy?&rdquo; is a rhetorical question that expects the answer: no one with ears to hear can remain silent when God has spoken. The compulsion is not psychological coercion &mdash; the prophet&rsquo;s personality and will remain intact &mdash; but it is a divine necessity that overrides every lesser consideration." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This understanding of prophecy as divine compulsion explains why the prophets so often spoke against their own interests. Jeremiah did not want to announce judgment; he wept over it. Jonah ran from the assignment. Amos was not a professional prophet; he was a farmer who was taken from following the flock. In each case, the prophetic word was not self-generated or self-serving; it came from outside and demanded to be spoken. The lion has roared; the sound cannot be unheard. The word cannot be unsaid once God has spoken it into the prophet&rsquo;s consciousness." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.3rem", color: GREEN, marginBottom: "0.75rem" }}>Cause and Effect in God&rsquo;s Moral Order</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The seven questions of Amos 3:3-6 establish that the moral universe God governs is ordered and lawful. Effects do not happen without causes. This is not a claim that all disasters are equally direct divine interventions; the images of lions, birds, and snares are drawn from the natural order, where cause and effect operate with observable consistency. Amos is arguing by analogy: just as these natural sequences are reliable, so is the divine moral sequence &mdash; sin produces judgment, and the prophet&rsquo;s announcement is as natural a response to divine revelation as fear is to a lion&rsquo;s roar." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This ordered moral causality is comforting and terrifying simultaneously. Comforting because it means the universe is not chaos, not the playground of arbitrary divine moods. God&rsquo;s character is consistent; his responses to human behavior are predictable in their broad outlines. Terrifying because it means there is no escape from consequences. You cannot sin at the level Israel has been sinning &mdash; economic exploitation, religious apostasy, contempt for the poor &mdash; and expect the sequence to break. The cause has been present for decades; the effect is on its way." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.3rem", color: PURPLE, marginBottom: "0.75rem" }}>Luxury and Injustice</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The closing section of Amos 3 (vv.9-15) makes explicit what was implicit in the earlier theological argument: the sin that will produce Israel&rsquo;s judgment is not merely idolatry but economic oppression dressed in luxury. The &ldquo;great tumults&rdquo; and &ldquo;oppression within her&rdquo; (v.9) that the nations are called to witness are the sounds of a society in which the powerful take from the poor and store the proceeds in their mansions. The &ldquo;violence and robbery&rdquo; stored in the strongholds (v.10) is not metaphorical; it is the literal proceeds of an economic system that has ground down the poor." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The winter houses and summer houses, the houses of ivory (v.15), are the trophies of that injustice. In the ancient world, a wealthy family might have a house in the cooler hills for summer and a house in the valley for winter &mdash; a luxury reserved for the upper class of a prosperous kingdom. Ivory panels were imported luxury items, markers of international connections and conspicuous wealth. Amos announces that all of it will fall. The wealth accumulated through oppression will be confiscated by the conqueror. What was built by exploiting the poor will be destroyed by a power the wealthy cannot bribe or negotiate with." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.3rem", color: TEAL, marginBottom: "0.75rem" }}>The Coming Destruction of Israel&rsquo;s Religious Centers</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The altars of Bethel (v.14) represent the religious dimension of the coming judgment. Bethel was the primary sanctuary of the northern kingdom, established by Jeroboam I when he set up the golden calves to prevent his people from worshipping at Jerusalem (1 Kings 12:28-30). The worship at Bethel was syncretistic &mdash; ostensibly directed to the God of Israel but structured in ways that borrowed heavily from Canaanite religion and served the political purposes of the monarchy." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "When God announces the destruction of Bethel&rsquo;s altars in the same breath as the winter and summer houses, he is connecting the religious and economic sins as aspects of a single systemic failure. The same establishment that exploits the poor in the marketplace maintains a religious apparatus that claims God&rsquo;s approval for the whole arrangement. The altars of Bethel are not incidental background to the social injustice; they are the spiritual legitimation of it. Destroying the altars is as necessary as destroying the mansions, because the false worship has been providing cover for the false justice." }} />
            </div>

          </div>
        )}

        {/* VERSE TAB */}
        {tab === "verse" && (
          <div style={{ paddingTop: "2rem" }}>

            <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: "Click each section to expand the verse-by-verse commentary. All verse references are from Amos 3 (ESV)." }} />

            {[
              {
                id: "a1",
                label: "Amos 3:1-2 -- Election and Punishment",
                color: GOLD,
                content: `<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">&ldquo;Hear this word that the LORD has spoken against you, O people of Israel, against the whole family that I brought up out of the land of Egypt: You only have I known of all the families of the earth; therefore I will punish you for all your iniquities.&rdquo;</p>
<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">The summons &ldquo;hear this word&rdquo; is a quasi-legal formula that opens a divine lawsuit. The defendant is not just the northern kingdom but &ldquo;the whole family&rdquo; brought out of Egypt &mdash; meaning the united history of Israel is being called to account. The covenant that began at the Exodus is the framework within which the judgment is being announced.</p>
<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">The word &ldquo;known&rdquo; (<em>yada</em>) is the key to the verse. God has not merely been aware of Israel in the way he is aware of all nations. He has entered into intimate covenant relationship with them, chosen them, revealed himself to them, acted for them. The knowledge is relational and particular. No other nation has been brought out of slavery by the direct intervention of YHWH; no other nation has received Torah at Sinai; no other nation has been given the land by divine promise and power.</p>
<p style="color:${MUTED};line-height:1.8">The &ldquo;therefore&rdquo; is the shock. Israel expected the election to produce protection. Amos announces that it produces heightened accountability. The logic is irreversible: the greater the privilege, the greater the obligation; the greater the obligation, the greater the punishment for its violation. This is not a change in God&rsquo;s character; it is the consistent logic of the covenant from Deuteronomy onward, where the blessings and curses are calibrated to Israel&rsquo;s response to the revelation they have received.</p>`,
              },
              {
                id: "a2",
                label: "Amos 3:3-6 -- Seven Rhetorical Questions: Cause and Effect",
                color: GREEN,
                content: `<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">The seven questions form one of the most tightly constructed arguments in all of biblical literature. Each question is designed to elicit a single obvious answer: no. Nothing happens without a cause. The questions move from the social (two walking together) through the natural (lions, birds, snares) to the civic (trumpets, disaster in the city) before arriving at the theological conclusion.</p>
<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem"><strong style="color:${TEXT}">Do two walk together unless they have agreed?</strong> (v.3) A journey together requires prior agreement on destination and timing. This first question anticipates the question of why Amos speaks: because God and Amos have walked together &mdash; because God has spoken to him and he has agreed to carry the message.</p>
<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem"><strong style="color:${TEXT}">Does a lion roar in the forest when it has no prey? Does a young lion cry out from its den if he has taken nothing?</strong> (v.4) The lion does not roar until it has something. The roar of the LORD&rsquo;s word through the prophet is not arbitrary noise; it signals that God has identified a prey &mdash; that judgment has a specific object. Israel is not being warned about a hypothetical. The lion has already spotted what it intends to take.</p>
<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem"><strong style="color:${TEXT}">Does a bird fall in a snare on the earth, when there is no trap for it? Does a snare spring up from the ground when it has taken nothing?</strong> (v.5) The snare requires two things: a trap set by the trapper, and a bird that walks into it. Both the human sin (the cause within Israel) and the divine response (the trap God is setting through Assyria) are necessary components of the judgment that is coming.</p>
<p style="color:${MUTED};line-height:1.8"><strong style="color:${TEXT}">Is a trumpet blown in a city and the people are not afraid? Does disaster come to a city unless the LORD has done it?</strong> (v.6) The trumpet in the city wall is a military alarm &mdash; it signals approaching danger. Fear is the only rational response. And the disaster it announces is not random: &ldquo;Does disaster come to a city unless the LORD has done it?&rdquo; This final question grounds the whole sequence in divine sovereignty over history. The Assyrian army that will devastate Samaria is coming because the LORD has sent it. The seven questions have established the logical necessity of everything Amos is about to say.</p>`,
              },
              {
                id: "a3",
                label: "Amos 3:7-8 -- God Reveals Plans to Prophets; The Lion Has Roared",
                color: PURPLE,
                content: `<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">&ldquo;For the Lord GOD does nothing without revealing his secret to his servants the prophets. The lion has roared; who will not fear? The Lord GOD has spoken; who can but prophesy?&rdquo;</p>
<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">Verse 7 is among the most important statements about prophetic revelation in the entire Old Testament. The word &ldquo;secret&rdquo; is <em>sod</em> &mdash; the intimate counsel of a close circle of advisors. The image comes from the world of ancient Near Eastern courts, where the king would deliberate with his inner circle before announcing major decisions. God governs history from a divine council, and the prophets are admitted to that council. They overhear the divine deliberations and are then sent back to the human world with the announcement of what God has decided.</p>
<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">This theology of revelation does not make Amos a passive conduit; it makes him a messenger who has received the actual content of what God intends. He is not speculating, not extrapolating from general principles, not expressing his own concern for social justice and calling it divine word. He is reporting what he has heard from the divine council. This is the basis of his authority and the explanation for his confidence in the face of opposition from Bethel&rsquo;s priest.</p>
<p style="color:${MUTED};line-height:1.8">The couplet in verse 8 is the personal application of the whole argument. The lion&rsquo;s roar and Amos&rsquo;s prophecy are placed in exact parallel. Just as no one who hears a lion roar can rationally refuse to feel fear &mdash; fear is the automatic, involuntary, appropriate response to real danger &mdash; so Amos, having heard the LORD GOD speak, cannot rationally refuse to prophesy. The word has created its own compulsion in him. His message is not his message; it belongs to the one who spoke it. To silence the prophet is not to silence a man but to try to silence the divine word itself.</p>`,
              },
              {
                id: "a4",
                label: "Amos 3:9-10 -- Call Egypt and Ashdod to Witness Israel's Oppression",
                color: TEAL,
                content: `<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">&ldquo;Proclaim to the strongholds in Ashdod and to the strongholds in the land of Egypt, and say: Assemble yourselves on the mountains of Samaria, and see the great tumults within her, and the oppressed in her midst.&rdquo; (v.9)</p>
<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">The choice of witnesses is deliberately ironic and humbling. Ashdod was a Philistine city; Egypt was Israel&rsquo;s former oppressor. Neither nation was known for its righteousness or its social justice. And yet they are called as witnesses because even pagan powers can recognize what Israel&rsquo;s own leaders apparently cannot: that the &ldquo;tumults within her&rdquo; and the &ldquo;oppression in her midst&rdquo; constitute a scandalous disorder, a society that has lost its internal moral coherence.</p>
<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">The mountains of Samaria were the observation posts from which the whole city could be surveyed. The pagan observers are being invited to take up their position there and watch the proceedings below: the marketplace transactions, the legal proceedings, the treatment of the poor, the accumulation of luxury by the powerful. What they will see, God says, is &ldquo;great tumults&rdquo; (literally, &ldquo;great tumultuous confusions&rdquo;) and &ldquo;oppression.&rdquo; The city that should be a light to the nations is instead a case study in the injustice the nations themselves practice.</p>
<p style="color:${MUTED};line-height:1.8">Verse 10 provides the theological diagnosis: &ldquo;They do not know how to do right, declares the LORD, those who store up violence and robbery in their strongholds.&rdquo; The phrase &ldquo;do not know how to do right&rdquo; is an indictment of moral incapacity, not merely moral failure. It is not that Israel occasionally errs in the direction of injustice; it is that the capacity for just action has been so atrophied by habituated wrongdoing that they literally do not know the way of right. The &ldquo;strongholds&rdquo; built for protection now serve as storage for what has been stolen.</p>`,
              },
              {
                id: "a5",
                label: "Amos 3:11-12 -- The Coming Enemy; Only a Remnant Rescued",
                color: GOLD,
                content: `<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">&ldquo;Therefore thus says the Lord GOD: An adversary shall surround the land and bring down your defenses from you, and your strongholds shall be plundered.&rdquo; (v.11)</p>
<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">The adversary is not named, but the historical referent is Assyria, whose military campaigns against the northern kingdom would culminate in the fall of Samaria in 722 BC. The prophecy describes the siege warfare for which Assyria was famous: surrounding a city, cutting off supply lines, and systematically bringing down its defenses. The strongholds that held &ldquo;violence and robbery&rdquo; (v.10) will be plundered &mdash; the accumulated wealth taken by a power that cannot be bought off with the very wealth it will confiscate.</p>
<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">Verse 12 introduces one of Amos&rsquo;s most memorable images: &ldquo;Thus says the LORD: As the shepherd rescues from the mouth of the lion two legs, or a piece of an ear, so shall the people of Israel who dwell in Samaria be rescued, with the corner of a couch and part of a bed.&rdquo; The shepherd image was drawn from Amos&rsquo;s own vocation. When a lion killed a sheep from the flock, a shepherd was required by law (Exod 22:13) to bring proof to the owner &mdash; two legs or a piece of an ear demonstrated that the animal had been killed, not stolen. These fragments were not rescued in any meaningful sense; they were the forensic evidence of total loss.</p>
<p style="color:${MUTED};line-height:1.8">The &ldquo;corner of a couch and part of a bed&rdquo; in the second part of the verse are similarly ironic remnants of the luxury that will be destroyed. The wealthy of Samaria reclined on ornate couches with ivory inlay (Amos 6:4); what will survive the Assyrian conquest is a corner of a cushion, a fragment of a bedframe. The rescue spoken of here is not salvation; it is the pittance that remains after comprehensive destruction. The image deliberately deflates any hope that a remnant theology will save the comfortable from facing the full consequences of their choices.</p>`,
              },
              {
                id: "a6",
                label: "Amos 3:13-15 -- The Altars of Bethel Destroyed; Houses Fall",
                color: PURPLE,
                content: `<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">&ldquo;Hear and testify against the house of Jacob,&rdquo; declares the Lord GOD, the God of hosts, &ldquo;that on the day I punish Israel for his transgressions, I will punish the altars of Bethel, and the horns of the altar shall be cut off and fall to the ground.&rdquo; (vv.13-14)</p>
<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">The designation &ldquo;the Lord GOD, the God of hosts&rdquo; appears in its full form here, underlining the authority behind the announcement. The divine name invokes the cosmic armies at God&rsquo;s command &mdash; this is not a local deity making a local complaint but the Sovereign of all creation announcing the demolition of a religious installation that has become an offense to him.</p>
<p style="color:${MUTED};line-height:1.8;margin-bottom:0.8rem">The altars of Bethel are singled out for particular attention. Bethel was the theological heart of northern Israel&rsquo;s religious establishment, the site of Jeroboam&rsquo;s golden calf (1 Kings 12:28-29), the place where the northern kingdom went to worship when it could not go to Jerusalem. The &ldquo;horns of the altar&rdquo; were the projections at each corner, the most sacred part of the altar, the place to which those seeking refuge could flee and hold on (1 Kings 1:50). Cutting off the horns is not merely physical destruction; it is the removal of the altar&rsquo;s saving function. The religion of Bethel cannot save its worshippers in the day of God&rsquo;s judgment.</p>
<p style="color:${MUTED};line-height:1.8">Verse 15 ties the religious and economic judgments together: &ldquo;I will strike the winter house along with the summer house, and the houses of ivory shall perish, and the great houses shall come to an end, declares the LORD.&rdquo; The winter and summer houses represent the seasonal luxury of the northern elite &mdash; the ability to follow the best weather with a second property in a different climate zone. The ivory houses represent international wealth and artistic pretension; Ahab had built an &ldquo;ivory house&rdquo; a century earlier (1 Kings 22:39), and the tradition of ivory-paneled luxury architecture continued among Samaria&rsquo;s rich. All of it &mdash; religious and residential, sacred and secular &mdash; will fall together. The God who governs justice cannot allow the religious apparatus and the economic system to continue when both are corrupt at the root.</p>`,
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
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: "0.75rem" }}>Taking Covenant Relationship Seriously</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The opening move of Amos 3 &mdash; &ldquo;You only have I known of all the families of the earth; therefore I will punish you for all your iniquities&rdquo; &mdash; is a direct challenge to any version of Christianity that treats salvation as a ticket to reduced expectations. The grace that drew us into relationship with God is not an excuse to take that relationship less seriously; it is the very reason to take it more seriously. We have been brought into the inner circle of the divine covenant. That is an extraordinary privilege. Amos insists that extraordinary privilege generates extraordinary accountability." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Practically, this means that the Christian who has heard more of God&rsquo;s word, received more of his grace, and been part of his community longer has more to answer for than a person who has never encountered the gospel. &ldquo;To whom much is given, much will be required&rdquo; (Luke 12:48). This is not a threat designed to produce anxiety but a reality designed to produce seriousness. We ought to walk in a manner worthy of the calling with which we have been called (Ephesians 4:1) not out of fear of losing our salvation but out of gratitude for the relationship and awareness of what it means to be known by God." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The application is personal and communal. Individually, we ask: Am I living in a way consistent with what I have received from God? Do my choices reflect the value I place on being known by him? Communally, the church asks: Are we as a community treating the grace we have received as an occasion for comfort, or as a call to faithfulness? Are we storing up privilege in our &lsquo;strongholds&rsquo; or deploying it in service?" }} />
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", color: GREEN, marginBottom: "0.75rem" }}>Greater Knowledge Means Greater Accountability</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "One of the most uncomfortable applications of Amos 3 is the implication for those who have been around church, theology, and Scripture for a long time. The long-term churchgoer, the seminary graduate, the elder, the pastor &mdash; each has accumulated a kind of spiritual knowledge that brings with it greater obligation. To know clearly what is right and to fail to do it is more serious than failing out of ignorance (James 4:17). Amos&rsquo;s Israel knew exactly what God had done for them; their failure was not ignorance but contempt." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "This principle cuts against the temptation to treat theological knowledge as a form of status rather than a form of stewardship. The person who can explain substitutionary atonement in detail but treats the poor with contempt is in a more dangerous position, not a safer one, than the person who has never heard the term. The knowledge of God&rsquo;s requirements is itself the heightened accountability. Israel was judged &ldquo;for all your iniquities&rdquo; (v.2) &mdash; not just the occasional lapse but the whole accumulated pattern of behavior that contradicted what they had been taught." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The corrective is not to know less but to live more consistently with what we know. The goal of theological knowledge is not intellectual satisfaction; it is the transformation of life. Paul&rsquo;s prayer in Ephesians 1 is that the readers would know God better &mdash; not as an end in itself, but because greater knowledge of God produces greater love, greater hope, and greater capacity for the good works prepared for them." }} />
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: "0.75rem" }}>Heeding Prophetic Warnings</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Amos 3:7 establishes that God warns before he acts. He reveals his &ldquo;secret&rdquo; &mdash; his intended course of action &mdash; to the prophets so that the people have opportunity to hear, repent, and avoid the announced consequence. The warning is not a foregone conclusion; it is an act of mercy. The lion who has roared has not yet sprung. The announcement of judgment in time to change course is itself a form of grace." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The question Amos 3 puts to us is: When we hear prophetic warnings, do we receive them as grace or resent them as intrusion? Israel&rsquo;s instinct was to silence the prophets (see Amos 7, where Amaziah the priest tells Amos to go home and never prophesy at Bethel again). The comfortable do not want to hear from those whose words threaten their comfort. The wealthy do not want sermons about justice; the powerful do not want pronouncements about accountability; the religiously satisfied do not want to hear that their worship is an offense to God." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "A practical posture of openness to prophetic warning requires cultivating the habit of hearing Scripture as address rather than information &mdash; as a word spoken to us now, not merely a record of what God said to ancient Israel. The sermon that makes us uncomfortable may be the sermon most needed. The passage we keep skipping may be the one the Spirit is pressing us to sit with. Amos 3 asks us to lower our resistance to the lion&rsquo;s roar, even when &mdash; especially when &mdash; it is inconvenient." }} />
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", color: TEAL, marginBottom: "0.75rem" }}>Simplicity and Justice vs. Luxury and Oppression</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The closing verses of Amos 3 announce the destruction of both the religious centers and the luxury homes of Samaria&rsquo;s elite. The connection between the two is not incidental. Systems of economic exploitation typically require religious legitimation &mdash; some story about why the current distribution of wealth is natural, deserved, or divinely ordained. The altars of Bethel were providing that story for the winter-and-summer-house set of eighth-century Samaria." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "For contemporary disciples, the application is not necessarily that wealth is sinful or that comfortable houses are forbidden. Amos&rsquo;s charge is more specific: the wealth was acquired through violence and robbery (v.10), and the religion was providing cover for the injustice. The questions Amos presses on us are: Is the way I accumulate my wealth consistent with justice for my neighbors? Does my religious practice make me more attentive to the poor or less? Am I using theological ideas as a way to insulate myself from the claims of justice, or as a way to become more responsive to them?" }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Simplicity as a spiritual discipline is not an end in itself but a practice that reduces the degree to which comfort controls our choices. When our lifestyle requires a certain income, we will make decisions to protect that income that we might not otherwise make. Amos 3 does not require monastic poverty, but it does require that we hold our possessions loosely enough that the claims of justice can be heard and acted upon, even when acting on them costs something." }} />
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: "0.75rem" }}>Study Questions for Small Groups</h2>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                {[
                  { q: "In what ways does the church today treat election or salvation as protection from accountability rather than as the basis of it?", note: "Amos 3:2 inverts the comfortable assumption that being chosen means being shielded. Where do we see this inversion needed today?" },
                  { q: "What does the logic of the seven questions (3:3-6) tell us about how we should think about cause and effect in the moral and spiritual life?", note: "The questions assume an ordered universe where effects have sufficient causes. How does this affect how we interpret suffering, blessing, and consequence?" },
                  { q: "Amos says the lion has roared and the LORD has spoken, and therefore he cannot but prophesy. What does this say about the nature of authentic preaching and prophecy?", note: "What distinguishes prophetic speech from mere human opinion about religious matters?" },
                  { q: "The pagan nations are called to witness Israel's oppression. What does it say about the state of a Christian community when unbelievers can see its injustice more clearly than its members can?", note: "Are there ways the surrounding culture perceives failures in the church that the church is defensive about?" },
                  { q: "The winter and summer houses and the houses of ivory will fall alongside the altars of Bethel. What does the linking of religious and economic judgment tell us about the relationship between worship and justice?", note: "How might our worship forms be connected to &mdash; or disconnected from &mdash; our economic choices?" },
                  { q: "What does the remnant image in 3:12 (two legs from a lion) say about the nature of the rescue available to those who persist in covenant unfaithfulness?", note: "How does this relate to the doctrine of a faithful remnant that runs through both Testaments?" },
                ].map((item, i) => (
                  <div key={i} style={{ borderBottom: i < 5 ? `1px solid ${BORDER}` : "none", paddingBottom: i < 5 ? "1rem" : 0, marginBottom: i < 5 ? "1rem" : 0 }}>
                    <p style={{ color: TEXT, fontWeight: 600, marginBottom: "0.4rem" }} dangerouslySetInnerHTML={{ __html: `${i + 1}. ${item.q}` }} />
                    <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.note }} />
                  </div>
                ))}
              </div>
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
