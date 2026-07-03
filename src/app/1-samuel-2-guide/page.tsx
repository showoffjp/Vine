"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "Overview",
  "Hannah's Song",
  "Eli's Wicked Sons",
  "The Boy Samuel",
]

const sections = [
  {
    id: "Overview",
    heading: "A Chapter of Contrasts",
    reference: "1 Samuel 2:1&ndash;36",
    paragraphs: [
      "First Samuel 2 is one of the great hinge chapters of the Old Testament. It stands at the threshold of Israel&rsquo;s transition from the period of the judges into the era of the monarchy, and it does so by placing side by side two radically different responses to God: the magnificent praise of a woman who once wept and prayed in silence, and the brazen corruption of sons who despised what was holy. The contrast could hardly be more stark, and the chapter invites the reader to ask whose vision of God is true &mdash; Hannah&rsquo;s song or the contempt of Hophni and Phinehas.",
      "The chapter opens with Hannah&rsquo;s song (v.1&ndash;10), one of the great lyric poems of Hebrew Scripture. Hannah, who was barren and had cried out to God in the previous chapter, has received what she asked for &mdash; a son, whom she has named Samuel and now, as promised, dedicated to the service of the Lord at Shiloh. Her song is not primarily about motherhood or even about Samuel. It is about the God who overturns human expectations &mdash; who humbles the proud and lifts the lowly, who fills the hungry and sends the full away empty.",
      "The middle sections of the chapter (v.12&ndash;25) describe the sons of Eli in detail that grows progressively darker. Hophni and Phinehas are called worthless men who did not know the Lord (v.12). They abuse the sacrificial system for their own gluttony, forcibly taking meat from worshipers before the fat is burned. They lie with the women who serve at the entrance to the tent of meeting. Eli hears of these things, rebukes his sons mildly, and is completely ignored. The narrator passes judgment: &ldquo;the sin of the young men was very great before the Lord, for the men treated the offering of the Lord with contempt&rdquo; (v.17).",
      "In the final movement (v.26&ndash;36), two words of divine judgment arrive in succession. First comes the brief but luminous note about Samuel himself: &ldquo;Samuel grew and the Lord was with him&rdquo; (v.26). Then a man of God arrives with a devastating oracle against the house of Eli (v.27&ndash;36). The honor that Eli&rsquo;s family had received &mdash; as priests before God &mdash; will be taken away. Both sons will die on the same day. God will raise up a faithful priest who will do according to what is in his heart and mind. The priestly order that had begun with Eli is under sentence of death.",
      "Theologically, 1 Samuel 2 functions as a kind of overture to the entire books of Samuel and beyond. Hannah&rsquo;s final verse &mdash; &ldquo;he will give strength to his king and exalt the horn of his anointed&rdquo; (v.10) &mdash; introduces the concept of &lsquo;the anointed one,&rsquo; the Messiah, before Israel has a king. The chapter anticipates not only David but ultimately Christ, to whom Mary&rsquo;s Magnificat in Luke 1 looks back with unmistakable echoes. The God who raised Hannah from the ash heap of barrenness will raise his anointed from death itself.",
    ],
  },
  {
    id: "Hannah's Song",
    heading: "Hannah&rsquo;s Song of Praise",
    reference: "1 Samuel 2:1&ndash;10",
    paragraphs: [
      "&ldquo;My heart exults in the Lord; my horn is exalted in the Lord&rdquo; (v.1). Hannah&rsquo;s song begins with the first-person singular but it does not stay there long. What erupts from her is not merely personal gratitude &mdash; the relief of a woman whose reproach has been lifted &mdash; but a theological vision of the God who acts in history to overturn the established order of things. She has been given one son, and what pours out of her is a poem about the character of God that will echo through the entire biblical story.",
      "The opening stanza (v.1&ndash;3) is a declaration of God&rsquo;s incomparable holiness and knowledge. &ldquo;There is none holy like the Lord: for there is none besides you; there is no rock like our God&rdquo; (v.2). Against this God, Hannah warns, the arrogant should not speak proudly, because the Lord is a God of knowledge and by him actions are weighed. This is a God who sees through pretense, who is not impressed by human calculations of strength and status. He knows what is actually happening, and he acts on what he knows.",
      "The central movement of the song (v.4&ndash;8) consists of a series of reversals that read like a catalogue of divine interventions into human history. The bows of the mighty are broken; those who stumbled now gird on strength. The full have hired themselves out for bread, but the hungry have ceased to hunger. The barren woman has borne seven, but the woman with many children is forlorn. The Lord kills and makes alive; he brings down to Sheol and raises up. He brings low and he exalts. He raises up the poor from the dust; he lifts the needy from the ash heap to make them sit with princes and inherit a seat of honor.",
      "This is not a sentimental song about personal blessing. It is a subversive poem about a God who does not share the world&rsquo;s assumptions about who is powerful and who is not. The reversal structure &mdash; mighty/weak, full/hungry, barren/fruitful, death/life, low/exalted &mdash; accumulates into a vision of a God who is fundamentally committed to justice and whose power is deployed against the self-sufficient and on behalf of the desperate. Hannah&rsquo;s experience of barrenness and answered prayer has given her eyes to see what most people miss.",
      "The song ends with a verse that stretches far beyond Hannah&rsquo;s immediate situation: &ldquo;The Lord will judge the ends of the earth; he will give strength to his king and exalt the horn of his anointed&rdquo; (v.10). This verse is eschatological and messianic. Israel has no king when Hannah sings this song. Eli the priest is judging Israel; the era of the monarchy has not yet begun. Yet Hannah&rsquo;s song ends with a king and an anointed one &mdash; the Hebrew word mashiach, Messiah &mdash; and with the Lord&rsquo;s judgment extending to the ends of the earth.",
      "The resonance with Mary&rsquo;s Magnificat in Luke 1:46&ndash;55 is unmistakable and deliberate. Mary, the young woman told she will bear the Son of God, sings a song that draws deeply on Hannah&rsquo;s: the mighty are scattered, the humble are exalted, the hungry are filled, the rich are sent away empty. Both women are recipients of divine reversal &mdash; Hannah from barrenness, Mary from obscurity &mdash; and both respond by seeing in their own experience the signature pattern of everything God does. The song of Hannah is a lens that helps the reader of Luke understand what the Incarnation means: the God who lifts the needy from the ash heap has now come himself to sit among us.",
    ],
  },
  {
    id: "Eli's Wicked Sons",
    heading: "The Wickedness of Eli&rsquo;s Sons",
    reference: "1 Samuel 2:12&ndash;25",
    paragraphs: [
      "The narrator introduces Hophni and Phinehas with a verdict before the evidence: &ldquo;Now the sons of Eli were worthless men. They did not know the Lord&rdquo; (v.12). The word translated &ldquo;worthless&rdquo; in Hebrew is benei beliya&rsquo;al &mdash; sons of Belial, of worthlessness, of the void. It is among the strongest terms of moral condemnation available in the Hebrew vocabulary. These are men whose inner life has been hollowed out. And the defining content of their emptiness is that they &ldquo;did not know the Lord.&rdquo; Their failure is not merely behavioral. It is theological. They do not know the God they serve.",
      "The first specific sin described is their abuse of the sacrificial system. The law prescribed that when an Israelite brought a peace offering, the fat was first to be burned as the Lord&rsquo;s portion before any meat was taken by the priests. Hophni and Phinehas, through their servant, arrive while the sacrifice is still in the pot and demand raw meat before the fat has been burned &mdash; and if the worshiper objects, the servant threatens to take it by force (v.13&ndash;16). This is not a minor procedural violation. The fat belonged to the Lord. Demanding it before the Lord&rsquo;s portion was burned was an act of robbery from God himself, committed against worshipers who had come in faith.",
      "The narrator does not soften the verdict: &ldquo;Thus the sin of the young men was very great in the sight of the Lord, for the men treated the offering of the Lord with contempt&rdquo; (v.17). The word &ldquo;contempt&rdquo; is crucial. This was not negligence or ignorance. This was a willful disregard for what was holy. Men entrusted with the holiest office in Israel &mdash; mediating between God and the people at the tent of meeting &mdash; were treating that office as a platform for personal enrichment and satisfaction. The corruption was total because it had penetrated to the very heart of Israel&rsquo;s worship.",
      "The second sin mentioned is even more shocking: &ldquo;Now Eli was very old, and he kept hearing all that his sons were doing to all Israel, and how they lay with the women who were serving at the entrance to the tent of meeting&rdquo; (v.22). The women who served at the tent of meeting were apparently a recognized group of Israelite women devoted to service at the sanctuary. For the priests to exploit that position for sexual gratification was a defilement of the sanctuary itself. The place set apart for Israel to meet with God was being treated as a place of license and exploitation.",
      "Eli&rsquo;s response is a study in parental failure that is more complex and painful than simple neglect. He does rebuke his sons (v.23&ndash;25), and his rebuke is theologically serious: &ldquo;If someone sins against a man, God will mediate for him, but if someone sins against the Lord, who can intercede for him?&rdquo; He understands the gravity of what they are doing. But the rebuke comes too late, is too mild, and carries no consequences. Eli had honored his sons above God (v.29 &mdash; as the man of God later charges), and his sons &ldquo;would not listen to the voice of their father, for it was the will of the Lord to put them to death.&rdquo;",
      "That final clause is theologically arresting. It was the will of the Lord to put them to death. This is not a statement that God mechanically caused their sin. It is a statement that the hardening that falls on those who persistently despise what is holy is itself a judicial act of God. When men repeatedly and willfully treat the sacred as contemptible, there comes a point at which God&rsquo;s patience gives way to judgment, and the very refusal to hear becomes the seal of their condemnation. The sons of Eli had passed that point. The man of God would come to confirm it.",
    ],
  },
  {
    id: "The Boy Samuel",
    heading: "The Boy Samuel and the Word of Judgment",
    reference: "1 Samuel 2:18&ndash;26, 27&ndash;36",
    paragraphs: [
      "Woven through the dark narrative of Eli&rsquo;s sons are brief, luminous glimpses of the boy Samuel. &ldquo;Samuel was ministering before the Lord, a boy clothed with a linen ephod&rdquo; (v.18). The linen ephod was the garment of the priest. Here is a child, given by his mother in fulfillment of a vow, already clothed with the vestment of sacred service. Each year his mother Hannah would come to Shiloh and bring him a little robe she had made &mdash; a touching detail that grounds the theological drama in the ordinary love of a mother for a son she has given away.",
      "The priest Eli blesses Elkanah and Hannah: &ldquo;May the Lord give you children by this woman for the petition she asked of the Lord&rdquo; (v.20). And God does &mdash; Hannah conceives five more children (v.21). The family grows around the absence of Samuel, and Samuel grows in the presence of the Lord. Against the backdrop of Hophni and Phinehas who did not know the Lord, Samuel is described in the most positive terms available: &ldquo;Now the boy Samuel continued to grow both in stature and in favor with the Lord and also with man&rdquo; (v.26). This is one of only a handful of people in the Old Testament of whom such a thing is said.",
      "Then comes the unnamed man of God with his oracle against the house of Eli (v.27&ndash;36). He begins with a recital of what God has done for Eli&rsquo;s family: God had chosen them from all the tribes of Israel to be priests, to go up to the altar and burn incense and wear the ephod before him. The privilege was extraordinary. God had given Eli&rsquo;s family the tithe of the people of Israel. And now the indictment: &ldquo;Why then do you scorn my sacrifices and my offerings that I commanded, and honor your sons above me by fattening yourselves on the choicest parts of every offering of my people Israel?&rdquo; (v.29).",
      "The theological principle that follows is one of the foundational statements of the Old Testament about the nature of God&rsquo;s covenant: &ldquo;Therefore the Lord, the God of Israel, declares: &lsquo;I promised that your house and the house of your father should go in and out before me forever,&rsquo; but now the Lord declares: &lsquo;Far be it from me, for those who honor me I will honor, and those who despise me shall be lightly esteemed&rsquo;&rdquo; (v.30). Covenant promises are not unconditional guarantees of institutional permanence. They are tied to the character of faithfulness. Those who honor God are honored by God; those who despise him are treated with contempt.",
      "The specific signs of judgment are chilling. The arm of Eli&rsquo;s house will be cut off &mdash; its strength and longevity stripped away. No one in his family will reach old age. His two sons, Hophni and Phinehas, will both die on the same day (v.34) &mdash; a sign given in advance so that when it happens, the surviving members of the family will know that God has spoken. A faithful priest will be raised up who will walk before God&rsquo;s anointed &mdash; a reference that points ultimately beyond the immediate replacement to the messianic priest-king who will come.",
      "The man of God&rsquo;s oracle closes a chapter that has moved from the heights of Hannah&rsquo;s song to the depths of priestly corruption and now to the stark announcement of divine judgment. Yet the chapter does not end in despair. The boy Samuel is still there, growing in stature and favor. The God who judges the house of Eli is the same God who was forming, in the shadows, the instrument of a new beginning. &ldquo;Samuel grew, and the Lord was with him and let none of his words fall to the ground&rdquo; &mdash; that is the note that will ring forward into the next chapter and through the rest of his life. God&rsquo;s word does not fail, even when his servants do.",
    ],
  },
];

