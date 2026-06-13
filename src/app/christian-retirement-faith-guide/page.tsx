"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "A Theology of Aging",
  "Vocation After Work",
  "Legacy and the Next Generation",
  "The Losses of Aging",
  "Finishing Well",
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
    id: "A Theology of Aging",
    heading: "A Theology of Aging",
    paragraphs: [
      "The Bible&rsquo;s counter-cultural view of old age begins with a coronation. Proverbs 16:31: &ldquo;Gray hair is a crown of glory; it is gained in a righteous life.&rdquo; Leviticus 19:32: &ldquo;You shall stand up before the gray head and honor the face of an old man.&rdquo; These are not polite gestures toward the elderly; they are theological claims about what old age means and what it is worth. The culture&rsquo;s view of aging is essentially one of decline, loss, and irrelevance &mdash; old people are a cost center, not an asset, a problem to be managed rather than a gift to be received. The Christian tradition has always understood elderhood differently: as the stage of life in which wisdom is deepest, perspective is longest, and the inner life can flourish even as the outer life diminishes.",
      "Paul&rsquo;s great statement in 2 Corinthians 4:16 is the theological key: &ldquo;Though our outer self is wasting away, our inner self is being renewed day by day.&rdquo; Paul refuses both available lies about aging: the flattering one (you&rsquo;re not really declining) and the despairing one (decline is the whole story). Two processes run simultaneously, on different ledgers. The outer self is wasting away &mdash; Paul concedes the eyes, the joints, the stamina, the diagnoses without a flicker of denial. And simultaneously, on a different account, the inner self is being renewed &mdash; not annually or at major milestones, but day by day: a daily deposit of glory running concurrently with the daily withdrawal of physical strength.",
      "The groaning of creation (Romans 8:22&ndash;23) includes bodily aging &mdash; it is real loss, not illusion. Paul does not spiritualize away the reality of physical decline. But verse 17 chains the processes together: &ldquo;this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison.&rdquo; The wasting is producing something. In Paul&rsquo;s theology, the losses of age are not the random vandalism of time but a workshop in which an eternal weight is being forged. This is why he can call decades of affliction &ldquo;light&rdquo; and &ldquo;momentary&rdquo;: he has seen both sides of the ledger. The aging body is scaffolding coming down as the permanent structure nears completion.",
      "Psalm 92 extends the same theology with botanical imagery chosen for its precision: &ldquo;The righteous flourish like the palm tree and grow like a cedar in Lebanon&hellip; They still bear fruit in old age; they are ever full of sap and green&rdquo; (92:12&ndash;14). The date palm bears more heavily as it matures; the cedar of Lebanon goes on adding girth and height for centuries. Against every cultural assumption of decline, the psalmist asserts continued productivity &mdash; not despite old age but in it, not in spite of the years but because of them. The condition is in the planting: &ldquo;planted in the house of the LORD.&rdquo; The fruitfulness of the aged righteous is the late harvest of a long rootedness &mdash; decades of prayer and Scripture and worship drawing up water no surface drought can touch.",
      "The community&rsquo;s responsibility toward the aged is not merely a matter of kindness but of commandment. Leviticus 19:32 places honoring the elderly in the same sentence as fearing God &mdash; treating them as a single act. Jesus reserved some of his sharpest words for the religious technicality by which a man could avoid supporting his aging parents (Mark 7:9&ndash;13). Paul makes provision for aging family members a test of the faith itself: &ldquo;whoever does not provide for relatives, and especially for members of his household, has denied the faith and is worse than an unbeliever&rdquo; (1 Tim 5:8). A society&rsquo;s treatment of its old people is, in biblical accounting, a direct readout of its reverence for God.",
      "The church that takes this theology seriously looks different from the culture around it. It does not warehouse its elderly in invisibility while directing all its energy toward the young and productive. It recognizes that the aged believer who is still full of sap and green &mdash; still praying, still blessing, still bearing the fruit of wisdom and perspective and unhurried presence &mdash; is one of its most valuable members, not despite their limitations but through them. The aged saint who has outlasted the need to perform and the compulsion to succeed, who has nothing left to prove and no platform left to manage, is often, for exactly these reasons, the community&rsquo;s most honest voice and its most concentrated source of grace.",
      "The resurrection hope transforms the theology of aging in one final and decisive way: physical decline is not the last word. The bodily resurrection promised by the Christian gospel means that the specific person &mdash; in all their embodied particularity &mdash; is what eternity holds. The frailties of the aging body are not the person&rsquo;s destination but their penultimate condition. The crown of gray hair points, in this light, toward a glory that no physical decline can touch &mdash; the glory of the person who has followed God all the way home, whose inner self has been renewed day by day, and who arrives at the resurrection not diminished but complete.",
    ],
  },
  {
    id: "Vocation After Work",
    heading: "Vocation After Work",
    paragraphs: [
      "The question retirement raises is one that most Western culture cannot answer well: what are you for when you are no longer producing? The consumer economy has one answer: you are for leisure &mdash; golf, travel, grandchildren, the consumption of experiences you deferred during the productive years. This is not a malicious answer, but it is a thin one, and the research consistently shows that it is not sufficient. The most robust predictors of health, happiness, and longevity in the retirement years are not leisure activities but purpose, engagement, and contribution &mdash; the sense that one is still for something, still needed, still making a genuine difference to someone.",
      "The Christian answer to the question is different: you are for what you have always been for &mdash; loving God and neighbor, bearing witness to the kingdom, serving the common good. The specific form of that service changes; the vocation does not retire. A career is a particular, paid assignment within the larger vocation of following Christ; it can and usually should end. The vocation itself &mdash; to love God, love neighbor, make disciples, do justice, pray without ceasing &mdash; carries no age limit and no severance date. The danger of modern retirement is not rest, which is biblical and good, but the cultural script that comes bundled with it: that the remaining decades are essentially consumption. For a disciple, twenty or thirty post-career years are not a long weekend. They are a deployment.",
      "The example of Caleb at eighty-five stands as the biblical icon of vocation in the retirement years. Forty-five years after Kadesh-barnea, with decades of wilderness wandering behind him and the conquest of the promised land underway, Caleb stands before Joshua and makes the Bible&rsquo;s greatest old-age speech: &ldquo;Give me this hill country of which the LORD spoke on that day&rdquo; (Josh 14:12) &mdash; give me this mountain. He is not requesting a quiet valley or a comfortable settlement. He is requesting the hardest assignment on the map, the hill country of the Anakim, the giants who terrified Israel a generation earlier. He is eighty-five. The chapter gives his secret five times: he &ldquo;wholly followed the LORD.&rdquo; The age changed; the following did not.",
      "What the retirement years make possible that earlier life stages could not is significant: time for prayer and contemplation that a full work schedule crowded out; the freedom to engage with needs that require weekday availability rather than weekend presence; mentoring the next generation with the unhurried attention that careers rarely permitted; grandparenting as a ministry of formation; serving in ways that cost nothing except time and experience, which are exactly what the retirement years hold in abundance. The retired believer who asks &ldquo;to what is God redeploying me?&rdquo; rather than &ldquo;when can I rest?&rdquo; is often surprised by how much is available to give and how much is genuinely needed.",
      "The research on retirement is stark in its implications for the question of vocation. Studies of post-retirement health consistently find that the strongest predictor of longevity and wellbeing is not physical health at retirement, not financial security, and not leisure activities, but a sense of purpose and contribution. The volunteer who teaches, mentors, builds, or serves maintains physical and cognitive health at significantly higher rates than the retiree who pursues purely recreational activities. This is not an argument against rest or leisure; it is an argument that human beings are made for meaning, not merely for comfort, and that the retirement years are no exception to the anthropological fact.",
      "The specific form that post-career vocation takes will vary enormously by person, circumstance, health, and context. Some will find it in a second career; some in sustained volunteering; some in deep investment in family and community; some in a ministry of prayer and intercession that could not exist alongside the demands of a working life. The key is not the particular form but the question being asked: not &ldquo;what will keep me entertained and comfortable?&rdquo; but &ldquo;where does what I have to give meet what the world genuinely needs?&rdquo; This is Buechner&rsquo;s vocational question asked in the retirement years &mdash; and it tends to produce answers, for those who ask it seriously, that are more energizing than any amount of leisure could be.",
      "The church has a particular role to play in helping its retiring members navigate this transition. Most congregations are urgently in need of exactly what the retired person possesses: weekday availability, accumulated wisdom, mentoring capacity, administrative experience, long-term relationships, and the kind of unhurried attention that only comes when the calendar is no longer filled by employment. The congregation that actively connects its retiring members to genuine service opportunities &mdash; not as busywork but as genuine ministry requiring genuine gifts &mdash; gives them something the culture&rsquo;s retirement script cannot: a continuing sense of being genuinely necessary, genuinely useful, and genuinely called.",
    ],
  },
  {
    id: "Legacy and the Next Generation",
    heading: "Legacy and the Next Generation",
    paragraphs: [
      "The developmental psychologist Erik Erikson identified &ldquo;generativity&rdquo; as the central task of mature adulthood &mdash; the concern for establishing and guiding the next generation, expressed in creativity, productivity, and the care of those who will follow. The failure of generativity produces what he called &ldquo;stagnation&rdquo;: a self-absorption that has turned away from the future and retreated into the comfort of the present self. Erikson observed this dynamic across cultures and concluded that it is not merely a psychological stage but a human necessity: the mature adult who is not contributing to the generation that follows is not simply idle; they are failing at one of the essential tasks of their life stage.",
      "The Christian frame amplifies Erikson&rsquo;s insight with a theological purpose. Psalm 71:18 is one of the most explicit statements in Scripture of the elder&rsquo;s vocation: &ldquo;do not forsake me until I have declared your might to the next generation, your power to all who are to come.&rdquo; The psalmist asks for extended life not to enjoy it but to finish a transmission. He has a lifetime&rsquo;s evidence in custody &mdash; decades of answered prayers, survived valleys, observed providences, and witnessed grace &mdash; and he regards dying before handing it on the way a courier would regard dying with the dispatches undelivered. The aging believer is not a relic of the faith. They are its courier to people not yet born.",
      "What legacy actually means, biblically, is not primarily financial inheritance, though the stewardship of material resources is a real responsibility. Legacy is the transmission of faith, character, and wisdom &mdash; the things that cannot be inherited but must be imparted, and that can only be imparted by someone who has lived long enough to have them. The Bible&rsquo;s pattern for the last season of life is consistently this: the aged blessing and equipping the young. Dying Jacob gathers his twelve sons and blesses each one individually (Genesis 49). Moses spends Deuteronomy &mdash; the last month of his life &mdash; preaching memory to a generation that never saw Egypt. David stockpiles materials and charges Solomon to build what he himself will never see (1 Chronicles 28&ndash;29). The pattern is not retirement but relay.",
      "The grandparenting vocation deserves particular attention. Grandparents often have a kind of access to grandchildren that parents, caught up in the immediate demands of parenting, cannot provide. The long-range view, the unhurried presence, the freedom from the daily management of behavior and schedules &mdash; these create conditions for a different kind of relationship. The grandparent who tells stories of God&rsquo;s faithfulness from their own life, who prays with and for grandchildren with an accumulated specificity that comes from decades of watching God work, who models a faith that has survived hard things and come out deeper on the other side, is doing something that no program, curriculum, or youth ministry can replicate.",
      "Paul&rsquo;s charge to Timothy about the relay of faith captures the essential structure: &ldquo;what you have heard from me in the presence of many witnesses entrust to faithful people, who will be able to teach others also&rdquo; (2 Tim 2:2). He begins that letter by naming the relay that has already happened: faith dwelling in Timothy&rsquo;s grandmother Lois and his mother Eunice before it dwells in Timothy himself. Three generations named in two verses. The faith arrived through people. The faith departs through people. The question for the retirement years is: who are the Timothys in my orbit? To whom am I handing what I have received? Who will name me the way Timothy names Lois &mdash; as the one in whose faith their own faith is rooted?",
      "The practical work of legacy requires intentionality that does not come naturally. Most people do not spontaneously sit down and articulate what they want to pass on; the dispatches stay in the bag undelivered because they are never systematically unpacked. The legacy letter &mdash; a written account of faith, experience, and blessing addressed to specific people &mdash; is a practice with ancient precedent. Jacob&rsquo;s deathbed blessings were individual and specific (Gen 49:28 notes that &ldquo;he blessed them, blessing each with the blessing suitable to him&rdquo;). Generic legacy is half a legacy; the specific, named blessing delivered to the specific person carries a weight that nothing generic can match.",
      "The community of the church mediates legacy in ways that families cannot. The elderly believer who has served a congregation for forty years holds a living memory of God&rsquo;s faithfulness to that community &mdash; the prayers answered, the crises survived, the patterns of grace visible only across decades &mdash; that no younger member can possess. When that memory is shared, in testimony, in preaching, in conversation, in the formal practices of remembrance that some congregations build into their life together, the community receives something irreplaceable: the evidence, witnessed by someone who was there, that the God they are trusting has been trustworthy across time. This is what the elder&rsquo;s voice adds to the community&rsquo;s life that no other voice can provide.",
    ],
  },
  {
    id: "The Losses of Aging",
    heading: "The Losses of Aging",
    paragraphs: [
      "Retirement brings freedom and also loss. The loss of structured purpose is often the first and most disorienting: after decades of days organized around external demands &mdash; meetings, deadlines, the rhythms of institutional life &mdash; the unstructured day of retirement can feel less like liberation than like amputation. The professional identity that organized how one was known to oneself and others &mdash; the job title, the organization, the role &mdash; departs along with the job. The community that came with work &mdash; colleagues, clients, the daily companionship of shared purpose &mdash; dissolves when the employment ends. These losses are real, and the grief over them is legitimate and often underacknowledged.",
      "Beyond the losses specific to retirement, the aging years bring their own accumulating catalogue of loss: the loss of physical capacities that once defined freedom and identity; the first diagnoses that mark a permanent change in what the body can do; the death of peers, which begins in the sixties and accelerates through the seventies and eighties until one has outlived most of the people who knew one when; the gradual loss of independence, of driving, of living alone, of managing the household without assistance; and, for those who live long enough, the death of a spouse &mdash; the loss of the person who was the context for most of the adult life. These are not abstractions. They are the daily texture of the later years.",
      "The Psalms of lament are the theological resource for aging&rsquo;s losses, and Psalm 71 is the Psalter&rsquo;s great old-age prayer. Its opening cry speaks directly from the experience of the aging believer: &ldquo;Do not cast me off in the time of old age; forsake me not when my strength is spent&rdquo; (71:9). The psalmist is not performing faith; he is praying from inside the fear that is native to aging &mdash; the fear of abandonment, of invisibility, of reaching the end of one&rsquo;s usefulness and finding oneself discarded. God does not require us to pretend the losses are not real. He invites us to bring them to him with complete honesty, in the grammar of lament that the Psalter provides.",
      "The particular loneliness of outliving one&rsquo;s peers deserves sustained attention. The person who has buried most of their close friends, whose world of shared memory has been progressively reduced, who can no longer refer to a name from the past and expect it to be recognized, experiences a form of loneliness that is qualitatively different from ordinary social isolation. It is the loneliness of being the last carrier of a world &mdash; the last person for whom certain stories, certain places, certain people are alive. This grief has no resolution in the ordinary sense; there is no one to call who also remembers. It is the grief of being the last survivor of something, and it is one of the distinctive spiritual challenges of long life.",
      "The community of the church is called to be the family that can surround the bereaved elderly in ways that biological family often cannot. The young visiting the old, the multi-generational congregation that includes the elderly in its life rather than organizing them into a separate program, the pastoral commitment to regular contact with those who can no longer attend services &mdash; these are not acts of charity but expressions of the body of Christ functioning as it was designed to function. When the church surrounds the aging and bereaved with genuine presence &mdash; not programs, not visits organized out of obligation, but the actual company of people who care &mdash; it does something irreplaceable for those it accompanies.",
      "The theology of lament applied to the losses of aging insists that grief is not a failure of faith but an expression of it. To lament is to bring one&rsquo;s losses into the presence of the God who holds them, who is not surprised by them, who does not require us to perform peace we do not feel. The aged believer who grieves the losses of aging &mdash; honestly, specifically, without spiritual bypass &mdash; is doing something more faithful than the one who maintains a performed equanimity. The psalms of lament are in Scripture because God made room for them there. The grief of the elderly belongs in the prayer life of the church, voiced and honored rather than managed into silence by the pressure to present a faith that is never troubled.",
      "The promise that frames all of aging&rsquo;s losses is the eschatological promise of Revelation 21:4: &ldquo;He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.&rdquo; This is not the denial of grief but its promised end. The tears exist; they are real; they belong to this age. But they will be wiped away personally, by the hand of God. For those in the retirement years who are accumulating losses with increasing speed, this promise is not a platitude but a specific claim: the losses are real and the grief is legitimate, and neither is the final word. The one who enters every grief alongside the aging believer is the one who also promises to wipe every tear.",
    ],
  },
  {
    id: "Finishing Well",
    heading: "Finishing Well",
    paragraphs: [
      "The concept of finishing well comes from the race metaphor that Paul uses repeatedly in his letters, most definitively near the end of his life: &ldquo;I have fought the good fight, I have finished the race, I have kept the faith&rdquo; (2 Timothy 4:7). The three phrases are not synonymous. Fighting the good fight involves moral and spiritual struggle across the course of a life. Finishing the race involves perseverance &mdash; not giving up, not being disqualified, not running off course. Keeping the faith involves fidelity to the core commitments that gave the life its direction. All three are achievements that only the end of the race can confirm. Paul writes these words facing his own imminent execution, with the certainty of one who has seen the finish line and knows he is going to cross it.",
      "Finishing well means not just reaching old age but reaching it with character intact, faith deepened, relationships repaired, and the end embraced with peace rather than terror. The pastoral literature on finishing well consistently identifies several practical components. Having honest conversations about death and dying with family &mdash; while one is still capable of having them &mdash; is an act of love that spares those who will survive the burden of making decisions about one&rsquo;s care without knowing one&rsquo;s wishes. Completing the legal and financial preparations &mdash; wills, advance directives, powers of attorney, clear arrangements for the distribution of assets &mdash; is similarly an act of love, reducing the burden on surviving family at one of the most difficult moments they will face.",
      "Reconciling broken relationships while there is time is perhaps the most urgent of the practical components. The aging person who carries unforgiven grievances, broken relationships, or long-standing estrangements into the final years risks dying with the relational business of their life unfinished, leaving those who survive them with the impossible task of completing what can no longer be completed with the person gone. The tradition of the ars moriendi &mdash; the medieval art of dying well &mdash; consistently emphasized the importance of dying without unresolved hostility, without unforgiven injury, without the burden of severed relationships that could have been repaired. This is not merely psychological counsel; it is spiritual. The forgiveness that Jesus makes available is not only for past guilt but for present estrangement.",
      "Articulating faith for those who will come after &mdash; in writing, in recorded conversation, in the formal practice of legacy transmission &mdash; is the vocational task of the retirement years described in the previous section, made urgent by the approach of the end. The testimony that the aging believer carries cannot be reconstructed after they are gone; it can only be transmitted while they are still here. The stories of God&rsquo;s faithfulness across a life &mdash; the prayers answered, the darknesses survived, the moments when the presence of God was unmistakably real &mdash; are exactly what the next generation most needs and least knows how to ask for. The believer who waits to be asked is likely to die unasked. The one who offers is giving a gift of incalculable value.",
      "The Christian approach to death is shaped by the resurrection hope at the center of the gospel. &ldquo;For to me, to live is Christ and to die is gain&rdquo; (Philippians 1:21). This is not a performance of indifference to life; Paul loved life and found it meaningful. It is a statement about the relative weight of two good things: life in Christ, which is very good, and being with Christ, which is better. The Christian who has lived well does not face death as a defeat or an ending but as a passage &mdash; the crossing from one mode of existence with Christ to a fuller and more complete one. The death of a Christian, in the Christian frame, is not a loss of the person but a completion of the person, the arrival at the destination toward which the whole life was moving.",
      "The resurrection hope is not wishful thinking but the central claim of the Christian gospel, staked on a historical event: the bodily resurrection of Jesus of Nazareth from the dead. Paul&rsquo;s argument in 1 Corinthians 15 is that the resurrection of Jesus is the firstfruits of a general resurrection; that if Jesus rose, then those who have died in him will also rise; and that if there is no resurrection, &ldquo;your faith is futile and you are still in your sins&rdquo; (15:17). He does not offer the resurrection as a comforting metaphor. He offers it as a testable claim &mdash; and staks everything on its truth. The aging believer who anchors their peace in the resurrection hope is not engaging in spiritual self-deception. They are staking their life on what the Christian tradition has always staked its life on: the empty tomb.",
      "The community of the church has a particular responsibility to help its members finish well. This means preaching on death and resurrection not once a year at Easter but as a regular feature of congregational life. It means making space for conversations about advance directives, end-of-life wishes, and funeral planning as acts of spiritual preparation rather than morbid preoccupation. It means being present at the deathbeds of its members, offering prayer and anointing and Scripture and song as they approach the end. It means honoring the deaths of its members with honesty and care &mdash; not rushing past the loss to the resurrection, but allowing both to be held, as Paul holds them, in the same breath. The congregation that does these things well gives its members something no other institution can give: a community of people who know how to finish, and who will be present to help.",
    ],
  },
];

