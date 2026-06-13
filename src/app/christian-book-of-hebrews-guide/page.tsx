"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Christ Superior to All",
  "The Great High Priest",
  "The New and Better Covenant",
  "The Hall of Faith",
  "Run the Race with Endurance",
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
    id: "Christ Superior to All",
    heading: "Christ Superior to All",
    reference: "Hebrews 1&ndash;4",
    paragraphs: [
      "Hebrews opens not with the usual greeting but with one of the most majestic statements of Christ in the New Testament: &ldquo;Long ago, at many times and in many ways, God spoke to our fathers by the prophets, but in these last days he has spoken to us by his Son&rdquo; (1:1&ndash;2). The argument of the early chapters is announced at once &mdash; God&rsquo;s final and fullest word is not a prophet, a law, or an angel, but the Son himself, the one through whom he created the world and who upholds the universe by the word of his power.",
      "The whole letter unfolds a single, sweeping claim: Christ is superior to everything in the old order. He is the radiance of the glory of God and the exact imprint of his nature, and having made purification for sins, he sat down at the right hand of the Majesty on high. Everything that came before &mdash; angels, Moses, the priesthood, the sacrifices &mdash; was a shadow pointing forward to him. To turn back from the Son to the shadows is to turn from the substance to the silhouette.",
      "First, Christ is superior to the angels (chs. 1&ndash;2). Drawing on a chain of Old Testament quotations, the author shows that the Son is worshiped by angels, addressed as God, and seated on an eternal throne, while the angels are merely &ldquo;ministering spirits sent out to serve.&rdquo; Yet there is a profound humility in the story: for a little while the Son was made &ldquo;lower than the angels,&rdquo; that by the grace of God he might &ldquo;taste death for everyone&rdquo; and so bring many sons to glory. His exaltation runs through his suffering.",
      "Second, Christ is superior to Moses (ch. 3). Moses was the towering figure of the old covenant, the mediator of the law, and he was indeed faithful &mdash; but faithful &ldquo;as a servant in&rdquo; God&rsquo;s house. Christ, by contrast, is faithful &ldquo;as a son over&rdquo; God&rsquo;s house. The servant labors within a house he did not build; the Son presides over it as its rightful heir. As great as Moses was, he was part of the household that pointed beyond itself to the Son.",
      "Woven through these chapters are solemn warning passages, the first of which appears here (chs. 3&ndash;4). Recalling how the wilderness generation hardened their hearts and so failed to enter the promised land, the author pleads: &ldquo;Today, if you hear his voice, do not harden your hearts.&rdquo; The danger is not merely doctrinal error but a slow drift of unbelief that culminates in falling away. The privilege of hearing God&rsquo;s Son carries with it the responsibility to respond in faith.",
      "The promise held out is a greater rest. Joshua led Israel into Canaan, but that earthly rest was only a picture; &ldquo;there remains a Sabbath rest for the people of God&rdquo; (4:9). Christ offers entrance into God&rsquo;s own rest, a rest from striving to earn acceptance, secured by his finished work. The word of God, &ldquo;living and active, sharper than any two-edged sword,&rdquo; lays bare the heart &mdash; and so the chapters close by urging the reader to strive to enter that rest through persevering faith.",
    ],
  },
  {
    id: "The Great High Priest",
    heading: "The Great High Priest",
    reference: "Hebrews 4&ndash;7",
    paragraphs: [
      "The central theme of Hebrews is Christ as high priest. In the old covenant the high priest stood between God and the people, offering sacrifices and entering the Holy Place on their behalf. Hebrews announces that Jesus is the true and final high priest, who has passed not into an earthly sanctuary but through the heavens into the very presence of God. This is the great hinge on which the letter turns: we have a priest who has gone before us into glory.",
      "Unlike the distant and changing Levitical priests, Jesus is a priest who can &ldquo;sympathize with our weaknesses,&rdquo; because he was tempted in every way as we are, yet without sin (4:15). He knows our trials from the inside, having faced them himself. Therefore the invitation follows: let us &ldquo;with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need.&rdquo; The throne of judgment has become, in Christ, a throne of grace.",
      "But a problem arises. How can Jesus be a priest at all when he descended from the tribe of Judah, not Levi? The law restricted the priesthood to Aaron&rsquo;s line. Hebrews answers with the mysterious figure of Melchizedek (ch. 7), the priest-king of Salem who appears suddenly in Genesis 14 to bless Abraham and receive a tithe from him. He is &ldquo;without father or mother or genealogy,&rdquo; with neither recorded beginning nor end &mdash; and so, &ldquo;resembling the Son of God, he continues a priest forever.&rdquo;",
      "The significance is striking. Melchizedek was greater than Abraham, for the lesser is blessed by the greater, and Abraham paid him a tithe. Since Levi was still &ldquo;in the loins of his ancestor&rdquo; Abraham, even the Levitical priesthood implicitly acknowledged Melchizedek&rsquo;s superiority. Long before the law of Moses, Scripture had already pointed to a priesthood greater than Aaron&rsquo;s &mdash; older, higher, and not bound to ancestry.",
      "Psalm 110:4 had declared of the coming Messiah, &ldquo;You are a priest forever, after the order of Melchizedek.&rdquo; Christ fulfills this oracle. His priesthood rests not on physical descent but on &ldquo;the power of an indestructible life&rdquo; (7:16). Where death cut short the work of every Levitical priest, requiring an endless succession, Christ lives forever, and so his priesthood is permanent and unchangeable. He needs no successor, for he never dies.",
      "From this flows a glorious assurance: &ldquo;he is able to save to the uttermost those who draw near to God through him, since he always lives to make intercession for them&rdquo; (7:25). Our salvation does not depend on a fragile chain of mortal priests but on the unending life and ceaseless intercession of the Son. He is the high priest we need &mdash; holy, innocent, unstained, exalted above the heavens &mdash; who offered himself once and now lives forever to keep his people secure.",
    ],
  },
  {
    id: "The New and Better Covenant",
    heading: "The New and Better Covenant",
    reference: "Hebrews 8&ndash;10",
    paragraphs: [
      "Hebrews now develops the great contrast between the old covenant and the new. The old covenant, with its earthly tabernacle, its priests, and its endlessly repeated sacrifices, was never an end in itself. It was a &ldquo;copy and shadow of the heavenly things&rdquo; (8:5) &mdash; a divinely given pattern that pointed beyond itself to a greater reality. The tabernacle was a model of heaven; the sacrifices were rehearsals for the one sacrifice yet to come.",
      "Quoting at length from Jeremiah 31, the author shows that even within the Old Testament God had promised a new covenant, one in which he would write his law on the heart, be their God, and &ldquo;remember their sins no more.&rdquo; The very promise of a new covenant declares the first one to be passing away: &ldquo;In speaking of a new covenant, he makes the first one obsolete. And what is becoming obsolete and growing old is ready to vanish away&rdquo; (8:13).",
      "The heart of the contrast is the matter of access. Under the old covenant, the way into the Most Holy Place was barred; only the high priest entered, once a year, with blood, and never without the awareness that the work was unfinished. The repetition itself testified to its inadequacy &mdash; for if those sacrifices could truly take away sin, would they not have ceased? Instead they served as an annual reminder of sins, a debt that could never be fully paid.",
      "The climax is the once-for-all sacrifice of Christ (chs. 9&ndash;10). He entered the heavenly sanctuary &ldquo;not by means of the blood of goats and calves but by means of his own blood, thus securing an eternal redemption&rdquo; (9:12). Where the old priests stood daily, offering the same sacrifices that can never take away sins, Christ &ldquo;offered for all time a single sacrifice for sins&rdquo; and then &ldquo;sat down at the right hand of God&rdquo; (10:12). The sitting is itself the sermon: the priest sits because the work is finished.",
      "By that single offering &ldquo;he has perfected for all time those who are being sanctified&rdquo; (10:14). The forgiveness Christ secures is complete and final; where there is full forgiveness, there is no longer any offering for sin. The conscience is cleansed, the law is written on the heart, and the believer stands accepted not by repeated ritual but by the finished work of the Son. This is the better covenant, established on better promises and sealed with better blood.",
      "The pastoral conclusion is an invitation and a warning. Since we have a great priest over the house of God, &ldquo;let us draw near with a true heart in full assurance of faith&rdquo; (10:22), holding fast our confession and stirring one another to love and good works. Yet to spurn so great a salvation, trampling underfoot the Son of God, is a fearful thing. The better covenant offers the greatest mercy &mdash; and warns against the gravest neglect.",
    ],
  },
  {
    id: "The Hall of Faith",
    heading: "The Hall of Faith",
    reference: "Hebrews 11",
    paragraphs: [
      "Chapter 11 is one of the most beloved passages in all of Scripture, often called the &ldquo;Hall of Faith.&rdquo; It opens with a working definition: &ldquo;Now faith is the assurance of things hoped for, the conviction of things not seen&rdquo; (11:1). Faith reaches beyond the visible to lay hold of God&rsquo;s promises; it lives now in the certainty of what God has pledged for the future. By such faith the people of old &ldquo;received their commendation.&rdquo;",
      "What follows is a magnificent roll call of Old Testament saints who lived by faith. By faith Abel offered a more acceptable sacrifice; by faith Enoch was taken up; by faith Noah built an ark for the saving of his household. By faith Abraham &ldquo;went out, not knowing where he was going,&rdquo; and dwelt as a stranger in the land of promise, looking forward to &ldquo;the city that has foundations, whose designer and builder is God.&rdquo; Sarah received power to conceive; Isaac, Jacob, and Joseph each blessed the future they could not see.",
      "The chapter sweeps on through Moses, who &ldquo;chose rather to be mistreated with the people of God than to enjoy the fleeting pleasures of sin,&rdquo; and through the crossing of the Red Sea, the fall of Jericho, and the faith of Rahab. Then the pace quickens into a torrent: by faith they &ldquo;conquered kingdoms, enforced justice, obtained promises, stopped the mouths of lions, quenched the power of fire, escaped the edge of the sword, were made strong out of weakness.&rdquo;",
      "But faith is not always crowned with earthly triumph. The same chapter records that &ldquo;others were tortured, refusing to accept release, so that they might rise again to a better life.&rdquo; Some endured mocking and flogging, chains and imprisonment; some were stoned, sawn in two, killed with the sword; they wandered in deserts and caves, &ldquo;of whom the world was not worthy.&rdquo; Faith may lead to deliverance or to martyrdom; in both, it clings to God and his unseen reward.",
      "A striking refrain runs through the chapter: &ldquo;These all died in faith, not having received the things promised, but having seen them and greeted them from afar&rdquo; (11:13). They confessed themselves strangers and exiles on the earth, &ldquo;seeking a homeland,&rdquo; desiring &ldquo;a better country, that is, a heavenly one&rdquo; (11:16). Therefore God is not ashamed to be called their God, for he has prepared for them a city. Their faith looked past every earthly Canaan to the city of God.",
      "The chapter ends with a surprising and unifying claim: though all these were commended through their faith, &ldquo;they did not receive what was promised, since God had provided something better for us, that apart from us they should not be made perfect&rdquo; (11:40). The saints of the old covenant and the saints of the new are not made complete separately but together, in Christ. The long story of faith reaches its fulfillment only when all the people of God, across every age, are perfected in the one Savior they were all looking toward.",
    ],
  },
  {
    id: "Run the Race with Endurance",
    heading: "Run the Race with Endurance",
    reference: "Hebrews 12&ndash;13",
    paragraphs: [
      "The closing chapters bring the whole letter to its pastoral climax. Surrounded by &ldquo;so great a cloud of witnesses&rdquo; &mdash; the saints of chapter 11 whose lives testify that faith endures &mdash; the readers are urged to &ldquo;lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us, looking to Jesus, the founder and perfecter of our faith&rdquo; (12:1&ndash;2). The Christian life is a long-distance race, and the eyes of the runner must be fixed on Christ, who &ldquo;for the joy that was set before him endured the cross.&rdquo;",
      "The author then reframes the hardships of the Christian life as the loving discipline of a Father (12:5&ndash;11). &ldquo;The Lord disciplines the one he loves,&rdquo; and to be without discipline would be to be no true child at all. Discipline is painful for the moment, &ldquo;but later it yields the peaceful fruit of righteousness to those who have been trained by it.&rdquo; Suffering, then, is not a sign of God&rsquo;s abandonment but of his fatherly care, training his children toward holiness and life.",
      "Hebrews contrasts two mountains to capture the privilege of the new covenant (12:18&ndash;24). The readers have not come to Mount Sinai, with its blazing fire, darkness, tempest, and terrifying voice that made even Moses tremble. Rather, they have come to Mount Zion, &ldquo;the city of the living God, the heavenly Jerusalem,&rdquo; to innumerable angels in festal gathering, to the assembly of the firstborn, to God the judge of all, and to &ldquo;Jesus, the mediator of a new covenant,&rdquo; whose blood speaks a better word than the blood of Abel.",
      "Yet the privilege carries a final, urgent warning: &ldquo;See that you do not refuse him who is speaking&rdquo; (12:25). If those who refused the warning on earth did not escape, much less will those who turn away from the One who warns from heaven. Our God is &ldquo;a consuming fire,&rdquo; and the kingdom we receive is unshakable; therefore let us be grateful and offer to God acceptable worship, with reverence and awe. The grandeur of grace heightens the seriousness of neglect.",
      "The final chapter (13) turns to down-to-earth exhortations that flesh out a life of faith. &ldquo;Let brotherly love continue.&rdquo; Show hospitality to strangers, &ldquo;for thereby some have entertained angels unawares.&rdquo; Remember those in prison and those who are mistreated. Let marriage be held in honor and the heart be kept free from the love of money, content with what God provides, for he has said, &ldquo;I will never leave you nor forsake you.&rdquo; Remember your leaders and imitate their faith.",
      "At the center of these closing words stands a great anchor for the soul: &ldquo;Jesus Christ is the same yesterday and today and forever&rdquo; (13:8). Because he never changes, the readers can hold fast through every shifting circumstance. And so the letter calls them to go to him &ldquo;outside the camp, bearing the reproach he endured,&rdquo; and &ldquo;through him then let us continually offer up a sacrifice of praise to God.&rdquo; The book that began with God speaking by his Son ends with the people of God responding in worship, endurance, and praise.",
    ],
  },
];

