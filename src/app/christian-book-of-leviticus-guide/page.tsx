"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The System of Sacrifice",
  "The Priesthood",
  "Clean and Unclean",
  "The Day of Atonement",
  "The Call to Holiness",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "The System of Sacrifice",
    heading: "The System of Sacrifice",
    reference: "Leviticus 1&ndash;7",
    paragraphs: [
      "The Book of Leviticus opens not with a journey or a battle but with a voice: &ldquo;The Lord called Moses and spoke to him from the tent of meeting&rdquo; (1:1). The tabernacle has just been completed at the end of Exodus, and the glory of God has filled it. Now the great question of the book arises &mdash; how can a holy God dwell in the midst of a sinful people without consuming them? Leviticus is the answer, and it begins with the system of sacrifice, the God-given way that fallen people may draw near to a holy God.",
      "The first offering described is the burnt offering, in which the entire animal &mdash; a bull, sheep, goat, or bird according to one&rsquo;s means &mdash; is consumed upon the altar. The worshiper lays a hand upon the animal&rsquo;s head, identifying with it, and the animal dies in his place. Nothing is held back; the whole offering ascends to God as &ldquo;a pleasing aroma to the Lord&rdquo; (1:9). It pictures total consecration and the costly reality that the wages of sin is death.",
      "The grain offering follows, an offering of fine flour, oil, and frankincense, with no leaven and always with salt, &ldquo;the salt of the covenant&rdquo; (2:13). A portion is burned as a memorial, and the rest belongs to the priests. Unlike the others, it involves no blood; it is an offering of thanksgiving and devotion, an acknowledgment that the fruit of one&rsquo;s labor belongs first to God.",
      "The peace offering, or fellowship offering, is unique in that the worshiper, the priests, and the Lord all share in it. Part is burned, part is given to the priests, and the rest is eaten by the offerer and his household in a sacred meal. It celebrates restored fellowship and communion with God &mdash; a foretaste of the table fellowship that reconciliation makes possible.",
      "Then come the offerings that deal directly with guilt. The sin offering (or purification offering) addresses unintentional sins and the defilement they bring, with the blood applied to purify the sanctuary and the sinner. The guilt offering (or reparation offering) addresses sins that require restitution, where the offender must repay what was wronged and add a fifth to it. Throughout, the principle is unmistakable: &ldquo;without the shedding of blood there is no forgiveness of sins&rdquo; (Hebrews 9:22).",
      "Taken together, these five offerings form a rich vocabulary of worship, gratitude, fellowship, and atonement. Yet the New Testament reads them all as shadows of a greater reality. Every lamb pointed forward to the Lamb of God; every offering ascended toward the one offering of Christ, who &ldquo;loved us and gave himself up for us, a fragrant offering and sacrifice to God&rdquo; (Ephesians 5:2). The whole sacrificial system was a tutor, teaching Israel the seriousness of sin and the costliness of grace until the true sacrifice should come.",
    ],
  },
  {
    id: "The Priesthood",
    heading: "The Priesthood",
    reference: "Leviticus 8&ndash;10",
    paragraphs: [
      "If sacrifice is the means of approaching God, the priesthood is the appointed mediator. In chapters 8 through 10, Moses ordains Aaron and his sons as priests, carrying out the consecration that God had commanded back in Exodus. They are washed with water, clothed in the holy garments, and anointed with oil; sacrifices are offered, and blood is applied to the ear, thumb, and toe of each priest, consecrating them wholly to the service of God.",
      "The priesthood was no light calling. The priests stood between the people and God, offering the sacrifices, tending the lampstand and the bread of the Presence, teaching the law, and discerning between the holy and the common, the clean and the unclean. Aaron, as high priest, bore the names of the twelve tribes on his breastpiece when he entered the sanctuary, carrying the whole nation before the Lord. The priesthood embodied the truth that sinful people cannot simply approach God on their own terms; they need a mediator appointed by God himself.",
      "The ordination reaches its climax when, after the first sacrifices are offered, &ldquo;the glory of the Lord appeared to all the people. And fire came out from before the Lord and consumed the burnt offering&hellip; and when all the people saw it, they shouted and fell on their faces&rdquo; (9:23&ndash;24). God himself accepts the offering and confirms the priesthood by fire from heaven. The system is now established, and the worship of Israel can proceed.",
      "Yet immediately the holiness of God is underscored in a sobering way. Nadab and Abihu, two of Aaron&rsquo;s sons, offer &ldquo;unauthorized fire before the Lord, which he had not commanded them&rdquo; (10:1), and the same fire that had accepted the sacrifice now consumes them. The lesson is severe but clear: God will be approached on his terms, not ours, and those who draw near to him must treat him as holy. &ldquo;Among those who are near me I will be sanctified&rdquo; (10:3).",
      "The Aaronic priesthood, for all its dignity, was provisional and imperfect. The priests were themselves sinful men who had to offer sacrifices first for their own sins, and death constantly cut their ministry short, so that the office passed from one mortal man to the next. The arrangement cried out for something better and more permanent.",
      "The Book of Hebrews proclaims that the better priest has come. Jesus is &ldquo;a great high priest who has passed through the heavens&rdquo; (Hebrews 4:14), holy, innocent, and undefiled, who has no sin of his own and who holds his priesthood permanently because he lives forever. Where Aaron entered an earthly tent year after year with the blood of animals, Christ &ldquo;entered once for all into the holy places&hellip; by means of his own blood, thus securing an eternal redemption&rdquo; (Hebrews 9:12). The priesthood of Leviticus was the shadow; Christ is the substance.",
    ],
  },
  {
    id: "Clean and Unclean",
    heading: "Clean and Unclean",
    reference: "Leviticus 11&ndash;15",
    paragraphs: [
      "At the heart of Leviticus stands a sustained set of laws distinguishing the clean from the unclean. These chapters address food, childbirth, skin diseases, mildew in garments and houses, and bodily discharges. To modern readers they can seem strange and remote, yet they served a profound purpose in Israel&rsquo;s life with God: they made holiness tangible, woven into the most ordinary moments of daily existence.",
      "The dietary laws of chapter 11 divide the animal world into clean and unclean. Israel may eat animals that chew the cud and have a divided hoof, fish with fins and scales, and certain birds, while others are forbidden. These distinctions set Israel apart from the surrounding nations and turned every meal into a reminder of their calling: &ldquo;You shall be holy, for I am holy&rdquo; (11:44). The dinner table itself became a place of remembering whose people they were.",
      "Chapters 12 through 15 deal with various forms of ritual impurity &mdash; childbirth, infectious skin conditions often translated &ldquo;leprosy,&rdquo; and discharges from the body. Uncleanness was not necessarily sin; it was a state of ritual defilement that barred a person from the sanctuary until they were cleansed. The recurring concern is that the unclean must not &ldquo;defile my tabernacle that is in their midst&rdquo; (15:31). Holiness and life belong near to God; impurity and death must be kept away from his dwelling.",
      "Underlying these laws is a deep theology. Uncleanness is repeatedly associated with death, decay, and disorder &mdash; the very things that have no place in the presence of the living God. To be clean was to be ordered toward life and toward the Creator; to be unclean was to bear the marks of a world broken by the fall. The endless cycle of becoming unclean and being cleansed taught Israel that defilement is pervasive and that access to God is a precious and carefully guarded gift.",
      "These laws also shaped Israel as a distinct, set-apart nation among the peoples of the earth. In every culture around them, holiness blurred into the worship of false gods; in Israel, the boundaries of clean and unclean were a daily catechism in the difference between the Lord and the idols, between his ways and the ways of the nations. The structure of ordinary life preached the holiness of God.",
      "In the Gospels, Jesus reaches out and touches the leper and the woman with the discharge of blood &mdash; and instead of being defiled, he makes them clean. The flow of contamination is reversed; his holiness is contagious. Later he declares all foods clean (Mark 7:19), and in Acts, Peter&rsquo;s vision of the sheet lowered from heaven shows that in Christ the dividing wall has come down and the nations are welcomed in. The laws of clean and unclean find their goal in the One who cleanses sinners from the inside out.",
    ],
  },
  {
    id: "The Day of Atonement",
    heading: "The Day of Atonement",
    reference: "Leviticus 16",
    paragraphs: [
      "Chapter 16 stands at the literary and theological center of Leviticus: the Day of Atonement, Yom Kippur, the most solemn day in Israel&rsquo;s calendar. On this one day each year, the high priest was permitted to enter the Most Holy Place, behind the veil, into the very presence of God above the mercy seat. It was the day on which the sins of the entire nation were dealt with, the day that made it possible for a holy God to continue dwelling among an unholy people.",
      "The chapter opens with a reminder of the deaths of Nadab and Abihu, a warning that Aaron may not come into the holy place &ldquo;whenever he chooses&rdquo; (16:2), lest he die. The approach to God is hedged about with care. Aaron must first bathe, set aside his glorious garments for simple linen, and offer a bull as a sin offering for himself and his own household, for the mediator must himself be atoned for before he can act for others.",
      "Then two goats are brought before the Lord, and lots are cast over them. One goat is &ldquo;for the Lord&rdquo; and is offered as a sin offering for the people; its blood is carried within the veil and sprinkled on and before the mercy seat, making atonement for the Holy Place because of the uncleannesses of the people of Israel. The blood purifies the sanctuary itself, cleansing the place where God meets his people.",
      "The second goat is the scapegoat. Aaron lays both hands upon its head and confesses over it &ldquo;all the iniquities of the people of Israel, and all their transgressions, all their sins&rdquo; (16:21), symbolically transferring the guilt of the nation onto the animal. The goat is then driven out into the wilderness, bearing all their iniquities to a remote and desolate place, never to return. The two goats together portray a single truth from two angles: sin is paid for by death, and sin is carried away, removed as far as the east is from the west.",
      "The whole nation was to humble itself on that day, fasting and resting from all work, for &ldquo;on this day shall atonement be made for you to cleanse you. You shall be clean before the Lord from all your sins&rdquo; (16:30). It was a day of national repentance and cleansing, repeated year after year because the cleansing it provided was real but temporary, never finally settling the problem of sin.",
      "Hebrews sees the Day of Atonement fulfilled in Jesus. He is at once the high priest who enters the true sanctuary in heaven, the sacrifice whose blood actually takes away sin, and the one who, like the scapegoat, was led outside the camp to bear our guilt away. &ldquo;He has appeared once for all at the end of the ages to put away sin by the sacrifice of himself&rdquo; (Hebrews 9:26). What Yom Kippur could only picture year by year, Christ accomplished once for all on the cross, and the veil that barred the way was torn in two.",
    ],
  },
  {
    id: "The Call to Holiness",
    heading: "The Call to Holiness",
    reference: "Leviticus 17&ndash;27",
    paragraphs: [
      "The latter half of Leviticus is often called the Holiness Code, and its great refrain echoes again and again: &ldquo;Be holy, for I am holy&rdquo; (e.g. 19:2). Having established how the people may be made clean and how atonement is provided, the book now turns to how a redeemed people are to live. Holiness is not confined to the sanctuary; it is to permeate every corner of Israel&rsquo;s life &mdash; their families, their fields, their courts, their commerce, and their care for the weak.",
      "These chapters address an astonishing range of life. There are laws about the proper handling of blood, about marriage and sexual purity, about honesty in business and justice in the courts. There are commands to leave the gleanings of the harvest for the poor and the sojourner, to pay the laborer his wages promptly, to show kindness to the deaf and the blind, and to honor the aged. Holiness here is profoundly practical and deeply social; it is love of neighbor made concrete.",
      "It is in the very heart of this code that we find the words Jesus would later name as the second great commandment: &ldquo;You shall love your neighbor as yourself: I am the Lord&rdquo; (19:18). Tucked among ceremonial regulations is the ethical summit of the law, the principle that holiness toward God is inseparable from love toward people. To be holy as God is holy is, at its core, to love.",
      "Chapter 23 sets out the appointed feasts &mdash; the Sabbath, Passover, Firstfruits, Weeks, Trumpets, the Day of Atonement, and Booths &mdash; the sacred rhythm by which Israel ordered its year around the acts of God. Chapter 25 establishes the Sabbath year and the Year of Jubilee, when debts were released, slaves were freed, and ancestral land returned to its families, so that no one would be permanently crushed by poverty. The holiness of God reaches even into the economy, restraining greed and proclaiming liberty.",
      "Chapter 26 then lays out the covenant&rsquo;s blessings and curses with sobering clarity. Obedience brings rain, harvest, peace, and the presence of God walking among his people; persistent rebellion brings drought, defeat, and ultimately exile from the land. Yet even the warning of exile ends in mercy: if the people confess their iniquity and humble their hearts, God will remember his covenant and not utterly cast them off. The call to holiness is framed by both warning and grace.",
      "The refrain &ldquo;Be holy, for I am holy&rdquo; is taken up in the New Testament and pressed upon the church: &ldquo;As he who called you is holy, you also be holy in all your conduct&rdquo; (1 Peter 1:15&ndash;16). Believers cannot make themselves holy by ceremony, but in Christ they are declared holy and called to live it out. Leviticus, far from being a dusty rulebook, is a sustained invitation into the life of a people who belong to a holy God &mdash; cleansed by sacrifice, served by a priest, and summoned to reflect his character in the world.",
    ],
  },
];

