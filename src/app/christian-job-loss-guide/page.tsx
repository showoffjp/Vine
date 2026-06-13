"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F"; const CARD = "#12121F"; const BORDER = "#1E1E32";
const ACCENT = "#D97706"; const TEXT = "#F2F2F8"; const MUTED = "#9898B3";

const TABS = [
  "Why Job Loss Hits So Hard",
  "A Theology of Work and Vocation",
  "What the Bible Says About Provision",
  "Lament and the Waiting",
  "Identity in Christ, Not in Work",
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
    id: "Why Job Loss Hits So Hard",
    heading: "Why Job Loss Hits So Hard",
    paragraphs: [
      "In modern Western culture, work has become identity. &ldquo;What do you do?&rdquo; is the first question we ask someone new because we have collectively decided that the answer tells us who they are. Occupation has become the primary lens through which we perceive and assess people, and through which we perceive and assess ourselves. When a job is lost, the question becomes existential in a way that would have puzzled most of human history: &ldquo;Who am I now?&rdquo;",
      "The psychological research on job loss is unambiguous: it is one of the most stressful life events a person can experience, ranking alongside divorce and bereavement in its measurable impact on mental and physical health. This is not weakness or self-pity. It is the predictable consequence of losing something that has been woven into the fabric of daily life in multiple dimensions simultaneously. The loss is not only financial &mdash; it is structural, relational, purposive, and social. When a job ends, a person loses income, yes, but also the daily routine that organized their time, the colleagues who formed their social world, the sense of being needed and contributing, and the status that their role conferred.",
      "For Christians, job loss carries an additional layer of complexity that secular psychology does not fully account for. If we have absorbed the idea that work is calling &mdash; that God has placed us specifically in this role for specific purposes &mdash; then the loss of a job raises unsettling questions about divine faithfulness and divine guidance. Did I mishear God? Has he abandoned this calling? Did I fail to live up to what he placed me here to do? These questions are theologically serious and deserve real answers, not dismissal.",
      "The shame that often accompanies job loss is culturally constructed but no less real for that. In cultures shaped by Protestant conceptions of industry and by secular meritocracy, financial success has been coded as evidence of competence, virtue, and even blessing. The person without a job has, in this cultural grammar, failed to produce the required evidence. This is reinforced in some Christian communities by a prosperity-adjacent theology that reads material success as a sign of God&rsquo;s favor. The result is a shame that compounds the grief: not only has something terrible happened, but it is evidence of something wrong with me.",
      "Understanding why job loss hits so hard is not a therapeutic exercise in self-understanding for its own sake. It is the necessary starting point for addressing the loss well. If you do not understand that you are experiencing a genuinely significant multiple loss &mdash; financial, structural, social, purposive, and potentially spiritual &mdash; you will underestimate what you are carrying and wonder why you cannot simply pull yourself together. You are carrying a great deal. Naming it accurately is the beginning of wisdom.",
      "The Christian tradition has resources for this moment that secular psychology does not fully possess. A theology of identity that is not grounded in productivity or employment, a theology of vocation that distinguishes calling from job, a theology of provision that addresses anxiety about the future, and a practice of lament that gives honest grief a direction: these are the resources this guide exists to make available. None of them minimize what you are experiencing. All of them reframe it in a larger narrative than the one your culture offers.",
    ],
  },
  {
    id: "A Theology of Work and Vocation",
    heading: "A Theology of Work and Vocation",
    paragraphs: [
      "The Bible has a remarkably high view of work &mdash; one that significantly exceeds what most Christian workers have been taught. Genesis 2 locates work before the fall: the man was placed in the garden &ldquo;to work it and keep it&rdquo; (v. 15) before sin entered the picture. This is foundational and often missed. Work is not a consequence of the curse. Work is pre-fall, built into what it means to be human, part of the image-bearing calling to exercise dominion and to tend what God has made.",
      "The curse of Genesis 3 falls not on work itself but on the conditions of work: &ldquo;cursed is the ground because of you; in pain you shall eat of it all the days of your life; thorns and thistles it shall bring forth for you... By the sweat of your face you shall eat bread&rdquo; (vv. 17&ndash;19). The futility, the resistance, the exhausting effort that so often characterizes labor &mdash; these are the marks of the fall. But beneath the cursed conditions is a creation-order gift: the calling to work, to make, to tend, to bring order and beauty out of the raw material of the world.",
      "The Reformation recovery of vocation was one of the most practically significant theological developments in Christian history. Martin Luther argued against the medieval hierarchy of sacred and secular callings &mdash; which placed priests and monks at the top and ordinary workers at the bottom &mdash; by insisting that all legitimate work, performed as service to neighbor and to God, is holy. A cobbler who makes good shoes is serving God. A parent who raises children faithfully is doing divine work. A teacher, a farmer, a craftsman, a merchant: all are participating in God&rsquo;s ongoing provision and care for the world. The sacred-secular divide is a medieval invention, not a biblical one.",
      "The distinction between vocation and job is the most practically liberating insight available to someone who has lost employment. Vocation (from the Latin &ldquo;vocare,&rdquo; to call) is your calling &mdash; the cluster of gifts, passions, relationships, and responsibilities through which you serve God and neighbor. It is given to you by God and is in that sense stable. Your job is one current, particular, time-limited expression of that vocation. You can lose a job without losing a vocation. The teacher who is laid off has not ceased to be a teacher in any fundamental sense; she has lost one current context for her teaching. The engineer who is made redundant has not ceased to have engineering gifts and the calling to use them.",
      "This distinction is not merely consoling wordplay. It has real theological weight because vocation is grounded in creation, in the gifts and dispositions God has built into who you are, while employment is contingent on market conditions, organizational decisions, and factors entirely outside your control or your character. Job loss is a genuine loss, but it is a loss of a current context, not a loss of your fundamental calling or your fundamental value.",
      "Understanding work as participation in God&rsquo;s ongoing creation and care for the world also reframes the meaning of a gap in employment. During a fallow season, you are not without vocation. You may be between jobs, but you are not between callings. The skills, the gifts, the relationships, the commitments that constitute who you are &mdash; these continue even when a paycheck does not. The question of how to live out vocation during unemployment is a real and productive one: through volunteering, through developing skills, through serving your community, through being present to your family in ways that a consuming career did not allow.",
      "The theology of work as participation in God&rsquo;s creative activity also means that the work you will do in the next chapter of employment &mdash; however different it may be from what you did before &mdash; can be approached as holy, meaningful, and God-shaped. The job transition is not a demotion from divine purposes. It may be a redirection toward them. Many people look back at forced career transitions as the pivots through which God moved them toward the work that was most fully theirs.",
    ],
  },
  {
    id: "What the Bible Says About Provision",
    heading: "What the Bible Says About Provision",
    paragraphs: [
      "The anxiety of financial uncertainty is real, and the Bible does not pretend otherwise. It does not dismiss the concern for daily bread as unspiritual or faithless. Jesus himself taught his disciples to pray for daily bread, acknowledging that this is a genuine daily need. The financial anxiety that accompanies job loss is a legitimate response to a real threat, and Christian resources for it begin by taking it seriously.",
      "Matthew 6:25&ndash;34 is Jesus&rsquo;s most sustained teaching on financial anxiety, and its argument is worth following carefully. He does not say &ldquo;do not worry about money because money doesn&rsquo;t matter.&rdquo; He says do not be anxious about life &mdash; what you will eat, what you will drink, what you will wear &mdash; and his argument is from the character and competence of God, not from the unimportance of these needs. God feeds the birds of the air. God clothes the lilies of the field with a beauty that surpasses Solomon&rsquo;s. How much more will he provide for his own people? The argument is not that your needs are trivial; it is that you have a Provider whose attention and capacity are adequate to them.",
      "Philippians 4:19 &mdash; &ldquo;My God will supply every need of yours according to his riches in glory in Christ Jesus&rdquo; &mdash; is one of the most frequently quoted texts on provision, and its context matters. Paul writes it from prison, in a letter to a church he loves, after thanking them for their financial support. He has learned, he says, &ldquo;in whatever situation I am to be content&rdquo; (v. 11). This is not triumphalist prosperity teaching. It is the testimony of a person who has been in material need and material abundance and has found God sufficient in both.",
      "The tension between trust and wisdom is one the Bible nowhere resolves into a simple formula. Faith in God&rsquo;s provision does not preclude updating a resume, pursuing new contacts, managing spending carefully, exploring different employment sectors, or making hard financial decisions. Moses trusted God while building the tabernacle exactly according to specification. Nehemiah trusted God and also organized the workers and posted guards. Biblical faith and practical wisdom are not in competition. They are intended to work together, each informing and supporting the other.",
      "The manna narrative of Exodus 16 is one of the most theologically rich resources for the unemployed. The Israelites in the wilderness receive bread from heaven, but only day by day: they are explicitly instructed not to hoard it, and when they do it rots. The lesson is not that planning is wrong but that anxious stockpiling as a substitute for daily dependence on God is faithless. God was teaching his people to trust not in their provisions but in their Provider &mdash; to wake up each morning and trust that today&rsquo;s need would be met with today&rsquo;s supply. This is a discipline that runs counter to every instinct of modern financial anxiety, and it is one of the most spiritually formative things a season of unemployment can produce.",
      "The stories of God&rsquo;s provision in Scripture are not illustrations of a principle; they are testimonies of a character. Elijah, exhausted and suicidal under the broom tree in 1 Kings 17, is fed by ravens and by a widow whose oil and flour do not run out. The widow of Zarephath gives her last meal to the prophet and finds her supply miraculously replenished. The feeding of the five thousand is not only a miraculous demonstration of power; it is a statement about the character of the one who provides. He is not the God of barely enough. He is the God of twelve baskets left over.",
      "None of this makes the financial anxiety of unemployment go away. But it does provide it with a frame larger than the immediate circumstances. The question shifts from &ldquo;will I have enough?&rdquo; &mdash; which you genuinely do not know &mdash; to &ldquo;is my Provider adequate?&rdquo; &mdash; which the testimony of Scripture answers with consistent and emphatic yes. This does not remove the responsibility to seek employment diligently, to manage resources wisely, and to accept help when it is offered. It does remove the totalizing terror that financial uncertainty can become when it is faced without a theology of provision.",
    ],
  },
  {
    id: "Lament and the Waiting",
    heading: "Lament and the Waiting",
    paragraphs: [
      "&ldquo;How long, O Lord?&rdquo; is one of the most frequently recurring phrases in the psalter, and it is entirely legitimate as the prayer of the unemployed. Psalm 13 &mdash; &ldquo;How long, LORD? Will you forget me forever? How long will you hide your face from me?&rdquo; &mdash; is a model for the honest complaint that brings real anguish before God without pretending the anguish is not real. Lament is not the opposite of faith; it is one of faith&rsquo;s most mature expressions. It assumes that God is there, that God hears, and that the gap between the current reality and what God has promised is worth protesting.",
      "The danger of the prosperity-gospel reading of job loss &mdash; which interprets unemployment as spiritual failure or divine punishment &mdash; is real and must be named and resisted. This theology is crushing precisely because it adds theological shame to practical difficulty. If my unemployment is evidence that I am not right with God, then the solution is not to find a job but to figure out what spiritual deficiency is blocking my blessing. This framework does violence to Scripture, to pastoral care, and to the people who have absorbed it.",
      "Job&rsquo;s suffering was not the result of his sin &mdash; God himself says so at the outset of the book. Jesus was &ldquo;a man of sorrows, acquainted with grief&rdquo; (Isa. 53:3) &mdash; and his sorrows were not evidence of spiritual failure. The psalmist cries out from genuine need again and again, and his cries are received as prayer, not rejected as faithlessness. The New Testament is full of people in material difficulty: Paul makes tents to support himself, the early church takes up collections for the poor in Jerusalem, James writes to communities experiencing material oppression. Unemployment is not a sign of spiritual deficiency. It is a human experience, and the God of Scripture meets it as such.",
      "The spiritual discipline of the waiting season is one of the most important and least celebrated realities of Christian experience. The Israelites spent forty years in the wilderness &mdash; not because God had abandoned them but because he was teaching them something that could not be taught quickly: dependence on him rather than on their own resources, bread from heaven rather than the fleshpots of Egypt, the kind of trust that is forged only through sustained uncertainty. The wilderness was not a detour from God&rsquo;s purposes; it was the path through which his people were formed.",
      "The image of the cocoon is a useful one for the waiting season of unemployment. The caterpillar in the cocoon appears to be doing nothing; it is actually undergoing the most radical transformation of its existence. The stillness and the seeming inactivity are not evidence of wasted time; they are the conditions in which the transformation is occurring. A season of unemployment, approached with honesty and prayer, can be a cocoon season: a time in which God is doing something in you that cannot happen in the midst of full activity, forming you for the next chapter in ways you will only recognize in retrospect.",
      "The importance of not measuring God&rsquo;s faithfulness by whether a new job arrives on your preferred timeline cannot be overstated. This is the hardest spiritual discipline in a season of material uncertainty, because the natural human response to continued difficulty is to conclude that either God is not faithful or that you have done something wrong. Both conclusions are available to the enemy as weapons. The more difficult and more faithful response is to hold the uncertainty without resolving it prematurely in either direction: to say &ldquo;I do not know when this will resolve, and I do not know what God is doing in the gap, but I know who God is, and that is enough to continue.&rdquo;",
      "Seek community in the waiting. The Psalms of lament were not private compositions; they were corporate prayers, prayed together in the assembly. Job&rsquo;s friends were at their best before they opened their mouths, in the seven days of sitting with him in silence. Finding even one person who will sit with you in the uncertainty of unemployment &mdash; not to fix it, not to advise you, but to bear witness to it &mdash; is one of the most practically important things you can do in this season.",
    ],
  },
  {
    id: "Identity in Christ, Not in Work",
    heading: "Identity in Christ, Not in Work",
    paragraphs: [
      "The deepest answer to job loss is not practical but theological: a reorientation of identity from what you do to who you are. You are not what you do. You are not your title, your salary, your industry, your career arc, or your LinkedIn profile. These things describe aspects of your activity; they do not constitute your identity. The question of who you are, in the most fundamental sense, has an answer that does not depend on employment status.",
      "First Peter 2:9 gives one of the most comprehensive positive statements of Christian identity in the New Testament: &ldquo;You are a chosen race, a royal priesthood, a holy nation, a people for his own possession.&rdquo; These are not descriptions of people who have achieved or produced; they are descriptions of what you are by virtue of what God has done. Chosen, not selecting. Royal, not earned. Holy, not self-made. A possession, not a self-constructed achievement. This identity is entirely prior to and independent of what you do for work, and it remains entirely intact when the work ends.",
      "The practical exercise of rewriting your personal story to center on identity in Christ rather than career is harder than it sounds, because the career-centered story has been so deeply embedded. Try it: who are you without reference to your professional history? Who are you before God? What matters about you that has nothing to do with your employment? The answers &mdash; beloved, made in God&rsquo;s image, called, known, forgiven, being formed into the likeness of Christ &mdash; are more durable and more true than any professional description, and they are available to you in full during unemployment.",
      "The fallow season also offers a gift that a consuming career had crowded out: time for practices and relationships that had been perpetually deferred. Time to pray without rushing. Time to read deeply. Time for the friendships that had become maintenance-level contact. Time for your marriage or your children or your aging parents in ways that full employment rarely permits. These are not consolation prizes for the loss of employment; they are real goods that many people only access when the relentless pressure of work is temporarily removed. They are part of what the fallow season produces.",
      "Community as identity is a biblical category that the individualism of modern Western culture has made it hard to perceive. In the New Testament, the primary identity-forming community is the local church &mdash; the body of Christ, in which each member has gifts that serve the whole and receives service from the whole. Belonging to a local church provides structure (the weekly rhythm of gathering, serving, and worshiping), purpose (the mission of the community you belong to), and a sense of being needed that employment had previously supplied. The unemployed person who is actively participating in and serving a local church has access to an identity and a community that employment cannot provide and unemployment cannot take away.",
      "Serving others during a season of unemployment is one of the most counterintuitive and most effective ways of maintaining the sense of meaningful contribution that job loss removes. The person who has lost their job often feels that they have nothing to offer. The experience of volunteering &mdash; at a food bank, a community organization, a church ministry, a neighbor&rsquo;s difficult project &mdash; directly challenges that lie. You have time, capacity, skills, and presence to offer. The economy of God&rsquo;s kingdom is not organized by market wages; your contribution is real even when it is unpaid.",
      "The theological reorientation of identity is not a one-time insight but a sustained practice. The culture&rsquo;s version of you &mdash; defined by what you produce, what you earn, what your title is &mdash; will reassert itself, especially in the gap between the job you lost and the job you will find. The practice is to return, again and again, to the more fundamental story: you are a person made in God&rsquo;s image, redeemed at cost, being formed into the likeness of Christ, belonging to a community of people who are doing the same. That story is true whether you are employed or unemployed, successful or struggling, producing or waiting. It is the story that holds.",
    ],
  },
];

