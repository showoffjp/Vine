"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const PURPLE_LIGHT = "#a78bfa";

const videoItems = [
  { id: "cW9mBkLpT2n", title: "Revelation 19 - Hallelujah and the Return of Christ" },
  { id: "eP4rZxQvA8f", title: "The Marriage Supper of the Lamb Revelation 19 Study" },
  { id: "jD6tNySwK1g", title: "King of Kings and Lord of Lords Revelation 19" },
  { id: "uH3bCfMwR5j", title: "Revelation 19 Explained - Second Coming of Jesus" },
];

const keyThemes = [
  {
    id: "hallelujah",
    title: "The Fourfold Hallelujah",
    color: GOLD,
    body: "Heaven&apos;s four &quot;Hallelujah&quot; cries celebrate God&apos;s justice, power, and reign. Hallelujah (Hebrew: &quot;Praise Yah&quot;) appears only in the New Testament here in Revelation 19, emphasizing the connection between old and new covenant worship. Each cry builds on the last: God is praised for his true judgments, for avenging his servants, for reigning as Lord, and finally for the coming of the marriage supper. The fourfold structure mirrors the completeness of heaven&apos;s joy &mdash; nothing is held back, no reservation clouds the chorus. This is worship without ambivalence, praise without apology, adoration without mixture. The saints who once cried &quot;How long?&quot; now cry &quot;Hallelujah!&quot; because the answer has come.",
  },
  {
    id: "marriage",
    title: "The Marriage Supper of the Lamb",
    color: TEAL,
    body: "The marriage metaphor runs through both Testaments. Israel was God&apos;s bride in the OT (Isaiah 62:5); the church is Christ&apos;s bride. The supper represents the consummation of God&apos;s covenant relationship with his redeemed people &mdash; the ultimate banquet of fellowship and joy. The announcement is made in heaven before the event unfolds on earth: &quot;the marriage of the Lamb has come, and his Bride has made herself ready.&quot; This readiness is not self-earned; the fine linen is given to her, yet it represents real righteousness wrought in her by the Spirit. The invitation &mdash; &quot;Blessed are those invited to the marriage supper of the Lamb&quot; &mdash; is described by the angel as &quot;the true words of God.&quot; This supper is not a metaphor for church services but the literal, eschatological feast at history&apos;s end.",
  },
  {
    id: "warrior",
    title: "Christ&apos;s Return as Warrior King",
    color: PURPLE_LIGHT,
    body: "The Rider on the white horse is not a gentle shepherd but a conquering King executing divine justice. His names (Faithful and True, Word of God, King of kings) reveal his full identity. The battle is swift &mdash; the sword from his mouth is the word of God&apos;s judgment. He comes not with diplomacy but with the winepress of the fury of the wrath of God the Almighty. His eyes are like flames of fire, penetrating every deception and hypocrisy. Many crowns adorn his head &mdash; not one crown, not seven crowns, but many diadems &mdash; signifying that he outranks every earthly and spiritual authority. His robe is dipped in blood before the battle even begins, connecting him to Isaiah 63:1-6 and the suffering servant who became the conquering Lord.",
  },
  {
    id: "linen",
    title: "The Fine Linen of Righteousness",
    color: GREEN,
    body: "The bride&apos;s garment (fine linen, bright and pure) represents the righteous deeds of the saints. This is not earned salvation but the fruit of redeemed lives, the deeds prepared beforehand (Ephesians 2:10) for those who walked in faith. The contrast with Babylon is deliberate: Babylon was clothed in purple and scarlet, adorned with gold and jewels &mdash; the garments of self-glory. The Bride wears fine linen, given to her, representing the collaborative work of God&apos;s grace and human faithfulness. The Greek word for &quot;righteous deeds&quot; (dikaiomata) is plural and specific: not a general moral quality but particular acts of obedience, mercy, faithfulness, and love. Every act of kindness done in Christ&apos;s name becomes part of the wedding garment.",
  },
  {
    id: "defeat",
    title: "Final Defeat of the Beast and False Prophet",
    color: "#E11D48",
    body: "The beast (political power) and false prophet (religious deception) are the first beings thrown into the lake of fire, ahead of even Satan (who comes in chapter 20). Their capture marks the end of the great tribulation&apos;s twin engines of evil. The beast has persecuted the saints; the false prophet has deceived the nations with signs and wonders. Both are cast &quot;alive&quot; into the lake of fire burning with sulfur &mdash; the first time in Scripture this destination is mentioned. Their followers are slain by the sword from the Rider&apos;s mouth, a picture of the devastating finality of God&apos;s word in judgment. No negotiation, no appeal, no delay: the One who was crucified now executes the sentence that justice demands.",
  },
];

