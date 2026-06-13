"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The Weeping Prophet",
  "The Call of Jeremiah",
  "Judgment and Exile",
  "The New Covenant",
  "Hope Beyond Destruction",
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
    id: "The Weeping Prophet",
    heading: "The Weeping Prophet",
    reference: "Jeremiah 1; Lamentations",
    paragraphs: [
      "Jeremiah is remembered through the ages as &ldquo;the weeping prophet,&rdquo; and no title captures him better. For roughly forty years he ministered through the final, agonizing decline of the kingdom of Judah, watching the nation he loved stumble toward catastrophe. His was not a message anyone wished to hear, and the cost of speaking it fell heavily on his own soul. The book that bears his name is soaked through with grief &mdash; the grief of a man who saw clearly what was coming and could not turn it aside.",
      "Called as a young man during the reign of Josiah, Jeremiah carried God&rsquo;s word through the reigns of the last kings of Judah, right up to the destruction of Jerusalem and into the chaos that followed. He lived long enough to witness the very judgment he had spent his life proclaiming. To prophesy the fall of one&rsquo;s own homeland, and then to stand in its ruins, is a burden few have borne. The tears of Jeremiah are not weakness but the mark of a heart that felt the tragedy of sin as God himself feels it.",
      "The book of Lamentations, traditionally attributed to him, gives voice to that sorrow in its most concentrated form &mdash; five poems of anguish over the fallen city, mourning the desolation of Zion. There the prophet who had warned of judgment now sits among the ashes and weeps for what has come to pass. &ldquo;Is it nothing to you, all you who pass by?&rdquo; the city cries (Lam 1:12). Even in this lament, the suffering is not detached observation but personal participation in the people&rsquo;s pain.",
      "Jeremiah&rsquo;s loneliness was profound. He was forbidden by God to marry or to share in the ordinary joys of his community (16:1&ndash;2), a living sign of the desolation about to fall. He was mocked, threatened, beaten, and imprisoned. His own townsmen of Anathoth plotted against his life. Few prophets were so isolated, so consistently rejected by the very people they sought to save. The unpopularity of his message made him an outsider in his own land.",
      "Out of this anguish come the most intensely personal passages in all the prophets &mdash; the so-called &ldquo;confessions&rdquo; of Jeremiah, in which he pours out his complaint to God with startling honesty. He curses the day of his birth (20:14&ndash;18); he accuses God of having deceived him; he confesses that the word of the Lord is like a &ldquo;burning fire shut up in my bones&rdquo; that he cannot hold in, even when speaking it brings only reproach (20:9). Here is a faith that argues, weeps, and yet cannot let go.",
      "What makes Jeremiah so enduringly moving is that his tears were never the last word. Beneath the grief ran a deep and stubborn hope, rooted not in the nation&rsquo;s worthiness but in God&rsquo;s faithfulness. The weeping prophet wept precisely because he loved &mdash; loved his people, loved his God, and longed for the restoration he was given to foresee. His sorrow and his hope are inseparable, and together they make his book one of the most humanly profound in all of Scripture.",
      "In the suffering of Jeremiah, faithful and rejected, grieving over a city that would not listen, many readers across the centuries have seen a foreshadowing of Christ himself &mdash; the Man of Sorrows who also wept over Jerusalem and longed to gather her children as a hen gathers her brood. To follow the weeping prophet is to learn that faithfulness is sometimes measured not by success or popularity, but by the willingness to keep speaking the truth in love, whatever the cost.",
    ],
  },
  {
    id: "The Call of Jeremiah",
    heading: "The Call of Jeremiah",
    reference: "Jeremiah 1",
    paragraphs: [
      "The book opens with one of the most tender and arresting call narratives in all of Scripture. Before Jeremiah had spoken a single word, before he had drawn his first breath, God declared his purpose for him: &ldquo;Before I formed you in the womb I knew you, and before you were born I consecrated you; I appointed you a prophet to the nations&rdquo; (1:5). His vocation was not an afterthought or a career he chose, but a calling woven into his being from the very beginning.",
      "These words have comforted believers ever since, for they reveal a God who knows and consecrates his servants before they exist, whose purposes precede our awareness of them. Jeremiah&rsquo;s identity and mission rested not on his own qualifications but on God&rsquo;s prior choice. The same God who knit him together in the womb had also set him apart for a task that no circumstance could ultimately thwart.",
      "Jeremiah&rsquo;s response, however, was not eager acceptance but trembling objection: &ldquo;Ah, Lord GOD! Behold, I do not know how to speak, for I am only a youth&rdquo; (1:6). Like Moses before him, he felt his inadequacy keenly &mdash; too young, too inexperienced, too unready for so weighty a charge. The greatness of the calling exposed the smallness of the man, and he shrank back from it.",
      "God&rsquo;s answer swept the objection aside, not by flattering Jeremiah but by promising his presence: &ldquo;Do not say, &lsquo;I am only a youth&rsquo;; for to all to whom I send you, you shall go, and whatever I command you, you shall speak. Do not be afraid of them, for I am with you to deliver you&rdquo; (1:7&ndash;8). The sufficiency for the task lay not in the prophet but in the God who sent him. Then the Lord touched his mouth and put his words there, so that Jeremiah would never speak on his own authority but always as the bearer of a message not his own.",
      "Two visions confirmed the call. First Jeremiah saw an almond branch &mdash; in Hebrew a play on words, for the almond is the &ldquo;watcher&rdquo; tree, the first to blossom, and the Lord declared that he was &ldquo;watching&rdquo; over his word to perform it (1:11&ndash;12). God&rsquo;s word would not fail; what he had spoken he would surely bring to pass. The vision was a pledge that the long, discouraging years ahead would not be in vain.",
      "Then he saw a boiling pot, tilting from the north (1:13&ndash;14), a vivid image of the disaster that would pour down upon Judah from the northern peoples &mdash; ultimately Babylon. The two visions together set the shape of Jeremiah&rsquo;s ministry: judgment was coming, real and unavoidable, and yet behind it stood a God watching faithfully over his word. The prophet was being prepared to speak hard truths under the assurance that those truths came from a sovereign and trustworthy Lord.",
      "Finally, God promised to make Jeremiah &ldquo;a fortified city, an iron pillar, and bronze walls, against the whole land&rdquo; (1:18). The opposition would be fierce &mdash; kings, priests, and people would fight against him &mdash; but they would not prevail, for the Lord would be with him to deliver him. Here, at the very threshold of the book, is the pattern of the whole prophetic life: a daunting commission, a frightened servant, and a faithful God whose presence makes the weak strong and the fearful bold.",
    ],
  },
  {
    id: "Judgment and Exile",
    heading: "Judgment and Exile",
    reference: "Jeremiah 7; 19; 27&ndash;28; 38",
    paragraphs: [
      "The great burden of Jeremiah&rsquo;s preaching was the coming judgment on Judah for her covenant unfaithfulness. Again and again the prophet portrays the nation&rsquo;s idolatry as spiritual adultery &mdash; a betrayal of the marriage covenant between the Lord and his people. They had forsaken the &ldquo;fountain of living waters&rdquo; and hewn out for themselves &ldquo;broken cisterns that can hold no water&rdquo; (2:13), abandoning the living God for lifeless idols that could neither help nor save.",
      "One of the most striking moments is the temple sermon of chapter 7. The people of Judah had come to trust in the mere presence of the temple as a guarantee of safety, chanting &ldquo;the temple of the LORD, the temple of the LORD&rdquo; as if the building itself would protect them no matter how they lived. Jeremiah shattered this false security, warning that God would do to the temple what he had done to Shiloh if the people did not amend their ways. Religious ritual without righteousness was worthless &mdash; even an offense &mdash; in the sight of God.",
      "Jeremiah&rsquo;s message was reinforced by a series of symbolic acts, dramatized prophecies meant to make the word visible. He buried a linen belt and let it rot, a picture of a people grown useless through pride (ch. 13). He went down to the potter&rsquo;s house and watched the potter reshape a marred vessel, learning that God was sovereign over the nations as the potter over the clay (ch. 18). He smashed a clay flask before the elders to declare that God would break Judah and Jerusalem beyond mending (ch. 19). Each act pressed the same urgent truth: judgment was near.",
      "These warnings set Jeremiah on a collision course with the religious establishment, above all the false prophets who promised peace where there was no peace. The sharpest clash came with Hananiah (ch. 28), who publicly contradicted Jeremiah, broke the wooden yoke Jeremiah wore as a sign of submission to Babylon, and declared that the exile would soon be over. Jeremiah answered that God would replace the wooden yoke with one of iron, and within the year Hananiah was dead. The contest exposed the deadly difference between comforting lies and the painful truth.",
      "Most controversially, Jeremiah counseled the king and people to submit to Babylon, for Nebuchadnezzar was God&rsquo;s appointed instrument of judgment. To resist was to fight against God himself. In a time of fierce nationalism this counsel sounded like treason, and Jeremiah was branded a traitor and a defeatist. Yet his message was not political surrender but theological clarity: the disaster was God&rsquo;s discipline, and the only path through it was humble acceptance rather than futile rebellion.",
      "For this faithfulness Jeremiah suffered grievously. He was arrested, beaten, and put in the stocks. He was imprisoned in the court of the guard. Most harrowing of all, his enemies lowered him into a muddy cistern and left him to sink and die, until an Ethiopian official, Ebed-melech, pleaded for his life and drew him out with ropes and old rags (ch. 38). The cost of speaking God&rsquo;s word was written into the prophet&rsquo;s own flesh, and he bore it because the truth mattered more than his comfort or his life.",
      "In the end, the judgment Jeremiah had so long foretold came to pass. Jerusalem fell, the temple was burned, and the people were carried away into exile in Babylon. The prophet who had wept over the city now lived to see his words fulfilled in its ashes. Yet even here the book insists that judgment was not God&rsquo;s final word &mdash; the exile was discipline, not abandonment, and beyond the ruins a promise still stood waiting to be fulfilled.",
    ],
  },
  {
    id: "The New Covenant",
    heading: "The New Covenant",
    reference: "Jeremiah 31:31&ndash;34",
    paragraphs: [
      "At the very heart of this book of judgment lies its most luminous promise &mdash; the prophecy of a new covenant. Amid the gloom of exile, God reveals through Jeremiah a hope that reaches far beyond the immediate crisis: &ldquo;Behold, the days are coming, declares the LORD, when I will make a new covenant with the house of Israel and the house of Judah&rdquo; (31:31). This is the high point of the entire book, the moment when the storm clouds part and the gospel itself comes into view.",
      "The old covenant, made at Sinai, had been broken again and again by a people who could not keep it. The law was good, but it stood outside them, written on stone, and they did not have the heart to obey it. The new covenant would be different in kind: &ldquo;I will put my law within them, and I will write it on their hearts. And I will be their God, and they shall be my people&rdquo; (31:33). No longer would God&rsquo;s commands be merely external demands; they would become the inward desire of a transformed heart.",
      "Under this new covenant, the knowledge of God would no longer be the privilege of a few or a matter of secondhand instruction. &ldquo;They shall all know me, from the least of them to the greatest, declares the LORD&rdquo; (31:34). A direct, personal relationship with God would belong to every member of his people, not just to priests and prophets. The intimacy once enjoyed by the few would be poured out upon the many.",
      "At the foundation of it all stands the promise of forgiveness: &ldquo;For I will forgive their iniquity, and I will remember their sin no more&rdquo; (31:34). This is the deepest need of every human heart, and the deepest gift of the covenant. Not merely a fresh set of rules but a real and final dealing with sin &mdash; sin forgiven, sin forgotten, the guilty conscience cleansed. Here the law that condemns gives way to the grace that pardons.",
      "The New Testament sees this prophecy fulfilled in Jesus Christ. At the Last Supper, lifting the cup, he declared, &ldquo;This cup is the new covenant in my blood&rdquo; (Luke 22:20). The forgiveness Jeremiah foretold is secured by the cross; the law written on the heart is the work of the Spirit poured out at Pentecost. What the prophet glimpsed from afar, the gospel announces as accomplished in Christ.",
      "The book of Hebrews quotes this passage of Jeremiah at length (Heb 8:8&ndash;12), making it the great Old Testament charter of the gospel. The writer argues that by speaking of a &ldquo;new&rdquo; covenant, God declared the first one obsolete (Heb 8:13). The whole sacrificial system, the temple, the priesthood &mdash; all pointed forward to the better covenant mediated by Christ, who offered himself once for all. Jeremiah&rsquo;s prophecy thus becomes a bridge from the old covenant to the new.",
      "That this most important prophetic anticipation of the gospel should appear in the book of the weeping prophet is no accident. It was precisely in the darkness of judgment and exile, when every human hope had failed, that God revealed the brightest hope of all. The new covenant promise reminds us that God&rsquo;s grace shines most clearly against the backdrop of human ruin, and that his deepest answer to our sin is not law but love &mdash; a new heart, full forgiveness, and an unbreakable bond with himself.",
    ],
  },
  {
    id: "Hope Beyond Destruction",
    heading: "Hope Beyond Destruction",
    reference: "Jeremiah 29; 32; Lamentations 3",
    paragraphs: [
      "For all its weight of judgment, Jeremiah is finally a book of hope &mdash; hope that reaches beyond destruction to restoration. When the first wave of exiles had been carried to Babylon, Jeremiah sent them a remarkable letter (ch. 29). Instead of urging rebellion or promising a quick return, he told them to settle in: &ldquo;Build houses and live in them; plant gardens and eat their produce&hellip; seek the welfare of the city where I have sent you into exile, and pray to the LORD on its behalf, for in its welfare you will find your welfare&rdquo; (29:5&ndash;7).",
      "This was a stunning word. The exiles were to seek the flourishing of the very city of their captivity, to live faithfully and fruitfully in a foreign land for the long haul. God had not abandoned them; he was at work even in Babylon, and they were to be a people of blessing wherever he had placed them. It is a pattern that has guided God&rsquo;s people in every age of exile and dispersion ever since.",
      "It is in this letter that we find one of the most beloved &mdash; and most misused &mdash; verses in all of Scripture: &ldquo;For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope&rdquo; (29:11). The promise is precious, but its true context is sobering: it was spoken to a people in exile, who had just been told that the exile would last seventy years. The &ldquo;future and a hope&rdquo; lay on the far side of decades of waiting and discipline.",
      "Rightly understood, the verse is more comforting, not less. God&rsquo;s good plans do not promise the absence of hardship but his faithful purpose carried out through it. Even the long years of exile were part of his design for their ultimate good. The hope was real, but it was a hope to be trusted in the dark, held onto through suffering, and vindicated in God&rsquo;s own time rather than ours.",
      "Jeremiah backed up his words of hope with a costly act of faith. While Jerusalem was under siege and about to fall, with the prophet himself imprisoned, God told him to buy a field at Anathoth from his cousin (ch. 32). To purchase land in a country on the brink of conquest was, by every worldly measure, folly. But Jeremiah obeyed, sealing the deed and storing it away, as a tangible sign that &ldquo;houses and fields and vineyards shall again be bought in this land&rdquo; (32:15). The investment was a prophecy in property: God would restore his people to their land.",
      "Perhaps the most enduring expression of this hope comes not from Jeremiah but from Lamentations, in the midst of the deepest grief. Sitting among the ruins of Jerusalem, the mourner suddenly turns from despair to faith: &ldquo;The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness&rdquo; (Lam 3:22&ndash;23). Even amid total ruin, the mercies of God rise fresh with each dawn.",
      "Here is the abiding message of the weeping prophet: that beyond every judgment stands a God whose love does not fail and whose faithfulness is renewed every morning. The destruction was real, the suffering was real, but they were not the end of the story. For those who trust him, God&rsquo;s discipline gives way to restoration, exile gives way to homecoming, and even the darkest night yields at last to the certain mercies of the dawn.",
    ],
  },
];

const videoItems = [
  { videoId: "RSK2cD5ZFLk", title: "BibleProject - Book of Jeremiah Overview" },
  { videoId: "yQqK5W7n4hg", title: "The New Covenant - Jeremiah 31" },
  { videoId: "p4_2bz2WS5E", title: "Jeremiah the Weeping Prophet Explained" },
];

export default function ChristianBookOfJeremiahGuidePage() {
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
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The Book of Jeremiah
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The weeping prophet&rsquo;s witness through the fall of Judah &mdash; the call of Jeremiah, his prophecies of judgment and exile, the suffering of a faithful messenger, the promise of the new covenant, and hope beyond destruction.
          </p>
        </header>

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
              Deepen your study of Jeremiah through visual teaching on the structure of the book, the promise of the new covenant, and the life of the weeping prophet.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>New Every Morning</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Jeremiah teaches us that faithfulness is measured not by popularity but by perseverance, and that beyond every judgment stands a God whose steadfast love never ceases. Even in exile his mercies are new every morning &mdash; and his new covenant, written on the heart and sealed in Christ, is the surest hope beyond every destruction.
          </p>
        </div>
      </main>
    </div>
  );
}
