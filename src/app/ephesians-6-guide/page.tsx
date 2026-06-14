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
  "Children and Parents",
  "Bondservants and Masters",
  "Be Strong in the Lord",
  "The Whole Armor of God",
  "Pray at All Times in the Spirit",
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
    id: "Children and Parents",
    heading: "Children and Parents",
    reference: "Ephesians 6:1&ndash;4",
    paragraphs: [
      "Paul has been describing what the Spirit-filled life looks like inside the household, and now he turns to the relationship between children and parents. &ldquo;Children, obey your parents in the Lord, for this is right&rdquo; (6:1). The command is direct and unembarrassed: obedience to parents is not merely a social convention but something fitting and good, woven into the moral order of creation. The qualifier &ldquo;in the Lord&rdquo; frames the whole duty &mdash; this obedience is rendered as part of a child&rsquo;s walk with Christ, not as blind submission to human authority for its own sake.",
      "To ground the command, Paul reaches back to the Ten Commandments: &ldquo;Honor your father and mother&rdquo; (6:2), and he notes pointedly that this is &ldquo;the first commandment with a promise.&rdquo; The promise quoted from Deuteronomy is &ldquo;that it may go well with you and that you may live long in the land&rdquo; (6:3). The honoring of parents is tied to flourishing and blessing; to despise the ones who gave you life is to cut yourself off from a wellspring of God&rsquo;s favor. Honor goes deeper than obedience &mdash; a grown child no longer obeys parents as a minor does, yet the call to honor them never expires.",
      "Then Paul, strikingly for his time, turns and addresses the fathers directly: &ldquo;Fathers, do not provoke your children to anger, but bring them up in the discipline and instruction of the Lord&rdquo; (6:4). Authority in the Christian home is never a license for harshness. A father is warned against exasperating his children &mdash; through unreasonable demands, favoritism, constant criticism, or cruelty &mdash; because such treatment crushes the spirit and breeds resentment rather than godliness.",
      "The positive charge is weightier still. Fathers are to &ldquo;bring them up&rdquo; &mdash; to nourish and raise &mdash; &ldquo;in the discipline and instruction of the Lord.&rdquo; Discipline includes correction and the loving shaping of character; instruction is the patient teaching of God&rsquo;s truth. The aim is not mere outward compliance but children who come to know and love the Lord for themselves. The Christian home is the first and primary place where the faith is handed on from one generation to the next.",
      "Underneath these household instructions runs a single thread: mutual responsibility under the lordship of Christ. Children are not the property of parents, nor parents the servants of children. Each party stands accountable to the Lord. The child who honors imperfect parents and the father who governs without provoking are both, in their different stations, learning what it means to live as the body of Christ at home &mdash; where the gospel is tested not in grand public arenas but in the daily, often unseen, faithfulness of family life.",
    ],
  },
  {
    id: "Bondservants and Masters",
    heading: "Bondservants and Masters",
    reference: "Ephesians 6:5&ndash;9",
    paragraphs: [
      "Paul moves from the family to the working relationships of the household, addressing bondservants and masters. In the Roman world, slaves were a vast part of the labor force, and many were now believers worshiping alongside their masters in the same congregation. Paul does not pretend the situation is just, but he speaks into it with a radical reorientation of motive: &ldquo;Bondservants, obey your earthly masters with fear and trembling, with a sincere heart, as you would Christ&rdquo; (6:5).",
      "The transformation Paul works is to lift ordinary labor onto a spiritual plane. Servants are not to work merely &ldquo;by the way of eye-service, as people-pleasers, but as bondservants of Christ, doing the will of God from the heart&rdquo; (6:6). The Christian worker labors as one whose true Master is in heaven, and so even the most menial task becomes an act of worship. &ldquo;Rendering service with a good will as to the Lord and not to man&rdquo; (6:7) means that diligence does not depend on whether the boss is watching.",
      "Paul anchors this with a promise of cosmic justice: &ldquo;knowing that whatever good anyone does, this he will receive back from the Lord, whether he is a bondservant or is free&rdquo; (6:8). No faithful service is ever wasted or overlooked. The lowest servant who works honestly for Christ&rsquo;s sake will be repaid by the Lord himself &mdash; a staggering dignity conferred on hidden, unrewarded labor.",
      "Then Paul turns to the masters with a command that would have shocked the ancient ear: &ldquo;Masters, do the same to them, and stop your threatening&rdquo; (6:9). Masters are to treat their servants with the very same goodwill, the same sincerity of heart, the same sense of accountability to God. The casual cruelty and intimidation by which masters ruled is forbidden outright.",
      "The reason cuts to the root of all human hierarchy: &ldquo;knowing that he who is both their Master and yours is in heaven, and that there is no partiality with him&rdquo; (6:9). Master and servant alike stand under one Lord who shows no favoritism. The earthly distinction of rank dissolves before the throne of God, who judges all impartially. Though Paul does not here call for the abolition of slavery, the seeds he plants &mdash; a shared Master, a common accountability, a dignity that crosses every social line &mdash; would in time prove fatal to the whole institution. For the believer today, these verses speak to every relationship of authority and labor: work done as worship, and power exercised without threat, under the watchful eye of a God who plays no favorites.",
    ],
  },
  {
    id: "Be Strong in the Lord",
    heading: "Be Strong in the Lord",
    reference: "Ephesians 6:10&ndash;13",
    paragraphs: [
      "Now Paul reaches the great climactic summons of the entire letter: &ldquo;Finally, be strong in the Lord and in the strength of his might&rdquo; (6:10). The word &ldquo;finally&rdquo; signals that everything before &mdash; the riches of grace, the unity of the church, the new life and the household codes &mdash; comes to its head in this call. Notice that the strength is not the believer&rsquo;s own. It is strength &ldquo;in the Lord,&rdquo; drawn from his might. The Christian life is not won by gritted-teeth willpower but by a power that comes from outside ourselves.",
      "The reason such strength is needed becomes immediately clear: &ldquo;Put on the whole armor of God, that you may be able to stand against the schemes of the devil&rdquo; (6:11). The believer faces a personal, intelligent enemy who works not by brute force alone but by &ldquo;schemes&rdquo; &mdash; cunning strategies, deceptions, and traps. The call is not first to advance and conquer but to &ldquo;stand&rdquo; &mdash; to hold the ground that Christ has already won, refusing to be dislodged.",
      "Paul then unmasks the true nature of the conflict: &ldquo;For we do not wrestle against flesh and blood, but against the rulers, against the authorities, against the cosmic powers over this present darkness, against the spiritual forces of evil in the heavenly places&rdquo; (6:12). The Christian&rsquo;s real struggle is not finally with human opponents &mdash; the difficult coworker, the hostile family member, the oppressive system &mdash; but with the dark spiritual powers that stand behind and stir up such hostility. This vision both sobers and clarifies: it explains why the fight feels larger than its visible causes, and it directs our weapons away from people and toward the unseen enemy.",
      "Because the foe is spiritual and formidable, the response must be the full provision God supplies: &ldquo;Therefore take up the whole armor of God, that you may be able to withstand in the evil day, and having done all, to stand firm&rdquo; (6:13). Twice more the goal is simply to stand. The &ldquo;evil day&rdquo; may be a particular season of fierce assault or the whole age between Christ&rsquo;s first and second comings. Either way, the believer is to be fully equipped before the attack comes, not scrambling for armor in the heat of battle.",
      "This passage reframes the whole of Christian experience. Discouragement, temptation, doubt, division, and persecution are not random misfortunes but skirmishes in a real war. Yet the tone is not one of fear. The armor belongs to God, the strength is his, the victory is already secured in Christ. The believer is called not to manufacture courage but to take up what God has already provided and to stand &mdash; confident that the One who arms us is mightier than every power arrayed against us.",
    ],
  },
  {
    id: "The Whole Armor of God",
    heading: "The Whole Armor of God",
    reference: "Ephesians 6:14&ndash;17",
    paragraphs: [
      "Paul now itemizes the armor piece by piece, drawing on the picture of a Roman soldier yet rooting every image in the Old Testament, where the Lord himself wears such armor as the divine Warrior (Isaiah 11 and 59). The believer is clothed in nothing less than the armor of God&rsquo;s own righteousness and salvation. &ldquo;Stand therefore, having fastened on the belt of truth, and having put on the breastplate of righteousness&rdquo; (6:14). The belt of truth holds everything together &mdash; both the truth of the gospel and a life of integrity. The breastplate of righteousness guards the heart, the imputed righteousness of Christ and the practical uprightness it produces.",
      "Next come the soldier&rsquo;s boots: &ldquo;and, as shoes for your feet, having put on the readiness given by the gospel of peace&rdquo; (6:15). A soldier needs sure footing to stand firm and move without slipping. The gospel of peace &mdash; the good news that we are reconciled to God through Christ &mdash; gives the believer a settled stability, a readiness to stand and to carry that message of peace into a hostile world.",
      "&ldquo;In all circumstances take up the shield of faith, with which you can extinguish all the flaming darts of the evil one&rdquo; (6:16). The large Roman shield could be soaked in water and locked together with others to quench volleys of fiery arrows. So faith &mdash; trust in God&rsquo;s promises and character &mdash; intercepts and snuffs out the burning accusations, doubts, and temptations that the evil one hurls. When the lie is &ldquo;God has abandoned you,&rdquo; faith answers with what God has actually said and done.",
      "&ldquo;And take the helmet of salvation, and the sword of the Spirit, which is the word of God&rdquo; (6:17). The helmet of salvation guards the mind with the assurance of deliverance &mdash; past, present, and future &mdash; so that despair cannot land a fatal blow. The sword of the Spirit is the single offensive weapon in the list, and it is &ldquo;the word of God&rdquo; &mdash; Scripture spoken and wielded. This is precisely how Jesus repelled the devil in the wilderness, answering each temptation with &ldquo;It is written.&rdquo; The believer who knows and speaks God&rsquo;s word has a weapon that pierces every deception.",
      "Taken together, the armor is essentially a portrait of Christ himself &mdash; he is our truth, our righteousness, our peace, the object of our faith, our salvation, and the living Word. To &ldquo;put on the whole armor of God&rdquo; is, in the deepest sense, to &ldquo;put on the Lord Jesus Christ&rdquo; (Romans 13:14). The Christian stands not in self-made strength but clothed in the Savior, and so is able to withstand whatever the evil day may bring.",
    ],
  },
  {
    id: "Pray at All Times in the Spirit",
    heading: "Pray at All Times in the Spirit",
    reference: "Ephesians 6:18&ndash;24",
    paragraphs: [
      "The list of armor is followed by something just as essential, joined to it by a continuous breath of grammar: &ldquo;praying at all times in the Spirit, with all prayer and supplication&rdquo; (6:18). Prayer is the atmosphere in which all the armor is worn and the battle is fought. There is a deliberate fourfold emphasis here &mdash; pray at all times, with all prayer, with all perseverance, for all the saints &mdash; that leaves no occasion, no kind of need, and no fellow believer outside its reach.",
      "This prayer is to be &ldquo;in the Spirit&rdquo; &mdash; not a mechanical recitation but prayer prompted, energized, and shaped by the Holy Spirit. And it requires vigilance: &ldquo;To that end keep alert with all perseverance, making supplication for all the saints&rdquo; (6:18). The soldier who has put on the armor must stay awake at his post. Spiritual warfare is won not in occasional bursts but through watchful, persistent intercession that does not give up when answers are slow in coming.",
      "Then Paul, the great apostle, makes a humble personal request: &ldquo;and also for me, that words may be given to me in opening my mouth boldly to proclaim the mystery of the gospel, for which I am an ambassador in chains, that I may declare it boldly, as I ought to speak&rdquo; (6:19&ndash;20). He does not ask for release from prison but for boldness to keep preaching. The image is poignant and powerful: an &ldquo;ambassador in chains,&rdquo; a representative of the King of heaven, imprisoned by an earthly power yet still pleading for courage to speak. His one fear is that he might shrink back.",
      "The letter closes with warmth and practical care. Paul commends Tychicus, &ldquo;the beloved brother and faithful minister in the Lord,&rdquo; whom he is sending to tell the Ephesians how he is doing and &ldquo;that he may encourage your hearts&rdquo; (6:21&ndash;22). Even in chains, Paul thinks of comforting others. Then comes the benediction: &ldquo;Peace be to the brothers, and love with faith, from God the Father and the Lord Jesus Christ. Grace be with all who love our Lord Jesus Christ with love incorruptible&rdquo; (6:23&ndash;24).",
      "So the great letter that began with the eternal purpose of God &ldquo;before the foundation of the world&rdquo; ends on the believer&rsquo;s knees and the apostle&rsquo;s chains, with peace, love, faith, and grace. The whole armor of God is not a suit of self-reliance but a life lived in dependence upon Christ and woven through with prayer. The Christian stands strong in the Lord, prays at all times in the Spirit, and waits for the day when every cosmic power is finally put beneath the feet of the risen King.",
    ],
  },
];

