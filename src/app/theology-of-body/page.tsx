"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "practices" | "illness" | "scriptures" | "resources" | "videos";

const THEOLOGY = [
  { title: "The body is good — creation, not prison", color: GREEN, ref: "Genesis 1:31; John 1:14; 1 Corinthians 15:42-44", content: "Ancient Gnosticism taught that matter is evil and the spirit is good — the body is a prison from which the soul must escape. Christianity has always been the counter-claim: God created the body 'very good' (Gen 1:31); the Son of God took on a human body in the Incarnation (John 1:14); and the resurrection body is not the discarding of the body but its transformation. The resurrection of Jesus is a permanent bodily resurrection — he ate fish with the disciples, showed his wounds, and was touched. God's final answer to sin and death is not the escape of the soul but the resurrection of the body." },
  { title: "Your body is a temple of the Holy Spirit", color: PURPLE, ref: "1 Corinthians 6:19-20; Romans 12:1; 1 Corinthians 3:16", content: "Paul's argument in 1 Corinthians 6 is remarkable: because sexual immorality involves the body, and because the body is the temple of the Holy Spirit, sexual immorality is categorically different from other sins. The body is not morally neutral. What you do with your body is a spiritual act — eating, sleeping, exercising, working, resting, suffering, healing. The body's care is a dimension of stewardship. Romans 12:1 calls Christians to present their bodies as 'living sacrifices, holy and pleasing to God' — this is your 'spiritual worship,' literally your 'rational service.'" },
  { title: "The body and the spirit are not enemies", color: "#3B82F6", ref: "1 Thessalonians 5:23; Mark 12:30; Luke 2:52", content: "The biblical anthropology is not dualist — it does not pit body against spirit. The Hebrew word nephesh (soul) refers to the whole animated living being, not a spiritual part separate from the body. Paul's prayer in 1 Thessalonians 5:23 is for the whole person — spirit, soul, and body — to be kept blameless. Jesus grew in 'wisdom and stature, and in favor with God and man' (Luke 2:52) — intellectual, physical, spiritual, and social dimensions of human development all together. The goal is integration, not escape." },
  { title: "Rest and sleep are acts of trust", color: "#EF4444", ref: "Psalm 127:2; Psalm 4:8; Mark 4:38; Matthew 11:28-30", content: "Psalm 127:2 says God 'grants sleep to those he loves' — sleep is not laziness but trust. To sleep is to relinquish control, to acknowledge that the world does not depend on you, and to trust the God who neither slumbers nor sleeps (Ps 121:4). Jesus slept in the boat during the storm (Mark 4:38) — the most profound demonstration of rest-as-trust in the Gospels. Matthew 11:28-30's 'Come to me, all who are weary' is an invitation into spiritual rest — but the metaphor is physical. The body's need for rest is an image of the soul's need for Sabbath." },
  { title: "Fasting — the body as instrument of spiritual discipline", color: "#F59E0B", ref: "Matthew 4:2; Matthew 6:16-18; Luke 4:2; Acts 13:2-3", content: "Jesus assumed his disciples would fast: 'When you fast' — not if. Fasting is the deliberate restriction of a legitimate physical pleasure for a spiritual purpose. It trains the body's desires to submit to the spirit, creates heightened dependence on God, and sharpens spiritual attentiveness. The Desert Fathers practiced various forms of fasting for this reason. However, fasting can also become a form of asceticism that denigrates the body — the distinction is between disciplining appetite and punishing the body that God declared good." },
  { title: "The resurrection — the body's final dignity", color: "#10B981", ref: "1 Corinthians 15:42-58; John 11:25-26; Romans 8:11; Revelation 21:4", content: "The Christian hope is not an escape from the body but the redemption of the body (Romans 8:23). The resurrection body will be imperishable, glorious, powerful, and spiritual — but it will be a body. N.T. Wright argues in 'Surprised by Hope' that the New Testament's teaching on resurrection is one of the most historically verifiable and culturally radical claims Christianity makes. The resurrection of the body validates the body's ultimate dignity: what God is doing with creation is not abandoning it but renewing it." },
  { title: "Male and female — embodied as gift", color: "#EC4899", ref: "Genesis 1:27; Genesis 2:23-24; Matthew 19:4-6; Psalm 139:13-16", content: "Genesis 1:27 grounds human dignity and the image of God in our creation as male and female. The body is not a neutral container for a gender-less self; it is given, received, and good. Psalm 139 celebrates that God 'knit me together in my mother's womb' — the body is divinely authored, not self-constructed. The Christian tradition has held that the givenness of the body is itself a form of grace: we do not invent ourselves from nothing but receive ourselves as a gift to be stewarded. This is not a denial of the real anguish many experience over their bodies, but a frame within which that anguish can be carried with compassion and hope rather than despair." },
  { title: "Sexuality as a sign of covenant union", color: "#8B5CF6", ref: "Genesis 2:24; Song of Songs; Ephesians 5:31-32; 1 Corinthians 6:16-17", content: "Scripture treats sexual union not as a mere appetite to be managed but as a sign — a body-language of covenant. Paul says the 'one flesh' of Genesis 2:24 is a 'profound mystery' that points to Christ and the church (Eph 5:32). The Song of Songs celebrates married desire without embarrassment, as part of the goodness of creation. This is why Scripture treats sexual sin so seriously (1 Cor 6): the body 'speaks' a covenant it does not mean, severing the sign from the reality it was made to signify. A Christian theology of the body neither despises desire nor absolutizes it, but orders it toward faithful, self-giving love." },
  { title: "The body suffers — and Christ entered that suffering", color: "#06B6D4", ref: "Isaiah 53:3-5; Hebrews 2:14-18; Hebrews 4:15; Colossians 1:24", content: "The Incarnation means God knows hunger, exhaustion, pain, and death from the inside. Hebrews 2 insists Jesus shared our 'flesh and blood' so that he could sympathize with our weakness (Heb 4:15). The cross is the most embodied event in history — God in a body, suffering bodily, for the redemption of bodies. This means no physical suffering is beneath God's attention or outside his experience. The Christian who suffers in the body is not abandoned by a distant deity but accompanied by a God who bears the marks of crucifixion even in his resurrection body (John 20:27)." },
];

