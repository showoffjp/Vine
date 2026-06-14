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
  "Trapped Between Sea and Army",
  "The LORD Will Fight for You",
  "The Sea Parts",
  "The Waters Return",
  "Application",
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
    heading: "Overview of Exodus 14",
    reference: "Exodus 14:1&ndash;31",
    paragraphs: [
      "Exodus 14 is one of the most dramatic chapters in all of Scripture &mdash; the account of Israel&rsquo;s deliverance at the Red Sea. The Israelites have just been released from four hundred years of slavery in Egypt. The ten plagues have broken Pharaoh&rsquo;s will, the Passover has been observed, and the people have marched out with silver and gold and the bones of Joseph. But the story is not over. God is about to engineer a situation that will appear, from every human vantage point, to be catastrophic &mdash; and through it he will demonstrate his glory and establish Israel&rsquo;s faith once and for all.",
      "The chapter opens with God giving Moses specific instructions about where to encamp: by the sea, at Pi-hahiroth, between Migdol and the sea. The positioning is deliberate. God says plainly that he is hardening Pharaoh&rsquo;s heart so that Pharaoh will pursue Israel, and that through this pursuit God will &ldquo;get glory over Pharaoh and all his host&rdquo; (14:4). What looks like a strategic blunder &mdash; Israel pinned against the sea with the Egyptian army approaching &mdash; is in fact a divine setup. The trap is not for Israel but for Egypt.",
      "When Pharaoh sees Israel encamped in apparent confusion, he regrets having released his labor force and mobilizes his army: six hundred chosen chariots, all the other chariots of Egypt, and horsemen and troops. As the Egyptians approach, the Israelites look up and see them, and terror grips the camp. The people cry out to the LORD and immediately turn on Moses: &ldquo;Is it because there are no graves in Egypt that you have taken us away to die in the wilderness?&rdquo; (14:11). The situation seems utterly hopeless.",
      "Moses responds with one of the great calls to faith in Scripture: &ldquo;Fear not, stand firm, and see the salvation of the LORD, which he will work for you today. For the Egyptians whom you see today, you shall never see again. The LORD will fight for you, and you have only to be silent&rdquo; (14:13&ndash;14). Then God acts. The pillar of cloud moves from before Israel to behind them, standing between Israel and Egypt. Moses stretches out his hand over the sea; a great east wind blows all night; the waters divide; Israel walks through on dry ground. The Egyptians pursue &mdash; and are drowned when the waters return.",
      "The chapter closes with one of the most theologically significant sentences in the Pentateuch: &ldquo;And Israel saw the great power that the LORD used against the Egyptians, so the people feared the LORD, and believed in the LORD and in his servant Moses&rdquo; (14:31). Fear, faith, and the servant of God &mdash; these three are the fruit of the Red Sea crossing. The event becomes the defining act of God in Israel&rsquo;s history, referred to throughout the Old Testament as the paradigmatic instance of divine salvation, and celebrated in the Song of the Sea that immediately follows in Exodus 15.",
      "For the Christian reader, the Red Sea crossing is one of the richest typological events in the entire Bible. The apostle Paul writes that the Israelites &ldquo;were all baptized into Moses in the cloud and in the sea&rdquo; (1 Corinthians 10:2), pointing to the crossing as a type of baptism and of salvation through death and resurrection. The waters that destroyed Israel&rsquo;s enemies and through which Israel passed to new life on the other side foreshadow the waters of baptism and, more fundamentally, the death and resurrection of Jesus Christ &mdash; the greater Exodus by which God&rsquo;s people are delivered from a slavery far more profound than Egypt.",
    ],
  },
  {
    id: "Trapped Between Sea and Army",
    heading: "Trapped Between Sea and Army",
    reference: "Exodus 14:1&ndash;12",
    paragraphs: [
      "The opening of Exodus 14 reveals a God who orchestrates situations that human wisdom would never engineer. After the climactic night of the Passover and the dramatic departure from Egypt, the LORD speaks to Moses with instructions that seem, on the surface, counterintuitive: turn back, encamp before Pi-hahiroth, between Migdol and the sea. The route is not the most direct one; the position is not militarily advantageous. And God provides the reason: &ldquo;For Pharaoh will say of the people of Israel, &lsquo;They are wandering in the land; the wilderness has shut them in&rsquo;&rdquo; (14:3). God is deliberately creating the appearance of a blunder.",
      "The divine rationale is stated with remarkable clarity: &ldquo;And I will harden Pharaoh&rsquo;s heart, and he will pursue them, and I will get glory over Pharaoh and all his host, and the Egyptians shall know that I am the LORD&rdquo; (14:4). The hardening of Pharaoh&rsquo;s heart &mdash; a theme that runs through the plague narratives &mdash; reaches its culmination here. Pharaoh is not being moved against his will by some external force; he is being given over to the desire that is already in his heart: the desire to recapture his workforce, to demonstrate his power, to reverse the humiliation of the ten plagues. God gives him what he wants &mdash; and it becomes his destruction.",
      "Pharaoh&rsquo;s mobilization is described with the narrative power of epic literature. He takes six hundred chosen chariots and all the other chariots of Egypt, with officers over all of them. The LORD hardened the heart of Pharaoh king of Egypt, and he pursued the people of Israel while the people of Israel were going out defiantly. The Egyptians pursued them, all Pharaoh&rsquo;s horses and chariots and his horsemen and his army. As the Egyptian force approaches, the Israelites lift their eyes and see them, and the effect is immediate and visceral: &ldquo;they feared greatly&rdquo; (14:10).",
      "The Israelites&rsquo; response to the crisis is a mixture that the reader of Scripture will recognize again and again: genuine cry to God and bitter complaint against his servant. They &ldquo;cried out to the LORD&rdquo; &mdash; which is exactly right. But then they turn on Moses with a devastating series of rhetorical questions: &ldquo;Is it because there are no graves in Egypt that you have taken us away to die in the wilderness? What have you done to us in bringing us out of Egypt? Is not this what we said to you in Egypt: &lsquo;Leave us alone that we may serve the Egyptians&rsquo;? For it would have been better for us to serve the Egyptians than to die in the wilderness&rdquo; (14:11&ndash;12).",
      "This complaint is remarkable for what it reveals about the human heart under pressure. The Israelites had witnessed the ten plagues. They had seen the Passover. They had walked out of Egypt with the Egyptians pressing gifts upon them. They had the pillar of cloud before them. And yet, at the first sight of the Egyptian army, they are ready to declare that slavery in Egypt would have been preferable to freedom in the wilderness. Fear has a remarkable power to make the past look better than it was and the present look worse than it is. It erases the memory of grace and replaces it with a calculation of immediate survival.",
      "The theological importance of this moment lies not only in Israel&rsquo;s failure but in what it sets up: the proclamation of Moses and the action of God. The impossibility of the human situation &mdash; the sea before them, the army behind them, no human exit &mdash; is the necessary context for the revelation of divine power. God&rsquo;s glory does not shine most brightly in situations that human resourcefulness could manage. It shines most brightly precisely when every human option has been exhausted and there is nothing left to trust but God himself.",
    ],
  },
  {
    id: "The LORD Will Fight for You",
    heading: "The LORD Will Fight for You",
    reference: "Exodus 14:13&ndash;14",
    paragraphs: [
      "Moses&rsquo; response to the terrified Israelites is compressed into two verses that together form one of the greatest calls to faith in the entire Old Testament. &ldquo;Fear not, stand firm, and see the salvation of the LORD, which he will work for you today. For the Egyptians whom you see today, you shall never see again. The LORD will fight for you, and you have only to be silent&rdquo; (14:13&ndash;14). These words are not the natural product of military calculation or human bravado. They are a declaration of theological certainty in the face of a situation that, by every visible indicator, offers nothing to be certain about.",
      "The first command is &ldquo;Fear not&rdquo; &mdash; the most common command in all of Scripture, addressed by God or his messengers to human beings who encounter the holy or the impossible. It is not a command to suppress a feeling by willpower; it is an invitation to reorient one&rsquo;s gaze from the threatening circumstance to the character of the God who stands behind the circumstance. Israel should not fear because of who the LORD is, not because the Egyptian army is less formidable than it looks. The army is formidable. The sea is real. The fear is natural. But the LORD is greater than armies and seas.",
      "The second command is &ldquo;stand firm&rdquo; &mdash; or, in some translations, &ldquo;stand still.&rdquo; The Hebrew (&lsquo;hityatstsev&rsquo;) carries the sense of stationing oneself, taking up a position and holding it. This is a military term repurposed for a situation in which no military action is possible. Israel cannot fight six hundred chariots with bare hands. They cannot cross the sea. The only position available to them is the position of waiting upon God. &ldquo;Stand firm&rdquo; is therefore an act of faith expressed as physical stillness &mdash; a refusal to run, to despair, to attempt a human solution that is not there.",
      "The third element is &ldquo;see the salvation of the LORD.&rdquo; Moses announces in advance what God is about to do, so that when it happens the people will understand it as salvation and not merely as a fortunate natural occurrence. The word &ldquo;salvation&rdquo; here (&lsquo;yeshua&rsquo;) is the same root as the name Jesus. The act God is about to perform at the Red Sea is a &ldquo;yeshua&rdquo; &mdash; a rescue, a deliverance, a saving act. Moses tells Israel to watch it unfold, to observe it with their own eyes, because seeing the salvation of God is itself a spiritual act that will shape their faith and their subsequent life.",
      "The climax of Moses&rsquo; declaration comes in the final sentence: &ldquo;The LORD will fight for you, and you have only to be silent.&rdquo; This sentence establishes the fundamental asymmetry of the battle that is about to take place. It is not Israel versus Egypt. It is God versus Egypt, with Israel as the beneficiary and witness. The &ldquo;silence&rdquo; commanded here is not mere quiet; it is the cessation of the anxious self-reliance and complaining that has characterized the people&rsquo;s response to the crisis. It is the silence of one who has nothing more to add because God has everything in hand.",
      "The theological principle embedded in these two verses resonates across the entire biblical canon. Isaiah 30:15 returns to the same theme: &ldquo;In returning and rest you shall be saved; in quietness and in trust shall be your strength.&rdquo; Psalm 46:10 declares, &ldquo;Be still, and know that I am God.&rdquo; The New Testament extends the principle: &ldquo;Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God&rdquo; (Philippians 4:6). The call to trust the God who fights for his people, rather than to scramble for a human solution in the panic of the moment, is one of the great steady notes of biblical revelation.",
    ],
  },
  {
    id: "The Sea Parts",
    heading: "The Sea Parts",
    reference: "Exodus 14:15&ndash;22",
    paragraphs: [
      "The divine response to Moses&rsquo; declaration is immediate and, at first reading, surprising: &ldquo;The LORD said to Moses, &lsquo;Why do you cry to me? Tell the people of Israel to go forward. Lift up your staff, and stretch out your hand over the sea and divide it, that the people of Israel may go through the sea on dry ground&rsquo;&rdquo; (14:15&ndash;16). The command to go forward is addressed to a people standing on the edge of an impassable sea with an army behind them. It is, humanly speaking, an order to advance into water. The miracle is commanded before it has occurred; faith must step out before the way is fully visible.",
      "Before Moses stretches out his hand, God moves his cloud. &ldquo;Then the angel of God who was going before the host of Israel moved and went behind them, and the pillar of cloud moved from before them and stood behind them, coming between the host of Egypt and the host of Israel&rdquo; (14:19&ndash;20). The pillar that had been Israel&rsquo;s guide becomes Israel&rsquo;s shield. It gives light to Israel and darkness to Egypt; through the whole night neither army comes near the other. God interposes himself between his people and their enemies before the waters divide.",
      "Then Moses stretches out his hand over the sea. &ldquo;And the LORD drove the sea back by a strong east wind all that night and made the sea dry land, and the waters were divided. And the people of Israel went into the midst of the sea on dry ground, the waters being a wall to them on their right hand and on their left&rdquo; (14:21&ndash;22). The mechanism is a mighty east wind; the agency is God. The text does not ask the reader to choose between these; it holds them together. God rules the wind as surely as he rules the water. The natural and the supernatural are not in competition here; the natural is the instrument of the supernatural.",
      "The image of Israel walking through the sea on dry ground, with the waters standing as walls on either side, is one of the most vivid pictures in the Old Testament. The language &ldquo;dry ground&rdquo; connects this moment deliberately to the creation narrative, where God separates the waters and dry ground appears (Genesis 1:9). The parting of the Red Sea is a new creation act &mdash; God is bringing a new world, a new people, into existence by the same sovereign command over waters that marked the first creation. Israel emerges from the sea as a nation newly born.",
      "The darkness and confusion that the pillar brings upon Egypt while Israel crosses is itself a significant element of the narrative. It echoes the ninth plague, the plague of darkness, which had covered Egypt while Israel had light (Exodus 10:22&ndash;23). Light and darkness, sight and blindness, are distributed along the lines of covenant relationship: God&rsquo;s people have light in their darkness; those who oppose God are left in confusion. The pattern is consistent throughout Scripture and reaches its ultimate expression in the Gospel of John, where Jesus declares himself the light of the world, and the world prefers darkness.",
      "The crossing itself unfolds over the whole night &mdash; not in an instant, but through hours of walking, the whole community of Israel moving through the divided waters. This is not a private miracle witnessed by a few; it is a national experience shared by a generation. Every man, woman, and child who makes the crossing becomes a firsthand witness to what the LORD has done. This is why the event becomes the canonical reference point for divine deliverance in Israel&rsquo;s subsequent liturgy, poetry, and prophecy: the generation that experienced it told it to their children, who told it to theirs, across all the centuries that followed.",
    ],
  },
  {
    id: "The Waters Return",
    heading: "The Waters Return",
    reference: "Exodus 14:23&ndash;31",
    paragraphs: [
      "As Israel finishes crossing, the Egyptians pursue them into the sea. The six hundred chariots, the horsemen, and the army plunge into the divided waters in pursuit of the people they had released. Then, in the morning watch, the LORD looks down on the Egyptian forces from the pillar of fire and cloud and throws them into a panic (14:24). He clogs their chariot wheels so that they drive heavily, and the Egyptians themselves begin to recognize what is happening: &ldquo;Let us flee from before Israel, for the LORD fights for them against the Egyptians&rdquo; (14:25). Even the enemy is forced to confess what Moses had declared.",
      "But the confession comes too late. The LORD commands Moses to stretch out his hand over the sea again. &ldquo;So Moses stretched out his hand over the sea, and the sea returned to its normal course when the morning appeared. And as the Egyptians fled into it, the LORD threw the Egyptians into the midst of the sea. The waters returned and covered the chariots and the horsemen; of all the host of Pharaoh that had followed them into the sea, not one of them remained&rdquo; (14:27&ndash;28). The same waters that were a wall of salvation for Israel become a wall of judgment for Egypt.",
      "The precision of the narrator&rsquo;s account is theologically significant. Not one Egyptian remained. The entire military force that Pharaoh had mobilized &mdash; the six hundred chosen chariots, all the other chariots, the horsemen, the army &mdash; was swallowed by the sea. The instrument of oppression was utterly destroyed. The power that had enslaved God&rsquo;s people for four hundred years, that had murdered their infant sons, that had denied them rest and dignity and freedom, was erased in a morning. God&rsquo;s judgment, when it falls, is complete.",
      "The parallel between Israel&rsquo;s experience and Egypt&rsquo;s is drawn with deliberate care. Israel walked through on dry ground (14:22); the Egyptians found no dry ground but only the returning waters. Israel passed through the waters to life on the other side; the Egyptians pursued them into the waters and found death. The sea was the boundary between slavery and freedom, between old life and new life, between the world of Pharaoh and the world of the covenant. To cross it with Israel meant life; to pursue Israel into it meant death. The Red Sea divides not only land masses but destinies.",
      "The final verses of the chapter describe Israel&rsquo;s response to what they have witnessed. &ldquo;Israel saw the Egyptians dead on the seashore. Israel saw the great power that the LORD used against the Egyptians, so the people feared the LORD, and believed in the LORD and in his servant Moses&rdquo; (14:30&ndash;31). Three verbs mark the sequence: they saw, they feared, they believed. The sight of the dead Egyptians was not an occasion for triumphalism but for the fear of God &mdash; the recognition that the power at work in the world is not tame, not manageable, not merely on call for human purposes, but holy and sovereign and utterly beyond human control.",
      "The faith that results from the Red Sea crossing is a faith grounded in observed reality. Israel did not believe in the abstract; they believed in the LORD who had done this specific thing, on this specific day, before their own eyes. This is the characteristic pattern of biblical faith: not a leap into the dark but a response to divine action that has broken into history. The God who parted the sea is the God in whom Israel is called to trust when the seas rise again &mdash; and they will rise again, again and again, throughout Israel&rsquo;s long history. The Red Sea crossing is not the end of the story but the foundation for everything that follows.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Exodus 14 Today",
    reference: "Exodus 14 &mdash; For the Life of the Church",
    paragraphs: [
      "Exodus 14 presents the church with a picture of divine deliverance that is simultaneously historical, typological, and immediately applicable. The situation Israel faced &mdash; trapped between an impassable obstacle and an advancing threat, with no human solution available &mdash; is not merely an ancient military predicament. It is a recurring pattern in the life of faith, the pattern of the impossible situation in which God is pleased to reveal his glory. The church that has been shaped by this narrative will recognize such situations not as evidence that God has abandoned them but as the precise setting in which God characteristically acts.",
      "The command &ldquo;Fear not, stand firm, and see the salvation of the LORD&rdquo; (14:13) is addressed not only to Israel in the thirteenth century BC but to every community of faith that finds itself between a sea and an army. The temptation in such moments is the same as Israel&rsquo;s: to look backward at the relative safety of the familiar, even the familiar that was oppressive, rather than forward into the unknown where God is leading. Israel&rsquo;s complaint that they would have been better off in Egypt is the complaint of every person who, under pressure, doubts whether the liberation God has promised is worth the cost of the journey.",
      "The principle that &ldquo;the LORD will fight for you, and you have only to be silent&rdquo; (14:14) is one of the most counter-intuitive principles in Scripture from the perspective of human activism. The contemporary Christian world is often characterized by intense activity, by the urgent multiplication of strategies and programs and initiatives. There is nothing wrong with diligent effort in the work of God. But Exodus 14 insists that there are moments when the most faithful response to the situation before us is not more activity but more stillness &mdash; a deeper trust in the One who fights for us, expressed as the quieting of the anxious self-reliance that would prefer to manage the crisis on its own terms.",
      "The Red Sea crossing also speaks powerfully to communities that have been enslaved &mdash; by addiction, by cycles of poverty, by systemic injustice, by the accumulated weight of generations of harm. The exodus narrative is not a spiritualized allegory about vague internal states; it is a story about God&rsquo;s concrete intervention to liberate actual people from actual bondage. The God of the exodus is a God who acts in history, who hears the cry of the oppressed, who has a long memory of his promises and the power to fulfill them against all opposition. The church that carries this story carries a message of hope that is not merely therapeutic but genuinely liberating.",
      "The apostle Paul&rsquo;s use of the Red Sea crossing in 1 Corinthians 10 as a type of baptism gives the event its deepest Christian significance. Paul writes that the Israelites &ldquo;were all baptized into Moses in the cloud and in the sea,&rdquo; and he uses the subsequent history of Israel&rsquo;s failure as a warning to the Corinthian church against complacency. The crossing of the Red Sea was the beginning of a journey that required sustained faithfulness; the miracle of deliverance did not guarantee the faithfulness of the delivered. In the same way, baptism initiates a life that must be lived in ongoing trust and obedience.",
      "Ultimately, Exodus 14 points the church forward to the greater Exodus accomplished by Jesus Christ. Luke 9:31 records Moses and Elijah at the transfiguration speaking with Jesus about his &ldquo;departure&rdquo; &mdash; the Greek word is &lsquo;exodos&rsquo;, his exodus, the departure he was about to accomplish at Jerusalem. The death and resurrection of Jesus is the definitive act of divine deliverance, the event in which God himself enters the waters of death and comes out the other side, opening a way through for all who follow him. The Red Sea was the baptism of a nation; the cross and resurrection is the baptism of the world. The God who said &ldquo;the LORD will fight for you&rdquo; at the edge of the sea said it most fully when he sent his Son to fight the final battle against sin and death on behalf of his people.",
    ],
  },
];

