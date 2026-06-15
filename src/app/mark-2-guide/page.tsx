"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const videoItems = [
  { videoId: "r9VbHlBcSXo", title: "Mark 2 Bible Study: Jesus Forgives and Heals the Paralytic" },
  { videoId: "A3Nm7uR8fxU", title: "The Call of Levi and Jesus Eating with Sinners" },
  { videoId: "cT8bGr9JNQY", title: "New Wine New Wineskins: What Jesus Means for the Old Covenant" },
  { videoId: "hQsK2mF7oLw", title: "Lord of the Sabbath: Mark 2 Expository Sermon" },
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

const overviewSections = [
  {
    heading: "Mark&rsquo;s Literary Strategy in Chapter 2",
    color: BLUE,
    body: "Mark 2 is one of the most theologically dense single chapters in the Gospel, presenting five distinct controversy episodes in rapid succession. Biblical scholars have long noted that Mark 2:1&ndash;3:6 forms a deliberate literary unit &mdash; a collection of five conflict stories that together build a systematic case for who Jesus is and why the existing religious establishment cannot contain him. Each story introduces a new category of conflict: authority to forgive sins, association with sinners, practice of fasting, interpretation of Sabbath rules, and performance of miraculous healing on the Sabbath. By clustering these controversies, Mark shows that the opposition to Jesus was not occasional or accidental but structural &mdash; arising from something new pressing into old forms."
  },
  {
    heading: "The Four Friends and the Disabled Paralytic",
    color: GREEN,
    body: "The opening scene of Mark 2 is justly famous for its visual drama: four men unable to bring their paralyzed friend through the crowd pressing around Jesus&rsquo; location in Capernaum, so they carry him to the roof, dig through it, and lower the man on his mat directly in front of Jesus. Mark&rsquo;s economy of narrative is striking &mdash; he devotes two verses to the logistics of the roof opening and one sentence to the actual healing, but the detail he lingers on is Jesus&rsquo; first response: not a healing command but a declaration of forgiveness. This sequencing is intentional. Jesus is communicating that the deeper need of the paralytic &mdash; and of every person in that room &mdash; is not physical restoration but reconciliation with God. The friends&rsquo; faith that moves them to such extraordinary lengths is explicitly noted as what prompts Jesus&rsquo; response."
  },
  {
    heading: "The Call of Levi: Grace to the Excluded",
    color: GOLD,
    body: "The call of Levi (Matthew) the tax collector is structurally parallel to the earlier calls of Simon, Andrew, James, and John in Mark 1:16&ndash;20, but it is far more provocative socially. Tax collectors in first-century Judea were Jews who collected Roman taxes, frequently overcharging and pocketing the difference. They were ceremonially unclean by regular contact with Gentiles, economically exploitative of their own people, and treated as traitors to the covenant community. For a rabbi to call such a person as a disciple &mdash; not as a charity case to be reformed before admission, but as a learner immediately welcomed into the traveling community &mdash; was genuinely shocking. Levi&rsquo;s response is as instant and total as the fishermen&rsquo;s: &ldquo;he rose and followed him.&rdquo; Grace does not require preliminary qualification."
  },
  {
    heading: "The Banquet Controversy and the Physician Saying",
    color: ROSE,
    body: "When scribes and Pharisees observe Jesus dining at Levi&rsquo;s house with &ldquo;many tax collectors and sinners,&rdquo; they challenge the disciples (not Jesus directly &mdash; a social convention of indirect confrontation): &ldquo;Why does he eat with tax collectors and sinners?&rdquo; Jesus answers with the aphorism about the physician: &ldquo;Those who are well have no need of a physician, but those who are sick. I came not to call the righteous, but sinners&rdquo; (vv. 17). The saying is deliberately double-edged. On its surface it is a functional explanation: doctors go where the sick are. But there is an edge of irony directed at the &ldquo;righteous&rdquo; who challenged him &mdash; those who believe they are well have diagnosed themselves and found no need for the physician. The tragedy of self-righteousness is precisely this self-inoculation against grace."
  },
];

