"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";

const tabs = [
  { id: "theology", label: "Theology of Enslavement", color: PURPLE },
  { id: "recovery", label: "Celebrate Recovery", color: GOLD },
  { id: "steps", label: "12 Steps", color: TEAL },
  { id: "community", label: "Community & Accountability", color: GREEN },
  { id: "warfare", label: "Sobriety as Warfare", color: BLUE },
  { id: "videos", label: "Videos", color: MUTED },
];

export default function ChristianAddictionRecovery() {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState("theology");

  useEffect(() => { setLoaded(true); }, []);

  if (!loaded) return null;

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      {/* Hero */}
      <div
        style={{
          padding: "4rem 1.5rem 3rem",
          textAlign: "center",
          borderBottom: `1px solid ${BORDER}`,
          background: `linear-gradient(180deg, rgba(107,79,187,0.07) 0%, transparent 100%)`,
        }}
      >
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.18em", color: PURPLE, textTransform: "uppercase", marginBottom: "1rem" }}>
          Christian Addiction Recovery
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "1.2rem", lineHeight: 1.15 }}>
          Freedom from What Enslaves
        </h1>
        <p style={{ fontSize: "1.1rem", color: MUTED, maxWidth: 620, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
          Addiction is one of the clearest pictures of what Paul calls slavery to sin. The gospel
          speaks to it with both unflinching honesty and extraordinary hope.
        </p>
        <blockquote style={{ fontStyle: "italic", color: GOLD, fontSize: "1rem", maxWidth: 520, margin: "0 auto" }}>
          &ldquo;For freedom Christ has set us free; stand firm therefore, and do not submit again to a yoke
          of slavery.&rdquo;
          <span style={{ display: "block", marginTop: "0.4rem", color: MUTED, fontStyle: "normal", fontSize: "0.85rem" }}>Galatians 5:1</span>
        </blockquote>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", overflowX: "auto", gap: "0.25rem", padding: "1rem 1.5rem", borderBottom: `1px solid ${BORDER}`, scrollbarWidth: "none" }}>
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            style={{
              flexShrink: 0, padding: "0.5rem 1.1rem", borderRadius: 2,
              border: `1px solid ${active === t.id ? t.color : BORDER}`,
              background: active === t.id ? `${t.color}18` : "transparent",
              color: active === t.id ? t.color : MUTED,
              fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.04em", cursor: "pointer", transition: "all 0.18s",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>

        {active === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: PURPLE }}>
              The Theology of Enslavement
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              Paul&rsquo;s description of his own inner conflict in Romans 7 is one of the most psychologically
              accurate descriptions of addiction ever written — two thousand years before neuroscience.
            </p>
            <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 6, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 600, marginBottom: "0.75rem" }}>Romans 7:15-24 — The Addict&rsquo;s Cry</h3>
              <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.75, marginBottom: "0.75rem" }}>
                &ldquo;For I do not do what I want, but I do the very thing I hate... For I do not do the good
                I want, but the evil I do not want is what I keep on doing... Wretched man that I am! Who
                will deliver me from this body of death?&rdquo;
              </p>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}>
                Paul names the experience of compulsion — wanting to stop but being unable, doing what
                you hate, the gap between intention and action. This is not merely moral failure; Paul
                points to a power operating in him beyond his will. Scripture takes the reality of
                addiction-like enslavement seriously.
              </p>
            </div>
            {[
              { ref: "Romans 7:25", heading: "The Answer", body: "Paul&rsquo;s answer to his own cry is not a program or a technique: &ldquo;Thanks be to God through Jesus Christ our Lord!&rdquo; Freedom comes through the gospel — not as a quick fix but as the power and grace that makes sustained recovery possible. The 12-step community discovered that a higher power is not optional; it is essential." },
              { ref: "John 8:36", heading: "True Freedom", body: "&ldquo;So if the Son sets you free, you will be free indeed.&rdquo; Jesus&rsquo; promise of freedom is not merely behavioral modification or willpower. It is ontological — a change in what you are, not just what you do. This is why the gospel is genuinely good news for addicts: not &ldquo;try harder&rdquo; but &ldquo;be transformed.&rdquo;" },
              { ref: "Neuroscience", heading: "The Brain and Grace", body: "Addiction hijacks the brain&rsquo;s reward circuitry — changing what feels normal, what produces pleasure, what the body craves. This is not an excuse; it is an explanation. Grace does not bypass this reality; it works through it. Recovery involves rewiring — which is slow, hard, and possible. The Spirit works through time and process." },
            ].map((item) => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${PURPLE}`, borderRadius: 4, padding: "1.4rem", marginBottom: "1.2rem" }}>
                <p style={{ fontSize: "0.72rem", letterSpacing: "0.12em", color: PURPLE, marginBottom: "0.4rem" }}>{item.ref}</p>
                <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem" }}>{item.heading}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {active === "recovery" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: GOLD }}>
              Celebrate Recovery vs. AA
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              Both Celebrate Recovery (CR) and Alcoholics Anonymous have helped millions. They share
              important DNA — and differ in crucial ways.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
              {[
                {
                  label: "AA / 12-Step",
                  color: BLUE,
                  points: ["Higher power (generic)", "Peer-led, secular setting", "Founded 1935", "Widely available", "Proven track record", "No explicit gospel content"],
                },
                {
                  label: "Celebrate Recovery",
                  color: GOLD,
                  points: ["Jesus Christ explicitly named", "Church-based community", "Founded 1991 (Saddleback)", "8 Principles from Beatitudes", "Whole-life recovery scope", "Gospel-centered framework"],
                },
              ].map((col) => (
                <div key={col.label} style={{ background: CARD, border: `1px solid ${col.color}40`, borderRadius: 4, padding: "1.2rem" }}>
                  <h4 style={{ fontWeight: 600, color: col.color, marginBottom: "0.75rem", fontSize: "0.9rem" }}>{col.label}</h4>
                  {col.points.map((p) => (
                    <p key={p} style={{ fontSize: "0.85rem", color: MUTED, lineHeight: 1.6, marginBottom: "0.3rem" }}>· {p}</p>
                  ))}
                </div>
              ))}
            </div>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}>
              Many Christians benefit from both. AA&rsquo;s wider availability and proven effectiveness make
              it a valuable resource. CR&rsquo;s explicit gospel framework and church community add dimensions
              AA cannot. The goal is recovery — use every tool God provides.
            </p>
          </div>
        )}

        {active === "steps" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: TEAL }}>
              The 12 Steps Through a Christian Lens
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              The 12 Steps, rooted in Oxford Group Christianity, map surprisingly well onto Christian
              theology when interpreted through a gospel lens.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { step: "1", text: "Powerlessness — I cannot save myself. This is the gospel&rsquo;s starting point too." },
                { step: "2", text: "Higher Power — Restoring sanity. Christians name this Power: Jesus Christ." },
                { step: "3", text: "Decision — Turning will and life over to God. Echoes of Luke 9:23." },
                { step: "4-5", text: "Fearless moral inventory + confession — James 5:16 in practice." },
                { step: "6-7", text: "Ready for defects to be removed; humbly ask God. Sanctification." },
                { step: "8-9", text: "Making amends — The fruit of genuine repentance (Matthew 5:23-24)." },
                { step: "10", text: "Ongoing inventory — The Daily Examen; continuing repentance." },
                { step: "11", text: "Prayer and meditation — Seeking to know God&rsquo;s will. Contemplative prayer." },
                { step: "12", text: "Carrying the message — Discipleship and witness as natural overflow." },
              ].map((item) => (
                <div key={item.step} style={{ display: "flex", gap: "1rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 4, padding: "0.9rem 1.1rem", alignItems: "flex-start" }}>
                  <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", background: `${TEAL}25`, color: TEAL, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.78rem", fontWeight: 700 }}>{item.step}</span>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.65 }} dangerouslySetInnerHTML={{ __html: item.text }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {active === "community" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: GREEN }}>
              Community and Accountability
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              Addiction thrives in isolation. Recovery happens in community. This is not optional —
              it is structural.
            </p>
            {[
              { icon: "🤝", title: "Sponsorship and Mentorship", body: "The sponsor model in 12-step recovery maps onto the discipleship model of Scripture. Someone further along in recovery walks alongside someone earlier. They share their story, hold accountability, answer calls at 3am. This is the one-another ministry of the New Testament concretized in the hardest circumstance." },
              { icon: "✝", title: "The Church as Recovery Community", body: "The New Testament church was designed for exactly this — a community of honest, broken, grace-covered people practicing mutual accountability. &ldquo;Bear one another&rsquo;s burdens&rdquo; (Galatians 6:2) is not a metaphor. For someone in recovery, it means real people who know your struggle and show up." },
              { icon: "📞", title: "The Phone Call at Midnight", body: "Recovery literature is clear: isolation kills sobriety. The call you make when the craving hits at midnight is more important than any meeting you attend. Building a network of people who will answer that call is a spiritual discipline and a survival strategy." },
              { icon: "🔁", title: "Relapse Is Not the End", body: "The prodigal son came to himself and returned (Luke 15:17-18). Relapse is common in recovery — not inevitable, and not the end. The question after relapse is not &ldquo;did you fail?&rdquo; but &ldquo;will you return?&rdquo; The community that welcomes back without shame after a relapse is practicing the gospel." },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", gap: "1rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 4, padding: "1.4rem", marginBottom: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem", color: GREEN }} dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {active === "warfare" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: BLUE }}>
              Sobriety as Spiritual Warfare
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              Recovery is not merely a psychological or physiological project. It is a spiritual battle
              with spiritual weapons — and the victory is already won.
            </p>
            {[
              { ref: "1 Peter 5:8", heading: "A Roaring Lion", body: "&ldquo;Be sober-minded; be watchful. Your adversary the devil prowls around like a roaring lion, seeking someone to devour.&rdquo; The word for &ldquo;sober-minded&rdquo; here (nephalios) was used literally for sobriety from alcohol. Peter&rsquo;s metaphor of the lion is apt for addiction: the craving prowls, looking for weakness, for isolation, for the unguarded moment." },
              { ref: "2 Corinthians 10:4-5", heading: "Weapons That Are Not Fleshly", body: "&ldquo;The weapons of our warfare are not of the flesh but have divine power to destroy strongholds.&rdquo; Strongholds — entrenched patterns of thought and behavior — are exactly what addiction creates in the brain and soul. The weapons: prayer, Scripture, community, confession, the body and blood of Christ. These are not weak weapons; they are the only ones that reach the root." },
              { ref: "Romans 8:37", heading: "More Than Conquerors", body: "Paul&rsquo;s declaration is not conditional: &ldquo;in all these things we are more than conquerors through him who loved us.&rdquo; Recovery can feel like defeat — relapse, craving, the long grind of sobriety. The gospel answer is not denial of the struggle but the declaration that the struggle does not have the last word. Christ has overcome." },
            ].map((item) => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${BLUE}`, borderRadius: 4, padding: "1.4rem", marginBottom: "1.2rem" }}>
                <p style={{ fontSize: "0.72rem", letterSpacing: "0.12em", color: BLUE, marginBottom: "0.4rem" }}>{item.ref}</p>
                <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem" }}>{item.heading}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {active === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem" }}>Videos on Addiction Recovery</h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>Teaching and testimony on addiction, recovery, and God&rsquo;s redemptive work in the hardest places.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <VideoEmbed videoId="ao8L-0nSYzg" title="Addiction and the Gospel — Tim Keller" />
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.75rem" }}>Tim Keller on why the gospel addresses addiction at its root — the heart&rsquo;s search for ultimate satisfaction — and how Christ alone satisfies.</p>
              </div>
              <div>
                <VideoEmbed videoId="1V7Uy7E6wME" title="Celebrate Recovery — John Baker" />
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.75rem" }}>The founder of Celebrate Recovery on how the 8 principles of CR apply the Beatitudes to recovery from addiction and life&rsquo;s hurts, habits, and hang-ups.</p>
              </div>
              <div>
                <VideoEmbed videoId="9WyYPAHbfnw" title="Romans 7 and the Struggle With Sin" />
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.75rem" }}>A close reading of Paul&rsquo;s raw confession in Romans 7 and what it means for those battling compulsive patterns they cannot break alone.</p>
              </div>
            </div>
            <div style={{ background: `${PURPLE}0D`, border: `1px solid ${PURPLE}30`, borderRadius: 6, padding: "1.75rem", marginTop: "3rem", textAlign: "center" }}>
              <h3 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.75rem", color: PURPLE }}>Recovery Is a Long Road — You Don&rsquo;t Walk It Alone</h3>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }}>
                The same Jesus who said &ldquo;neither do I condemn you&rdquo; also said &ldquo;go and sin no more.&rdquo; Grace
                and truth together. Recovery is hard, long, and real — and the God who raised Jesus from
                the dead is more than able to raise you from what has held you down.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
