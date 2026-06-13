"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["The Theology of Calling", "Calling vs Career", "Discerning Gods Will", "Gifts and the Body", "Purpose in Every Season", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "The Theology of Calling",
    heading: "The Theology of Calling: Answering a Divine Caller",
    paragraphs: [
      "The Christian concept of &ldquo;vocation&rdquo; comes from the Latin vocare, &ldquo;to call&rdquo; &mdash; the conviction that human work and life are a response to a divine Caller, not merely a self-chosen path. This single word carries an entire theology. To speak of vocation is to confess that we are not autonomous selves inventing our own purposes from scratch, but creatures addressed by a God who summons us. Behind every genuine calling stands a Caller, and the question of purpose is therefore never finally about what we want to make of ourselves but about how we will answer the One who has called us by name.",
      "The Reformation recovered a revolutionary idea: that the calling of God extends to all of life, not just to &ldquo;religious&rdquo; work. In the medieval imagination, &ldquo;vocation&rdquo; had narrowed to mean the call to be a priest, monk, or nun &mdash; the so-called spiritual estate &mdash; while ordinary labor was regarded as a lower, merely earthly affair. The Reformers shattered this hierarchy, insisting that God calls people into the world, not just out of it, and that the daily work of ordinary Christians is genuine divine vocation.",
      "Luther insisted that a farmer plowing a field, a mother caring for a child, and a magistrate governing a city are all serving God as truly as any priest or monk. For Luther, the milkmaid at her pail and the cobbler at his bench were doing holy work, because God himself was at work through them to provide for the world. The neighbor is fed, clothed, governed, and cared for through the ordinary vocations of ordinary people, and in serving the neighbor they serve God. Work, in this vision, becomes a mask of God &mdash; the means through which he loves and sustains his creation.",
      "There is no sacred-secular divide in which only ministry counts as calling. This is liberating news for the vast majority of believers who will never stand in a pulpit. The accountant, the nurse, the electrician, the teacher, the homemaker, the artist &mdash; each occupies a station to which God has called them and through which God works. The kingdom of God is not advanced only in churches and missions but in faithful, excellent, love-driven work across the whole range of human callings. To divide life into the holy and the secular is to miss the breadth of God&rsquo;s claim on all of it.",
      "The deepest layer of calling is the call to belong to Christ himself &mdash; what theologians call the &ldquo;primary calling.&rdquo; Before God calls us to any task, he calls us to himself. The New Testament speaks of believers as &ldquo;those who are called to belong to Jesus Christ&rdquo; (Rom 1:6) and &ldquo;called&hellip; into the fellowship of his Son&rdquo; (1 Cor 1:9). This primary calling &mdash; the summons into relationship with God &mdash; precedes and grounds every secondary calling to particular work. We are not first workers who happen to be Christians; we are first Christ&rsquo;s, and our work flows from that belonging.",
      "Os Guinness defines calling as &ldquo;the truth that God calls us to himself so decisively that everything we are, everything we do, and everything we have is invested with a special devotion and dynamism lived out as a response to his summons.&rdquo; This definition captures the comprehensive nature of Christian vocation. Calling is not a narrow matter of choosing the right career; it is the total reorientation of a life around the One who has called it. Every part of who we are &mdash; our talents, our possessions, our relationships, our hours &mdash; is taken up into a single dynamic response to God&rsquo;s summons.",
      "Purpose begins not with finding the right job but with being claimed by the right Person. This is the crucial reordering the theology of calling demands. The anxious search for purpose so often starts at the wrong end &mdash; with introspection, career assessments, and the frantic effort to discover our one true destiny. But the Christian answer locates purpose first in a relationship, not a role. To be claimed by Christ is already to have found the deepest purpose of one&rsquo;s existence; everything else &mdash; the particular shape of our work and service &mdash; flows out from that settled center.",
    ],
  },
  {
    id: "Calling vs Career",
    heading: "Calling vs Career: Where Deep Gladness Meets Deep Hunger",
    paragraphs: [
      "A crucial distinction: your career is what you are paid to do; your calling is who you are made to be and what you are made to give. The two may overlap, but they are not identical. A career is a particular configuration of employment &mdash; a job, a profession, a paycheck. A calling is deeper and wider: it encompasses the whole of how you are meant to serve God and others with the life you have been given. Confusing the two is one of the most common and costly mistakes in the Christian search for purpose.",
      "Many people find their primary calling expressed in work that earns no money &mdash; parenting, caregiving, volunteering, creating. Some of the most significant work in the world appears on no payroll. The parent raising children, the daughter caring for an aging mother, the volunteer mentoring at-risk youth, the artist creating beauty with no guarantee of sale &mdash; these are callings of the highest order, even though the market assigns them no wage. To measure calling by income is to adopt the world&rsquo;s scale of value rather than the kingdom&rsquo;s.",
      "Others have a job that pays the bills and a calling lived out elsewhere. For many faithful Christians, the day job is not the locus of their deepest calling; it is the honest means by which they support a calling expressed in other arenas &mdash; in the church, the neighborhood, the home, the creative life. There is no shame in working a job that simply provides, while pouring one&rsquo;s deepest energies into a calling that work does not contain. The dignity of providing for oneself and one&rsquo;s family is itself part of faithful Christian living.",
      "Frederick Buechner offered the most quoted definition: &ldquo;The place God calls you to is the place where your deep gladness and the world&rsquo;s deep hunger meet.&rdquo; This points to the intersection of three things: what brings you joy and life, what you are gifted to do well, and what genuine need you can meet in the world. Calling is found neither in pure self-fulfillment that ignores the world&rsquo;s needs, nor in joyless duty that crushes the self. It lives at the meeting point &mdash; where what you love to do and what the world genuinely needs converge in the work your gifts make possible.",
      "Calling is not always glamorous or grand; often it is hidden, ordinary, and faithful. We are tempted to imagine calling as something dramatic and visible, a grand destiny that sets us apart. But most callings are quiet: the faithful presence of a good teacher, the steady labor of an honest tradesman, the daily love of an attentive parent. The kingdom is built far more by countless small acts of faithful obedience than by a few spectacular careers. To despise the ordinary calling is to misunderstand how God characteristically works in the world.",
      "And calling can shift across seasons &mdash; the call of the twenties differs from the call of the fifties. Vocation is not a single fixed point fixed forever in youth but a living thing that changes shape as life unfolds. The energetic outward calling of early adulthood may give way to the deep relational calling of mid-life, and then to the reflective, prayerful, mentoring calling of later years. To expect one&rsquo;s calling to remain static across an entire life is to set oneself up for confusion when the seasons inevitably turn.",
      "The error is to collapse calling into career, so that a job change or job loss becomes an identity crisis. When a person has fused their entire sense of purpose and worth into their occupation, the loss of that occupation feels like the loss of the self. But your deepest calling &mdash; to know, love, and serve God and neighbor &mdash; is stable even when your circumstances are not. Jobs come and go; the economy shifts; health fails; seasons change. Through all of it, the primary calling endures, an anchor that no layoff or transition can sever.",
    ],
  },
  {
    id: "Discerning Gods Will",
    heading: "Discerning God's Will: Freedom and Wisdom in Decision",
    paragraphs: [
      "One of the most anxious questions for many Christians is &ldquo;How do I know God&rsquo;s will for my life?&rdquo; Beneath the question often lies a quiet dread &mdash; the fear of missing the one path God intended, of taking a wrong turn that forfeits his best plan. This anxiety can be paralyzing, freezing believers in indecision as they wait for a certainty that rarely comes in the form they expect. The good news is that Scripture addresses this question far more directly, and far more freeingly, than the anxious heart assumes.",
      "The Bible offers more guidance than people often realize, though usually not the specific, advance certainty they want. We tend to want God&rsquo;s will as a detailed itinerary handed down before we set out &mdash; this job, this city, this person, this exact next step. But God&rsquo;s guidance more often takes the form of wisdom for the journey than a map read in advance. He promises to lead us, but generally as we walk, not by removing the need to trust him with an uncertain future.",
      "Scripture is clear that God&rsquo;s revealed will includes our sanctification (1 Thess 4:3), our gratitude (1 Thess 5:18), and our doing of justice and love (Micah 6:8) &mdash; this is the bulk of God&rsquo;s will, and it is already disclosed. The overwhelming majority of what God wills for your life is not hidden at all. He has plainly revealed that he wants you to become holy, to give thanks in all circumstances, to act justly, to love mercy, and to walk humbly with him. A person consumed with finding the secret will of God for which city to live in may be neglecting the vast, clear will of God already spread open before them in the pages of Scripture.",
      "For specific decisions (which job, where to live, whom to marry), the tradition counsels a combination: prayer, Scripture, wise counsel from mature believers, attention to your gifts and desires, awareness of open and closed doors, and a willingness to step out in faith and trust God to redirect if needed. Discernment is not a magic formula but a wise process &mdash; bringing the decision before God, searching the Scriptures, seeking the input of those who know us and love God, weighing how we are gifted and what stirs our hearts, noticing the doors that open and close, and then acting in faith rather than waiting endlessly for a sign that may never arrive.",
      "Importantly, God is more interested in our character than in our perfect navigation of decisions; he is sovereign enough to use even our imperfect choices. The Father&rsquo;s primary project is not to maneuver us flawlessly through a maze of decisions but to form Christ in us. And his sovereignty means that he is not thwarted by our missteps. He weaves even our mistakes into his good purposes, redeeming wrong turns and bringing good out of imperfect choices made in sincere desire to follow him.",
      "The pressure to find the single &ldquo;perfect&rdquo; will of God can become paralyzing. The notion that there is exactly one right choice in every decision, and that choosing wrongly forfeits God&rsquo;s best, is a heavy and ultimately unbiblical burden. It turns the Christian life into a high-stakes guessing game and the loving Father into a hider of secrets who punishes the wrong guess. This is not the God of Scripture, who delights to guide his children and does not set traps for those who earnestly seek to honor him.",
      "The freedom of the gospel is that, walking in obedience and wisdom, we may make decisions with confidence, trusting a God who guides his children and works all things for good. Within the wide boundaries of God&rsquo;s revealed will, the believer has real freedom &mdash; freedom to choose, to use sanctified judgment, to step forward without crippling fear. We are not abandoned to chance, nor are we shackled to a hidden script. We are led by a faithful God who has promised that all things work together for good to those who love him (Rom 8:28), and that promise frees us to decide and to live with courage.",
    ],
  },
  {
    id: "Gifts and the Body",
    heading: "Gifts and the Body: Calling Discovered in Community",
    paragraphs: [
      "God equips every believer for their calling through spiritual gifts. No Christian is left without the resources needed to serve. At conversion, the Spirit not only indwells but endows &mdash; granting to each believer particular capacities for building up the church and serving the world. The question of calling, then, is never &ldquo;Do I have anything to offer?&rdquo; but &ldquo;What has God given me to offer, and how shall I steward it?&rdquo; Every believer is gifted, and therefore every believer has a contribution to make.",
      "The New Testament lists various gifts (Romans 12, 1 Corinthians 12, Ephesians 4, 1 Peter 4) &mdash; teaching, serving, leading, encouraging, giving, mercy, hospitality, and more &mdash; given by the Spirit &ldquo;for the common good&rdquo; (1 Cor 12:7). The lists are diverse and not identical, suggesting they are illustrative rather than exhaustive. What unites them is their purpose: these gifts are not granted for private enjoyment or personal advancement but for the common good of the body. They are given to be given away, deployed in service rather than hoarded for the self.",
      "Discerning your calling involves discerning your gifts: what has God enabled you to do that builds others up? A fruitful path to clarity about calling runs through honest attention to gifting. Where do you find that your efforts genuinely strengthen and bless others? What do people consistently thank you for? Where does your contribution seem to bear fruit beyond your own striving? These are clues to the gifts God has given, and the gifts are clues to the calling, for God does not typically call us to fruitfulness in areas where he has given us nothing to work with.",
      "This discernment happens not in isolation but in community &mdash; others often see our gifts before we do, and the body of Christ is the context in which gifts are recognized, developed, and exercised. We are poor judges of ourselves, prone both to false modesty and to inflated self-assessment. But the community that knows us can name what we cannot see. Often a calling is first recognized not in private introspection but in the affirming words of others: &ldquo;You have a gift for this.&rdquo; The body is the workshop in which gifts are identified, sharpened, and put to use.",
      "The image of the body is key: no member is dispensable, no gift is superior, and the foot must not wish to be a hand (1 Cor 12:15-26). Paul&rsquo;s great metaphor dismantles both pride and envy. The dramatic, visible gifts are not superior to the quiet, hidden ones; the eye cannot say to the hand, &ldquo;I have no need of you.&rdquo; And the foot is not to despise its own calling by coveting the hand&rsquo;s. Each member matters; each has an indispensable place; the health of the whole depends on each part fulfilling its own particular function rather than wishing to be something else.",
      "Calling, in this light, is not primarily about self-fulfillment but about contribution &mdash; the place where your particular gifts serve the whole. The modern search for purpose often turns inward, treating calling as a means of self-actualization. The biblical vision turns outward: your gifts are for the building up of others, and your calling is found in the service they make possible. This is paradoxically more fulfilling than self-focused striving, for we are made to find ourselves precisely in giving ourselves away for the good of others and the glory of God.",
      "Finding purpose, then, is less a matter of looking inward to discover a hidden destiny and more a matter of looking outward to see where your gifts can serve a real need in the body and the world. The question shifts from &ldquo;What will fulfill me?&rdquo; to &ldquo;Where does what God has given me meet a genuine need I can serve?&rdquo; This outward orientation relieves the crushing pressure of self-discovery and replaces it with the freeing work of self-giving. Purpose is found not by gazing into our own depths but by lifting our eyes to the needs around us and offering our gifts to meet them.",
    ],
  },
  {
    id: "Purpose in Every Season",
    heading: "Purpose in Every Season: Faithfulness Over Greatness",
    paragraphs: [
      "A robust theology of calling sustains purpose through every season of life, including those the world deems unproductive. The world measures worth by output, and so it consigns whole categories of people &mdash; the very young, the very old, the sick, the unemployed &mdash; to the margins of meaning. But Christian vocation rests on a different foundation entirely. Because calling is rooted in belonging to God and serving him, it cannot be canceled by any season, however the world might rate that season&rsquo;s productivity.",
      "The young person discerning a path, the parent in the thick of child-rearing, the worker in an unglamorous job, the unemployed person in a season of waiting, the retiree, the chronically ill, the elderly &mdash; each has a calling, because calling is rooted in being God&rsquo;s and being for God and neighbor, not in worldly productivity. No life stage is a vocational vacuum. The student, the stay-at-home parent, the laid-off worker, the patient, the retiree &mdash; all stand within a calling, because the call is to be God&rsquo;s and to love as he loves, and that call can be answered in any circumstance.",
      "Even a life of apparent limitation can be profoundly purposeful: the contemplative in prayer, the sufferer who bears witness, the elderly saint who intercedes. The world sees only diminished capacity; faith sees hidden fruitfulness. The bedridden believer who prays is doing real kingdom work. The sufferer whose patient endurance testifies to Christ is preaching a sermon no pulpit could match. The elderly intercessor, unable to do much that the world counts, may be accomplishing more in the unseen realm than the busiest executive. Limitation is not the end of calling; it is often the refining of it.",
      "The parable of the talents (Matt 25) teaches that we are responsible to invest what we have been given &mdash; whether much or little &mdash; not to envy what others have. The servant with one talent was not condemned for having little but for burying what he had. The point is stewardship, not size. God does not ask us to account for the gifts he gave to others, only for the faithful investment of what he entrusted to us. To compare our portion enviously with another&rsquo;s is to miss the whole logic of the parable, which is that faithfulness with our own allotment, however modest, is what God requires and rewards.",
      "The goal is faithfulness, not greatness: to hear at the last, &ldquo;Well done, good and faithful servant&rdquo; (Matt 25:21). Notice the master&rsquo;s commendation &mdash; not &ldquo;good and successful,&rdquo; nor &ldquo;good and impressive,&rdquo; but &ldquo;good and faithful.&rdquo; The verdict that matters most at the end of life is not the scale of our achievements but the fidelity of our stewardship. This relieves us of the tyranny of ambition and the despair of comparison. We are not called to be great; we are called to be faithful, and faithfulness is possible in the smallest and most hidden of lives.",
      "Purpose is found not by escaping your actual life for an imagined ideal one, but by offering your real life &mdash; with its particular gifts, limits, and circumstances &mdash; to God, who delights to use ordinary people for his purposes. The fantasy of a different, better life &mdash; the one we would be living if only circumstances were otherwise &mdash; is a thief of present purpose. God does not call the imagined self in the imagined situation; he calls the actual self in the actual situation. The path to purpose runs not through escape but through surrender &mdash; offering the real life, just as it is, to the God who specializes in using the ordinary.",
      "Scripture is full of God working through unlikely, ordinary, and limited people: shepherds and fishermen, the barren and the aged, the obscure and the overlooked. He has never required impressive material to accomplish his purposes; indeed, he often chooses the weak and lowly precisely to display that the power belongs to him and not to us (1 Cor 1:27-29). Whatever your season, whatever your gifts or limits, your life laid open before God is enough &mdash; not because of what you bring, but because of what he delights to do through those who offer themselves to him.",
    ],
  },
];

