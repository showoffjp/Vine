"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "Overview",
  "Sin Tolerated",
  "The Old Leaven",
  "Judging Inside",
  "Videos",
]

const sections = [
  {
    id: "Overview",
    heading: "Sin, Discipline, and the Purity of the Church",
    reference: "1 Corinthians 5",
    paragraphs: [
      "1 Corinthians 5 confronts a scandal that would be shocking in any age. Paul has received a report of sexual immorality among the Corinthian believers &mdash; &ldquo;of a kind that is not tolerated even among pagans, for a man has his father&rsquo;s wife&rdquo; (v.1). What grieves the apostle most is not merely the sin itself but the church&rsquo;s response to it. Rather than mourning, the Corinthians are &ldquo;arrogant&rdquo; (v.2), apparently proud of a tolerance they mistake for spiritual maturity.",
      "Paul&rsquo;s answer is decisive. Though absent in body he is present in spirit, and he has already passed judgment on the offender. He commands the assembled church, gathered in the name and power of the Lord Jesus, to &ldquo;deliver this man to Satan for the destruction of the flesh, so that his spirit may be saved in the day of the Lord Jesus&rdquo; (vv.3&ndash;5). Church discipline here is severe, but its ultimate aim is redemptive &mdash; the rescue of the sinner, not merely his removal.",
      "The apostle then reaches for an image drawn from the Passover. &ldquo;A little leaven leavens the whole lump&rdquo; (v.6). Tolerated sin does not stay contained; it spreads through the entire community like yeast through dough. So the Corinthians are to &ldquo;cleanse out the old leaven&rdquo; that they may be a new lump, &ldquo;as you really are unleavened&rdquo; &mdash; for &ldquo;Christ, our Passover lamb, has been sacrificed&rdquo; (v.7). Their holiness is grounded in the finished work of Christ.",
      "Out of that finished work flows a summons to celebrate the festival rightly: &ldquo;not with the old leaven, the leaven of malice and evil, but with the unleavened bread of sincerity and truth&rdquo; (v.8). The Christian life is portrayed as an ongoing feast of the redeemed, a community whose corporate purity reflects the once-for-all sacrifice that set them free. Holiness is not the condition of belonging but the natural expression of who they already are in Christ.",
      "Finally Paul clears up a misunderstanding from a previous letter. He had told them not to associate with the sexually immoral, but he did not mean the immoral of the outside world &mdash; &ldquo;since then you would need to go out of the world&rdquo; (vv.9&ndash;10). His concern is the person who &ldquo;bears the name of brother&rdquo; yet lives in unrepented sin. With such a one they are not even to eat (v.11). The church&rsquo;s discipline is internal, aimed at those who claim the name of Christ.",
      "The chapter closes by drawing a sharp line between two jurisdictions. &ldquo;What have I to do with judging outsiders? Is it not those inside the church whom you are to judge? God judges those outside&rdquo; (vv.12&ndash;13). The world&rsquo;s judgment belongs to God; the church&rsquo;s accountability belongs to the church. And so Paul concludes with a command that echoes Deuteronomy: &ldquo;Purge the evil person from among you&rdquo; &mdash; a charge to guard the purity of the people of God.",
    ],
  },
  {
    id: "Sin Tolerated",
    heading: "Sin Tolerated in the Church",
    reference: "1 Corinthians 5:1&ndash;5",
    paragraphs: [
      "Paul comes to the matter without delay: &ldquo;It is actually reported that there is sexual immorality among you, and of a kind that is not tolerated even among pagans, for a man has his father&rsquo;s wife&rdquo; (v.1). The word &ldquo;actually&rdquo; carries his astonishment. This was not a private failing easily hidden but a publicly known relationship so far beyond the moral boundaries of the surrounding culture that even Corinth &mdash; a city famous for its license &mdash; would not condone it.",
      "The deeper scandal is the congregation&rsquo;s posture. &ldquo;And you are arrogant! Ought you not rather to mourn? Let him who has done this be removed from among you&rdquo; (v.2). Instead of grief, the Corinthians display pride. Perhaps they boasted in their freedom or their tolerance, treating the toleration of grave sin as a mark of enlightened faith. Paul calls them to the opposite response: mourning, the godly sorrow that takes sin seriously and longs for its removal from the body.",
      "Paul then asserts his apostolic authority even from a distance. &ldquo;For though absent in body, I am present in spirit; and as if present, I have already pronounced judgment on the one who did such a thing&rdquo; (v.3). His physical absence does not make him indifferent or uninvolved. The decision is not left to the whims of the local assembly alone; the apostle has already discerned what must be done and now directs the church to carry it out.",
      "The action is to be corporate and solemn. It is to happen &ldquo;when you are assembled in the name of the Lord Jesus and my spirit is present, with the power of our Lord Jesus&rdquo; (v.4). This is no private feud or hasty expulsion but a gathered act of the whole church, undertaken in the name and by the authority of Christ himself. Discipline rightly exercised is an exercise of the Lord&rsquo;s own power working through his people.",
      "The command itself is startling: &ldquo;you are to deliver this man to Satan for the destruction of the flesh, so that his spirit may be saved in the day of the Lord&rdquo; (v.5). To be put out of the church is to be handed back into the realm of the world, outside the protective fellowship of God&rsquo;s people. The aim of &ldquo;the destruction of the flesh&rdquo; is the breaking of the sinful nature&rsquo;s grip &mdash; a severe mercy intended to bring the man to repentance.",
      "The clause &ldquo;so that his spirit may be saved&rdquo; reveals the heart of all true discipline. It is never vindictive. Its goal is restoration, not destruction; salvation, not condemnation. The church removes the unrepentant not because it has given up on them but because it refuses to let them rest comfortably in sin that endangers their souls. This passage teaches the seriousness of unrepented, public sin and the redemptive aim that must govern the church&rsquo;s response to it.",
    ],
  },
  {
    id: "The Old Leaven",
    heading: "Cleanse Out the Old Leaven",
    reference: "1 Corinthians 5:6&ndash;8",
    paragraphs: [
      "Paul returns to the Corinthians&rsquo; misplaced confidence: &ldquo;Your boasting is not good. Do you not know that a little leaven leavens the whole lump?&rdquo; (v.6). The image is a household one, familiar to every reader. A tiny portion of fermented dough, worked into a fresh batch, transforms the entire mass. So too with tolerated sin: it cannot be quarantined. Left unaddressed, it permeates and corrupts the whole community.",
      "The remedy is to purge it: &ldquo;Cleanse out the old leaven that you may be a new lump, as you really are unleavened&rdquo; (v.7). Here Paul holds together command and reality in his characteristic way. The Corinthians are to become in practice what they already are in Christ. They are &ldquo;unleavened&rdquo; by virtue of their union with him; therefore they must cleanse out the actual leaven of sin that contradicts their true identity.",
      "The ground of it all is the cross: &ldquo;For Christ, our Passover lamb, has been sacrificed&rdquo; (v.7). Paul draws on the imagery of the Passover and the Feast of Unleavened Bread. Just as Israel removed every trace of leaven from their homes in preparation for the Passover, so the church, redeemed by the true Passover Lamb, must remove the leaven of sin. The motivation for holiness is not fear of punishment but the staggering reality of the sacrifice already made.",
      "From this finished work flows a call to celebration: &ldquo;Let us therefore celebrate the festival, not with the old leaven, the leaven of malice and evil, but with the unleavened bread of sincerity and truth&rdquo; (v.8). The Christian life is figured as an ongoing feast. The leaven to be excluded is named not only as sexual sin but as &ldquo;malice and evil&rdquo; &mdash; the corrupting attitudes that sour fellowship from within.",
      "Over against the old leaven Paul sets &ldquo;the unleavened bread of sincerity and truth.&rdquo; Sincerity is purity of motive, a heart undivided and unmixed; truth is integrity in word and life. These are the marks of a community that has cleansed out the old and lives in the freedom of the redeemed. The festival is kept not by ritual observance but by holiness of character flowing from gratitude.",
      "The passage roots corporate holiness in the gospel itself. The Corinthians are not asked to earn their standing through moral effort, nor to tolerate sin in the name of grace. Because Christ their Passover has been sacrificed, they are already a new lump &mdash; and so they are summoned to live out that reality, cleansing the old leaven so that the church may be in practice the pure and joyful people the cross has made them.",
    ],
  },
  {
    id: "Judging Inside",
    heading: "Judging Those Inside the Church",
    reference: "1 Corinthians 5:9&ndash;13",
    paragraphs: [
      "Paul now corrects a misreading of an earlier letter: &ldquo;I wrote to you in my letter not to associate with sexually immoral people&mdash;not at all meaning the sexually immoral of this world, or the greedy and swindlers, or idolaters, since then you would need to go out of the world&rdquo; (vv.9&ndash;10). His instruction had never been a call to monastic withdrawal. To avoid every immoral person outside the church would require leaving the world altogether &mdash; an absurdity that contradicts the church&rsquo;s mission.",
      "He clarifies precisely whom he meant: &ldquo;But now I am writing to you not to associate with anyone who bears the name of brother if he is guilty of sexual immorality or greed, or is an idolater, reviler, drunkard, or swindler&mdash;not even to eat with such a one&rdquo; (v.11). The decisive phrase is &ldquo;bears the name of brother.&rdquo; The concern is the professing believer whose life flatly contradicts his confession, who claims fellowship in Christ while persisting unrepentant in serious sin.",
      "The list of vices reaches beyond sexual immorality to greed, idolatry, slander, drunkenness, and swindling. The point is not that any single failing automatically excludes a person, but that a settled, unrepentant pattern of such sin in one who claims the name of Christ cannot be ignored. The instruction &ldquo;not even to eat with such a one&rdquo; underscores the seriousness; table fellowship signified acceptance, and the church must not pretend that all is well when it is not.",
      "Paul then frames the principle that governs the whole chapter: &ldquo;For what have I to do with judging outsiders? Is it not those inside the church whom you are to judge?&rdquo; (v.12). The church is not called to police the morals of the surrounding world. Its disciplinary responsibility extends to its own members &mdash; those who have voluntarily come under the lordship of Christ and the accountability of his body.",
      "The complementary truth follows at once: &ldquo;God judges those outside&rdquo; (v.13). The world is not beyond judgment; it is simply under a different judge. The final reckoning of outsiders belongs to God, in his time and by his perfect justice. The church need not usurp that role. Its task is the more immediate one of guarding the integrity of its own fellowship, leaving the judgment of the world in the hands of the One to whom it belongs.",
      "The chapter ends with a command echoing Deuteronomy: &ldquo;Purge the evil person from among you&rdquo; (v.13). The same charge given to ancient Israel to keep the covenant community holy is now applied to the church. The distinction is clear: internal accountability for the household of faith, and God&rsquo;s judgment for the world. Discipline is not cruelty but love that refuses to let sin destroy either the sinner or the body to which he belongs.",
    ],
  },
];

