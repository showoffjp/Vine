"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "actions" | "voices" | "churches" | "videos";

const THEOLOGY_ITEMS = [
  {
    id: "mandate",
    title: "The Creation Mandate",
    verse: "Genesis 1:28; 2:15",
    body: "God commanded humanity to 'be fruitful and increase in number; fill the earth and subdue it. Rule over' it (Genesis 1:28). This 'dominion' has been weaponized to justify exploitation, but Genesis 2:15 reframes it: 'The LORD God took the man and put him in the Garden of Eden to work it (abad) and take care of it (shamar).' Abad means to serve — the same word used for serving God and serving others. Shamar means to keep, guard, and protect — the same word for keeping covenant. Dominion is not ownership but service. The question is not 'what can I extract?' but 'how do I faithfully steward what belongs to Another?' A king who devastates the land he rules has failed his calling. True dominion looks like a gardener — patient, attentive, and oriented toward flourishing.",
  },
  {
    id: "sabbath",
    title: "Sabbath and Land Rest",
    verse: "Leviticus 25; 26:34-35",
    body: "The Mosaic Law included Sabbath rest not only for humans but for the land itself: 'In the seventh year the land is to have a year of sabbath rest, a sabbath to the LORD' (Leviticus 25:4). The land was not to be farmed every seventh year — it was to lie fallow, recover, and produce for the poor and the wild animals. When Israel ignored this command, God promised judgment: 'The land will enjoy its sabbath years all the time that it lies desolate... the land will rest and enjoy its sabbaths' (Leviticus 26:34-35). The land had a claim on human economic life. Creation-care was literally embedded in Israel's covenant calendar. The modern equivalent is not merely crop rotation but a posture of restraint — acknowledging that efficiency is not the only value and that ecological systems need recovery time. The land's rest is sabbath rest.",
  },
  {
    id: "groaning",
    title: "The Groaning Creation",
    verse: "Romans 8:18-22",
    body: "Paul writes that 'the creation waits in eager expectation for the children of God to be revealed' and that 'the whole creation has been groaning as in the pains of childbirth right up to the present time' (Romans 8:19, 22). This is remarkable: creation is not an inert backdrop to the human drama. It participates in, is affected by, and awaits the final act of human redemption. Paul says creation was 'subjected to frustration, not by its own choice, but by the will of the one who subjected it' — a reference to the curse of Genesis 3. The groaning is not resignation; it is hope-filled labor. Creation's travail points toward a coming birth, not an ending. And we are named as those in whom creation's hope is invested: the children of God, called to embody the firstfruits of the new creation now. As N.T. Wright notes, this means Christians should care for creation not as escapists but as participants in its anticipated renewal.",
  },
  {
    id: "new-creation",
    title: "The New Creation",
    verse: "Revelation 21-22",
    body: "The final vision of Scripture is not souls floating in a disembodied heaven. It is 'a new heaven and a new earth' (Revelation 21:1) — the holy city coming down from heaven to earth, God dwelling with humanity in a renewed and embodied creation. The river of life runs through the city. The tree of life bears fruit every month. The nations bring their 'glory and honor' into the city — implying cultural and material continuity, not erasure. The Greek word for 'new' (kainos) means new in quality, not new in replacement (neos). The New Jerusalem is not a substitute for creation but its glorified completion. This matters enormously for ethics: the physical world is not disposable. What we do to this earth anticipates — or contradicts — what we believe about its future. Caring for creation is an act of eschatological integrity, living now in light of what God has promised then.",
  },
  {
    id: "psalms",
    title: "The Psalms and Creation",
    verse: "Psalm 19; Psalm 104",
    body: "Psalm 19 opens with one of the most celebrated verses in creation theology: 'The heavens declare the glory of God; the skies proclaim the work of his hands' (v. 1). Creation is not mute matter — it is speech. It testifies. It praises. Psalm 104 is a sustained ecological theology: God waters the mountains, grass grows for the cattle, wine gladdens the human heart, storks nest in fir trees, lions roar for their prey from God. Each creature has a God-assigned place and role in a web of mutual flourishing. Notably, Psalm 104:31 says 'May the LORD rejoice in his works' — creation has independent value as an object of God's delight, apart from human utility. Richard Bauckham argues that Psalms 148 and 150 present all creation as a worshipping community. To damage the community of creation is to silence a choir of praise.",
  },
  {
    id: "incarnation",
    title: "Jesus and the Material World",
    verse: "John 1:14; John 6:1-14",
    body: "The Incarnation is the most radical affirmation of the material world in human history: 'The Word became flesh and made his dwelling among us' (John 1:14). God did not condescend to matter reluctantly. He entered it, inhabited it, healed it. Jesus touched lepers, healed blind eyes, restored withered hands. The feeding of the five thousand involved real fish and real bread — Jesus multiplied matter rather than transcending it. The resurrection was bodily: Thomas touched the wounds, Jesus ate broiled fish on the shore. These are not accidents of the narrative — they reflect a consistent theology of matter as good, as redeemable, as the arena of God's redemptive action. Gnosticism, which denigrated the physical world as evil, was condemned as heresy precisely because it contradicted the Incarnation. Christian theology is irreducibly material. The earth is not a fallen waiting room; it is the theater of God's love.",
  },
];

