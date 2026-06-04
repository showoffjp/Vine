"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Body is Good", verse: "Genesis 1:31", body: "God created the human body and called it very good (Genesis 1:31). The body is not a prison for the soul, not a mistake, not a lower reality to be transcended — it is a good gift from a good Creator. The Incarnation confirms this: God became flesh (John 1:14). The resurrection confirms it again: the future holds embodied existence, not escape from the body. The body is not the problem; sin, shame, and comparison are." },
  { title: "Made in the Image of God", verse: "Genesis 1:27", body: "Every human body — regardless of size, ability, skin color, or appearance — is made in the image of God. The imago Dei is not located in a particular physique; it is the mark of every human person. A theology of body image begins here: your body is not primarily an object to be evaluated but a person to be loved — a person who bears God's image." },
  { title: "The Temple of the Holy Spirit", verse: "1 Corinthians 6:19-20", body: "'Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies' (1 Corinthians 6:19-20). The body is where God's Spirit dwells. Treating the body with contempt — through disordered eating, self-harm, shame, or neglect — is at odds with the sacredness of the body as a divine dwelling place." },
  { title: "Fearfully and Wonderfully Made", verse: "Psalm 139:14", body: "'I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well' (Psalm 139:14). David does not say this after viewing himself in a culture that matches his body type. He says it in the context of meditating on God's intimate knowledge and care in forming him. Body satisfaction grounded in God's craftsmanship is independent of cultural standards." },
  { title: "The Renewal of the Mind", verse: "Romans 12:2", body: "Body image is primarily a mind issue. 'Be transformed by the renewing of your mind' (Romans 12:2). The patterns of thought about the body — comparison, shame, disgust, obsession — are formed by the world and must be renewed by the Spirit. This is not positive thinking but a genuine reorientation of perception toward what God declares true about the body." },
];

type Tab = "theology" | "voices" | "struggles" | "practices" | "videos";

