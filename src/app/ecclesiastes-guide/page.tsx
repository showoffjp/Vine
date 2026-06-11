"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useCallback, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "vanity", label: "Vanity of Vanities" },
  { id: "wisdom", label: "Wisdom's Limits" },
  { id: "death", label: "Death Levels All" },
  { id: "enjoyment", label: "Gift of Joy" },
  { id: "conclusion", label: "Fear God" },
  { id: "themes", label: "Key Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const ENJOYMENT_PASSAGES = [
  { ref: "Eccl 2:24", color: GREEN, title: "Eating and Drinking as Gift", content: "\"There is nothing better for a person than that he should eat and drink and find enjoyment in his toil. This also, I saw, is from the hand of God.\" The first enjoyment refrain appears immediately after Qoheleth's survey of pleasure's futility — as if the answer to the problem of meaning is not escape from ordinary life but deeper engagement with it. To eat and drink with gratitude is not resignation; it is theological receptivity." },
  { ref: "Eccl 3:12-13", color: TEAL, title: "Good Work as God's Gift", content: "\"I perceived that there is nothing better for them than to be joyful and to do good as long as they live; also that everyone should eat and drink and take pleasure in his toil — this is God's gift to man.\" The repetition of \"God's gift\" is intentional. Joy is not manufactured by effort; it is received as gift from a generous God. The person who can receive ordinary pleasure with gratitude has found something the philosopher and the pleasure-seeker both miss." },
  { ref: "Eccl 5:18-20", color: GOLD, title: "Wealth Enjoyed, Not Hoarded", content: "\"Everyone also to whom God has given wealth and possessions and power to enjoy them, and to accept his lot and rejoice in his toil — this is the gift of God. For he will not much remember the days of his life because God keeps him occupied with joy in his heart.\" The person who has learned to enjoy their portion is set free from obsessive striving. They do not think about how short life is — they are absorbed in the goodness of the present moment." },
  { ref: "Eccl 9:7-9", color: PURPLE, title: "Live Fully Now", content: "\"Go, eat your bread with joy, and drink your wine with a merry heart, for God has already approved what you do. Let your garments be always white. Let not oil be lacking on your head. Enjoy life with the wife whom you love, all the days of your vain life that he has given you under the sun.\" This passage reads like a rebuke of every form of life-postponement: the joyless endurance of the present in hope of a future that never arrives. God approves of your joy now." },
];

