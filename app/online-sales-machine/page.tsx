import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How I Discovered the 7-Part Sales System Behind Almost Every Successful Online Business",
  description:
    "The real reason most people never make consistent money online — and the simple 7-part system the successful ones quietly run.",
  robots: { index: true, follow: true },
};

/*
=====================================================================
  THE ONLINE SALES MACHINE(TM) — long-form blog-style sales route
  URL: /online-sales-machine
=====================================================================

  >>> BEFORE YOU PUBLISH, DO 3 THINGS: <<<

  1. CHECKOUT LINK: Find every  href="REPLACE_WITH_CHECKOUT_URL"
     and replace it with your Selar / Nestuge checkout URL.
     (5 CTA buttons. Use Find & Replace.)

  2. IMAGES: Each grey box is a <div className="osm-ph"> placeholder.
     Search this file for "osm-ph" (or "INSERT") to find them all.
     To use a real image, drop the file in /public and replace the whole
     <div className="osm-ph">...</div> with an img tag, e.g.
         <img src="/osm-hero.jpg" alt="Azeez Agbona" className="osm-ph-img" />
     (.osm-ph-img keeps it responsive. You can ignore Next's "use next/image"
      lint hint on a static marketing page, or switch to next/image if you prefer.)

  3. PRICE + NUMBERS: Search for "EDIT" to find every price, count,
     and scarcity number you should set to your real values.

  HONESTY / COMPLIANCE NOTE:
  The testimonials, buyer-count and "spots left" numbers are WRITTEN
  PLACEHOLDERS so you can see the layout. Replace them with REAL
  testimonials and REAL numbers before going live — fake reviews and
  fake scarcity are illegal (FTC / ASA / FCCPC) and break trust.
=====================================================================
*/