const themesSections = [
  {
    heading: "Authority to Forgive Sins",
    color: BLUE,
    body: "When Jesus says &ldquo;Son, your sins are forgiven&rdquo; to the paralytic, the scribes in the room immediately grasp the theological claim being made: &ldquo;Why does this man speak like that? He is blaspheming! Who can forgive sins but God alone?&rdquo; (v. 7). They are theologically correct in their premise &mdash; only the party offended by a sin can extend forgiveness, and all sin is ultimately offense against God (Psalm 51:4). Where they err is in their conclusion about Jesus&rsquo; identity. Jesus does not deny their premise; he validates it by healing the paralytic as visible proof that he possesses the authority he claims. The healing is not the main point &mdash; it is the sign that confirms the greater, invisible reality of forgiveness. This is one of Mark&rsquo;s clearest implicit Christological claims: Jesus acts as God, because Jesus is God."
  },
  {
    heading: "The Faith of Intercessors",
    color: GREEN,
    body: "The four friends who carry the paralytic to Jesus are among the most striking examples of intercessory faith in the Gospels. Their faith is not merely emotional confidence but embodied, costly, and creative: they carry a man across town, climb onto a roof, dig through it (likely dried mud and palm thatch), and lower a person on ropes into a crowded room. The phrase &ldquo;when Jesus saw their faith&rdquo; (v. 5) is theologically remarkable &mdash; it is the friends&rsquo; faith, not the paralytic&rsquo;s, that is highlighted as the occasion for grace. This does not establish a transactional principle but does assert a communal dimension of faith: our intercession for others matters, our persistent and creative effort to bring people before Jesus matters. The doctrine of intercession has its roots in scenes exactly like this one."
  },
  {
    heading: "New Wine and New Wineskins",
    color: GOLD,
    body: "The twin parables of the new cloth on an old garment and new wine in old wineskins (vv. 21&ndash;22) are among the most important hermeneutical keys in the entire Gospel. They explain why Jesus does not simply modify or supplement the existing religious system of first-century Judaism: the new reality he brings is incompatible with the old containers. New wine &mdash; still fermenting, still expanding &mdash; will burst old wineskins that have already stretched to their limit. This is not a statement that Judaism was deficient or that the Old Testament is obsolete; it is a statement about the nature of the kingdom Jesus inaugurates. The Messiah himself is the new wine; the legal and ceremonial structure of second-temple Judaism was never designed to be the final, permanent container of that reality. Only new wineskins &mdash; the community Jesus himself is forming around his own person &mdash; can hold what he brings."
  },
  {
    heading: "The Bridegroom and the Feast",
    color: PURPLE,
    body: "When questioned about why his disciples do not fast while the Pharisees and John&rsquo;s disciples do, Jesus answers with a wedding metaphor: &ldquo;Can the wedding guests fast while the bridegroom is with them?&rdquo; (v. 19). The image draws on a deep Old Testament tradition of God as Israel&rsquo;s husband/bridegroom (Isaiah 62:5, Hosea 2:19&ndash;20). By referring to himself as the bridegroom, Jesus is making a quiet but unmistakable claim to a divine role. Fasting is appropriate for times of mourning, waiting, and longing; Jesus&rsquo; presence inaugurates the wedding feast, the eschatological banquet of the kingdom. This is why fasting is displaced &mdash; not abolished, but displaced by something greater. The &ldquo;days will come when the bridegroom is taken away&rdquo; (v. 20) is an unmistakable forward reference to the crucifixion, and a gentle prediction that the disciples will eventually fast again in his absence."
  },
  {
    heading: "Lord of the Sabbath",
    color: TEAL,
    body: "The chapter ends with two Sabbath controversies. First, the disciples pluck grain as they walk through fields (technically permissible under Deuteronomy 23:25), but the Pharisees declare this &ldquo;harvesting&rdquo; which is prohibited on the Sabbath. Jesus&rsquo; response is to invoke David eating the showbread (1 Samuel 21:1&ndash;6) &mdash; arguing that human need overrides ceremonial regulation in cases of genuine necessity. He then makes the breathtaking declaration: &ldquo;The Sabbath was made for man, not man for the Sabbath. So the Son of Man is lord even of the Sabbath&rdquo; (vv. 27&ndash;28). This is not an abolition of the Sabbath but a radical reorientation: the Sabbath&rsquo;s purpose is human flourishing, and its Lord determines its meaning. The Son of Man &mdash; a title from Daniel 7 for the one who receives divine dominion &mdash; stands above the Sabbath as its sovereign interpreter."
  },
  {
    heading: "Calling Sinners: The Shape of Grace",
    color: ROSE,
    body: "The call of Levi and the banquet with sinners reveal the shape of Jesus&rsquo; mission in a way that challenges every religious instinct toward purity maintained through separation. First-century Pharisaic purity practice involved carefully managing social boundaries to avoid ritual contamination from sinners, Gentiles, and the unclean. Jesus operates on a different logic entirely: his holiness is not diminished by contact with sinners but rather transforms the situation of contact. He goes to where the sick are, as the physician saying makes explicit. This &ldquo;missionary contamination-in-reverse&rdquo; &mdash; whereby Jesus makes the unclean clean rather than being made unclean by them &mdash; is the pattern of incarnational grace. For Christians today, this calls into question any spirituality that maintains personal purity by avoiding the people most in need of the physician."
  },
];

