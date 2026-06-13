"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Fruit of the Spirit", "The Faithfulness of God", "Faithful in Little", "Faithfulness Over a Lifetime", "Found Faithful", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Fruit of the Spirit",
    heading: "Faithfulness as a Fruit of the Spirit",
    paragraphs: [
      "In Paul&rsquo;s catalogue of the fruit of the Spirit &mdash; &ldquo;love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control&rdquo; (Galatians 5:22-23) &mdash; faithfulness stands as one of the quiet, sturdy virtues that holds a Christian life together. The Greek word is <em>pistis</em>, the same word elsewhere translated &ldquo;faith.&rdquo; But here, listed among the character traits the Spirit produces, it carries the active sense of faithfulness: reliability, trustworthiness, loyalty, and steadfast dependability. It is the quality of being someone whose word can be trusted and who keeps their commitments.",
      "Faithfulness is not a flashy virtue. It does not draw crowds or win applause. It is the unglamorous excellence of the person who simply shows up, follows through, and remains true &mdash; year after year, in season and out. While the world prizes the spectacular and the new, the Spirit cultivates in the believer something far more valuable and far rarer: a settled dependability, a steadiness that others can lean on, a loyalty that does not waver when circumstances change or convenience suggests otherwise.",
      "To be faithful is to be the kind of person whose word can be trusted. When the faithful person says they will do something, it is as good as done; their yes means yes and their no means no (Matthew 5:37). In a world thick with broken promises, abandoned commitments, and words that mean nothing, the faithful Christian is a person of integrity whose life matches their speech. This reliability is itself a witness, for it reflects the unchanging God whose every promise holds.",
      "Faithfulness is intimately connected to faith, yet distinct from it. Faith is trust directed toward God &mdash; the believing reliance by which we are justified and saved. Faithfulness is the character that grows out of that trust &mdash; the trustworthiness, loyalty, and dependability that mark a life shaped by faith. The two are inseparable: genuine faith in a faithful God produces faithful people. We become like the One we trust, and because our God is faithful, those who truly trust him become faithful too.",
      "This means faithfulness is not mere natural reliability or dutiful temperament. Some people are constitutionally organized and dependable, but the faithfulness Paul describes runs deeper than personality. It is a fruit the Spirit grows, rooted in our union with Christ and watered by our trust in God&rsquo;s own faithfulness. It is the loyalty of a heart that has been claimed by a faithful Savior and now reflects his constancy. As such, it is available to every believer, the steady produce of a Spirit-filled life.",
      "Faithfulness expresses itself across the whole of life. It is faithfulness to God, in worship, obedience, and devotion that does not depend on feeling. It is faithfulness to others, in friendships kept, vows honored, and promises fulfilled. It is faithfulness in work, doing what we said we would do with diligence and care. It is faithfulness in small things and large, in public and in secret. The faithful Christian is reliable everywhere, because their dependability flows not from circumstance but from character.",
      "Above all, faithfulness is meant to reflect the very nature of God. We are called to be faithful because he is faithful; our steadfastness is an echo of his. When we keep our commitments, honor our word, and remain loyal through difficulty, we are bearing the image of the God who keeps covenant forever. Faithfulness, then, is not a minor virtue but a deeply God-like one &mdash; the steady thread that runs through a life surrendered to him.",
    ],
  },
  {
    id: "The Faithfulness of God",
    heading: "The Faithfulness of God: The Foundation",
    paragraphs: [
      "Christian faithfulness rests entirely upon a deeper foundation: the faithfulness of God himself. We can only be faithful because he is first faithful to us, and our steadfastness is but a reflection of his. The book of Lamentations, written amid the smoking ruins of Jerusalem, gives us one of the most beautiful confessions in all of Scripture: &ldquo;The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness&rdquo; (Lamentations 3:22-23). Even in catastrophe, the prophet anchors his hope in the unchanging reliability of God.",
      "God&rsquo;s faithfulness is covenant faithfulness. Moses told Israel, &ldquo;Know therefore that the Lord your God is God, the faithful God who keeps covenant and steadfast love with those who love him and keep his commandments, to a thousand generations&rdquo; (Deuteronomy 7:9). God is not capricious or fickle. He binds himself by promise and then keeps that promise across the centuries, through the failures of his people, through exile and return, through every twist of history. His faithfulness is not a mood but a commitment, sworn in covenant and sealed in blood.",
      "Most astonishing of all is that God&rsquo;s faithfulness does not depend on ours. Paul writes, &ldquo;If we are faithless, he remains faithful, for he cannot deny himself&rdquo; (2 Timothy 2:13). This is staggering grace. Our faithfulness wavers; we fail, we forget, we wander. But God&rsquo;s faithfulness to his people is rooted not in their constancy but in his own unchanging nature. He cannot deny himself. To abandon his covenant would be to contradict his very being. And so the believer&rsquo;s security rests not on the strength of their grip on God but on the strength of his grip on them.",
      "This faithfulness extends to every promise God has made. &ldquo;He who calls you is faithful; he will surely do it&rdquo; (1 Thessalonians 5:24). Whatever God has promised &mdash; to forgive, to sanctify, to keep, to complete the good work he began, to bring us safely home &mdash; he will most certainly accomplish, because he is faithful. We can build our entire lives upon his word, for the One who spoke it does not lie and does not change. Every promise of God finds its yes in Christ (2 Corinthians 1:20).",
      "The supreme demonstration of God&rsquo;s faithfulness is the cross. When humanity had broken every covenant and forfeited every claim, God remained faithful to his purpose of redemption. He sent his Son to bear the penalty we deserved, keeping his ancient promise to bless all nations through the seed of Abraham, fulfilling every prophecy, honoring his covenant at infinite cost to himself. The faithfulness of God is not an abstract attribute; it is written in the wounds of Christ, the proof that God keeps his word even when keeping it costs him everything.",
      "Knowing the faithfulness of God transforms how we live. It frees us from anxiety, for we serve a God who will not let us down. It steadies us in trial, for we know that the One who began a good work will be faithful to complete it (Philippians 1:6). It gives us courage to obey, for we trust that his promises hold. The believer who rests in God&rsquo;s faithfulness can face an uncertain future with confidence, knowing that whatever comes, the faithful God goes with them and will never leave nor forsake them.",
      "And here is the wellspring of our own faithfulness: we are faithful because he is faithful. As we contemplate the unwavering constancy of God, as we experience his promise-keeping over the years, our own hearts are shaped into his likeness. The steadfastness we receive from him becomes the steadfastness we extend to others. Our faithfulness is meant to reflect the unwavering faithfulness of God &mdash; a small mirror held up to the great and faithful heart of our Maker and Redeemer.",
    ],
  },
  {
    id: "Faithful in Little",
    heading: "Faithful in Little: The Significance of Small Things",
    paragraphs: [
      "Jesus taught a principle that overturns the world&rsquo;s scale of values: &ldquo;One who is faithful in a very little is also faithful in much, and one who is dishonest in a very little is also dishonest in much&rdquo; (Luke 16:10). Faithfulness, he reveals, is not measured primarily by the size of the task but by the consistency of the heart. The person who can be trusted with small things is the person who can be trusted with great things, because faithfulness is a single quality that expresses itself the same way regardless of scale. Character, not circumstance, is the true measure.",
      "This principle is dramatized in the parable of the talents. The master entrusts his servants with differing amounts, then returns to settle accounts. To the servants who invested what they were given, he says the same words regardless of the size of their return: &ldquo;Well done, good and faithful servant. You have been faithful over a little; I will set you over much. Enter into the joy of your master&rdquo; (Matthew 25:21). Notice that even what felt like &ldquo;much&rdquo; to the servant is called &ldquo;a little&rdquo; in light of the reward. All our earthly stewardship, however large it seems, is &ldquo;a little&rdquo; compared to what God has in store for the faithful.",
      "There is profound spiritual significance in small, hidden, daily faithfulness. The Christian life is composed far more of small acts than of grand gestures &mdash; the unseen prayer, the quiet act of service, the daily discipline, the kindness no one notices, the duty performed when no one is watching. These small faithfulnesses are not lesser; they are the very substance of a holy life. God sees them all, and in his economy the hidden faithfulness of an ordinary day is precious beyond measure.",
      "Character is proven and built in the unglamorous ordinary. We tend to imagine that faithfulness is forged in dramatic moments of testing, but in truth it is formed in the accumulation of countless small choices &mdash; to get up, to show up, to follow through, to keep going. The faithful person is not someone who performs heroically once but someone who is dependable a thousand times in small things. And it is precisely this hidden faithfulness that prepares the soul for whatever larger trust God may one day grant.",
      "This is deeply encouraging for the ordinary Christian whose life will never appear remarkable to the watching world. You may never preach to thousands, lead a movement, or accomplish anything the world calls great. But if you are faithful &mdash; faithful in your home, your work, your relationships, your secret devotion to God &mdash; then in the eyes of heaven you are accomplishing the very thing that matters most. The single mother faithfully raising her children, the laborer faithfully doing honest work, the believer faithfully praying in secret: these are the great ones in the kingdom.",
      "Small faithfulness is also where dishonesty and faithfulness first reveal themselves. Jesus warns that the one dishonest in a very little is dishonest in much. The small compromises &mdash; the little lie, the minor corner cut, the tiny commitment neglected &mdash; are not trivial; they are the seeds of larger unfaithfulness. Conversely, the person who guards their integrity in small things is building the kind of character that will hold firm when the stakes are high. We do not rise to great faithfulness; we sink or stand at the level of our small habits.",
      "So the call is to be faithful right where we are, with whatever we have been given, however small it may seem. We need not wait for some larger platform or grander opportunity to begin living faithfully. The talents already in our hands, the duties already before us, the relationships already entrusted to us &mdash; these are the field in which faithfulness is to be practiced today. And the promise stands: the one who is faithful in a very little will hear, at the last, the only commendation that matters: &ldquo;Well done, good and faithful servant.&rdquo;",
    ],
  },
  {
    id: "Faithfulness Over a Lifetime",
    heading: "Faithfulness Over a Lifetime",
    paragraphs: [
      "The Christian life is not a sprint but a marathon, and faithfulness is the call to run it to the very end. To the suffering church in Smyrna, the risen Christ said, &ldquo;Be faithful unto death, and I will give you the crown of life&rdquo; (Revelation 2:10). The crown is promised not to those who begin well but to those who endure to the end. Faithfulness over a lifetime &mdash; lifelong perseverance through every season, trial, and temptation &mdash; is the great challenge and the great glory of the Christian journey.",
      "Eugene Peterson borrowed a striking phrase to describe the disciple&rsquo;s life: &ldquo;a long obedience in the same direction.&rdquo; This captures something essential. Faithfulness is not the excitement of a single dramatic decision but the sustained, unglamorous continuance in one direction across decades. It is the steady plodding of the pilgrim who keeps walking when the path is dull, when the scenery does not change, when others turn back. The Christian life is won not by intensity but by direction held over time.",
      "There is a crucial difference between a sprint and a marathon in the Christian life. Many begin with great enthusiasm, a burst of zeal that flames brightly and then burns out. But faithfulness is measured over the long haul. The question is not how fervently we began but whether we are still walking with God after thirty, forty, fifty years &mdash; still trusting, still obeying, still loving, still serving. The marathon requires endurance, pacing, and a settled determination to keep going when the early excitement has long faded.",
      "Lifelong faithfulness expresses itself in the great commitments of life. It is faithfulness in marriage &mdash; keeping the vow &ldquo;till death do us part&rdquo; through decades of joy and difficulty, choosing love when feelings ebb, remaining loyal when the world counsels escape. It is faithfulness in vocation &mdash; doing honest, diligent work over a lifetime as service to God. It is faithfulness in discipleship &mdash; following Christ steadily across the years, through doubt and dryness, through suffering and success, never abandoning the path. These long obediences are the proving ground of genuine faith.",
      "There is something deeply moving and powerfully persuasive in the witness of those who finish well &mdash; the aged saint who has walked with God for a lifetime and stands at the end still trusting, still faithful, still full of hope. Such lives are sermons more eloquent than any words. They demonstrate that God is faithful to keep those who keep walking with him, that his grace is sufficient across every season, that the long road home is worth traveling. The faithfulness of the elderly believer is a treasure to the whole church.",
      "Faithfulness over a lifetime is not maintained by our strength alone but by the keeping power of God. Paul was confident &ldquo;that he who began a good work in you will bring it to completion at the day of Jesus Christ&rdquo; (Philippians 1:6). We persevere because God preserves us; we hold on because he holds us. Yet this divine keeping does not make us passive &mdash; it summons our active, daily perseverance, our continual returning, our refusal to quit. The faithful God and the faithful believer walk the long road together, and his grace ensures we will arrive.",
      "So the call to every Christian is endurance &mdash; to keep going, to remain true, to run with perseverance the race set before us, looking to Jesus (Hebrews 12:1-2). There will be seasons of weariness, valleys of darkness, temptations to turn aside. But the goal is to be still walking with God at the end, to keep covenant across a lifetime as he keeps covenant with us. Faithfulness over a lifetime is a long obedience in the same direction &mdash; and at its end stands the crown of life.",
    ],
  },
  {
    id: "Found Faithful",
    heading: "Found Faithful: The Goal of the Christian Life",
    paragraphs: [
      "Paul names with striking simplicity what God requires of those entrusted with his work: &ldquo;It is required of stewards that they be found faithful&rdquo; (1 Corinthians 4:2). Not that they be found successful, impressive, gifted, or famous &mdash; but faithful. This single requirement reorients the whole of the Christian life. We are stewards, managing what belongs to another, and the one thing asked of a steward is faithfulness to the master&rsquo;s trust. To be found faithful is the goal, the summons, and the standard by which our lives will finally be weighed.",
      "This cuts directly against the values of a culture obsessed with results, metrics, and visible achievement. The world measures a life by its accomplishments, its influence, its size. But God measures faithfulness rather than results. He does not ask whether we were impressive but whether we were faithful with what he gave us. The servant with one talent who invested it faithfully received the same commendation as the servant with five. The measure is not the magnitude of the outcome but the faithfulness of the stewardship.",
      "This is liberating news for every believer who feels small or unsuccessful by worldly standards. You are not responsible for results that lie in God&rsquo;s hands &mdash; for the harvest, the numbers, the visible fruit. You are responsible only to be faithful: to do your part, to keep your trust, to use what you have been given. The outcome belongs to God. This frees us from the crushing burden of having to be impressive and lets us rest in the simple, achievable calling to be faithful right where we are.",
      "The ultimate hope that draws the faithful steward forward is the word of commendation from the master&rsquo;s own lips: &ldquo;Well done, good and faithful servant&rdquo; (Matthew 25:21). To hear those words at the end &mdash; not the applause of the world, not the verdict of history, but the approval of God himself &mdash; is the deepest longing of the faithful heart. Everything we do, every hidden act of faithfulness, every quiet perseverance, is oriented toward that final hour when the Lord himself will receive his servants and pronounce them faithful.",
      "Faithfulness in a fickle and uncommitted age is itself a powerful witness. We live in a time of broken vows, abandoned commitments, and chronic restlessness, where loyalty is rare and constancy almost suspect. In such an age, the believer who simply remains faithful &mdash; to God, to spouse, to calling, to community &mdash; shines like a light. The watching world, weary of its own faithlessness, is arrested by the sight of a life that keeps its commitments. Faithfulness preaches the gospel without a word.",
      "We must guard against confusing faithfulness with mere success, for they are not the same and can even diverge. Many of God&rsquo;s most faithful servants saw little visible fruit in their lifetimes &mdash; prophets who were ignored, missionaries who labored for decades with few converts, saints who suffered in obscurity. By worldly measure they failed; by heaven&rsquo;s measure they triumphed, for they were found faithful. Jesus himself appeared to end in apparent defeat at the cross, yet his was the most faithful and fruitful life ever lived. Faithfulness, not visible success, is the true mark of a life well lived.",
      "In the end, faithfulness is the steady thread that runs through a life surrendered to God. It is woven through every season and every sphere &mdash; faithful in little and in much, faithful in trial, faithful over a lifetime, faithful unto death. It reflects the faithfulness of the God who keeps covenant forever, and it culminates in the hope of being found faithful at the last. May it be said of each of us, when our race is run, that we were found faithful &mdash; and may we hear from the One we served those longed-for words: &ldquo;Well done, good and faithful servant. Enter into the joy of your master.&rdquo;",
    ],
  },
];