const videoItems = [
  { videoId: "mJJRcnGBFmc", title: "John Piper on Finishing Well" },
  { videoId: "GiPe1OiKQuk", title: "The Christian and Aging — A Biblical View" },
  { videoId: "j4REbVFFkX4", title: "Legacy — What Christians Leave Behind" },
];

export default function ChristianRetirementFaithGuidePage() {
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
            Faith in the Retirement Years
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Retirement Faith Guide
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Faith in retirement &mdash; the theology of aging and elderhood, what to do with freedom after a lifetime of work, legacy and the next generation, the losses of aging, preparing well for death, and what it means to finish well.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;I have fought the good fight, I have finished the race, I have kept the faith.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>2 Timothy 4:7</p>
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
                background: tab === t ? "rgba(217, 119, 6, 0.12)" : "transparent",
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
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>Vocation Never Retires</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>Scripture knows careers that conclude but no discharged disciples. The retirement years are not the epilogue of a Christian life but some of its most fruitful chapters &mdash; the season when wisdom is deepest, the inner life can flourish most fully, the legacy can be transmitted most deliberately, and the finish line can be crossed with faith intact and character deepened by the years. &ldquo;For to me, to live is Christ and to die is gain.&rdquo;</p>
        </div>
      </main>
    </div>
  );
}
