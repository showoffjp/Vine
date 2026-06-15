"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Earth's Corruption",
  "God's Grief",
  "Noah Finds Favor",
  "The Ark's Design",
  "God's Covenant with Noah",
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
    id: "Overview",
    heading: "Overview of Genesis 6",
    reference: "Genesis 6:1&ndash;22",
    paragraphs: [
      "Genesis 6 stands at one of the most dramatic turning points in all of Scripture. The world that God declared &ldquo;very good&rdquo; at creation has become so thoroughly corrupted that the Creator is grieved to the heart over making it. This chapter sets the stage for the great flood &mdash; not merely as a disaster story, but as a revelation of God&rsquo;s holy revulsion at sin, his sovereign judgment, and his extraordinary grace toward one man who walked with him when no one else did.",
      "The chapter opens with a mysterious passage about the sons of God and the daughters of men, whose union produces the Nephilim, mighty men of renown. Whatever the precise identity of these figures, the effect is clear: the earth is filling with violence and every imagination of the human heart is only evil continually. The brief narrative of human expansion in the early chapters of Genesis has given way to a world saturated with wickedness.",
      "Against this dark backdrop, two things shine with remarkable clarity. First, God&rsquo;s moral seriousness &mdash; he will not permit evil to go unchecked forever, and the coming flood is his righteous response to a world that has rejected his design. Second, his grace &mdash; in the midst of a corrupt generation, &ldquo;Noah found grace in the eyes of the Lord&rdquo; (6:8). This single verse is one of the first explicit uses of the Hebrew word for grace in the entire Bible, and it introduces a pattern that will run through all of Scripture: God&rsquo;s judgment does not preclude his mercy, and even in catastrophe he preserves a remnant.",
      "The second half of the chapter shifts from diagnosis to remedy. God speaks to Noah, revealing the coming flood and commissioning him to build an ark of remarkable specifications. He announces a covenant with Noah and his family, commanding him to bring animals aboard two by two. Noah&rsquo;s response is the model of obedient faith: &ldquo;Noah did all that God commanded him&rdquo; (6:22). In this, Genesis 6 is not merely ancient history but a timeless portrait of the God who judges sin and saves those who walk with him.",
    ],
  },
  {
    id: "Earth's Corruption",
    heading: "The Corruption of the Earth",
    reference: "Genesis 6:1&ndash;7",
    paragraphs: [
      "The chapter opens with one of the most debated passages in the Old Testament: &ldquo;the sons of God saw that the daughters of man were attractive. And they took as their wives any they chose&rdquo; (6:2). The identity of &ldquo;the sons of God&rdquo; has been interpreted in three main ways: as fallen angels who crossed the boundary between the spiritual and human realms, as the godly line of Seth intermarrying with the ungodly line of Cain, or as ancient rulers and aristocrats abusing their power to seize women for themselves. The ancient Jewish and early Christian readings generally favored the angelic interpretation, supported by the parallel language in Job 1&ndash;2 and the allusion in Jude 6&ndash;7. Whatever the precise identification, the point of the text is that a grievous boundary has been violated.",
      "From this transgression come the Nephilim &mdash; a word sometimes translated &ldquo;giants&rdquo; and sometimes left untranslated. They are described as &ldquo;the mighty men who were of old, the men of renown&rdquo; (6:4). The text is more interested in their cultural and spiritual effect than in providing a biology lesson: they represent the flowering of human pride and power uncoupled from God. The world that should have been filled with image-bearers reflecting the glory of their Maker is instead filled with men of violence making names for themselves.",
      "The theological heart of the passage comes in verse 5: &ldquo;The Lord saw that the wickedness of man was great in the earth, and that every intention of the thoughts of his heart was only evil continually.&rdquo; This is the most thorough indictment of human nature in the early chapters of Genesis. Notice the accumulating weight of the words: &ldquo;every intention,&rdquo; &ldquo;only evil,&rdquo; &ldquo;continually.&rdquo; This is not a description of people who do bad things occasionally; it is a picture of a moral condition in which the default orientation of the human will has become systematically evil. The fall has worked its full ruin.",
      "God&rsquo;s response is also striking: he limits human lifespan to one hundred and twenty years (6:3). Whether this refers to the remaining time before the flood or to a new limit on individual human longevity, it signals that God will not allow the current trajectory to continue indefinitely. He is not passive before human rebellion. The same God who breathed life into Adam now sets a boundary on the corruption his creatures have chosen &mdash; a mercy in its own way, since unchecked wickedness would only compound its own misery.",
      "The moral condition of the earth in Genesis 6 is not presented as the peculiarity of one culture or one era. It is presented as the condition of humanity apart from God &mdash; and the New Testament picks up the same language when Paul describes the universal condition of sin in Romans 1&ndash;3 and when Jesus warns that the days before his return will be &ldquo;as the days of Noah&rdquo; (Matthew 24:37). Genesis 6 is thus not merely a record of the past; it is a diagnosis of the human condition apart from grace.",
    ],
  },
  {
    id: "God's Grief",
    heading: "God Grieves Over Human Wickedness",
    reference: "Genesis 6:5&ndash;7",
    paragraphs: [
      "Few passages in Scripture are as theologically startling as verses 6&ndash;7: &ldquo;And the Lord regretted that he had made man on the earth, and it grieved him to his heart. So the Lord said, &lsquo;I will blot out man whom I have created from the face of the land, man and animals and creeping things and birds of the heavens, for I am sorry that I have made them.&rsquo;&rdquo; The language is extraordinarily anthropomorphic &mdash; God regrets, God grieves, God is sorry. How should we understand this?",
      "Christian theology has long recognized that when the Bible speaks of God&rsquo;s emotions, it is accommodating infinite divine reality to finite human language. God does not &ldquo;regret&rdquo; in the sense that he made a mistake or failed to foresee what would happen &mdash; the God who knows the end from the beginning cannot be surprised. Rather, the text is describing the genuine moral and relational response of a holy God to a creation that has turned against him. The grief is real; it is the grief of a parent watching a child destroy themselves, of a creator watching his work be defaced.",
      "The word translated &ldquo;grieved him to his heart&rdquo; is the same root used to describe the pain with which the woman will bear children (3:16) and the pain with which the man will work the ground (3:17). God himself is experiencing in his own being the anguish that sin has unleashed upon the world he made with such care. This is not cold divine disapproval but deep personal anguish &mdash; a window into the passionate holiness of the God of the Bible, who is not indifferent to what happens in his creation.",
      "The decision to send the flood arises from this grief. It is not the petulant rage of an offended deity but the solemn judgment of a righteous Creator who has seen human violence reach the point where it threatens to undo the very fabric of creation. God made the world ordered and good; the violence and corruption filling the earth is a reversal of creation itself, a return toward the chaos from which God brought forth life. The flood, in this reading, is not arbitrary destruction but the withdrawal of the sustaining order that God&rsquo;s presence and blessing had maintained.",
      "Yet the grief of God in Genesis 6 also anticipates something greater. If God grieves over human wickedness here, how much more does the passion of the incarnate Son &mdash; who wept over Jerusalem and was crucified for the sins of the world &mdash; reveal the depth of that divine grief and its ultimate resolution? The God who was &ldquo;grieved to his heart&rdquo; over human sin in Genesis 6 would one day take that grief into himself on the cross, bearing in his own body the judgment that sin deserves, so that through his suffering a new creation might emerge.",
    ],
  },
  {
    id: "Noah Finds Favor",
    heading: "Noah Finds Favor in the Eyes of the Lord",
    reference: "Genesis 6:8&ndash;10",
    paragraphs: [
      "&ldquo;But Noah found grace in the eyes of the Lord&rdquo; (6:8). This brief sentence is one of the pivotal moments of biblical theology. Set against the backdrop of universal corruption and divine judgment, it introduces a theme that will run through every subsequent page of Scripture: God chooses, in the midst of judgment, to show undeserved favor to a person who then becomes the vehicle of his redemptive purposes. The Hebrew word here, chen, is the foundational Old Testament word for grace &mdash; unmerited favor, a disposition of kindness not earned by the recipient.",
      "The text is careful about what it says and what it does not say. It does not say Noah was sinless or that he earned God&rsquo;s favor through superior moral performance. The very next verse begins: &ldquo;These are the generations of Noah. Noah was a righteous man, blameless in his generation. Noah walked with God&rdquo; (6:9). But this description follows the statement about grace, not precedes it. Noah&rsquo;s righteousness and his walk with God are the fruit of the grace he had found, not the cause of it. He walked with God because God had inclined his heart; he was righteous because God was working in him.",
      "The phrase &ldquo;walked with God&rdquo; is one of the highest compliments the Old Testament knows. It was previously said of Enoch, who &ldquo;walked with God, and he was not, for God took him&rdquo; (5:24). To walk with God means to live in intimate, sustained communion with the Divine &mdash; a life oriented toward God in all its rhythms, attentive to his presence, responsive to his word, shaped by his character. In a generation where every imagination was evil continually, Noah maintained this walk. That was itself a miracle of grace.",
      "The three sons of Noah &mdash; Shem, Ham, and Japheth &mdash; are named at verse 10, establishing that the salvation God is planning will not be for Noah alone but for his entire household. Grace does not save in isolation; it creates communities, families, a people. The same pattern will recur throughout the biblical story: God calls Abraham and promises blessing to all his offspring; God saves Israel from Egypt as a people; God constitutes the church as a body. Noah is saved not as a solitary hero but as the head of a family, and through that family the human race will begin again.",
      "The character of Noah as a man who &ldquo;walked with God&rdquo; provides the model of what it means to live faithfully before God in a corrupt culture. He did not withdraw from the world, but he did not conform to it either. He stood apart not through arrogant separation but through the quiet, daily discipline of keeping company with God when the world around him had abandoned that walk entirely. His faith was not dramatic &mdash; at least not yet &mdash; but it was real, sustained, and visible in how he lived.",
    ],
  },
  {
    id: "The Ark's Design",
    heading: "God Commands the Building of the Ark",
    reference: "Genesis 6:14&ndash;16",
    paragraphs: [
      "God speaks to Noah with remarkable specificity: &ldquo;Make yourself an ark of gopher wood. Make rooms in the ark, and cover it inside and out with pitch&rdquo; (6:14). The instruction begins with materials: gopher wood, a term whose exact species is now unknown but clearly denotes a dense, durable timber appropriate for a massive sea-going vessel. The ark is to be waterproofed inside and out with pitch &mdash; the same word used later for the basket in which the infant Moses will be placed in the Nile (Exodus 2:3), linking these two great acts of divine preservation.",
      "The dimensions God gives are staggering for the ancient world. The ark is to be three hundred cubits long, fifty cubits wide, and thirty cubits high. Using a standard cubit of approximately eighteen inches, this yields a vessel roughly four hundred and fifty feet long, seventy-five feet wide, and forty-five feet high &mdash; a craft with the approximate capacity of 522 standard railroad stock cars. These are not mythological proportions; they are the dimensions of a genuinely functional vessel, and modern naval architects have confirmed that the ratio of length to width to height given in Genesis is close to optimal for a vessel designed to ride out storms rather than to sail.",
      "The ark is to have a roof with an opening of a cubit at the top &mdash; presumably a ventilation gap running around the perimeter just below the roofline to allow air circulation for the many creatures aboard. It is to have a door in its side, and it is to be built in three decks or stories. The internal compartmentalization suggested by &ldquo;rooms&rdquo; or &ldquo;nests&rdquo; (the Hebrew qinnim can mean either) would provide structural integrity and allow for the separation of different animals and supplies across the vessel.",
      "Early Christian interpreters consistently read the ark as a type of Christ and his church. As the ark was the only place of safety in a world under judgment, so Christ is the only place of safety for sinners under the righteous judgment of God. As all who entered the ark were saved from the flood, so all who are &ldquo;in Christ&rdquo; are saved from the wrath to come. The detailed specifications &mdash; one door in the ark&rsquo;s side, three levels, a window above &mdash; invited allegorical elaboration in the patristic tradition, and while modern interpreters rightly distinguish between allegory and typology, the basic correspondence between the ark and Christ as the means of rescue from judgment is deeply embedded in the New Testament itself (1 Peter 3:20&ndash;21).",
      "The immensity of the construction task is itself part of the text&rsquo;s message. Building the ark was an act of faith that consumed years of Noah&rsquo;s life and was visible to his contemporaries, who clearly did not share his conviction that a world-ending flood was coming. The writer of Hebrews captures this: &ldquo;By faith Noah, being warned by God concerning events as yet unseen, in reverent fear constructed an ark for the saving of his household. By this he condemned the world and became an heir of the righteousness that comes by faith&rdquo; (Hebrews 11:7). The ark stands as a monument not just to ancient engineering but to the obedience of faith.",
    ],
  },
  {
    id: "God's Covenant with Noah",
    heading: "God Establishes His Covenant with Noah",
    reference: "Genesis 6:17&ndash;22",
    paragraphs: [
      "God now declares to Noah the full scope of what is coming: &ldquo;For behold, I will bring a flood of waters upon the earth to destroy all flesh in which is the breath of life under heaven. Everything that is on the earth shall die&rdquo; (6:17). The universal scope of the judgment is unambiguous &mdash; this is not a local flood but a global catastrophe that will end all human and animal life outside the ark. The same God who breathed life into Adam now announces the withdrawal of that life from a creation that has used its breath to fill the earth with violence.",
      "But immediately the announcement of judgment is paired with the announcement of covenant: &ldquo;But I will establish my covenant with you, and you shall come into the ark, you, your sons, your wife, and your sons&rsquo; wives with you&rdquo; (6:18). This is the first use of the word &ldquo;covenant&rdquo; (berith) in the Bible. Its appearance here, in the context of universal judgment, establishes the pattern that will mark every subsequent covenant in Scripture: God&rsquo;s covenants are acts of grace given against a backdrop of deserved judgment, creating relationship where relationship had been forfeited by sin.",
      "The covenant with Noah is initially announced here and will be formally ratified in Genesis 9 after the flood, when God sets his rainbow in the clouds as the sign of his promise never again to destroy all life by flood. But the commitment is already given in chapter 6: before Noah has lifted a hammer or cut a plank, God has promised that Noah and his family will be saved. The ark must be built &mdash; faith requires obedience &mdash; but the salvation is secure in God&rsquo;s covenantal word before the work begins.",
      "God then expands the scope of the rescue to include the animals: &ldquo;And of every living thing of all flesh, you shall bring two of every sort into the ark to keep them alive with you. They shall be male and female. Of the birds according to their kinds, and of the animals according to their kinds, of every creeping thing of the ground according to its kind, two of every sort shall come in to you to keep them alive&rdquo; (6:19&ndash;20). God&rsquo;s concern extends beyond humanity to the whole of his creation. The creatures who share the breath of life with humans are not expendable; they too will be preserved through the crisis.",
      "The chapter closes with one of the most important sentences in Noah&rsquo;s story: &ldquo;Noah did this; he did all that God commanded him&rdquo; (6:22). In its simplicity and completeness, this statement captures the essence of covenant faithfulness. God has spoken; Noah has obeyed. There is no recorded hesitation, no negotiation, no request for further evidence or confirmation. The man who &ldquo;walked with God&rdquo; trusted God&rsquo;s word enough to act on it in the face of circumstances that made it seem absurd. This complete, unqualified obedience is the hallmark of genuine faith &mdash; and it is the reason that Noah, along with his household, survived when the world perished.",
    ],
  },
];