const verseByVerse = [
  {
    id: "v1-4",
    ref: "Verses 1-4",
    heading: "The Great Multitude&apos;s First Hallelujah",
    body: "After the smoke of Babylon&apos;s destruction rises (18:9-24), John hears what seems like a great multitude in heaven shouting &quot;Hallelujah!&quot; The praise is specific: God&apos;s judgments are true and just; he has condemned the great prostitute who corrupted the earth and has avenged the blood of his servants. The Greek word for &quot;avenged&quot; (exedikesen) echoes the cry of the martyrs under the altar in 6:10 &mdash; &quot;How long before you will judge and avenge our blood?&quot; The answer arrives: now. A second &quot;Hallelujah&quot; follows as the smoke of Babylon&apos;s ruin rises forever. Then the twenty-four elders and four living creatures fall down in worship before God on the throne, saying &quot;Amen. Hallelujah!&quot; Three &quot;Hallelujahs&quot; in four verses &mdash; the rhythm of heaven&apos;s sustained joy.",
  },
  {
    id: "v5-8",
    ref: "Verses 5-8",
    heading: "The Fourth Hallelujah and the Marriage Supper Announced",
    body: "A voice from the throne &mdash; not God&apos;s voice directly, but a divine command voice &mdash; calls all God&apos;s servants, both small and great, to praise him. In response, the great multitude roars like rushing waters and loud thunder: &quot;Hallelujah! For the Lord our God the Almighty reigns.&quot; This is the fourth and climactic Hallelujah, centered not on judgment but on God&apos;s sovereign reign. Then the announcement: &quot;the marriage of the Lamb has come, and his Bride has made herself ready; it was granted her to clothe herself with fine linen, bright and pure.&quot; The passive &quot;it was granted&quot; is crucial: her readiness is God&apos;s gift. The fine linen is then interpreted: &quot;the fine linen is the righteous deeds of the saints.&quot; Both gift and response, both grace and faithfulness, woven together.",
  },
  {
    id: "v9-10",
    ref: "Verses 9-10",
    heading: "Blessed Are the Invited; Do Not Worship Angels",
    body: "John is commanded to write one of the seven beatitudes of Revelation: &quot;Blessed are those who are invited to the marriage supper of the Lamb.&quot; The angel emphasizes: &quot;These are the true words of God.&quot; In his overwhelmed response, John falls at the angel&apos;s feet to worship. The angel refuses sharply: &quot;You must not do that! I am a fellow servant with you and your brothers who hold to the testimony of Jesus. Worship God.&quot; The Christological center of Revelation is restated here: &quot;For the testimony of Jesus is the spirit of prophecy.&quot; All prophetic witness in Scripture finds its meaning in Jesus. The angel&apos;s refusal of worship is a guardrail for the church &mdash; adoration belongs to God alone, not to his messengers, however glorious.",
  },
  {
    id: "v11-13",
    ref: "Verses 11-13",
    heading: "Heaven Opened: The Rider on the White Horse",
    body: "John&apos;s vision shifts dramatically: &quot;Then I saw heaven opened.&quot; This is the third time heaven opens in Revelation (4:1; 11:19; 19:11). Out comes a white horse whose Rider is called &quot;Faithful and True,&quot; and in righteousness he judges and makes war. His eyes are like a flame of fire &mdash; penetrating, consuming, revealing. On his head are many diadems. He has a name written that no one knows but himself &mdash; perhaps indicating the fullness of his divine identity transcends human comprehension. He is clothed in a robe dipped in blood: this blood is his own, shed at Calvary, the basis of all judgment and redemption. Then the name that is given: &quot;The Word of God.&quot; John&apos;s Gospel opens with this title; here it appears in full military deployment. The Logos who created all things now comes to restore all things.",
  },
  {
    id: "v14-16",
    ref: "Verses 14-16",
    heading: "The Armies of Heaven and the King of Kings",
    body: "The armies of heaven follow the Rider on white horses, clothed in fine linen, white and pure &mdash; the same garment as the Bride. From the Rider&apos;s mouth comes a sharp sword to strike down the nations, and he will rule them with a rod of iron. He treads the winepress of the fury of the wrath of God the Almighty &mdash; the image from Isaiah 63 fully realized. Then the title written on his robe and on his thigh &mdash; the place of a warrior&apos;s sword: &quot;King of kings and Lord of lords.&quot; This title appeared first on the Lamb in 17:14; now it is inscribed on the conquering Rider. Every earthly king, every lord, every power &mdash; all subordinate to this one. History has a destination, and its name is written on his thigh.",
  },
  {
    id: "v17-18",
    ref: "Verses 17-18",
    heading: "The Angel in the Sun: Summons to the Great Supper of God",
    body: "An angel standing in the sun &mdash; at the center of heaven&apos;s brightest light &mdash; cries out to all the birds flying in midheaven: &quot;Come, gather for the great supper of God.&quot; This is a deliberate parody of the marriage supper announced in verse 9. There are two suppers: the marriage supper of the Lamb for the redeemed, and the great supper of God for the carrion birds. The menu of the second supper is deliberately shocking: the flesh of kings, captains, mighty men, horses and their riders, all people both free and slave, small and great. Every level of human society, every instrument of war, every form of earthly power &mdash; all laid low. The birds are summoned before the battle; God&apos;s victory is certain before it begins. The passage echoes Ezekiel 39:17-20.",
  },
  {
    id: "v19-21",
    ref: "Verses 19-21",
    heading: "The Beast Captured, the False Prophet Taken, the Lake of Fire",
    body: "John sees the beast and the kings of the earth, with their armies, gathered to make war against the Rider and his army. This is the battle referenced in 16:14 and 16:16 as Armageddon &mdash; but the actual combat is described in a single verse: the beast was captured, and the false prophet with him. No extended battle description; the outcome is immediate and total. The beast is the political power that demanded worship; the false prophet is the religious deceiver who performed signs. Both are thrown alive into the lake of fire burning with sulfur &mdash; the first occupants of this final destination in Revelation&apos;s narrative. The rest are killed by the sword that came from the Rider&apos;s mouth, and all the birds are gorged with their flesh. The word of Christ is sufficient to end the age of evil.",
  },
];