const PRACTICES = [
  { practice: "Sleep as Spiritual Discipline", color: GREEN, why: "Sleep debt impairs judgment, emotional regulation, prayer, and Scripture memory — all central to the Christian life. The body's need for 7-9 hours (for most adults) is not a weakness to be overcome but a design feature to be honored.", how: "Establish a consistent sleep/wake schedule. Avoid screens for 30-60 minutes before bed. Keep your bedroom cool and dark. Treat sleep as a Sabbath discipline — a daily practice of rest and trust. Matthew Walker's 'Why We Sleep' (secular but essential) documents the catastrophic effects of sleep deprivation on the body and mind." },
  { practice: "Eating for God's Glory", color: PURPLE, why: "1 Corinthians 10:31: 'Whether you eat or drink, do it all for the glory of God.' Food is one of God's greatest gifts — created for enjoyment and sustenance. The failure modes are idolatry (food as primary comfort) and asceticism (treating food enjoyment as suspect).", how: "Eat real food (Michael Pollan: 'Eat food. Not too much. Mostly plants.'). Eat with others — the shared table is a sacramental practice across both Testaments. Pray before eating — the habit of gratitude reshapes appetite. Fast occasionally to train your appetite's submission to God." },
  { practice: "Exercise and Physical Stewardship", color: "#3B82F6", why: "1 Timothy 4:8: 'Physical training is of some value.' Paul does not dismiss physical training — he relativizes it (godliness has value for all things, while physical training has value for some things). The body is a stewardship — maintaining its capacity to serve for as long as possible is a form of faithfulness.", how: "150 minutes of moderate aerobic activity per week (the consistent recommendation across health research). Strength training 2x per week. Walking is the most underrated form of exercise and has consistent associations with longevity. The goal is function, not appearance." },
  { practice: "Sabbath Rest — Weekly and Deeper", color: "#EF4444", why: "The Sabbath command is the fourth commandment and the one most systematically ignored in the contemporary church. Overwork is spiritually serious — it is a form of idolatry (of productivity) and a form of pride (the world cannot function without me).", how: "Designate one day per week as genuinely non-productive — no work email, no work tasks. Spend it in worship, rest, relationship, and play. Annual retreat (even one night away) extends this principle. Marva Dawn's 'Keeping the Sabbath Wholly' and A.J. Swoboda's 'Subversive Sabbath' are essential guides." },
  { practice: "Nature, Walking, and Creation Encounter", color: "#F59E0B", why: "Scripture's most sustained encounters with God occur outside — on mountains, in deserts, by rivers, in gardens. Elijah's healing (1 Kings 19) began with sleep, food, and travel through the wilderness. Walking in creation is not merely recreational — it is a form of contemplative engagement with the God who made it.", how: "Regular outdoor walks without devices. Hiking as a spiritual practice — several retreat traditions build sustained outdoor walking into their programs. Richard Louv's 'Last Child in the Woods' documents the psychological and spiritual costs of nature-deficit; the antidote is simple: go outside regularly." },
  { practice: "Sexual Integrity and Embodied Covenant", color: "#10B981", why: "1 Corinthians 6:18: 'Flee from sexual immorality. All other sins a person commits are outside the body, but whoever sins sexually, sins against their own body.' The body's sexual integrity is not a minor ethical concern but a direct expression of whose it is — God's temple or another's possession.", how: "Marriage as the one context for sexual expression (Matt 19:4-6). Accountability relationships for pornography and sexual temptation. Covenant Eyes (covenanteyes.com) or other internet filtering as practical aid. Jay Stringer's 'Unwanted' and Rosaria Butterfield's 'Secret Thoughts of an Unlikely Convert' are essential for understanding sexual ethics and identity formation." },
  { practice: "The Lord's Supper — Tasting and Touching Grace", color: "#EC4899", why: "Christianity's central act of worship is irreducibly embodied: bread broken, wine poured, taken into the body. God did not give us a merely intellectual gospel to contemplate but a meal to eat. The sacrament insists that grace comes to us through physical means, addressing the whole person, not just the mind.", how: "Receive Communion attentively rather than mechanically — let the physical act of eating and drinking preach to your senses. Many traditions encourage examination, gratitude, and reconciliation before the table (1 Cor 11:27-29). Whatever your tradition's frequency, treat the Supper as a recurring rehearsal of the gospel in your body, anticipating the marriage supper of the Lamb (Rev 19:9)." },
  { practice: "Silence, Solitude, and Bodily Stillness", color: "#06B6D4", why: "Mark 1:35 shows Jesus rising before dawn to a solitary place to pray; Luke 5:16 says he 'often' withdrew. The body that is never still becomes a body whose anxieties drown out God's voice. Stillness is not emptiness but the deliberate quieting of the body so the soul can attend (Psalm 46:10, 'Be still, and know that I am God').", how: "Begin with short, regular intervals of silence — even five minutes of stillness without screens or speech. Practice breath prayer (a short phrase prayed with the rhythm of breathing). Build periodic longer retreats of solitude. Ruth Haley Barton's 'Invitation to Solitude and Silence' is a wise, gentle guide for those new to the practice." },
];

