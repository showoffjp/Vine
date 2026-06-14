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
  "God of All Comfort",
  "Father of Mercies",
  "Sharing in Sufferings",
  "Application",
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
    heading: "Overview of 2 Corinthians 1",
    reference: "2 Corinthians 1:1&ndash;24",
    paragraphs: [
      "Second Corinthians is the most personally revealing of all Paul&rsquo;s letters. Nowhere does the apostle lay bare his inner life, his anguish, his joy, his physical vulnerability, and his pastoral tenderness more openly than in this letter. And that exposure begins immediately &mdash; not gradually after a long greeting, but in the very opening verses of chapter 1, where Paul moves within four sentences from doxology to crisis to theology, weaving them together so tightly that each one illuminates the others. To read 2 Corinthians 1 is to read a man who has been to the edge and come back with something to say about what he found there.",
      "The background matters enormously. Paul had a painful history with the Corinthian congregation. He had founded it (Acts 18), written 1 Corinthians, made at least one painful visit (the &ldquo;sorrowful visit&rdquo; implied in 2 Corinthians 2:1), and written a now-lost severe letter (2:4) that caused him deep anguish to compose. By the time he writes 2 Corinthians, a partial reconciliation has been achieved through the ministry of Titus, but the relationship remains fragile. False apostles have infiltrated the congregation and questioned Paul&rsquo;s credentials, his reliability, and even his personal character. The accusation that he is unreliable because he changed his travel plans (1:15&ndash;17) is a pointed personal attack, and chapter 1 is in part his answer.",
      "But before Paul addresses the travel-plan controversy, he does something characteristically apostolic: he begins with God. The doxology of verses 3&ndash;4 is one of the most concentrated theological statements in Paul&rsquo;s letters: &ldquo;Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction, so that we may be able to comfort those who are in any affliction, with the comfort with which we ourselves are comforted by God.&rdquo; Three verses that have sustained more suffering Christians across more centuries than almost any other words in Scripture.",
      "The chapter then moves into one of the most honest accounts of personal suffering in the New Testament. Paul describes an experience in Asia so severe that he &ldquo;despaired of life itself&rdquo; (1:8) &mdash; the verb suggests utterly and thoroughly overwhelmed, a kind of internal bankruptcy of hope. He does not explain what the affliction was, and the commentators have debated it for centuries: illness? imprisonment? a riot? the burden of the churches? Whatever it was, Paul describes it as being &ldquo;sentenced to death&rdquo; (1:9). And then he states the purpose: &ldquo;But that was to make us rely not on ourselves but on God who raises the dead&rdquo; (1:9). Suffering, in Paul&rsquo;s theology, is not meaningless; it is a crucible in which self-reliance is destroyed and God-reliance is forged.",
      "The second half of the chapter (1:12&ndash;24) addresses the travel-plan accusation. Paul defends his integrity by pointing to the character of his conduct generally (1:12), then explaining that his change of plans was not fickleness but pastoral mercy &mdash; he chose not to make another painful visit (1:23). His famous statement that &ldquo;all the promises of God find their Yes in him&rdquo; (1:20) is not an aside but the theological center of his defense: a man whose entire life is oriented around the God who is eternally &ldquo;Yes&rdquo; in Jesus Christ cannot be a &ldquo;Yes and No&rdquo; person. His character is shaped by the character of his God.",
      "Second Corinthians 1 is, in summary, a theology of affliction rooted in the nature of God. The God Paul describes is not distant from human suffering; he is present in it as the &ldquo;Father of mercies.&rdquo; He does not eliminate suffering; he comforts those in it and then sends them out to comfort others. He does not promise immunity from despair; he promises the resurrection of those who have despaired of life itself. This is not optimism &mdash; it is something far more durable: a theology shaped by both the cross and the empty tomb, expressed by a man who has lived it.",
    ],
  },
  {
    id: "God of All Comfort",
    heading: "God of All Comfort: The Theology of 2 Corinthians 1:3-7",
    reference: "2 Corinthians 1:3&ndash;7",
    paragraphs: [
      "The doxology of 2 Corinthians 1:3&ndash;7 is, in many ways, the theological charter of Christian pastoral ministry and the most concentrated statement in the New Testament about why suffering exists and what God does with it. Paul opens with a berakah &mdash; the traditional Jewish form of blessing God: &ldquo;Blessed be the God and Father of our Lord Jesus Christ.&rdquo; This is not a prayer to God; it is a declaration about God, a public acclamation of his character. Paul is not asking for comfort in these verses; he is announcing who the God of comfort is.",
      "God is called &ldquo;the Father of mercies&rdquo; (ho pater ton oiktirmon). The plural &ldquo;mercies&rdquo; is rich &mdash; it suggests not a single disposition but an abundance, a multitude, a treasury of tender compassion. The Greek word oiktirmos carries the sense of deep compassion that responds to the sight of suffering the way a parent responds to a child in pain &mdash; viscerally, immediately, without calculation. Paul is not describing God as sympathetic from a safe distance. He is describing a God whose very fatherhood is defined by this characteristic: he is the Father whose central attribute toward his suffering children is an inexhaustible well of mercies.",
      "God is also called the &ldquo;God of all comfort&rdquo; (ho theos pases parakleseos). The word paraklesis is the same root as the Paraclete &mdash; the one called alongside to help, the comforter, the advocate. In these opening verses Paul uses the noun or verb for &ldquo;comfort/consolation&rdquo; ten times in five verses &mdash; a deliberate, almost breathless accumulation that insists the reader feel the centrality of this theme. God is not merely a God who sometimes comforts; he is the God of all comfort, which means no form or species of human suffering falls outside the scope of his consoling presence.",
      "The purpose clause of verse 4 is the pastoral hinge on which the whole passage turns: &ldquo;who comforts us in all our affliction, so that we may be able to comfort those who are in any affliction, with the comfort with which we ourselves are comforted by God.&rdquo; The logic is economic: comfort flows from God to Paul, and from Paul to others, and the currency is the same at every exchange. You cannot give what you have not received, but once you have received it you can give it to any who need it. The suffering of the minister is not a disqualification from ministry; it is a qualification for it. The wound becomes the very place from which healing flows.",
      "Paul deepens this in verses 5&ndash;7 with the concept of &ldquo;the sufferings of Christ&rdquo; abounding in the believer&rsquo;s life. This is not metaphorical. Paul is describing a real identification between the sufferings of Jesus on the cross and the sufferings of those who follow him. Elsewhere he speaks of &ldquo;filling up what is lacking in Christ&rsquo;s afflictions&rdquo; (Colossians 1:24) &mdash; not that Christ&rsquo;s atoning work is incomplete, but that the pattern of Christ&rsquo;s suffering-and-resurrection is re-enacted in the lives of his people. When a believer suffers for the sake of the gospel, they are, in a mysterious way, participating in a drama that began at Calvary.",
      "The comfort that accompanies this suffering is equally proportional: &ldquo;as we share abundantly in Christ&rsquo;s sufferings, so through Christ we share abundantly in comfort too&rdquo; (1:5). The abundance is matched &mdash; suffering for suffering, comfort for comfort. This is not a promise that suffering will be short or that it will make sense in the moment. It is a promise that the God who is present in the suffering of his Son is equally present in the suffering of his servants, and that the same resurrection power that reversed Christ&rsquo;s crucifixion is at work in the darkest experiences of those who belong to him.",
      "For Paul, the suffering of apostles like himself is not just personally formative &mdash; it is ecclesially productive. &ldquo;If we are afflicted, it is for your comfort and salvation; and if we are comforted, it is for your comfort, which you experience when you patiently endure the same sufferings that we suffer&rdquo; (1:6). The Corinthians, watching Paul endure, are themselves being formed in endurance. They are learning from his suffering what it looks like to remain in Christ when the pressure is most intense. This is pastoral theology at its most demanding and most beautiful: the leader&rsquo;s own breaking becomes the community&rsquo;s formation.",
    ],
  },
  {
    id: "Father of Mercies",
    heading: "Father of Mercies: The Character of God in Suffering",
    reference: "2 Corinthians 1:3, 9&ndash;10, 20",
    paragraphs: [
      "The title &ldquo;Father of mercies&rdquo; that Paul uses in 2 Corinthians 1:3 is one of the most arresting descriptions of God in all of Paul&rsquo;s letters. It echoes the language of the Psalms and of Lamentations (3:22: &ldquo;The steadfast love of the Lord never ceases; his mercies never come to an end&rdquo;) and draws the entire Old Testament tradition of God&rsquo;s tender compassion toward suffering humanity into this single compact phrase. To call God &ldquo;Father&rdquo; is to invoke the closest and most fundamental relational bond in human experience. To combine it with &ldquo;mercies&rdquo; is to insist that this Father&rsquo;s defining characteristic in relation to his children is not distance, demand, or judgment, but tender compassion responsive to need.",
      "The Hebrew background is illuminating. The Old Testament word most often translated &ldquo;mercies&rdquo; or &ldquo;compassion&rdquo; is rachamim, which is related to the word for womb (rechem). God&rsquo;s mercies in the Old Testament carry the connotation of the love a mother has for the child she carried in her own body &mdash; instinctive, fierce, unable to be indifferent to the child&rsquo;s suffering. Isaiah 49:15 makes the connection explicit: &ldquo;Can a woman forget her nursing child, that she should have no compassion on the son of her womb? Even these may forget, yet I will not forget you.&rdquo; Paul&rsquo;s &ldquo;Father of mercies&rdquo; carries all of this Old Testament freight into his description of the God who comforts suffering apostles.",
      "This character of God is not merely an abstract attribute &mdash; it is demonstrated, for Paul, in the specific crisis he describes in verses 8&ndash;9. Whatever the &ldquo;affliction we experienced in Asia&rdquo; was, its defining feature is this: it brought Paul to the end of himself. He &ldquo;despaired even of life.&rdquo; He felt &ldquo;the sentence of death.&rdquo; These are not polite understatements. Paul is describing what we would today recognize as a crisis of survival &mdash; the kind of experience that strips away every pretension, every self-constructed reserve, every resource the self relies on in ordinary times.",
      "And into that experience, where no human mercy could reach, the Father of mercies came. The purpose Paul identifies is startling in its theological precision: &ldquo;But that was to make us rely not on ourselves but on God who raises the dead&rdquo; (1:9). The God who raises the dead is the only God who is adequate to the extremity Paul faced. A God of general benevolence or philosophical consolation is no help when you have despaired of life itself. But the God who reached into the sealed tomb of Jesus and called him back to life is a God whose resources are not bounded by the threshold of death. Paul had to be brought to the death of self-reliance before he could rely on this God.",
      "The present tense of Paul&rsquo;s testimony in verse 10 is important: &ldquo;He delivered us from such a deadly peril, and he will deliver us. On him we have set our hope that he will deliver us again.&rdquo; Three tenses: past deliverance, present confidence, and future hope. The Father of mercies is not only the God of a single rescue; he is the God of a pattern of rescue that grounds ongoing hope. Every past experience of God&rsquo;s mercies becomes a stone in the foundation of future confidence. Paul&rsquo;s testimony is not &ldquo;God was good to me once&rdquo; but &ldquo;the God who was good to me then is the same God I face now and will face in whatever comes next.&rdquo;",
      "Verse 20 draws together the character of the Father of mercies with the person of the Son: &ldquo;For all the promises of God find their Yes in him.&rdquo; Every promise God has ever made &mdash; of presence, of rescue, of resurrection, of final restoration &mdash; has been ratified in Jesus Christ. The Father of mercies does not merely promise mercy; he delivers it in the person of his Son. This is why Paul can assert his own integrity and reliability (the defense he is mounting against his critics) by pointing to the character of the God he represents: a man whose life is oriented toward the God of &ldquo;Yes&rdquo; in Christ cannot be a fundamentally duplicitous or unreliable person. The character of the Father of mercies shapes the character of those who truly know him.",
    ],
  },
  {
    id: "Sharing in Sufferings",
    heading: "Sharing in Sufferings: Paul's Theology of Affliction",
    reference: "2 Corinthians 1:5&ndash;11",
    paragraphs: [
      "Paul&rsquo;s theology of suffering, concentrated in 2 Corinthians 1:5&ndash;11, is among the most distinctive and challenging aspects of his thought. It runs against every instinct that tells us suffering is the enemy, the problem to be solved, the evidence that something has gone wrong. For Paul, affliction is neither meaningless nor punitive for the believer; it is purposive &mdash; shaped by God for outcomes that cannot be achieved any other way &mdash; and it is participatory, a sharing in realities that connect the sufferer to the crucified and risen Christ and to the suffering members of his body.",
      "The key phrase in verse 5 is &ldquo;the sufferings of Christ abound in us.&rdquo; This is not Paul describing his own sin as a kind of suffering Christ endured. It is Paul describing the way the pattern of Christ&rsquo;s own suffering is reproduced in those who belong to him. Christ suffered rejection, misunderstanding, physical pain, and death for the sake of the mission the Father gave him. The apostolic life &mdash; and in some measure every Christian life &mdash; participates in that same pattern. The suffering is not identical, but it rhymes. The apostle who is beaten in prison (Acts 16), the Christian who is excluded from her family for her faith, the pastor who is falsely accused by those he served &mdash; all are, in Paul&rsquo;s framework, sharing in the sufferings of the Christ who was crucified outside the city by those he came to save.",
      "The proportional comfort of verse 5 is not a promise that every Christian will be emotionally comfortable. It is a promise about the adequacy of God&rsquo;s consoling presence in proportion to the depth of the trial. The deeper the darkness, the more of God&rsquo;s comfort is available &mdash; not because God gives more to those who suffer more as a kind of compensation, but because suffering creates a capacity to receive consolation that ordinary comfort cannot create. A person who has only ever experienced mild difficulty has a shallow capacity to receive and give comfort. A person who has been to the far edge and back has been formed in ways that make them capable of consoling others at depths the untested cannot reach.",
      "The Asian crisis of verses 8&ndash;9 is Paul&rsquo;s personal exhibit of this theology lived out. The language he uses &mdash; &ldquo;burdened beyond measure, beyond strength, so that we despaired of life itself&rdquo; &mdash; is the vocabulary of someone describing the outer limit of human endurance. The Greek word for &ldquo;despaired&rdquo; (exaporeomai) is intensified by the prefix: it means to be utterly without a way out, to have found the end of every exit. Paul did not merely feel bad. He hit the wall of his own resources and found nothing beyond them.",
      "But then he found God beyond them. And this is the theological point that the verse makes so precisely: the purpose of the extreme affliction was not sadistic or arbitrary but formative &mdash; &ldquo;that was to make us rely not on ourselves but on God who raises the dead.&rdquo; The God Paul needed at that moment was not a God of mild encouragement or therapeutic insight. He needed the God who raises the dead &mdash; the God whose power is not limited by the threshold of death. And the path to genuinely relying on that God, rather than merely affirming him theologically, was the destruction of Paul&rsquo;s alternative resources.",
      "Verses 10&ndash;11 move from Paul&rsquo;s theology of affliction to the role of the community in it. Paul writes: &ldquo;You also must help us by prayer, so that many will give thanks on our behalf for the blessing granted us through the prayers of many.&rdquo; The apostle who has the deepest theology of divine comfort does not use it to become independent of human community. He asks for prayer. He names the specific mechanism by which God&rsquo;s blessing comes to him: through the prayers of many. The God of all comfort works through the intercession of the community, not instead of it. And when the deliverance comes, it becomes the occasion for collective thanksgiving &mdash; the many who prayed, the one who was delivered, the God who answered, all drawn together into a single act of gratitude.",
      "This is Paul&rsquo;s mature theology of suffering: it is purposive (forming reliance on God), participatory (sharing in Christ&rsquo;s sufferings), proportional (comfort proportional to affliction), communal (sustained and celebrated by the body), and ultimately eschatological (pointing toward the resurrection that is the final answer to every darkness). It is not an easy theology to live. Paul did not find it easy &mdash; he despaired of life. But it is a theology that survives the hardest tests because it was forged in them.",
    ],
  },
  {
    id: "Application",
    heading: "Applying 2 Corinthians 1 Today",
    reference: "2 Corinthians 1 for the Present Life of Faith",
    paragraphs: [
      "Second Corinthians 1 speaks with startling directness to the contemporary Christian experience of suffering, doubt, loss, and the temptation to conclude that God is either absent or indifferent when life is most difficult. Paul&rsquo;s testimony is that he has been to those places &mdash; literally, to the edge of life &mdash; and that what he found there was not the silence of an absent God but the comfort of the Father of mercies. The application of this chapter begins with taking that testimony seriously and allowing it to reframe what suffering means.",
      "The first application is one of the most counterintuitive in Christian experience: your suffering qualifies you for ministry rather than disqualifying you from it. The logic of 2 Corinthians 1:4 is unambiguous &mdash; God comforts us in our affliction &ldquo;so that we may be able to comfort those who are in any affliction.&rdquo; The purpose of the comfort you have received is not merely your own relief; it is the equipping of you for the ministry of comfort to others. The question to ask about your own history of suffering is not just &ldquo;why did this happen to me?&rdquo; but &ldquo;who in my community is experiencing what I have experienced, and what do I now have to give them that I did not have before?&rdquo; Suffering, in Paul&rsquo;s economy, produces ministers.",
      "The second application concerns the language we use about God in the darkest moments. Paul begins not with a complaint but with a berakah &mdash; a blessing of God&rsquo;s character. He names God as &ldquo;Father of mercies&rdquo; before he names his own suffering. This ordering is not forced cheerfulness; it is a deliberate theological discipline. Before we describe what is happening to us, we declare who God is. This practice &mdash; praise before petition, character before circumstances &mdash; does not deny the reality of suffering; it refuses to allow suffering to be the first and loudest voice in the room. The application is the practice of beginning prayer, even in the darkest seasons, with the naming of who God is: the Father of mercies, the God of all comfort, the one who raises the dead.",
      "The third application concerns the experience of being &ldquo;burdened beyond measure, beyond strength&rdquo; (1:8). Many Christians carry a private shame about having reached that point &mdash; as though genuine faith would have prevented the breakdown, the despair, the crisis of survival. Paul&rsquo;s testimony dismantles that shame. He reached the same place. He despaired of life itself. He felt the sentence of death. And the purpose was not that he had failed in faith but that his faith was being relocated from his own resources to the God who raises the dead. The person who has hit the wall of their own strength is not a failed Christian; they are a Christian standing at the exact place where the deepest reliance on God begins.",
      "The fourth application is the practice of intercession for those who are suffering. Paul explicitly credits the prayers of the Corinthians as instrumental in his deliverance (1:11). He does not describe his rescue as a purely private transaction between himself and God. The prayers of the community were part of the mechanism of grace. This means that intercessory prayer for the suffering members of a church is not a second-tier ministry &mdash; it is a primary means by which God&rsquo;s comfort reaches the afflicted. When we pray for those who are in crisis, we are not merely expressing sympathy; we are, in Paul&rsquo;s framework, participating in the channel through which God&rsquo;s mercy flows.",
      "Finally, the &ldquo;Yes&rdquo; of verse 20 has a daily application that reaches far beyond the travel-plan controversy Paul is addressing. Every promise God has made &mdash; of presence, of grace, of sufficient strength, of final resurrection &mdash; has been confirmed and sealed in Jesus Christ. When life seems to say &ldquo;No&rdquo; &mdash; when the prayer is not answered as hoped, when the suffering continues, when the darkness does not lift &mdash; the &ldquo;Yes&rdquo; of God in Christ stands unchanged and unretracted. Paul&rsquo;s theology does not guarantee immediate relief; it guarantees a God who is permanently, irrevocably, cosmically committed to the welfare of those who are his. The &ldquo;Yes&rdquo; spoken in the resurrection of Jesus is the loudest word in the universe, and it has not been unsaid. To live from that &ldquo;Yes&rdquo; is to find, in the midst of the deepest affliction, the Father of mercies who never changes and never runs out.",
    ],
  },
];