const applicationItems = [
  {
    id: "worship",
    heading: "Let the Hallelujah Fill Your Worship Now",
    body: "Revelation 19 shows that worship in heaven is not timid or vague &mdash; it is specific, loud, and grounded in God&apos;s actual deeds. Let that shape your own worship: praise God for specific acts of justice and faithfulness you have witnessed. Do not wait for Revelation 19&apos;s fulfillment to begin the song that will never end. The four Hallelujahs are not only heaven&apos;s future response &mdash; they are the pattern for every gathered congregation now. When you sing, when you pray, when you testify, you are joining a chorus already underway in the heavenly realm.",
  },
  {
    id: "garment",
    heading: "Prepare Your Garment Through Faithful Living",
    body: "The fine linen of the Bride is &quot;the righteous deeds of the saints.&quot; This means the choices you make today &mdash; acts of mercy, faithfulness in small things, obedience in secret, love expressed toward the unlovable &mdash; are becoming part of your wedding garment. You are not earning your place at the supper; that is secured by grace. But you are dressing for it. Ephesians 2:10 says we are created in Christ Jesus for good works that God prepared in advance. Live those works. Every thread of faithful obedience woven in secret becomes visible glory on the last day.",
  },
  {
    id: "babylon",
    heading: "Hold Your Babylon Attachments Loosely",
    body: "Chapters 17-18 describe Babylon&apos;s allure: its wealth, its luxury, its power to make merchants rich. Chapter 19 shows the smoke of its ruin rising forever. Whatever you cling to that competes with Christ &mdash; financial security, cultural approval, status, comfort &mdash; is Babylon in miniature. The call is not to despise creation but to hold it loosely, knowing that only what is in Christ will survive the fire. Ask: what would I be devastated to lose that is not God himself? That is your Babylon. Offer it back to God as an act of worshipful submission.",
  },
  {
    id: "victory",
    heading: "Trust Christ&apos;s Final Victory Over Every Form of Evil",
    body: "The beast and false prophet &mdash; political tyranny and religious deception &mdash; appear invincible throughout Revelation 13. Then in a single verse they are captured and thrown into the lake of fire. The apparent power of evil is always derivative and temporary. When you face systemic injustice, ideological deception, or institutional wickedness that seems immovable, Revelation 19 is the answer: it will be captured. The one whose name is &quot;Faithful and True&quot; will not leave evil enthroned. This is not fatalism but confident engagement: you resist evil knowing that the final Rider has already determined the outcome.",
  },
  {
    id: "supper",
    heading: "Embrace the Marriage Supper by Drawing Near Daily",
    body: "The marriage supper is a future event, but every communion table is a foretaste. Jesus told his disciples at the Last Supper that he would not drink of the fruit of the vine again until that day in his Father&apos;s kingdom (Matthew 26:29). The Lord&apos;s Supper is a prophetic meal &mdash; a declaration of the marriage supper not yet arrived. Come to Christ in prayer, in Scripture, in communion, in fellowship, as preparation for the day when you will sit at the table no longer by faith but by sight.",
  },
  {
    id: "courage",
    heading: "Find Courage in Knowing Who Rides the White Horse",
    body: "When history feels out of control &mdash; when evil seems to gain ground, when the church is persecuted, when the powerful mock righteousness &mdash; Revelation 19 calls you to lift your eyes. The one who rides the white horse has eyes like flames of fire, many crowns on his head, a name above every name. He is Faithful and True. He is the Word of God. He is King of kings and Lord of lords. This is not wishful thinking; it is the most certain fact in the universe. The saints who cry &quot;Hallelujah&quot; in verse 1 have seen Babylon fall; the saints in every generation are called to live as though they already know the same.",
  },
];