const ILLNESS = [
  { condition: "Chronic Illness and the Sovereignty of God", color: PURPLE, content: "Paul's thorn in the flesh (2 Cor 12:7-10) is the most important biblical text for Christians with chronic illness. Paul prays three times for healing; God does not heal; God says 'my grace is sufficient for you, for my power is made perfect in weakness.' The response is not resignation but transformation: 'I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me.' Chronic illness is not a sign of insufficient faith (contra prosperity gospel) nor a sign of abandonment — it is, in Paul's experience, a specific context for the revelation of God's power through weakness.", resources: "Joni Eareckson Tada's 'A Place of Healing'; Kara Tippetts's 'The Hardest Peace'; Paul's 2 Corinthians 12 in its entirety" },
  { condition: "Disability and the Image of God", color: GREEN, content: "John 9:1-3 — the disciples ask 'Who sinned, this man or his parents?' regarding a man born blind. Jesus's answer is definitive: 'Neither this man nor his parents sinned.' The disability is not a punishment or a marker of God's disfavor. Disability theology (as articulated by Joni Eareckson Tada's Joni and Friends ministry, and scholars like Hans Reinders and Thomas Reynolds) argues that the Christian community's response to disability is one of the most powerful enactments of the Kingdom — and one of the most powerful witnesses to the resurrection's promise that every body will be made whole.", resources: "Joni and Friends (joniandfriends.org); Hans Reinders 'Receiving the Gift of Friendship'; 'Vulnerable Communion' by Thomas Reynolds" },
  { condition: "Mental Illness and the Mind-Body Connection", color: "#3B82F6", content: "The brain is a physical organ. Mental illness — depression, anxiety disorder, bipolar disorder, schizophrenia, OCD — has biological components that are not simply the result of spiritual failure or insufficient faith. The Christian church has historically stigmatized mental illness in ways that have caused profound harm. A biblical anthropology recognizes that the body (including the brain) is fallen — and that fallen brains, like fallen joints, sometimes require medical intervention alongside spiritual care. The integration of quality psychiatric care and pastoral care is the faithful path.", resources: "Ed Welch's 'Side by Side'; the Grace Alliance (gracealliance.net); National Alliance on Mental Illness (nami.org)" },
  { condition: "Aging and the Body's Decline", color: "#EF4444", content: "Ecclesiastes 12's extended metaphor of aging — the guards of the house (legs) trembling, the lights growing dim, the doors shut — is one of the most honest accounts of physical decline in all ancient literature. Biblical faith does not require the pretense that aging is unreal or that death is merely a transition. It requires honest engagement with the body's decline alongside hope for its resurrection. Communities that care for their aging members, that treat age as honor rather than inconvenience, embody the Kingdom's resistance to the youth-worship of consumer culture.", resources: "Atul Gawande's 'Being Mortal' (secular but essential); Paul Tripp's 'Redeeming How We Talk'; regular liturgical attention to death and resurrection" },
  { condition: "Death and the Body's Final Surrender", color: "#F59E0B", content: "The Christian approach to death combines honest grief with grounded hope. Jesus wept at Lazarus's tomb (John 11:35) — death is real, and grief is the appropriate response to it. But Paul can say 'to live is Christ and to die is gain' (Phil 1:21) because the resurrection transforms what death means. The body is 'sown in dishonor' and 'raised in glory' (1 Cor 15:43). Christian funerals are not celebrations that deny grief — they are laments held within hope. The hope does not anesthetize the grief; it gives the grief a horizon.", resources: "Paul's 1 Corinthians 15; John Donne's 'Death Be Not Proud'; C.S. Lewis's 'A Grief Observed'" },
  { condition: "Eating Disorders and Body Image", color: "#EC4899", content: "Eating disorders are serious, often life-threatening illnesses with biological, psychological, and cultural dimensions — not vanity or a failure of willpower. A consumer culture that commodifies the body and an internet saturated with edited images train people, especially the young, to despise the bodies God called good. A Christian theology of the body offers a counter-formation: the body's worth is grounded in being made in God's image and destined for resurrection, not in conformity to an algorithmic ideal. Recovery typically requires medical, nutritional, and psychological care alongside the slow re-formation of how one sees and receives one's own body.", resources: "National Eating Disorders Association (nationaleatingdisorders.org); Finding Balance (findingbalance.com); a Christian-informed treatment team including a physician, dietitian, and therapist" },
  { condition: "Infertility, Miscarriage, and Reproductive Grief", color: "#8B5CF6", content: "The longing for children and the grief of its frustration runs through Scripture — Sarah, Rachel, Hannah, Elizabeth. These narratives neither minimize the anguish nor reduce a person's worth to their fertility. The body that cannot conceive, or that loses a pregnancy, is not a failed body or a sign of God's disfavor. Hannah's raw prayer at Shiloh (1 Sam 1) models bringing this specific bodily grief honestly before God. Churches often fall silent here, leaving couples isolated; faithful community means making space to lament a loss the world frequently dismisses, and resisting glib reassurances.", resources: "Hannah's prayer (1 Samuel 1); 'Held' by Abbey Wedgeworth; Sarah's Laughter and other Christian infertility ministries; a church community willing to grieve alongside" },
];

