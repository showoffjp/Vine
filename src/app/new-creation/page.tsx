"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#c9a227";

type Tab = "already" | "newearth" | "cosmic" | "bodies" | "implications" | "videos";

const ALREADY_NOT_YET = [
  { title: "Already: The New Creation Has Begun", ref: "2 Corinthians 5:17", color: GREEN, body: "Paul writes: 'If anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.' The new creation is not only a future hope — it has already begun in the person of every believer. When you are united to Christ by faith, you are incorporated into the new humanity that God is creating. The resurrection of Jesus is the firstfruits — the first particle of new creation appearing within the old order." },
  { title: "Not Yet: The Full Renewal Awaits", ref: "Romans 8:18-23", color: PURPLE, body: "Paul also writes: 'I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us.' The new creation is not complete. Creation itself still 'groans' under the curse (Romans 8:22). Believers still suffer, age, and die. The full flowering of the new creation awaits the return of Christ, the resurrection of the dead, and the renewal of all things. We live between the firstfruits and the full harvest." },
  { title: "The Overlap of the Ages", ref: "1 Corinthians 10:11", color: GOLD, body: "New Testament eschatology describes two overlapping ages: 'this age' (the present fallen order) and 'the age to come' (the kingdom of God). The resurrection of Jesus inaugurated the age to come within the midst of this age — the new creation has broken in, but this age has not yet ended. Christians live in the overlap: possessing the first fruits of the new creation (the Spirit, adoption, justification) while still inhabiting the old creation with all its groaning." },
  { title: "The Spirit as Down Payment", ref: "Ephesians 1:13-14", color: "#3B82F6", body: "Paul calls the Holy Spirit the 'down payment' (Greek: arrabon — earnest money) of the coming inheritance. The Spirit's indwelling presence is the first installment of the new creation life that will be ours in full at the resurrection. His presence now is the guarantee of glory then. Experiencing the Spirit's work — conviction, peace, joy, love — is a genuine taste of new creation life breaking through into the present." },
];

const NEW_EARTH_DETAILS = [
  { title: "The Final Destination", ref: "Revelation 21:1-5", icon: "🌍", body: "John's vision opens with 'a new heaven and a new earth' — and crucially, the Holy City (the New Jerusalem) 'coming down out of heaven from God.' The direction matters: heaven comes to earth. The final state is not us escaping into a distant spiritual realm but God bringing his dwelling to a redeemed creation. 'God's dwelling place is now among the people. He will dwell with them' (21:3). Emmanuel — God with us — is the permanent destination." },
  { title: "Kainos Not Neos", ref: "Revelation 21:1", icon: "🔄", body: "The Greek word translated 'new' is kainos (renewed, qualitatively new) not neos (newly created from nothing). This distinction is crucial: the new creation is the transformation and renewal of this creation, not its replacement. God does not discard his first creation as a failed project; he redeems and glorifies it. As the resurrection body is the same body transformed, the new earth is this earth renewed and glorified — liberated from the curse." },
  { title: "No More Curse", ref: "Revelation 22:3", icon: "🌿", body: "'No longer will there be any curse' (Revelation 22:3). The curse of Genesis 3 — toil, pain, futility, death, and broken relationships — is lifted. The new creation is the full reversal of the fall. What sin corrupted, grace restores — and more than restores, because the new creation surpasses the original. N.T. Wright: the new creation is not Eden rebuilt but Eden fulfilled, Eden grown to maturity, the original garden purpose now achieved." },
  { title: "Cultural Continuity", ref: "Revelation 21:24-26", icon: "🏙️", body: "One of the most striking aspects of John's vision: 'The kings of the earth will bring their splendor into it [the New Jerusalem]… the glory and honor of the nations will be brought into it' (21:24-26). Human culture — art, music, architecture, language, craft — is not destroyed but gathered and glorified. The new creation is not the annihilation of human history but its redemption and perfection. Every good thing that has ever been made participates in it." },
  { title: "The Tree of Life", ref: "Revelation 22:1-5", icon: "🌳", body: "The garden imagery from Genesis returns: the river of the water of life, the tree of life bearing twelve kinds of fruit. Eden's unfulfilled potential — the tree of life that Adam and Eve were barred from after the fall — is now permanently accessible. 'Blessed are those who wash their robes, so that they may have the right to the tree of life' (22:14). What was lost in the fall is given back, freely and permanently, in the new creation." },
];

