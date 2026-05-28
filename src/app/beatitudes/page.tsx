"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const BEATITUDES = [
  {
    n: 1,
    blessing: "Blessed are the poor in spirit",
    promise: "for theirs is the kingdom of heaven",
    color: "#6B7280",
    meaning: "Poverty of spirit is the recognition that you have nothing to bring to God — no righteousness, no achievement, no claim. It is the opposite of spiritual self-sufficiency. The one who enters the kingdom does so as a beggar, not a contributor. This is not low self-esteem; it is accurate self-knowledge: everything I have is gift.",
    paradox: "In a world that rewards confidence and self-promotion, Jesus says the spiritually bankrupt are blessed. The kingdom does not go to the spiritually ambitious — it belongs to those who know they are empty.",
    practice: "Ask: where am I relying on my own goodness, intelligence, or spiritual progress rather than God's grace? Confess specific areas of spiritual pride.",
    verse: "Matthew 5:3",
  },
  {
    n: 2,
    blessing: "Blessed are those who mourn",
    promise: "for they will be comforted",
    color: "#3B82F6",
    meaning: "Mourning is not simply sadness — it is the grief that comes from seeing things as they actually are: sin as genuinely destructive, suffering as genuinely real, the world as genuinely broken. It is the opposite of comfortable numbness. Those who mourn are those who care enough about reality to grieve it.",
    paradox: "The world calls mourning weakness and prescribes distraction. Jesus says it is the condition for comfort. You cannot be comforted if you refuse to grieve. The Psalms of lament model what it looks like to mourn honestly before God.",
    practice: "What do you need to mourn that you have been numbing or avoiding? Give it permission to be felt. Bring it to God in honest prayer.",
    verse: "Matthew 5:4",
  },
  {
    n: 3,
    blessing: "Blessed are the meek",
    promise: "for they will inherit the earth",
    color: "#10B981",
    meaning: "Meekness is not weakness or passivity. In Greek, praeis could describe a trained warhorse — great power under control. The meek are those who have power but choose not to exercise it selfishly. Moses is called the meekest man alive (Numbers 12:3) despite being a leader who confronted Pharaoh. Jesus is 'gentle and humble in heart' (Matthew 11:29).",
    paradox: "The earth goes, in human systems, to the aggressive — those who take it. Jesus says the meek will inherit it. This is an eschatological reversal: the final distribution of the earth will be by God's justice, not by human power.",
    practice: "Where is God calling you to exercise restraint, deference, or gentleness rather than asserting yourself? Is there a situation where your 'right' to speak or act should be held in check?",
    verse: "Matthew 5:5",
  },
  {
    n: 4,
    blessing: "Blessed are those who hunger and thirst for righteousness",
    promise: "for they will be filled",
    color: "#F59E0B",
    meaning: "Righteousness in Matthew has two dimensions: personal moral integrity and social justice. To hunger and thirst for righteousness is to desire both your own holiness and the just ordering of the world with the urgency of physical need — not as a mild preference but as a desperate longing. This is not self-righteousness; it is dissatisfaction with the gap between what is and what should be.",
    paradox: "The world is largely comfortable with moral adequacy. Jesus says the blessed are those who are not satisfied — who ache for more holiness and more justice than currently exists.",
    practice: "What injustice, personal or social, are you actually distressed about? Let the hunger be real and bring it to action: confession, prayer, engagement.",
    verse: "Matthew 5:6",
  },
  {
    n: 5,
    blessing: "Blessed are the merciful",
    promise: "for they will be shown mercy",
    color: "#EF4444",
    meaning: "Mercy is the compassionate response to suffering and sin in others — not giving people what they deserve when they deserve worse. The merciful have been shown their own need for mercy and respond to others from that place. The connection is direct: those who have received mercy give it; those who withhold mercy reveal that they have not fully received it (see the parable of the unforgiving servant, Matthew 18).",
    paradox: "Mercy seems to let people off the hook — which feels unjust. But justice without mercy becomes cruelty, and mercy without justice becomes sentimentality. Jesus models both: the cross satisfies justice while mercy is given freely.",
    practice: "Who in your life deserves your judgment more than your mercy? What would it look like to extend mercy — not denying what was done but choosing not to wield it?",
    verse: "Matthew 5:7",
  },
  {
    n: 6,
    blessing: "Blessed are the pure in heart",
    promise: "for they will see God",
    color: "#8B5CF6",
    meaning: "Purity of heart (Kierkegaard: 'to will one thing') is singleness of motive — undivided devotion without an ulterior agenda. The pure in heart pursue God for God, not for the spiritual benefits, social reputation, or sense of achievement that religion can provide. This is the hardest purity to achieve because it is invisible — only God and you know what you are really after.",
    paradox: "We are constitutionally divided — wanting God and wanting our agendas simultaneously. Psalm 86:11: 'Give me an undivided heart.' Purity of heart is a gift to be sought, not a achievement to be attained.",
    practice: "Examine your motives in spiritual practice: do you pray, give, and serve from genuine love for God and others — or for what it produces in you? Confess the mixture.",
    verse: "Matthew 5:8",
  },
  {
    n: 7,
    blessing: "Blessed are the peacemakers",
    promise: "for they will be called children of God",
    color: "#0EA5E9",
    meaning: "Peacemakers actively work to reconcile, repair, and restore relationships and communities. This is not peacekeeping — the passive avoidance of conflict. It is peacemaking: entering into conflict as a reconciling presence. Jesus is the ultimate peacemaker: 'he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility' (Ephesians 2:14).",
    paradox: "Peacemakers often cause conflict — because bringing peace to a situation first requires naming what is wrong. The one who speaks truth into a broken relationship is first experienced as a troublemaker, then as the one who made peace possible.",
    practice: "What relationship in your life needs peace? Are you avoiding the honest conversation that might create it? The peacemaker goes toward the conflict, not away from it.",
    verse: "Matthew 5:9",
  },
  {
    n: 8,
    blessing: "Blessed are those who are persecuted for righteousness",
    promise: "for theirs is the kingdom of heaven",
    color: "#DC2626",
    meaning: "The final beatitude addresses the consequence of living the previous seven: a life of poverty of spirit, mourning, meekness, hunger for righteousness, mercy, purity of heart, and peacemaking will be countercultural — and countercultural people experience opposition. The persecution described is specifically for righteousness, not for being difficult, self-righteous, or obnoxious.",
    paradox: "The world calls persecution a sign that something is wrong. Jesus calls it a sign that something is right — that your life is distinct enough to register as a challenge to dominant values. Not all suffering is this kind, but this kind is blessed.",
    practice: "What has following Jesus cost you? If the answer is nothing, it may be worth asking whether you are genuinely living counter to the culture around you.",
    verse: "Matthew 5:10-12",
  },
];

