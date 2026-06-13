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
  "What the Bible Says",
  "Covenant, Brokenness, and Grace",
  "Grief and Shame",
  "Rebuilding Identity",
  "Parenting Through Divorce",
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
    id: "What the Bible Says",
    heading: "What the Bible Says About Divorce",
    paragraphs: [
      "The biblical texts on divorce are more nuanced than the soundbites we inherit from culture-war debates. The most frequently cited verse &mdash; Malachi 2:16, &ldquo;I hate divorce, says the Lord&rdquo; &mdash; is regularly stripped of its context. Malachi is addressing Jewish men in the post-exilic period who were abandoning their covenant wives to marry foreign women. The &ldquo;hate&rdquo; is directed at the faithless abandonment of covenant partners, not at the legal process of divorce as such. A divorced woman reading this text in context finds not a blanket condemnation of her experience but a condemnation of the husband who abandoned her. The verse is a statement of divine solidarity with the betrayed, not an indictment of those who have suffered betrayal.",
      "The Mosaic permission in Deuteronomy 24:1&ndash;4 is equally misread. Moses allowed a certificate of divorce when a husband found &ldquo;something indecent&rdquo; in his wife &mdash; a phrase whose meaning rabbis debated for centuries. The certificate was not an endorsement of divorce; it was a protection for women. In a world where a woman without a husband had no economic or social standing, a written certificate of divorce gave her the legal standing to remarry and be provided for. The law regulated and humanized a practice that was going to happen anyway, ensuring that the most vulnerable party &mdash; the woman &mdash; was not simply discarded without recourse. Jesus later makes exactly this point: Moses permitted divorce not because God approves it but &ldquo;because your hearts were hard.&rdquo;",
      "Jesus&rsquo;s teaching in Matthew 5:31&ndash;32 and 19:3&ndash;12 comes in response to a Pharisaic test. The Pharisees were divided between two schools: one allowed divorce only for sexual immorality, the other for virtually any reason. Jesus tightens the standard significantly &mdash; but he includes an exception clause. The Greek word is <em>porneia</em>, usually translated &ldquo;sexual immorality.&rdquo; The debate among scholars and theologians centers on whether <em>porneia</em> means adultery specifically, or a broader category of sexual betrayal. Evangelical scholars have argued both positions carefully. What is beyond dispute is that Jesus allows <em>some</em> exception &mdash; his teaching is not an absolute prohibition but a radical elevation of the standard of marital fidelity, with acknowledgment that the exception exists.",
      "Paul&rsquo;s contribution to the biblical conversation comes in 1 Corinthians 7:10&ndash;16, in what has been called the &ldquo;Pauline privilege.&rdquo; Paul restates Jesus&rsquo;s teaching that believing spouses should not divorce, but he addresses a new situation: a believer married to an unbeliever, where the unbelieving spouse chooses to leave. In this case, Paul writes, &ldquo;the brother or sister is not bound&rdquo; &mdash; a phrase that most commentators understand to mean the believer is free to divorce and, by implication, to remarry. Paul&rsquo;s concern is peace: God has called believers to peace, not to an obligation to preserve a marriage whose other party has already left. This is pastoral realism operating within theological principle.",
      "The spectrum of Christian views on divorce is wider than most people know. The Roman Catholic tradition holds that a valid sacramental marriage cannot be dissolved &mdash; though annulment declares that the conditions for a valid sacrament were never met. Traditional evangelical interpretation permits divorce for adultery and desertion only, following Matthew 19 and 1 Corinthians 7. Many Protestant scholars and pastors have argued that these two exceptions apply more broadly to patterns of behavior that constitute the same fundamental betrayal: abuse, for instance, is a form of covenant violation that parallels the betrayal of <em>porneia</em> in its destruction of the marriage. The most important thing to hold is that the biblical texts, read carefully and in context, are more pastorally generous than the soundbite &ldquo;God hates divorce&rdquo; suggests.",
      "Pastoral honesty requires saying plainly: a person who has been divorced &mdash; whether as the abandoning or the abandoned party, whether for the reasons Scripture names or not &mdash; is not beyond the reach of grace or the scope of the community of God. The biblical texts are clear about the seriousness of marriage and the tragedy of divorce; they are equally clear that no human failure, including marital failure, is the final word about a person. The Samaritan woman in John 4 had had five husbands and was living with a man she had not married &mdash; Jesus did not turn away from her but offered her living water. The gospel is larger than our marital history.",
    ],
  },
  {
    id: "Covenant, Brokenness, and Grace",
    heading: "Covenant, Brokenness, and Grace",
    paragraphs: [
      "Marriage is a covenant, not a contract. The distinction matters enormously. A contract is a conditional exchange: I do this if you do that. When the conditions are no longer met, the contract is dissolved. A covenant is a binding commitment between persons, made before God, that is not contingent on performance. When the Bible describes marriage as covenant &mdash; and it does, explicitly, in Malachi 2:14 &mdash; it places marriage in the category of obligations that are unconditional. The weight of this framing is significant: it explains why marriage is serious, why divorce is sorrowful, and why the tradition has understood marital commitment as something different in kind from ordinary contractual obligation.",
      "But the theology of covenant also provides the framework for understanding what happens when covenant is fundamentally violated. A covenant has two parties. When one party commits a fundamental act of betrayal &mdash; adultery, abandonment, abuse &mdash; the covenant is not simply strained; it is broken. The legal process of divorce is, in this framework, the formal recognition of a spiritual reality that has already occurred. The tragedy is not the divorce proceeding; the tragedy is the betrayal that preceded it. To hold a person legally bound to a covenant that the other party has already violated at its core is not fidelity to covenant theology &mdash; it is a misunderstanding of what covenants are and what makes them binding.",
      "The prophets give us the most arresting theological language for this reality. In Jeremiah 3:8, God himself is described as having given Israel a &ldquo;certificate of divorce&rdquo; &mdash; the same legal instrument Moses permitted &mdash; because Israel had played the harlot. The unfaithfulness of Israel to the covenant with God is described in marital terms: adultery, abandonment, prostitution. And God, the wronged covenant partner, responds with what can only be called grief and wounded love. This is not a comfortable theological observation, but it is a profound one: the experience of being abandoned by a covenant partner is something God knows from the inside.",
      "Hosea pushes the metaphor further than any other prophet. God commands Hosea to marry Gomer, who proves unfaithful, and then to pursue her even after her abandonment &mdash; to buy her back from slavery, to bring her home. This is the most extended picture of covenant love in the Hebrew Bible: love that grieves the betrayal of the one it has cherished, that is wounded by abandonment, that pursues even the one who has left, and that can still redeem. The Hosea narrative does not resolve into a tidy &ldquo;and they lived happily ever after&rdquo; &mdash; it lives in the tension of covenant love persisting through betrayal and brokenness. This is not a model for what every individual must do in a broken marriage, but it is a picture of what covenant love, at its most costly, looks like.",
      "What does grace say to the divorced person? The gospel is not a theology of successful marriages; it is a theology of redemption from failure. The cross does not exist for the person who has always done everything right &mdash; it exists precisely for the people whose lives contain catastrophic failures, including the failure of a marriage. To stand at the foot of the cross is not to pretend the failure did not happen but to place it within the frame of what God does with failure: he redeems it. He makes new things. He writes resurrection endings to stories that look like they ended in death. This is not a minimization of the tragedy of divorce; it is the insistence that tragedy is not the genre in which God writes the final chapter.",
      "Broken covenant calls for grief, not merely for legal processing. The person whose marriage has ended needs to mourn &mdash; not just manage the logistics of separation, but grieve the death of a future that was promised and is now gone. The church&rsquo;s calling in this moment is not to rush the divorced person toward recovery, nor to assign blame and determine guilt, but to hold the space of grief. The covenant was real. Its breaking is real. The sorrow is a proportionate response to what has been lost, and grace does not bypass the sorrow &mdash; it accompanies it.",
    ],
  },
  {
    id: "Grief and Shame",
    heading: "Grief, Shame, and the Gospel",
    paragraphs: [
      "Divorce is a death. It is the death of a future that was expected, of a family that was planned, of an identity that was built. The married person has organized their life around a shared project with another person &mdash; a household, perhaps children, certainly a vision of who they were going to become together. When the marriage ends, all of that dies. The death is not metaphorical; it is as real and as devastating as the death of a person. And like the death of a person, it requires grief. Not processing. Not working through. Grief &mdash; which is the honest response of a person who has lost something they genuinely loved.",
      "The grief of divorce has its own particular cruelty in a way that other bereavements do not. When a person dies, the community generally understands that the grief is proportionate and legitimate. When a marriage dies, there is almost always the question of fault, which introduces a second wound alongside the first: the wound of blame. Even the person who was wronged in the most clear-cut way &mdash; abandoned, betrayed, abused &mdash; often finds themselves asking what they could have done differently. And the person who bears some responsibility for the marriage&rsquo;s end carries not only grief but guilt, and the guilt compounds the grief in ways that can be genuinely paralyzing. The church&rsquo;s pastoral calling is to distinguish between the grief, the guilt, and the shame &mdash; and to respond to each appropriately.",
      "In the church, this grief is very often complicated by shame. Shame is the sense that one&rsquo;s very self is defective &mdash; not merely that something bad has happened, but that the person who is experiencing it is damaged, lesser, marked. Divorce in the church carries a particular stigma: the sense that one has failed God, failed the community, been unable to sustain the most basic of human commitments. This shame is compounded by the church&rsquo;s historical tendency to treat divorced people as second-class members &mdash; excluding them from leadership, treating them as cautionary tales, addressing them primarily through the lens of their failure. The pastoral disaster of this response cannot be overstated. The church that specializes in making people feel worse about what they already feel worst about is not practicing the gospel; it is practicing a form of cruelty with theological justification.",
      "The gospel response to shame is not reassurance but resurrection. Reassurance says: &ldquo;It&rsquo;s not that bad.&rdquo; Resurrection says: &ldquo;It is exactly that bad, and I am making something new out of it.&rdquo; Neither reassurance nor minimization gets to the root of shame. What gets to the root of shame is an encounter with a love that knows everything about you &mdash; including your worst failures and most shameful moments &mdash; and chooses you anyway. The Samaritan woman at the well was the divorced woman of her community, multiply married, currently outside the covenant &mdash; and Jesus chose her as the first person to whom he disclosed his identity as Messiah. The gospel specializes in choosing the people who expect to be excluded.",
      "Psalm 34:18 carries enormous pastoral weight for the divorced person: &ldquo;The Lord is near to the brokenhearted and saves the crushed in spirit.&rdquo; The promise is not that God will fix the situation quickly, or explain why it happened, or prevent the pain &mdash; it is that he is <em>near</em>. Nearness is what the divorced person most needs and most often lacks: a community that draws close rather than withdrawing, a God who moves toward the broken rather than demanding they clean up before approaching. The theology of the incarnation is exactly this: God moved toward human brokenness, took human flesh, entered the full range of human suffering, and stayed. Divorce is within that range. The cross addresses it. The resurrection promises beyond it.",
      "The church needs to recover the category of lament for the divorced. Lament is not the same as complaint or bitterness &mdash; it is the formal act of bringing grief honestly into the presence of God and refusing to pretend that things are better than they are. The psalms of lament &mdash; Psalm 22, Psalm 88, Psalm 13 &mdash; give language to experiences that do not resolve quickly, that do not end with a turn toward praise on the schedule the community would prefer. The divorced person who is permitted to lament, within a community that can tolerate unresolved grief, is the person who is actually healing. The one who must perform recovery before they have experienced it is the one who is accumulating a wound beneath the wound.",
    ],
  },
  {
    id: "Rebuilding Identity",
    heading: "Rebuilding Identity After Divorce",
    paragraphs: [
      "When a marriage ends, so does the identity that was built around it. For many people, the question that emerges in the weeks and months after separation is one they have not had to ask in years: who am I? The married identity &mdash; spouse, partner, half of a household &mdash; has been dismantled. The parenting identity may be complicated by custody arrangements. The social identity, built around a couple&rsquo;s shared friendships and community, often fractures along with the marriage. The divorced person is left with the task of constructing a self outside of the framework they have inhabited, often while managing enormous practical stress and emotional pain. This is not a small thing. It can feel like starting over from nothing.",
      "The Christian answer to this question is not a program for self-reconstruction but a theological claim: your identity is not in your marital status. The person who has been baptized into Christ carries a primary identity that predates and postdates every human relationship. You are &ldquo;in Christ&rdquo; &mdash; a phrase Paul uses over 150 times in his letters to describe the most fundamental fact about a believer&rsquo;s existence. That union is not contingent on whether your marriage succeeded. It is not affected by whether a covenant was broken or by whose fault it was. &ldquo;There is therefore now no condemnation for those who are in Christ Jesus&rdquo; (Romans 8:1). The &ldquo;no condemnation&rdquo; does not have a footnote exempting the divorced.",
      "Tim Keller&rsquo;s formulation is particularly useful here: &ldquo;The gospel frees us from the need to be validated by our successes, including marital success.&rdquo; The person whose identity is built on being a successful spouse &mdash; on having a good marriage, on having been chosen and cherished &mdash; is a person whose identity is catastrophically threatened by divorce. The gospel offers a different foundation: you are loved with an unchanging love, chosen by the God of the universe, not because of your relational success but because of grace. This identity cannot be taken away by a failing marriage, a departing spouse, or a judge&rsquo;s signature on a dissolution decree.",
      "The practical work of rebuilding identity after divorce involves multiple streams. Community is essential: the divorced person needs people who knew them before the marriage and know them now, who can bear witness to a continuity of self that survives the marriage&rsquo;s end. Vocation &mdash; work, calling, service &mdash; provides a context for contributing and being received as a contributor outside of the marital role. Spiritual disciplines &mdash; prayer, Scripture, Sabbath, participation in gathered worship &mdash; anchor the identity in the theological reality that the marriage did not provide and the divorce cannot remove. And honest counseling, with a therapist or pastor who can help distinguish between what was genuinely the divorced person&rsquo;s responsibility and what was not, provides the clarity necessary for growth rather than repetition.",
      "One of the particular dangers of this season is the premature reconstruction of identity around a new relationship. The temptation is understandable: the pain of the old identity&rsquo;s dissolution is acute, and the promise of a new partner who sees and chooses you is intensely compelling. But the person who moves into a new relationship before the old identity has been grieved and the new one genuinely formed is the person who imports unresolved material from the old marriage into the new one. The work of identity rebuilding is interior work that cannot be shortcut by exterior circumstances, however attractive those circumstances are.",
      "The tradition&rsquo;s recovery of singleness as a genuine vocation &mdash; not a consolation prize but a real and holy state with its own goods &mdash; is enormously relevant for the divorced person. Paul&rsquo;s teaching in 1 Corinthians 7 treats the single state as potentially superior to marriage for the purposes of undivided attention to the things of God. The person who emerges from a divorce into a season of singleness is not in a waiting room for the next marriage &mdash; they are in a state that the New Testament takes seriously as a context for growth, service, and intimacy with God that marriage can actually complicate. The church that can communicate this without making it feel like a sentence is the church that has something genuinely good to offer.",
    ],
  },
  {
    id: "Parenting Through Divorce",
    heading: "Parenting Through Divorce",
    paragraphs: [
      "Divorce with children is its own pastoral category. The children of divorce carry a particular burden: they are the people most affected by the marriage&rsquo;s end who had the least power to prevent it, the least capacity to understand it, and the least ability to advocate for their own needs within it. They did not choose this. They cannot divorce their parents. They must navigate loyalty conflicts, moving between two households, the loss of the family as it was, and the grief that nobody is especially focused on helping them process because the adults are consumed by their own. The pastoral care of divorced families with children must include &mdash; must prioritize &mdash; the care of the children.",
      "The research on what helps children through their parents&rsquo; divorce is consistent across decades: the single most important factor is the level of conflict between the parents. Children who witness ongoing high-conflict warfare between their parents suffer more and more durably than children who experience a cooperative, low-conflict separation. The quality of the children&rsquo;s adjustment is almost entirely predicted not by the fact of the divorce itself but by what the parents do afterward. This is a profound pastoral challenge: it asks the divorced person to lay down the entirely legitimate grievance of what was done to them for the sake of the children who need something different from both parents than what the adults are currently able to give each other.",
      "The common mistakes made by divorcing parents have been well-documented by family researchers and pastoral counselors. Using children as messengers between parents &mdash; even once &mdash; places an inappropriate burden on them and communicates that they are a tool in adult conflict rather than protected persons. Speaking negatively about the other parent in the children&rsquo;s presence is one of the most consistently damaging things a divorcing parent can do, even when the negative things are entirely true: children love both parents and experience criticism of one parent as a criticism of part of themselves. Making children choose sides, whether explicitly or through emotional pressure, is a form of abuse that does long-term psychological damage. These are not abstract pastoral principles; they are the habits that distinguish the divorcing parent who is able to put the children first from the one who, however understandably, cannot.",
      "God&rsquo;s self-disclosure as a Father to the fatherless (Psalm 68:5) is not metaphor in this context; it is pastoral promise. The child who has lost the intact family they expected, whose home has been divided, whose daily experience of stability has been disrupted, is a child whom God specifically names as his concern. The church community has an enormous role to play here: as extended family, as stable adult presences, as the community that provides what no single parent can provide alone. The child who has godparents, youth leaders, Sunday school teachers, and small group members who know their name and their situation is a child who has received something the divorce cannot take away.",
      "Co-parenting as a Christian practice is an act of costly charity toward someone who has hurt you, for the sake of people you love. This framing is important: it removes the expectation that co-parenting will feel good, or that it will be reciprocated in kind, or that the other parent will be grateful or gracious. Christian charity does not require any of those things. It requires prioritizing the flourishing of the children above personal conflict &mdash; which means returning calls and emails promptly for handoffs, sharing important information about the children&rsquo;s school and medical lives, presenting a cooperative face to the children regardless of what is happening between the adults, and attending school events together without requiring the children to manage adult discomfort.",
      "When the other parent is difficult, hostile, or actively uncooperative, the Christian calling remains the same but the practice becomes more costly. It is possible to co-parent with grace even when the other parent does not &mdash; and the research shows that one cooperative parent protects children significantly, even when the other is not. The pastoral community can help by providing support, accountability, and the frank naming of when a co-parenting relationship has become so toxic that formal legal structures are needed to protect the children. There is no virtue in absorbing abuse in the name of cooperation; there is virtue in building the structures that allow children to thrive even in damaged adult relationships.",
    ],
  },
];

