"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "He Who Dwells in the Shelter",
  "My Refuge and Fortress",
  "No Evil Shall Befall You",
  "The Angels Charge",
  "Because He Holds Fast to Me",
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
    id: "He Who Dwells in the Shelter",
    heading: "He Who Dwells in the Shelter",
    reference: "Psalm 91:1&ndash;2",
    paragraphs: [
      "Few passages in all of Scripture have brought as much comfort to frightened and suffering people as Psalm 91. It opens not with a command but with a quiet, sweeping assurance: &ldquo;He who dwells in the shelter of the Most High will abide in the shadow of the Almighty&rdquo; (91:1). The whole psalm hangs on this first verse. Before a single danger is named, before a single promise of rescue is given, the psalmist establishes the one essential thing &mdash; the place of safety is found in a Person, in nearness to God himself.",
      "The language is deliberately intimate. To &ldquo;dwell in the shelter&rdquo; is not to make an occasional visit in a moment of panic; it is to take up permanent residence in the presence of God. The Hebrew word translated &ldquo;shelter&rdquo; carries the sense of a secret place, a hidden covering &mdash; the inner chamber where one is concealed from harm. To live there is to make God&rsquo;s presence one&rsquo;s home, one&rsquo;s settled address, the place from which one never moves.",
      "Notice the great names of God stacked up in these two verses. He is &ldquo;the Most High&rdquo; (Elyon), the God who is sovereign over all, exalted above every power that could threaten us. He is &ldquo;the Almighty&rdquo; (Shaddai), the God of overwhelming strength and provision. He is &ldquo;the Lord&rdquo; (Yahweh), the covenant God who has bound himself to his people by name. And he is &ldquo;my God&rdquo; &mdash; the One in whom the believer personally trusts. The titles move from the cosmic to the intimate, from the throne of heaven to the trust of a single human heart.",
      "&ldquo;I will say to the Lord, &lsquo;My refuge and my fortress, my God, in whom I trust&rsquo;&rdquo; (91:2). Here the psalm turns from description to confession. It is not enough to know that God is a shelter in the abstract; faith reaches out and lays hold of him, claiming him as &ldquo;my refuge.&rdquo; The whole psalm, in a sense, is an invitation to make that same confession &mdash; to move from knowing about God&rsquo;s protection to actually trusting in it, dwelling in it, resting in it.",
      "There is an order here that is easy to miss. The promises of protection that fill the rest of the psalm are made to the one who already dwells in the shelter of the Most High. Safety is not a magic charm that can be claimed apart from a living relationship with God; it flows from abiding in him. The one who has made the Lord his refuge in the days of peace is the one who finds him a fortress in the days of trouble. Trust comes first, and the shelter follows.",
      "For the believer this verse points beyond itself. Jesus would later say, &ldquo;Abide in me, and I in you&rdquo; (John 15:4), and would invite the weary to come to him for rest (Matt. 11:28). The secret place of the Most High is, in the fullest sense, found in Christ, in whom &ldquo;your life is hidden with God&rdquo; (Col. 3:3). To dwell in the shelter is to abide in the Son, secure not because life is free of danger but because we are hidden in the One who holds all things in his hand.",
    ],
  },
  {
    id: "My Refuge and Fortress",
    heading: "My Refuge and Fortress",
    reference: "Psalm 91:3&ndash;6",
    paragraphs: [
      "Having named God as refuge and fortress, the psalm now begins to spell out what that refuge means in the face of real and named dangers. &ldquo;For he will deliver you from the snare of the fowler and from the deadly pestilence&rdquo; (91:3). The fowler is the trapper who hides a net to catch birds unawares &mdash; an image of the hidden plots and unseen traps that threaten an unsuspecting life. The deadly pestilence is plague and disease, the silent killer that no human strength can fight off. God promises deliverance from both the schemes of men and the sicknesses of the world.",
      "Then comes one of the tenderest images in all of Scripture: &ldquo;He will cover you with his pinions, and under his wings you will find refuge&rdquo; (91:4). The picture is of a mother bird sheltering her young beneath her outstretched wings &mdash; the same image Jesus used when he longed to gather Jerusalem &ldquo;as a hen gathers her brood under her wings&rdquo; (Matt. 23:37). The Almighty, sovereign over all the earth, stoops down with the tenderness of a parent to cover and warm and protect the small and the helpless.",
      "In the same breath the psalm shifts the metaphor from softness to strength: &ldquo;his faithfulness is a shield and buckler&rdquo; (91:4). The God who covers us with the gentleness of wings also surrounds us with the hard armor of his faithfulness. A shield guards the front; a buckler guards on every side. And the armor is not our own courage or merit but God&rsquo;s steadfast reliability &mdash; his proven faithfulness to keep his covenant promises is the very thing that stands between us and harm.",
      "From this place of shelter the psalm makes a remarkable promise about fear itself: &ldquo;You will not fear the terror of the night, nor the arrow that flies by day, nor the pestilence that stalks in darkness, nor the destruction that wastes at noonday&rdquo; (91:5&ndash;6). The dangers are deliberately comprehensive &mdash; night and day, seen and unseen, the sudden arrow that comes by surprise and the slow wasting plague that creeps in the dark. Every hour of the clock is covered; every kind of threat is named.",
      "It is worth noticing what the psalm actually promises here. It does not say that arrows will never be shot or that plagues will never come; it says &ldquo;you will not fear.&rdquo; The deepest gift of dwelling in the shelter is not the absence of danger but the absence of terror. The one whose refuge is God can lie down in the night without the gnawing dread that robs sleep, and can walk through the day without the paralysis of anxiety, because his security does not rest on the calm of his circumstances but on the faithfulness of his God.",
      "This is the answer Scripture gives again and again to the fearful heart. &ldquo;When I am afraid, I put my trust in you&rdquo; (Ps. 56:3). &ldquo;Do not be anxious about anything&rdquo; (Phil. 4:6). The terror of the night is real; the arrows that fly by day are real; illness and disaster are real. Psalm 91 does not deny them. It simply insists that the believer faces them from inside the fortress, covered by the wings and guarded by the faithfulness of the Most High, and so need not be ruled by fear.",
    ],
  },
  {
    id: "No Evil Shall Befall You",
    heading: "No Evil Shall Befall You",
    reference: "Psalm 91:7&ndash;10",
    paragraphs: [
      "The psalm now intensifies its promise with one of its most striking images: &ldquo;A thousand may fall at your side, ten thousand at your right hand, but it will not come near you&rdquo; (91:7). The scene is a battlefield or a plague-stricken city where death is falling all around. The numbers mount up &mdash; a thousand here, ten thousand there &mdash; and yet, in the midst of this carnage, the one who dwells in the shelter of the Most High stands untouched. The contrast is stark and meant to be: surrounded by death, the believer is kept.",
      "&ldquo;You will only look with your eyes and see the recompense of the wicked&rdquo; (91:8). This sober line reminds us that the psalm is not naive about evil. There is judgment in the world; the wicked do reap what they sow. But the one sheltered in God is not swept away in that reckoning. This must be read with care: the psalm is poetry, not a mechanical guarantee that no harm ever touches a believer&rsquo;s body. Many faithful saints have suffered and died. What the psalm proclaims is the deeper, surer truth that nothing can finally separate God&rsquo;s own from his protecting love.",
      "Verse 9 returns to the foundation laid at the start: &ldquo;Because you have made the Lord your dwelling place &mdash; the Most High, who is my refuge &mdash; no evil shall be allowed to befall you, no plague come near your tent&rdquo; (91:9&ndash;10). Once again the promise is anchored to the condition: it is &ldquo;because you have made the Lord your dwelling place.&rdquo; The blessing is not a charm to be grasped at, but the fruit of a life that has taken up residence in God.",
      "The phrase &ldquo;no evil shall be allowed to befall you&rdquo; is precious, but it must be understood rightly. Scripture itself shows us righteous sufferers &mdash; Job, the prophets, the apostles, and supremely Christ. The promise is not that the believer is exempt from all hardship, but that no evil can ultimately harm the one whom God keeps. Even the worst that comes is bent by God to serve his purpose, for &ldquo;all things work together for good, for those who are called according to his purpose&rdquo; (Rom. 8:28). The &ldquo;tent&rdquo; of the believer is under divine guard.",
      "This is where the psalm has its most famous and most sobering use in the New Testament. When Satan tempted Jesus in the wilderness, he quoted these very verses, urging him to throw himself from the pinnacle of the temple: &ldquo;He will command his angels concerning you&rdquo; (Matt. 4:6, citing Ps. 91:11&ndash;12). The devil twisted a promise of protection into a dare to test God presumptuously. Jesus answered, &ldquo;You shall not put the Lord your God to the test&rdquo; (Matt. 4:7). The psalm is a comfort for those who trust God, never a license to court danger and demand that he prove himself.",
      "So the believer holds these promises in faith, not in presumption. To dwell in the shelter is to trust God in the path of obedience, leaving the outcome in his hands &mdash; not to leap from the temple to force his hand. The one who walks humbly with God may face a battlefield where thousands fall, and may not understand why some are taken and some are spared, yet may rest in the certainty that no evil can separate him from the everlasting arms that hold him.",
    ],
  },
  {
    id: "The Angels Charge",
    heading: "The Angels Charge",
    reference: "Psalm 91:11&ndash;13",
    paragraphs: [
      "At the heart of the psalm lies one of its best-loved promises: &ldquo;For he will command his angels concerning you to guard you in all your ways. On their hands they will bear you up, lest you strike your foot against a stone&rdquo; (91:11&ndash;12). The God who shelters his people does not do so from a distance; he commissions his heavenly host to watch over them. The angels are given a charge, a standing order, to guard the one who dwells in the Most High &mdash; and not merely in the great crises but &ldquo;in all your ways,&rdquo; in the ordinary path of daily life.",
      "The detail is wonderfully concrete. The angels bear us up &ldquo;lest you strike your foot against a stone.&rdquo; This is not the rescue of grand and dramatic deliverance but the small, attentive care that keeps a traveler from stumbling on the road &mdash; the kind of protection a parent gives a child, steadying the little one over rough ground. The God of the universe concerns himself with the stones in our path. Nothing in our lives is too small for his watchful guarding.",
      "Then the psalm rises to a note of triumph: &ldquo;You will tread on the lion and the adder; the young lion and the serpent you will trample underfoot&rdquo; (91:13). The lion represents the open, roaring danger that attacks by force; the adder and serpent represent the hidden, venomous danger that strikes by stealth. Whether the threat comes with a roar or a hiss, whether it is obvious or concealed, the one whom God keeps will overcome it &mdash; not merely escape it, but tread it underfoot in victory.",
      "Christian readers have long heard in the serpent an echo of the first promise of the gospel, that the offspring of the woman would bruise the serpent&rsquo;s head (Gen. 3:15). The believer&rsquo;s victory over the lion and the serpent is finally a victory won in Christ, of whom Paul wrote, &ldquo;The God of peace will soon crush Satan under your feet&rdquo; (Rom. 16:20). To tread on the serpent is to share in the triumph of the One who has already crushed the great enemy.",
      "These are the very verses Satan seized upon at the temptation of Jesus, and that fact teaches us how to read them. The promise of angelic protection is given to those who walk in God&rsquo;s ways, not to those who test him. Jesus did not refuse the truth of the psalm; he refused to abuse it. And in fact angels did minister to him &mdash; after the temptation (Matt. 4:11), and again in his agony in Gethsemane (Luke 22:43). The promise held true, but on God&rsquo;s terms and in God&rsquo;s timing, not as a stunt to be demanded.",
      "For the believer today, this means a deep and humble confidence. We cannot see the angels, and we are not invited to test or command them. But we are invited to trust that the unseen host of heaven is engaged on our behalf, that &ldquo;the angel of the Lord encamps around those who fear him, and delivers them&rdquo; (Ps. 34:7). We walk through a world of lions and serpents, of open dangers and hidden ones, under a guard we cannot see, kept by the command of the Most High himself.",
    ],
  },
  {
    id: "Because He Holds Fast to Me",
    heading: "Because He Holds Fast to Me",
    reference: "Psalm 91:14&ndash;16",
    paragraphs: [
      "The psalm closes with its most astonishing turn: in the final three verses, God himself speaks. Up to this point we have heard the voice of the psalmist describing God&rsquo;s protection; now the Almighty answers in the first person, sealing every promise with his own word. &ldquo;Because he holds fast to me in love, I will deliver him; I will protect him, because he knows my name&rdquo; (91:14). The whole psalm is gathered up and confirmed by the voice of God.",
      "Notice what God says is the ground of his deliverance: &ldquo;because he holds fast to me in love&rdquo; and &ldquo;because he knows my name.&rdquo; The relationship is mutual. The believer clings to God in love, and knows his name &mdash; not merely as a label but as the revelation of who he is, the covenant Lord who keeps faith. The protection of Psalm 91 is the protection of a love relationship, not a transaction. The one who sets his love upon God is held by the love of God.",
      "The promises that follow are rich and personal: &ldquo;When he calls to me, I will answer him; I will be with him in trouble; I will rescue him and honor him&rdquo; (91:15). Read this carefully, for it overturns a shallow reading of the whole psalm. God does not promise a life without trouble; he promises, &ldquo;I will be with him in trouble.&rdquo; The shelter of the Most High is not a wall that keeps all hardship out, but the presence of God that meets us in the midst of it. This is the same comfort as the valley of the shadow in Psalm 23: &ldquo;I will fear no evil, for you are with me.&rdquo;",
      "Here is the answer to every fear, every danger, every illness, and every trial the psalm has named. The deepest promise is not exemption but companionship &mdash; &ldquo;I will be with him.&rdquo; This is the heart of the gospel itself, for the Son of God is named Immanuel, &ldquo;God with us&rdquo; (Matt. 1:23), and his last word to his people is, &ldquo;I am with you always, to the end of the age&rdquo; (Matt. 28:20). The God who is our refuge does not merely send help from afar; he comes down and shares our trouble.",
      "The psalm ends with the promise of a full and finished life: &ldquo;With long life I will satisfy him and show him my salvation&rdquo; (91:16). For Israel this spoke of a full span of years; for the believer in Christ it opens out into the fullness of eternal life. The final word is &ldquo;salvation&rdquo; &mdash; in Hebrew, yeshuah, the word that stands behind the name of Jesus. The psalm that began with the shelter of the Most High ends by promising to show us his salvation, and that salvation has a face and a name: Jesus, in whom all the promises of God are Yes and Amen.",
      "So Psalm 91 is, in the end, a psalm about Christ and about all who are hidden in him. He alone perfectly dwelt in the shelter of the Most High; he alone trod on the lion and the serpent and crushed the ancient enemy; and through him the trembling and the suffering find a refuge that the snare of the fowler and the deadly pestilence can never breach. To those who hold fast to him in love, the God of heaven still says, &ldquo;I will deliver him&hellip; I will be with him in trouble&hellip; and show him my salvation.&rdquo;",
    ],
  },
];