export default function BeatitudesPage() {
  const [selected, setSelected] = useState(1);

  const beat = BEATITUDES.find(b => b.n === selected)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⛰️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Beatitudes</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The opening of the Sermon on the Mount — eight upside-down blessings that describe the character of kingdom citizens. These are not commands but descriptions: this is what those who belong to God's kingdom look like.
          </p>
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          <div style={{ width: 200, flexShrink: 0 }}>
            {BEATITUDES.map(b => (
              <button key={b.n} onClick={() => setSelected(b.n)}
                style={{ width: "100%", background: selected === b.n ? `${b.color}15` : "transparent", border: `1px solid ${selected === b.n ? b.color + "60" : BORDER}`, borderRadius: 10, padding: "10px 12px", marginBottom: 6, cursor: "pointer", textAlign: "left", display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: selected === b.n ? `${b.color}25` : "transparent", border: `1px solid ${selected === b.n ? b.color : BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", color: selected === b.n ? b.color : MUTED, fontWeight: 800, fontSize: 11, flexShrink: 0, marginTop: 1 }}>{b.n}</div>
                <span style={{ color: selected === b.n ? b.color : MUTED, fontWeight: 600, fontSize: 12, lineHeight: 1.4 }}>{b.blessing.replace("Blessed are ", "").replace("Blessed are ", "").replace("Blessed is ", "").split(' ').slice(0,4).join(' ')}...</span>
              </button>
            ))}
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ background: CARD, border: `1px solid ${beat.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${beat.color}20`, border: `2px solid ${beat.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: beat.color, fontWeight: 900, fontSize: 14 }}>{beat.n}</div>
                <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{beat.verse}</span>
              </div>
              <h2 style={{ color: beat.color, fontWeight: 900, fontSize: 20, marginBottom: 4, lineHeight: 1.3 }}>{beat.blessing},</h2>
              <p style={{ color: MUTED, fontSize: 15, fontStyle: "italic", marginBottom: 20 }}>{beat.promise}.</p>

              <div style={{ marginBottom: 16 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>MEANING</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{beat.meaning}</p>
              </div>

              <div style={{ background: BG, borderRadius: 10, padding: 18, marginBottom: 16 }}>
                <div style={{ color: "#F59E0B", fontWeight: 700, fontSize: 12, marginBottom: 8 }}>THE PARADOX</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{beat.paradox}</p>
              </div>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>PRACTICE</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{beat.practice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
