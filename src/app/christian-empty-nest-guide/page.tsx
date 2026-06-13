"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F"; const CARD = "#12121F"; const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB"; const TEXT = "#F2F2F8"; const MUTED = "#9898B3";

const TABS = [
  "The Grief and the Freedom",
  "Rediscovering Marriage",
  "A New Purpose",
  "Releasing Adult Children",
  "Letting God Lead",
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
    id: "The Grief and the Freedom",
    heading: "The Grief and the Freedom",
    paragraphs: [
      "The empty nest is a paradox: real grief and real freedom arriving together. For parents who have organized two decades of life around raising children, the departure of the last child is a profound loss &mdash; the loss of daily presence, of a clear role, of the household&rsquo;s familiar rhythms. This grief is legitimate and often surprises parents with its intensity, especially mothers who carried the primary caregiving load, though fathers feel it deeply too. At the same time, the empty nest brings genuine freedom: freedom of time, of attention, of the capacity to pursue things long deferred. The Christian frame holds both honestly. There is a time and season for everything (Ecclesiastes 3), and the parenting season, like all seasons, comes to a kind of completion. Grieving its end is not faithlessness; it is the honest acknowledgment of how good it was. And the freedom that follows is not abandonment of purpose but an invitation into a new one.",
      "The grief catches many parents off guard precisely because it is unexpected. They have spent years anticipating this milestone, perhaps even looking forward to a quieter house, and then the day arrives and the silence is not peaceful but hollow. The dinner table that once required negotiation for a seat now has empty chairs. The laundry that once felt endless is suddenly manageable, and the very ease of it is a reminder of who is gone. These small daily losses accumulate into something that can feel, at moments, like a kind of bereavement &mdash; a grief without a death, a mourning for a life stage rather than a person. Naming it as grief, rather than dismissing it as foolishness or weakness, is the first step toward moving through it well.",
      "Scripture does not flinch from the reality of seasons ending. Ecclesiastes 3 declares that there is &ldquo;a time to keep, and a time to cast away,&rdquo; &ldquo;a time to embrace, and a time to refrain from embracing.&rdquo; The Preacher does not pretend that the passing of one season is painless; he simply insists that it is woven into the fabric of a life lived under God. The parent who can say &ldquo;this season was good, and now it is over&rdquo; without bitterness has grasped something essential about how God orders human time. Nothing good is wasted, even when it ends.",
      "There is a particular spiritual danger in refusing to grieve the empty nest: the temptation to cling, to manufacture reasons for the children to remain dependent, or to follow them into their new lives in ways that crowd out their independence. Grief that is honored and processed releases its grip; grief that is denied finds unhealthy outlets. The parent who allows themselves to genuinely mourn the end of active parenting is, paradoxically, the parent best positioned to let their children go cleanly and to step into what comes next without resentment.",
      "The freedom side of the paradox is just as real and deserves to be received as a gift rather than viewed with suspicion. The empty nest returns to parents a quantity of time, attention, and energy that has been spoken for so long they may have forgotten they ever owned it. This is not a small thing. It is the raw material of a new chapter &mdash; hours that can now be poured into a neglected marriage, a deferred calling, a deepened prayer life, or a ministry of service. The freedom is not a consolation prize for the loss; it is the other half of the same gift, the new thing God is doing in the space the children have left behind.",
      "Holding grief and freedom together, rather than choosing one and suppressing the other, is the mature Christian posture. The parent who only grieves becomes stuck, defining themselves forever by a role that has ended. The parent who only celebrates the freedom may be avoiding a grief that will eventually surface in less manageable forms. The healthier path runs through the middle: to weep honestly for what is ending and to look with hope toward what is beginning, trusting that the same God who gave the parenting years has good purposes for the years that follow.",
      "Above all, the empty nest is an occasion to remember that a parent&rsquo;s identity was never finally located in parenting. The children were always a stewardship, never a possession &mdash; given for a season, to be loved fiercely and then released. The parent whose deepest identity is found in being a child of God, rather than in being the parent of children, can navigate this transition with a stability the world cannot supply. The role changes; the identity does not. That is the ground on which both the grief and the freedom can be held.",
    ],
  },
  {
    id: "Rediscovering Marriage",
    heading: "Rediscovering Marriage",
    paragraphs: [
      "For married couples, the empty nest often exposes a marriage that has, without anyone intending it, become primarily a parenting partnership. For years the children provided the shared project, the common conversation, the organizing center of the home. When they leave, some couples discover they have drifted into being roommates and co-managers rather than friends and lovers. This is one of the reasons divorce rates have risen among couples in their fifties and sixties (&ldquo;gray divorce&rdquo;). But the empty nest is also a tremendous opportunity to rebuild and deepen the marriage. The couple now has time and attention to invest in each other that parenting demanded. Practical steps: reestablishing shared activities and conversations beyond logistics; rediscovering romance and physical intimacy; building new shared goals and dreams; and recognizing that the covenant of marriage was always meant to outlast the parenting years. The biblical vision of marriage (Genesis 2, Ephesians 5) is of a lifelong one-flesh union, not a child-rearing arrangement.",
      "The drift into a parenting partnership is rarely the result of any decision; it is the slow accumulation of a thousand reasonable choices. The child&rsquo;s school project takes priority over the date night. The conversation over dinner is about schedules and permission slips rather than hopes and fears. The energy that once flowed toward the spouse is redirected, year after year, toward the children &mdash; and the redirection feels not only acceptable but virtuous. By the time the last child leaves, a couple may turn to each other across the suddenly quiet table and realize they no longer quite know what to say. This is not a sign that the marriage has failed; it is a sign that it has been deferred, and that the deferral is now over.",
      "The phenomenon of gray divorce is sobering precisely because it so often surprises the couples involved. They were not in crisis; they were simply absent from each other for so long that, when the children were gone, there was nothing left holding them together. The marriage had become a logistical alliance, and once the logistics no longer required two people, the alliance dissolved. The lesson is not that the empty nest is dangerous but that a marriage left untended for decades is fragile. The same transition that ends some marriages can renew others, and the difference often lies in whether the couple is willing to do the deliberate work of turning back toward each other.",
      "That work begins with conversation that goes beyond logistics. Couples who have spent years talking only about the children must relearn how to talk about themselves &mdash; their dreams, their disappointments, their faith, their fears about aging, the things they still hope to do. This can feel awkward at first, even artificial, as if they are getting to know a stranger who happens to share their bed. But the awkwardness gives way to genuine rediscovery for couples who persist. The person across the table has changed over twenty years; there is much to learn again.",
      "Romance and physical intimacy, too, often need to be deliberately reclaimed. Years of exhaustion, interruption, and the de-eroticizing effect of constant caregiving can leave a couple&rsquo;s physical relationship neglected. The empty nest removes many of the practical obstacles &mdash; the closed doors, the listening ears, the bone-tiredness of parenting young children. Couples who treat this as an opportunity rather than ignoring it often find a renewed tenderness and delight. The Song of Songs celebrates married love as a good gift to be enjoyed, not merely a duty to be performed, and that celebration is as appropriate at sixty as at twenty-five.",
      "New shared goals and dreams give the renewed marriage a forward orientation. A couple needs a project, a common horizon to move toward together. It might be travel long postponed, a ministry undertaken jointly, a move to a new place, a shared hobby, or simply the deliberate cultivation of a richer common life. What matters is that the couple has something they are building together, so that the marriage is not merely the residue of the parenting years but a living thing with its own future. The empty nest can be the launching point for the most adventurous chapter of a marriage rather than its quiet decline.",
      "Underneath all the practical steps is the theological truth that the marriage covenant was never contingent on the children. Genesis 2 describes a man leaving his father and mother and cleaving to his wife, becoming one flesh &mdash; a union that precedes and outlasts any children it may produce. Ephesians 5 frames marriage as a living picture of Christ and the church, a covenant of self-giving love that does not expire when its practical usefulness seems to wane. The empty-nest couple who remembers that their marriage was always meant to be a lifelong one-flesh union, and not a child-rearing arrangement, has the theological footing to rebuild with hope rather than to drift apart in disappointment.",
    ],
  },
  {
    id: "A New Purpose",
    heading: "A New Purpose",
    paragraphs: [
      "The departure of children raises the same question that retirement raises: what are you for now? For many parents, especially those whose identity was bound up in active parenting, this can trigger a real crisis of purpose. The gospel&rsquo;s answer is that your fundamental calling never changed &mdash; to love God and neighbor &mdash; even as its expression shifts. The empty nest frees up enormous capacity for ministry, mentoring, service, hospitality, and the pursuit of long-deferred callings. Many of the most fruitful seasons of Christian service begin in the empty-nest years, when experience, resources, and freedom finally align. This is the time to ask: what has God been preparing me for? What gifts have I developed in the parenting years &mdash; patience, organization, the capacity to nurture &mdash; that could now serve a wider circle? The empty nest is not the end of usefulness but often the beginning of its richest chapter.",
      "The crisis of purpose is most acute for parents who, often without realizing it, allowed parenting to become not merely a calling but their whole identity. When the children were home, the question &ldquo;who am I?&rdquo; had an obvious answer: I am the one who raises these children, who runs this household, who shows up to every game and recital. With the children gone, that answer evaporates, and the parent is left facing a question they have not had to ask in years. This is uncomfortable, even frightening, but it is also clarifying. It forces a return to the deeper question of what a human life is ultimately for &mdash; a question the gospel answers with confidence.",
      "The gospel&rsquo;s answer is that the fundamental human calling, to love God with all one&rsquo;s heart and one&rsquo;s neighbor as oneself, is the same in every season of life. Parenting was one expression of that calling &mdash; an intense, all-consuming, beautiful expression &mdash; but it was never the whole of it, and it was never the only form love and service could take. The empty-nest parent has not lost their calling; they have simply been freed to express it in new ways. The love that was once concentrated on a few children can now flow outward to a wider circle of neighbors, friends, and strangers who need exactly what this parent has learned to give.",
      "The practical reality is that the empty nest releases an enormous reservoir of capacity. The time once spent driving to practices, helping with homework, and managing a busy household is suddenly available. The emotional and mental energy once absorbed by the daily demands of parenting can now be directed elsewhere. This capacity, combined with the wisdom and resources accumulated over decades, makes the empty-nest years one of the most potent seasons for ministry, mentoring, hospitality, and service. Many people who change the world for good do so not in their busy thirties but in their freer fifties and sixties.",
      "The gifts honed in the parenting years translate directly into wider service. The patience learned in raising a strong-willed child equips a person to mentor struggling young adults. The organizational capacity developed in running a household can serve a church, a nonprofit, or a community ministry. The nurturing instinct that comforted skinned knees and broken hearts can comfort the lonely, the grieving, and the lost. Parents often underestimate how much they have learned, assuming their skills were merely domestic. In truth they have spent twenty years in an intensive school of love, and the graduates of that school have much to offer.",
      "Discernment is the work of this season: asking honestly what God may have been preparing during the long apprenticeship of parenting. This is not a matter of frantically filling the empty hours with activity, but of prayerful attention to where one&rsquo;s gifts, the world&rsquo;s needs, and one&rsquo;s own deep gladness intersect. The empty-nest parent has the luxury, denied to younger and busier people, of being able to choose their service deliberately rather than simply reacting to whatever demands the most. That freedom to choose well is itself a gift, and it deserves to be stewarded prayerfully.",
      "The danger to avoid is the assumption that one&rsquo;s most useful years are behind them. The culture often whispers that usefulness peaks in midlife and declines thereafter, but the Christian vision flatly contradicts this. Caleb asked for a mountain to conquer at eighty-five; Moses began his greatest work at eighty; the church has been built in no small part by people whose most fruitful labors came in their later decades. The empty nest is not a doorway out of usefulness but, very often, a doorway into its richest and most deliberate chapter. The question is not whether God still has work to do through you, but what that work will be.",
    ],
  },
  {
    id: "Releasing Adult Children",
    heading: "Releasing Adult Children",
    paragraphs: [
      "One of the hardest tasks of the empty-nest years is releasing adult children well &mdash; shifting from the authority and responsibility of parenting minors to the mutual respect of an adult relationship. This requires a real death to the parenting role as it was. The temptation is either to hold on too tightly (controlling, advising unbidden, struggling to accept their independence and their choices) or to disengage entirely. The healthy path is the difficult middle: remaining a loving, available presence while genuinely respecting their adulthood and autonomy. The principle of Genesis 2:24 &mdash; that a person &ldquo;leaves&rdquo; father and mother &mdash; means parents must also release. This includes accepting that adult children will make choices the parents would not make, hold views the parents do not share, and live in ways the parents did not envision. The goal is a relationship of mutual adult love, where the parent is a trusted counselor when asked but not a controlling authority. Prayer becomes the primary parental work: entrusting to God what one can no longer control.",
      "The death of the parenting role is real, and it deserves to be named as such. For two decades the parent held genuine authority over the child &mdash; the right and responsibility to set rules, enforce consequences, and make decisions for the child&rsquo;s good. That authority does not gradually fade; at some point it simply ends, and the parent who keeps trying to exercise it finds themselves resented and resisted. Letting go of that authority is a kind of bereavement, the mourning of a role that defined the parent for half their adult life. But it is a death that makes new life possible &mdash; the life of an adult friendship that could never have existed while the old authority remained.",
      "The two temptations pull in opposite directions, and both are forms of failure to release. The first is to hold on too tightly: to keep advising when no advice was sought, to express disappointment when the adult child&rsquo;s choices diverge from the parent&rsquo;s preferences, to manipulate through guilt or money or emotional pressure, to treat the adult child as though they were still a teenager who needed managing. This communicates a lack of respect for the child&rsquo;s adulthood and almost always damages the relationship. The second temptation is the opposite: to disengage, to withdraw, to treat the end of the parenting role as the end of the relationship itself. Neither extreme honors the adult child.",
      "The healthy path runs through the difficult middle, and it is difficult precisely because it requires the parent to remain deeply invested while surrendering control. The parent stays present, available, interested, and loving &mdash; and at the same time genuinely respects the adult child&rsquo;s right to run their own life. This means being available without being intrusive, offering counsel only when invited, and resisting the urge to fix problems the adult child has not asked to have fixed. It is a posture of open hands rather than gripping fists, and it is one of the hardest postures a loving parent is ever asked to adopt.",
      "Genesis 2:24 grounds this releasing in the created order itself. The verse describes a person leaving father and mother to cleave to a spouse, and the leaving is presented as right and good &mdash; part of God&rsquo;s design rather than a tragedy to be resisted. The implication for parents is clear: if the child is meant to leave, then the parent is meant to release. The parent who fights against this divinely ordained leaving is fighting against the very design of human flourishing. To release the adult child is not to fail them but to honor the order God built into the world.",
      "Releasing well includes the hard acceptance that adult children will make choices the parents would not make, hold views the parents do not share, and build lives the parents did not envision. The adult child may marry someone the parent would not have chosen, pursue a career the parent thinks unwise, raise their own children differently, or hold political and even religious convictions that diverge sharply from the parent&rsquo;s. The parent who can love across these differences &mdash; who can maintain warm relationship without requiring agreement &mdash; has learned something the surrounding culture has largely forgotten. Love that demands conformity is not love but control; love that endures difference is the genuine article.",
      "As control recedes, prayer becomes the primary parental work. The parent who can no longer manage the adult child&rsquo;s life can still intercede for it, and intercession turns out to be the more powerful instrument all along. To bring an adult child before God daily &mdash; entrusting to him what one can no longer direct, asking for their protection and flourishing and faith &mdash; is the deepest form of parental love available in this season. It is also the form most likely to keep the parent&rsquo;s heart soft rather than anxious or controlling. The parent prays, and in praying, learns to trust that the God who loves the child even more than they do is fully able to care for what they have released.",
    ],
  },
  {
    id: "Letting God Lead",
    heading: "Letting God Lead",
    paragraphs: [
      "The empty-nest transition, like every major life transition, is ultimately an invitation to deeper trust. The question beneath all the others &mdash; the grief, the marriage, the purpose, the release &mdash; is whether God can be trusted with this new and unfamiliar season. The same God who was faithful through the parenting years is faithful now. The practices that sustain this trust: continued prayer and Scripture, honest community where the transition can be processed, openness to where God may be leading rather than clinging to what was. Many parents find that the empty nest, navigated faithfully, becomes a season of spiritual deepening &mdash; with the noise and busyness of active parenting quieted, there is finally space to attend to one&rsquo;s own soul, to one&rsquo;s marriage, and to God. &ldquo;For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope&rdquo; (Jer 29:11) &mdash; a promise originally given to exiles facing an unknown future, fitting for parents facing theirs.",
      "Every transition strips away a familiar structure and asks the question of trust afresh. When the children were home, the days had a shape that was not chosen so much as imposed by their needs; the parent&rsquo;s trust in God was real but it operated within a settled framework. The empty nest removes that framework, and the removal exposes how much the parent had been leaning on circumstance rather than on God himself. This is not a failure but an opportunity. The God who was trustworthy when the house was full is exactly as trustworthy now that it is quiet, and the transition is the occasion to learn this at a deeper level than before.",
      "The continuity of God&rsquo;s faithfulness is the anchor that steadies the whole transition. The same God who provided wisdom for the sleepless nights of infancy, patience for the turbulence of adolescence, and grace for the ten thousand small crises of family life has not changed and has not retired. He does not lose interest in a parent once their children are grown. The faithfulness demonstrated across two decades of parenting is the down payment on a faithfulness that extends into every season still to come. The parent who looks back and honestly catalogs how God showed up across the years gains courage to face the unknown ahead.",
      "Certain practices sustain trust through the disorientation of transition. Continued prayer and immersion in Scripture keep the parent oriented toward God rather than toward their own anxiety. Honest community &mdash; friends, a small group, a church, others walking the same road &mdash; provides a place to process the grief and the questions without pretending. And a posture of openness, a willingness to be led somewhere new rather than clinging to what was, keeps the parent receptive to whatever God is doing. These practices do not eliminate the difficulty of the transition, but they hold the parent steady within it and keep their heart turned toward hope.",
      "Many parents discover, to their surprise, that the empty nest becomes a season of unexpected spiritual deepening. The constant noise and busyness of active parenting, however good, left little room for sustained attention to one&rsquo;s own interior life. With the children gone and the house quiet, there is finally space &mdash; space to pray without interruption, to read Scripture slowly, to examine one&rsquo;s own soul, to attend to a marriage and a friendship with God that may have been running on fumes. The silence that at first felt like loss can become, over time, the fertile quiet in which a deeper spiritual life grows.",
      "This deepening is not automatic; it requires the parent to choose to fill the new space with God rather than with mere distraction. The empty hours can be poured into endless television, anxious worry about the children, or a frantic busyness designed to avoid the silence. Or they can be received as a gift and offered back to God as the raw material of a richer interior life. The parent who chooses the latter often finds that the empty-nest years become the most spiritually rich of their life &mdash; not in spite of the quiet, but precisely because of it.",
      "The promise of Jeremiah 29:11 belongs, fittingly, to people facing an unknown future. It was spoken originally to exiles, torn from their homeland and uncertain of what lay ahead, and it assured them that God&rsquo;s plans for them were plans for welfare and not for evil, to give them a future and a hope. The empty-nest parent stands in an analogous place &mdash; not exiled, but displaced from a familiar life, uncertain what the next chapter holds. To them the same promise speaks: the God who plans good and not evil holds their future too. They are not walking into the unknown alone but into the keeping of a God who has already gone ahead, preparing welfare and not evil, a future and a hope.",
    ],
  },
];