const videoItems = [
  { videoId: "1fNWTZZwgbs", title: "BibleProject — Book of Hebrews Overview" },
  { videoId: "rnQGE9Sb4UI", title: "Christ Our Great High Priest — Hebrews Explained" },
  { videoId: "Tmkc9Sr0Sw0", title: "The Hall of Faith — Hebrews 11" },
];

export default function ChristianBookOfHebrewsGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The Book of Hebrews
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The supremacy of Christ &mdash; God&rsquo;s final word in his Son, the great high priest after the order of Melchizedek, the new and better covenant, the once-for-all sacrifice, the hall of faith, and the call to run with endurance.
          </p>
        </header>

        <div style={{ background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.5rem 1.75rem", marginBottom: "2.5rem" }}>
          <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.8, margin: 0, fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;Long ago, at many times and in many ways, God spoke to our fathers by the prophets, but in these last days he has spoken to us by his Son.&rdquo;" }} />
          <p style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", margin: "0.75rem 0 0" }}>Hebrews 1:1&ndash;2</p>
        </div>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                background: tab === t ? ACCENT : CARD,
                color: tab === t ? "#fff" : MUTED,
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

        {tab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Hebrews through visual teaching on the structure of the letter, the high priestly work of Christ, and the great hall of faith in chapter 11.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Looking to Jesus</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Hebrews calls the weary believer to lift their eyes from every fading shadow to the substance who casts it &mdash; Christ, the radiance of God&rsquo;s glory, the great high priest, the mediator of a better covenant, the same yesterday and today and forever. Surrounded by so great a cloud of witnesses, let us lay aside every weight and run with endurance, looking to Jesus, the founder and perfecter of our faith.
          </p>
        </div>
      </main>
    </div>
  );
}