type ActionCategory = "Personal" | "Home" | "Transportation" | "Church" | "Community" | "Lifestyle";

interface Action {
  category: ActionCategory;
  title: string;
  desc: string;
}

const ACTIONS: Action[] = [
  // Personal
  { category: "Personal", title: "Reduce Meat Two Days a Week", desc: "Livestock agriculture accounts for roughly 14.5% of global greenhouse gas emissions. Even two meat-free days weekly can reduce your personal food footprint by 20-30%." },
  { category: "Personal", title: "Switch All Bulbs to LED", desc: "LEDs use up to 90% less energy than incandescent bulbs and last 15-25 times longer. Replacing your ten most-used bulbs can save $75 a year in electricity." },
  { category: "Personal", title: "Unplug Phantom Loads", desc: "Electronics and appliances draw power even when off — 'vampire power' can account for 10% of your home electricity bill. Use smart power strips or unplug chargers when not in use." },
  { category: "Personal", title: "Buy Secondhand First", desc: "Before purchasing new clothing, books, furniture, or electronics, check thrift stores, Facebook Marketplace, or Buy Nothing groups. Secondhand goods spare the extraction and manufacturing energy." },
  { category: "Personal", title: "Use a Reusable Water Bottle", desc: "Americans discard roughly 50 billion plastic water bottles per year, most of which end up in landfills or waterways. A durable stainless steel bottle eliminates hundreds of single-use bottles annually." },
  // Home
  { category: "Home", title: "Install a Programmable Thermostat", desc: "Setting your thermostat 7-10°F lower for 8 hours a day can save up to 10% annually on heating and cooling. Smart thermostats learn your schedule and optimize automatically." },
  { category: "Home", title: "Compost Kitchen Scraps", desc: "Food waste in landfills produces methane, a greenhouse gas 80x more potent than CO2 over 20 years. Home composting returns nutrients to the soil while dramatically cutting your trash weight." },
  { category: "Home", title: "Switch to Green Energy", desc: "Contact your utility provider about renewable energy options or community solar programs. Many utilities now allow you to purchase wind or solar power for a modest premium." },
  { category: "Home", title: "Reduce Single-Use Plastic", desc: "Bring your own bags, choose products with minimal packaging, and switch from plastic wrap to beeswax wraps or reusable containers. Plastic pollution disproportionately harms ocean and coastal ecosystems." },
  { category: "Home", title: "Start a Vegetable Garden", desc: "Even a small raised bed or container garden reduces food miles, connects you to seasonal cycles, and provides hands-on teaching for children about where food comes from." },
  // Transportation
  { category: "Transportation", title: "Bike or Walk Trips Under 2 Miles", desc: "Transportation is the largest source of US greenhouse emissions. Short car trips are disproportionately polluting — the engine is cold and catalytic converter less efficient. Walking or cycling short trips is the highest-impact swap." },
  { category: "Transportation", title: "Carpool to Church", desc: "Coordinate with neighbors or church members to share rides on Sunday mornings. A full car emits roughly one-quarter the per-person CO2 of a single-occupancy vehicle." },
  { category: "Transportation", title: "Consider an Electric Vehicle at Next Purchase", desc: "EVs produce zero tailpipe emissions and, even on a grid with coal, typically emit less CO2 per mile than gas vehicles. Costs have dropped significantly, with federal tax credits still available." },
  { category: "Transportation", title: "Combine Errands Strategically", desc: "Trip-chaining — planning multiple stops in a single trip — dramatically reduces total miles driven. An idling car in a parking lot wastes fuel; turning the engine off for stops longer than 30 seconds saves gas." },
  { category: "Transportation", title: "Reduce One Flight Per Year", desc: "Aviation is among the fastest-growing sources of emissions. A single round-trip transatlantic flight can generate more emissions than months of driving. Consider train travel, video calls, or simply one fewer trip." },
  // Church
  { category: "Church", title: "Launch a Green Team", desc: "Form a small creation care committee within your congregation to assess current practices, set goals, and coordinate action. Sustainable change requires ongoing leadership and accountability." },
  { category: "Church", title: "Conduct an Energy Audit", desc: "Many utility companies offer free energy audits for nonprofit buildings. Churches often have significant waste from outdated HVAC systems, poor insulation, and inefficient lighting — an audit surfaces easy wins." },
  { category: "Church", title: "Plant Native Species on Grounds", desc: "Replace mowed grass with native wildflower meadows, shrubs, and trees adapted to your region. Native plants support pollinators, require no irrigation, and reduce maintenance costs significantly." },
  { category: "Church", title: "Reduce Church Paper Use", desc: "Move service bulletins to a church app or QR code screen, switch to digital communication for newsletters, and use recycled paper for what remains. Paper production drives significant deforestation." },
  { category: "Church", title: "Host a Creation Care Sunday", desc: "Dedicate a Sunday each year (many use Earth Day or Rogation Sunday) to creation care preaching, responsive prayer, and practical action steps. Theological grounding is essential for sustained congregational engagement." },
  // Community
  { category: "Community", title: "Support Local Farmers Markets", desc: "Local food systems reduce transportation emissions, keep money in local economies, and support small-scale farmers practicing more sustainable agriculture. Talk to vendors — relationships matter." },
  { category: "Community", title: "Advocate for Local Parks and Green Space", desc: "Attend city council meetings and speak in favor of parks, tree canopy ordinances, and green corridors. Urban green space benefits air quality, mental health, and wildlife habitat." },
  { category: "Community", title: "Volunteer for Trail and River Cleanups", desc: "Organizations like American Rivers, local land trusts, and watershed groups regularly organize cleanup events. Hands-on participation builds love for local places and practical relationships across the community." },
  { category: "Community", title: "Vote for Environmental Policies", desc: "Creation care is not a partisan issue, but policies matter. Evaluate candidates on clean air, clean water, conservation funding, and environmental justice — issues that protect the most vulnerable." },
  { category: "Community", title: "Support Environmental Justice Organizations", desc: "Environmental burdens fall disproportionately on low-income and minority communities who live near industrial sites, highways, and waste facilities. Supporting these organizations is care for neighbor and creation together." },
  // Lifestyle
  { category: "Lifestyle", title: "Practice Slow Fashion", desc: "Buy less clothing, buy better quality, and make it last. The fashion industry is responsible for 10% of global carbon emissions and massive water pollution. One well-made garment worn for years beats ten disposable ones." },
  { category: "Lifestyle", title: "Digital Minimalism and Device Energy", desc: "Global data centers consume roughly 200 terawatt-hours of electricity annually — more than many countries. Deleting unused apps, reducing video stream quality, and extending device lifespan all reduce your digital footprint." },
  { category: "Lifestyle", title: "Choose Durable Goods over Disposable", desc: "When buying kitchen tools, cleaning supplies, or household goods, prioritize items designed to last years rather than months. The 'buy once, cry once' principle reduces both waste and cumulative expense." },
  { category: "Lifestyle", title: "Reduce Food Waste at Home", desc: "The average American household throws away roughly $1,500 of food annually. Menu planning, FIFO refrigerator organization (first in, first out), and using leftovers creatively can cut food waste by 50% or more." },
  { category: "Lifestyle", title: "Learn About Your Local Ecosystem", desc: "Identify five local birds, five local trees, and your local watershed. Knowledge cultivates love. The more specifically you know a place, the more faithfully you will tend it. Local naturalist clubs, iNaturalist, and Audubon are good starting points." },
];