const COSMIC_RENEWAL = [
  { ref: "Romans 8:19-22", title: "Creation's Groaning", body: "Paul's cosmic vision: 'For the creation waits with eager longing for the revealing of the sons of God. For the creation was subjected to futility, not willingly, but because of him who subjected it, in hope that the creation itself will be set free from its bondage to corruption and obtain the freedom of the glory of the children of God. For we know that the whole creation has been groaning together in the pains of childbirth until now.' Creation is not an incidental backdrop to human salvation — it is caught up in the same story, awaiting the same liberation." },
  { ref: "Colossians 1:19-20", title: "Cosmic Reconciliation", body: "'For in him all the fullness of God was pleased to dwell, and through him to reconcile to himself all things, whether on earth or in heaven, making peace by the blood of his cross.' Paul's scope is cosmic: the reconciliation achieved at the cross extends to 'all things' — the whole created order. Sin's effects were cosmic (Romans 5:12); redemption's scope is equally cosmic. The new creation is the realization of this cosmic reconciliation." },
  { ref: "Isaiah 65:17-25", title: "The OT Vision", body: "God's ancient promise through Isaiah: 'Behold, I create new heavens and a new earth, and the former things shall not be remembered or come into mind… I will rejoice in Jerusalem and be glad in my people… The wolf and the lamb shall graze together; the lion shall eat straw like the ox.' The prophetic vision is concrete: genuine physical renewal, the end of predation and violence, human flourishing in rebuilt cities — not a vague spiritual bliss but a transformed physical reality." },
  { ref: "Acts 3:21", title: "The Restoration of All Things", body: "Peter speaks of 'the time for restoring all the things about which God spoke by the mouth of his holy prophets long ago.' The Greek apokatastasis panton (restoration of all things) describes the eschatological goal of redemptive history: the undoing of everything sin broke and the perfecting of everything God intended. This is not universalism (the salvation of all people) but cosmic renewal — the redemption of creation itself." },
];

const RESURRECTION_BODIES = [
  { aspect: "Imperishable", ref: "1 Cor 15:42", icon: "💎", color: PURPLE, body: "The resurrection body will not decay, age, or die. 'What is sown is perishable; what is raised is imperishable.' The process of cellular death and deterioration that marks mortal life will be reversed. The resurrection body will not need medical care, will not be subject to entropy, and will not lose vigor over time." },
  { aspect: "Glorious", ref: "1 Cor 15:43", icon: "✨", color: GOLD, body: "'It is sown in dishonor; it is raised in glory.' The resurrection body will share in the glory of Christ's risen body. Paul writes elsewhere: 'Our lowly bodies' will be 'transformed to be like his glorious body' (Philippians 3:21). Glory here is not merely appearance but the fullness of what humanity was created to be — radiating the image of God without distortion." },
  { aspect: "Powerful", ref: "1 Cor 15:43", icon: "⚡", color: GREEN, body: "'It is sown in weakness; it is raised in power.' The exhaustion, limitation, and incapacity that characterize mortal life will give way to an energized capacity that does not flag. The resurrection body will be able to fully inhabit and engage with the new creation — to work, create, explore, and love without the constraints of our present broken embodiment." },
  { aspect: "Spiritual", ref: "1 Cor 15:44", icon: "🌊", color: "#3B82F6", body: "'It is sown a natural body; it is raised a spiritual body.' 'Spiritual' (pneumatikos) here does not mean non-physical — it means fully animated by and responsive to the Holy Spirit rather than to the fallen flesh. The resurrection body will be fully physical but freed from the orientation toward sin and self that characterizes the mortal body. It will delight in obedience rather than straining toward it." },
  { aspect: "Continuous with This Body", ref: "1 Cor 15:53", icon: "🔗", color: "#EF4444", body: "'For this perishable body must put on the imperishable, and this mortal body must put on immortality.' The resurrection body is this body transformed — not a different body replacing this one. Personal identity, embodied in this specific body with its history, its wounds, its memories, will persist through the resurrection. We will be ourselves — glorified, healed, and completed, but ourselves." },
];