const videoItems = [
  { videoId: "6TqHTs7PkLk", title: "Tim Keller on Divorce and the Gospel" },
  { videoId: "D2etEPVlkNk", title: "Healing After Divorce — A Christian Perspective" },
  { videoId: "kRpQ9rKLMeA", title: "What Does the Bible Say About Divorce?" },
];

export default function ChristianDivorceRecoveryPage() {
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
            Faith &amp; Recovery
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Divorce Recovery
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Navigating divorce as a Christian &mdash; what the Bible actually says about divorce, the theology of covenant and brokenness, healing from grief and shame, rebuilding identity in Christ, parenting through divorce, and what faithful recovery looks like.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;The Lord is near to the brokenhearted and saves the crushed in spirit.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>Psalm 34:18</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? `rgba(225, 29, 72, 0.12)` : "transparent",
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
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>The Gospel Is Larger Than Your Marital History</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>Divorce is a real loss and a real grief. The Bible takes it seriously, and so does God &mdash; which is why &ldquo;I hate divorce&rdquo; is a statement of solidarity with the betrayed, not a condemnation of the struggling. The cross addresses marital failure. The resurrection promises new life after it. You are not defined by what has ended; you are being defined by the one who makes all things new.</p>
        </div>
      </main>
    </div>
  );
}
