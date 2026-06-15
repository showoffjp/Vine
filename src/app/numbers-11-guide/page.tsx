"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Craving and Complaint",
  "Burden and the Elders",
  "Quail and the Plague",
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
    heading: "Complaint, Burden, and Judgment",
    reference: "Numbers 11:1&ndash;35",
    paragraphs: [
      "Numbers 11 is one of the darkest and most searching chapters of Israel&rsquo;s wilderness journey. The people have only recently set out from Sinai, and almost immediately the mood sours. The chapter opens with a stark summary: &ldquo;And the people complained in the hearing of the Lord about their misfortunes, and when the Lord heard it, his anger was kindled, and the fire of the Lord burned among them and consumed some outlying parts of the camp&rdquo; (v.1). The place is named Taberah, &ldquo;burning,&rdquo; because the fire of the Lord burned among them. From the first verse, the chapter sets grumbling against grace.",
      "The complaint quickly takes a more specific and ungrateful shape. &ldquo;The rabble that was among them had a strong craving&rdquo; (v.4), and their craving spreads through the whole congregation until the people weep for meat and despise the manna God has been faithfully providing. They romanticize their slavery in Egypt, remembering the fish, cucumbers, melons, leeks, onions, and garlic they ate there, and they complain, &ldquo;now our strength is dried up, and there is nothing at all but this manna to look at&rdquo; (v.6). The bread of heaven has become, to them, an object of contempt.",
      "The weight of leading such a people crushes Moses. In verses 10&ndash;15 he pours out a raw and astonishing lament before God, asking why God has laid the burden of all this people upon him, protesting that he cannot carry them alone, and finally pleading, &ldquo;if you will treat me like this, kill me at once&hellip; that I may not see my wretchedness&rdquo; (v.15). It is one of the most honest cries of a servant of God in all of Scripture, the prayer of a leader at the end of his strength.",
      "God responds to Moses with grace rather than rebuke. He commands Moses to gather seventy of the elders of Israel, promising, &ldquo;I will take some of the Spirit that is on you and put it on them, and they shall bear the burden of the people with you, so that you may not bear it yourself alone&rdquo; (v.17). The burden of leadership is real, and God&rsquo;s answer is to share his Spirit and to multiply leaders who can carry it together.",
      "God&rsquo;s second response addresses the craving for meat &mdash; but as judgment. He promises meat not for a day or two but for a whole month, &ldquo;until it comes out at your nostrils and becomes loathsome to you&rdquo; (v.20), because the people have rejected the Lord who is among them and have wept for Egypt. The Spirit falls on the seventy elders and they prophesy; Eldad and Medad prophesy even in the camp, and Moses, far from jealous, wishes that all the Lord&rsquo;s people were prophets and that the Lord would put his Spirit on them all (v.29).",
      "The chapter ends in sober judgment. A wind from the Lord brings quail in overwhelming abundance, and the people gather and gorge themselves. But &ldquo;while the meat was yet between their teeth, before it was consumed, the anger of the Lord was kindled against the people, and the Lord struck down the people with a very great plague&rdquo; (v.33). The place is named Kibroth-hattaavah, &ldquo;the graves of craving,&rdquo; because there they buried the people who had craved. The chapter stands as a lasting warning about the deadly fruit of ingratitude and the danger of demanding what God in his wisdom has withheld.",
    ],
  },
  {
    id: "Craving and Complaint",
    heading: "Craving and Complaint",
    reference: "Numbers 11:1&ndash;9",
    paragraphs: [
      "The chapter opens with a general complaint that has no stated cause beyond the hardships of the journey: &ldquo;the people complained in the hearing of the Lord about their misfortunes&rdquo; (v.1). This is grumbling for its own sake, the discontent of a people who have seen the Red Sea parted and the law given at Sinai yet still murmur at the first taste of difficulty. The Lord hears, and his anger is kindled. Fire breaks out and consumes the outskirts of the camp until Moses prays and the fire dies down. The place is named Taberah, a name that brands the memory of their burning complaint.",
      "From this general grumbling the narrative narrows to a particular source of trouble: &ldquo;the rabble that was among them had a strong craving&rdquo; (v.4). This mixed multitude &mdash; the non-Israelite crowd that had come up out of Egypt with the people &mdash; becomes the seedbed of discontent. Their craving is contagious; it spreads from the fringes into the heart of the congregation until &ldquo;the people of Israel also wept again and said, Oh that we had meat to eat!&rdquo; The lesson is pointed: appetites left unchecked do not stay contained but spread through a whole community.",
      "Their complaint then turns to a romanticized memory of Egypt: &ldquo;We remember the fish we ate in Egypt that cost nothing, the cucumbers, the melons, the leeks, the onions, and the garlic&rdquo; (v.5). The list is vivid and almost mouthwatering &mdash; and entirely deceptive. They remember the variety of food but conveniently forget the whips, the brick quotas, the slaughter of their infants, and the bitter bondage from which God had delivered them. Their nostalgia rewrites history, painting slavery in the warm colours of a lost paradise.",
      "Against this fantasy the text sets the reality of God&rsquo;s daily provision: &ldquo;there is nothing at all but this manna to look at&rdquo; (v.6). What the people despise is in fact a continuing miracle. The chapter pauses to describe the manna in loving detail: &ldquo;Now the manna was like coriander seed, and its appearance like that of bdellium. The people went about and gathered it and ground it in handmills or beat it in mortars and boiled it in pots and made cakes of it. And the taste of it was like the taste of cakes baked with oil&rdquo; (vv.7&ndash;9). Each morning it fell with the dew, fresh and sufficient.",
      "The contrast the narrator draws is devastating. On one side is the bread of heaven, given freely every single morning, sustaining a whole nation in a barren wilderness &mdash; pure grace. On the other side is the craving of a people who look at this miracle and see only monotony, who weep for the seasonings of slavery while spurning the gift of God. The spiritual danger laid bare here is the danger of ingratitude: the heart that grows so accustomed to grace that it despises it, and so hungry for novelty that it longs to go back to the very chains from which it was freed.",
      "There is a deeper warning still in this nostalgia for bondage. To crave Egypt is to despise redemption. The people&rsquo;s tears are not merely about food; they are a quiet rejection of the God who saved them, a preference for the certainties of slavery over the disciplines of freedom. The chapter exposes a perennial temptation of the redeemed: when the journey grows hard, to remember the comforts of the old life and forget its cruelty, and so to grumble against the very deliverance that set them free.",
      "Read in the larger story of Scripture, the contempt for manna becomes all the more striking, for the manna would later be named by Jesus as a sign pointing to himself, the true bread that came down from heaven. To despise the daily provision of God is no small thing; it is to look at grace and call it tiresome. Numbers 11 holds up this craving as a mirror, asking every reader whether they too have grown ungrateful for the steady mercies that fall, fresh and sufficient, with each new morning.",
    ],
  },
  {
    id: "Burden and the Elders",
    heading: "Moses&rsquo; Burden and the Seventy Elders",
    reference: "Numbers 11:10&ndash;30",
    paragraphs: [
      "As the weeping of the people rises throughout the camp, the burden falls hardest on Moses. &ldquo;Moses heard the people weeping throughout their clans, everyone at the door of his tent. And the anger of the Lord blazed hotly, and Moses was displeased&rdquo; (v.10). Caught between a discontented people and an offended God, Moses turns to the Lord in one of the most candid laments recorded of any leader in Scripture. He does not hide his exhaustion or dress up his despair in pious language.",
      "His complaint pours out in a flood of anguished questions: &ldquo;Why have you dealt ill with your servant? And why have I not found favor in your sight, that you lay the burden of all this people on me? Did I conceive all this people? Did I give them birth, that you should say to me, Carry them in your bosom?&rdquo; (vv.11&ndash;12). Moses feels the impossible weight of being asked to nurse a whole nation like a father carrying an infant, and to provide meat for a multitude in a wilderness where there is none.",
      "The lament reaches its lowest point in a plea for death: &ldquo;I am not able to carry all this people alone; the burden is too heavy for me. If you will treat me like this, kill me at once, if I find favor in your sight, that I may not see my wretchedness&rdquo; (vv.14&ndash;15). This is the cry of a servant who has reached the very end of himself. Far from being condemned for it, Moses&rsquo; honesty is received by God, who answers not with anger but with practical, gracious help.",
      "God&rsquo;s response is to distribute the load. &ldquo;Gather for me seventy men of the elders of Israel&hellip; And I will come down and talk with you there. And I will take some of the Spirit that is on you and put it on them, and they shall bear the burden of the people with you, so that you may not bear it yourself alone&rdquo; (vv.16&ndash;17). The same Spirit that equipped Moses is shared with seventy others. Leadership in God&rsquo;s people is not meant to rest on one set of shoulders; it is to be carried together by those whom God anoints.",
      "When the Spirit rests on the seventy elders gathered at the tent, they prophesy &mdash; a visible sign that God has truly equipped them for the burden they are to share (v.25). But two men, Eldad and Medad, had remained in the camp rather than going out to the tent, and the Spirit rested on them there too, so that they prophesied in the midst of the camp (v.26). The Spirit of God is not confined to the appointed place; he blows where he wills, falling even on those who were not at the tent.",
      "A young man runs to report this, and Joshua, zealous for Moses&rsquo; honour, urges, &ldquo;My lord Moses, stop them&rdquo; (v.28). But Moses&rsquo; answer is magnificent in its humility and breadth of vision: &ldquo;Are you jealous for my sake? Would that all the Lord&rsquo;s people were prophets, that the Lord would put his Spirit on them all!&rdquo; (v.29). Far from guarding his position, Moses longs for the day when the Spirit of God would rest not on seventy but on the whole people.",
      "This longing reaches far beyond the wilderness. Moses&rsquo; wish anticipates the promise of Joel that God would one day pour out his Spirit on all flesh, so that sons and daughters would prophesy &mdash; a promise fulfilled at Pentecost when the Spirit fell on the whole gathered church. In a chapter heavy with judgment and craving, this moment shines as a bright foreshadowing: the burden of leadership shared, the Spirit poured out, and a leader who would rather see all God&rsquo;s people filled with the Spirit than cling to his own unique standing.",
    ],
  },
  {
    id: "Quail and the Plague",
    heading: "Quail and the Plague at Kibroth-hattaavah",
    reference: "Numbers 11:31&ndash;35",
    paragraphs: [
      "The chapter moves to its grim climax with the granting of the people&rsquo;s demand. &ldquo;Then a wind from the Lord sprang up, and it brought quail from the sea and let them fall beside the camp, about a day&rsquo;s journey on this side and a day&rsquo;s journey on the other side, around the camp, and about two cubits above the ground&rdquo; (v.31). The sheer scale is overwhelming: quail in such abundance that they lay heaped around the camp as far as a day&rsquo;s march in every direction. The people had wept for meat, and meat came in a flood.",
      "The people fall on the windfall with desperate greed. &ldquo;And the people rose all that day and all night and all the next day, and gathered the quail. Those who gathered least gathered ten homers, and they spread them out for themselves all around the camp&rdquo; (v.32). Ten homers was an enormous quantity &mdash; the harvest of unrestrained appetite. There is no thanksgiving here, no measured gratitude, only a frantic gathering and gorging, as though the people meant to seize and hoard the very thing they had demanded against God&rsquo;s provision.",
      "Then judgment falls in the most terrible way: &ldquo;While the meat was yet between their teeth, before it was consumed, the anger of the Lord was kindled against the people, and the Lord struck down the people with a very great plague&rdquo; (v.33). The timing is deliberate and dreadful. The judgment comes not after the meat is eaten but in the very act of gorging, the food still in their mouths. The thing they craved becomes the occasion of their death.",
      "The place is given a name that fixes the lesson forever: &ldquo;Therefore the name of that place was called Kibroth-hattaavah, because there they buried the people who had the craving&rdquo; (v.34). Kibroth-hattaavah means &ldquo;the graves of craving.&rdquo; The very ground became a memorial to misplaced desire &mdash; a field of graves marking the spot where a people who despised God&rsquo;s gift and demanded their own way were buried in the midst of getting exactly what they asked for.",
      "Here Numbers 11 sets out one of the most sobering truths in all of Scripture: that God may answer a sinful demand by granting it, and that the granting itself can be the judgment. The people did not lack meat; they were buried in it. Their sin was not the desire for food but the rejection of the Lord who was among them, the contempt for his provision, and the insistence on their own craving over his wisdom. To get what we demand against God&rsquo;s will can be a heavier sentence than to be denied it.",
      "The Psalms remember this episode as a permanent warning. Psalm 106 recounts it directly: &ldquo;They soon forgot his works&hellip; But had a wanton craving in the wilderness, and put God to the test in the desert; he gave them what they asked, but sent a wasting disease among them&rdquo; (Psalm 106:13&ndash;15). That last line &mdash; &ldquo;he gave them what they asked, but sent a wasting disease among them&rdquo; &mdash; captures the whole tragedy of Kibroth-hattaavah in a single breath, and stands as a caution to every generation that prays for its own way without regard for the will of God.",
      "The chapter closes quietly: &ldquo;From Kibroth-hattaavah the people journeyed to Hazeroth, and they remained at Hazeroth&rdquo; (v.35). The journey goes on, but a field of graves has been left behind. Numbers 11 leaves the reader with much to ponder &mdash; the danger of ingratitude, the contagion of craving, the heavy burden of leadership graciously shared, and the fearful possibility that the desires we press against God&rsquo;s wisdom may, in mercy or in judgment, be granted. Better the manna received with thanks than the quail seized in rebellion.",
    ],
  },
];