const videoItems = [
  { videoId: "kpXw7tlmQDE", title: "BibleProject - Overview of 1 Samuel" },
  { videoId: "HxIfPQKvAcc", title: "Hannah's Song and the Coming King - 1 Samuel 2 Explained" },
  { videoId: "v3TMfYQXpGk", title: "Eli's House and the Judgment of God - 1 Samuel 2" },
  { videoId: "h2VMG4rlwjI", title: "The Boy Samuel and the Faithful Priest - 1 Samuel 2" },
];

const data: SectionGuideData = {
  accent: "#D97706",
  badge: `Old Testament Study`,
  title: `1 Samuel 2`,
  intro: `Hannah&rsquo;s magnificent song of praise, the wickedness of Eli&rsquo;s sons Hophni and Phinehas, the faithful boy Samuel, and God&rsquo;s word of judgment on Eli&rsquo;s house &mdash; a chapter of stunning contrasts at the dawn of Israel&rsquo;s monarchy.`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of 1 Samuel 2 through visual teaching on Hannah&rsquo;s song, the fall of Eli&rsquo;s house, the boy Samuel, and the messianic themes that run through this pivotal chapter.`,
  calloutTitle: `Those Who Honor Me I Will Honor`,
  calloutBody: `First Samuel 2 sets two trajectories in motion that will run through the entire rest of the Samuel narrative. The house of Eli, which had received extraordinary privilege and squandered it in contempt, is under sentence of death. The boy Samuel, who grows quietly in the background, is being prepared for a ministry that will reshape Israel&rsquo;s history. And Hannah&rsquo;s song &mdash; echoed centuries later in Mary&rsquo;s Magnificat &mdash; names the God who is doing it all: the one who raises the poor from the dust, fills the hungry, and exalts the horn of his anointed.`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