const ACTION_CATEGORIES: ActionCategory[] = ["Personal", "Home", "Transportation", "Church", "Community", "Lifestyle"];

const CATEGORY_COLORS: Record<ActionCategory, string> = {
  Personal: GREEN,
  Home: PURPLE,
  Transportation: "#3B82F6",
  Church: "#F59E0B",
  Community: "#EF4444",
  Lifestyle: "#EC4899",
};

interface Voice {
  id: string;
  name: string;
  role: string;
  work: string;
  summary: string;
  body: string;
  quote: string;
}

const VOICES: Voice[] = [
  {
    id: "berry",
    name: "Wendell Berry",
    role: "Farmer, Poet, Novelist",
    work: "\"It All Turns on Affection\" (2012 NEH Jefferson Lecture)",
    summary: "Agrarian theologian of place, care, and membership",
    body: "Wendell Berry — farmer in Port Royal, Kentucky — has spent over sixty years articulating what it means to inhabit a place faithfully. His central argument: the industrial economy treats land as a resource to be exploited; an agrarian economy treats land as a community to be loved. Berry's essay 'It All Turns on Affection' traces how local affection — love for a particular place, particular people, particular creatures — is the only reliable motive for good stewardship. Abstract environmental concern without rooted love produces sloganeering. Berry is suspicious of large-scale technological solutions; he trusts small-scale care, attention, and responsibility. His novels (the Port William membership series) give these convictions flesh in characters who farm, grieve, celebrate, and love a specific Kentucky countryside across generations. Berry is not formally an evangelical, but his work has profoundly shaped Christian agrarians. He challenges the church's uncritical embrace of industrial agriculture and mobility, calling Christians back to membership — belonging to a place and its people as a form of faithfulness.",
    quote: "\"It may be that when we no longer know what to do, we have come to our real work, and when we no longer know which way to go, we have begun our real journey.\"",
  },
  {
    id: "wright",
    name: "N.T. Wright",
    role: "New Testament Scholar, Bishop",
    work: "\"Surprised by Hope\" (2008), Chapter 12: \"Jesus, the Coming Kingdom, and the Church's Task\"",
    summary: "New creation theology — why the earth matters eternally",
    body: "N.T. Wright's contribution to creation care theology is not primarily about environmental policy but about eschatology: what does the Christian hope actually look like? In Surprised by Hope, Wright argues that the dominant evangelical vision of 'going to heaven when you die' is not the full biblical picture. The New Testament hope is resurrection — bodily, earthy, material. The New Jerusalem comes down to earth (Revelation 21); the dead are raised to renewed embodied life on a renewed earth. This has immediate ethical implications: if God intends to redeem the physical world and bring it to completion, then 'what you do in the Lord is not in vain' (1 Corinthians 15:58) includes your care for creation now. Work done for the kingdom — including environmental stewardship — will somehow be taken up into God's new creation rather than being erased. Wright explicitly connects this to ecology: the church that believes in bodily resurrection and new creation should be among the most energetic defenders of the present creation, because they know it has a future. The earth is not a waiting room to be abandoned; it is a home being prepared for transformation.",
    quote: "\"You are not saving souls for a disembodied eternity, but rescuing people for an embodied eternity on a renewed earth.\"",
  },
  {
    id: "francis",
    name: "Francis of Assisi",
    role: "Friar, Mystic, Patron Saint of Ecology",
    work: "Canticle of the Sun (Canticle of Brother Sun, 1225)",
    summary: "Creature-kin theology — all creation as family",
    body: "Born into wealth in Assisi (1181), Francis rejected his inheritance to embrace radical poverty, eventually founding the Franciscan order. His Canticle of the Sun — written in his native Umbrian Italian, not Latin — is arguably the first nature poem of the modern era. In it, Francis addresses Brother Sun, Sister Moon, Brother Wind, Sister Water, Brother Fire, and Sister Earth as kin — members of the same family of creatures under a common Father. This is not pantheism; Francis does not worship nature. He recognizes creation as co-worshipper: each creature praises God in its own mode of being. Theologians call this 'creature-kin' theology — the recognition that humans are part of creation, not simply its managers. Pope John Paul II named Francis the patron saint of ecology in 1979. Pope Francis chose his papal name explicitly in reference to 'the poor man of Assisi' and his care for creation. Francis's approach was concrete and particular: he preached to birds, negotiated with a wolf, and cared for lepers. His creation theology was not abstract — it was enacted in attentive, joyful engagement with specific creatures.",
    quote: "\"Praised be You, my Lord, with all Your creatures, especially Sir Brother Sun... Praised be You, my Lord, through Sister Moon and the stars.\"",
  },
  {
    id: "debate",
    name: "The Evangelical Debate",
    role: "Beisner (Cornwall) vs. Hayhoe (YECA)",
    work: "Cornwall Declaration (2000) vs. \"Saving Us\" by Katharine Hayhoe (2021)",
    summary: "Fairly presenting where evangelicals genuinely disagree",
    body: "E. Calvin Beisner founded the Cornwall Alliance for the Stewardship of Creation, which holds that: (1) environmental regulations often harm the poor more than pollution; (2) climate science is uncertain and its projections alarmist; (3) technological development and economic freedom are the best responses to environmental challenges; (4) Christian stewardship means developing resources wisely for human flourishing, not minimizing human impact. The Cornwall Declaration (signed by hundreds of evangelical leaders) reflects a tradition that ties creation care tightly to human economic prosperity. Katharine Hayhoe — atmospheric scientist, evangelical Christian, and professor at Texas Tech — represents a different evangelical stream. In Saving Us, she argues that climate change is the preeminent environmental justice issue of our time, disproportionately harming the world's poor. Hayhoe's faith motivates her science: caring for the vulnerable requires honest engagement with climate data. Young Evangelicals for Climate Action (YECA) represents rising evangelical engagement with her position. Both sides claim to speak from Scripture and to care for the poor. The debate is genuine. Hayhoe's scientific credentials are stronger; Beisner's concerns about regulatory overreach and economic harm to the poor deserve serious engagement rather than dismissal.",
    quote: "\"We don't need to agree on climate change to agree that we should care for the vulnerable and the creation entrusted to us.\" — Katharine Hayhoe",
  },
  {
    id: "francis-pope",
    name: "Pope Francis",
    role: "Bishop of Rome, Pope",
    work: "Laudato Si': On Care for Our Common Home (2015)",
    summary: "Integral ecology — the cry of the earth and the cry of the poor",
    body: "Laudato Si' — named after the opening words of Francis of Assisi's Canticle — is one of the most comprehensive statements of Christian environmental theology ever produced. Its central concept is 'integral ecology': the recognition that ecological degradation and social injustice are inseparable. The same throwaway culture that discards creation also discards people — the poor, the elderly, the unborn. You cannot solve environmental problems without addressing poverty; you cannot address poverty without addressing environmental degradation. Pope Francis draws on Catholic Social Teaching, the Psalms, Genesis, and the Eastern Church Fathers to construct a moral argument for environmental responsibility rooted in love for God, creation, and neighbor. He is particularly concerned with the poorest and most vulnerable, whose lives are most immediately harmed by climate change, water scarcity, and pollution. While Laudato Si' is a Catholic encyclical, it has been widely read and cited across Protestant evangelical communities — its scope, scholarship, and moral seriousness have made it an ecumenical resource for creation care theology.",
    quote: "\"The earth, our home, is beginning to look more and more like an immense pile of filth. In many parts of the planet, the elderly lament that once beautiful landscapes are now covered with rubbish.\" — Laudato Si' §21",
  },
];

