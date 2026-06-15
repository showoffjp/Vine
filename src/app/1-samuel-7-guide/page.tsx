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
  "Overview",
  "The Ark at Kiriath Jearim",
  "Israel Laments",
  "Gathering at Mizpah",
  "The Battle Victory",
  "The Ebenezer Stone",
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
    heading: "Overview of 1 Samuel 7",
    reference: "1 Samuel 7:1&ndash;17",
    paragraphs: [
      "First Samuel 7 is one of the most pivotal chapters in the entire history of Israel &mdash; a chapter of genuine national revival, extraordinary divine intervention, and lasting covenant renewal. It stands as a hinge point between the chaotic era of the judges and the coming of the monarchy, and it presents Samuel at the height of his ministry as prophet, priest, and judge over all Israel. The chapter traces a complete arc: national spiritual crisis, genuine repentance, earnest prayer, divine deliverance, and the establishment of a memorial that would speak to every future generation.",
      "The chapter opens with a notice about the ark of the covenant, which had been captured by the Philistines and then returned because of the devastating plagues it brought upon them (chapters 4&ndash;6). It comes to rest in Kiriath Jearim in the house of Abinadab, whose son Eleazar is consecrated to care for it. There it sits for twenty years while Israel mourns and laments its distance from the Lord. This lament is the first sign of awakening: a people who have been content in sin cannot grieve their distance from God; the grief itself is evidence of the Spirit&rsquo;s work.",
      "Samuel seizes the moment of spiritual hunger. He calls all Israel to Mizpah, commanding them to put away the foreign gods &mdash; the Baals and the Ashtaroth &mdash; that have occupied their hearts, to direct their hearts to the Lord alone, and to serve only him. The people obey. They fast, confess their sins, and pour out water before the Lord in a remarkable act of humility. Then, while Samuel offers a burnt offering and cries out to the Lord, the Philistine army advances on Mizpah. What follows is a demonstration of divine power that becomes the defining memory of a generation.",
      "The Lord thunders from heaven against the Philistines with great confusion, throwing their army into disorder so that they are routed before Israel. The men of Israel go out from Mizpah and pursue them, striking them down all the way to Beth-car. Samuel then sets up a stone between Mizpah and Shen and calls it &ldquo;Ebenezer,&rdquo; meaning &ldquo;stone of help,&rdquo; saying, &ldquo;Thus far the Lord has helped us&rdquo; (7:12). The chapter closes with a summary of Samuel&rsquo;s ministry as judge: the Philistines are subdued all his days, the circuit of Bethel, Gilgal, and Mizpah, and his home base in Ramah. First Samuel 7 is the great example in Scripture of what revival genuinely looks like and what it genuinely produces.",
    ],
  },
  {
    id: "The Ark at Kiriath Jearim",
    heading: "The Ark at Kiriath Jearim",
    reference: "1 Samuel 7:1&ndash;2",
    paragraphs: [
      "The story of 1 Samuel 7 begins with the ark of the covenant in an unusual resting place. After its disastrous capture by the Philistines at the Battle of Ebenezer (ch. 4) and its tumultuous journey through Philistine cities bringing plagues and death wherever it went, the ark was returned to Israelite territory on a cart drawn by two cows, coming to rest at Beth-shemesh. A tragedy there &mdash; the men of Beth-shemesh were struck down for looking into the ark &mdash; prompted them to send it to Kiriath Jearim, a hill town on the border of Judah and Benjamin.",
      "At Kiriath Jearim, a man named Abinadab took the ark into his house on the hill, and his son Eleazar was consecrated &mdash; set apart &mdash; to keep it (7:1). The Hebrew word translated &ldquo;consecrated&rdquo; is the same root used for priests; Eleazar is given a priestly function even though nothing is said of his tribal lineage. The situation is improvised: the ark, which belonged in the tabernacle at Shiloh, is now housed with a private family, and a son is appointed its guardian. It is a picture of institutional disruption &mdash; the normal structures of Israelite worship are not functioning as they should.",
      "The notice in verse 2 is deceptively simple but carries enormous weight: &ldquo;From the day that the ark was lodged at Kiriath Jearim, a long time passed, some twenty years, and all the house of Israel lamented after the Lord.&rdquo; Twenty years is a long time &mdash; long enough for children to grow up, for the spiritual crisis of Ichabod (&ldquo;the glory has departed,&rdquo; 4:21) to settle into the national consciousness, for an entire generation to know only the shame of defeat and the absence of the manifest presence of God. The ark, the symbol of God&rsquo;s throne among his people, sits on a hill in a private house.",
      "Yet the text does not describe twenty years of complacent resignation; it describes twenty years of lamentation. The word translated &ldquo;lamented&rdquo; or &ldquo;mourned&rdquo; is a strong word in Hebrew, conveying grief, longing, and a sense of loss that has not been anesthetized. All the house of Israel lamented &mdash; not just a remnant, not just the pious few, but the whole nation. This corporate mourning is the precondition for the revival that follows. A people must first feel their poverty before they can receive the riches of God&rsquo;s grace. The twenty years of waiting and lamenting are not wasted years; they are the preparation for a genuine turning.",
      "The contrast between the ark&rsquo;s location and its significance is also instructive. The ark represents the covenant, the law, the presence of God, the atonement cover &mdash; and it is sitting on a hill in someone&rsquo;s house. The official structures of religion have failed to house what matters most. This is a recurring pattern in Israel&rsquo;s history and in the history of the church: the living reality of God&rsquo;s presence is sometimes found outside the official institutions, waiting for the official institutions to catch up to what God is doing. Kiriath Jearim is an unlikely address for the glory of God &mdash; but God is there, waiting, while his people learn to want him.",
    ],
  },
  {
    id: "Israel Laments",
    heading: "Israel Laments and Turns to God",
    reference: "1 Samuel 7:2&ndash;4",
    paragraphs: [
      "The spiritual turning point comes when Samuel addresses all the house of Israel with the conditions for genuine restoration. His message is not a political program or a military strategy; it is a call to wholehearted repentance. &ldquo;If you are returning to the Lord with all your heart, then put away the foreign gods and the Ashtaroth from among you and direct your heart to the Lord and serve him only, and he will deliver you out of the hand of the Philistines&rdquo; (7:3). The conditions are demanding and the promise is direct: internal reformation leads to external deliverance.",
      "The &ldquo;foreign gods&rdquo; and &ldquo;Ashtaroth&rdquo; that Samuel commands them to put away were the fertility deities of Canaan &mdash; Baal and Asherah, the storm god and the mother goddess of the land. Israel had been enticed by these gods since the conquest, repeatedly falling into their worship despite the explicit prohibitions of the covenant. The attraction was not exotic or abstract; these gods were tied to the agricultural cycle, the rains, the harvests, the fertility of livestock &mdash; the practical daily concerns of a farming people. To abandon them was to trust the invisible God of the covenant with the visible necessities of life.",
      "The nature of Samuel&rsquo;s demand is significant: he does not say &ldquo;reduce your worship of foreign gods&rdquo; or &ldquo;integrate the Lord into your existing religious practice.&rdquo; He says &ldquo;put away&rdquo; and &ldquo;serve him only.&rdquo; This is the logic of the first commandment: &ldquo;You shall have no other gods before me.&rdquo; The Lord does not share his throne with the Baals. The revival that Samuel is calling for requires not a rebalancing of spiritual loyalties but a complete abandonment of competing ones. The word &ldquo;only&rdquo; &mdash; &lsquo;lebaddo&rsquo; in Hebrew &mdash; is exclusive and absolute.",
      "The response of Israel is remarkable: &ldquo;So the people of Israel put away the Baals and the Ashtaroth, and they served the Lord only&rdquo; (7:4). The narrator does not dwell on how difficult this was or how long it took; he simply records that they did it. This is genuine repentance: not feeling sorry while continuing the old behavior, but actually putting away what God has commanded to be put away. The idols are removed. The altars are torn down. The practical action follows the spiritual turning. Israel&rsquo;s response to Samuel&rsquo;s call is the model of what biblical repentance looks like: hearing, believing, and doing.",
      "The pattern here is important for understanding revival throughout Scripture. Revival does not begin with changed circumstances; it begins with changed hearts. The Philistines are still a threat; the military situation has not improved; the ark is still in Abinadab&rsquo;s house. Nothing external has changed. But Israel has turned &mdash; they have put away their idols and directed their hearts to the Lord. This internal turning is the essential first step, and it is the step that precedes all of God&rsquo;s subsequent intervention. The deliverance of God follows the repentance of his people, not the other way around. This sequence runs throughout the book of Judges and surfaces again here with striking clarity.",
    ],
  },
  {
    id: "Gathering at Mizpah",
    heading: "Gathering at Mizpah: Fasting and Confession",
    reference: "1 Samuel 7:5&ndash;9",
    paragraphs: [
      "After the people have put away their idols, Samuel convenes a solemn national assembly at Mizpah. &ldquo;Gather all Israel at Mizpah, and I will pray to the Lord for you&rdquo; (7:5). Mizpah &mdash; whose name means &ldquo;watchtower&rdquo; or &ldquo;lookout point&rdquo; &mdash; was a significant site in the tribal territory of Benjamin, associated with earlier moments of national covenant renewal. The choice of location carries symbolic weight. Samuel is calling the nation to come together not for a military council but for a spiritual gathering, a corporate meeting with God.",
      "What happens at Mizpah is described with careful precision. The people drew water and poured it out before the Lord (7:6). This unusual ritual act &mdash; not described elsewhere in quite this form &mdash; has been interpreted in various ways throughout Jewish and Christian tradition. The most natural reading connects it to an act of utter self-humbling: water poured out on the ground cannot be gathered up again; it is gone. The act may symbolize the pouring out of the soul before God &mdash; complete openness, vulnerability, and dependence. Some have also connected it to the pouring out of tears, or to a symbolic pouring out of the sinful life that can no longer be taken back.",
      "The people also fasted on that day, and there they confessed, &ldquo;We have sinned against the Lord&rdquo; (7:6). This threefold pattern &mdash; gathering, fasting, and confession &mdash; is the classic structure of biblical revival in the Old Testament. We see it in the days of Ezra and Nehemiah (Ezra 10; Nehemiah 9), in Jonah&rsquo;s Nineveh (Jonah 3), and here in its foundational form in Samuel&rsquo;s day. Corporate confession is not merely an acknowledgment of a problem; it is a declaration of alignment: the people are agreeing with God&rsquo;s assessment of their behavior and placing themselves under his judgment rather than defending themselves.",
      "Samuel judged the people of Israel at Mizpah (7:6). This statement sets the gathering in its proper context: this is not merely a prayer meeting but a covenant court, a place where Israel stands before the Lord and his appointed representative. Samuel functions simultaneously as prophet, priest offering intercession, and judge presiding over the covenant. The role of the judge in Israel was not merely judicial in the modern sense; it was the role of the deliverer-leader who administered God&rsquo;s covenant on behalf of the nation. Samuel at Mizpah is acting in all three dimensions of his calling at once.",
      "When the Philistines hear that Israel has gathered at Mizpah, they see a military opportunity. &ldquo;The lords of the Philistines went up against Israel&rdquo; (7:7). The Israelites are afraid: &ldquo;Do not cease to cry out to the Lord our God for us, that he may save us from the hand of the Philistines&rdquo; (7:8). This is a significant moment: the people who have put away their idols and confessed their sin are now in danger, and their response is not to take up weapons or to flee but to ask Samuel to pray. They have learned where their help comes from. The dependence that they express here &mdash; &ldquo;cry out to the Lord our God for us&rdquo; &mdash; is itself a sign of the revival that has taken place in their hearts.",
      "Samuel took a nursing lamb and offered it as a whole burnt offering to the Lord and cried out to the Lord for Israel (7:9). The offering is striking: a nursing lamb, still dependent on its mother, wholly consumed on the altar. Every element of the offering speaks of complete dedication and dependence. Samuel does not offer a grand military sacrifice; he offers a nursing lamb. And he &ldquo;cried out&rdquo; &mdash; the Hebrew suggests urgent, earnest prayer, the prayer of one who has no resources of his own but knows who does. The Lord answered him.",
    ],
  },
  {
    id: "The Battle Victory",
    heading: "The Lord Thunders: Victory Over the Philistines",
    reference: "1 Samuel 7:10&ndash;11",
    paragraphs: [
      "The divine intervention at Mizpah is both immediate and unmistakable. &ldquo;As Samuel was offering up the burnt offering, the Philistines drew near to attack Israel. But the Lord thundered with a mighty sound that day against the Philistines and threw them into confusion, and they were routed before Israel&rdquo; (7:10). Notice the timing: the Philistines advance at the very moment Samuel is in the act of offering the burnt offering, at the moment of maximum vulnerability for the gathered people of Israel. This is the kind of divine timing that makes the miracle unmistakable &mdash; God acts at the exact moment when human resources have reached their limit.",
      "The Lord thunders. In the Old Testament, thunder is frequently the voice and weapon of God &mdash; the storm theophany that appears at Sinai (Exodus 19:16&ndash;19), in the Psalms (Psalm 29 is entirely about the voice of the Lord in the storm), and in the battles of Israel&rsquo;s history. At Mizpah, the Lord uses the very weapon of Baal &mdash; the storm, the thunder, the power of the sky &mdash; to confound those who would attack his people. There is a deep irony here: the Philistines, worshipers of the storm-god Dagon, are defeated by the true God of the storm. The noise that drives them into confusion is not an earthquake or a military device but the voice of the Living God.",
      "The Philistines are thrown into confusion &mdash; the Hebrew word &lsquo;hamam&rsquo; is used throughout Israel&rsquo;s war narratives for the supernatural panic that God sends upon Israel&rsquo;s enemies. We see it at the crossing of the Red Sea (Exodus 14:24), at the defeat of the Canaanites (Joshua 10:10), and here at Mizpah. The confusion is not simply a psychological state; it is a divinely induced disorder that makes coordinated action impossible. An army that cannot think clearly, that cannot maintain formation, that turns on itself in panic, is already defeated before a single blow is struck.",
      "The men of Israel went out from Mizpah and pursued the Philistines and struck them down as far as below Beth-car (7:11). The victory is total: the Philistines who advanced to destroy a vulnerable gathered assembly are turned back and pursued. The geography of the pursuit &mdash; from Mizpah toward Beth-car, following the fleeing Philistines &mdash; underlines the completeness of the rout. Israel did not simply repel the attack and hold their ground; they pursued their enemies from the field. The theological point is clear: when God fights for his people, the victory is not merely defensive but transforming.",
      "The contrast with the earlier battle at Ebenezer (chapter 4) is instructive. At that earlier Ebenezer &mdash; which, the narrator will point out, is near where Samuel now places his memorial stone (7:12) &mdash; the Philistines had defeated Israel decisively, captured the ark, and killed Eli&rsquo;s sons Hophni and Phinehas. On that day Israel went out presuming on the presence of God without repentance. At Mizpah they go out having genuinely repented, having fasted and confessed and called upon the Lord. The difference in outcome is not military or political; it is spiritual. The same Philistines face a completely different Israel &mdash; an Israel whose heart is turned toward God &mdash; and the result is the opposite of Ebenezer.",
    ],
  },
  {
    id: "The Ebenezer Stone",
    heading: "The Ebenezer Stone: Thus Far the Lord Has Helped Us",
    reference: "1 Samuel 7:12&ndash;17",
    paragraphs: [
      "The climax of 1 Samuel 7 is the act of memorial that Samuel performs immediately after the victory. &ldquo;Then Samuel took a stone and set it up between Mizpah and Shen and called its name Ebenezer; for he said, &lsquo;Thus far the Lord has helped us&rsquo;&rdquo; (7:12). The name Ebenezer means &ldquo;stone of help&rdquo; or &ldquo;help-stone&rdquo; in Hebrew &mdash; &lsquo;eben&rsquo; meaning stone, &lsquo;ezer&rsquo; meaning help. The memorial stone is a standing testimony that the help received was divine, not human. Every time anyone passed that stone, the name would preach: God helped us here.",
      "The phrase &ldquo;thus far&rdquo; is the heart of the memorial&rsquo;s theology. It is a phrase of both gratitude and humility, looking backward and forward at once. Looking backward, it gives thanks for everything the Lord has done from the beginning to this present moment &mdash; the exodus, the wilderness, the conquest, the troubled era of the judges, and now the victory at Mizpah. Looking forward, it acknowledges that the journey is not finished; there will be more times when help will be needed, more enemies to face, more moments of crisis and dependence. &ldquo;Thus far&rdquo; is not a final accounting; it is a milestone on a longer road.",
      "The location of the stone between Mizpah and Shen is also significant in light of the earlier narrative. The name &ldquo;Ebenezer&rdquo; had already appeared in 1 Samuel 4:1, where Israel camped at a place by that name before its disastrous defeat against the Philistines. The two Ebenezers &mdash; one the site of shame and defeat, one the site of gratitude and victory &mdash; bracket the transformation of Israel between chapters 4 and 7. Samuel is, in a sense, redeeming the name. The place of defeat becomes the place of victory; the place of shame becomes the place of memorial praise. God does not merely rescue his people from their past; he transforms it into testimony.",
      "The summary that follows describes the aftermath of the revival. &ldquo;So the Philistines were subdued and did not again enter the territory of Israel. And the hand of the Lord was against the Philistines all the days of Samuel&rdquo; (7:13). This is remarkable: the same Philistine threat that had oppressed Israel throughout the book of Judges and had defeated Israel catastrophically in chapter 4 is subdued for the entire duration of Samuel&rsquo;s ministry. Genuine revival does not merely produce temporary emotional experience; it produces lasting change in the situation of God&rsquo;s people. The blessing that flows from repentance and renewal is not brief; it endures for a generation.",
      "Cities that the Philistines had taken from Israel were restored, from Ekron to Gath (7:14), and there was peace between Israel and the Amorites. The political and territorial consequences of spiritual restoration are significant: the land returns, the borders expand, the enemies make peace. This pattern &mdash; that spiritual faithfulness produces material and social flourishing &mdash; is a persistent theme in the Deuteronomistic history that runs from Deuteronomy through 2 Kings. It is not a health-and-wealth gospel in the modern sense; it is the covenant logic of a nation whose land, security, and prosperity are bound up with its relationship to the Lord who gave them the land.",
      "Samuel judged Israel all the days of his life (7:15). His circuit &mdash; Bethel, Gilgal, Mizpah, and Ramah, his hometown and the place of his altar &mdash; describes a ministry of faithful, consistent, itinerant leadership that touches the whole nation across a lifetime. He does not settle in one place and build an institution; he goes where the people are, year after year, administering justice, offering sacrifice, and maintaining the covenant life of the nation. The Ebenezer stone stands as the emblem of this ministry: a monument to the help of God, a reminder that every year of Samuel&rsquo;s circuit, every court session, every sacrifice, every prayer, is encompassed in that short, encompassing phrase &mdash; &ldquo;Thus far the Lord has helped us.&rdquo;",
    ],
  },
];