const verseByVerseSections = [
  {
    verses: "Verses 1&ndash;5: The Paralytic and His Four Friends",
    color: BLUE,
    body: "Jesus returns to Capernaum, which has apparently become his Galilean base, and word spreads so quickly that the house where he is teaching becomes impassably full. Mark notes that Jesus was &ldquo;preaching the word&rdquo; to them &mdash; underscoring that teaching accompanies healing throughout his ministry rather than miracles standing alone. The four friends&rsquo; solution to the crowd problem is remarkable: they ascend the exterior staircase typical of Palestinian homes, dig through the dried mud-and-thatch roof, and lower the mat through the opening. The Greek word &ldquo;krabattos&rdquo; used for the mat is a working-class term, subtly signaling the paralytic&rsquo;s social status. Jesus&rsquo; first response &mdash; &ldquo;Son, your sins are forgiven&rdquo; &mdash; addresses the man&rsquo;s deepest need before his most visible one, and the possessive &ldquo;Son&rdquo; communicates personal tenderness."
  },
  {
    verses: "Verses 6&ndash;12: The Controversy with Scribes and the Healing",
    color: GREEN,
    body: "The scribes&rsquo; inner accusation of blasphemy is completely silent &mdash; they say nothing aloud &mdash; yet Jesus &ldquo;perceived in his spirit that they thus questioned within themselves&rdquo; (v. 8). This detail is a window into divine omniscience expressed through the incarnate Son. Jesus then poses the rhetorical question about which is easier: to say &ldquo;your sins are forgiven&rdquo; (unverifiable) or &ldquo;rise up and walk&rdquo; (immediately falsifiable). The logic is brilliant: the physical healing is the harder claim to fake, and its fulfillment therefore verifies the greater claim. &ldquo;But that you may know that the Son of Man has authority on earth to forgive sins&rdquo; &mdash; Jesus explicitly frames the healing as a sign for the cognitive benefit of the observers. The healed man walks out carrying his mat, and the crowd glorifies God, recognizing they have seen something unprecedented."
  },
  {
    verses: "Verses 13&ndash;14: The Call of Levi",
    color: GOLD,
    body: "Jesus walks along the Sea of Galilee and sees Levi son of Alphaeus sitting at the tax booth &mdash; a fixed post for collecting tolls on goods passing along the trade route through Capernaum. The call is identical in form to the call of the fishermen in Mark 1: &ldquo;Follow me.&rdquo; And the response is identical: &ldquo;he rose and followed him.&rdquo; Mark does not explain what brought Levi to this moment of readiness. We do not know if he had heard Jesus teach, seen miracles, or was encountering him for the first time. The narrative presents the call as sufficient and the response as immediate, placing the emphasis entirely on the authority of Jesus&rsquo; summons rather than any prior preparation on Levi&rsquo;s part. This is consistent with Mark&rsquo;s high Christology throughout: Jesus acts, and reality reorganizes itself around him."
  },
  {
    verses: "Verses 15&ndash;17: Eating with Tax Collectors and Sinners",
    color: ROSE,
    body: "Levi hosts a dinner &mdash; &ldquo;in his house&rdquo; (or possibly &ldquo;in his house,&rdquo; with the Greek allowing that it is Jesus&rsquo; house in Capernaum) &mdash; where many tax collectors and sinners recline with Jesus and his disciples. The word &ldquo;sinners&rdquo; in this context likely refers both to people with immoral reputations and to those who were ceremonially unclean due to their occupations or associations. The scribes of the Pharisees (a more specific designation than simply &ldquo;scribes&rdquo;) object to the disciples about this table fellowship, which was one of the most socially and theologically charged practices in Jewish life. Jesus&rsquo; physician metaphor reframes the entire question: his presence at the table of sinners is not compromise but mission. He is not celebrating their sin; he is bringing the kingdom into contact with the place of greatest need."
  },
  {
    verses: "Verses 18&ndash;22: Fasting and the New Order",
    color: PURPLE,
    body: "The question about fasting comes from an unnamed group observing that John&rsquo;s disciples and the Pharisees&rsquo; disciples fast regularly while Jesus&rsquo; disciples do not. Jesus&rsquo; answer moves through three registers. First, the wedding metaphor: fasting is contextually inappropriate when the bridegroom is present; there will be time for fasting when he is gone. Second, the parable of new cloth on old garment: the repair makes things worse, not better &mdash; the new piece shrinks and tears the old fabric around it. Third, the new wine / new wineskins: only a container with capacity for expansion can hold wine that is still fermenting. All three images make the same point from different angles: the kingdom Jesus brings is not an addendum to existing religious practice but a new order that requires new forms. The old structures are not condemned but are revealed as inadequate for containing what Jesus inaugurates."
  },
  {
    verses: "Verses 23&ndash;28: Lord of the Sabbath",
    color: TEAL,
    body: "As Jesus and the disciples walk through grain fields on the Sabbath, the disciples pluck heads of grain. Mosaic law permitted this (Deuteronomy 23:25), but Pharisaic tradition classified it as a form of harvesting, one of the 39 categories of prohibited Sabbath work enumerated in the Mishnah&rsquo;s tractate Shabbat. Jesus defends the disciples by citing David&rsquo;s eating the showbread in 1 Samuel 21 &mdash; but the argument is typological rather than precedential: just as David&rsquo;s exceptional status justified an exception to priestly regulation, so Jesus&rsquo; identity as the Son of Man (the Danielic figure of divine sovereignty) means that his disciples move within a different economy. The Sabbath was made to serve human flourishing; the one who is Lord of the Sabbath is its sovereign interpreter and the one who gives his people rest (Matthew 11:28)."
  },
];