const IMPLICATIONS = [
  { title: "Creation Care Has Eschatological Grounding", icon: "🌱", body: "If this creation will be redeemed and renewed rather than discarded, then caring for it now is not merely pragmatic but theological. The new creation will include this creation — transformed but continuous. Therefore how we treat the earth, its creatures, and its resources matters eschatologically. We are stewards of what God intends to renew. Environmental care is a form of eschatological faithfulness." },
  { title: "Human Culture Matters Eternally", icon: "🎨", body: "If 'the glory and honor of the nations' will be brought into the new creation (Revelation 21:26), then the things humans make with their hands and minds have permanent significance. Art, music, scholarship, architecture, technology — all human cultural work, when done for God's glory, participates in the project of new creation. N.T. Wright: 'You are not building the kingdom of God; but your work in the Lord is not in vain.'" },
  { title: "Suffering Is Not the Last Word", icon: "💪", body: "Paul writes: 'I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us' (Romans 8:18). The new creation is the context in which present suffering is relativized — not minimized, but set in a frame that changes its meaning. The groaning of creation (Romans 8:22) and the groaning of believers (8:23) are the birth pangs of a new world, not the death throes of an old one." },
  { title: "Mission Is Participation in New Creation", icon: "🌍", body: "Every act of justice, every healing of brokenness, every redeemed relationship, every soul converted — these are not merely humanitarian improvements but outposts of the coming new creation appearing within the old order. The church's mission is not to save people out of the world but to be signs and instruments of the world's renewal. We announce and embody the new creation that is coming." },
  { title: "The Body Matters Now and Forever", icon: "🏃", body: "Because the new creation includes the resurrection of the body — not its abandonment — embodied human life matters. Physical health, rest, sexuality, food, embodied community, physical acts of service — none of these are less spiritual for being physical. The incarnation, the resurrection, and the new creation all signal that God loves bodies. Christian spirituality is not escape from the body but the redemption and sanctification of it." },
];

const VIDEOS = [
  { videoId: "RBDwg-jWsyY", title: "Surprised by Hope: N.T. Wright on New Creation", channel: "The Gospel Coalition", description: "N.T. Wright explains his landmark thesis — why the Christian hope is for bodily resurrection and the renewal of all creation, not escape to a spiritual realm." },
  { videoId: "JY0lMqZ24y0", title: "The New Creation and Our Future", channel: "Desiring God", description: "John Piper on the biblical vision of the new creation — what it means for how Christians live now and what we have to look forward to." },
  { videoId: "7bQCKFe_Bro", title: "New Heavens and New Earth", channel: "Ligonier Ministries", description: "An examination of the biblical passages on the new heavens and new earth — what they teach and what they correct about popular conceptions of heaven." },
  { videoId: "s9-dJTgGMvM", title: "Romans 8 and Cosmic Renewal", channel: "The Gospel Coalition", description: "A deep dive into Romans 8:18-25 — Paul's vision of creation groaning for liberation and the coming glory that will be revealed." },
  { videoId: "qU4WcnlHhEQ", title: "Already But Not Yet: The Kingdom Now", channel: "The Gospel Coalition", description: "Explaining the inaugurated eschatology of the NT — how the kingdom and new creation have already begun in Christ and will be consummated at his return." },
];

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "already", label: "Already / Not Yet", icon: "⏳" },
  { id: "newearth", label: "The New Earth", icon: "🌍" },
  { id: "cosmic", label: "Cosmic Renewal", icon: "✨" },
  { id: "bodies", label: "Resurrection Bodies", icon: "💪" },
  { id: "implications", label: "Implications", icon: "💡" },
  { id: "videos", label: "Videos", icon: "🎬" },
];