const videoItems = [
  { videoId: "x7HU2rkMSEM", title: "The Empty Nest — A Christian Perspective" },
  { videoId: "ZPHl9bg6mTk", title: "Rediscovering Marriage After the Kids Leave" },
  { videoId: "kFhdGE3Or0s", title: "Finding New Purpose in the Empty Nest Years" },
];

export default function EmptyNestGuidePage() {
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
            Family &amp; Faith &mdash; The Empty Nest
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Empty Nest Guide
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 auto", marginBottom: "1.5rem" }}>
            Faith and the empty nest &mdash; the grief and freedom when children leave home, rediscovering marriage after parenting, finding new purpose, releasing adult children well, and trusting what God is doing in this new season.
          </p>
          <div style={{ background: `${ACCENT}0D`, border: `1px solid ${ACCENT}33`, borderRadius: 14, padding: "1rem 1.5rem", maxWidth: 560, margin: "0 auto", textAlign: "left" as const }}>
            <p style={{ color: TEXT, fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
              &ldquo;For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.&rdquo;
            </p>
            <p style={{ color: ACCENT, fontSize: "0.82rem", fontWeight: 600, marginTop: "0.5rem", marginBottom: 0 }}>Jeremiah 29:11</p>
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
            The same God who was faithful through the parenting years is faithful in this new season &mdash; and his plans for you are good.
          </p>
        </div>
      </main>
    </div>
  );
}