const RESOURCES_DATA = [
  { name: "Joni and Friends", url: "joniandfriends.org", desc: "Joni Eareckson Tada's ministry to people with disabilities and their families — the most significant Christian disability ministry in the world. Joni, who has been a quadriplegic since a diving accident at 17, has written over 50 books and shaped the Christian theology of disability and suffering more than any other figure in the past 50 years.", color: GREEN },
  { name: "The Body Keeps the Score", author: "Bessel van der Kolk", url: "besselvanderkolk.com", desc: "Not a Christian book, but essential reading for understanding how trauma affects the body — and why embodied practices (exercise, sleep, physical therapy, yoga, rhythmic movement) are central to healing. Christian counselors and pastors who work with trauma survivors need this framework.", color: PURPLE },
  { name: "Practicing the Way (John Mark Comer)", url: "practicingtheway.org", desc: "John Mark Comer's framework for spiritual formation integrates embodied disciplines: sleep, food, fasting, Sabbath, silence, and solitude. The Practicing the Way curriculum (used in thousands of churches) is one of the most comprehensive approaches to embodied spiritual formation in contemporary evangelicalism.", color: "#3B82F6" },
  { name: "Surprised by Hope (N.T. Wright)", url: "ntwrightpage.com", desc: "The most important contemporary book on resurrection theology — essential for a Christian theology of the body. Wright argues that the New Testament's consistent hope is not disembodied heaven but the resurrection of the body in a renewed creation, and that this hope transforms how Christians care for creation, culture, and their own bodies.", color: "#EF4444" },
  { name: "Keeping the Sabbath Wholly (Marva Dawn)", url: "spdbooks.org", desc: "The most comprehensive guide to Sabbath practice from a deeply Protestant perspective. Dawn addresses the theological foundations, the practical challenges, and the spiritual transformation that comes from genuine weekly rest. Essential for anyone wanting to recover Sabbath practice.", color: "#F59E0B" },
  { name: "Anatomy of the Soul (Curt Thompson)", url: "curtthompson.net", desc: "A Christian psychiatrist integrates neuroscience with Christian theology and spiritual formation — showing how the brain is shaped by relationship, prayer, narrative, and community, and how these insights illuminate what Scripture says about transformation. One of the most important books at the intersection of faith and neuroscience.", color: "#10B981" },
  { name: "You Are What You Love (James K.A. Smith)", url: "jameskasmith.com", desc: "Smith argues that we are not primarily thinking things but desiring, embodied creatures shaped by habits and 'liturgies' — repeated bodily practices that form our loves below the level of conscious thought. A landmark account of why embodied worship, ritual, and habit matter for Christian formation more than mere information.", color: "#EC4899" },
  { name: "Embodied (Preston Sprinkle)", url: "centerforfaith.com", desc: "A careful, compassionate, and orthodox treatment of the body, gender, and identity — engaging the science and the pastoral questions honestly while holding to a historic Christian theology of the body. Useful for thinking through one of the most contested areas of contemporary embodiment with both conviction and grace.", color: "#8B5CF6" },
  { name: "The Genesis of Gender / Theology of the Body (Catholic stream)", url: "vatican.va", desc: "John Paul II's catechesis 'Theology of the Body' (delivered 1979-1984) is the most influential modern Catholic articulation of the body's meaning, gift, and nuptial significance. Christopher West's 'Theology of the Body for Beginners' offers an accessible entry. A major ecumenical resource for any serious study of embodiment.", color: "#06B6D4" },
];