const css = `
.osm-page * { margin: 0 !important; padding: 0 !important; box-sizing: border-box !important; }

/* force the whole document white on this route, even in dark mode */
html.dark body, body { background: #FFFFFF !important; }

.osm-page {
  background: #FFFFFF !important;
  color: #333333 !important;
  font-family: 'Roboto', 'Lato', Arial, sans-serif !important;
  font-size: 16px !important;
  line-height: 1.7 !important;
  min-height: 100vh !important;
  -webkit-font-smoothing: antialiased !important;
}

.osm-wrap {
  max-width: 800px !important;
  margin: 0 auto !important;
  padding: 0 20px 60px 20px !important;
  background: #FFFFFF !important;
  text-align: left !important;
}

.osm-page p { margin: 0 0 18px 0 !important; color: #333333 !important; font-size: 16px !important; line-height: 1.75 !important; }
.osm-page h1, .osm-page h2, .osm-page h3 { color: #111111 !important; line-height: 1.3 !important; }
.osm-page h1 { font-size: 30px !important; font-weight: 700 !important; margin: 26px 0 10px 0 !important; }
.osm-page h2 { font-size: 24px !important; font-weight: 700 !important; margin: 40px 0 14px 0 !important; }
.osm-page h3 { font-size: 19px !important; font-weight: 700 !important; margin: 26px 0 10px 0 !important; }
.osm-page .italic { font-style: italic !important; }
.osm-page .center { text-align: center !important; }
.osm-page b, .osm-page strong { color: #111111 !important; font-weight: 700 !important; }
.osm-page ul { margin: 0 0 20px 22px !important; }
.osm-page li { margin: 0 0 12px 0 !important; color: #333333 !important; line-height: 1.7 !important; }

.osm-banner { background: #0B3D2E !important; padding: 18px 16px !important; text-align: center !important; }
.osm-banner .name { color: #FFCC00 !important; font-style: italic !important; font-weight: 700 !important; font-size: 20px !important; line-height: 1.3 !important; }
.osm-banner .tag { color: #FFCC00 !important; font-style: italic !important; font-size: 13px !important; display: block !important; margin-top: 4px !important; }

.osm-byline { color: #888888 !important; font-style: italic !important; font-size: 13px !important; margin: 0 0 22px 0 !important; }

.osm-ph { display: block !important; width: 100% !important; max-width: 320px !important; margin: 24px auto !important; background: #EFEFEF !important; border: 2px dashed #BBBBBB !important; color: #777777 !important; text-align: center !important; font-size: 13px !important; padding: 40px 16px !important; line-height: 1.5 !important; }
.osm-ph.big { max-width: 420px !important; }
.osm-ph-img { display: block !important; width: 100% !important; max-width: 320px !important; height: auto !important; margin: 24px auto !important; }
.osm-ph-img.big { max-width: 420px !important; }
.osm-page img { max-width: 100% !important; height: auto !important; }

.osm-promise { text-align: center !important; font-size: 22px !important; font-weight: 700 !important; color: #0B3D2E !important; margin: 34px 0 !important; line-height: 1.4 !important; }
.osm-flow { background: #F4F8F5 !important; border-left: 5px solid #0B3D2E !important; padding: 18px 20px !important; margin: 24px 0 !important; font-weight: 700 !important; color: #0B3D2E !important; font-size: 17px !important; line-height: 1.6 !important; text-align: center !important; }

.osm-cta { display: block !important; width: 100% !important; background: #157347 !important; color: #FFFFFF !important; text-align: center !important; text-decoration: none !important; font-weight: 700 !important; font-size: 19px !important; padding: 18px 20px !important; border-radius: 8px !important; margin: 28px 0 !important; border: none !important; box-shadow: 0 4px 0 #0F5132 !important; line-height: 1.4 !important; }
.osm-cta small { display: block !important; font-weight: 400 !important; font-size: 13px !important; color: #E7F4EC !important; margin-top: 4px !important; }

.osm-strike { color: #B00020 !important; text-decoration: line-through !important; font-weight: 700 !important; }
.osm-pricebox { text-align: center !important; margin: 28px 0 !important; }
.osm-pricebox .now { font-size: 44px !important; font-weight: 700 !important; color: #157347 !important; line-height: 1.1 !important; }
.osm-pricebox .was { font-size: 20px !important; }
.osm-scarcity { text-align: center !important; font-weight: 700 !important; color: #B00020 !important; font-size: 17px !important; margin: 18px 0 !important; }

.osm-tsection { background: #F9F9F9 !important; padding: 24px 16px !important; margin: 30px -20px !important; }
.osm-tsection h2 { text-align: center !important; margin-top: 6px !important; }
.osm-comment { background: #FFFFFF !important; border-left: 4px solid #0B3D2E !important; padding: 16px 18px !important; margin: 0 auto 16px auto !important; max-width: 760px !important; box-shadow: 0 1px 3px rgba(0,0,0,0.08) !important; }
.osm-chead { display: flex !important; align-items: center !important; margin-bottom: 8px !important; }
.osm-avatar { width: 44px !important; height: 44px !important; border-radius: 50% !important; color: #FFFFFF !important; font-weight: 700 !important; font-size: 16px !important; display: flex !important; align-items: center !important; justify-content: center !important; margin-right: 12px !important; flex: 0 0 44px !important; }
.osm-av-green { background: #0B3D2E !important; }
.osm-av-red { background: #B00020 !important; }
.osm-av-blue { background: #1F6FB2 !important; }
.osm-av-purple { background: #7A4F9C !important; }
.osm-av-orange { background: #C9772A !important; }
.osm-cname { font-weight: 700 !important; color: #111111 !important; font-size: 15px !important; }
.osm-cwhere { color: #777777 !important; font-size: 12px !important; }
.osm-stars { color: #F5A623 !important; font-size: 14px !important; letter-spacing: 1px !important; }
.osm-ctext { color: #333333 !important; font-size: 15px !important; line-height: 1.6 !important; margin: 0 !important; }
.osm-pager { text-align: center !important; margin: 10px 0 !important; }
.osm-pager span { display: inline-block !important; border: 1px solid #CCCCCC !important; padding: 6px 12px !important; margin: 0 3px !important; color: #555555 !important; font-size: 14px !important; border-radius: 4px !important; }
.osm-pager span.on { background: #0B3D2E !important; color: #FFFFFF !important; border-color: #0B3D2E !important; }

.osm-cform { max-width: 760px !important; margin: 16px auto 0 auto !important; background: #FFFFFF !important; padding: 16px !important; border: 1px solid #E5E5E5 !important; border-radius: 6px !important; }
.osm-cform-h { margin-bottom: 10px !important; font-weight: 700 !important; color: #111111 !important; }
.osm-cform input, .osm-cform textarea { width: 100% !important; border: 1px solid #CCCCCC !important; padding: 10px !important; margin-bottom: 10px !important; font-size: 14px !important; border-radius: 4px !important; font-family: inherit !important; }
.osm-cform button { background: #0B3D2E !important; color: #FFFFFF !important; border: none !important; padding: 10px 18px !important; font-weight: 700 !important; border-radius: 4px !important; cursor: pointer !important; }

.osm-wa { max-width: 420px !important; margin: 24px auto !important; background: #0B141A !important; border-radius: 12px !important; overflow: hidden !important; }
.osm-wahead { background: #1F2C34 !important; padding: 12px 14px !important; display: flex !important; align-items: center !important; }
.osm-wadot { width: 38px !important; height: 38px !important; border-radius: 50% !important; background: #2AABEE !important; margin-right: 10px !important; flex: 0 0 38px !important; display: flex !important; align-items: center !important; justify-content: center !important; color: #FFFFFF !important; font-weight: 700 !important; }
.osm-waname { color: #FFFFFF !important; font-weight: 700 !important; font-size: 15px !important; line-height: 1.2 !important; }
.osm-wamembers { color: #8696A0 !important; font-size: 12px !important; }
.osm-wabody { height: 300px !important; overflow: hidden !important; position: relative !important; padding: 10px 0 !important; }
.osm-wascroll { animation: osmWaScroll 22s linear infinite alternate !important; padding: 0 12px !important; }
@keyframes osmWaScroll { 0% { transform: translateY(0); } 100% { transform: translateY(-180px); } }
.osm-msg { background: #1F2C34 !important; color: #E9EDEF !important; border-radius: 8px !important; padding: 8px 10px !important; margin-bottom: 10px !important; max-width: 80% !important; font-size: 14px !important; line-height: 1.4 !important; }
.osm-msg .who { color: #53BDEB !important; font-weight: 700 !important; font-size: 13px !important; display: block !important; }
.osm-msg .time { color: #8696A0 !important; font-size: 11px !important; float: right !important; margin-top: 2px !important; }
.osm-paid { display: inline-block !important; background: #075E54 !important; color: #FFFFFF !important; font-size: 11px !important; font-weight: 700 !important; padding: 1px 7px !important; border-radius: 10px !important; margin-left: 6px !important; }
.osm-msg.me { background: #005C4B !important; margin-left: auto !important; }

.osm-guarantee { border: 3px solid #0B3D2E !important; border-radius: 10px !important; padding: 22px !important; margin: 30px 0 !important; background: #F4F8F5 !important; }
.osm-guarantee h2 { margin-top: 0 !important; }
.osm-twochoice { background: #FFF8E6 !important; border: 1px solid #F5D78A !important; border-radius: 10px !important; padding: 22px !important; margin: 30px 0 !important; }
.osm-copy { text-align: center !important; font-style: italic !important; color: #999999 !important; font-size: 13px !important; margin-top: 30px !important; }
.osm-disclaimer { background: #FAFAFA !important; border: 1px solid #E5E5E5 !important; border-radius: 6px !important; padding: 12px 14px !important; margin: 18px 0 !important; color: #777777 !important; font-size: 12px !important; line-height: 1.6 !important; }

@media (max-width: 600px) {
  .osm-page h1 { font-size: 25px !important; }
  .osm-page h2 { font-size: 21px !important; }
  .osm-pricebox .now { font-size: 36px !important; }
  .osm-banner .name { font-size: 17px !important; }
}
`;