const videoItems = [
  { videoId: "Hn7vQ3kMpL4", title: "BibleProject - Overview of Numbers - Complaint in the Wilderness" },
  { videoId: "Tj5wR9bXc2N", title: "Numbers 11 Explained - Manna, Craving, and Quail" },
  { videoId: "Pm8kL2nVq6D", title: "Moses and the Seventy Elders - The Spirit Shared" },
  { videoId: "Yb4dN7tHs9F", title: "The Graves of Craving - Kibroth-hattaavah and Psalm 106" },
];

export default function Numbers11GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => setLoaded(true), []);
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
            Numbers 11: Craving in the Wilderness
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Fire at Taberah, contempt for the manna, the craving for the food of Egypt, Moses&rsquo; crushing burden and the seventy elders who shared his Spirit, and the quail that became a plague at Kibroth-hattaavah &mdash; a chapter on ingratitude, leadership, and the danger of getting what you demand against the wisdom of God." }} />
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
              Deepen your study of Numbers 11 through visual teaching on the craving for meat, the contempt for the manna, Moses&rsquo; burden and the seventy elders, and the sober judgment at the graves of craving.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Graves of Craving</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Numbers 11 holds up a mirror to the human heart: the danger of despising daily grace, the contagion of craving, and the fearful possibility that God may answer a rebellious demand by granting it. As Psalm 106 remembers, &ldquo;he gave them what they asked, but sent a wasting disease among them.&rdquo; Better the manna received with thanks than the quail seized in rebellion." }} />
        </div>
      </main>
    </div>
  );
}