const BODY_VIDEOS = [
  { videoId: "KbFKcFxqVlo", title: "Your Body Is a Temple — What That Actually Means", channel: "Gospel in Life / Tim Keller", description: "Keller unpacks 1 Corinthians 6:19-20 and what it means practically that the Holy Spirit indwells the body." },
  { videoId: "ACZbpLkY8To", title: "Resurrection of the Body — N.T. Wright", channel: "N.T. Wright Online", description: "Wright explains why the bodily resurrection of Jesus guarantees our own bodily resurrection, and why this changes everything." },
  { videoId: "fJnGJN6laqE", title: "Theology of the Body — An Overview", channel: "Desiring God", description: "A theological survey of what Scripture teaches about the body from creation to resurrection." },
  { videoId: "Z8lkuuhVkOI", title: "The Body Is Good — Fighting Gnostic Christianity", channel: "Ligonier Ministries", description: "Why the church must recover a robust theology of the body against both secular materialism and spiritual dualism." },
];

const KEY_SCRIPTURES = [
  { ref: "Genesis 1:31", text: "God saw all that he had made — including embodied humanity — and it was very good.", color: GREEN },
  { ref: "Psalm 139:13-14", text: "You knit me together in my mother's womb; I am fearfully and wonderfully made.", color: PURPLE },
  { ref: "John 1:14", text: "The Word became flesh and made his dwelling among us — God himself took on a body.", color: "#3B82F6" },
  { ref: "Romans 12:1", text: "Offer your bodies as a living sacrifice, holy and pleasing to God — this is your true and proper worship.", color: "#EF4444" },
  { ref: "1 Corinthians 6:19-20", text: "Your body is a temple of the Holy Spirit; you are not your own, you were bought at a price. Therefore honor God with your body.", color: "#F59E0B" },
  { ref: "1 Corinthians 15:42-44", text: "Sown perishable, raised imperishable; sown a natural body, raised a spiritual body — but a body still.", color: "#10B981" },
  { ref: "2 Corinthians 12:9", text: "My grace is sufficient for you, for my power is made perfect in weakness.", color: "#EC4899" },
  { ref: "Philippians 3:21", text: "He will transform our lowly bodies to be like his glorious body, by the power that enables him to subject all things to himself.", color: "#8B5CF6" },
];

