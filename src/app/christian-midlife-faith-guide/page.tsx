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
  "The Midlife Crisis Is Real",
  "Disillusionment and the Church",
  "Confronting Mortality",
  "Rediscovering Vocation",
  "The Dark Night and Deeper Faith",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "The Midlife Crisis Is Real",
    heading: "The Midlife Crisis Is Real",
    paragraphs: [
      "The phrase &ldquo;midlife crisis&rdquo; was coined by psychologist Elliott Jaques in 1965 after observing a pattern in creative artists: around age 35&ndash;45, many experienced a significant disruption &mdash; sometimes precipitating new creative work of greater depth, sometimes triggering destructive behavior. The phenomenon is real and common, though its expression varies widely. Jaques noticed that artists who navigated this passage well emerged with work that was qualitatively different from their earlier output &mdash; deeper, less concerned with novelty, more willing to engage with darkness and ambiguity. Those who did not navigate it well often fell apart. The disruption is not a sign of failure; it is an invitation.",
      "The typical triggers of midlife crisis are well-documented and remarkably consistent across cultures: the death of a parent, which confronts a person with their own mortality for the first time in a fully embodied way; the realization that certain life paths are now permanently closed &mdash; the career not pursued, the place not lived, the person not married; the gap between the life one hoped to have and the life one actually has, which becomes impossible to ignore in the middle years; the departure of children from the home; the plateau of career achievement; and the first sustained encounter with the physical evidence of aging. Each of these triggers operates, at bottom, as a confrontation with finitude.",
      "For Christians, these triggers are compounded by spiritual questions that earlier life stages had deferred. The faith of one&rsquo;s twenties was often carried on the momentum of community, certainty, and emotional warmth. The middle years strip those props away one by one, and the questions that remain are harder and more personal: Is this all there is? Have I wasted my life? Does God actually care about me personally, or have I been serving an idea? Was the faith I was given real, or was it a form of cultural inheritance I&rsquo;ve never actually examined? These are not signs of spiritual decline. They are signs of spiritual maturation attempting to happen.",
      "The developmental psychologist Daniel Levinson, whose landmark study &ldquo;The Seasons of a Man&rsquo;s Life&rdquo; (1978) documented the predictable structure of adult development across genders and cultures, found that the midlife transition &mdash; which he dated roughly from 40 to 45 &mdash; was one of the most significant developmental passages of adulthood. Unlike adolescence, it had received almost no cultural or religious preparation. Young adulthood comes with graduation ceremonies, marriage rituals, and clear markers of passage. Midlife arrives without ceremony, its disruptions pathologized as crisis rather than recognized as passage, its questions dismissed as self-indulgence rather than honored as spiritual necessity.",
      "The church has, by and large, failed to provide a theology of midlife. Its formation resources are heavily weighted toward youth and young families; its models of adult faith tend to project a linear growth curve in which more years of faithful practice produce more spiritual stability and contentment. The midlife person who instead experiences destabilization, doubt, and disillusionment is given the implicit message that something has gone wrong with them &mdash; that they are backsliding rather than, as is often actually the case, being called into a more mature and more honest relationship with God than they have previously known.",
      "The Christian tradition does have resources for midlife, though they are rarely deployed in that frame. The dark night of the soul, the tradition of midlife conversion (Augustine was thirty-two; Thomas Aquinas experienced a crisis at forty-nine), the pattern in the psalms of disorientation followed by new orientation &mdash; all of these map the midlife territory with more precision and more hope than the dominant cultural narrative of pathology and panic. The midlife crisis, Christianly understood, is an invitation to trade a faith that was always partly a cultural performance for a faith that might actually be one&rsquo;s own.",
      "What this requires, practically, is a community willing to hold the midlife person in their disruption without rushing them toward resolution. The questions being asked in midlife are not answered quickly. They require time, honest conversation, a spiritual director or wise mentor, and a theological tradition deep enough to contain both the questions and the person asking them. The church that can do this &mdash; that can say &ldquo;we recognize where you are, this is a passage, not a catastrophe, and we will walk it with you&rdquo; &mdash; will be the church that keeps its midlife members rather than losing them to the statistical exodus that currently occurs.",
    ],
  },
  {
    id: "Disillusionment and the Church",
    heading: "Disillusionment and the Church",
    paragraphs: [
      "Many Christians in midlife experience a significant disillusionment with institutional religion. The church they have served faithfully turns out to be more human and more flawed than they had believed. Leaders they respected have failed morally &mdash; and the failures, when they come, are often not small. They reveal patterns of abuse, cover-up, and institutional self-protection that are difficult to square with the claims of the gospel. The Christianity of their younger years seems too simple, too tribal, too unwilling to engage hard questions, too eager to maintain group cohesion at the cost of individual honesty. This disillusionment is painful. But it can also be a form of grace.",
      "Richard Rohr&rsquo;s framework, drawn from his &ldquo;Falling Upward,&rdquo; distinguishes between the &ldquo;first half of life&rdquo; and the &ldquo;second half&rdquo; as two qualitatively different modes of spiritual existence. The first half is organized around building identity, establishing certainty, earning belonging, and constructing a container for the self &mdash; a set of commitments, roles, tribe memberships, and beliefs that hold the person together and give them a place in the world. The second half is not an extension of the first but a different kind of project altogether: learning to let go, to tolerate mystery, to find the God who is beyond and behind all our containers. The midlife faith crisis often marks the transition from first-half to second-half spirituality.",
      "What is shed in this transition, if the person does not flee back into a more rigid first-half identity or abandon faith altogether, is substantial and often painful: the performance of certainty, the need to have all the answers, the tribal belonging that required silence about one&rsquo;s doubts, the God who was small enough to be managed and who existed primarily to validate one&rsquo;s prior commitments. What is found, if one persists through the disillusionment, is something quite different: a deeper, more honest, less defended relationship with the God who is not managed by any container, a faith whose certainties are fewer but more fundamental, a capacity for compassion and ambiguity that was impossible when everything had to be certain.",
      "The distinction Rohr draws &mdash; and that the tradition of Christian mysticism had always drawn, though in different vocabulary &mdash; is between the God of the first half and the God of the second half. The God of the first half is the God of answers, protection, and tribal identity. The God of the second half is the God of Job, of the psalms of lament, of the mystics who described the via negativa &mdash; the way of unknowing, in which all human concepts about God are progressively stripped away until what remains is not a concept but a Presence. The disillusionment of midlife is often the stripping of the first-half God, which is terrifying precisely because it feels like the loss of God entirely &mdash; when it is actually the opening toward a truer encounter.",
      "Ecclesiastical disillusionment is a distinct phenomenon that deserves its own attention. The person who loses confidence in a particular congregation or denomination, or who is wounded by institutional Christianity, is dealing not just with theological but relational and communal loss. The church was home; the community was family; the leaders were trusted. When these are revealed to be something other than what they claimed to be, the loss is personal and deep. It is a kind of betrayal, and the grief that follows is legitimate. What is not legitimate &mdash; or at least not inevitable &mdash; is the conclusion that the betrayal by a human institution is evidence that the God the institution pointed to is also false.",
      "The Christian who navigates midlife disillusionment well typically does so with the help of a tradition wider and deeper than the particular congregation that failed them. Reading broadly in the mystics, the desert fathers, the medieval theologians, and the twentieth-century spiritual writers &mdash; Merton, Nouwen, von Hugel, Williams &mdash; opens up a Christianity that is far larger and more capacious than any particular tribal expression of it. This wider reading does not resolve the pain of institutional betrayal, but it does place it in a context: the church has always been a deeply human institution, filled with people in the process of being formed rather than fully formed, failing more often than it succeeds and yet somehow carrying, through all that failure, a gospel it did not invent and cannot ultimately corrupt.",
      "The conclusion many midlife Christians reach, after working through disillusionment rather than fleeing it, is that what they needed to lose was not faith but a particular, smaller, more manageable version of faith &mdash; one that was always partly a social performance and partly a theological construction that served their need for certainty more than it served the truth. The faith on the other side of disillusionment is quieter, less certain about peripheral things, more attentive to mystery, and more genuinely oriented toward the God who is not the sum of any particular church&rsquo;s doctrinal positions. It is also, for most who reach it, harder-won and more durably held.",
    ],
  },
  {
    id: "Confronting Mortality",
    heading: "Confronting Mortality",
    paragraphs: [
      "The defining spiritual task of midlife is the first honest reckoning with one&rsquo;s own death. The death of parents brings it close: we see in them our own future, the body&rsquo;s trajectory traced out in the person we have known longest. The mirror tells us a different story than it did at twenty. The physical evidence of aging &mdash; the lines, the diminishing recovery time, the first diagnoses of conditions that will require management for the rest of one&rsquo;s life &mdash; make the fact of mortality impossible to continue ignoring. Something that had been known abstractly suddenly becomes known bodily and personally.",
      "Ernest Becker&rsquo;s &ldquo;Denial of Death&rdquo; (1973), which won the Pulitzer Prize the year after Becker&rsquo;s own death, argues that most human culture is organized around the avoidance of this reckoning. The &ldquo;immortality projects&rdquo; that human beings construct &mdash; their careers, legacies, nations, religions, even their children &mdash; are, at bottom, attempts to transcend the fact of death and achieve a form of symbolic immortality. Becker was not a Christian, but his analysis illuminates why midlife is so disorienting: the immortality projects of the first half of life are precisely what midlife begins to dismantle. The career has plateaued; the legacy is uncertain; the children are leaving. The constructions that held death at bay are failing, and death itself becomes visible.",
      "The Christian tradition, by contrast, has always cultivated the art of dying well (ars moriendi) and the regular practice of mortality meditation. Far from being morbid, these practices were understood as the foundation of a well-oriented life. The Psalm 90 prayer of Moses &mdash; &ldquo;Teach us to number our days, that we may gain a heart of wisdom&rdquo; (v.12) &mdash; makes the direct connection between mortality awareness and wisdom: it is the counted life, the life that knows its finitude, that finally acquires the ability to weigh rather than simply accumulate. The uncounted life drifts on the assumption of endless time; the counted life must choose.",
      "Medieval monastics kept a skull on their desk: memento mori &mdash; remember you will die. Not as morbidity but as orientation. The skull was a tool of philosophical and spiritual clarification: given that time is finite, what actually matters? The monastic tradition understood that most of what fills ordinary time &mdash; the anxieties, the competitions, the accumulations, the performances of self &mdash; looks very different from the perspective of death. The skull cleared the desk of the trivial. What remained after the trivial was cleared was, in the monastic understanding, the genuinely important: love, prayer, service, the cultivation of a soul fit for eternity.",
      "Ignatius of Loyola developed a formal meditation on death in the &ldquo;Spiritual Exercises&rdquo; &mdash; the &ldquo;election meditation&rdquo; in which the retreatant is asked to imagine themselves at the hour of death, looking back on their life, and to ask from that perspective what choices they would wish they had made. The meditation is not designed to produce despair but decision: to cut through the accretion of anxiety, comparison, and performance that obscures what one actually values, and to align present choices with the perspective that death alone provides with full clarity. This is the use of mortality awareness as a spiritual tool.",
      "For the Christian, the confrontation with mortality in midlife carries a specific theological charge: it forces a reckoning with the resurrection. In the first half of life, the resurrection is typically held as an abstract doctrinal proposition. In midlife, when death stops being theoretical, the resurrection also stops being theoretical. Either Jesus rose from the dead and death is not the final word, or he did not and it is. The midlife Christian who works through this question honestly &mdash; not by defaulting to a performed certainty they have always inhabited but by genuinely asking whether the resurrection hope can bear the weight of their own coming death &mdash; is doing some of the most important theological work of their life.",
      "The pastoral implication is that churches need to find ways to help their midlife members engage mortality rather than avoid it. This means preaching on death and resurrection in ways that take both seriously, not as abstractions but as existential realities. It means making spiritual direction available to midlife people working through mortality anxiety. It means modeling what a Christian death looks like, by honoring the deaths of congregation members with honesty and care. It means creating conversations in which midlife people can ask the hard questions &mdash; about what they fear, what they hope for, what they believe about what comes after &mdash; without being rushed into performed certainty.",
    ],
  },
  {
    id: "Rediscovering Vocation",
    heading: "Rediscovering Vocation",
    paragraphs: [
      "Midlife often brings a crisis of vocation &mdash; not just &ldquo;what should I do with my career?&rdquo; but &ldquo;what am I actually for?&rdquo; The career plateau, the departure of children from the home, the growing sense that the roles one has been playing are either exhausted or insufficient &mdash; all of these converge in a question that the first half of life typically deferred: what is my life actually about? The vocational question in midlife is deeper and more personal than the career question that typically occupied the twenties and thirties, because by midlife a person has enough self-knowledge, enough experience of what gives life and what drains it, to begin answering it with some accuracy.",
      "Frederick Buechner&rsquo;s definition of vocation &mdash; &ldquo;the place where your deep gladness meets the world&rsquo;s deep need&rdquo; &mdash; is one of the most quoted definitions in contemporary Christian writing, and its popularity reflects how hungry people are for an account of vocation that goes deeper than a job description or a role assignment. Buechner&rsquo;s definition locates vocation at the intersection of two things: what comes from inside (deep gladness, not surface happiness, not comfortable pleasure, but the kind of gladness that comes with doing what one was made for) and what exists outside (the world&rsquo;s deep need, not its trivial demands but its genuine hungers). Finding that intersection is the work of vocational discernment, and midlife &mdash; for all its disruption &mdash; is often when a person is finally positioned to find it.",
      "Parker Palmer&rsquo;s &ldquo;Let Your Life Speak&rdquo; develops a complementary framework: the vocation was always there, encoded in what gave life and what drained it, what came naturally and what required grinding effort against the grain of one&rsquo;s nature. Palmer&rsquo;s counsel is to &ldquo;listen to your life&rdquo; &mdash; to attend to the evidence that one&rsquo;s actual history provides about where one&rsquo;s genuine capacities and genuine callings lie. This counsel is particularly apt in midlife, because by midlife there is enough history to listen to. The twenty-year-old has limited data; the forty-five-year-old has two decades of evidence about what they are genuinely good at, what they cannot seem to stop doing even when it is not required, and what slowly but surely depletes them.",
      "The second half of life often brings a recalibration: moving from what was expected toward what was actually calling. This movement is often experienced as loss before it is experienced as liberation. The career one is leaving represented a significant investment of identity, not just time. The role one is stepping back from organized other people&rsquo;s perception of one&rsquo;s value. The community one is departing provided belonging and significance. All of these are genuinely lost, and the grief over them is legitimate. The recalibration toward a more authentic vocation does not come without cost.",
      "For many Christians, the most significant ministry of their lives begins not in their twenties but in their fifties, when they finally have the freedom, the experience, the self-knowledge, and &mdash; crucially &mdash; the willingness to fail without it meaning the end of their identity. The twenties ministry was often driven partly by the need to establish oneself, to prove something, to build a platform. The midlife ministry can be driven, if one has done the inner work, by something closer to pure gift: the offering of what one actually has to give, without the performance, without the audience management, without the scaffolding of reputation. This ministry is quieter and often more effective.",
      "The theological frame for vocational rediscovery in midlife is the resurrection. Paul&rsquo;s counsel not to conform to the pattern of this world but to be transformed by the renewing of one&rsquo;s mind (Romans 12:2) is vocational counsel as much as ethical counsel: do not let the world assign you your identity and your purpose. Let your identity be formed by the gospel &mdash; by the recognition that you are not primarily a career, a role, or a set of productive outputs, but a person known and loved by God, called to participate in what God is doing in the world in the particular, unrepeatable way that only you can participate. That participation &mdash; discovered, not designed &mdash; is vocation.",
      "The practical work of vocational rediscovery in midlife requires taking stock honestly: What have I been doing because it was expected of me? What have I been doing because I genuinely love it? Where has my energy come from, and where has it gone? Who has been changed by my presence, and what was I doing when that happened? These questions, brought before God in sustained prayer and honest conversation with a spiritual director or trusted community, often yield answers that have been waiting beneath the surface of the first-half life &mdash; waiting for the right moment to be heard.",
    ],
  },
  {
    id: "The Dark Night and Deeper Faith",
    heading: "The Dark Night and Deeper Faith",
    paragraphs: [
      "John of the Cross&rsquo;s &ldquo;dark night of the soul&rdquo; (noche oscura) is one of the most misused phrases in Christian spirituality. It has become a popular metaphor for any period of spiritual difficulty or emotional darkness, applied to everything from a hard week to a season of depression to the general dissatisfaction of modern life. For John, the phrase had a specific and demanding meaning: the dark night is a particular spiritual experience in which the consolations of God are withdrawn &mdash; the sense of his presence, the emotional warmth of prayer, the clarity of faith &mdash; so that the soul is drawn to love God for himself rather than for the benefits he provides. It is not depression, though it may coexist with depression. It is not doubt in the ordinary sense, though it involves a radical stripping of certainty. It is an encounter with God that feels, from inside, like abandonment.",
      "John distinguishes between two dark nights: the night of the senses and the night of the spirit. The first &mdash; the more common &mdash; involves the drying up of consolations: prayer becomes dry, meditation produces nothing, the emotional rewards of worship vanish. This often arrives in midlife for people who have been practicing their faith seriously for twenty years and have come to depend, without knowing it, on the emotional warmth that accompanied their practice. The night of the spirit is rarer and more severe: the soul experiences a deep sense of separation from God that goes beyond emotional dryness into something that feels like fundamental disconnection &mdash; as if the very relationship one has organized one&rsquo;s life around has been revealed as illusory.",
      "This experience often arrives in midlife, and it is terrifying to people who expected that faithful Christian living would produce increasing spiritual comfort and clarity. The implicit theology of much evangelical spirituality &mdash; that regular practice, faithful obedience, and doctrinal integrity produce a reliably warm and present sense of God &mdash; is not only contradicted by the experience of the dark night but is exposed by it as a form of spiritual consumerism: I practice my faith, therefore I receive the emotional product I have been promised. John of the Cross&rsquo;s insight is that this consumerism, however sincere, is a subtle form of self-love: one loves the feelings God gives rather than God himself.",
      "The mystics are unanimous on what the dark night is for: it is the purification of love. God withdraws the consolations not as punishment but as education &mdash; to teach the soul that it is possible to love him not for what he gives but for who he is. This is the distinction the book of Job traces: the accuser&rsquo;s question at the outset is &ldquo;does Job fear God for nothing?&rdquo; (1:9) &mdash; does Job love God apart from the benefits? The entire book is the answer: yes, ultimately, he does, though the answer comes only through the stripping away of every benefit, including the comfort of theological certainty. The dark night is the same test, administered not by an accuser but by God himself.",
      "Those who persist through the dark night &mdash; who do not flee into a more comforting version of faith, do not abandon faith altogether, do not manufacture feeling through spiritual technique &mdash; emerge with a faith that is qualitatively different from what they entered with. Less dependent on feeling, more grounded in naked trust. Less certain about the peripheral and more certain about the essential. Quieter, not because the questions have been answered, but because the need to have all the questions answered has been surrendered. The mature faith of the second half of life is characterized by what the tradition calls &ldquo;detachment&rdquo; &mdash; not indifference but the freedom from compulsive need that allows genuine love. One loves God because God is lovable, not because of what that love produces.",
      "The pastoral challenge the dark night poses is significant. The midlife Christian in the dark night often looks, from the outside, like someone who is losing their faith &mdash; withdrawing from church activities, no longer speaking with enthusiasm about spiritual matters, expressing doubt or uncertainty where they previously expressed confident faith. Well-meaning communities often respond with concern, instruction, or the implicit pressure to return to the enthusiasms of the first half. This response, however kindly intended, misses what is actually happening. The dark night is not a failure to be corrected but a passage to be accompanied. What is required is not instruction but presence, not reassurance but the kind of companionship that can tolerate uncertainty.",
      "The resources the Christian tradition provides for the dark night are less about resolving it than about enduring it faithfully. The classic texts &mdash; John of the Cross, The Cloud of Unknowing, Meister Eckhart, more recently Thomas Merton &mdash; create a map of the territory that allows the person in the dark night to recognize where they are. Recognition alone is a form of grace: to know that one is not uniquely broken, not uniquely faithless, but in a passage that the most serious practitioners of Christian faith have traversed before, and that they reported on from the other side with hope, is to be given something to hold in the darkness. The tradition&rsquo;s testimony is not that the darkness goes away quickly but that God is in it, working something that cannot be worked any other way.",
    ],
  },
];