const videoItems = [
  { videoId: "GQI72THyO5I", title: "Genesis 6 - The Flood and Noah's Ark Explained" },
  { videoId: "K7SjExCGJMk", title: "The Nephilim and Sons of God in Genesis 6" },
  { videoId: "PLrT8hQvW4I", title: "Why God Sent the Flood - Noah's Story in Context" },
  { videoId: "Rn9fZkHbCQs", title: "Noah Found Grace - Covenant and Salvation in Genesis 6" },
];

export default function Genesis6GuidePage() {
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
            Genesis 6 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The corruption of the earth, the grief of God, and the grace shown to Noah &mdash; Genesis 6 reveals a world saturated with evil, a Creator grieved to his heart, and one man who found favor in the eyes of the Lord and was called to build the ark that would preserve life through the coming flood.
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

        {currentSection && activeTab !== "Videos" && (
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
              Deepen your study of Genesis 6 through these video teachings on the sons of God and daughters of men, the Nephilim, Noah&rsquo;s righteousness, the coming flood, and God&rsquo;s covenant of preservation.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Noah Did All That God Commanded</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Genesis 6 confronts us with the seriousness of sin, the grief of a holy God, and the extraordinary grace extended to one man who walked with God when no one else did. The ark Noah built was more than a boat &mdash; it was a monument of faith, a visible sermon preached to a corrupt generation, and a type of the greater salvation God would accomplish through his Son. As in Noah&rsquo;s day, the call remains: walk with God, trust his word, and do all that he commands.
          </p>
        </div>
      </main>
    </div>
  );
}