export default function TheologyOfBodyPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_theology-of-body_tab", "theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>🕊️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Theology of the Body</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: "0 auto" }}>
            The body is not a prison — it is created good, redeemed by the Incarnation, and destined for resurrection. A biblical theology of physical life, health, illness, and the body's hope.
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["theology", "practices", "illness", "scriptures", "resources", "videos"] as Tab[]).map(t => (
            <button type="button" key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t === "theology" ? "Body Theology" : t === "practices" ? "Embodied Practices" : t === "illness" ? "Illness & Disability" : t === "scriptures" ? "Key Scriptures" : t === "resources" ? "Resources" : "Videos"}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${expanded[t.title] ? t.color + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button type="button" onClick={() => setExpanded(e => ({ ...e, [t.title]: !e[t.title] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: t.color, fontWeight: 800, fontSize: 15, marginBottom: 3 }}>{t.title}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>{t.ref}</div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{expanded[t.title] ? "−" : "+"}</span>
                </button>
                {expanded[t.title] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 0" }}>{t.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {PRACTICES.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${p.color}25`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: p.color, fontWeight: 900, fontSize: 16, marginBottom: 10 }}>{p.practice}</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>WHY IT MATTERS</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.why}</p>
                  </div>
                  <div>
                    <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>HOW TO PRACTICE</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.how}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "illness" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {ILLNESS.map((ill, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${ill.color}25`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: ill.color, fontWeight: 900, fontSize: 15, marginBottom: 12 }}>{ill.condition}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 12 }}>{ill.content}</p>
                <div style={{ background: `${ill.color}08`, border: `1px solid ${ill.color}15`, borderRadius: 8, padding: "8px 12px" }}>
                  <span style={{ color: ill.color, fontWeight: 700, fontSize: 11 }}>Resources: </span>
                  <span style={{ color: TEXT, fontSize: 12 }}>{ill.resources}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scriptures" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: "0 0 6px" }}>
              The body is woven through the whole of Scripture — created, indwelt, suffering, and finally raised. These passages anchor a Christian theology of physical life.
            </p>
            {KEY_SCRIPTURES.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${s.color}25`, borderRadius: 12, padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 5, borderRadius: 3, background: s.color, alignSelf: "stretch", flexShrink: 0, minHeight: 36 }} />
                <div>
                  <div style={{ color: s.color, fontWeight: 800, fontSize: 13, marginBottom: 4 }}>{s.ref}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "resources" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 14 }}>
            {RESOURCES_DATA.map((r, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${r.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: r.color, fontWeight: 900, fontSize: 15, marginBottom: 2 }}>{r.name}</div>
                {r.url && <div style={{ color: MUTED, fontSize: 11, marginBottom: 10 }}>{r.url}</div>}
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {BODY_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