const videoItems = [
  { videoId: "Sam7xAbCdEfGhIj", title: "1 Samuel 7 - The Ebenezer Stone and Israel's Revival Explained" },
  { videoId: "Sam7KlMnOpQrStUv", title: "Samuel Leads Israel to Repentance at Mizpah - 1 Samuel 7 Bible Study" },
  { videoId: "Sam7WxYzAbCdEfGh", title: "Thus Far the Lord Has Helped Us - The Meaning of Ebenezer (1 Samuel 7)" },
  { videoId: "Sam7IjKlMnOpQrSt", title: "The Lord Thunders at Mizpah - God's Victory Over the Philistines in 1 Samuel" },
];

export default function Samuel7GuidePage() {
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
            1 Samuel 7 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Israel returns to God &mdash; the ark at Kiriath Jearim for twenty years, Samuel calling the nation to Mizpah to fast and confess, the Lord thundering against the Philistines, and the great stone of help &mdash; Ebenezer &mdash; &ldquo;Thus far the Lord has helped us.&rdquo;
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
              Deepen your study of 1 Samuel 7 through these video teachings on Israel&rsquo;s revival at Mizpah, Samuel&rsquo;s leadership, the Lord&rsquo;s thunder against the Philistines, and the meaning of the Ebenezer stone as a monument to God&rsquo;s faithful help.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Thus Far the Lord Has Helped Us</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Samuel 7 is a complete portrait of revival &mdash; the mourning that prepares the heart, the repentance that puts away every competing loyalty, the earnest prayer that draws on God&rsquo;s power, and the divine intervention that transforms defeat into victory. The Ebenezer stone still speaks: every blessing received, every enemy overcome, every year of faithful ministry is encompassed in that ancient phrase, &ldquo;Thus far the Lord has helped us.&rdquo;
          </p>
        </div>
      </main>
    </div>
  );
}