const videoItems = [
  { videoId: "3sDmYGUAKvM", title: "2 Corinthians 1 - God of All Comfort (Bible Study)" },
  { videoId: "QYGg7AMEQGU", title: "BibleProject - 2 Corinthians Overview" },
  { videoId: "2GxMQ5tFVMc", title: "Father of Mercies - Comfort in Suffering from 2 Corinthians" },
  { videoId: "YQ0sbBzMzrY", title: "Suffering and the Sovereignty of God - Paul in 2 Corinthians 1" },
];

export default function TwoCorinthiansOneGuidePage() {
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
            2 Corinthians 1 &mdash; God of All Comfort
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The Father of mercies and God of all comfort who consoles us in all our affliction, so that we may comfort others with the very comfort we ourselves have received from God.
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

        <div style={{ marginTop: "3rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 1.5rem", color: TEXT }}>Video Teaching on 2 Corinthians 1</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>All the Promises of God Find Their Yes in Him</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Second Corinthians 1 begins in doxology and ends in defense, but at its center it holds one of the most sustaining realities in all of Paul&rsquo;s letters: the God who comforts us is the Father of inexhaustible mercies, and every comfort he gives us becomes a gift we can give to others. Whatever affliction you are carrying, you are not carrying it alone &mdash; the Father of mercies is present in it, the sufferings of Christ accompany it, and the comfort that meets you there will one day flow through you to someone who needs it as much as you do now.
          </p>
        </div>
      </main>
    </div>
  );
}