const THEMES = [
  { color: GOLD, title: "Hebel: Vapor, Breath, Vanity", text: "The word translated \"vanity\" (KJV) or \"meaningless\" (NIV) is the Hebrew hebel — literally breath, vapor, or mist. It describes something that is real but not lasting, present but not permanent. Qoheleth does not say life is worthless or evil — he says life is fleeting, insubstantial, unable to bear the weight of ultimacy we place upon it. The tragedy is not that things are bad; it is that good things are temporary and cannot save us." },
  { color: BLUE, title: "\"Under the Sun\" — The Bounded Perspective", text: "Qoheleth's signature phrase \"under the sun\" (used 29 times) marks the limits of his investigation. He is examining life as it appears from within the human horizon — without privileged access to divine purposes, without certainty about what comes after death. This is not atheism; it is intellectual honesty about the limits of observation. The phrase signals that his conclusions apply to what can be seen and measured from within creation — not to ultimate reality as God sees it." },
  { color: GREEN, title: "Time and Eternity (3:11)", text: "\"He has made everything beautiful in its time. He has also set eternity in the human heart; yet no one can fathom what God has done from beginning to end.\" This verse is the hinge of the book. Humans are unique creatures: we live in time but ache for eternity. We experience the beauty of moments but cannot step outside time to see the whole pattern. This gap between our longing and our capacity is the source of both wisdom's humility and faith's necessity." },
  { color: PURPLE, title: "Injustice Under the Sun", text: "\"Moreover, I saw under the sun that in the place of justice, even there was wickedness, and in the place of righteousness, even there was wickedness\" (3:16). Qoheleth does not look away from injustice. He catalogues it: the wicked prosper, the righteous suffer, the powerful oppress the weak. He does not resolve this with a tidy theodicy. Instead he says: God will judge (3:17; 11:9). The injustice of history does not escape divine attention — but the timing and manner of God's judgment remain hidden from us." },
  { color: TEAL, title: "Wisdom Is Good but Not Enough", text: "Qoheleth begins as a wisdom seeker but reaches a painful conclusion: wisdom is genuinely good (it surpasses folly as light surpasses darkness, 2:13) but it cannot save. The wise person still dies. The wise person still cannot fathom God's ways. Wisdom provides real advantages — practical, social, and personal — but it cannot purchase eternity or answer the deepest questions. Ecclesiastes is the book that prepares you for a wisdom greater than Proverbs: the person in whom are hidden all the treasures of wisdom (Col 2:3)." },
  { color: RED, title: "Labor and Legacy Are Uncertain", text: "\"I hated all my toil in which I toil under the sun, seeing that I must leave it to the man who comes after me, and who knows whether he will be wise or a fool?\" (2:18-19). Qoheleth raises the painful question of legacy: you work your whole life, and your heir may squander it all. This is not cynicism — it is clear-eyed assessment of what toil can and cannot provide. Work is good and dignified; but it cannot be the thing you live for. That place belongs to God alone." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type EccTab = "overview" | "vanity" | "wisdom" | "death" | "enjoyment" | "conclusion" | "themes" | "journal" | "videos";

export default function EcclesiastesGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<EccTab>("vine_ecc_tab", "overview");
  const [openEnj, setOpenEnj] = useState<string | null>(null);
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_ecc_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_ecc_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

  const saveEntry = useCallback(() => {
    if (!jForm.verse && !jForm.reflection) return;
    const entry: JEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...jForm };
    setJEntries(prev => [entry, ...prev]);
    setJForm({ verse: "", reflection: "", prayer: "" });
    setJSaved(true);
    setTimeout(() => setJSaved(false), 2000);
  }, [jForm]);

  const deleteEntry = useCallback((id: string) => setJEntries(prev => prev.filter(e => e.id !== id)), []);

  return (
    <div style={{ background: BG, minHeight: "100vh", fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "var(--header-height, 80px)", maxWidth: 860, margin: "0 auto", padding: "40px 20px 60px" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: PURPLE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Wisdom · OT</div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px" }}>The Book of Ecclesiastes</h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 640 }}>Qoheleth&apos;s ruthlessly honest investigation into whether life can provide meaning — his answer is both darker and more hopeful than we expect: fear God, receive joy, and live fully in the time you have been given.</p>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${activeTab === t.id ? PURPLE : BORDER}`, background: activeTab === t.id ? `${PURPLE}20` : "transparent", color: activeTab === t.id ? PURPLE : MUTED, fontWeight: activeTab === t.id ? 700 : 500, fontSize: 13, cursor: "pointer" }}>
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
                {[["Author", "Qoheleth (the Teacher)"], ["Genre", "Wisdom / Philosophical"], ["Hebrew Title", "Qoheleth"], ["Key Word", "Hebel (vapor/vanity)"], ["Key Theme", "Meaning Under the Sun"], ["Key Verse", "Eccl 12:13"]].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Ecclesiastes is the most philosophically adventurous book in the Old Testament. The author calls himself Qoheleth — a Hebrew word for one who gathers, assembles, or addresses a congregation. It is sometimes translated as &ldquo;the Teacher&rdquo; or &ldquo;the Preacher.&rdquo; He presents himself as a king in Jerusalem who has pursued every possible avenue to meaning — wisdom, pleasure, achievement, wealth, work — and found each one ultimately insufficient.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The book is not nihilism. Qoheleth does not say life is evil or meaningless in an absolute sense. He says life is hebel — vapor, breath, mist. Real but fleeting. The tragedy is not that good things don&apos;t exist; it is that they don&apos;t last and cannot carry the weight of ultimate meaning. Ecclesiastes is the wisdom book that prepares us for the gospel by being radically honest about what wisdom alone cannot achieve.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>THE STRUCTURE OF ECCLESIASTES</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  ["1:1-11", "Opening Poem", "The endless cycles of nature — sun, wind, rivers — all returning to where they began. \"There is nothing new under the sun.\""],
                  ["1:12–2:26", "The Royal Experiment", "Qoheleth the king tests wisdom, pleasure, great works, wealth — and finds each hebel. But concludes with the first enjoyment refrain."],
                  ["3:1-22", "A Time for Everything", "The famous poem on time (3:1-8), the eternity set in human hearts (3:11), and the first engagement with injustice."],
                  ["4:1–6:9", "Observations on Life", "Oppression, toil, companionship, the folly of riches, vows, and the vanity of wealth without the capacity to enjoy it."],
                  ["6:10–11:6", "Wisdom and Its Limits", "Extended reflection on the limits of human knowledge, the inscrutability of God's ways, and the value of practical wisdom despite its limits."],
                  ["11:7–12:8", "Youth and Age", "The call to enjoy youth while it lasts, the allegory of aging (12:1-7), and the closing refrain: \"Vanity of vanities, all is vanity.\""],
                  ["12:9-14", "The Conclusion", "The epilogue by a second voice: fear God and keep his commandments — this is the whole duty of humanity."],
                ].map(([ref, title, desc]) => (
                  <div key={ref} style={{ display: "flex", gap: 14, padding: "10px 0", borderBottom: `1px solid ${BORDER}` }}>
                    <span style={{ background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: PURPLE, fontWeight: 700, whiteSpace: "nowrap", alignSelf: "flex-start" }}>{ref}</span>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{title}</div>
                      <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "vanity" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Vanity of Vanities (Ecclesiastes 1:2)</h2>
              <div style={{ background: BG, borderRadius: 10, padding: "16px 20px", marginBottom: 18 }}>
                <p style={{ color: PURPLE, fontSize: 18, fontWeight: 700, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;Vanity of vanities, says the Preacher, vanity of vanities! All is vanity.&rdquo;</p>
                <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>Ecclesiastes 1:2 — the book&apos;s opening declaration and closing refrain</p>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>The Hebrew is havel havalim — an intensified superlative, the most emphatic way the language can say something. &ldquo;Vapor of vapors.&rdquo; &ldquo;Breath of breaths.&rdquo; The word hebel appears 38 times in the book — no other word defines Ecclesiastes more. It refers to something real but insubstantial: like breath on a cold morning, visible for a moment and then gone. Or like the mist that rises off a field and dissolves in the sun.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>Qoheleth is not saying life is worthless — he is saying life cannot bear the weight of ultimacy we try to place on it. When we make work, wealth, pleasure, wisdom, or legacy into the thing that gives us ultimate meaning, it buckles under the weight. Not because these things are bad, but because they are hebel — finite, mortal, insufficient for infinite longing.</p>
            </div>
            {[
              { ref: "Wisdom", color: BLUE, title: "Wisdom Is Also Hebel", content: "\"For in much wisdom is much vexation, and he who increases knowledge increases sorrow\" (1:18). Qoheleth begins with wisdom — the greatest good in the Proverbs tradition — and finds that it too is hebel. Not because wisdom is bad (he elsewhere affirms wisdom is better than folly, 2:13) but because wisdom cannot answer the ultimate questions. The wise person still dies like the fool. Wisdom offers real advantages in this life but cannot overcome mortality or fathom God's purposes." },
              { ref: "Pleasure", color: GOLD, title: "Pleasure Is Hebel", content: "\"I said in my heart, 'Come now, I will test you with pleasure; enjoy yourself.' But behold, this also was vanity\" (2:1). Qoheleth tests pleasure scientifically: great buildings, vineyards, gardens, pools, servants, singers, the pleasures of man — whatever I wanted I did not keep from myself (2:10). The result: behold, all was vanity and a striving after wind. Pleasure delivers what it promises in the moment. But it cannot sustain meaning across a life, and it cannot purchase the things that matter most." },
              { ref: "Achievement", color: GREEN, title: "Great Works Are Hebel", content: "\"Then I considered all that my hands had done and the toil I had expended in doing it, and behold, all was vanity and a striving after wind, and there was nothing to be gained under the sun\" (2:11). After completing enormous building projects, planting gardens, acquiring wealth — the most impressive résumé imaginable — Qoheleth looks at it and feels nothing. The achievement is real. The emptiness is also real. The problem is not that he built badly, but that he built for permanence in a world that does not permit it." },
              { ref: "Legacy", color: RED, title: "Legacy Is Hebel", content: "\"I hated all my toil in which I toil under the sun, seeing that I must leave it to the man who comes after me, and who knows whether he will be wise or a fool? Yet he will be master of all for which I toiled and used my wisdom under the sun. This also is vanity\" (2:18-19). The anxiety of legacy — that what you build may be squandered by your heir — is one of Qoheleth's sharpest observations. It is not cynicism; it is the honest reckoning of a person who has built great things and must leave them behind." },
            ].map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "wisdom" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Wisdom&apos;s Limits (Ecclesiastes 1–8)</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Qoheleth is a wisdom teacher testing the limits of wisdom itself. His investigation is rigorous and honest. He does not dismiss wisdom — wisdom is clearly better than folly (2:13-14), it gives life to those who have it (7:12), and it helps a person succeed in practical life. But wisdom has a ceiling it cannot break through.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The most honest statement in the book may be 8:16-17: &ldquo;When I applied my heart to know wisdom, and to see the business that is done on earth... then I saw all the work of God, that man cannot find out the work that is done under the sun. However much man may toil in seeking, he will not find it out. Even though a wise man claims to know, he cannot find it out.&rdquo; Wisdom reaches a wall. Beyond it is God, and God does not owe us an explanation.</p>
            </div>
            {[
              { ref: "1:18", color: BLUE, title: "More Knowledge, More Sorrow", content: "\"For in much wisdom is much vexation, and he who increases knowledge increases sorrow.\" The Preacher's first painful discovery about wisdom: it does not bring tranquility but awareness. The more clearly you see the world as it is — the injustice, the futility, the randomness of outcomes — the more troubled you become. Wisdom does not cushion you from reality; it exposes you to more of it. This is why Proverbs alone is insufficient — wisdom needs to be grounded in something that can bear the weight of what wisdom reveals." },
              { ref: "2:13-14", color: GREEN, title: "Wisdom Is Still Better Than Folly", content: "\"Then I saw that there is more gain in wisdom than in folly, as there is more gain in light than in darkness. The wise person has his eyes in his head, but the fool walks in darkness.\" Qoheleth is not dismissing wisdom — he affirms it. Wisdom gives genuine advantage: the wise person navigates life more successfully, makes better decisions, avoids predictable disasters. But the next verse completes the thought: \"Yet I perceived that the same event happens to all of them.\" Wisdom is better — but it cannot escape death." },
              { ref: "3:11", color: GOLD, title: "Eternity in the Heart", content: "\"He has made everything beautiful in its time. He has also set eternity in the human heart; yet no one can fathom what God has done from beginning to end.\" This verse is the theological hinge of Ecclesiastes. The reason wisdom has a ceiling is that human beings are built with infinite longing in a finite frame. God has placed eternity in us — which means we cannot be satisfied with anything less than God himself. And yet we cannot, from within time, fathom eternity's pattern. We are designed for more than we can have — under the sun. The gospel is the answer Qoheleth reaches for but cannot quite grasp." },
              { ref: "7:23-25", color: PURPLE, title: "Wisdom Beyond Reach", content: "\"All this I have tested by wisdom. I said, 'I will be wise,' but it was far from me. That which has been is far off, and deep, very deep; who can find it out? I turned my heart to know and to search out and to seek wisdom and the scheme of things.\" Qoheleth's humility here is striking. He is the wisest king (by his own account) and he admits the limits of his wisdom. He pursued it with all his might — and wisdom itself retreated before him. This is not anti-intellectualism; it is the honest acknowledgment that some things lie beyond the reach of human reason alone." },
            ].map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "death" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: RED, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Death as the Great Leveler</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>No book in the Old Testament stares more unflinchingly at death than Ecclesiastes. For Qoheleth, death is the ultimate equalizer — the fact that undermines every distinction humans use to rank themselves and gives the final lie to any project of self-salvation. Whether wise or foolish, righteous or wicked, rich or poor, king or servant — all go to the same place.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>This is not morbid nihilism — it is pastoral realism. Ecclesiastes confronts death not to despair over it but to clear the ground of every false source of meaning. If death comes for everyone, then the only things worth orienting your life toward are things that can survive it — or a God who can overcome it. Ecclesiastes points to the necessity of resurrection without quite reaching it.</p>
            </div>
            {[
              { ref: "2:15-16", color: RED, title: "The Wise Die Like Fools", content: "\"Then I said in my heart, 'What happens to the fool will happen to me also. Why then have I been so very wise?' And I said in my heart that this also is vanity. For of the wise as of the fool there is no enduring remembrance, seeing that in the days to come all will have been long forgotten.\" The most devastating critique of wisdom in the book: if death is the final reality, wisdom's advantages are temporary. The wise and the foolish are both forgotten. This is not the last word — but it is a necessary clearing of every false ultimate." },
              { ref: "3:19-20", color: MUTED, title: "The Same Fate", content: "\"For what happens to the children of man and what happens to the beasts is the same; as one dies, so dies the other. They all have the same breath, and man has no advantage over the beasts, for all is vanity. All go to one place. All are from the dust, and to dust all return.\" This passage is deliberately confrontational. From a purely naturalistic perspective, Qoheleth says, there is no distinction between human and animal death. The greatness of humanity — its rationality, achievement, culture — all dissolves at the grave. This is why Qoheleth returns again and again to the gift of the present moment: it is what we have." },
              { ref: "9:2-3", color: GOLD, title: "One Fate for All", content: "\"It is the same for all, since the same event happens to the righteous and the wicked, to the good and the evil, to the clean and the unclean, to him who sacrifices and him who does not sacrifice... This is an evil in all that is done under the sun, that the same event happens to all.\" Qoheleth does not pretend this is fine — he calls it an evil. The fact that death does not differentiate between the righteous and the wicked is morally outrageous. He does not resolve the problem — he names it honestly and then points to God's coming judgment as the ultimate resolution (12:14)." },
              { ref: "12:1-7", color: TEAL, title: "The Allegory of Aging", content: "\"Remember your Creator in the days of your youth, before the evil days come and the years approach when you will say, 'I find no pleasure in them'...\" Ecclesiastes 12:1-7 is one of the most beautiful and sobering poems in Scripture — an extended metaphor for aging and death using images of a great house falling dark: the keepers of the house trembling, the strong men stooping, the grinders ceasing, those who look through windows growing dim. The poem ends with the silver cord severed and the dust returning to the earth. It is not grim — it is honest, and its honesty is a gift." },
            ].map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "enjoyment" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>The Recurring Call to Joy</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Ecclesiastes is not only a book of despair — it is also a book of joy. Six times across the book, Qoheleth interrupts his dark survey with a surprisingly positive refrain: enjoy your food, your drink, your work, your loved ones, your life. These are not consolation prizes. They are theological claims: ordinary joy is a gift from God, and receiving it gratefully is the wisest response to the reality of hebel.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The enjoyment refrains are not advice to numb yourself to reality with pleasure. They come precisely after Qoheleth has surveyed the futility of life most honestly — as if the right response to mortality is not panic or striving but the grateful reception of what God is giving you right now, today, in this meal, with these people.</p>
            </div>
            {ENJOYMENT_PASSAGES.map((e, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openEnj === String(i) ? e.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                <button type="button" onClick={() => setOpenEnj(openEnj === String(i) ? null : String(i))}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ background: `${e.color}20`, border: `1px solid ${e.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: e.color, fontWeight: 700 }}>{e.ref}</span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{e.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{openEnj === String(i) ? "−" : "+"}</span>
                </button>
                {openEnj === String(i) && (
                  <div style={{ padding: "0 22px 18px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "14px 0 0" }}>{e.content}</p>
                  </div>
                )}
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginTop: 10 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>ECCLESIASTES AND GRATITUDE</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>The enjoyment refrains in Ecclesiastes are not an alternative to taking life seriously — they are the fruit of taking life seriously. The person who has fully reckoned with hebel — with the fleeting, insubstantial nature of all earthly things — is precisely the person who can receive a meal, a friendship, a day of meaningful work, as a gift from God&apos;s generous hand. Gratitude is not easy optimism; it is the fruit of honest realism about both the goodness and the limits of creaturely existence.</p>
            </div>
          </div>
        )}

        {activeTab === "conclusion" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Fear God and Keep His Commandments (Ecclesiastes 12:13-14)</h2>
              <div style={{ background: BG, borderRadius: 10, padding: "16px 20px", marginBottom: 18 }}>
                <p style={{ color: GOLD, fontSize: 17, fontWeight: 700, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;Fear God and keep his commandments, for this is the whole duty of man. For God will bring every deed into judgment, with every secret thing, whether good or evil.&rdquo;</p>
                <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>Ecclesiastes 12:13-14 — the conclusion of the entire book</p>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>After the long, searching, honest journey of Ecclesiastes — after testing wisdom, pleasure, achievement, wealth, and finding each hebel — the book ends with two sentences. Not a complex philosophical resolution, not a new discovery, but a return to the most basic theological reality: God exists, God sees, God will judge. This is the whole of human existence.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>Many scholars believe 12:9-14 is an epilogue added by a second voice — an editor who provides a framing perspective on Qoheleth&apos;s challenging material. Whether or not this is the case, the conclusion is not a betrayal of the book&apos;s honesty. It is the resolution that the book&apos;s journey has been building toward: the only foundation that can survive the scrutiny Ecclesiastes applies to everything else is the living God himself.</p>
            </div>
            {[
              { ref: "12:13a", color: GOLD, title: "Fear God", content: "\"Fear God\" — the same foundation as Proverbs (\"the fear of the LORD is the beginning of wisdom\"), now arrived at from the other direction. Proverbs begins with this claim and builds out from it. Ecclesiastes arrives at it after exhausting every alternative. Both routes lead to the same place: the only thing that can hold the weight of human life is the right relationship with God — not as one item on a list of life's goods, but as the foundation without which every other good collapses into hebel." },
              { ref: "12:13b", color: GREEN, title: "Keep His Commandments", content: "\"Keep his commandments.\" The ethical dimension of the conclusion is inseparable from the theological. Fear of God is not merely private piety — it shapes action. The commandments are not arbitrary constraints but the practical structure of living in alignment with the God who made the world and the order embedded in it. For Qoheleth, obedience is not the source of meaning — God is — but obedience is how the God-fearing person orients their daily life within that meaning." },
              { ref: "12:13c", color: PURPLE, title: "This Is the Whole Duty of Man", content: "\"This is the whole duty of man\" — or more literally, \"this is the whole of man\" (no word for 'duty' in the Hebrew). The conclusion is not merely prescriptive (this is what you should do) but ontological (this is what you are). Human beings were made for relationship with God and life in accordance with his order. Everything else — wisdom, pleasure, wealth, achievement — has its proper, limited place within that larger orientation. The tragedy of hebel is the tragedy of seeking ultimate meaning in penultimate goods." },
              { ref: "12:14", color: TEAL, title: "God Will Judge", content: "\"For God will bring every deed into judgment, with every secret thing, whether good or evil.\" The final verse does not merely threaten — it gives hope. One of Ecclesiastes&apos; deepest griefs is the injustice of life under the sun: the wicked prosper, the righteous suffer, wrongdoing goes unpunished. The conclusion that God will judge everything — including the hidden things — is the resolution to that grief. History will not end in injustice. The moral structure of the universe is not an illusion. God&apos;s judgment is the guarantee that hebel is not the last word." },
            ].map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "themes" && (
          <div>
            {THEMES.map(t => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ color: t.color, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{t.title}</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>My Ecclesiastes Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Record your honest reflections on hebel, meaning, joy, and the fear of God from your reading of Ecclesiastes.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Passage</label><textarea rows={2} value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. Eccl 1:2, Eccl 3:11, Eccl 9:7-9, Eccl 12:13-14" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Reflection</label><textarea rows={4} value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="Where do you see hebel in your own life? What does this passage teach you about meaning, joy, or fearing God?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Prayer response</label><textarea rows={3} value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="How are you praying in response to what you've read in Ecclesiastes?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <button type="button" onClick={saveEntry} style={{ alignSelf: "flex-start", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>{jSaved ? "Saved ✓" : "Save Entry"}</button>
              </div>
            </div>
            {jEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {jEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}><span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span><button type="button" onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>✕</button></div>
                    {e.verse && <div style={{ marginBottom: 8 }}><span style={{ color: GOLD, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Passage</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.verse}</p></div>}
                    {e.reflection && <div style={{ marginBottom: 8 }}><span style={{ color: PURPLE, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Reflection</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.reflection}</p></div>}
                    {e.prayer && <div><span style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Prayer</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.prayer}</p></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos on Ecclesiastes</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Sermons and lectures on Qoheleth, hebel, meaning under the sun, and the joy that Ecclesiastes calls us toward.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "lrsQ1tc-2wk", title: "The Book of Ecclesiastes Overview", channel: "BibleProject", description: "BibleProject's animated overview of Ecclesiastes — Qoheleth, hebel, the under-the-sun perspective, the enjoyment refrains, and how the book prepares us for the greater wisdom found in Christ." },
                  { videoId: "MZVxEJhLZss", title: "Making Sense of Ecclesiastes", channel: "Tim Keller", description: "Keller on Ecclesiastes — why the Teacher's search for meaning fails, what hebel really means, and how the gospel answers the question Ecclesiastes raises about satisfaction and eternity." },
                  { videoId: "wSsXzqpzaS8", title: "Vanity of Vanities", channel: "Desiring God", description: "John Piper on Ecclesiastes 1 — the meaning of hebel, the endless cycles under the sun, and how the book's diagnosis of emptiness creates the longing that only God can fill." },
                  { videoId: "6WdJCqJ2x8A", title: "Ecclesiastes and the Good Life", channel: "Gospel Coalition", description: "An exploration of the enjoyment refrains in Ecclesiastes — why Qoheleth repeatedly commands us to eat, drink, and enjoy life, and what this teaches us about ordinary joy as theological gift." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: TEAL, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