interface ChurchOrg {
  name: string;
  tagline: string;
  desc: string;
  url: string;
  tag: string;
  tagColor: string;
}

const CHURCHES: ChurchOrg[] = [
  {
    name: "A Rocha International",
    tagline: "Christian Conservation in Over 20 Countries",
    desc: "Founded in Portugal in 1983 by Peter and Miranda Harris, A Rocha (Portuguese for 'The Rock') is one of the most established Christian conservation organizations in the world. With projects in over 20 countries across Africa, Asia, Europe, and the Americas, A Rocha combines rigorous conservation science with explicit Christian faith. Projects include wetland restoration in Kenya, species monitoring in Lebanon, and community-based land stewardship in Canada. A Rocha pioneered the integration of scientific ecology with Christian theology — demonstrating that faith communities can be at the leading edge of conservation, not its skeptics.",
    url: "arocha.org",
    tag: "Conservation",
    tagColor: GREEN,
  },
  {
    name: "Young Evangelicals for Climate Action",
    tagline: "A New Generation of Evangelical Climate Leaders",
    desc: "YECA was founded in 2012 by evangelical young adults who felt that traditional evangelical institutions were not engaging climate change seriously enough. Rooted in evangelical theology and committed to climate science, YECA trains young evangelicals to advocate for climate policy, engage their congregations, and connect environmental action to Christian discipleship. YECA organizes on college campuses, at evangelical conferences, and in Congress. It represents a generational shift: younger evangelicals consistently rank climate change as a higher priority than their parents' generation, and YECA provides theological scaffolding for that concern.",
    url: "yecaction.org",
    tag: "Advocacy",
    tagColor: PURPLE,
  },
  {
    name: "GreenFaith",
    tagline: "Interfaith with a Strong Christian Presence",
    desc: "GreenFaith is an interfaith environmental coalition — but its Christian arm is theologically substantive and organizationally significant. It provides resources for congregations seeking to reduce their environmental footprint, theological materials for preaching and teaching on creation care, and organizing support for climate advocacy. GreenFaith's interfaith nature is both a strength (broader coalition) and a caution for theologically conservative Christians (shared political goals don't always imply shared theological convictions). GreenFaith's 'Green Congregation' certification program has been adopted by hundreds of churches seeking a structured pathway to environmental responsibility.",
    url: "greenfaith.org",
    tag: "Interfaith",
    tagColor: "#3B82F6",
  },
  {
    name: "Climate Caretakers",
    tagline: "Evangelical Climate Action Network",
    desc: "Climate Caretakers is a project of the Evangelical Environmental Network focused on mobilizing evangelicals around climate action through a lens of prayer, education, and advocacy. The organization produces theological resources, runs prayer campaigns tied to climate events (floods, wildfires, droughts), and trains church leaders to incorporate creation care into regular ministry. Climate Caretakers operates with an explicitly evangelical identity, grounding its work in biblical stewardship and care for the vulnerable rather than secular environmental frameworks. This makes it well-suited for engaging evangelical congregations that might be skeptical of mainstream environmental organizations.",
    url: "climatecaketakers.org",
    tag: "Prayer & Action",
    tagColor: "#F59E0B",
  },
  {
    name: "Evangelical Environmental Network",
    tagline: "Publishers of \"Creation Care\" Magazine",
    desc: "The EEN has been the institutional backbone of evangelical creation care since 1993. It was founded in response to the Evangelical Declaration on the Care of Creation, which argued that environmental stewardship was a non-negotiable dimension of biblical faithfulness. EEN produces Creation Care magazine — a biannual publication that bridges theology, science, and practical action for evangelical readers. EEN was behind the influential 'What Would Jesus Drive?' campaign (2002) and the Evangelical Climate Initiative (2006), which collected signatures from 86 evangelical leaders on a statement affirming climate change and calling for action. Despite significant institutional headwinds from conservative evangelical organizations, EEN has maintained a consistent, biblically-grounded witness for decades.",
    url: "creationcare.org",
    tag: "Publication",
    tagColor: GREEN,
  },
  {
    name: "Restoring Eden",
    tagline: "Christian Creation Care Organization",
    desc: "Restoring Eden was founded with the conviction that caring for creation is not a liberal political cause but a natural expression of love for God and neighbor. The organization focuses on engaging Christians — particularly evangelicals — who are skeptical of mainstream environmental advocacy by framing creation care in explicitly biblical terms: stewardship, dominion-as-service, care for the poor. Restoring Eden runs conferences, produces curriculum for church small groups, and organizes practical conservation projects. Its vision is of Christians becoming known as the best stewards of rivers, forests, and farmland in their communities — living out the Creation Mandate through concrete, local action.",
    url: "restoringeden.org",
    tag: "Evangelical",
    tagColor: PURPLE,
  },
];