export default function NewCreationPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_new-creation_tab", "already");
  const [expandedEarth, setExpandedEarth] = useState<number | null>(null);
  const [expandedCosmic, setExpandedCosmic] = useState<number | null>(null);
  const [expandedBody, setExpandedBody] = useState<number | null>(null);
  const [expandedImpl, setExpandedImpl] = useState<number | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: `var(--font-jost, system-ui, sans-serif)` }}>
      <Navbar />
      <main id="main-content">

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #060f06 0%, #0a140a 40%, #0c0a18 100%)`, paddingTop: 100, paddingBottom: 60, textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>🌅</div>
        <div style={{ display: "inline-block", background: `${GOLD}18`, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 16px", fontSize: 12, fontWeight: 700, color: GOLD, marginBottom: 16, letterSpacing: 1 }}>
          ESCHATOLOGY
        </div>
        <h1 style={{ fontFamily: `var(--font-cormorant, Georgia, serif)`, fontSize: "clamp(34px, 6vw, 58px)", fontWeight: 700, margin: "0 auto 16px", maxWidth: 700, lineHeight: 1.1 }}>
          The New Creation
        </h1>
        <p style={{ color: MUTED, fontSize: 17, maxWidth: 600, margin: "0 auto 24px", lineHeight: 1.75 }}>
          God&apos;s redemptive purpose is not to rescue souls out of the world, but to redeem the world itself — a new heavens and new earth where righteousness dwells, where the groaning of creation gives way to glory.
        </p>
        <div style={{ display: "inline-block", background: `${GREEN}18`, border: `1px solid ${GREEN}40`, borderRadius: 20, padding: "6px 20px", fontSize: 13, color: GREEN }}>
          &ldquo;Behold, I am making all things new.&rdquo; — Revelation 21:5
        </div>
      </div>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Tab nav */}
        <div style={{ display: "flex", gap: 4, margin: "32px 0", background: CARD, borderRadius: 14, padding: 5, border: `1px solid ${BORDER}`, overflowX: "auto" }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, minWidth: 80, padding: "10px 6px", borderRadius: 10, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", transition: "all 0.2s ease", whiteSpace: "nowrap" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* ALREADY / NOT YET */}
        {activeTab === "already" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 12 }}>Inaugurated Eschatology</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 12 }}>
                The NT describes the kingdom of God and the new creation as simultaneously &ldquo;already&rdquo; and &ldquo;not yet&rdquo; — a structure theologians call &ldquo;inaugurated eschatology.&rdquo; The decisive moment in redemptive history has occurred (the resurrection of Jesus), but the final consummation has not yet arrived. We live in the middle — between the first Easter and the final renewal.
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                This framework resolves apparent tensions in the NT: John can say both &ldquo;we have eternal life&rdquo; (already, 1 John 5:12) and &ldquo;we shall be like him&rdquo; (not yet, 1 John 3:2). Paul says we &ldquo;have been saved&rdquo; (past, Ephesians 2:8) and will be saved at the day of Christ (future, Romans 5:9-10). Both are true because the new creation has begun but is not complete.
              </p>
            </div>
            {ALREADY_NOT_YET.map((a, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${a.color}30`, borderRadius: 14, padding: 24, marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <h3 style={{ color: a.color, fontWeight: 800, fontSize: 18, margin: 0 }}>{a.title}</h3>
                  <span style={{ background: `${a.color}18`, color: a.color, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", marginLeft: 12 }}>{a.ref}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{a.body}</p>
              </div>
            ))}
            <div style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}25`, borderRadius: 14, padding: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.9, margin: 0, fontStyle: "italic" }}>
                &ldquo;Easter is the beginning of the new creation. Jesus&apos; resurrection is not the resurrection of a single individual who has escaped from history; it is the beginning of the new world. It is the first bit of the new creation that God has promised — the seed from which the harvest will grow. And that is why we live in the tension: the harvest has begun, but it is not complete.&rdquo;
              </p>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginTop: 12 }}>— N.T. Wright, <em>Surprised by Hope</em></div>
            </div>
          </div>
        )}

        {/* THE NEW EARTH */}
        {activeTab === "newearth" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 12 }}>God&apos;s Eternal Home: The Renewed Earth</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                The biblical vision of the final state is not souls floating in a spiritual realm above the clouds. It is God himself coming to dwell permanently on a renewed, glorified earth — a physical, embodied, cultural, relational existence in the immediate presence of God. The Bible begins with God walking in a garden with humanity; it ends with God&apos;s city descending to earth for an eternal dwelling.
              </p>
            </div>
            {NEW_EARTH_DETAILS.map((n, i) => (
              <div role="button" tabIndex={0} key={i} onClick={() => setExpandedEarth(expandedEarth === i ? null : i)}
                style={{ background: CARD, border: `1px solid ${expandedEarth === i ? `${GREEN}50` : BORDER}`, borderRadius: 14, padding: 22, marginBottom: 12, cursor: "pointer", transition: "all 0.2s ease" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 24 }}>{n.icon}</span>
                    <div>
                      <h3 style={{ color: expandedEarth === i ? GREEN : TEXT, fontWeight: 800, fontSize: 17, margin: 0, transition: "all 0.2s ease" }}>{n.title}</h3>
                      <span style={{ background: `${PURPLE}18`, color: PURPLE, padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 600 }}>{n.ref}</span>
                    </div>
                  </div>
                  <span style={{ color: MUTED }}>{expandedEarth === i ? "▲" : "▼"}</span>
                </div>
                {expandedEarth === i && (
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginTop: 14, marginBottom: 0 }}>{n.body}</p>
                )}
              </div>
            ))}
            <blockquote style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 24, marginTop: 16, margin: "16px 0 0" }}>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
                &ldquo;God is not making a different world. He is making this world new. The new creation will be the fulfillment of what this creation was always meant to be — the garden grown to a city, human culture redeemed and perfected, the presence of God filling everything as the waters fill the sea.&rdquo; — N.T. Wright
              </p>
            </blockquote>
          </div>
        )}

        {/* COSMIC RENEWAL */}
        {activeTab === "cosmic" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 12 }}>The Redemption of All Things</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                The scope of salvation in the NT is not limited to individual souls — it encompasses the whole created order. Sin&apos;s effects were cosmic; grace&apos;s reach must be equally cosmic. Paul&apos;s vision in Romans 8, Colossians 1, and Ephesians 1 is of a redemption that restores not just persons but the entire creation to its proper relationship with God. Click each text to explore it.
              </p>
            </div>
            {COSMIC_RENEWAL.map((c, i) => (
              <div role="button" tabIndex={0} key={i} onClick={() => setExpandedCosmic(expandedCosmic === i ? null : i)}
                style={{ background: CARD, border: `1px solid ${expandedCosmic === i ? `${GREEN}50` : BORDER}`, borderRadius: 14, padding: 22, marginBottom: 12, cursor: "pointer", transition: "all 0.2s ease" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <h3 style={{ color: expandedCosmic === i ? GREEN : TEXT, fontWeight: 800, fontSize: 17, margin: "0 0 4px", transition: "all 0.2s ease" }}>{c.title}</h3>
                    <span style={{ background: `${PURPLE}18`, color: PURPLE, padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 600 }}>{c.ref}</span>
                  </div>
                  <span style={{ color: MUTED }}>{expandedCosmic === i ? "▲" : "▼"}</span>
                </div>
                {expandedCosmic === i && (
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginTop: 14, marginBottom: 0 }}>{c.body}</p>
                )}
              </div>
            ))}
            <div style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}25`, borderRadius: 14, padding: 24, marginTop: 16 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>N.T. Wright on Cosmic Redemption</h3>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
                &ldquo;The whole creation — not just human beings, but the birds and the beasts, the mountains and the seas — is groaning with eager longing for the day when God will set it free from its bondage to decay. This is not a minor or peripheral theme in Paul; it is the cosmic backdrop against which the gospel must be understood. We are not saving people out of the world; we are called to be instruments of its renewal.&rdquo; — N.T. Wright, <em>Surprised by Hope</em>
              </p>
            </div>
          </div>
        )}

        {/* RESURRECTION BODIES */}
        {activeTab === "bodies" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 12 }}>What Our Bodies Will Be Like</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}>
                Paul&apos;s most extensive treatment of the resurrection body is in 1 Corinthians 15. Using the metaphor of a seed and the plant that grows from it, he argues that the resurrection body is both continuous with (it grows from this body) and dramatically different from (it surpasses this body in every way) the mortal body we now inhabit.
              </p>
              <blockquote style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}25`, borderRadius: 10, padding: 16, margin: "0 0 14px", fontStyle: "italic", color: TEXT, fontSize: 14, lineHeight: 1.9 }}>
                &ldquo;So is it with the resurrection of the dead. What is sown is perishable; what is raised is imperishable. It is sown in dishonor; it is raised in glory. It is sown in weakness; it is raised in power. It is sown a natural body; it is raised a spiritual body.&rdquo; — 1 Corinthians 15:42-44
              </blockquote>
            </div>
            {RESURRECTION_BODIES.map((b, i) => (
              <div role="button" tabIndex={0} key={i} onClick={() => setExpandedBody(expandedBody === i ? null : i)}
                style={{ background: CARD, border: `1px solid ${expandedBody === i ? `${b.color}60` : BORDER}`, borderRadius: 12, padding: 20, marginBottom: 10, cursor: "pointer", transition: "all 0.2s ease" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 24 }}>{b.icon}</span>
                    <div>
                      <h3 style={{ color: expandedBody === i ? b.color : TEXT, fontWeight: 800, fontSize: 17, margin: 0, transition: "all 0.2s ease" }}>{b.aspect}</h3>
                      <span style={{ background: `${b.color}18`, color: b.color, padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 600 }}>{b.ref}</span>
                    </div>
                  </div>
                  <span style={{ color: MUTED }}>{expandedBody === i ? "▲" : "▼"}</span>
                </div>
                {expandedBody === i && (
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginTop: 14, marginBottom: 0 }}>{b.body}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* IMPLICATIONS */}
        {activeTab === "implications" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                The doctrine of the new creation is not merely speculative eschatology — it has immediate, concrete implications for how Christians live now. What we believe about the end shapes how we inhabit the present. N.T. Wright: &ldquo;The point of the resurrection is that the present bodily life is not valueless just because it will die... What you do in the present — by painting, preaching, singing, sewing, praying, teaching, building hospitals, digging wells, campaigning for justice — will last into God&apos;s future.&rdquo;
              </p>
            </div>
            {IMPLICATIONS.map((imp, i) => (
              <div role="button" tabIndex={0} key={i} onClick={() => setExpandedImpl(expandedImpl === i ? null : i)}
                style={{ background: CARD, border: `1px solid ${expandedImpl === i ? `${GREEN}50` : BORDER}`, borderRadius: 14, padding: 22, marginBottom: 12, cursor: "pointer", transition: "all 0.2s ease" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 24 }}>{imp.icon}</span>
                    <h3 style={{ color: expandedImpl === i ? GREEN : TEXT, fontWeight: 800, fontSize: 17, margin: 0, transition: "all 0.2s ease" }}>{imp.title}</h3>
                  </div>
                  <span style={{ color: MUTED }}>{expandedImpl === i ? "▲" : "▼"}</span>
                </div>
                {expandedImpl === i && (
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginTop: 14, marginBottom: 0 }}>{imp.body}</p>
                )}
              </div>
            ))}
            <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 24, marginTop: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.9, margin: 0, fontStyle: "italic" }}>
                &ldquo;Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain.&rdquo; — 1 Corinthians 15:58
              </p>
              <p style={{ color: MUTED, fontSize: 13, marginTop: 8, margin: "8px 0 0" }}>Paul closes his extended argument on the resurrection not with abstract theology but with a call to faithful action. The new creation transforms the present, not just the future.</p>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Lectures and sermons on the new creation, the new earth, and the biblical vision of God&apos;s ultimate purpose for his world.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                    src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                  <div style={{ padding: "16px 20px" }}>
                    <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                    <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{v.channel}</p>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
