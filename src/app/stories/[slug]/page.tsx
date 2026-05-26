import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoryActions from "@/components/StoryActions";
import { ChevronRight, ArrowLeft, Clock, Globe, Heart } from "lucide-react";

const stories: Record<string, {
  name: string; flag: string; location: string; avatar: string; color: string;
  title: string; excerpt: string; category: string; categoryColor: string;
  readTime: string; hearts: number; date: string;
  content: Array<{ type: "p" | "h2" | "quote"; text: string; attribution?: string }>;
  related: Array<{ title: string; slug: string; name: string; flag: string; category: string; categoryColor: string }>;
}> = {
  "carlos-mendez-drug-cartel-to-church-planter": {
    name: "Carlos Mendez",
    flag: "🇨🇴",
    location: "Bogotá, Colombia",
    avatar: "CM",
    color: "#10B981",
    title: "From Drug Cartel Enforcer to Church Planter",
    excerpt: "I was 23 years old, knee-deep in cartel work, certain I was going to die before 30.",
    category: "Redemption",
    categoryColor: "#10B981",
    readTime: "12 min",
    hearts: 5832,
    date: "April 12, 2026",
    content: [
      { type: "p", text: "I was 23 years old, knee-deep in cartel work, certain I was going to die before 30. That was just a fact in my neighborhood. You didn't age gracefully — you either left Medellín, or you got buried there. I had chosen the third option: make enough money to not care." },
      { type: "p", text: "I collected debts. That's the polite way to say it. I was good at the job because I genuinely didn't care what happened to the people who owed what they owed. That numbness wasn't natural — it was learned, carefully, over years. You don't feel nothing by accident." },
      { type: "h2", text: "The Night Everything Broke" },
      { type: "p", text: "I ended up in jail in 2015. Not for the work I'd actually done — something stupid, a street fight, the kind of thing that finally catches up to you when you've been living careless. A priest came to the cell block on Tuesdays. Most of us ignored him. One night, for reasons I still don't fully understand, I didn't." },
      { type: "p", text: "He handed me a Bible. I threw it across the cell. He didn't flinch. He said, 'You can throw it as many times as you want. I'll keep bringing them.' He left. I stared at the Bible on the floor for three days." },
      { type: "quote", text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.", attribution: "Romans 8:38-39" },
      { type: "p", text: "Two weeks later, I picked it up. I started in the middle — Psalms. I didn't know why. I read Psalm 34:18: 'The Lord is close to the brokenhearted and saves those who are crushed in spirit.' I read it twelve times. I wasn't broken or crushed. Or so I had convinced myself. Reading it the thirteenth time, I started crying. I hadn't cried since I was eight years old." },
      { type: "h2", text: "The Slow Rebuild" },
      { type: "p", text: "My conversion wasn't dramatic in the movie sense. There was no lightning bolt. There was just a slow, painful process of having everything I had built my identity on stripped away and replaced with something I didn't yet understand. I started going to the priest's sessions voluntarily. I asked questions I was embarrassed to ask. He answered every one without condescension." },
      { type: "p", text: "When I got out, I went back to Bogotá. My old contacts expected me to return to work. I didn't. I started attending a church in the same barrio where I had spent years doing things I won't detail. People looked at me sideways. The pastor didn't." },
      { type: "h2", text: "The Church in the Same Streets" },
      { type: "p", text: "Today I lead a church of 340 people. It meets in a building that used to be a warehouse I once used for things that would have horrified my congregation if they knew the history. Maybe some of them do know. Either way, they come. They worship. They bring their broken lives and we try to point them toward the only thing that ever reached mine — a God who didn't keep his distance from where I had been." },
      { type: "p", text: "I'm 34 now. Against every actuarial table and every expectation of everyone who knew me at 23. I didn't age gracefully. I aged gratefully. Those are very different things." },
    ],
    related: [
      { title: "We Sold Everything and Moved to Mozambique", slug: "isabella-ferreira-mozambique", name: "Isabella Ferreira", flag: "🇧🇷", category: "Missions", categoryColor: "#00FF88" },
      { title: "The Night I Prayed to Die — and Why I'm Grateful God Said No", slug: "samuel-mwangi-mental-health", name: "Samuel Mwangi", flag: "🇰🇪", category: "Mental Health", categoryColor: "#3B82F6" },
    ],
  },
  "amara-osei-widowed-at-28": {
    name: "Amara Osei",
    flag: "🇬🇭",
    location: "Accra, Ghana",
    avatar: "AO",
    color: "#00FF88",
    title: "Widowed at 28 with Three Children. How Faith Became My Only Floor.",
    excerpt: "When my husband Emmanuel died in a road accident, I had three children under five and no job. What happened next I can only describe as divine provision — not the kind that's comfortable, but the kind that's undeniably real.",
    category: "Grief & Restoration",
    categoryColor: "#6B4FBB",
    readTime: "8 min",
    hearts: 3241,
    date: "May 18, 2026",
    content: [
      { type: "p", text: "The call came at 11:47 pm on a Thursday. A road accident on the Accra–Kumasi highway. Emmanuel was gone before the ambulance arrived. I had three children under five asleep in the next room, and I sat on the kitchen floor in silence for what felt like an hour. The church showed up before sunrise. I don't know how they knew — someone must have called someone — but by 4 am there were eight people in my house, and they didn't say much. They just stayed. One woman sat beside me on the floor and held my hand until the sun came up. That was the first thing God did: he sent people before I even had words to ask for help." },
      { type: "p", text: "The rage came later. After the funeral, after the casseroles stopped coming, after the condolence messages dried up. I was furious — at God, at the universe, at every cheerful Sunday sermon I had ever heard that hadn't prepared me for this. I stopped going to church for four months. I prayed exactly once during that time, and it was mostly me shouting into the ceiling. I told God I thought he was cruel. I told him I didn't understand how he could call himself good. I meant every word. And — this is the thing I tell people now — he did not flinch." },
      { type: "h2", text: "A Neighbor and a Verse" },
      { type: "p", text: "My neighbor Grace was not a dramatic woman. She was seventy-three years old and had buried a husband and a son. She didn't offer explanations. She came over on a Tuesday with rice and brought a small piece of paper with a verse written on it in her careful handwriting: Psalm 68:5. 'Father to the fatherless, defender of widows — this is God, whose dwelling is holy.' I didn't feel comforted reading it. I felt seen. Those are very different things. The verse didn't answer my questions. It told me that God had noticed exactly what had been taken from us. That mattered more than any answer." },
      { type: "quote", text: "I didn't find faith comforting at first. I found it infuriating. But it kept showing up.", attribution: "Amara Osei" },
      { type: "p", text: "The church community did not let us fall. This is not a vague spiritual statement — I mean it practically and specifically. A deacon organized a monthly fund that covered school fees for two years. Three different families took turns having my children on Saturday mornings so I could sleep or cry or stare at the wall without also making breakfast for three toddlers. A woman in the congregation helped me update my credentials and connected me to a role at a nonprofit. These were not random acts of charity. They were coordinated, sustained, and deeply personal. The church functioned as what it was always supposed to be: a body that moved when one of its members was broken." },
      { type: "h2", text: "Five Years Later" },
      { type: "p", text: "I am 33 now. I have a job I love, a home that is ours, a community I would walk through fire for. My children are 8, 7, and 6, and they are loud and bright and full of questions about their father that I answer as honestly as I can. My faith is not the faith I had at 27. It is smaller in some ways — I don't make confident declarations about what God will or won't do. But it is deeper. It has been tested in the only way that matters: it has survived something real. I did not find God comforting in the dark. I found him present. Over time, I've learned that presence is the more important thing." },
    ],
    related: [
      { title: "From Drug Cartel Enforcer to Church Planter", slug: "carlos-mendez-drug-cartel-to-church-planter", name: "Carlos Mendez", flag: "🇨🇴", category: "Redemption", categoryColor: "#10B981" },
      { title: "I Gave My Savings to a Faith Preacher. What I Lost — and What God Gave Back.", slug: "samuel-mwangi-from-prosperity-gospel-to-grace", name: "Samuel Mwangi", flag: "🇰🇪", category: "Theology & Transformation", categoryColor: "#3B82F6" },
    ],
  },
  "ji-woo-park-kpop-idol-to-pastor": {
    name: "Ji-Woo Park",
    flag: "🇰🇷",
    location: "Seoul, South Korea",
    avatar: "JP",
    color: "#EC4899",
    title: "I Was a K-Pop Trainee Who Found Something More Worth Singing For.",
    excerpt: "I spent four years in a K-pop training program — the 5 AM practices, the weight monitoring, the pressure to be perfect. When I washed out at 19, I thought my life was over. I had no idea it was just beginning.",
    category: "Identity & Calling",
    categoryColor: "#EC4899",
    readTime: "7 min",
    hearts: 4187,
    date: "May 15, 2026",
    content: [
      { type: "p", text: "I entered the training program at fifteen. K-pop training is not what most people imagine when they picture learning to sing — it is a total institution, closer to elite military preparation than to music school. We practiced from 5 AM to 10 PM. Our weight was monitored weekly. Our social media was managed by the company. Our friendships outside the program were quietly discouraged. I gave everything to it, gladly, because I genuinely believed that becoming an idol was the highest thing I could do with my life. My worth was my performance score. My identity was my rank among the trainees." },
      { type: "p", text: "They let me go at nineteen. The phrase they use is 'contract not renewed,' which is a clean way of saying that after four years, they had decided I was not commercially viable. I walked out of the building with my belongings in a bag and stood on the street in Seoul and felt nothing — and then felt everything all at once. I had no qualifications, no social network outside the program, no sense of self that wasn't built entirely around a career I no longer had. For six months I barely left my apartment. My parents didn't know what to say. I didn't either." },
      { type: "h2", text: "A Friend, A Small Church" },
      { type: "p", text: "A friend from my school years — someone I had mostly lost touch with during the training years — invited me to her church. I went because I had nothing else to do on a Sunday and I wanted to see her. The church was small, maybe eighty people, meeting in a rented space above a convenience store in Mapo-gu. The pastor that morning preached from Psalm 139. He read verse 14 aloud: 'I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.' He asked: what does it mean that you were made — not assembled, not optimized, but made — by someone who considered you wonderful before you could perform?" },
      { type: "quote", text: "The idol industry tells you your worth is in your face and your voice. The Gospel told me my worth was decided before I was born.", attribution: "Ji-Woo Park" },
      { type: "p", text: "I cried for most of the sermon. Not dramatically — I just couldn't stop my eyes from leaking. The idea that my worth had been established before my first practice session, before any score, before any audition — was genuinely disorienting. The K-pop world had given me a very precise framework for measuring human value, and it was entirely external. The Gospel was offering something that could not be taken away by a company's commercial decision. I wasn't ready to fully believe it that morning. But I kept going back." },
      { type: "h2", text: "Now" },
      { type: "p", text: "I am 26 now and I lead worship at that same small church above the convenience store. The congregation has grown to about 200. I also run a youth ministry for teenagers — many of them with dreams of entertainment industry careers — and what I tell them is honest: pursue your gifts and pursue them hard. But build your identity somewhere that can't be revoked. I still sing every Sunday. I have never sung for anything that mattered more." },
    ],
    related: [
      { title: "Widowed at 28 with Three Children. How Faith Became My Only Floor.", slug: "amara-osei-widowed-at-28", name: "Amara Osei", flag: "🇬🇭", category: "Grief & Restoration", categoryColor: "#6B4FBB" },
      { title: "I Deconstructed My Faith — and Then Found It Again, Better", slug: "lydia-bohm-deconstruction", name: "Lydia Böhm", flag: "🇩🇪", category: "Deconstruction", categoryColor: "#6B4FBB" },
    ],
  },
  "samuel-mwangi-from-prosperity-gospel-to-grace": {
    name: "Samuel Mwangi",
    flag: "🇰🇪",
    location: "Nairobi, Kenya",
    avatar: "SM",
    color: "#3B82F6",
    title: "I Gave My Savings to a Faith Preacher. What I Lost — and What God Gave Back.",
    excerpt: "For eight years I was fully sold on prosperity theology. I gave until it hurt — and when the blessing didn't come, I nearly walked away from God entirely. Then someone handed me a book that changed everything.",
    category: "Theology & Transformation",
    categoryColor: "#3B82F6",
    readTime: "9 min",
    hearts: 2891,
    date: "May 12, 2026",
    content: [
      { type: "p", text: "The church I joined at twenty-two was everything I had ever wanted in a community. It was alive — I mean that literally, physically alive in a way that most churches I had attended were not. The music was extraordinary. The people were warm and generous and genuinely caring. The pastor was brilliant and funny and clearly believed every word he preached. And what he preached, consistently and compellingly, was that God wanted his people to prosper — financially, professionally, physically — and that faith was the mechanism by which prosperity was unlocked. I believed it completely." },
      { type: "p", text: "The theology of seed-faith is precise in its logic: you give sacrificially, you speak blessing over your giving, and God multiplies your return. I gave my first month's salary. I gave when I was behind on rent. I gave at every special offering, every prophetic moment, every call for those who were 'believing for breakthrough.' The pastor would say, 'Your harvest is tied to your seed,' and I would feel conviction and faith simultaneously. Over eight years, I gave approximately four hundred thousand Kenyan shillings — money I did not have — into offerings that promised returns that never came." },
      { type: "h2", text: "The Moment I Saw It Clearly" },
      { type: "p", text: "I was sitting in the service when I noticed the giving pattern with new eyes. The pastor was again calling for those believing for a financial miracle to come forward — but this time, for the first time, I watched his face while people walked up. There was something there — not malice exactly, but calculation. I started doing the mathematics in my head. I started asking questions I had never allowed myself to ask. I left that service and did not return. The grief of that departure was real. I wasn't grieving the theology — I was grieving the community, the music, the belonging. Those things had been genuine. The financial doctrine built on top of them had been exploitation." },
      { type: "quote", text: "I thought I was buying blessings. Turns out, grace can't be bought. That was the most disorienting and liberating thing I ever learned.", attribution: "Samuel Mwangi" },
      { type: "p", text: "The crisis of faith that followed was the most dangerous period of my life spiritually. I had conflated the prosperity gospel with Christianity itself, so when the former collapsed, it felt like God had collapsed with it. I stopped praying. I stopped reading Scripture. I told myself I had been a fool and that the whole enterprise was fraud. A colleague — a quiet man, not evangelical, Anglican — noticed I was struggling and handed me a copy of Dietrich Bonhoeffer's 'The Cost of Discipleship.' He said nothing about my situation. He just handed me the book." },
      { type: "h2", text: "Grace, Rediscovered" },
      { type: "p", text: "Bonhoeffer's central argument is that cheap grace — grace without discipleship, grace without cost, grace without the cross — is the enemy of the church. But real grace, costly grace, is free. It cannot be purchased or activated by a seed offering. It is given. That distinction — grace as gift rather than transaction — dismantled and rebuilt my theology from the foundation. I found a grace-based church in Westlands and have been part of it for three years. I no longer give because I expect a return. I give because I have already received everything. The order of those two things is, it turns out, the whole difference." },
    ],
    related: [
      { title: "I Was a K-Pop Trainee Who Found Something More Worth Singing For.", slug: "ji-woo-park-kpop-idol-to-pastor", name: "Ji-Woo Park", flag: "🇰🇷", category: "Identity & Calling", categoryColor: "#EC4899" },
      { title: "Widowed at 28 with Three Children. How Faith Became My Only Floor.", slug: "amara-osei-widowed-at-28", name: "Amara Osei", flag: "🇬🇭", category: "Grief & Restoration", categoryColor: "#6B4FBB" },
    ],
  },
  "lydia-bohm-deconstruction": {
    name: "Lydia Böhm",
    flag: "🇩🇪",
    location: "Berlin, Germany",
    avatar: "LB",
    color: "#6B4FBB",
    title: "I Deconstructed My Faith — and Then Found It Again, Better",
    excerpt: "I left evangelical Christianity at 24. I was done. Four years later, I walked back in.",
    category: "Deconstruction",
    categoryColor: "#6B4FBB",
    readTime: "11 min",
    hearts: 6104,
    date: "March 28, 2026",
    content: [
      { type: "p", text: "At 24, I had a list of grievances with my faith. They weren't shallow. They were the kinds of questions I had been building since I was fourteen and first noticed that some of what I had been taught didn't hold together under honest scrutiny." },
      { type: "p", text: "I left. Not quietly. I wrote a long blog post — the kind that was popular in certain circles in the early deconstruction wave — explaining all the reasons evangelical Christianity was intellectually bankrupt, morally compromised, and emotionally abusive. I got a lot of traffic. I got a lot of sympathetic replies from people going through the same thing. I felt vindicated." },
      { type: "h2", text: "Four Years of Not Finding an Alternative" },
      { type: "p", text: "Here's what nobody tells you about deconstruction: it's much easier to leave something than to arrive somewhere. I had a very clean picture of what I didn't believe. I had no picture at all of what I did believe, or what a life built on something else would look like." },
      { type: "quote", text: "You have made us for yourself, O Lord, and our heart is restless until it rests in you.", attribution: "Augustine of Hippo, Confessions" },
      { type: "p", text: "I tried secular humanism. I found it intellectually honest but emotionally thin. I read a lot of Camus. I appreciated his honesty. I didn't find what I needed. I tried Buddhism for about eight months. The practices helped. But I kept finding myself talking to the universe, and the universe wasn't answering." },
      { type: "h2", text: "What Brought Me Back" },
      { type: "p", text: "What brought me back wasn't arguments, though arguments helped. It was a person. A priest in Berlin — not evangelical, Anglican — who was willing to sit with all my questions without needing them to resolve immediately. He never told me what to think. He kept asking better questions than mine." },
      { type: "p", text: "He gave me C.S. Lewis's 'Surprised by Joy.' Then Alvin Plantinga. Then N.T. Wright. I encountered a version of Christianity I had genuinely never met — intellectually serious, historically grounded, and honest about its own complexity." },
      { type: "p", text: "I walked back into a church at 28. It was awkward. Some of my old community were suspicious of me. Some of my new secular friends were baffled. But I had arrived somewhere. Not where I started — somewhere better. Somewhere that had been tested by four years of genuine doubt and hadn't collapsed." },
    ],
    related: [
      { title: "From Drug Cartel Enforcer to Church Planter", slug: "carlos-mendez-drug-cartel-to-church-planter", name: "Carlos Mendez", flag: "🇨🇴", category: "Redemption", categoryColor: "#10B981" },
      { title: "Raised Buddhist, Found Christ at 31", slug: "ji-woo-park-buddhist-to-christian", name: "Ji-Woo Park", flag: "🇰🇷", category: "Faith Transition", categoryColor: "#EC4899" },
    ],
  },
  "isabella-ferreira-mozambique-missions": {
    name: "Isabella Ferreira",
    flag: "🇧🇷",
    location: "São Paulo, Brazil / Maputo, Mozambique",
    avatar: "IF",
    color: "#00FF88",
    title: "We Sold Everything and Moved to Mozambique. Here's Year Three.",
    excerpt: "Missions sounds romantic until you're actually there — sick, broke, questioning everything. This is an honest account of what long-term missions actually looks like from the inside.",
    category: "Missions",
    categoryColor: "#00FF88",
    readTime: "16 min",
    hearts: 2934,
    date: "May 12, 2026",
    content: [
      { type: "p", text: "When my husband Rafael and I announced we were leaving São Paulo to plant a church in Mozambique, we got two kinds of responses. The first was admiration — people said we were so brave, so surrendered, so anointed. The second kind, mostly from people who had actually done long-term missions, was a more knowing look. 'Call us in year two,' said one veteran missionary. 'We'll talk then.'" },
      { type: "p", text: "Year two nearly ended us. Not the church plant — us, personally." },
      { type: "h2", text: "What Nobody Tells You Before You Go" },
      { type: "p", text: "Nobody tells you about the parasites. Nobody tells you about the bureaucratic maze of visas and work permits and the months you'll spend in legal limbo. Nobody tells you that fundraising support doesn't guarantee your mental health funding, and that you'll burn out quietly while still sending newsletters full of victories back home." },
      { type: "p", text: "Nobody tells you that cross-cultural church planting requires you to die to almost every instinct you have about how church works, how relationships work, how leadership works — because all of those instincts are culturally encoded, not biblically encoded. The deconstruction isn't just of bad theology. It's of good theology held too confidently in a context that reveals its limitations." },
      { type: "quote", text: "I have learned, in whatever state I am, to be content. I know how to be abased, and I know how to abound.", attribution: "Philippians 4:11-12" },
      { type: "h2", text: "Year Three: What Changed" },
      { type: "p", text: "We have 34 people in our church now. That sounds small unless you know what 34 people in Maputo's Mafalala district represents — 34 people who were not in a faith community, 34 people hearing the Gospel in their heart language, 34 people who pray for each other and share meals and show up when the other's roof leaks." },
      { type: "p", text: "What changed in year three is that we stopped performing missions and started being missionaries. We stopped sending reports that made things sound more victorious than they were. We started telling our sending church the honest story: this is hard, we are sometimes discouraged, we don't see breakthrough in the timeline we expected, and we are still exactly where God told us to be." },
      { type: "p", text: "The most important thing I've learned in three years: the point is not the harvest. The point is faithfulness. The harvest belongs to God. The planting belongs to us." },
    ],
    related: [
      { title: "From Drug Cartel Enforcer to Church Planter", slug: "carlos-mendez-drug-cartel-to-church-planter", name: "Carlos Mendez", flag: "🇨🇴", category: "Redemption", categoryColor: "#10B981" },
      { title: "Widowed at 28", slug: "amara-osei-widowed-at-28", name: "Amara Osei", flag: "🇬🇭", category: "Grief & Restoration", categoryColor: "#F59E0B" },
    ],
  },
  "david-osei-marriage-breakdown-grace": {
    name: "Rev. David Osei",
    flag: "🇬🇭",
    location: "Kumasi, Ghana",
    avatar: "DO",
    color: "#EF4444",
    title: "My Wife Left Me While I Was Leading the Church. God Was In It.",
    excerpt: "Pastoral ministry has a way of hiding your deepest wounds behind a pulpit. The breakdown of my marriage was the most painful thing I've ever experienced — and the most formative.",
    category: "Marriage & Restoration",
    categoryColor: "#EF4444",
    readTime: "13 min",
    hearts: 4502,
    date: "May 5, 2026",
    content: [
      { type: "p", text: "I will not use my wife's name here. She has asked me not to, and I respect that. What I will say is that when she left, we had been married for nine years, and I had been so busy building the church that I had almost forgotten to build the marriage." },
      { type: "p", text: "She didn't leave for another man. She left for herself — for the version of herself I had slowly crowded out with my calling. In the letter she left, she wrote: 'You are a wonderful pastor. You are a good man. But I have not been seen by you in years.'" },
      { type: "h2", text: "Leading a Church While Your Marriage Collapses" },
      { type: "p", text: "I preached the Sunday after she left. God forgive me, I preached. I smiled. I shook hands. I told people God was good. And he is — but that Sunday I was performing faith, not living it. I have confessed that to my congregation since, and their grace has been immense." },
      { type: "p", text: "The pastoral isolation that followed was complete. I couldn't be honest with my elders because I was their senior pastor. I couldn't be honest with my congregation because they depended on me. I called a pastor friend in Accra and wept for the first time in years. He came and stayed with me for three days." },
      { type: "quote", text: "He who finds a wife finds a good thing and obtains favor from the Lord. But also: iron sharpens iron, and one man sharpens another.", attribution: "Proverbs 18:22, 27:17" },
      { type: "h2", text: "The Reconciliation — Honest and Incomplete" },
      { type: "p", text: "My wife and I reconciled eighteen months later. I want to be honest: the reconciliation was not because I suddenly became the man she needed. It was because she chose grace when she didn't have to, and because I finally entered counseling and stopped treating my ministry as an excuse not to address my emotional unavailability." },
      { type: "p", text: "We are better now than we were before the crisis. I hate that it took a crisis. I wish I had built the marriage with the same intentionality I built the church. I teach on marriage differently now. I'm more honest from the pulpit about how hard it is, and less theoretical about how it works." },
      { type: "p", text: "The thing God was doing in it — the thing I couldn't see at the time — was breaking the idol I'd made of my ministry. I had confused the Kingdom with my church. I had confused my calling with my identity. The breakdown dismantled all of that. I am a pastor who is also a husband. In that order." },
    ],
    related: [
      { title: "Widowed at 28", slug: "amara-osei-widowed-at-28", name: "Amara Osei", flag: "🇬🇭", category: "Grief & Restoration", categoryColor: "#F59E0B" },
      { title: "How Deconstruction Led to Deeper Faith", slug: "lydia-bohm-deconstruction", name: "Lydia Böhm", flag: "🇩🇪", category: "Deconstruction", categoryColor: "#6B4FBB" },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(stories).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = stories[slug];
  if (!story) return { title: "Story — Vine" };
  return {
    title: `${story.title} — Vine`,
    description: story.excerpt,
  };
}

export default async function StoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = stories[slug];

  if (!story) {
    return (
      <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
        <Navbar />
        <div className="page-body pb-20 text-center max-w-2xl mx-auto px-4">
          <p className="text-6xl mb-6">📭</p>
          <h1 className="text-3xl font-black mb-4">Story not found</h1>
          <a href="/stories" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-black" style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}>
            Browse all stories
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <a href="/stories" className="inline-flex items-center gap-2 text-sm mb-8" style={{ color: "#6A6A88" }}>
            <ArrowLeft size={14} /> All Stories
          </a>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `${story.categoryColor}15`, color: story.categoryColor }}>
                {story.category}
              </span>
              <span className="text-xs" style={{ color: "#4A4A68" }}>⭐ Featured Story</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black mb-5 leading-tight" style={{ color: "#F2F2F8" }}>{story.title}</h1>

            {/* Author */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center font-black"
                style={{ background: `${story.color}25`, color: story.color, border: `2px solid ${story.color}30`, fontSize: "0.9rem" }}
              >
                {story.avatar}
              </div>
              <div>
                <p className="font-black text-base" style={{ color: "#F2F2F8" }}>{story.name} {story.flag}</p>
                <p className="text-sm flex items-center gap-1" style={{ color: "#6A6A88" }}>
                  <Globe size={12} /> {story.location}
                </p>
                <div className="flex items-center gap-3 mt-1 text-xs" style={{ color: "#4A4A68" }}>
                  <span>{story.date}</span>
                  <span className="flex items-center gap-1"><Clock size={10} /> {story.readTime} read</span>
                  <span className="flex items-center gap-1"><Heart size={10} style={{ color: "#EC4899" }} /> {story.hearts.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px mb-10" style={{ background: `linear-gradient(90deg, ${story.color}40, transparent)` }} />

          {/* Content */}
          <div className="mb-12">
            {story.content.map((block, i) => {
              if (block.type === "h2") return (
                <h2 key={i} className="text-2xl font-black mt-10 mb-4" style={{ color: "#F2F2F8" }}>{block.text}</h2>
              );
              if (block.type === "p") return (
                <p key={i} className="text-base leading-relaxed mb-6" style={{ color: "#C0C0D8", lineHeight: "1.9" }}>{block.text}</p>
              );
              if (block.type === "quote") return (
                <blockquote key={i} className="my-8 p-6 rounded-2xl" style={{ background: "rgba(0,255,136,0.06)", borderLeft: `3px solid ${story.color}` }}>
                  <p className="text-lg italic mb-3" style={{ color: "#00DD77" }}>&ldquo;{block.text}&rdquo;</p>
                  {block.attribution && <p className="text-sm font-bold" style={{ color: "#007A33" }}>— {block.attribution}</p>}
                </blockquote>
              );
              return null;
            })}
          </div>

          {/* Actions */}
          <StoryActions initialHearts={story.hearts} />

          {/* Submit your own */}
          <div className="rounded-2xl p-6 mb-10 text-center"
            style={{ background: "linear-gradient(135deg, rgba(0,255,136,0.06) 0%, rgba(107,79,187,0.06) 100%)", border: "1px solid rgba(0,255,136,0.15)" }}>
            <p className="text-sm italic mb-3" style={{ color: "#8A8AA8" }}>
              &ldquo;They triumphed over him by the blood of the Lamb and by the word of their testimony.&rdquo; — Revelation 12:11
            </p>
            <a href="/stories" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-black"
              style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}>
              Share Your Story <ChevronRight size={14} />
            </a>
          </div>

          {/* Related */}
          {story.related.length > 0 && (
            <div>
              <h3 className="font-black text-lg mb-5" style={{ color: "#F2F2F8" }}>More Stories</h3>
              <div className="space-y-3">
                {story.related.map((r) => (
                  <a key={r.slug} href={`/stories/${r.slug}`}
                    className="flex items-center justify-between p-4 rounded-xl group transition-all hover:bg-white/[0.03]"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", textDecoration: "none" }}
                  >
                    <div>
                      <span className="text-xs font-bold" style={{ color: r.categoryColor }}>{r.category}</span>
                      <p className="font-bold text-sm group-hover:text-[#00FF88] transition-colors" style={{ color: "#F2F2F8" }}>{r.title}</p>
                      <p className="text-xs" style={{ color: "#4A4A68" }}>{r.name} {r.flag}</p>
                    </div>
                    <ChevronRight size={16} style={{ color: "#4A4A68" }} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
