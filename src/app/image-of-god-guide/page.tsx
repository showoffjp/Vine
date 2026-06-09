"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "biblical", label: "Biblical Data" },
  { id: "views", label: "Interpretive Views" },
  { id: "fall", label: "After the Fall" },
  { id: "christ", label: "Christ as True Image" },
  { id: "dignity", label: "Human Dignity" },
  { id: "vocation", label: "Vocation & Calling" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const IMAGE_TEXTS = [
  { ref: "Genesis 1:26–27", text: "Then God said, 'Let us make mankind in our image, in our likeness, so that they may rule over the fish in the sea and the birds in the sky...' So God created mankind in his own image, in the image of God he created them; male and female he created them.", color: GOLD },
  { ref: "Colossians 1:15", text: "The Son is the image of the invisible God, the firstborn over all creation.", color: BLUE },
  { ref: "2 Corinthians 3:18", text: "And we all, who with unveiled faces contemplate the Lord's glory, are being transformed into his image with ever-increasing glory, which comes from the Lord, who is the Spirit.", color: GREEN },
  { ref: "Romans 8:29", text: "For those God foreknew he also predestined to be conformed to the image of his Son, that he might be the firstborn among many brothers and sisters.", color: TEAL },
  { ref: "Genesis 9:6", text: "Whoever sheds human blood, by humans shall their blood be shed; for in the image of God has God made mankind.", color: PURPLE },
];

const INTERPRETIVE_VIEWS = [
  {
    title: "Structural / Substantive View",
    desc: "The image consists of qualities or capacities inherent to human nature — reason, moral consciousness, language, spirituality. Humans image God because they possess rational and moral faculties that other creatures lack. Emphasized by Augustine, Aquinas, and the Catholic tradition.",
    strength: "Grounded in the obvious human capacities for reason, language, and moral reflection.",
    weakness: "Can reduce the image to cognitive functions — what of those with severe cognitive disabilities?",
    color: BLUE,
  },
  {
    title: "Functional / Royal View",
    desc: "The image is not about what humans are but what they do — they are God's viceroys, placed on earth to rule and steward creation on his behalf. The ancient Near Eastern background: kings placed their images (statues) in territories to assert sovereignty. Humans are God's living images placed in creation to represent his rule.",
    strength: "Strongly supported by the immediate context (Gen 1:26–28: dominion mandate follows immediately). Emphasizes function and responsibility.",
    weakness: "May neglect the ontological — what enables humans to function as image-bearers?",
    color: GREEN,
  },
  {
    title: "Relational View",
    desc: "The image is realized in relationship — to God (vertical) and to other humans (horizontal). Karl Barth: the image is the capacity for and call to I-thou relationship. 'Male and female he created them' (Gen 1:27) — the complementary differentiation of humanity is itself an aspect of the image, echoing the differentiated unity of the Trinity.",
    strength: "Captures the relational dimension of human nature and grounds the fundamental importance of community.",
    weakness: "Can be too ethereal — what is the relational capacity grounded in?",
    color: TEAL,
  },
  {
    title: "Integrated / Multi-Dimensional View",
    desc: "Most contemporary evangelical theologians hold that the image is multidimensional — involving human nature as structured (capacity for reason, morality, language, spirituality), functional (called to steward and rule), and relational (made for communion with God and other persons). These are not rivals but aspects of one reality.",
    strength: "Comprehensive and faithful to the full biblical witness.",
    weakness: "Risk of being so broad it loses precision.",
    color: GOLD,
  },
];

const FALL_CONTENT = [
  {
    title: "Is the Image Lost at the Fall?",
    desc: "The NT continues to assume humans bear the image after the fall (Gen 9:6; James 3:9; 1 Cor 11:7). The image is not destroyed but defaced — like a coin whose inscription is blurred but legible, or a mirror cracked but still reflective. Calvin used this analogy. The functional image (stewardship, representation) is distorted; the structural image (rationality, etc.) is corrupted but not erased.",
    color: GOLD,
  },
  {
    title: "What the Fall Distorted",
    desc: "Every aspect of the image is distorted by sin. The mind that was to reason toward God is now hostile to him (Rom 1:21; 8:7). The will that was to choose good is now enslaved to sin (John 8:34). The relational capacity that was to honor others is now turned toward exploitation. The stewardship mandate is perverted into exploitation of creation and domination of people.",
    color: RED,
  },
  {
    title: "What Remained",
    desc: "Despite the fall, the image provides: grounds for basic justice (Gen 9:6 — don't murder, because the victim bears God's image), conscience (Rom 2:14–15 — even Gentiles have some moral awareness), capacity for culture, relationship, and truth. Common grace preserves these vestiges against total collapse.",
    color: GREEN,
  },
];

const CHRIST_TRUE_IMAGE = [
  {
    title: "Jesus as the Perfect Image",
    desc: "Colossians 1:15: Jesus is 'the image (eikon) of the invisible God.' 2 Corinthians 4:4: 'Christ, who is the image of God.' Jesus is not merely a model for what image-bearers should be — he is the original after which humanity was patterned. To see Jesus is to see what God's image in humanity was always meant to look like.",
    color: GOLD,
  },
  {
    title: "Renewed in the Image of the Creator",
    desc: "Colossians 3:10: the new self 'is being renewed in knowledge in the image of its Creator.' Ephesians 4:24: 'put on the new self, created to be like God in true righteousness and holiness.' Salvation is the restoration and perfecting of the image — not merely forgiveness but transformation toward Christlikeness.",
    color: GREEN,
  },
  {
    title: "Conformed to the Image of His Son",
    desc: "Romans 8:29: God's purpose is to conform believers to 'the image of his Son.' This is the goal of sanctification — not generic 'moral improvement' but becoming like Jesus Christ specifically. The Spirit transforms believers from one degree of glory to another, into the image of the Lord (2 Cor 3:18).",
    color: BLUE,
  },
  {
    title: "Glorification: The Image Perfected",
    desc: "1 John 3:2: 'When he appears, we shall be like him, for we shall see him as he is.' The eschatological consummation completes what the Spirit has begun — the full restoration and perfection of the image of God, free from sin's distortion. The resurrection body will bear the full glory of the image of Christ.",
    color: TEAL,
  },
];

const DIGNITY_CONTENT = [
  {
    title: "Every Human Has Dignity",
    desc: "Every human being — regardless of race, age, ability, religion, gender, or status — bears the image of God. This is the deepest possible foundation for human dignity and rights. It is not earned, not conferred by the state, and cannot be forfeited. James 3:9–10 condemns cursing people made in God's image.",
    color: GOLD,
  },
  {
    title: "Implications for the Vulnerable",
    desc: "The imago Dei creates special obligations toward the vulnerable — the unborn, the severely disabled, the elderly, the poor, the marginalized. Those who cannot yet exercise the functional capacities of image-bearing are still fully image-bearers. This grounds Christian pro-life ethics and care for the disabled.",
    color: TEAL,
  },
  {
    title: "Racial Justice and the Image",
    desc: "Racism fundamentally violates the imago Dei — attributing differential worth to human beings on the basis of ethnicity. Acts 17:26: 'From one man he made all the nations.' The image is shared by all descendants of Adam, across every ethnicity. The new creation community — every nation, tribe, and language (Rev 7:9) — reflects the full glory of the image.",
    color: GREEN },
  {
    title: "Opposing Dehumanization",
    desc: "All forms of dehumanization — whether in propaganda, pornography, trafficking, exploitation, or contempt — violate the imago Dei. When humans are treated as mere means, commodities, or categories rather than persons bearing God's image, the Creator is dishonored. Christian ethics is irreducibly personalist.",
    color: RED,
  },
];

const VOCATION_CONTENT = [
  { title: "The Cultural Mandate", desc: "Genesis 1:28: 'Be fruitful and increase in number; fill the earth and subdue it. Rule over the fish... the birds... every living creature.' This is the imago Dei's functional expression — human creativity, culture, technology, governance, and stewardship are the proper outworking of bearing God's image. Work is not a result of the fall but a creation ordinance.", color: GREEN },
  { title: "Creativity as Image-Bearing", desc: "Human creativity — art, music, architecture, literature, technology — is an expression of the imago Dei. We are sub-creators under the Creator. Tolkien: 'Fantasy... may actually assist in the effoliation and multiple enrichment of creation.' To make beautiful things is to reflect the beauty of God.", color: BLUE },
  { title: "Stewardship of Creation", desc: "The dominion mandate is not license for exploitation but a call to stewardship — ruling on behalf of God, accountable to him. Psalm 115:16: 'The highest heavens belong to the LORD, but the earth he has given to mankind.' Creation care is an expression of faithful image-bearing.", color: TEAL },
  { title: "Governance and Justice", desc: "Political and social life are not secular accidents but expressions of the image — humans are political animals (in Aristotle's sense) because they bear God's image. Just governance, rule of law, and social institutions are ways image-bearers fulfill the cultural mandate.", color: GOLD },
];

const VIDEOS = [
  { videoId: "v5VRCMeK4rA", title: "What Does 'Image of God' Mean? — Tim Mackie" },
  { videoId: "9BqxFZJDQcI", title: "The Image of God and Human Dignity — John Piper" },
  { videoId: "H8t0-5aMST4", title: "Imago Dei and Vocation — Andy Crouch" },
  { videoId: "U_K7yBtk0pI", title: "Christ as the True Image of God — N.T. Wright" },
  { videoId: "p-oZ-q3nPHE", title: "Human Dignity and the Gospel" },
];

export default function ImageOfGodGuidePage() {
  const [tab, setTab] = useLocalStorage("vine_img_tab", "overview");
  const [openView, setOpenView] = useLocalStorage("vine_img_view", "");
  const [journal, setJournal] = useLocalStorage("vine_img_journal", "");

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" };
  const accordionBtn = (open: boolean, color: string) => ({
    width: "100%", textAlign: "left" as const, display: "flex", justifyContent: "space-between",
    alignItems: "center", padding: "1rem 1.25rem", background: open ? `${color}12` : "transparent",
    border: `1px solid ${open ? color + "40" : BORDER}`, borderRadius: 12, cursor: "pointer", marginBottom: 8,
    color: TEXT, fontWeight: 700, transition: "all .2s",
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>✨</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: GOLD, textTransform: "uppercase" }}>Theological Anthropology</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            The Image of God (Imago Dei)
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            &quot;So God created mankind in his own image&quot; (Gen 1:27) — three words that changed everything. The imago Dei is the foundation of human dignity, the basis for ethics, the call to vocation, and the template for redemption. Understanding it transforms how we see ourselves, others, and our purpose.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t.id ? GOLD : "transparent", color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? GOLD : BORDER}`, cursor: "pointer", transition: "all .18s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GOLD }}>Key Texts on the Image of God</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {IMAGE_TEXTS.map((t) => (
                  <div key={t.ref} style={{ background: `${t.color}10`, border: `1px solid ${t.color}30`, borderRadius: 12, padding: "1rem 1.25rem", borderLeft: `3px solid ${t.color}` }}>
                    <span style={{ fontWeight: 800, color: t.color, fontSize: "0.85rem" }}>{t.ref}</span>
                    <p style={{ color: TEXT, lineHeight: 1.7, marginTop: "0.3rem" }}>{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...card }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: BLUE }}>Why Imago Dei Matters</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                {[
                  { label: "Human Dignity", desc: "Every person has intrinsic worth because they bear God's image. The foundation of all human rights.", color: GOLD },
                  { label: "Ethics and Justice", desc: "The image grounds obligations to every person, especially the vulnerable. The basis for opposing dehumanization in every form.", color: RED },
                  { label: "Vocation and Culture", desc: "The cultural mandate is the image's functional expression — creativity, stewardship, governance, and art all flow from it.", color: GREEN },
                  { label: "Salvation's Goal", desc: "Redemption is the restoration and perfecting of the image — conformity to Christ, the true image of God.", color: TEAL },
                ].map((item) => (
                  <div key={item.label} style={{ background: `${item.color}0A`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1rem" }}>
                    <div style={{ fontWeight: 800, color: item.color, marginBottom: "0.4rem" }}>{item.label}</div>
                    <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "biblical" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GREEN }}>Biblical Data on the Image</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "Genesis 1:26–27 — Creation in the Image", desc: "The foundational text. 'Let us make mankind in our image (tselem), in our likeness (demut).' Tselem typically refers to a physical representation (a statue or idol); demut means likeness or resemblance. The two words together describe humans as God's representative presence in creation — his living image.", color: GOLD },
                { title: "Genesis 5:1–3 — The Image Transmitted", desc: "Adam was created in God's likeness; Adam's son Seth was born 'in his own likeness, in his own image.' This suggests the image is transmitted through human generation — and raises the question of how the fall affected it.", color: BLUE },
                { title: "Genesis 9:6 — The Image After the Fall", desc: "'Whoever sheds human blood, by humans shall their blood be shed; for in the image of God has God made mankind.' Post-fall, post-flood, the image still grounds the prohibition on murder. The image persists despite the fall.", color: GREEN },
                { title: "James 3:9 — Inconsistency in the Church", desc: "'With the tongue we praise our Lord and Father, and with it we curse human beings, who have been made in God's likeness.' Cursing people contradicts praise of God — because both bear the same image. The image creates obligations in how we speak about and to all people.", color: TEAL },
                { title: "Colossians 3:10; Ephesians 4:24 — The Renewed Image", desc: "The new self 'is being renewed in knowledge in the image of its Creator' (Col 3:10) and 'created to be like God in true righteousness and holiness' (Eph 4:24). Salvation renews what sin distorted — the image is being restored.", color: PURPLE },
              ].map((item) => (
                <div key={item.title} style={{ background: `${item.color}0A`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1.25rem" }}>
                  <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "views" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: TEAL }}>Interpretive Views</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              What specifically does it mean to bear the image? Three main interpretive traditions have developed.
            </p>
            {INTERPRETIVE_VIEWS.map((v, i) => {
              const key = String(i);
              const open = openView === key;
              return (
                <div key={v.title}>
                  <button type="button" style={accordionBtn(open, v.color)} onClick={() => setOpenView(open ? "" : key)}>
                    <span>{v.title}</span>
                    <span style={{ color: v.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${v.color}0A`, border: `1px solid ${v.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "0.75rem" }}>{v.desc}</p>
                      <p style={{ color: GREEN, fontSize: "0.9rem", marginBottom: "0.3rem" }}><strong>Strength:</strong> {v.strength}</p>
                      <p style={{ color: GOLD, fontSize: "0.9rem" }}><strong>Limitation:</strong> {v.weakness}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "fall" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: RED, margin: 0 }}>The Image After the Fall</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              Did the fall destroy, damage, or leave the image intact? The answer shapes both anthropology and ethics.
            </p>
            {FALL_CONTENT.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "christ" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: BLUE, margin: 0 }}>Christ as the True Image</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              Jesus is &quot;the image of the invisible God&quot; (Col 1:15). He is not one image-bearer among many — he is the archetype after which all image-bearers were patterned, and the one into whose image they are being transformed.
            </p>
            {CHRIST_TRUE_IMAGE.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "dignity" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: GOLD, margin: 0 }}>Human Dignity and Ethics</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              The imago Dei is the strongest possible foundation for human dignity — not an accident of evolution or a social construct, but an indelible mark of God&apos;s own nature impressed on every human being.
            </p>
            {DIGNITY_CONTENT.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "vocation" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: GREEN, margin: 0 }}>Vocation, Culture, and Calling</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              The imago Dei is not merely a status — it is a calling. Humans are commissioned as God&apos;s representatives in creation, exercising the dominion mandate through work, culture-making, and stewardship.
            </p>
            {VOCATION_CONTENT.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: PURPLE }}>Personal Reflection</h2>
            <p style={{ color: MUTED, marginBottom: "1rem" }}>How does knowing you bear the image of God change how you see yourself? How does it change how you see the people around you — especially those who are difficult, different, or vulnerable?</p>
            <textarea
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 200, background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", outline: "none", boxSizing: "border-box" }}
            />
            {journal && <div style={{ marginTop: "0.75rem", fontSize: "0.82rem", color: MUTED }}>Auto-saved · {journal.length} characters</div>}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: TEAL }}>Video Teaching on the Image of God</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <div key={v.videoId}>
                  <div style={{ fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>{v.title}</div>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 12, overflow: "hidden" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {[
            { label: "Calling & Vocation", href: "/calling-vocation" },
            { label: "Creation Theology", href: "/creation-theology" },
            { label: "Christology Guide", href: "/christology-guide" },
            { label: "Theology of Beauty", href: "/theology-of-beauty" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ padding: "0.4rem 1rem", borderRadius: 999, fontSize: "0.82rem", fontWeight: 700, border: `1px solid ${BORDER}`, color: MUTED, textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