const videoItems = [
  { videoId: "oNpTha80yyE", title: "BibleProject - Overview of Exodus 1-18" },
  { videoId: "HGHqu9-DtXk", title: "The Exodus - Parting of the Red Sea Explained" },
  { videoId: "0GhkHCfnmHo", title: "Exodus 14 - The LORD Will Fight for You" },
  { videoId: "q7c5DWt7lMQ", title: "The Red Sea Crossing - A Type of Baptism and Salvation" },
];

export default function Exodus14GuidePage() {
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
            Exodus 14 &mdash; The Parting of the Red Sea
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Israel is trapped between Pharaoh&rsquo;s army and the Red Sea. Moses declares, &ldquo;Fear not, stand firm, and see the salvation of the LORD &mdash; The LORD will fight for you, and you have only to be silent.&rdquo; God parts the waters; Israel crosses on dry ground; the waters return and drown the Egyptian army. &ldquo;The people feared the LORD, and believed in the LORD and in his servant Moses.&rdquo;
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
              Deepen your study of Exodus 14 through these video teachings on the parting of the Red Sea, the defeat of Pharaoh&rsquo;s army, and the theological significance of Israel&rsquo;s great deliverance.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The LORD Will Fight for You</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Exodus 14 reveals the God who engineers impossible situations in order to reveal his glory. Trapped between the sea and the army, Israel learned the deepest lesson of faith: &ldquo;Fear not, stand firm, and see the salvation of the LORD.&rdquo; The same God who parted the Red Sea has accomplished the greater Exodus in Jesus Christ, passing through the waters of death and rising to open the way for all who follow him.
          </p>
        </div>
      </main>
    </div>
  );
}
