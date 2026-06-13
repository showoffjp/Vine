"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The Biblical Foundation",
  "Forgiveness vs. Reconciliation",
  "Hard Cases",
  "Forgiveness and Justice",
  "The Practice of Forgiveness",
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
    id: "The Biblical Foundation",
    heading: "Forgiveness in Scripture",
    paragraphs: [
      "The theology of forgiveness in the New Testament begins not with a command but with a declaration: we have been forgiven. Before Jesus instructs his followers to forgive one another, he announces that God in Christ has forgiven them. This sequence is not incidental &mdash; it is the entire logic of Christian forgiveness. Ephesians 4:32 captures it with precision: &ldquo;Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.&rdquo; The &ldquo;as&rdquo; is not a standard of difficulty but a source of power. We forgive because we have been forgiven. The cross is the engine that makes human forgiveness possible.",
      "In Matthew 18:21, Peter asks Jesus how many times he must forgive a brother who sins against him &mdash; offering the generous answer of seven times. Jesus responds: &ldquo;I do not say to you seven times, but seventy-seven times&rdquo; (or seventy times seven, depending on translation). The hyperbole is the point. Jesus is not setting a numerical limit at 490 but abolishing the limit entirely. Forgiveness, in the kingdom of God, is not a scarce resource to be rationed but an inexhaustible posture rooted in the inexhaustible grace of God.",
      "The parable of the unforgiving servant (Matthew 18:23&ndash;35) gives this teaching its teeth. A servant who has been forgiven an astronomical debt &mdash; ten thousand talents, a sum no individual could ever repay &mdash; immediately goes out and throttles a fellow servant who owes him a hundred denarii. The master&rsquo;s outrage is the parable&rsquo;s theological argument: the person who has received infinite grace and refuses to extend finite grace has fundamentally misunderstood what has happened to them. Unforgiveness is not merely unkind &mdash; it is spiritually incoherent for one who has grasped the gospel.",
      "Colossians 3:13 reinforces the same pattern: &ldquo;Bearing with one another and, if one has a complaint against another, forgiving each other; as the Lord has forgiven you, so you also must forgive.&rdquo; The connection between divine and human forgiveness is not optional or aspirational &mdash; it is the shape of Christian community. Those who have been recipients of grace are called to become conduits of it. The vertical forgiveness received from God creates the horizontal forgiveness extended to others.",
      "The Lord&rsquo;s Prayer addresses forgiveness in language that has troubled commentators for centuries: &ldquo;forgive us our debts, as we also have forgiven our debtors&rdquo; (Matthew 6:12). This is not a works-based framework where God&rsquo;s forgiveness is conditional on our prior performance. Rather, the prayer reveals that genuine reception of divine forgiveness produces a forgiving heart. The person who prays these words without the disposition to forgive is speaking them inauthentically. Jesus&rsquo; commentary in verses 14&ndash;15 underlines the point: the unforgiving heart is evidence that it has not truly received forgiveness.",
      "The divine initiative in forgiveness is essential to the biblical narrative. God does not forgive in response to human effort or merit &mdash; he initiates the reconciliation while we were still enemies (Romans 5:10). The cross is not humanity reaching up to appease God but God descending to absorb the full weight of human sin. This initiative precedes and grounds all human forgiveness. The Christian who forgives is not inventing something new but participating in a movement God began at Calvary.",
      "It is also worth noting that the biblical vocabulary of forgiveness is rich and multifaceted. The Greek word &ldquo;aphiemi&rdquo; means to release or let go &mdash; to set free a debt or offense. &ldquo;Charizomai&rdquo; means to give grace, to bestow freely. These words together suggest that forgiveness is both a legal act (releasing a debt) and a relational act (extending grace). It is not merely the cancellation of a ledger entry but the restoration of a posture of goodwill toward the one who has wronged you.",
    ],
  },
  {
    id: "Forgiveness vs. Reconciliation",
    heading: "The Crucial Distinction Between Forgiveness and Reconciliation",
    paragraphs: [
      "One of the most pastorally significant distinctions in the theology of forgiveness is the difference between forgiveness and reconciliation. Failure to distinguish them causes two opposite errors: either demanding that victims must immediately restore relationship with those who harmed them (conflating forgiveness with reconciliation), or assuming that because reconciliation is impossible, forgiveness itself is impossible (confusing the two). The distinction is liberating for both.",
      "Forgiveness is a unilateral act. One person can decide to forgive. It does not require the presence, awareness, repentance, or participation of the offender. A woman can forgive her abuser who has never apologized, never acknowledged the harm, and never changed. A child can forgive a parent who died before any acknowledgment was possible. Forgiveness, in this sense, is an internal transaction &mdash; a decision to release the offender from the debt of moral vengeance, to surrender the right to punish, to give up bitterness as a way of relating to the past.",
      "Reconciliation, by contrast, is bilateral. It requires the participation of both parties. It requires, at minimum, the offender&rsquo;s acknowledgment of harm done, genuine repentance, and changed behavior. Trust, once broken, must be rebuilt over time through consistent action. Reconciliation is not demanded by the theology of forgiveness &mdash; it is a separate goal that may or may not be achievable depending on the offender&rsquo;s response. You cannot reconcile with someone who is not repentant, not present, or not safe.",
      "The resurrection appearances of Jesus illuminate this distinction. On the cross, Jesus said, &ldquo;Father, forgive them, for they know not what they do&rdquo; (Luke 23:34) &mdash; a unilateral extension of forgiveness to those who were in the act of crucifying him. But the restoration of the disciples did not happen at the cross. Peter&rsquo;s threefold restoration (&ldquo;Do you love me?&rdquo;) happened after the resurrection, after Peter had been confronted with his failure, after an encounter that allowed for genuine acknowledgment and new commissioning. Forgiveness preceded and enabled reconciliation, but they were not the same event.",
      "This distinction is pastorally crucial for survivors of abuse. Victims have sometimes been told that they must forgive their abusers and restore the relationship, under the assumption that forgiveness requires reconciliation. This is theologically wrong and practically dangerous. A woman who has been battered can and should work toward forgiveness &mdash; for her own spiritual and psychological health &mdash; but she is not obligated to return to an unsafe relationship. Forgiveness does not require proximity to the offender. It does not require trust. It does not require resumed relationship.",
      "The distinction also matters in everyday conflicts. A friend who betrayed you can be forgiven before they apologize &mdash; you can release the debt internally even while the relationship remains strained. Whether the friendship is restored depends on what happens next: whether there is acknowledgment, honesty, and changed behavior. Forgiveness opens the door to reconciliation; it does not guarantee it. And in some cases &mdash; where the offender is unrepentant, unsafe, or unavailable &mdash; reconciliation may never be appropriate.",
      "Lewis Smedes, whose work on forgiveness remains some of the most theologically precise and pastorally sensitive available, put it memorably: forgiveness and forgetting are not the same, forgiveness and excusing are not the same, and forgiveness and reconciliation are not the same. Forgiveness is the hard inner work of the injured party; reconciliation is the harder relational work of two parties together. The first is always possible; the second depends on both.",
    ],
  },
  {
    id: "Hard Cases",
    heading: "When Forgiveness Feels Impossible",
    paragraphs: [
      "The command to forgive is easy to affirm in principle and agonizing in practice. When the harm is severe &mdash; when a child has been abused, a marriage destroyed by betrayal, a life shattered by violence &mdash; forgiveness can feel not merely difficult but morally obscene. To say &ldquo;you must forgive&rdquo; to a survivor of severe trauma without acknowledging the weight of that command is pastoral malpractice. The hardest cases of forgiveness deserve honest, unhurried engagement.",
      "Forgiving after abuse is among the most complex applications of the theology of forgiveness. Abuse &mdash; whether physical, sexual, emotional, or spiritual &mdash; involves a profound violation of personhood, a weaponizing of trust, and often a sustained pattern of harm. The injuries are not merely emotional but neurological, relational, and spiritual. Survivors may spend years in therapy working through what happened. Forgiveness in these contexts is not a one-time decision but a long journey, often undertaken with the help of counselors, spiritual directors, and communities of support. The command to forgive does not supersede the need for safety, accountability, and healing.",
      "Forgiving the unrepentant is another hard case. When the person who harmed you has never acknowledged the harm, has minimized or denied it, or has continued the harmful behavior, the usual mechanics of forgiveness &mdash; acknowledgment, apology, changed behavior &mdash; are absent. Yet the Christian tradition insists that forgiveness can still occur, because it is the injured person&rsquo;s act of releasing the debt, not a joint transaction. The unrepentant person does not have to participate in the forgiveness for the forgiveness to be real. This does not mean the situation is resolved &mdash; accountability and justice may still need to be pursued &mdash; but the internal release can happen even without the offender&rsquo;s cooperation.",
      "Forgiving the dead raises its own set of difficulties. Many people carry injuries from parents, siblings, or others who died before any reckoning was possible. The opportunity for face-to-face acknowledgment and apology is gone. Yet the work of forgiveness &mdash; the internal release, the lament, the letting go of the claim to vengeance &mdash; can still be done. Therapists often facilitate this through letter-writing, empty-chair exercises, or grief work. The forgiveness is real even though it is asymmetrical and will receive no acknowledgment from the other side.",
      "Forgiveness when the harm is ongoing presents unique challenges. If someone is still being harmed &mdash; in an ongoing abusive relationship, in a context of chronic mistreatment &mdash; forgiveness cannot mean passive acceptance of continued harm. The theology of forgiveness has nothing to say against protective action, boundary-setting, or separation from a source of ongoing harm. Forgiveness is about the past and the inner posture; it does not obligate victims to expose themselves to continued harm in the name of grace.",
      "The difference between forgiving and excusing is a critical one. To excuse something is to conclude that it was understandable, that the circumstances made it inevitable, that the person wasn&rsquo;t really responsible. Forgiveness is the opposite: it acknowledges that what happened was genuinely wrong, that the person was genuinely responsible, and that nevertheless the debt is being released. Lewis Smedes captures this well: &ldquo;You do not excuse the people you forgive; you forgive them precisely because they are not excused.&rdquo; Forgiveness requires that the harm be named accurately before it can be released.",
      "Lewis Smedes&rsquo; most quoted line &mdash; &ldquo;To forgive is to set a prisoner free and discover that the prisoner was you&rdquo; &mdash; points to the psychological dimension of forgiveness. Unforgiveness is not a neutral stance; it is an active commitment to carrying the weight of the injury indefinitely. Research consistently shows that chronic unforgiveness is associated with higher rates of anxiety, depression, cardiovascular problems, and diminished immune function. Forgiveness, by contrast, is associated with measurable improvements in psychological and physical health. The command to forgive is not only morally right; it is, in a profound sense, the path to healing for the one who forgives.",
    ],
  },
  {
    id: "Forgiveness and Justice",
    heading: "Can God Forgive Without Compromising Justice?",
    paragraphs: [
      "One of the most searching theological questions about forgiveness concerns its relationship to justice. If God simply forgives sin &mdash; waves it away, treats it as though it never happened &mdash; then it would seem that justice is sacrificed on the altar of mercy. The guilty go unpunished. The victims of sin receive no vindication. And the moral order of the universe, which depends on the truthful naming of wrong as wrong, is undermined. A God who forgives too easily would not be just. A God who is just cannot be easily forgiving. This is the dilemma the atonement resolves.",
      "Romans 3:25&ndash;26 states the resolution with theological precision: God put Christ forward &ldquo;to show his righteousness at the present time, so that he might be just and the justifier of the one who has faith in Jesus.&rdquo; The cross is not God overlooking sin but God dealing with it &mdash; fully, finally, and at infinite cost to himself. At Calvary, both justice and mercy meet. The penalty for sin is not waived; it is absorbed by the Son. God does not forgive by pretending sin did not happen. He forgives because sin has been fully judged &mdash; in Christ.",
      "This means that Christian forgiveness operates on a different basis than cheap sentimentality. When God forgives, he is not ignoring the reality of harm; he is declaring that the harm has been fully addressed in the death of his Son. The moral seriousness of sin is not diminished by forgiveness &mdash; it is, if anything, amplified. The fact that dealing with sin required the death of God incarnate reveals how weighty and serious sin actually is. Divine forgiveness is costly forgiveness, and its cost is the measure of its seriousness.",
      "For human beings, the same logic applies. Forgiveness and the pursuit of justice for harm done are not mutually exclusive. A victim of crime can forgive her perpetrator &mdash; can release him from the personal debt of vengeance, can refuse to define herself by bitterness toward him &mdash; and simultaneously pursue appropriate legal accountability. The legal system exists precisely because justice is not merely a personal transaction. When one person harms another, they have violated not only a private relationship but a social and moral order that requires public accountability. Forgiveness operates in the personal and spiritual sphere; justice operates in the social and legal sphere.",
      "Archbishop Desmond Tutu&rsquo;s theology of forgiveness, forged in the context of South Africa&rsquo;s Truth and Reconciliation Commission, is the most prominent modern attempt to hold justice and forgiveness together at a societal level. Tutu argued that there is no future without forgiveness &mdash; that a society built on cycles of retribution cannot heal &mdash; but he equally insisted that forgiveness without truth-telling is false reconciliation. The TRC required perpetrators to publicly acknowledge their crimes before receiving amnesty. This combination &mdash; full acknowledgment of truth, genuine accountability, and the possibility of forgiveness &mdash; attempts to honor both justice and mercy in a way that cheap amnesty cannot.",
      "The practical implication for victims is liberating: you do not have to choose between forgiving the person who harmed you and holding them accountable. These are different acts in different spheres. You can forgive someone in your heart &mdash; releasing him from your private claim to vengeance &mdash; while simultaneously reporting his actions to appropriate authorities, pursuing legal remedies, or advocating for systemic change that protects others. Forgiveness is not a cover-up; it is the opposite of a cover-up. It names the harm truly and then chooses a different response than retaliation.",
      "The hope of eschatological justice also informs the Christian theology of forgiveness. Not all injustice will be rectified in this life. Many perpetrators go unpunished. Many victims die without seeing vindication. The Christian hope is that God, who is both perfectly just and perfectly merciful, will ultimately right every wrong. This eschatological confidence &mdash; that final justice belongs to God &mdash; is part of what frees the Christian to release the personal claim to vengeance. &ldquo;Vengeance is mine, I will repay, says the Lord&rdquo; (Romans 12:19). The command to leave room for God&rsquo;s wrath is not passivity in the face of injustice but trust that the final account is in better hands than ours.",
    ],
  },
  {
    id: "The Practice of Forgiveness",
    heading: "How to Forgive When You Don’t Feel Like It",
    paragraphs: [
      "Forgiveness is frequently described as if it were a single moment &mdash; a decision made once that resolves the matter. In practice, forgiveness is almost always a process. The initial decision to forgive is real and significant, but it is rarely the end of the journey. The memories return. The anger flares. The sense of injustice reasserts itself. This does not mean the forgiveness was not real; it means forgiveness is a direction of travel, not a destination arrived at in a single step. The decision must often be renewed, sometimes daily, until the emotional reality catches up with the volitional commitment.",
      "Jesus commanded his followers to pray for those who persecute them (Matthew 5:44). This is among the most demanding instructions in the Sermon on the Mount, and it is not coincidental that it involves prayer. To pray for someone who has wronged you is to bring them before God with intention &mdash; not to pray that they get what they deserve (though lament can include this), but to pray for their welfare, their repentance, their flourishing. This practice has a documented effect on the one who prays: it is difficult to sustain hatred toward someone you are genuinely interceding for. Prayer for the enemy is one of the spiritual mechanisms by which forgiveness becomes real.",
      "The relationship between the decision to forgive and the feeling of having forgiven is complex and often misunderstood. Many people believe they have not truly forgiven because they still feel pain, anger, or grief when they think about the person who wronged them. But forgiveness is not the elimination of these emotions &mdash; it is the redirection of them. You can feel genuine grief about what happened while simultaneously having released the offender from the personal claim to vengeance. The pain is about the loss; the forgiveness is about the relationship to the offender. They are distinct experiences that can coexist.",
      "When forgiveness feels persistently blocked &mdash; when every attempt to forgive collapses back into rage or bitterness or despair &mdash; professional help is not a sign of spiritual failure but of wisdom. Trauma counselors and therapists who understand the intersection of psychology and spirituality can help people work through the underlying wounds that make forgiveness feel impossible. In many cases, what blocks forgiveness is not a deficiency of willpower or faith but unprocessed trauma that needs clinical support. Seeking that support is consistent with, not contrary to, the spiritual work of forgiveness.",
      "The forgiveness prayer &mdash; sometimes called the Lord&rsquo;s Prayer of release &mdash; is a spiritual practice that many find helpful. In its simplest form, it involves speaking the name of the person who wronged you and saying, &ldquo;I forgive [name] for [specific harm]. I release the debt. I surrender my right to vengeance.&rdquo; This act of naming is important: forgiveness that is vague and general is less transformative than forgiveness that is specific and honest about what actually happened. Some add: &ldquo;I give this person to you, God. I place them in your hands.&rdquo; This transfers the burden of ultimate justice from the forgiver to God.",
      "The research literature on forgiveness has grown substantially in the last three decades, and its findings consistently support what the Christian tradition has long claimed. Studies by Robert Enright, Everett Worthington, and others have found that forgiveness interventions reduce anxiety, depression, and hostility while improving self-esteem, hope, and sense of well-being. Forgiveness has documented health benefits: lower blood pressure, stronger immune function, better sleep. The person who forgives is not doing the offender a favor &mdash; or not only that. They are doing themselves a favor. The Christian command to forgive turns out to be, in the deepest sense, aligned with human flourishing.",
      "The Christian community has an indispensable role in the practice of forgiveness. The church is called to be a community of forgiven forgivers &mdash; people who regularly receive grace and regularly extend it. When this works well, the community becomes a laboratory of forgiveness where people learn, practice, fail, and try again in the presence of others who are on the same journey. The sacrament of confession and absolution (in traditions that practice it) ritualizes and externalizes the reality of divine forgiveness in ways that reinforce the inner work. Even informal practices &mdash; acknowledging wrongs, asking forgiveness, extending grace &mdash; form the character that makes genuine forgiveness possible over time.",
    ],
  },
];

