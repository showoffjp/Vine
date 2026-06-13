"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["The Gift of Sabbath", "Rest in a Culture of Exhaustion", "Jesus Lord of the Sabbath", "Rhythms of Work and Rest", "True Rest in Christ", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "The Gift of Sabbath",
    heading: "The Gift of Sabbath: Rest Rooted in Creation",
    paragraphs: [
      "The theology of Sabbath begins not with a command but with a divine example. At the climax of the creation account, Scripture says that &ldquo;on the seventh day God finished his work that he had done, and he rested on the seventh day from all his work that he had done. So God blessed the seventh day and made it holy&rdquo; (Genesis 2:2-3). This is a startling claim. The God who never tires, who neither slumbers nor sleeps, deliberately ceased from his labor and set apart a day as holy. Rest is therefore woven into the fabric of creation itself, established before any law was given, before there was any human failure to correct. Sabbath is not a remedy for sin; it is a feature of the good world God made. The rhythm of work and rest is as much a part of the created order as the rhythm of day and night.",
      "When the Sabbath command appears in the Ten Commandments, it is grounded explicitly in this creation pattern: &ldquo;Remember the Sabbath day, to keep it holy. Six days you shall labor, and do all your work, but the seventh day is a Sabbath to the Lord your God&hellip; For in six days the Lord made heaven and earth, the sea, and all that is in them, and rested on the seventh day. Therefore the Lord blessed the Sabbath day and made it holy&rdquo; (Exodus 20:8-11). The command to keep Sabbath is the longest of the ten, and it is framed as remembering &mdash; calling Israel to imitate the very rhythm of their Creator. To keep the Sabbath is to confess that the world was made by a God who rests, and that human beings, made in his image, are made for rest as well as for work.",
      "The Sabbath is presented throughout Scripture as a gift and a sign of the covenant, not merely an obligation. &ldquo;You shall keep my Sabbaths, for this is a sign between me and you throughout your generations&rdquo; (Exodus 31:13). The day set apart marked Israel as belonging to the Lord, a people whose identity was not defined by ceaseless production but by their relationship with a holy God. Far from being a burden, the Sabbath was a weekly declaration of grace: a day on which the people did nothing to earn their standing and simply received the goodness of God. In a world of relentless toil, the gift of a guaranteed day of rest was a radical mercy, extended even to servants, foreigners, and animals.",
      "The book of Deuteronomy grounds the Sabbath not only in creation but also in liberation. &ldquo;You shall remember that you were a slave in the land of Egypt, and the Lord your God brought you out from there with a mighty hand and an outstretched arm. Therefore the Lord your God commanded you to keep the Sabbath day&rdquo; (Deuteronomy 5:15). In Egypt, the Israelites had been slaves with no day off, their worth measured entirely by their output of bricks. The Sabbath is the antithesis of slavery. It declares that the people of God are free &mdash; free from the tyranny of unending labor, free from the lie that they exist only to produce. To rest on the Sabbath is to remember that the God who liberated them does not relate to them as Pharaoh did.",
      "Embedded in the Sabbath is a radical idea that confronts every culture in every age: human worth is not based on productivity. The Sabbath insists that a person is valuable not because of what they accomplish but because they are made and loved by God. On the Sabbath, the farmer does not farm, the merchant does not trade, the laborer does not labor &mdash; and the world does not fall apart. This weekly cessation is a practiced confession that the world is upheld by God and not by human effort. It dismantles the idolatry of achievement and the anxiety of self-justification, returning the human heart to its proper posture of receiving rather than grasping.",
      "The Sabbath also functions as a great equalizer and an act of trust. By commanding rest for servants, foreigners, and animals alike, it declares that the dignity of rest belongs to all, not merely the powerful. And by requiring people to stop working &mdash; trusting that God will provide even when their hands are still &mdash; the Sabbath becomes an exercise of faith. The Israelites gathered a double portion of manna before the Sabbath and trusted that it would be enough (Exodus 16). To keep the Sabbath is to release the white-knuckled grip on one&rsquo;s own life and to rest in the provision of a God who is good. This is the gift hidden within the command: a regular, embodied reminder that we are creatures, beloved and sustained, and not the anxious managers of our own existence.",
    ],
  },
  {
    id: "Rest in a Culture of Exhaustion",
    heading: "Rest in a Culture of Exhaustion",
    paragraphs: [
      "The modern world is in the grip of an epidemic of exhaustion. Burnout, chronic stress, and overwork have become so normalized that they are often worn as badges of honor. The cultural script tells us that to be busy is to be important, that to rest is to fall behind, and that our value is measured by our productivity and our output. Into this culture the ancient gift of the Sabbath speaks with renewed urgency. The contemporary crisis of exhaustion is not merely a problem of time management; it is a spiritual condition, a way of living that has forgotten that human beings are creatures who were made to rest.",
      "Technology has dramatically intensified the problem by erasing the boundaries that once protected rest. The smartphone has made every person reachable at every hour, dissolving the line between work and home, labor and leisure, the office and the bedroom. Email follows us on vacation; notifications interrupt our meals; the expectation of constant availability has colonized the spaces that were once reserved for rest and relationship. The Sabbath, by contrast, draws a hard boundary. It declares that there is a time to be unreachable, a time to set down the tools, a time when the work simply waits. In an age of endless connectivity, the discipline of unplugging has become a profoundly countercultural act.",
      "The pastor and author John Mark Comer, in his widely read book &ldquo;The Ruthless Elimination of Hurry,&rdquo; has helped many Christians see hurry itself as a spiritual problem. He draws on counsel reportedly given to him by the philosopher and spiritual writer Dallas Willard, who, when asked what a person must do to be spiritually healthy, replied that one must &ldquo;ruthlessly eliminate hurry from your life.&rdquo; Hurry, Willard observed, is the great enemy of the spiritual life. A hurried person cannot love well, cannot be present, cannot pray with attention, cannot notice the people in front of them. Hurry corrodes the soul. The Sabbath, and the broader practice of unhurried living, is the antidote &mdash; a deliberate slowing that creates space for God and for love.",
      "Beneath the surface of chronic busyness lies a revealing theology. The refusal to rest, the inability to stop, the compulsion to keep working often reveals a functional belief that everything depends on us &mdash; that if we cease our striving, the world will collapse and our lives will unravel. This is, at root, a failure of faith. It is the quiet conviction that we are the ones holding everything together, that God cannot be trusted to sustain what we set down. The Sabbath confronts this idolatry directly. By commanding us to stop, it forces us to confront the lie at the heart of our exhaustion and to relearn the truth that the universe is upheld by God and not by our anxious effort.",
      "The culture of exhaustion is also a culture of distraction and escape. Many people, having no true Sabbath, attempt to recover through frantic leisure &mdash; binge-watching, scrolling, consuming entertainment that numbs rather than restores. But this is not the rest the Sabbath offers. Escape leaves us more depleted; true rest leaves us renewed. The difference is that genuine Sabbath rest is oriented toward God, toward worship, toward relationship and delight, while mere escape is oriented toward distraction and avoidance. A culture that does not know how to rest also does not know how to play, to feast, to delight, or to be still &mdash; and so it medicates its exhaustion with consumption that never satisfies.",
      "Recovering rest in such a culture requires intentional resistance. It means deciding in advance that there are limits, that not everything must be done, that the inbox can wait. It means trusting that one&rsquo;s worth does not rise and fall with one&rsquo;s output. The Christian who learns to rest is making a bold theological statement to a watching world: that there is a God who reigns, that human life is more than labor, and that the frantic pace of modern existence is not the only way to live. In choosing rest, the believer testifies that the gospel frees us from the exhausting treadmill of proving ourselves and invites us into the unforced rhythms of grace.",
      "The healing of our exhaustion, then, is not finally found in better techniques or more efficient schedules, though those may help. It is found in a renewed vision of who we are and whose we are. We are not machines built for production; we are creatures made for communion. The chronic tiredness of the modern soul is, in part, a symptom of a deeper hunger &mdash; a hunger for the rest that only God can give. The Sabbath is the doorway into that rest, and the culture of exhaustion is, paradoxically, the very condition that makes its ancient gift feel like good news once again.",
    ],
  },
  {
    id: "Jesus Lord of the Sabbath",
    heading: "Jesus, Lord of the Sabbath",
    paragraphs: [
      "By the time of Jesus, the Sabbath had become surrounded by an intricate web of regulations designed to safeguard it, but which had in many cases obscured its original purpose as a gift. The Gospels record repeated controversies between Jesus and the religious leaders precisely over the Sabbath. Jesus healed on the Sabbath, allowed his disciples to pluck grain on the Sabbath, and repeatedly acted in ways that scandalized those who had reduced the day to a list of prohibitions. These conflicts were not peripheral; they struck at the heart of how the people of God understood holiness, mercy, and the very character of the Lord whose day it was.",
      "In one of the defining moments of this controversy, Jesus articulated a principle that reframes the entire Sabbath debate: &ldquo;The Sabbath was made for man, not man for the Sabbath&rdquo; (Mark 2:27). With this single sentence, Jesus restored the Sabbath to its proper place. The day exists to serve human flourishing, not to enslave human beings under impossible burdens. God did not create people in order to have someone to keep his rules; he gave the Sabbath as a gift for the good of his creatures. When the Sabbath had become a heavy yoke crushing the very people it was meant to bless, Jesus declared its true purpose and rescued it from the distortion of legalism.",
      "Jesus then made a breathtaking claim about his own identity: &ldquo;So the Son of Man is lord even of the Sabbath&rdquo; (Mark 2:28). To claim lordship over the Sabbath was to claim a divine prerogative, for the Sabbath belonged to God himself. Jesus was asserting that he held authority over the holiest day of the week, that he could interpret its meaning and define its proper use. This was not a casual remark; it was a declaration of his divine authority. The one who stands as Lord of the Sabbath is the very Lord who instituted it at creation. In Jesus, the giver of the Sabbath had come in person.",
      "It is essential to see that Jesus did not abolish the Sabbath or treat it with contempt. Rather, he freed it from legalistic distortion while affirming its gift. He did not heal on the Sabbath in order to mock the day but to reveal its true heart: that a day of rest and mercy is the perfect occasion for liberation and healing. &ldquo;Is it lawful on the Sabbath to do good or to do harm, to save life or to kill?&rdquo; he asked (Mark 3:4). The answer was obvious, and it exposed how far the legalists had strayed. For Jesus, the Sabbath was a day of restoration, and to heal a suffering person on it was not a violation but its fulfillment. He honored the Sabbath by recovering its purpose as a day of grace.",
      "At the climax of this Sabbath theology stands one of the most beloved invitations in all of Scripture: &ldquo;Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light&rdquo; (Matthew 11:28-30). Here Jesus presents himself as the source of the very rest the Sabbath had always pointed toward. The rest he offers is not merely a day off but a rest for the soul &mdash; relief from the crushing burden of religious performance and the exhausting labor of self-justification. The Lord of the Sabbath offers himself as the Sabbath rest in person.",
      "This invitation reveals the profound continuity between the Sabbath of the old covenant and the rest Jesus brings. The weekly Sabbath had always been a sign pointing forward, a foretaste of a deeper rest. Now the one to whom it pointed had arrived. Those who come to Jesus exchange the unbearable yoke of self-effort for his easy yoke. They cease their frantic striving to earn divine favor and rest in the favor freely given in him. The controversies over the Sabbath, then, were ultimately about identity: the religious leaders defended a day, while Jesus revealed himself as the Lord that day had always been about. To know him is to enter the rest the Sabbath foreshadowed.",
    ],
  },
  {
    id: "Rhythms of Work and Rest",
    heading: "Rhythms of Work and Rest",
    paragraphs: [
      "The Sabbath establishes a wise and humane rhythm for human life: a recurring weekly day set apart from ordinary labor. There is deep wisdom in this pattern. Human beings are not built to run without ceasing, and the weekly cadence of work and rest honors the limits God built into our creaturely nature. Six days of labor are framed and crowned by one day of rest, so that work itself is given its proper place &mdash; significant, dignified, but not ultimate. The Sabbath rhythm protects us from the twin errors of idleness and overwork, teaching us both to labor well and to lay our labor down.",
      "What might Sabbath-keeping actually look like for Christians today? At its heart, the Sabbath is a day for worship, rest, feasting, relationships, and delight. It is a day to gather with God&rsquo;s people in worship, to share unhurried meals, to enjoy the company of family and friends, to take pleasure in good gifts, and to cease from work and worry. It is a day to put down the tools of one&rsquo;s trade, to silence the demands of the inbox, and to be fully present to God and to those we love. Far from being a dreary list of prohibitions, a well-kept Sabbath is meant to be the most delightful day of the week &mdash; a weekly feast of grace.",
      "There is a crucial difference between mere leisure or escape and true Sabbath rest. Leisure often functions as a recovery period that exists only to refuel us for more work, or as an escape that numbs us through distraction. Sabbath rest is something deeper. It is rest oriented toward God, infused with gratitude and worship, marked by delight rather than mere distraction. A day spent collapsed in front of a screen, scrolling endlessly, may pass the time but rarely restores the soul. The Sabbath invites a different kind of rest &mdash; one that includes stillness, worship, beauty, relationship, and joy, and that sends us back into the week renewed rather than merely numbed.",
      "Christians have rightly recognized that the New Testament gives believers genuine freedom regarding the specific day and form of their rest. The apostle Paul wrote, &ldquo;One person esteems one day as better than another, while another esteems all days alike. Each one should be fully convinced in his own mind&rdquo; (Romans 14:5-6). And again, &ldquo;Let no one pass judgment on you in questions of food and drink, or with regard to a festival or a new moon or a Sabbath. These are a shadow of the things to come, but the substance belongs to Christ&rdquo; (Colossians 2:16-17). The early church, gathering on the first day of the week to celebrate the resurrection, did not bind believers to the Jewish Sabbath regulations. Christians are free in this matter and must not judge one another over it.",
      "Yet this freedom regarding the specific day and form does not erase the wisdom of the principle. The pattern of regular rest is grounded in creation itself, and the human need for it has not changed. Christian freedom is not freedom from rest but freedom in how we honor it. Whether one keeps a Saturday Sabbath, a Sunday rest, or another rhythm suited to one&rsquo;s vocation, the call is to honor the principle that God built into the world: to set apart regular, intentional time for worship, rest, and delight, and to refuse the lie that we must labor without ceasing. The form may vary; the gift of rhythm remains.",
      "Establishing such rhythms requires intentionality and often courage, especially against the cultural pressure to be always working. It means deciding in advance how a day of rest will be guarded, what will be set aside, and what will be embraced. It may mean preparing ahead so that the day can truly be free, much as Israel gathered a double portion of manna before the Sabbath. It may mean having honest conversations with employers, family, and oneself about the limits one will keep. These rhythms are not legalistic constraints but loving structures &mdash; trellises on which a flourishing life can grow.",
      "Ultimately, the rhythm of work and rest is a form of discipleship. How we order our weeks reveals what we truly believe about God, about ourselves, and about the world. A life with no rhythm of rest quietly preaches that everything depends on us; a life that honors the Sabbath rhythm preaches that God reigns and that we are his beloved creatures, not his anxious machines. To build rhythms of work and rest is to align our lives with the grain of the universe as God designed it &mdash; and to discover, in the steady alternation of labor and rest, a more humane and joyful way to live.",
    ],
  },
  {
    id: "True Rest in Christ",
    heading: "True Rest in Christ",
    paragraphs: [
      "The weekly Sabbath was never an end in itself; it was a signpost pointing to a deeper and greater rest. The letter to the Hebrews develops this profound theology, declaring that &ldquo;there remains a Sabbath rest for the people of God, for whoever has entered God&rsquo;s rest has also rested from his works as God did from his&rdquo; (Hebrews 4:9-10). The author looks back across the whole history of God&rsquo;s people &mdash; the creation rest, the promised land, the weekly Sabbath &mdash; and sees that all of them anticipated a final, ultimate rest that is found in Christ. The Sabbath, in this light, is a shadow whose substance is the gospel itself.",
      "This deeper rest is the rest of ceasing from our own works in order to trust in Christ&rsquo;s finished work. On the cross, Jesus cried, &ldquo;It is finished&rdquo; (John 19:30), declaring that the work of salvation was complete. There is nothing left for us to add, no contribution we can make to earn our standing before God. To enter God&rsquo;s rest is to stop laboring to save ourselves and to rest entirely in what Christ has already accomplished. Just as God rested on the seventh day because his work of creation was complete, so the believer rests because Christ&rsquo;s work of redemption is complete. The Christian life begins not with striving but with resting in a finished work.",
      "The gospel, rightly understood, is rest from the exhausting project of self-justification. Apart from Christ, human beings are caught in an endless and impossible labor: the attempt to prove their worth, to earn approval, to silence the accusing voice of conscience and the law. This is the heaviest of all burdens, and it never relents. The good news is that Christ has borne this burden for us. In him, we are accepted not because of our performance but because of his. The verdict has already been rendered in our favor. To believe the gospel is to lay down the crushing weight of self-justification and to rest in the righteousness of another &mdash; a rest that no amount of religious effort could ever provide.",
      "This is why the invitation of Jesus rings with such liberating power: &ldquo;Come to me, all who labor and are heavy laden, and I will give you rest&rdquo; (Matthew 11:28). The rest he offers is not first of all a day on the calendar but a condition of the heart &mdash; a soul at peace with God, no longer striving, no longer afraid, no longer trying to earn what can only be received as a gift. Augustine captured this when he prayed that our hearts are restless until they find their rest in God. The restless human heart, exhausted by its endless striving, finds its true home only in Christ, in whom the long search for rest finally comes to an end.",
      "The Sabbath rest also points forward to the ultimate rest of the new creation. The whole biblical story moves toward a final consummation when God&rsquo;s people will dwell with him in a renewed world, where toil and sorrow are no more and the rest foreshadowed by every Sabbath is fully realized. Revelation describes a city where there is no more death, mourning, crying, or pain (Revelation 21:4), and the people of God enter into the eternal rest of his presence. Every Sabbath the believer keeps is a small rehearsal of that coming day, a foretaste of the everlasting rest toward which all of history is moving.",
      "It is vital to understand, then, that true rest is found not merely in a day off but in Christ himself. A person may keep every Sabbath regulation perfectly and still be a stranger to rest, while another may enter into profound soul-rest in the midst of a demanding life because they have come to Christ. The day is a gift and a discipline worth keeping, but it is not the destination. The destination is the person of Jesus, in whom the weary find rest for their souls. To pursue Sabbath without pursuing Christ is to grasp the shadow and miss the substance.",
      "And so the theology of rest comes full circle. It begins with God resting at creation, runs through the Sabbath command and the liberation from Egypt, finds its center in Jesus the Lord of the Sabbath, and arrives at last at the rest of the gospel and the eternal rest of the new creation. The invitation that echoes through it all is the same: come and rest. Lay down the burden of proving yourself. Cease from the exhausting labor of self-salvation. Trust the finished work of Christ. For the deepest rest the human heart can know is not a matter of a quiet afternoon but of a soul that has come home to God &mdash; and that rest is found, fully and finally, in Christ himself.",
    ],
  },
];