const videoItems = [
  { videoId: "fNpBIWjPMsc", title: "Tim Keller on Work and Vocation" },
  { videoId: "X3fXg8b1SAM", title: "Trusting God in Financial Uncertainty" },
  { videoId: "qL9mFD9cGFY", title: "When God Seems Silent -- Waiting on the Lord" },
];

export default function JobLossGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;
  const currentSection = sections.find((s) => s.id === tab);
  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}1A`, border: `1px solid ${ACCENT}44`, borderRadius: 20, padding: "0.35rem 1rem", fontSize: "0.78rem", color: ACCENT, fontWeight: 600, marginBottom: "1rem", letterSpacing: 1, textTransform: "uppercase" as const }}>
            Work &amp; Vocation &mdash; Job Loss
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Job Loss
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 auto", marginBottom: "1.5rem" }}>
            Losing a job as a Christian &mdash; the theology of work and vocation, why job loss feels like identity loss, what the Bible says about provision and anxiety, lamenting unemployment, and finding meaning in the waiting season.
          </p>
          <div style={{ background: `${ACCENT}0D`, border: `1px solid ${ACCENT}33`, borderRadius: 14, padding: "1rem 1.5rem", maxWidth: 560, margin: "0 auto", textAlign: "left" as const }}>
            <p style={{ color: TEXT, fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
              &ldquo;My God will supply every need of yours according to his riches in glory in Christ Jesus.&rdquo;
            </p>
            <p style={{ color: ACCENT, fontSize: "0.82rem", fontWeight: 600, marginTop: "0.5rem", marginBottom: 0 }}>Philippians 4:19</p>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                fontSize: "0.82rem",
                fontWeight: 600,
                cursor: "pointer",
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                background: tab === t ? `${ACCENT}1A` : "transparent",
                color: tab === t ? ACCENT : MUTED,
                transition: "all 0.2s",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {currentSection && (
          <section style={{ display: "flex", flexDirection: "column" as const, gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4, color: TEXT }}>{currentSection.heading}</h2>
            {currentSection.paragraphs.map((para, i) => (
              <p
                key={i}
                style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.95rem", margin: 0 }}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </section>
        )}

        {tab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Videos</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <h3 style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45, color: TEXT, margin: 0 }}>{v.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3rem", background: `${ACCENT}0D`, border: `1px solid ${ACCENT}33`, borderRadius: 14, padding: "1.5rem", textAlign: "center" as const }}>
          <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
            You are not what you do. Your identity in Christ remains entirely intact in every season of employment or waiting.
          </p>
        </div>
      </main>
    </div>
  );
}