export default function CreationCareActionPage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<ActionCategory | "All">("All");
  const [selectedVoice, setSelectedVoice] = useState<string>("berry");

  const toggleExpanded = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredActions = activeCategory === "All"
    ? ACTIONS
    : ACTIONS.filter(a => a.category === activeCategory);

  const voice = VOICES.find(v => v.id === selectedVoice)!;

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Biblical Theology" },
    { id: "actions", label: "30 Action Steps" },
    { id: "voices", label: "Prophetic Voices" },
    { id: "churches", label: "Churches Taking Action" },
    { id: "videos", label: "🎬 Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ display: "inline-block", background: `${GREEN}18`, border: `1px solid ${GREEN}40`, borderRadius: 8, padding: "4px 14px", fontSize: 12, fontWeight: 700, color: GREEN, marginBottom: 16, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Creation Care
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 12, lineHeight: 1.2 }}>
            Caring for Creation
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            A practical guide for Christians who want to love God's creation — theological roots, 30 concrete actions, prophetic voices, and communities leading the way.
          </p>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 4, marginBottom: 36, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}` }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                padding: "10px 8px",
                borderRadius: 8,
                border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                transition: "background 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Biblical Theology */}
        {activeTab === "theology" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 28, lineHeight: 1.7 }}>
              Christian creation care does not begin with ecology — it begins with Scripture. These six theological pillars provide the foundation for faithful stewardship.
            </p>
            {THEOLOGY_ITEMS.map(item => (
              <div
                key={item.id}
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}
              >
                <button
                  onClick={() => toggleExpanded(item.id)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "20px 24px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "left",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14, flex: 1, minWidth: 0 }}>
                    <div style={{ width: 4, height: 36, background: expanded[item.id] ? GREEN : BORDER, borderRadius: 4, flexShrink: 0, transition: "background 0.15s" }} />
                    <div>
                      <div style={{ color: expanded[item.id] ? GREEN : TEXT, fontWeight: 800, fontSize: 17 }}>{item.title}</div>
                      <div style={{ color: MUTED, fontSize: 13, marginTop: 2 }}>{item.verse}</div>
                    </div>
                  </div>
                  <div style={{ color: MUTED, fontSize: 20, flexShrink: 0 }}>{expanded[item.id] ? "−" : "+"}</div>
                </button>
                {expanded[item.id] && (
                  <div style={{ padding: "0 24px 24px 24px" }}>
                    <div style={{ height: 1, background: BORDER, marginBottom: 20 }} />
                    <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: 0 }}>{item.body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: 30 Action Steps */}
        {activeTab === "actions" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 24, lineHeight: 1.7 }}>
              Thirty concrete steps across six categories. Filter by category to focus on the area most relevant to your season of life.
            </p>

            {/* Filter Buttons */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
              <button
                onClick={() => setActiveCategory("All")}
                style={{
                  padding: "7px 16px",
                  borderRadius: 20,
                  border: `1px solid ${activeCategory === "All" ? GREEN : BORDER}`,
                  background: activeCategory === "All" ? `${GREEN}18` : "transparent",
                  color: activeCategory === "All" ? GREEN : MUTED,
                  fontWeight: 700,
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                All (30)
              </button>
              {ACTION_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "7px 16px",
                    borderRadius: 20,
                    border: `1px solid ${activeCategory === cat ? CATEGORY_COLORS[cat] : BORDER}`,
                    background: activeCategory === cat ? `${CATEGORY_COLORS[cat]}18` : "transparent",
                    color: activeCategory === cat ? CATEGORY_COLORS[cat] : MUTED,
                    fontWeight: 700,
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Action Cards Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
              {filteredActions.map((action, i) => (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: 20,
                    borderTop: `3px solid ${CATEGORY_COLORS[action.category]}`,
                  }}
                >
                  <div style={{ marginBottom: 10 }}>
                    <span style={{
                      background: `${CATEGORY_COLORS[action.category]}18`,
                      color: CATEGORY_COLORS[action.category],
                      padding: "2px 10px",
                      borderRadius: 8,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                    }}>
                      {action.category}
                    </span>
                  </div>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 15, margin: "0 0 8px 0", lineHeight: 1.35 }}>{action.title}</h3>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{action.desc}</p>
                </div>
              ))}
            </div>

            {/* Count footer */}
            <div style={{ textAlign: "center", color: MUTED, fontSize: 13, marginTop: 24 }}>
              Showing {filteredActions.length} of 30 actions
            </div>
          </div>
        )}

        {/* Tab 3: Prophetic Voices */}
        {activeTab === "voices" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 28, lineHeight: 1.7 }}>
              Christians who have shaped how the church thinks about creation — from medieval mystics to contemporary scientists.
            </p>
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>

              {/* Left Panel — Voice List */}
              <div style={{ width: 220, flexShrink: 0 }}>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden", position: "sticky", top: 20 }}>
                  {VOICES.map(v => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVoice(v.id)}
                      style={{
                        width: "100%",
                        background: selectedVoice === v.id ? `${PURPLE}25` : "transparent",
                        border: "none",
                        borderLeft: `3px solid ${selectedVoice === v.id ? PURPLE : "transparent"}`,
                        borderBottom: `1px solid ${BORDER}`,
                        padding: "14px 16px",
                        cursor: "pointer",
                        textAlign: "left",
                        display: "block",
                      }}
                    >
                      <div style={{ color: selectedVoice === v.id ? TEXT : MUTED, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                      <div style={{ color: MUTED, fontSize: 12, marginTop: 2, lineHeight: 1.4 }}>{v.summary}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Panel — Detail */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
                  <div style={{ marginBottom: 6 }}>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 700 }}>
                      {voice.role}
                    </span>
                  </div>
                  <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 24, margin: "12px 0 4px" }}>{voice.name}</h2>
                  <div style={{ color: MUTED, fontSize: 14, marginBottom: 20, fontStyle: "italic" }}>{voice.work}</div>
                  <div style={{ height: 1, background: BORDER, marginBottom: 20 }} />
                  <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, margin: "0 0 24px 0" }}>{voice.body}</p>
                  <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderLeft: `4px solid ${GREEN}`, borderRadius: 8, padding: "16px 18px" }}>
                    <p style={{ color: GREEN, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{voice.quote}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Churches Taking Action */}
        {activeTab === "churches" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 28, lineHeight: 1.7 }}>
              Organizations and movements where Christians are turning theological conviction into creation care practice — in conservation, advocacy, education, and community.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 16 }}>
              {CHURCHES.map((org, i) => (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
                    <div>
                      <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 17, margin: "0 0 4px 0" }}>{org.name}</h3>
                      <div style={{ color: MUTED, fontSize: 13 }}>{org.tagline}</div>
                    </div>
                    <span style={{
                      background: `${org.tagColor}18`,
                      color: org.tagColor,
                      padding: "3px 10px",
                      borderRadius: 8,
                      fontSize: 11,
                      fontWeight: 700,
                      flexShrink: 0,
                      whiteSpace: "nowrap",
                    }}>
                      {org.tag}
                    </span>
                  </div>
                  <div style={{ height: 1, background: BORDER }} />
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{org.desc}</p>
                  <div style={{ marginTop: "auto" }}>
                    <span style={{ color: GREEN, fontSize: 13, fontWeight: 700 }}>{org.url}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div style={{ marginTop: 36, background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 28, textAlign: "center" }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 10 }}>Where Do You Start?</h3>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, maxWidth: 560, margin: "0 auto 16px" }}>
                You don't need to start a movement — you need to start somewhere. Pick one action from Tab 2, read one book from Tab 3, and connect with one organization above. Faithful stewardship is built one small act at a time, sustained by a community that believes the earth belongs to God.
              </p>
              <p style={{ color: MUTED, fontSize: 14, fontStyle: "italic", margin: 0 }}>
                "The earth is the LORD's, and everything in it." — Psalm 24:1
              </p>
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on creation care, stewardship, and the theology of the environment.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "wvsqrFizQ7k", title: "John Stott London Lecture 2013: Creation Care", channel: "Langham Partnership", description: "A lecture on creation care connected to John Stott's foundational theological work on Christian stewardship of the earth." },
                  { videoId: "tec5WWgA0mk", title: "Creation Care and Why Environmental Stewardship is a Biblical Principle", channel: "YouTube", description: "Exploring the biblical foundations for why Christians are called to care for creation as faithful stewards of what belongs to God." },
                  { videoId: "wGthaQWzC0M", title: "What Does the Bible Say About Creation Care?", channel: "YouTube", description: "A recent message examining what Scripture actually teaches about Christian environmental stewardship from Genesis to Revelation." },
                  { videoId: "vrSzEdLjE_w", title: "Why We Should Care About Stewardship of God's Creation", channel: "YouTube", description: "A theological exploration of why creation care is not a political issue but a matter of faithful obedience to the Creator." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