const videoItems = [
  { videoId: "m1BCv1mKC4c", title: "Tim Keller on Forgiveness" },
  { videoId: "sFNiV0kVNdg", title: "John Piper on the Power of Forgiveness" },
  { videoId: "fhMRgHSILLU", title: "Forgiveness and Reconciliation — What the Bible Teaches" },
];

export default function ChristianForgivenessTheologyPage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.5rem" }}>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Theology of Forgiveness
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            What the Bible says about forgiveness &mdash; why we forgive, how forgiveness differs from reconciliation, hard cases, and how to forgive when you don&rsquo;t feel like it.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>Ephesians 4:32</p>
          </div>
        </header>

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
                background: tab === t ? "rgba(58, 125, 86, 0.12)" : "transparent",
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

        {currentSection && tab !== "Videos" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>{currentSection.heading}</h2>
            {currentSection.paragraphs.map((para, i) => (
              <p key={i} style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </section>
        )}

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

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.5rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>The Freedom of Forgiveness</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
            Forgiveness is not a feeling to be waited for but a choice to be made &mdash; and renewed, and made again. It is rooted not in the offense being minimized but in the gospel being taken seriously. The one who has been forgiven an infinite debt is freed to release finite ones. In extending grace, the forgiver participates in the very life of God.
          </p>
        </div>
      </main>
    </div>
  );
}