const videoItems = [
  { videoId: "GET2a7g1bxQ", title: "BibleProject - Psalms - Book Overview" },
  { videoId: "j9phNEaPrv8", title: "Psalm 91 - The Shelter of the Most High Explained" },
  { videoId: "Yqg2Y0SlQDk", title: "Dwelling in the Secret Place - Psalm 91 Devotional" },
  { videoId: "kZ-2zSqNT9w", title: "He Will Command His Angels - Trust and Protection" },
];

export default function Psalm91GuidePage() {
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
            Psalms Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 91
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            &ldquo;He who dwells in the shelter of the Most High&rdquo; &mdash; the great psalm of refuge and protection, where the trembling heart finds covering under God&rsquo;s wings, deliverance from the snare of the fowler and the deadly pestilence, the charge of angels, and God&rsquo;s own voice promising, &ldquo;I will be with him in trouble.&rdquo;
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
              Deepen your study of Psalm 91 through visual teaching on the shelter of the Most High, the secret place of refuge, the charge given to the angels, and the God who is with us in trouble.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>My Refuge and My Fortress</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Psalm 91 answers the fearful, the endangered, and the sick with a refuge that is not the absence of trouble but the presence of God in the midst of it. To dwell in the shelter of the Most High is to abide in Christ, who trod on the lion and the serpent and shares our every trial &mdash; so that to all who hold fast to him in love, God still says, &ldquo;I will be with him in trouble&hellip; and show him my salvation.&rdquo;
          </p>
        </div>
      </main>
    </div>
  );
}