const VOICES_BODY = [
  {
    id: "pearcey",
    name: "Nancy Pearcey",
    era: "1952-present",
    context: "Author; Love Thy Body; Houston Baptist University",
    bio: "Pearcey's 'Love Thy Body' (2018) diagnosed the crisis of body image as rooted in a secular philosophy that separates the person from the body — where the 'real self' is the autonomous will and the body is merely raw material for self-expression. Against this, she argues for a Christian anthropology that identifies the person with the body: you are not a self who has a body; you are an embodied self. This reintegration of person and body has direct implications for gender, sexuality, and body image: the body is not an obstacle to authentic selfhood but the very medium of it.",
    quote: "The body is not a machine for the self to use. It is the self. To reject or reshape the body according to the sovereign will is to reject and reshape yourself — and there is a Creator whose image you bear in that body.",
    contribution: "Pearcey gave the evangelical body-image conversation a philosophical foundation. She traced the self/body split to Cartesian dualism and showed how this secular philosophy — not Christian theology — produces both the cosmetic surgery culture and the gender ideology movement. Her analysis equipped Christians to engage body-image questions not just with Bible verses but with an account of why the secular alternatives are incoherent.",
  },
  {
    id: "west",
    name: "Christopher West",
    era: "1969-present",
    context: "Theologian of the Body Institute; popularizer of John Paul II",
    bio: "West popularized Pope John Paul II's 'Theology of the Body' — a dense series of 129 Wednesday audiences (1979-1984) in which the pope developed a comprehensive theology of human embodiment, sexuality, and the body's meaning. John Paul II's central claim: the body is a theology, a visible sign of invisible realities. The male and female body, in their complementarity and their capacity for union, image the inner life of the Trinity. This means the body has intrinsic dignity, meaning, and purpose — it is not raw material but a revelation. West's accessible presentations made this framework available to lay audiences.",
    quote: "The body, and it alone, is capable of making visible what is invisible — the spiritual and the divine. It was created to transfer into the visible reality of the world the mystery hidden since time immemorial in God.",
    contribution: "West introduced Catholic sacramental body theology to a broad Protestant audience. His presentations of the body as a 'sign' of divine realities gave Christians a positive theology of embodiment — not just 'the body is not evil' but 'the body is a revelation.' This framework provided a way to honor the body that went beyond mere damage control (resisting shame) to genuine celebration.",
  },
  {
    id: "lewis_cs",
    name: "C.S. Lewis",
    era: "1898-1963",
    context: "Apologist; The Screwtape Letters; Miracles",
    bio: "Lewis's treatment of the body is scattered across multiple works, but his consistent position was a robust rejection of the dualism that treats the body as a lower or inferior reality. In 'Miracles,' he argued that the Christian doctrine of resurrection — a resurrected, glorified physical body — represents a more body-affirming view than either Greek dualism (escape from the body) or secular materialism (the body is all there is). The Screwtape Letters shows the senior demon advising his subordinate to prevent humans from enjoying the body properly — because enjoyment of created goods can become a path to the Creator. For Lewis, the body is a gift to be received with gratitude.",
    quote: "There is no good trying to be more spiritual than God. God never meant man to be a purely spiritual creature. That is why He uses material things like bread and wine to put new life into us. We may think this rather crude and unspiritual. God does not.",
    contribution: "Lewis normalized a fully embodied spirituality for a wide Protestant audience unfamiliar with sacramental theology. His argument that physical pleasure — food, rest, beauty — experienced with gratitude leads toward rather than away from God gave Christians permission to enjoy embodied life without guilt. His insistence on the resurrection as physically real prevented any retreat into spiritualized Christianity that treats the body as temporary or unimportant.",
  },
  {
    id: "warren",
    name: "Tish Harrison Warren",
    era: "1980-present",
    context: "Anglican priest; Liturgy of the Ordinary (2016)",
    bio: "Warren's 'Liturgy of the Ordinary' traces the spiritual significance of the most ordinary embodied acts: waking up, brushing teeth, eating breakfast, getting stuck in traffic. Her argument is that the body is the primary location of spiritual formation — not the abstract mind or the disembodied soul. The hours of the day that are most bodily (morning routines, meals, physical work) are where character is actually formed. She draws on Anglican liturgical theology to argue that embodied repetition — not just mental assent — is how human beings become what they believe.",
    quote: "Holiness is not found in escaping the body and its limitations. It is found in the ordinary, embodied moments of the day — in how we eat, rest, work, and move through our hours.",
    contribution: "Warren reconnected body image to liturgical formation. She showed that the problem of alienation from the body is not solved by better self-esteem or theological information alone, but by practices that inhabit the body differently. Her liturgical approach gave people a concrete alternative to shame-based or cosmetic-surgery approaches to the body: attend to the body with care and gratitude in the ordinary rhythms of daily life.",
  },
  {
    id: "coakley",
    name: "Sarah Coakley",
    era: "1951-present",
    context: "Anglican theologian; Harvard, Cambridge; God, Sexuality and the Self",
    bio: "Coakley is the most rigorous academic theologian working on the body, gender, and desire in contemporary theology. Her project, 'On Desiring God,' argues that desire — including bodily desire — is not first of all a problem to be controlled but a clue to the structure of the soul's orientation toward God. Against both puritanical suspicion of the body and secular celebration of unordered desire, she proposes a 'theologie totale' in which ascetic practice (fasting, silence, celibacy in appropriate contexts) trains desire toward its ultimate object. The body's desires are not the enemy of the spiritual life; they are its raw material.",
    quote: "Desire is not the enemy of the spiritual life. It is its very medium. The question is not whether to desire, but what and how — and whether the body's longings are being patiently oriented toward their deepest Source.",
    contribution: "Coakley gave the academic theology of embodiment a depth and rigor that popular treatments lack. Her integration of ascetic practice, contemplative prayer, and systematic theology provided a framework in which the body's desires — including problematic ones — are addressed not by suppression but by reorientation. Her work has influenced a generation of younger theologians to think more carefully about embodiment, gender, and desire.",
  },
];

const STRUGGLES = [
  { struggle: "Eating Disorders", desc: "Anorexia, bulimia, binge eating, and orthorexia are serious mental health conditions with physical consequences. They are often rooted in control, shame, trauma, or cultural pressure.", response: "Professional treatment is necessary — eating disorders have the highest mortality rate of any mental health condition. Spiritual care supplements but does not replace professional support. The church's role is acceptance without enabling, presence without judgment, and prayer alongside treatment." },
  { struggle: "Comparison and Social Media", desc: "Constant exposure to curated, filtered, and professionally lit bodies creates an impossible standard against which real bodies are constantly compared and found lacking.", response: "Audit your social media. Unfollow accounts that produce shame. Follow accounts that represent body diversity. Limit time on platforms that trigger comparison. Name the comparison when it happens: 'I am comparing myself to an image designed to make me feel inadequate.' This naming reduces the comparison's power." },
  { struggle: "Shame About Disability or Illness", desc: "Bodies that don't function as expected — through chronic illness, disability, or pain — can become sources of deep shame, grief, and identity confusion.", response: "Christian theology affirms the dignity of disabled bodies. Paul's thorn was not removed; God's grace was sufficient in weakness. The new creation includes the resurrection of bodies that have suffered — not the elimination of the history of the body but its glorification. The body's limitations are not a divine judgment on the person." },
  { struggle: "Aging Bodies", desc: "A culture that worships youth produces shame in those whose bodies visibly change with time. The marks of age — wrinkles, gray hair, weight changes — are treated as failures rather than as the natural progress of a human life.", response: "'Gray hair is a crown of splendor; it is attained in the way of righteousness' (Proverbs 16:31). The body's aging is not a defeat but the natural completion of its course. Christian formation should produce people who age gracefully — without either denial or despair." },
  { struggle: "Post-Pregnancy Bodies", desc: "Pregnancy and birth permanently change the body — and cultural pressure to 'bounce back' immediately creates shame and grief about a body that did something extraordinary.", response: "The body that carried a child has done something remarkable. The marks of pregnancy are not damage but evidence. Naming what the body has been through — including its losses — is necessary before receiving the body as it now is. Postpartum support for body image is a legitimate spiritual and pastoral need." },
];

