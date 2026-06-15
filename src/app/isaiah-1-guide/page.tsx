"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const videoItems = [
  { videoId: "K8mFp3Rn2Qx", title: "Isaiah 1 - The Vision of Isaiah ben Amoz" },
  { videoId: "Wz6Tj1Yh9pL", title: "The Prophetic Lawsuit and Covenant Rebellion" },
  { videoId: "Bv4Ns8Dk3Xr", title: "Empty Religion vs. Justice in Isaiah 1" },
  { videoId: "Gh7Mc2Qp5Yw", title: "Come Let Us Reason Together - Isaiah 1:18" },
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>

      {/* HERO */}
      <div style={{ background: `linear-gradient(160deg, #0F0A0A 0%, #1A0D0D 60%, #200F0F 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "60px 24px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: ROSE, color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", padding: "4px 12px", borderRadius: 4, marginBottom: 18, fontFamily: "system-ui, sans-serif" }}>
            Isaiah 1
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 700, margin: "0 0 16px", lineHeight: 1.15, color: TEXT }}>
            The Prophetic Lawsuit
          </h1>
          <p style={{ fontSize: 18, color: MUTED, margin: "0 0 24px", lineHeight: 1.7, fontStyle: "italic" }}>
            &ldquo;Come now, let us reason together, says the LORD: though your sins are like scarlet, they shall be as white as snow.&rdquo; &mdash; Isaiah 1:18
          </p>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, maxWidth: 640, margin: 0 }}>
            Isaiah 1 opens the longest prophetic book of the Hebrew Bible with a devastating and tender
            indictment. God himself takes his people to court, laments their rebellion with the anguish of
            a parent, and yet offers the most astonishing invitation: to reason together, to repent, and
            to be made clean.
          </p>
        </div>
      </div>

      {/* TABS */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", display: "flex", gap: 0, overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              style={{
                background: "none",
                border: "none",
                borderBottom: activeTab === i ? `2px solid ${ROSE}` : "2px solid transparent",
                color: activeTab === i ? ROSE : MUTED,
                cursor: "pointer",
                fontFamily: "system-ui, sans-serif",
                fontSize: 14,
                fontWeight: activeTab === i ? 700 : 400,
                padding: "16px 20px",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px" }}>

        {/* TAB 0 - Overview */}
        {activeTab === 0 && (
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 8, borderBottom: `1px solid ${BORDER}`, paddingBottom: 12 }}>
              Chapter Overview
            </h2>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "20px 24px", marginBottom: 32 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: ROSE, marginTop: 0, marginBottom: 8, fontFamily: "system-ui, sans-serif", textTransform: "uppercase", letterSpacing: 1 }}>
                Historical Context
              </h3>
              <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.8 }}>
                Isaiah prophesied during the reigns of Uzziah, Jotham, Ahaz, and Hezekiah &mdash; roughly 740&ndash;701 BC.
                This was a period of Assyrian expansion that eventually destroyed the Northern Kingdom (722 BC) and threatened Jerusalem itself.
                Isaiah 1 functions as a programmatic prologue to the entire book.
              </p>
            </div>

            {/* Section 1 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: ROSE, marginTop: 40, marginBottom: 12 }}>
              The Vision of Isaiah ben Amoz (v. 1)
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The opening verse of Isaiah is a superscription that identifies the book as a <em>chazon</em> &mdash; a vision. This is not a merely intellectual or literary enterprise but a prophetic revelation, something shown to the prophet by divine initiative. The prophet is identified as &ldquo;Isaiah ben Amoz,&rdquo; a figure of considerable social standing in Jerusalem, with access to kings and the royal court." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The superscription spans four royal reigns: Uzziah, Jotham, Ahaz, and Hezekiah. This is an extraordinary prophetic career by any measure &mdash; potentially covering four or five decades of Israelite history. Each king represents a different chapter in Judah&rsquo;s political and spiritual life: Uzziah&rsquo;s prosperous but morally compromised reign, Jotham&rsquo;s relative faithfulness, Ahaz&rsquo;s catastrophic apostasy, and Hezekiah&rsquo;s remarkable revival and crisis." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The focus of the vision is &ldquo;Judah and Jerusalem.&rdquo; This specification is significant: while Isaiah&rsquo;s oracles address many nations (chapters 13&ndash;23), his primary pastoral and prophetic concern is his own people, his own city. The book that follows is ultimately about the destiny of Jerusalem &mdash; its judgment, its purification, and its ultimate glorification as the city of God." }}
            />

            {/* Section 2 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: ROSE, marginTop: 40, marginBottom: 12 }}>
              God&rsquo;s Lament: Children Who Have Rebelled (vv. 2&ndash;4)
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Verses 2&ndash;4 open with one of the most emotionally arresting passages in all of prophetic literature. God summons heaven and earth as witnesses &mdash; a cosmic courtroom scene &mdash; and then makes his accusation not in the detached tones of a judge but in the broken voice of a parent: &ldquo;Children I have reared and brought up, but they have rebelled against me.&rdquo; The Hebrew <em>gildalti</em> (I have reared) and <em>romamti</em> (I have brought up) evoke nurturing, raising, fostering &mdash; the intimate, sacrificial work of parenthood." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The ox-and-donkey comparison of verse 3 is biting in its irony: &ldquo;The ox knows its owner, and the donkey its master&rsquo;s crib, but Israel does not know, my people do not understand.&rdquo; Even the most dim-witted domestic animals know their master and return to their home. Israel, God&rsquo;s own people, has failed to meet even this minimal standard of recognition and attachment. It is a devastating indictment delivered with the precision of a surgeon&rsquo;s scalpel." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Verse 4 piles up four damning epithets: &ldquo;Ah, sinful nation, a people laden with iniquity, offspring of evildoers, children who deal corruptly!&rdquo; The fourfold indictment moves from the corporate (&ldquo;sinful nation,&rdquo; &ldquo;people&rdquo;) to the genealogical (&ldquo;offspring&rdquo;) to the familial (&ldquo;children&rdquo;), suggesting that rebellion has penetrated every layer of Israel&rsquo;s social fabric. And the theological root: &ldquo;They have despised the Holy One of Israel, they are utterly estranged.&rdquo; The problem is not merely behavioral but relational &mdash; they have turned away from the one who defines them." }}
            />

            {/* Section 3 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: ROSE, marginTop: 40, marginBottom: 12 }}>
              The Nation Sick from Head to Foot (vv. 5&ndash;6)
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Verses 5&ndash;6 deploy a sustained medical metaphor that is shocking in its physicality: &ldquo;The whole head is sick, and the whole heart faint. From the sole of the foot even to the head, there is no soundness in it, but bruises and sores and raw wounds.&rdquo; The language evokes the head-to-toe survey of a physician examining a patient who is beyond normal care. Not a part of the body is untouched by disease." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The specific terms are vivid: <em>petza</em> (bruises from blows), <em>chabburah</em> (welts, stripes), <em>makah teria</em> (fresh, raw wounds). These are wounds that have not been pressed out, bound up, or softened with oil. The nation is in a condition of complete medical neglect &mdash; wounded repeatedly, treated for nothing, left to fester. The medical metaphor becomes a metaphor for the spiritual condition: Israel has been struck by God&rsquo;s discipline and yet has not sought healing." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Commentators have noted that this medical metaphor prepares for the most famous line later in Isaiah: &ldquo;He was wounded for our transgressions... and with his stripes we are healed&rdquo; (Isaiah 53:5). The same vocabulary of wounds and healing appears in both passages. The nation&rsquo;s untreated wounds in chapter 1 anticipate the vicarious suffering of the Servant in chapter 53, who takes those wounds on himself so that God&rsquo;s people might finally be healed." }}
            />

            {/* Section 4 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: ROSE, marginTop: 40, marginBottom: 12 }}>
              Isaiah and the 8th Century: Historical Setting
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The 8th century BC was one of the most turbulent periods in the ancient Near East. The Neo-Assyrian Empire under Tiglath-Pileser III (745&ndash;727 BC), Shalmaneser V, Sargon II, and Sennacherib was systematically conquering its neighbors. The Northern Kingdom of Israel fell to Assyria in 722 BC, its population deported and replaced. Judah survived as a vassal but at enormous cost &mdash; paying tribute, capitulating diplomatically, and occasionally compromising its covenant identity." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "It is into this geopolitical cauldron that Isaiah speaks. His words in chapter 1 are not merely spiritual reflections but politically charged prophetic proclamations. The &ldquo;desolate&rdquo; land, the &ldquo;burned&rdquo; cities, and the &ldquo;strangers&rdquo; devouring the ground (v.7) almost certainly reflect the Assyrian invasions, perhaps specifically Sennacherib&rsquo;s devastating campaign of 701 BC when he besieged 46 fortified cities of Judah and left Jerusalem isolated &ldquo;like a bird in a cage.&rdquo;" }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The book of Isaiah is sometimes called &ldquo;the fifth gospel&rdquo; because of its remarkable Christological depth &mdash; the Servant Songs (42, 49, 50, 52&ndash;53), the vision of the peaceable kingdom (11), the new exodus (40&ndash;55), and the new creation (65&ndash;66) all find their fulfillment in Jesus Christ. But this future hope is rooted in present judgment. Chapter 1 is the dark backdrop against which the light of Isaiah&rsquo;s hope eventually shines." }}
            />
          </div>
        )}

        {/* TAB 1 - Key Themes */}
        {activeTab === 1 && (
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 8, borderBottom: `1px solid ${BORDER}`, paddingBottom: 12 }}>
              Key Theological Themes
            </h2>

            {/* Section 1 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: PURPLE, marginTop: 40, marginBottom: 12 }}>
              The Prophetic Lawsuit: The Rib Pattern
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Isaiah 1:2&ndash;20 exhibits what scholars have identified as the <em>rib</em> pattern &mdash; a Hebrew term for a legal dispute or lawsuit. The prophetic lawsuit (<em>rib</em>) was a recognized literary and rhetorical form in ancient Israel in which God formally charges his covenant people with breach of covenant. The pattern typically includes: a summons (v.2a), witnesses (v.2a &mdash; heaven and earth), the accusation (vv.2b&ndash;4), evidence (vv.5&ndash;9), and the legal argument (vv.10&ndash;20)." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The cosmic courtroom is established by the summons to heaven and earth: &ldquo;Hear, O heavens, and give ear, O earth&rdquo; (v.2). This language echoes Deuteronomy 32:1 (&ldquo;Give ear, O heavens, and I will speak; and let the earth hear the words of my mouth&rdquo;), the opening of the Song of Moses, which is itself a covenant lawsuit anticipating Israel&rsquo;s future rebellion. Isaiah deliberately invokes the Mosaic framework: God is not improvising; he is enforcing the terms of his covenant." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The <em>rib</em> form is found throughout the prophetic literature: Micah 6:1&ndash;8, Hosea 4:1&ndash;3, Jeremiah 2:4&ndash;13, and elsewhere. But Isaiah&rsquo;s version is distinctive in its emotional intensity. God is not merely a prosecuting attorney; he is the wounded parent, the betrayed covenant partner, the one who loved and raised and nurtured the people only to watch them turn away. The legal form is charged with personal grief." }}
            />

            {/* Section 2 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: PURPLE, marginTop: 40, marginBottom: 12 }}>
              Empty Religion vs. Justice: The Central Prophetic Critique
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Verses 10&ndash;17 present one of the most radical critiques of institutional religion in the entire biblical canon. God announces that he is weary of their sacrifices, burnt offerings, incense, new moons, Sabbaths, appointed feasts, and solemn assemblies. These were not aberrations &mdash; they were the central acts of covenant worship prescribed in the Torah. Yet God says: &ldquo;I cannot endure iniquity and solemn assembly&rdquo; (v.13)." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The Hebrew of verse 13 is particularly striking: <em>lo uchal aven va&rsquo;atsarah</em> &mdash; &ldquo;I cannot bear iniquity and solemn assembly.&rdquo; The juxtaposition of <em>aven</em> (iniquity, wickedness) and <em>atsarah</em> (solemn assembly) in the same phrase is deliberately jarring. The two do not belong together, but Israel has fused them: religious performance carried out with hands full of blood (v.15). God finds the combination intolerable." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "This critique is not a rejection of ritual worship per se but of ritual worship divorced from covenant fidelity and social justice. Amos, Hosea, Micah, and Jeremiah all sound similar notes. The prophetic tradition insists that God does not want liturgy without ethics, worship without justice, sacrifice without righteousness. The post-exilic tradition would struggle deeply with how to restore worship after its desecration &mdash; this passage helps explain why." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The positive alternative is stated in verse 17 with programmatic clarity: &ldquo;Learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow&rsquo;s cause.&rdquo; Four imperatives &mdash; learn, seek, correct, plead &mdash; directed toward four objects &mdash; good, justice, oppression, the fatherless and widow. The vulnerable are the test case for covenant justice. How a society treats its weakest members reveals whether its worship of God is real or performance." }}
            />

            {/* Section 3 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: PURPLE, marginTop: 40, marginBottom: 12 }}>
              Yakah: The Invitation to Reason Together
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Isaiah 1:18 contains one of the most famous invitations in all of Scripture: &ldquo;Come now, let us reason together, says the LORD.&rdquo; The Hebrew verb <em>yakah</em> (in the niphal form, <em>niwwakkah</em>) is a legal term meaning to argue a case, to reason through a dispute, to reprove or rebuke. It is the same verb used in legal and wisdom contexts for the formal presentation of arguments before a judge." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The invitation is astonishing in its context. God has just laid out the case against Israel in devastating detail: rebellion, ingratitude, sickness, idolatry, empty religion, injustice, corruption. By rights, the verdict should follow immediately. Instead, God pauses and extends an extraordinary offer: let us reason through this together. The sovereign Creator of the universe invites his rebellious creatures to enter into reasoned dialogue." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The offer that follows is staggering: &ldquo;though your sins are like scarlet, they shall be as white as snow; though they are red like crimson, they shall become like wool.&rdquo; The double comparison (scarlet/snow, crimson/wool) emphasizes both the depth of the stain and the totality of the cleansing. <em>Shaniy</em> (scarlet) and <em>tola</em> (crimson/worm) were both deep, indelible dyes. Yet God promises a transformation that human chemistry cannot achieve." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The city-as-harlot motif (vv.21&ndash;23) makes the offer even more dramatic. Jerusalem, once called &ldquo;faithful city,&rdquo; has become a &ldquo;harlot&rdquo; (<em>zonah</em>). Her silver has become dross, her wine diluted. Her rulers are rebels and companions of thieves, neglecting the poor and taking bribes. Yet the same God who makes this accusation also promises to restore her: &ldquo;Afterward you shall be called the city of righteousness, the faithful city&rdquo; (v.26). The harlot shall become faithful again." }}
            />

            {/* Section 4 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: PURPLE, marginTop: 40, marginBottom: 12 }}>
              Repentance and Restoration: The Shape of Hope
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Isaiah 1 holds together judgment and hope in a way that is characteristic of the entire book. The judgment is real and detailed &mdash; the land is desolate, the cities burned, the religious leaders corrupt, the people rebellious. There is no minimizing or romanticizing the failure. But the hope is equally real and detailed: cleansing, restoration, the return of justice, and the city once again called &ldquo;faithful.&rdquo;" }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The conditional form of verses 19&ndash;20 is significant: &ldquo;If you are willing and obedient, you shall eat the good of the land; but if you refuse and rebel, you shall be eaten by the sword.&rdquo; The choice is set before the people with stark clarity. God does not predetermine the outcome apart from human response; the offer is genuine. The exile (being eaten by the sword) is the consequence of continued refusal; restoration is the consequence of willing obedience." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The final verses (27&ndash;31) close the chapter with a sharp distinction between the redeemed and the rebels. &ldquo;Zion shall be redeemed by justice, and those in her who repent, by righteousness. But rebels and sinners shall be destroyed together, and those who forsake the LORD shall be consumed.&rdquo; The oaks and gardens of verse 29&ndash;30 likely refer to idolatrous worship sites; those who trusted them shall wither like them. But those who repent will be redeemed &mdash; and this hope anchors the entire chapter." }}
            />
          </div>
        )}

        {/* TAB 2 - Verse by Verse */}
        {activeTab === 2 && (
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 8, borderBottom: `1px solid ${BORDER}`, paddingBottom: 12 }}>
              Verse by Verse Study
            </h2>

            {/* Section 1 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: TEAL, marginTop: 40, marginBottom: 12 }}>
              Daughter of Zion: Desolation and Survivors (vv. 7&ndash;9)
            </h3>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "16px 20px", marginBottom: 20, borderLeft: `3px solid ${TEAL}` }}>
              <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", margin: 0, lineHeight: 1.7 }}>
                &ldquo;And the daughter of Zion is left like a booth in a vineyard, like a lodge in a cucumber field, like a besieged city.&rdquo; &mdash; Isaiah 1:8
              </p>
            </div>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Verses 7&ndash;9 describe the physical consequences of Israel&rsquo;s rebellion. The land is desolate, the cities burned, the fields eaten by strangers. The specificity is not merely rhetorical &mdash; it likely reflects the actual conditions of Assyrian invasion. Sennacherib&rsquo;s Annals (discovered in Nineveh) boast of conquering 46 of Hezekiah&rsquo;s walled cities and driving out 200,150 people &mdash; close to exactly what Isaiah describes." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The image in verse 8 is both desolate and poignant: &ldquo;the daughter of Zion is left like a booth in a vineyard, like a lodge in a cucumber field, like a besieged city.&rdquo; A booth in a vineyard was a flimsy temporary shelter from which a guard watched the ripening grapes. Once harvest was over, the booth was abandoned. Jerusalem, now stripped of its surrounding villages, is like that lonely watchtower &mdash; isolated, exposed, barely standing." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Yet verse 9 introduces the first note of grace: &ldquo;If the LORD of hosts had not left us a few survivors, we should have been like Sodom, and become like Gomorrah.&rdquo; The existence of any remnant is itself a mercy. Israel could have been utterly annihilated as Sodom was. That she still exists &mdash; however battered &mdash; is due to divine preservation. This &ldquo;remnant&rdquo; theology, introduced here, becomes one of Isaiah&rsquo;s central themes (see 10:20&ndash;22, 37:4)." }}
            />

            {/* Section 2 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: TEAL, marginTop: 40, marginBottom: 12 }}>
              Hear the Word of the LORD, O Rulers of Sodom! (v. 10)
            </h3>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "16px 20px", marginBottom: 20, borderLeft: `3px solid ${ROSE}` }}>
              <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", margin: 0, lineHeight: 1.7 }}>
                &ldquo;Hear the word of the LORD, you rulers of Sodom! Give ear to the teaching of our God, you people of Gomorrah!&rdquo; &mdash; Isaiah 1:10
              </p>
            </div>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "After verse 9&rsquo;s passing comparison to Sodom and Gomorrah, verse 10 doubles down with shocking directness: Isaiah addresses Jerusalem&rsquo;s leaders as &ldquo;rulers of Sodom&rdquo; and her people as &ldquo;people of Gomorrah.&rdquo; This is not metaphor at a distance &mdash; it is a direct identification. The holy city has become the epitome of wickedness in the prophetic imagination." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Sodom and Gomorrah in the biblical tradition are the archetypes of judgment-worthy sin (Genesis 18&ndash;19). Ezekiel 16:49 will later specify that Sodom&rsquo;s sin included pride, excess of food, prosperous ease, and failure to aid the poor and needy. Isaiah&rsquo;s Sodom language connects to exactly these themes: the wealthy rulers of Jerusalem have neglected the fatherless and widow (v.17, 23) while maintaining elaborate religious ceremonies." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Jesus will invoke this same Sodom-Jerusalem comparison in the Gospels (Matthew 10:15, 11:23&ndash;24), when he warns that cities that reject his message will face worse judgment than Sodom. The rhetorical tradition of prophetic shock &mdash; calling the holy city by the name of the most wicked city &mdash; is part of the prophetic arsenal for breaking through religious complacency." }}
            />

            {/* Section 3 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: TEAL, marginTop: 40, marginBottom: 12 }}>
              God Rejects Their Worship (vv. 11&ndash;15)
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Verses 11&ndash;15 constitute a sustained divine rejection of Israel&rsquo;s entire cultic apparatus. The litany covers burnt offerings, rams, fatlings, bulls, goats, appearing before God, trampling the courts, offerings, incense, new moons, Sabbaths, appointed feasts, solemn assemblies, and prayer itself. Each element is rejected &mdash; not because it is inherently wrong but because it is divorced from justice and righteousness." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The phrase &ldquo;trampling my courts&rdquo; (v.12) is viscerally evocative. The temple courts were sacred space, designated for the encounter between Israel and her God. But the people who crowd them have turned the sacred into a social performance. Their very presence &mdash; which should be an act of humble worship &mdash; has become offensive to God. The sacred building cannot sanitize unholy people." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Verse 15 reaches its most personal: &ldquo;When you spread out your hands, I will hide my eyes from you; even though you make many prayers, I will not listen; your hands are full of blood.&rdquo; The spreading of hands was the physical gesture of prayer in ancient Israel. But God says he will avert his eyes. The prayers of people who perpetuate injustice and violence (&ldquo;hands full of blood&rdquo;) do not reach the throne of God." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "This passage has been enormously influential in the Christian spiritual tradition. The Reformers used it against the perceived formalism of medieval Catholic piety. Liberation theologians have used it to argue for the primacy of social justice. Evangelical expositors have used it to call for genuine conversion alongside religious practice. Whatever the theological tradition, Isaiah 1:11&ndash;15 serves as a permanent prophetic critique of any religion that separates liturgy from life." }}
            />

            {/* Section 4 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: TEAL, marginTop: 40, marginBottom: 12 }}>
              Wash Yourselves; The Great Invitation (vv. 16&ndash;20)
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Having rejected Israel&rsquo;s worship, God immediately pivots to restoration. Verses 16&ndash;17 issue a cascade of imperatives: &ldquo;Wash yourselves; make yourselves clean; remove the evil of your deeds from before my eyes; cease to do evil, learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow&rsquo;s cause.&rdquo; There are eight imperatives &mdash; suggesting comprehensive transformation, not a single isolated act." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The washing imagery of verse 16 is arresting. God has just rejected their external religious washings and sacrifices. But he calls for a different kind of washing &mdash; not of hands but of lives. The Hebrew <em>rahatsbu</em> (wash yourselves) uses the reflexive form: this is not a ritual act performed by a priest on the worshiper but a self-initiated act of moral and spiritual cleansing. It requires an act of the will, a turning of the self toward God." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Then comes the famous invitation of verse 18: &ldquo;Come now, let us reason together, says the LORD: though your sins are like scarlet, they shall be as white as snow; though they are red like crimson, they shall become like wool.&rdquo; After all the judgment, this offer of cleansing is astonishing in its grace. The transformation promised is not partial improvement but total renewal &mdash; from deepest red to absolute white." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The conditional structure of verses 19&ndash;20 (&ldquo;if you are willing and obedient... but if you refuse and rebel&rdquo;) makes clear that the offer is genuine and the human response matters. God does not force transformation; he invites it. The two paths &mdash; eating the good of the land vs. being eaten by the sword &mdash; represent two different futures hanging on Israel&rsquo;s choice. The LORD has spoken; the word is irrevocable (v.20); the decision is theirs." }}
            />

            {/* Section 5 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: TEAL, marginTop: 40, marginBottom: 12 }}>
              Jerusalem the Harlot; Zion Redeemed (vv. 21&ndash;31)
            </h3>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "16px 20px", marginBottom: 20, borderLeft: `3px solid ${GOLD}` }}>
              <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", margin: 0, lineHeight: 1.7 }}>
                &ldquo;Zion shall be redeemed by justice, and those in her who repent, by righteousness.&rdquo; &mdash; Isaiah 1:27
              </p>
            </div>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Verses 21&ndash;23 introduce the &ldquo;faithful city become harlot&rdquo; motif that runs through the prophetic tradition. Jerusalem was once filled with justice, with righteousness lodging in her (v.21) &mdash; the past tense is a lament over what was lost. Now her silver is dross, her wine diluted, her rulers rebellious companions of thieves. The triple corruption of currency, wine, and leadership represents the comprehensive degradation of a society that was meant to model covenant faithfulness to the nations." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The harlot-city image will be developed extensively in Ezekiel 16 and 23 and in Revelation 17&ndash;18. In the prophetic tradition, unfaithfulness to YHWH is consistently described in marital and sexual terms because the covenant between God and Israel was understood as a marriage covenant. Idolatry and injustice are not merely social failures; they are acts of adultery against the divine husband." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Yet verses 24&ndash;26 promise divine restoration: &ldquo;I will turn my hand against you and will smelt away your dross as with lye and remove all your alloy. And I will restore your judges as at the first, and your counselors as at the beginning. Afterward you shall be called the city of righteousness, the faithful city.&rdquo; The metallurgical image is significant: purification through fire. The dross must be removed; the alloy must be smelted out. Judgment is not the end &mdash; it is the process of purification." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The chapter closes (vv.27&ndash;31) with the final discrimination between the repentant and the rebels. Zion will be redeemed by justice; those who repent will be redeemed by righteousness. But rebels and sinners will be destroyed; idolaters who trusted in oaks and gardens will themselves wither like an unfertilized tree, their work like a spark that ignites and no one quenches. The imagery of fire (v.31) bookends the chapter: from the wounded body (vv.5&ndash;6) to the purifying fire, Isaiah holds out both judgment and mercy as the twin responses to human rebellion." }}
            />
          </div>
        )}

        {/* TAB 3 - Application */}
        {activeTab === 3 && (
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 8, borderBottom: `1px solid ${BORDER}`, paddingBottom: 12 }}>
              Application for Today
            </h2>

            {/* Section 1 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: GREEN, marginTop: 40, marginBottom: 12 }}>
              Empty Religion: The Perennial Danger
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Isaiah 1&rsquo;s critique of empty religion is not historically confined. Every generation of religious people faces the temptation to substitute the performance of religious duty for the practice of genuine covenant faithfulness. In the contemporary church, the equivalent of Israel&rsquo;s burnt offerings and solemn assemblies might be regular church attendance, online giving, participation in religious programs, or theological study &mdash; all good things that God does not want divorced from justice, mercy, and genuine love of neighbor." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The test case Isaiah gives is telling: &ldquo;bring justice to the fatherless, plead the widow&rsquo;s cause&rdquo; (v.17). In ancient Israel, the fatherless and widowed were the most economically vulnerable people, lacking the male advocacy that ancient patriarchal society required for access to legal and economic resources. The prophetic tradition consistently identifies care for these groups as the acid test of genuine covenant faithfulness." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Today the equivalents might include: immigrants and refugees without legal status, children in foster care, single mothers without community support, people with disabilities who lack advocates, elderly people isolated in care homes. How a local church community treats these populations is, by Isaiah&rsquo;s logic, a direct measure of the authenticity of its worship. This is not social gospel liberalism; it is classical, apostolic, prophetic Christianity." }}
            />

            {/* Section 2 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: GREEN, marginTop: 40, marginBottom: 12 }}>
              Come, Let Us Reason Together: The Posture of Repentance
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Isaiah 1:18 models a remarkable feature of the biblical God: he invites dialogue. The invitation to &ldquo;reason together&rdquo; (<em>niwwakkah</em>) implies that repentance is not a purely emotional event but also involves the mind, the will, and honest self-examination. God does not merely demand submission; he invites his people to bring their case to him, to examine the evidence, and to arrive at honest conclusions about their condition." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The practical application for modern believers is to cultivate a posture of honest, examined repentance rather than rote confession. True repentance involves actually reasoning through what we have done, understanding why it is wrong, recognizing the harm caused to others and to God, and deliberately turning toward a different path. This is not self-flagellation but honest accounting &mdash; the kind of moral reasoning that Isaiah 1:18 invites." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The promise attached to this reasoning is staggering: sins like scarlet, white as snow; red like crimson, like wool. No human sin is beyond the cleansing capacity of God&rsquo;s forgiveness. The depth of the stain does not determine the limits of God&rsquo;s cleansing power. This promise is the foundation of Christian confidence in the face of guilt, shame, and the weight of past failures. No sin is too great for the God who invites sinners to reason with him." }}
            />

            {/* Section 3 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: GREEN, marginTop: 40, marginBottom: 12 }}>
              Hope in Restoration: The City Made Faithful
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Isaiah 1:26 promises that Jerusalem, the harlot city, will one day be called &ldquo;the faithful city&rdquo; again. This is eschatological hope anchored in specific promise. The full development of this theme runs through the entire book of Isaiah &mdash; from the peaceable kingdom of chapter 11 to the Servant&rsquo;s suffering of chapter 53 to the new Jerusalem of chapters 60&ndash;66. Isaiah 1 plants the seed that the rest of the book develops into a vast tree of hope." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "For the Christian, this restoration hope finds its fulfillment in Jesus Christ and in the church as the community of the redeemed. Paul&rsquo;s language in Ephesians 5:25&ndash;27 &mdash; Christ presenting the church to himself &ldquo;in splendor, without spot or wrinkle or any such thing, that she might be holy and without blemish&rdquo; &mdash; directly echoes the prophetic promise of Jerusalem cleansed and restored. The harlot made faithful is the gospel in the language of prophetic promise." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The city of Revelation 21 &mdash; the New Jerusalem coming down from heaven, &ldquo;prepared as a bride adorned for her husband&rdquo; &mdash; is the culmination of Isaiah&rsquo;s city-as-harlot-become-faithful motif. What Isaiah announces in chapter 1 as promise, Revelation 21 announces as fulfillment. The arc of the biblical narrative bends from the harlot city of Isaiah 1 to the bride city of Revelation 21, sustained throughout by the <em>yakah</em> God who invites sinners into his presence and promises to make them new." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The application for modern believers is to hold this same posture: honest about failure, receptive to prophetic critique, committed to genuine justice, and anchored in the hope of God&rsquo;s transforming faithfulness. Isaiah 1 is not primarily a text about ancient Judah&rsquo;s failures; it is a mirror held up to every generation of God&rsquo;s people, inviting them to see themselves clearly and to receive the astonishing gift of a God who says: though your sins are like scarlet, they shall be white as snow." }}
            />
          </div>
        )}

        {/* VIDEO SECTION - always visible */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: TEXT, marginBottom: 8 }}>
            Study Videos
          </h2>
          <p style={{ color: MUTED, fontSize: 14, marginBottom: 32 }}>
            Video resources for deeper study of Isaiah 1.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <p style={{ color: TEXT, fontSize: 15, fontWeight: 600, margin: 0 }}>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