const videoItems = [
  { videoId: "Lp7vT3nR8Kq", title: "1 Corinthians 5 - Sin and Discipline in the Church" },
  { videoId: "Cm4xB6Vt2Hd", title: "Delivered to Satan - The Aim of Church Discipline" },
  { videoId: "Nd8kW3Wx7Jp", title: "A Little Leaven - Christ Our Passover Lamb" },
  { videoId: "Tb5wK2Mq9Hx", title: "Judging Inside the Church - Purge the Evil Person" },
];

const data: SectionGuideData = {
  accent: "#E11D48",
  badge: `Corinthians Study`,
  title: `1 Corinthians 5`,
  intro: `Paul confronts a scandal of tolerated immorality in the Corinthian church &mdash; commanding redemptive discipline, warning that &ldquo;a little leaven leavens the whole lump,&rdquo; pointing to Christ our Passover, and drawing the line between judging those inside the church and leaving the world to God.`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Deepen your study of 1 Corinthians 5 through visual teaching on tolerated sin, the redemptive purpose of church discipline, Christ our Passover lamb, and the distinction between judging those inside the church and leaving the world to God.`,
  calloutTitle: `Discipline as Love`,
  calloutBody: `1 Corinthians 5 holds together the severity and the mercy of the gospel. The church is to take sin seriously precisely because Christ, our Passover lamb, has been sacrificed &mdash; cleansing out the old leaven so that the body may be pure, and disciplining the unrepentant not to destroy but to save, &ldquo;so that his spirit may be saved in the day of the Lord.&rdquo;`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