const PRACTICES = [
  { title: "Practice Gratitude for Function", desc: "Rather than evaluating the body aesthetically, practice gratitude for what it does: breathes, walks, digests, heals, senses. The body as instrument of life, relationship, and service is a different frame than the body as visual object to be assessed.", icon: "🙏" },
  { title: "Clothe Yourself in Who You Are", desc: "Each morning, consciously remind yourself of your identity: made in God's image, indwelt by his Spirit, loved unconditionally. Dress and prepare your body for the day from this identity, not from the anxiety of how you will be perceived.", icon: "👗" },
  { title: "Limit Mirrors and Scales", desc: "Not eliminating them but reducing obsessive use. The person who checks their appearance or weight multiple times per day is feeding an anxiety that the frequency does not resolve. Reducing checking reduces the power of appearance over mood and identity.", icon: "🪞" },
  { title: "Feed Your Body Well", desc: "Not as a weight-management strategy but as stewardship of a temple. Eat foods that nourish, in amounts that sustain, with pleasure and gratitude. Reject both restriction as punishment and indulgence as comfort. Eat like a person who believes their body matters.", icon: "🥗" },
  { title: "Move with Joy", desc: "Exercise motivated by punishment or appearance is different from movement motivated by joy, health, and gratitude. Find movement you enjoy — walking, dancing, swimming — and practice it as care for a gift, not penance for a body that isn't good enough.", icon: "🏃" },
  { title: "Pray in and With Your Body", desc: "Incorporate physical postures into prayer: kneeling, bowing, raising hands, prostration. Using the body in prayer reconnects the spiritual and the physical and resists the dualism that treats the body as irrelevant to spiritual life.", icon: "🕊️" },
];

export default function BodyImagePage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_body-image_tab", "theology");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_body-image_voice", "pearcey");
  const voiceItem = VOICES_BODY.find(v => v.id === selectedVoice)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌿</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Body Image & Faith</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The body is a good gift from a good Creator — the place where God's Spirit dwells, made in the divine image, destined for resurrection. A Christian theology of the body changes how we see ourselves.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "voices" as const, label: "Voices", icon: "💬" },
            { id: "struggles" as const, label: "Common Struggles", icon: "⚠️" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {VOICES_BODY.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 13 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{v.era}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{v.context}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: TEXT, fontWeight: 900, fontSize: 20, marginBottom: 4 }}>{voiceItem.name}</div>
                  <div style={{ color: MUTED, fontSize: 13 }}>{voiceItem.era} &middot; {voiceItem.context}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{voiceItem.bio}</p>
                <div style={{ background: BG, border: `1px solid ${PURPLE}40`, borderRadius: 10, padding: 20, marginBottom: 20 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 20 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "struggles" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Body image struggles are common and serious. These are the most frequent challenges and how faith speaks to each of them.
              </p>
            </div>
            {STRUGGLES.map((s, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button type="button" onClick={() => setExpanded(expanded === s.struggle ? null : s.struggle)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === s.struggle ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{s.struggle}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === s.struggle ? "−" : "+"}</span>
                </button>
                {expanded === s.struggle && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{s.desc}</p>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{s.response}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                A Christian body image is not achieved by willpower but formed by practices — repeated ways of relating to the body that over time reshape perception and feeling.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Teachings on body image, self-worth, and a Christian theology of the body — grounding identity in Christ rather than appearance.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "uz_z89dNSqc", title: "A Biblical Perspective on Body Image with Heather Creekmore", channel: "Revive Our Hearts / Grounded", description: "Heather Creekmore examines what the Bible actually says about body image and how comparing ourselves to cultural standards steals joy and distorts identity." },
                  { videoId: "XaHYTtVcskE", title: "How Should Christians Think About Body Image?", channel: "Christian Teaching", description: "A biblical examination of how Christians should understand and relate to their bodies — grounding self-worth in being made in God's image." },
                  { videoId: "hVfwKpoxP2U", title: "Body Image & Relationships: How God Redeems Our Imperfections", channel: "Sadie Robertson Huff & Natalie Grant", description: "Sadie Robertson Huff and Natalie Grant discuss how God redeems our struggles with body image and self-worth within the context of relationships." },
                  { videoId: "_DNZctFekHI", title: "What Does the Bible Teach Us About Body Image?", channel: "Biblical Teaching", description: "An exploration of key biblical passages that speak to how God views the human body and what that means for how we view ourselves." },
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
      <Footer />
    </div>
  );
}