const applicationSections = [
  {
    heading: "Bringing Friends Before Jesus",
    color: GREEN,
    body: "The four friends who lowered the paralytic through the roof are a permanent model of intercessory community. They did not simply pray for their friend from a comfortable distance; they exerted themselves on his behalf in the face of significant obstacles, used their creativity to find a way when the obvious path was blocked, and persisted until they had placed him directly before Jesus. The Christian community is called to this kind of determined, creative intercession for one another and for the people around them. Evangelism is not simply declaring information; it is sometimes carrying people &mdash; through prayer, through relationship, through persistent invitation &mdash; into the presence of Christ. The four friends&rsquo; names are never given; they are not the story. They are the vehicle by which the story happens. That anonymity is its own theological commentary on the nature of faithful service."
  },
  {
    heading: "The Dangerous Comfort of Self-Diagnosed Health",
    color: ROSE,
    body: "Jesus&rsquo; saying about the physician &mdash; &ldquo;I came not to call the righteous, but sinners&rdquo; &mdash; contains one of the most penetrating critiques in the Gospels of religious self-satisfaction. The scribes and Pharisees who questioned Jesus&rsquo; dinner guests were not malicious hypocrites in the first instance; they were conscientious religious practitioners who had concluded, based on their careful law-observance, that they were spiritually well. The tragedy is that this conclusion made them immune to the physician. The parable about the sick is ironic precisely because none of the &ldquo;righteous&rdquo; are actually well &mdash; they are sick people who have misdiagnosed themselves. The application for Christians is relentless self-examination: the longer we have been in the faith, the more we are in danger of settling into a comfortable religious identity that no longer feels its own need for daily grace."
  },
  {
    heading: "Are We New Wineskins?",
    color: GOLD,
    body: "The new wine / old wineskins parable confronts the church in every generation with a structural question: are the forms of our community life, worship, and discipleship genuinely capable of holding the living, fermenting reality of the Holy Spirit, or have they become old wineskins &mdash; stretched to their limit, brittle, resistant to expansion? This is not a blanket endorsement of novelty; old wineskins were once new, and some old wineskins remain flexible. The question is not age but capacity. Traditions, liturgies, programs, and structures serve the wine; when they begin to constrain or spill it, they have become old containers. Every community of faith needs the wisdom to distinguish between the wine (the living presence of Christ in the Spirit, the word, the sacraments, the community) and the wineskins (the particular cultural and institutional forms that carry it in a given time and place)."
  },
  {
    heading: "Sabbath Rest and the Lord Who Gives It",
    color: TEAL,
    body: "Jesus&rsquo; declaration that &ldquo;the Sabbath was made for man&rdquo; is a reclamation of Sabbath from legal rigidity back to its original covenantal purpose. God instituted Sabbath rest in Genesis 2 as part of the created order &mdash; not as an imposition but as a gift, a weekly reminder that human existence is not defined by production and that the world&rsquo;s sustaining does not depend on human effort. Jesus, as Lord of the Sabbath, does not abolish rest but embodies it. His invitation in Matthew 11:28 &mdash; &ldquo;Come to me, all who labor and are heavy laden, and I will give you rest&rdquo; &mdash; is the Sabbath reinterpreted through his person: true rest is not a day on the calendar but a relationship with the one who has finished the work of redemption. For Christians living under relentless productivity pressure, Mark 2 is a word of liberation: the Lord of the Sabbath is also the one who says you are more than what you produce."
  },
];