const videoItems = [
  { videoId: "oRml6Prodb0", title: "The Ruthless Elimination of Hurry - John Mark Comer" },
  { videoId: "Fbg99Fxh-bg", title: "BibleProject - Sabbath and Rest" },
  { videoId: "jbszKsfMaWM", title: "Jesus and the Sabbath - Finding True Rest" },
];

export default function ChristianRestSabbathGuidePage() {
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
            Faith &amp; Rest
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Rest and Sabbath
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Rest and Sabbath through a Christian lens &mdash; the theology of Sabbath rooted in creation, the gift of rest in a culture of exhaustion, Jesus as Lord of the Sabbath, practical rhythms of work and rest, and the deeper rest found in Christ himself.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;Come to me, all who labor and are heavy laden, and I will give you rest.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>Matthew 11:28</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? `rgba(13, 148, 136, 0.12)` : "transparent",
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
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>Rest Is a Gift, Not a Reward</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>God rested on the seventh day. He commanded his people to rest. Jesus declared himself Lord of the Sabbath and invited the weary to come to him. The Christian faith does not ask you to earn your rest through endless striving &mdash; it invites you to receive it as a gift, to lay down the burden of self-justification, and to find true rest for your soul in the finished work of Christ.</p>
        </div>
      </main>
    </div>
  );
}