const videoItems = [
  { videoId: "Bv_Oj4w3qBg", title: "Tim Keller on Vocation and Calling" },
  { videoId: "Wfn0Wx5oWdE", title: "How to Discover Your Calling - A Christian View" },
  { videoId: "1lZj92eMVpA", title: "Finding Gods Will for Your Life" },
];

export default function ChristianPurposeCallingGuidePage() {
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
            Faith &amp; Calling
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Purpose and Calling
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Discovering your calling as a Christian &mdash; the theology of vocation, the difference between calling and career, how to discern God&rsquo;s will, the universal call to follow Christ and the particular call to specific work, and finding purpose in every season of life.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;The place God calls you to is the place where your deep gladness and the world&rsquo;s deep hunger meet.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>Frederick Buechner</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? `rgba(58, 125, 86, 0.12)` : "transparent",
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
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>Claimed Before You Are Called</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>Purpose begins not with finding the right job but with being claimed by the right Person. Your deepest calling &mdash; to know, love, and serve God and neighbor &mdash; is stable even when your circumstances are not. Offer your real life, with its particular gifts, limits, and season, to the God who delights to use ordinary people for his purposes, and aim not at greatness but at faithfulness: &ldquo;Well done, good and faithful servant.&rdquo;</p>
        </div>
      </main>
    </div>
  );
}