export default function Mark2GuidePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(180deg, #080d1a 0%, ${BG} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 20px 40px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${BLUE}18`, border: `1px solid ${BLUE}40`, borderRadius: 8, padding: "4px 14px", marginBottom: 16 }}>
            <span style={{ color: BLUE, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em" }}>NEW TESTAMENT &mdash; GOSPELS</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, margin: "0 0 12px", lineHeight: 1.15 }}>
            Mark Chapter 2
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "Five conflict stories that together reveal who Jesus is &mdash; the one with authority to forgive sins, call sinners, redefine fasting, and reign as Lord of the Sabbath." }} />
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { label: "Authority to Forgive", color: BLUE },
              { label: "Call of Sinners", color: GREEN },
              { label: "New Covenant", color: GOLD },
              { label: "Lord of Sabbath", color: TEAL },
            ].map((tag) => (
              <span key={tag.label} style={{ background: `${tag.color}15`, border: `1px solid ${tag.color}35`, color: tag.color, borderRadius: 20, padding: "4px 14px", fontSize: 12, fontWeight: 700 }}>
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px", display: "flex", gap: 0, overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button
              type="button"
              key={tab}
              onClick={() => setActiveTab(i)}
              style={{
                background: "transparent",
                border: "none",
                borderBottom: activeTab === i ? `3px solid ${BLUE}` : "3px solid transparent",
                color: activeTab === i ? BLUE : MUTED,
                fontWeight: activeTab === i ? 800 : 600,
                fontSize: 14,
                padding: "16px 20px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                fontFamily: "Georgia, serif",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: CARD, border: `1px solid ${BLUE}30`, borderRadius: 14, padding: 24 }}>
              <div style={{ color: BLUE, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 10 }}>CHAPTER AT A GLANCE</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
                {[
                  { label: "Book", value: "Mark" },
                  { label: "Chapter", value: "2" },
                  { label: "Approx. Date", value: "c. 29&ndash;30 AD" },
                  { label: "Location", value: "Capernaum / Galilee" },
                  { label: "Conflicts", value: "5 distinct episodes" },
                  { label: "Key Title", value: "Son of Man (v. 28)" },
                ].map((item) => (
                  <div key={item.label} style={{ background: BG, borderRadius: 8, padding: "10px 12px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 2 }}>{item.label}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 700 }}
                      dangerouslySetInnerHTML={{ __html: item.value }} />
                  </div>
                ))}
              </div>
            </div>

            {overviewSections.map((s) => (
              <div key={s.heading} style={{ background: CARD, border: `1px solid ${s.color}25`, borderRadius: 14, padding: 28 }}>
                <h2 style={{ color: s.color, fontSize: 19, fontWeight: 800, margin: "0 0 14px" }}
                  dangerouslySetInnerHTML={{ __html: s.heading }} />
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: s.body }} />
              </div>
            ))}

            {/* Key Verse Callout */}
            <div style={{ background: `${BLUE}10`, border: `1px solid ${BLUE}35`, borderRadius: 14, padding: 28 }}>
              <div style={{ color: BLUE, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 12 }}>KEY VERSE</div>
              <blockquote style={{ margin: 0, borderLeft: `3px solid ${BLUE}`, paddingLeft: 20 }}>
                <p style={{ color: TEXT, fontSize: 17, lineHeight: 1.8, fontStyle: "italic", margin: "0 0 10px" }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;And Jesus said to them, &lsquo;Can the wedding guests fast while the bridegroom is with them? As long as they have the bridegroom with them, they cannot fast.&rsquo;&rdquo;" }} />
                <cite style={{ color: MUTED, fontSize: 13, fontStyle: "normal", fontWeight: 700 }}>Mark 2:19 (ESV)</cite>
              </blockquote>
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}25`, borderRadius: 14, padding: 20 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 8 }}>THEOLOGICAL THEMES IN MARK 2</div>
              <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "Mark 2 is a concentrated exploration of Christology, grace, and the nature of the kingdom. Every episode advances our understanding of who Jesus is and what kind of community he is creating &mdash; one that will not fit inside the existing religious structures of his day." }} />
            </div>
            {themesSections.map((s) => (
              <div key={s.heading} style={{ background: CARD, border: `1px solid ${s.color}25`, borderRadius: 14, padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 6, height: 36, borderRadius: 3, background: s.color, flexShrink: 0 }} />
                  <h2 style={{ color: s.color, fontSize: 18, fontWeight: 800, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: s.heading }} />
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: s.body }} />
              </div>
            ))}
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: CARD, border: `1px solid ${TEAL}25`, borderRadius: 14, padding: 20 }}>
              <div style={{ color: TEAL, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 8 }}>VERSE BY VERSE COMMENTARY</div>
              <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "A passage-by-passage walk through Mark 2, examining the Greek text, narrative structure, and theological significance of each unit within Mark&rsquo;s larger literary strategy." }} />
            </div>
            {verseByVerseSections.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${s.color}25`, borderRadius: 14, padding: 28 }}>
                <div style={{ background: `${s.color}12`, border: `1px solid ${s.color}30`, borderRadius: 8, display: "inline-block", padding: "4px 14px", marginBottom: 14 }}>
                  <span style={{ color: s.color, fontWeight: 800, fontSize: 13 }}
                    dangerouslySetInnerHTML={{ __html: s.verses }} />
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: s.body }} />
              </div>
            ))}

            {/* Cross Reference Panel */}
            <div style={{ background: CARD, border: `1px solid ${GREEN}25`, borderRadius: 14, padding: 28 }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 14 }}>KEY CROSS-REFERENCES</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "Psalm 51:4", note: "David&rsquo;s confession that all sin is ultimately against God alone &mdash; the theological premise the scribes correctly apply when they question Jesus&rsquo; forgiveness" },
                  { ref: "Daniel 7:13&ndash;14", note: "The &lsquo;Son of Man&rsquo; who receives dominion, glory, and a kingdom from the Ancient of Days &mdash; the title Jesus applies to himself in v. 28" },
                  { ref: "1 Samuel 21:1&ndash;6", note: "David eating the consecrated showbread &mdash; the precedent Jesus cites to defend his disciples plucking grain on the Sabbath" },
                  { ref: "Isaiah 62:5", note: "God as bridegroom rejoicing over his bride Israel &mdash; the divine identity Jesus claims when he describes himself as the bridegroom in vv. 19&ndash;20" },
                  { ref: "Hosea 6:6", note: "God&rsquo;s declaration that he desires steadfast love rather than sacrifice &mdash; the principle underlying Jesus&rsquo; table fellowship with sinners" },
                ].map((cr) => (
                  <div key={cr.ref} style={{ background: BG, borderRadius: 8, padding: "10px 14px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: GREEN, fontWeight: 800, fontSize: 13, flexShrink: 0, minWidth: 140 }}
                      dangerouslySetInnerHTML={{ __html: cr.ref }} />
                    <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: cr.note }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: CARD, border: `1px solid ${GREEN}25`, borderRadius: 14, padding: 20 }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 8 }}>APPLICATION FOR CHRISTIANS TODAY</div>
              <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "Mark 2 is one of the most practically rich chapters in the Gospels for the life of Christian community. Its five episodes address friendship, grace, the shape of mission, the danger of religious self-satisfaction, and the rest that only Jesus gives." }} />
            </div>

            {applicationSections.map((s) => (
              <div key={s.heading} style={{ background: CARD, border: `1px solid ${s.color}25`, borderRadius: 14, padding: 28 }}>
                <h2 style={{ color: s.color, fontSize: 18, fontWeight: 800, margin: "0 0 14px" }}
                  dangerouslySetInnerHTML={{ __html: s.heading }} />
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: s.body }} />
              </div>
            ))}

            {/* Reflection Questions */}
            <div style={{ background: `${BLUE}0d`, border: `1px solid ${BLUE}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ color: BLUE, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 16 }}>REFLECTION QUESTIONS</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Who in your life needs to be &lsquo;carried to Jesus&rsquo; right now? What obstacles are preventing it, and what creative persistence might be required?",
                  "In what areas have you diagnosed yourself as &lsquo;spiritually well&rsquo; in ways that may actually be closing you off from the grace you need?",
                  "What are the &lsquo;old wineskins&rsquo; in your personal practice or church community that may be constraining the work of the Spirit rather than containing it?",
                  "How does the image of Jesus as the bridegroom change the way you approach prayer, worship, and the practice of fasting?",
                  "Where do you need to hear Jesus say to you today: &ldquo;The Sabbath was made for you &mdash; rest is a gift, not a guilt?&rdquo;",
                ].map((q, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 8, padding: "12px 16px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${BLUE}25`, border: `1px solid ${BLUE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: BLUE, fontWeight: 900, fontSize: 12, flexShrink: 0 }}>
                      {i + 1}
                    </div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIDEO SECTION - always visible */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <div style={{ marginBottom: 24 }}>
            <h2 style={{ color: BLUE, fontSize: 22, fontWeight: 800, margin: "0 0 8px" }}>Teaching Videos</h2>
            <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}
              dangerouslySetInnerHTML={{ __html: "Sermons and expository teachings on Mark 2 and the Gospel of Mark." }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 20 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: TEXT, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{v.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Scripture */}
        <div style={{ marginTop: 48, textAlign: "center" }}>
          <p style={{ color: MUTED, fontSize: 13, fontStyle: "italic", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;Come to me, all who labor and are heavy laden, and I will give you rest.&rdquo; &mdash; Matthew 11:28 (ESV)" }} />
        </div>
      </div>
    </div>
  );
}