const videoItems = [
  { videoId: "WmvyrLXoQio", title: "BibleProject - Overview - Leviticus" },
  { videoId: "Am_-Wb2WZ7M", title: "BibleProject - The Day of Atonement - Sacrifice and Atonement" },
  { videoId: "sR8wjuPZdN0", title: "BibleProject - Holiness Word Study" },
  { videoId: "_42Ylfa1jX8", title: "BibleProject - The Sacrifice of Jesus Word Study" },
];

export default function ChristianBookOfLeviticusGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The Book of Leviticus
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            How a holy God dwells among a sinful people &mdash; the system of sacrifice, the Aaronic priesthood, the laws of clean and unclean, the Day of Atonement and the scapegoat, and the great call to holiness that finds its fulfillment in Christ, our perfect sacrifice and high priest.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Leviticus through visual teaching on the offerings, the priesthood, the laws of clean and unclean, the Day of Atonement, and the call to holiness fulfilled in Christ.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Be Holy, for I am Holy</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Leviticus answers the deepest question of the tabernacle &mdash; how can a holy God dwell among a sinful people? Through sacrifice, priesthood, cleansing, and the Day of Atonement, it teaches the costliness of grace and the seriousness of sin, while every shadow points forward to Jesus, the perfect sacrifice and great high priest who cleanses us and calls us to be holy as he is holy.
          </p>
        </div>
      </main>
    </div>
  );
}