const videoItems = [
  { videoId: "Y71r-T98E2Q", title: "BibleProject - Overview - Ephesians" },
  { videoId: "lZAhKQuVnVI", title: "The Whole Armor of God - Ephesians 6 Explained" },
  { videoId: "P3SX4Kz3SS4", title: "Spiritual Warfare and Standing Firm in Christ" },
  { videoId: "1Gc4-mNybNk", title: "Praying at All Times in the Spirit - A Study" },
];

export default function Ephesians6GuidePage() {
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
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Ephesians 6: The Whole Armor of God
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul&rsquo;s closing charge to the Ephesians &mdash; children and parents, bondservants and masters, the call to be strong in the Lord, the pieces of the whole armor of God against the schemes of the devil, and the summons to pray at all times in the Spirit while the apostle stands as an ambassador in chains.
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
              Deepen your study of Ephesians 6 through visual teaching on the Christian household, the nature of spiritual warfare, the pieces of the whole armor of God, and the call to constant prayer in the Spirit.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Stand Firm in the Strength of His Might</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Ephesians 6 brings the gospel down into the home, the workplace, and the unseen battle for the soul. The same Christ who reconciles us to God clothes us in his own armor and teaches us to pray at all times in the Spirit. Stand strong in the Lord, take up what he has provided, and hold your ground &mdash; for the victory belongs to the risen King at whose feet every power will finally be laid.
          </p>
        </div>
      </main>
    </div>
  );
}