export default function OnlineSalesMachinePage() {
  const CHECKOUT = "REPLACE_WITH_CHECKOUT_URL";

  return (
    <div className="osm-page">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* SECTION 1 — BLOG HEADER BANNER */}
      <div className="osm-banner">
        <span className="name">The Quiet Build — Notes by Azeez Agbona</span>
        <span className="tag">Helping Entrepreneurs Build Revenue Systems Online</span>
      </div>

      <div className="osm-wrap">
        {/* SECTION 2 — STORY HEADLINE
            Alternate headlines to swap in:
            2. "The Secret of Online Sales Nobody Ever Told Me About"
            3. "Why Most People Never Make Money Online (Even With a Good Product)"
            4. "I Studied 40 Online Businesses That Make Money. They All Ran the Same 7 Steps."
            5. "The Day I Realised I Didn't Need Another Course — I Needed a System" */}
        <h1>
          How I Discovered the 7-Part Sales System Behind Almost Every Successful
          Online Business (After 8 Years and a Painful Amount of Wasted Money)
        </h1>
        <p className="osm-byline">1 June 2026 &nbsp;|&nbsp; posted by Admin</p>

        {/* SECTION 3 — HERO IMAGE PLACEHOLDER
            INSERT HERO IMAGE HERE: casual, personal-looking photo of Azeez Agbona,
            ~200x300px. Save to /public and set src below (e.g. src="/osm-hero.jpg"). */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="osm-ph-img" src="/online_sales_secret/hero.png" alt="Azeez Agbona" />

        {/* SECTION 4 — OPENING HOOK */}
        <p>Let me guess how your last two years went.</p>
        <p>You started something. A small business. A service. Maybe a digital product or a page you posted online with real hope in your chest.</p>
        <p>You told yourself <span className="italic">this</span> was the one.</p>
        <p>You built the website. You picked the colours. You wrote the bio. You posted the content — consistently, for a while.</p>
        <p>Then you waited.</p>
        <p>And nothing happened.</p>
        <p>So you tried harder. You bought the course everybody was talking about. You ran a few ads. You got some likes. Maybe even a few clicks. <span className="italic">Finally,</span> you thought, <span className="italic">it&apos;s working.</span></p>
        <p>But the clicks didn&apos;t turn into customers. The followers didn&apos;t turn into money. The &quot;interested&quot; people went quiet the moment you mentioned price.</p>
        <p>And late at night you found yourself doing the maths again. <span className="italic">How is this person with a worse product than mine making real money, while I&apos;m still here?</span></p>
        <p>You start to wonder if it&apos;s you. If maybe you&apos;re just not built for this. If maybe the people winning online know some secret you were never told.</p>
        <p>I know that feeling because I lived in it for the better part of eight years.</p>
        <p>And here is the part nobody says out loud: it was <span className="italic">never</span> about working harder. I worked plenty hard. It was about one thing I didn&apos;t have — and didn&apos;t even know I was missing.</p>
        <p>Maybe you&apos;ve already tried a few things yourself. Affiliate marketing. Dropshipping. Crypto. Forex. Faceless YouTube. One &quot;online business&quot; after another.</p>
        <p>And it still hasn&apos;t clicked.</p>
        <p>If that&apos;s you, I&apos;m going to say something that sounds strange: <b>congratulations.</b></p>
        <p>Because you&apos;ve already paid the expensive tuition — you now know what doesn&apos;t work on its own. You&apos;re one missing piece away. And I&apos;m about to hand it to you.</p>
        <p><b>So drop everything you are doing right now and read every word of this. It is the conversation I wish someone had forced me to have in my first year.</b></p>

        {/* SECTION 5 — PROMISE */}
        <p className="osm-promise">Because I&apos;m about to show you the simple 7-part system that quietly changed everything for me — and that almost every business making real money online is already running, whether they can name it or not.</p>

        {/* SECTION 6 — AUTHORITY / ORIGIN TEASE */}
        <p>This system isn&apos;t new. That&apos;s the funny part.</p>
        <p>The biggest companies in the world have been running it for decades. Direct-response marketers were using it on paper, through the post, long before the internet existed. It just got dressed up in new words — &quot;funnels,&quot; &quot;automations,&quot; &quot;AI&quot; — so it feels complicated and expensive.</p>
        <p>It is not complicated. Once you see it, you cannot un-see it.</p>
        <p>Hi, my name is Azeez Agbona.</p>
        <p>And the first thing you should know about me is that I am <b>not</b> a guru. I&apos;m not here to sell you a lifestyle or a private jet rented for a photo. I&apos;m a regular guy from Lagos who spent years quietly losing money online before I figured out what I was actually doing wrong.</p>
        <p>I&apos;ve spent <b>15 years as a tech person</b> — building websites, software and systems for other people. And I spent the last <b>8 years</b> quietly pouring my own money and time into cracking the online money game.</p>
        <p>Here&apos;s something I want you to know up front: <b>I have never launched anything of my own before. This is my very first community.</b></p>
        <p>I&apos;m not a serial course-seller with 40 funnels running. I&apos;m someone who finally cracked it for himself — and decided it was time to stop keeping quiet.</p>

        {/* SECTION 7 — PERSONA IMAGE PLACEHOLDER
            INSERT SECOND PERSONA IMAGE HERE: a relaxed/personal photo, ~200x300px. */}
        <div className="osm-ph">PERSONA IMAGE — a second, more personal photo of Azeez (about 200×300px)</div>

        {/* SECTION 8 — FULL PERSONAL STORY (Azeez's real story) */}
        <h2>How it started</h2>
        <p>Back in 2020 I was working for a big company here in Ikeja, Lagos.</p>
        <p>I was collecting <b>₦70,000 a month.</b></p>
        <p>I was grateful for the job. But deep down, every single day, I had the same quiet feeling I couldn&apos;t shake: <span className="italic">I have so much more in me than this.</span></p>
        <p>And here&apos;s the part that confused me the most.</p>
        <p>On paper, I already had the skills.</p>
        <p>I could build a website from scratch. I could run ads. I could build software. People respected me for it.</p>
        <p>So I kept asking myself the same painful question: <span className="italic">if I can build all of this… why am I not making money from it?</span></p>

        <h3>I had every skill except the one that mattered</h3>
        <p>So I went searching for the missing link.</p>
        <p>I tried affiliate marketing. Dropshipping. Crypto. Forex. Faceless YouTube. One &quot;online business&quot; after another.</p>
        <p>I bought the courses. I followed the coaches. I did exactly what they said.</p>
        <p>And I kept slamming into the same invisible wall.</p>
        <p>I had the technical skill. I did the work. And the money still wasn&apos;t coming.</p>

        <h3>Then I realised what nobody tells you</h3>
        <p>Making money online is a <span className="italic">completely different ball game</span> from being skilled.</p>
        <p>And this is the part that made me angry when I finally saw it.</p>
        <p>Most coaches give you <b>90% of the information.</b></p>
        <p>The 90% that sounds good. The 90% that fills a course and looks impressive on a sales page.</p>
        <p>But they quietly keep the last <b>10%</b> — the part that actually makes the whole thing work — for themselves.</p>
        <p>That missing 10% is not another tactic. It&apos;s a <span className="italic">system.</span></p>
        <p>And without it, all the skill in the world just sits there… exactly like I was sitting there. Skilled. Busy. And broke.</p>

        <h3>The day it finally clicked</h3>
        <p>I will never forget the day I figured out the missing link.</p>
        <p>I almost ran mad. I&apos;m serious.</p>
        <p>Everything I had struggled with for years suddenly made sense in one single moment.</p>
        <p>All the wasted effort. All the &quot;good products&quot; that never sold. All the clicks that never became customers.</p>
        <p>It was never about more skill. More content. More hustle.</p>
        <p>It was about <b>one system</b> that ties everything together — the same system the people quietly winning online were running, while they handed the rest of us 90% of the puzzle and kept the rest.</p>
        <p>This is me, pouring my heart out, deciding to help the people who are struggling with money, stuck in a 9-5, who want to know how to <span className="italic">actually</span> build a system that works.</p>

        {/* THE SECRET — reframe of "trust" */}
        <h2>The secret nobody told me about</h2>
        <p>For years, everybody told me the same thing.</p>
        <p><span className="italic">&quot;People need to know you, like you and trust YOU before they&apos;ll ever buy from you.&quot;</span></p>
        <p>Build your personal brand. Show your face. Post every day for two years. <span className="italic">Then,</span> maybe, people will buy.</p>
        <p>I believed it. And it kept me stuck.</p>
        <p>Then one day, something happened that broke that belief completely.</p>
        <p>I sold a weight-loss product to a <b>total stranger</b> online. Someone in another country who had no idea who I was. Never saw my face. Never knew my name.</p>
        <p>They bought. And it wasn&apos;t a one-off — that single customer paid me a <b>$200 commission every single month.</b></p>
        <p>Then it happened again. And again. Buyers in <b>Canada, the UK, Australia</b> — not one of them knew me from Adam.</p>
        <p>That&apos;s when the real secret finally hit me:</p>
        <p className="osm-flow">People don&apos;t have to know, like or trust <span className="italic">you.</span> They have to trust the <span className="italic">system</span> that puts the right offer in front of the right person at the right moment.</p>
        <p>The belief gets built by the <span className="italic">machine</span> — the message, the proof, the offer — not by you spending two years begging strangers to like you first.</p>
        <p>Once I understood that, everything changed. I didn&apos;t need fame. I didn&apos;t need a huge following. I didn&apos;t even need them to know my name.</p>
        <p>I needed a machine.</p>

        {/* SYSTEM REVEAL */}
        <h2>Here is the missing link</h2>
        <p>Search online and you&apos;ll see this &quot;system&quot; drawn as a neat straight line:</p>
        <p className="osm-flow">TRAFFIC → LEADS → TRUST → OFFER → SALE → FOLLOW-UP → SCALE</p>
        <p>And that is exactly what it looks like… <span className="italic">on paper.</span></p>
        <p>It&apos;s the map of how a customer travels through the machine — the seven parts every consistent online business quietly has. In plain English:</p>
        <ul>
          <li><b>Traffic</b> — the right people find you.</li>
          <li><b>Leads</b> — you capture them instead of letting them vanish.</li>
          <li><b>Trust</b> — the system earns belief for you, with proof and the right message, so even a stranger feels safe to buy.</li>
          <li><b>Offer</b> — something in front of them they actually want.</li>
          <li><b>Sale</b> — buying made easy and obvious.</li>
          <li><b>Follow-Up</b> — &quot;not yet&quot; turned into &quot;yes,&quot; automatically.</li>
          <li><b>Scale</b> — once it works, you pour more in and it gives more back.</li>
        </ul>
        <p>But here is what almost nobody tells you — the thing that kept me stuck for 8 years:</p>
        <p className="osm-flow">That straight line is what you SEE. It is not how you BUILD it.</p>
        <p>The engineering process — the order you actually assemble these parts in — looks nothing like the diagram. Build it left-to-right, chasing traffic first the way I did, and you just pour money into a machine with no engine.</p>
        <p>The parts that actually make it work are nowhere near the front of that line. The order I build them in today is almost the <span className="italic">reverse</span> of what everybody guesses.</p>
        <p>That reverse-engineered build order <span className="italic">is</span> the secret — and it&apos;s the exact thing we install together, step by step, inside the community.</p>
        <p>Most people obsess over just one box — usually Traffic (&quot;I need more followers!&quot;) — while the parts that do the real work sit empty. That is the entire reason good people with good products stay broke online.</p>
        <p className="osm-flow">Your first $1,000 will come from hard work. Your next $100,000 will come from building a system that works — then you optimise and scale. Not more hard work. Smart work.</p>

        {/* WHO IT'S FOR / WHAT IT REALLY DOES */}
        <h2>What this really means for you</h2>
        <p>Forget the jargon for a second. Here is what the machine actually puts in your hands:</p>
        <p className="osm-flow">The power to wake up in the morning, pick almost anything to sell, and have people you&apos;ve never met buy it.</p>
        <p>This is the secret I spent <b>millions of naira</b> and 8 years to finally understand.</p>
        <p>You don&apos;t need to be a big brand. You don&apos;t need to be famous. You don&apos;t even need your own product.</p>
        <p>It works whether you&apos;re a <b>business owner</b> or a <b>student in your hostel.</b> Whether you&apos;re selling to someone down the road in Lagos or to someone in London who will never know your name.</p>
        <p>Look at wherever you are right now:</p>
        <ul>
          <li><b>You already have a product?</b> The machine turns it into consistent sales instead of the occasional lucky one.</li>
          <li><b>You only have an idea or a skill?</b> The machine shapes it into something people actually pay for.</li>
          <li><b>You have nothing of your own to sell yet?</b> Perfect — you sell <span className="italic">other people&apos;s</span> products and keep the commission. That is exactly how I made my first real money online: selling to a stranger I never met.</li>
        </ul>
        <p>That is the part nobody handed me. Once the machine is built, the question stops being <span className="italic">&quot;will anyone buy?&quot;</span> and quietly becomes <span className="italic">&quot;what do I want to sell next?&quot;</span></p>

        {/* PRODUCT REVEAL */}
        <h2>Then people started asking me how</h2>
        <p>Word got around. Friends of friends. People in my WhatsApp.</p>
        <p>The same three questions kept coming:</p>
        <p className="italic">&quot;How do I actually build this for my business?&quot;</p>
        <p className="italic">&quot;How do I apply it to what I sell specifically?&quot;</p>
        <p className="italic">&quot;How do I figure out which part of my machine is broken?&quot;</p>
        <p>For a while I answered everyone one by one. Long voice notes. Late-night calls. Eventually I couldn&apos;t keep up.</p>
        <p>So I sat down and put everything in one place — the full framework, the exact steps for each stage, the templates, the AI prompts, what to do, what to avoid, and how to know it&apos;s working.</p>
        <p>And instead of dropping yet another lonely PDF, I decided to build the one thing I never had for myself: a <b>community</b> where we install this system together, step by step.</p>
        <p>Introducing…</p>

        {/* PRODUCT MOCKUP PLACEHOLDER
            INSERT PRODUCT MOCKUP IMAGE HERE: 3D cover of THE ONLINE SALES MACHINE,
            ~768x1152px. Save to /public and set src. */}
        <div className="osm-ph big">PRODUCT MOCKUP — 3D cover of THE ONLINE SALES MACHINE (about 768×1152px)</div>

        <h2 className="center">THE ONLINE SALES MACHINE™</h2>
        <p className="center"><b>Everything you need for your breakthrough making money online.</b></p>
        <p className="center">How to turn almost any skill, service, idea, or product into a customer-generating revenue system — using proven marketing frameworks, AI, funnels, content and ads.</p>
        <p className="center">It&apos;s not a guide you read once and forget. It&apos;s the <b>room I wish I&apos;d had 8 years ago</b> — a community where we build the system together.</p>

        {/* WHAT'S INSIDE — COMMUNITY + MODULES */}
        <h2>What you get inside the community</h2>
        <p>Two things, really: the <b>step-by-step training</b> that builds your machine, and the <b>room of people</b> building theirs right alongside you.</p>

        <h3>The training roadmap — 8 straight-talking modules</h3>
        <p>No fluff, no 60-hour filler. Each one installs one part of your machine:</p>
        <ul>
          <li><b>Module 1 — The New Rules of Online Business.</b> Why the old &quot;post and pray&quot; approach quietly died, and the mindset shift that makes everything else click.</li>
          <li><b>Module 2 — Finding Profitable Markets.</b> How to choose a market that already wants to pay — so you stop pushing water uphill.</li>
          <li><b>Module 3 — Creating Irresistible Offers.</b> The exact recipe for an offer people feel almost rude saying no to.</li>
          <li><b>Module 4 — Building Funnels.</b> The simple stranger-to-buyer path, step by step. (You can build your first one this week.)</li>
          <li><b>Module 5 — Traffic Generation.</b> Free and paid ways to get the <span className="italic">right</span> people in — without burning money like I did.</li>
          <li><b>Module 6 — AI-Powered Marketing.</b> How to use AI to write, plan and create months of marketing in hours (with my exact prompts).</li>
          <li><b>Module 7 — Conversion Systems.</b> The trust-and-follow-up engine that turns &quot;maybe&quot; into &quot;paid.&quot;</li>
          <li><b>Module 8 — Scaling Revenue.</b> How to safely pour fuel on a machine that&apos;s already working.</li>
        </ul>

        <h3>The community itself</h3>
        <ul>
          <li><b>A room of people on the same mission</b> — so you&apos;re never building in isolation the way I had to for years.</li>
          <li><b>Direct access and support</b> when you get stuck on a specific part of your machine. <span className="italic">(EDIT: describe exactly what members get — group chat, weekly Q&amp;A, live calls, etc.)</span></li>
          <li><b>Accountability</b> that keeps you actually doing the work, instead of just collecting more information.</li>
        </ul>
        <p><b>And the best part?</b> You don&apos;t need a big following, you don&apos;t need to be a tech expert, and you don&apos;t need to burn money on ads to start. It&apos;s the same system that finally worked for me after 8 years — now laid out so you don&apos;t have to spend 8 years finding it.</p>

        {/* TESTIMONIALS — FIRST SET (PLACEHOLDER — replace with real reviews) */}
        <div className="osm-tsection">
          <h2>Real People. Real Results.</h2>

          <div className="osm-comment">
            <div className="osm-chead">
              <div className="osm-avatar osm-av-green">CO</div>
              <div>
                <div className="osm-cname">Chinedu Okafor</div>
                <div className="osm-cwhere">Lagos, Nigeria 🇳🇬 · 4 days ago</div>
              </div>
            </div>
            <div className="osm-stars">★★★★★</div>
            <p className="osm-ctext">Omo. I no go lie, I bought this one tire because I don buy plenty rubbish before. But this one different. The &quot;broken part&quot; idea alone open my eye — my own wahala was follow-up. Fixed am, and 3 old customers come back buy again this month. Worth am.</p>
          </div>

          <div className="osm-comment">
            <div className="osm-chead">
              <div className="osm-avatar osm-av-red">AM</div>
              <div>
                <div className="osm-cname">Ama Mensah</div>
                <div className="osm-cwhere">Accra, Ghana 🇬🇭 · 1 week ago</div>
              </div>
            </div>
            <div className="osm-stars">★★★★★</div>
            <p className="osm-ctext">I sell skincare and I was always doing ads with no results. This system showed me I had no trust step at all. I added the message sequence Azeez teaches and my sales doubled in about 6 weeks. Charley, this is real.</p>
          </div>

          <div className="osm-comment">
            <div className="osm-chead">
              <div className="osm-avatar osm-av-blue">JK</div>
              <div>
                <div className="osm-cname">James Kamau</div>
                <div className="osm-cwhere">Nairobi, Kenya 🇰🇪 · 1 week ago</div>
              </div>
            </div>
            <div className="osm-stars">★★★★★</div>
            <p className="osm-ctext">As a freelancer I always thought I needed more clients. Turns out my offer was the problem. Module 3 alone paid for this 50 times over. I now have a waiting list for the first time in my life.</p>
          </div>

          <div className="osm-comment">
            <div className="osm-chead">
              <div className="osm-avatar osm-av-purple">TN</div>
              <div>
                <div className="osm-cname">Thandiwe Ndlovu</div>
                <div className="osm-cwhere">Johannesburg, South Africa 🇿🇦 · 2 weeks ago</div>
              </div>
            </div>
            <div className="osm-stars">★★★★★</div>
            <p className="osm-ctext">I&apos;ve spent a fortune on online courses, hey. This is the first one that actually connected the dots for me instead of teaching one random hack. The AI prompts in Module 6 saved me hours every single week.</p>
          </div>

          <div className="osm-comment">
            <div className="osm-chead">
              <div className="osm-avatar osm-av-orange">BA</div>
              <div>
                <div className="osm-cname">Blessing Adeyemi</div>
                <div className="osm-cwhere">Abuja, Nigeria 🇳🇬 · 3 weeks ago</div>
              </div>
            </div>
            <div className="osm-stars">★★★★★</div>
            <p className="osm-ctext">I run a small catering business. I never thought &quot;funnel&quot; was for someone like me. But the local business examples made it click. I added one simple WhatsApp follow-up and my weekend bookings are full now. God bless you sir.</p>
          </div>

          <div className="osm-pager">
            <span className="on">1</span><span>2</span><span>3</span>
          </div>

          <div className="osm-cform">
            <p className="osm-cform-h">Share Your Experience</p>
            <input type="text" placeholder="Your name" />
            <input type="text" placeholder="Your city & country" />
            <textarea rows={3} placeholder="Your experience..."></textarea>
            <button type="button">Post Comment</button>
          </div>
        </div>

        {/* LEGACY / MISSION */}
        <h2>Why I&apos;m really doing this</h2>
        <p>I&apos;ll be straight with you. When I look at everything inside this — and the price I&apos;m about to show you — part of me feels I&apos;m giving away far too much for the amount.</p>
        <p>But after 15 years in tech and 8 years cracking this online game, this community is not really about the money for me. It&apos;s the legacy I want to leave behind.</p>
        <p>So let me say my mission plainly: <b>I want to watch members of this community make their first million.</b> I want people who join, do the work and follow the system to look back at this one day as the room where everything turned around for them.</p>
        <p>And I&apos;ll admit — putting this out is a little terrifying. This is my <b>first ever launch.</b> No faceless brand to hide behind. Just me, finally sharing what took me years and real money to learn.</p>
        <p className="osm-disclaimer"><b>An honest income note:</b> &quot;making your first million&quot; is my <span className="italic">mission</span> and the standard I&apos;m building this community around — it is not a promise or a guarantee, and definitely not a &quot;get rich in X days&quot; claim. This community is brand new, so there are no past member earnings to point to yet. What you actually earn depends on your effort, your offer, your market and many things outside my control. Most people who buy any course or community earn little or nothing unless they genuinely do the work.</p>

        {/* COST JUSTIFICATION + PRICING */}
        <h2>Just so you know — putting this together cost me a lot more than money</h2>
        <p>I&apos;m not going to pretend this dropped out of the sky. Before it became a clean, do-this-then-that system, here&apos;s what went into it:</p>
        <ul>
          <li><b>Four years of expensive trial and error</b> — the ad budgets I burned so you won&apos;t have to. <span className="italic">(EDIT)</span></li>
          <li><b>Tens of thousands spent on courses, tools and coaches</b> to pull out the few things that actually matter.</li>
          <li><b>Months of testing</b> — real funnels, real ads, real money — to confirm what works in <span className="italic">African</span> markets, not just American screenshots.</li>
          <li><b>A professional editor and designer</b> to turn my messy notes into something clean and easy to follow.</li>
          <li><b>The templates, swipe files and AI prompts</b> built and refined over dozens of real campaigns.</li>
        </ul>
        <p>Honestly? I could put a high price on this and justify every naira of it.</p>
        <p>What you&apos;re getting are the secrets you would have paid <b>millions of naira</b> for — the exact 10% the coaches hold back while they hand you the other 90%.</p>
        <p>But I remember being the guy who didn&apos;t have it. Skilled, working hard, and still stuck on a salary that didn&apos;t match what I knew I could do.</p>
        <p>So I&apos;m <span className="italic">not</span> going to charge you <span className="osm-strike">₦450,000</span> — which is less than what one decent agency charges to build a single funnel.</p>
        <p>I won&apos;t even charge you <span className="osm-strike">₦150,000</span>.</p>
        <p>Not even <span className="osm-strike">₦50,000</span>.</p>
        <p>A genuinely fair price for everything inside would be <span className="osm-strike">₦25,000</span>…</p>
        <p className="center">But right now, for the people reading this early, you can get the entire system for just:</p>

        {/* EDIT: set your real prices here */}
        <div className="osm-pricebox">
          <div className="was"><span className="osm-strike">₦25,000</span></div>
          <div className="now">₦9,500</div>
        </div>

        <p className="osm-scarcity">This founding-member price is ONLY for the first cohort — once those spots are gone, the price goes up. <span className="italic">(EDIT: set a real cohort size and honour it.)</span></p>

        {/* CTA 1 */}
        <a className="osm-cta" href={CHECKOUT}>
          CLICK HERE TO GET THE ONLINE SALES MACHINE NOW
          <small>Instant access · pay by card, transfer or USSD</small>
        </a>

        {/* BONUS STACK */}
        <h2>WAIT — I have free gifts for you</h2>
        <p>If you join as a <b>founding member</b>, you&apos;ll also get these 6 bonuses bundled in — <b>for this first cohort only</b>:</p>

        {/* INSERT BONUS 1 MOCKUP IMAGE HERE (~400x400px) */}
        <div className="osm-ph">BONUS 1 MOCKUP — Offer Creation Blueprint</div>
        <h3>Bonus 1 — The Offer Creation Blueprint</h3>
        <p><b>What it is:</b> a fill-in-the-blank template for building an offer people can&apos;t ignore. <b>Why it matters:</b> a weak offer kills more businesses than weak traffic. <b>How it speeds you up:</b> you&apos;ll have a sharp, sellable offer in an afternoon instead of agonising for months.</p>

        {/* INSERT BONUS 2 MOCKUP IMAGE HERE */}
        <div className="osm-ph">BONUS 2 MOCKUP — AI Prompt Vault</div>
        <h3>Bonus 2 — The AI Prompt Vault</h3>
        <p><b>What it is:</b> my personal library of copy-and-paste prompts for ads, emails, content and offers. <b>Why it matters:</b> a blank page is where most marketing dies. <b>How it speeds you up:</b> create weeks of content in an afternoon — no writing talent required.</p>

        {/* INSERT BONUS 3 MOCKUP IMAGE HERE */}
        <div className="osm-ph">BONUS 3 MOCKUP — Sales Funnel Templates</div>
        <h3>Bonus 3 — Plug-and-Play Sales Funnel Templates</h3>
        <p><b>What it is:</b> ready-made funnel layouts you just swap your words into. <b>Why it matters:</b> you skip the &quot;what page do I even build&quot; paralysis. <b>How it speeds you up:</b> launch your first working funnel days after starting, not months.</p>

        {/* INSERT BONUS 4 MOCKUP IMAGE HERE */}
        <div className="osm-ph">BONUS 4 MOCKUP — Meta Ads Swipe File</div>
        <h3>Bonus 4 — The Meta Ads Swipe File</h3>
        <p><b>What it is:</b> real ads that worked, broken down so you see <span className="italic">why</span>. <b>Why it matters:</b> you stop guessing and start modelling proven structures. <b>How it speeds you up:</b> write ads that get clicks <span className="italic">and</span> sales from day one.</p>

        {/* INSERT BONUS 5 MOCKUP IMAGE HERE */}
        <div className="osm-ph">BONUS 5 MOCKUP — WhatsApp Sales Scripts</div>
        <h3>Bonus 5 — WhatsApp Sales Scripts</h3>
        <p><b>What it is:</b> word-for-word messages to turn chats into closed sales. <b>Why it matters:</b> in Africa, so much business closes on WhatsApp — and so much is lost there too. <b>How it speeds you up:</b> never freeze on &quot;what do I reply&quot; again.</p>

        {/* INSERT BONUS 6 MOCKUP IMAGE HERE */}
        <div className="osm-ph">BONUS 6 MOCKUP — Launch Checklist</div>
        <h3>Bonus 6 — The 1-Page Launch Checklist</h3>
        <p><b>What it is:</b> every step from idea to first sale on a single page. <b>Why it matters:</b> overwhelm is the silent killer. <b>How it speeds you up:</b> you always know the exact next thing to do.</p>

        {/* INSERT BUNDLE IMAGE HERE: main guide + all 6 bonuses together in one image. */}
        <div className="osm-ph big">BUNDLE IMAGE — main guide + all 6 bonuses together</div>

        {/* CTA 2 */}
        <a className="osm-cta" href={CHECKOUT}>
          CLICK HERE TO GET THE ONLINE SALES MACHINE NOW + ALL 6 BONUSES
          <small>Bonuses included free for founding members</small>
        </a>

        {/* WHATSAPP SALES NOTIFICATIONS (PLACEHOLDER — use real numbers) */}
        <div className="osm-wa">
          <div className="osm-wahead">
            <div className="osm-wadot">OSM</div>
            <div>
              <div className="osm-waname">Online Sales Machine — Buyers</div>
              <div className="osm-wamembers">community · 312 members</div>
            </div>
          </div>
          <div className="osm-wabody">
            <div className="osm-wascroll">
              <div className="osm-msg"><span className="who">Emeka O.</span> Just paid! Can&apos;t wait to start <span className="osm-paid">PAID</span><span className="time">10:02</span></div>
              <div className="osm-msg"><span className="who">Fatima B.</span> Done! Transfer sent <span className="osm-paid">PAID</span><span className="time">10:09</span></div>
              <div className="osm-msg"><span className="who">Kwame A.</span> Payment completed from Accra <span className="osm-paid">PAID</span><span className="time">10:14</span></div>
              <div className="osm-msg"><span className="who">Wanjiru M.</span> Mobile money sent, thank you! <span className="osm-paid">PAID</span><span className="time">10:21</span></div>
              <div className="osm-msg"><span className="who">Sipho D.</span> Just grabbed it before the spots finish <span className="osm-paid">PAID</span><span className="time">10:26</span></div>
              <div className="osm-msg"><span className="who">Ngozi E.</span> Paid! Second purchase, this one for my sister <span className="osm-paid">PAID</span><span className="time">10:33</span></div>
              <div className="osm-msg"><span className="who">Tunde L.</span> Done ✅ finally doing this properly <span className="osm-paid">PAID</span><span className="time">10:38</span></div>
              <div className="osm-msg me">Amazing response everyone! Thank you all — let&apos;s build 💪<span className="time">10:40</span></div>
            </div>
          </div>
        </div>

        <p className="center"><b>74 people have already taken this discount today</b> — only <b>26 spots</b> remain at this price. <span className="italic">(EDIT: use real, honest numbers.)</span></p>
        <p className="center">And bear in mind — you&apos;re not the only one reading this page right now.</p>

        {/* CTA 3 */}
        <a className="osm-cta" href={CHECKOUT}>
          YES — GIVE ME THE ONLINE SALES MACHINE BEFORE THE SPOTS RUN OUT
        </a>

        {/* GUARANTEE */}
        <div className="osm-guarantee">
          <h2>Still unsure? Here&apos;s my promise to you</h2>
          <p>I totally understand the hesitation. You&apos;ve probably been burned before. I was too.</p>
          <p>So here&apos;s the deal: get the system, go through it, and actually do the work. If within <b>14 days</b> you genuinely apply what&apos;s inside and feel it hasn&apos;t given you a clearer path to building a real sales machine than anything you&apos;ve tried — email me and I&apos;ll refund you. No drama.</p>
          <p>The risk is mine, not yours. All I ask is that you actually open it and try. <span className="italic">(EDIT: match this to your real refund policy and your Selar/Nestuge terms.)</span></p>
        </div>

        {/* CTA 4 */}
        <a className="osm-cta" href={CHECKOUT}>GET STARTED RISK-FREE TODAY</a>

        {/* TESTIMONIALS — SECOND SET (PLACEHOLDER) */}
        <div className="osm-tsection">
          <h2>More From the Community</h2>

          <div className="osm-comment">
            <div className="osm-chead">
              <div className="osm-avatar osm-av-green">GA</div>
              <div>
                <div className="osm-cname">Grace Appiah</div>
                <div className="osm-cwhere">Kumasi, Ghana 🇬🇭 · 5 days ago</div>
              </div>
            </div>
            <div className="osm-stars">★★★★★</div>
            <p className="osm-ctext">I&apos;m a coach and I always undersold myself. The offer module gave me confidence to raise my price and people still said yes. Best money I&apos;ve spent this year, no cap.</p>
          </div>

          <div className="osm-comment">
            <div className="osm-chead">
              <div className="osm-avatar osm-av-red">SW</div>
              <div>
                <div className="osm-cname">Samson Wekesa</div>
                <div className="osm-cwhere">Mombasa, Kenya 🇰🇪 · 1 week ago</div>
              </div>
            </div>
            <div className="osm-stars">★★★★★</div>
            <p className="osm-ctext">Affiliate marketing was frustrating me. I had traffic but no trust step. After fixing that one thing my commissions went up steadily. The system is simple but it really works.</p>
          </div>

          <div className="osm-comment">
            <div className="osm-chead">
              <div className="osm-avatar osm-av-blue">LM</div>
              <div>
                <div className="osm-cname">Lerato Molefe</div>
                <div className="osm-cwhere">Pretoria, South Africa 🇿🇦 · 1 week ago</div>
              </div>
            </div>
            <div className="osm-stars">★★★★★</div>
            <p className="osm-ctext">As a small online clothing seller, the WhatsApp scripts alone changed my game. I used to lose people who said &quot;I&apos;ll get back to you.&quot; Now I actually close them. Highly recommend, shame.</p>
          </div>

          <div className="osm-comment">
            <div className="osm-chead">
              <div className="osm-avatar osm-av-purple">IO</div>
              <div>
                <div className="osm-cname">Ifeoma Obi</div>
                <div className="osm-cwhere">Enugu, Nigeria 🇳🇬 · 2 weeks ago</div>
              </div>
            </div>
            <div className="osm-stars">★★★★★</div>
            <p className="osm-ctext">I create digital planners. I had everything except follow-up. This taught me how to set it up once and let it run. I dey see consistent sales now even when I no dey online. Thank you Azeez!</p>
          </div>

          <div className="osm-comment">
            <div className="osm-chead">
              <div className="osm-avatar osm-av-orange">DA</div>
              <div>
                <div className="osm-cname">Daniel Asante</div>
                <div className="osm-cwhere">Tema, Ghana 🇬🇭 · 3 weeks ago</div>
              </div>
            </div>
            <div className="osm-stars">★★★★★</div>
            <p className="osm-ctext">I run a phone accessories shop. I thought online stuff was for big people. This broke it down so even me I understood. My online orders are now a real part of my income. Worth every pesewa.</p>
          </div>

          <div className="osm-pager">
            <span>1</span><span>2</span><span className="on">3</span>
          </div>
        </div>

        {/* TWO-CHOICE CLOSE */}
        <div className="osm-twochoice">
          <h2>So here&apos;s where you are</h2>
          <p>You&apos;ve got two roads in front of you.</p>
          <p><b>Road 1:</b> Take action. Get The Online Sales Machine, find your broken part, fix it, and finally build something that brings customers in on purpose instead of by luck.</p>
          <p><b>Road 2:</b> Close this page. Go back to chasing the next tactic, the next course, the next hack — and watch another year quietly disappear the way the last ones did.</p>
          <p>Ask yourself honestly: <span className="italic">what does my business look like 12 months from now if nothing changes?</span></p>
          <p>And then ask: <span className="italic">what could it look like if I finally had a real system?</span></p>
          <p>Maybe you landed on this page for a reason. The clock is ticking.</p>
        </div>

        {/* CTA 5 — FINAL */}
        <a className="osm-cta" href={CHECKOUT}>
          CLICK HERE TO GET THE ONLINE SALES MACHINE NOW + ALL 6 BONUSES
          <small>Instant access · 14-day promise · pay by card, transfer or USSD</small>
        </a>

        <p className="osm-disclaimer">This page promotes a brand-new community. The testimonials, the WhatsApp payment notifications and the &quot;spots left&quot; numbers are placeholders — replace them with real ones and do not display them until they are genuinely true. Results are not guaranteed and depend on your own effort. Income claims, where made, describe a mission and a goal, not a promise.</p>
        <p className="osm-copy">© 2026 Azeez Agbona · Helping Entrepreneurs Build Revenue Systems Online</p>
      </div>
    </div>
  );
}