export default function Revelation19GuidePage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const tabs = ["Overview", "Key Themes", "Verse by Verse", "Application"];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <main style={{ maxWidth: 940, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", padding: "48px 0 40px" }}>
          <div style={{ display: "inline-block", background: `${GOLD}18`, border: `1px solid ${GOLD}40`, borderRadius: 8, padding: "4px 16px", fontSize: 13, color: GOLD, fontWeight: 700, marginBottom: 16, letterSpacing: "0.08em" }}>
            REVELATION 19
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 12, lineHeight: 1.15, color: TEXT }}>
            Hallelujah and the Return of Christ
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto 24px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "Heaven erupts in praise, the marriage supper of the Lamb is announced, and Christ rides forth as King of kings &mdash; the most jubilant and climactic chapter in all Scripture." }}
          />
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <span style={{ background: `${PURPLE}20`, color: PURPLE_LIGHT, padding: "4px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>21 Verses</span>
            <span style={{ background: `${GOLD}18`, color: GOLD, padding: "4px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>4 Hallelujahs</span>
            <span style={{ background: `${GREEN}18`, color: GREEN, padding: "4px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>The Marriage Supper</span>
            <span style={{ background: `${TEAL}18`, color: TEAL, padding: "4px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>King of Kings</span>
          </div>
        </div>

        {/* Video Grid */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: PURPLE_LIGHT, marginBottom: 20, borderBottom: `1px solid ${BORDER}`, paddingBottom: 12 }}>
            Teaching Videos
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {videoItems.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.id} title={v.title} />
                <div style={{ padding: "12px 14px" }}>
                  <p style={{ color: TEXT, fontSize: 13, fontWeight: 600, margin: 0, lineHeight: 1.5 }}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: `1px solid ${BORDER}`, marginBottom: 32, display: "flex", overflowX: "auto" }}>
          {tabs.map((label, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setTab(i)}
              style={{ padding: "1rem 1.5rem", background: "none", border: "none", borderBottom: tab === i ? "2px solid #6B4FBB" : "2px solid transparent", cursor: "pointer", color: tab === i ? PURPLE_LIGHT : MUTED, fontWeight: tab === i ? 700 : 500, fontSize: 15, whiteSpace: "nowrap" }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tab 0: Overview */}
        {tab === 0 && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 32, marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: GOLD, marginBottom: 18 }}>Overview of Revelation 19</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Revelation 19 is one of the most jubilant chapters in all Scripture. After the fall of Babylon in chapters 17&ndash;18, heaven erupts with the great &quot;Hallelujah&quot; chorus &mdash; four times the word &quot;Hallelujah&quot; thunders through the heavenly realm, praising God for his true and just judgments and for avenging the blood of his servants." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The twenty-four elders and four living creatures fall down in worship. Then the marriage supper of the Lamb is announced: the Bride has made herself ready, clothed in fine linen &mdash; the righteous deeds of the saints. John is commanded to write: &quot;Blessed are those invited to the marriage supper of the Lamb.&quot;" }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The chapter climaxes with the heavens opening and the appearance of Christ &mdash; riding a white horse, eyes like flames of fire, many crowns on his head, his robe dipped in blood, called Faithful and True, the Word of God. The armies of heaven follow him. He strikes the nations with a sharp sword and treads the winepress of the wrath of God." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: "On his robe and thigh: &quot;King of kings and Lord of lords.&quot; The birds are summoned to feast on the fallen enemies. The beast and the false prophet are captured and thrown into the lake of fire &mdash; the first occupants of that dreadful destination in Revelation&apos;s narrative." }}
              />
            </div>

            {/* Context Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 28 }}>
              <div style={{ background: CARD, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: GOLD, fontWeight: 800, fontSize: 13, marginBottom: 10, letterSpacing: "0.07em" }}>POSITION IN REVELATION</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Chapter 19 follows immediately after the dirge over Babylon (ch. 18). The transition is abrupt and deliberate: earth mourns, heaven worships. The fall of Babylon is the occasion for heaven&apos;s loudest Hallelujah. This pattern &mdash; judgment below, praise above &mdash; runs through the Psalms (e.g., Psalm 96) and reaches its fullest expression here." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${TEAL}30`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: TEAL, fontWeight: 800, fontSize: 13, marginBottom: 10, letterSpacing: "0.07em" }}>THE ONLY NT HALLELUJAHS</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "The Hebrew word &quot;Hallelujah&quot; (Praise Yah!) appears 24 times in the Psalms but nowhere else in the New Testament except Revelation 19:1, 3, 4, and 6. John is deliberately connecting new covenant worship to the Psalter. The great Hallel (Psalms 113&ndash;118), sung at Passover, finds its ultimate fulfillment in the Lamb&apos;s victory." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: PURPLE_LIGHT, fontWeight: 800, fontSize: 13, marginBottom: 10, letterSpacing: "0.07em" }}>TWO SUPPERS IN ONE CHAPTER</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Revelation 19 presents two suppers: the marriage supper of the Lamb (v. 9) for the redeemed, and the great supper of God (v. 17-18) for the birds of prey. The contrast is stark &mdash; one leads to eternal fellowship, the other to the carrion feast of judgment. Every human being is invited to one or the other; there is no third option." }}
                />
              </div>
            </div>

            {/* Key Verse */}
            <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ color: GOLD, fontWeight: 800, fontSize: 13, marginBottom: 14, letterSpacing: "0.07em" }}>KEY VERSE &mdash; REVELATION 19:16</div>
              <blockquote style={{ margin: 0, padding: 0 }}>
                <p style={{ color: TEXT, fontSize: 20, fontStyle: "italic", lineHeight: 1.6, fontWeight: 600, margin: "0 0 12px" }}
                  dangerouslySetInnerHTML={{ __html: "&quot;On his robe and on his thigh he has a name written, King of kings and Lord of lords.&quot;" }}
                />
                <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Revelation 19:16 (ESV)</p>
              </blockquote>
            </div>
          </div>
        )}

        {/* Tab 1: Key Themes */}
        {tab === 1 && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: PURPLE_LIGHT, marginBottom: 8 }}>Key Themes in Revelation 19</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Five major theological themes woven through this chapter &mdash; each one rich in Old Testament background and New Testament fulfillment." }}
              />
            </div>
            {keyThemes.map((theme) => (
              <div key={theme.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => toggle(theme.id)}
                  style={{ width: "100%", background: "none", border: "none", padding: "20px 24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                    <span style={{ color: theme.color, fontWeight: 700, fontSize: 16 }} dangerouslySetInnerHTML={{ __html: theme.title }} />
                  </div>
                  <span style={{ color: MUTED, fontSize: 22, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>{open === theme.id ? "-" : "+"}</span>
                </button>
                {open === theme.id && (
                  <div style={{ padding: "0 24px 24px" }}>
                    <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 20 }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: theme.body }} />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Additional study note */}
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: 24, marginTop: 24 }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 13, marginBottom: 12, letterSpacing: "0.07em" }}>STUDY NOTE: OLD TESTAMENT BACKGROUND</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}
                dangerouslySetInnerHTML={{ __html: "Revelation 19 is a mosaic of Old Testament imagery. The Rider&apos;s robe dipped in blood recalls Isaiah 63:1-6, where God treads the winepress of judgment alone. The birds summoned to the great supper echo Ezekiel 39:17-20. The sword from his mouth recalls Isaiah 11:4 and 49:2. The title &quot;King of kings&quot; appears in Daniel 2:47 applied to God. John is not inventing imagery but unveiling the full meaning of what the prophets saw only in part." }}
              />
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The marriage metaphor likewise draws on the prophets: Isaiah 62:5 (&quot;as the bridegroom rejoices over the bride, so shall your God rejoice over you&quot;), Hosea&apos;s entire narrative of God&apos;s faithful love for unfaithful Israel, and Ezekiel 16&apos;s account of the covenant relationship. John sees the fulfillment of all of it concentrated in the marriage supper of the Lamb." }}
              />
            </div>
          </div>
        )}

        {/* Tab 2: Verse by Verse */}
        {tab === 2 && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: PURPLE_LIGHT, marginBottom: 8 }}>Verse by Verse: Revelation 19</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "A close reading of all 21 verses, section by section &mdash; paying attention to the text&apos;s own structure and the weight of each image." }}
              />
            </div>
            {verseByVerse.map((section, idx) => (
              <div key={section.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => toggle(section.id)}
                  style={{ width: "100%", background: "none", border: "none", padding: "20px 24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${PURPLE}20`, border: `1px solid ${PURPLE}60`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE_LIGHT, fontWeight: 800, fontSize: 12, flexShrink: 0 }}>
                      {idx + 1}
                    </div>
                    <div>
                      <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", marginBottom: 2 }}>{section.ref}</div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: section.heading }} />
                    </div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 22, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>{open === section.id ? "-" : "+"}</span>
                </button>
                {open === section.id && (
                  <div style={{ padding: "0 24px 24px" }}>
                    <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 20 }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: section.body }} />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Verse summary table */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginTop: 24 }}>
              <div style={{ color: GOLD, fontWeight: 800, fontSize: 13, marginBottom: 16, letterSpacing: "0.07em" }}>QUICK REFERENCE: ALL 21 VERSES</div>
              {[
                { ref: "v.1-4", summary: "Great multitude praises God; smoke of Babylon rises; elders and living creatures worship" },
                { ref: "v.5-8", summary: "Voice from throne; fourth Hallelujah; Lord Almighty reigns; marriage supper announced; fine linen = righteous deeds" },
                { ref: "v.9-10", summary: "Blessed are those invited; angel refuses worship; testimony of Jesus is spirit of prophecy" },
                { ref: "v.11-13", summary: "Heaven opened; white horse; Faithful and True; eyes like flame; many crowns; robe dipped in blood; Word of God" },
                { ref: "v.14-16", summary: "Armies follow on white horses; sharp sword from mouth; treads winepress; King of kings on robe and thigh" },
                { ref: "v.17-18", summary: "Angel in sun summons birds; great supper of God; flesh of kings, captains, all people" },
                { ref: "v.19-21", summary: "Beast and kings gather for war; beast and false prophet captured; thrown into lake of fire; rest slain by sword; birds gorged" },
              ].map((row) => (
                <div key={row.ref} style={{ display: "flex", gap: 16, padding: "10px 0", borderBottom: `1px solid ${BORDER}` }}>
                  <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 56, flexShrink: 0 }}>{row.ref}</span>
                  <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.6 }}>{row.summary}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Application */}
        {tab === 3 && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: PURPLE_LIGHT, marginBottom: 8 }}>Application: Living in Light of Revelation 19</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Revelation 19 is not only prophecy about the future &mdash; it is wisdom for the present. Six ways to live now in light of what this chapter reveals." }}
              />
            </div>
            {applicationItems.map((item) => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  style={{ width: "100%", background: "none", border: "none", padding: "20px 24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left" }}
                >
                  <span style={{ color: GREEN, fontWeight: 700, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: item.heading }} />
                  <span style={{ color: MUTED, fontSize: 22, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>{open === item.id ? "-" : "+"}</span>
                </button>
                {open === item.id && (
                  <div style={{ padding: "0 24px 24px" }}>
                    <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 20 }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Final reflection */}
            <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28, marginTop: 28 }}>
              <div style={{ color: PURPLE_LIGHT, fontWeight: 800, fontSize: 13, marginBottom: 14, letterSpacing: "0.07em" }}>REFLECTION QUESTIONS</div>
              {[
                "When you worship, do you praise God for specific acts of justice and faithfulness, or only in general terms?",
                "What in your daily life is being woven into the fine linen of righteous deeds?",
                "What attachments to &quot;Babylon&quot; do you need to hold more loosely this week?",
                "How does knowing who rides the white horse change how you face the most fearful news today?",
                "Is there a way you are invited to the marriage supper that you have been neglecting? Come near.",
              ].map((q, i) => (
                <div key={i} style={{ display: "flex", gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: `${PURPLE}30`, border: `1px solid ${PURPLE}`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE_LIGHT, fontWeight: 800, fontSize: 11, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                </div>
              ))}
            </div>

            {/* Prayer prompt */}
            <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 14, padding: 28, marginTop: 20 }}>
              <div style={{ color: GOLD, fontWeight: 800, fontSize: 13, marginBottom: 14, letterSpacing: "0.07em" }}>PRAYER PROMPT</div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, fontStyle: "italic", margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Lord, let the Hallelujah of heaven&apos;s court be the song of my heart now. I confess that I am too easily silenced by fear, too quickly discouraged by evil&apos;s apparent strength. Help me to see the white horse and its Rider when I look at history. Help me to prepare the garment through faithful obedience in hidden things. Let the marriage supper be my hope and my homecoming. You are Faithful and True. You are the Word of God. You are King of kings and Lord of lords. Hallelujah. Amen." }}
              />
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