const videoItems = [
  { videoId: "08Pk6Qd5Mk8", title: "Great Is Thy Faithfulness - The Faithfulness of God" },
  { videoId: "Vc8z8tU0z9Y", title: "Faithful in the Little Things" },
  { videoId: "tT9Kc5L8h0E", title: "A Long Obedience - Lifelong Faithfulness" },
];

export default function ChristianFaithfulnessGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        {/* Hero */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "0.78rem", color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.6rem" }}>
            Faith &amp; Faithfulness
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Faithfulness
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Faithfulness through a Christian lens &mdash; the fruit of the Spirit, the faithfulness of God who keeps covenant forever, being faithful in little and in much, faithfulness over a lifetime, and the call to be found faithful at the last.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;Great is your faithfulness. The steadfast love of the Lord never ceases; his mercies are new every morning.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>Lamentations 3:22-23</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? `rgba(59, 130, 246, 0.12)` : "transparent",
              color: tab === t ? ACCENT : MUTED,
              cursor: "pointer", fontSize: "0.88rem", fontWeight: tab === t ? 600 : 400,
              transition: "all 0.15s ease", whiteSpace: "nowrap" as const,
            }}>
              {t}
            </button>
          ))}
        </nav>

        {/* Text tab content */}
        {currentSection && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>{currentSection.heading}</h2>
            {currentSection.paragraphs.map((para, i) => (
              <p key={i} style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </section>
        )}

        {/* Videos tab */}
        {tab === "Videos" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>Videos</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {videoItems.map((video) => (
                <div key={video.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={video.videoId} title={video.title} />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <h3 style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}>{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Closing callout */}
        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.5rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>Found Faithful</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>Faithfulness is the steady thread that runs through a life surrendered to God &mdash; faithful in little, faithful in much, faithful over a lifetime, faithful unto death. It reflects the God who keeps covenant forever and remains faithful even when we are faithless. May it be said of each of us at the last: found faithful, and welcomed with the words &ldquo;Well done, good and faithful servant.&rdquo;</p>
        </div>
      </main>
    </div>
  );
}