const videoItems = [
  { videoId: "4vDMWOlmBbo", title: "Richard Rohr on the Second Half of Life" },
  { videoId: "Ak9KaAqlKgE", title: "Tim Keller on Midlife and the Gospel" },
  { videoId: "B4CXFJRwHBg", title: "The Dark Night of the Soul — John of the Cross Explained" },
];

export default function ChristianMidlifeFaithGuidePage() {
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
            Faith in the Middle Years
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Midlife Faith Guide
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Faith in the middle years &mdash; the theology of midlife crisis, disillusionment with church and religion, the dark night of the soul, rediscovering vocation and purpose, confronting mortality for the first time, and what it means to deepen rather than abandon faith at midlife.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;So teach us to number our days, that we may get a heart of wisdom.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>Psalm 90:12</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                padding: "0.5rem 1.1rem",
                borderRadius: 8,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                background: tab === t ? "rgba(107, 79, 187, 0.12)" : "transparent",
                color: tab === t ? ACCENT : MUTED,
                cursor: "pointer",
                fontSize: "0.88rem",
                fontWeight: tab === t ? 600 : 400,
                transition: "all 0.15s ease",
                whiteSpace: "nowrap" as const,
              }}
            >
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
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>Midlife Is a Passage, Not a Catastrophe</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>The disruptions of midlife &mdash; the questions, the disillusionment, the confrontation with mortality, the vocational uncertainty &mdash; are not signs that faith has failed. They are the conditions under which a deeper, more honest, and more genuinely personal faith becomes possible. The Christian tradition has mapped this territory, and its testimony is clear: those who persist through the passage rather than fleeing it emerge with something they could not have acquired any other way.</p>
        </div>
      </main>
    </div>
  );
}
