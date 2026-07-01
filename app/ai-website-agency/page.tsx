import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Websites In 60 Minutes, Find Clients In Hours, Get Paid In Days",
  description:
    "Stop watching AI change the world and start getting paid from it. How to build professional websites with AI, find the businesses that need them, and turn it into a real income — even with zero coding.",
  robots: { index: true, follow: true },
};

/*
=====================================================================
  THE AI WEBSITE BUSINESS MODEL — long-form blog-style sales page
  URL: /ai-website-agency   (PDF product)
=====================================================================

  >>> BEFORE YOU PUBLISH: <<<
  1. CHECKOUT: replace every  href="REPLACE_WITH_CHECKOUT_URL"
     with your real checkout URL (one CHECKOUT const drives all buttons).
  2. IMAGES: each grey box is a <div className="aw-ph">. Search "aw-ph".
     Replace with  <img src="/your-file.jpg" alt="..." className="aw-ph-img" />
  3. NUMBERS: search "EDIT" for prices / scarcity to confirm.

  HONESTY NOTE: testimonials, the WhatsApp payment feed and the
  "buyers left" counter are WRITTEN PLACEHOLDERS. Replace with real ones
  before launch (fake reviews/scarcity are illegal: FTC / ASA / FCCPC).
=====================================================================
*/

const css = `
.aw-page * { margin: 0 !important; padding: 0 !important; box-sizing: border-box !important; }

html.dark body, body { background: #FFFFFF !important; }

.aw-page {
  background: #FFFFFF !important;
  color: #333333 !important;
  font-family: 'Roboto', 'Lato', Arial, sans-serif !important;
  font-size: 16px !important;
  line-height: 1.7 !important;
  min-height: 100vh !important;
  -webkit-font-smoothing: antialiased !important;
}

.aw-wrap { max-width: 800px !important; margin: 0 auto !important; padding: 0 20px 60px 20px !important; background: #FFFFFF !important; text-align: left !important; }

.aw-page p { margin: 0 0 18px 0 !important; color: #333333 !important; font-size: 16px !important; line-height: 1.75 !important; }
.aw-page h1, .aw-page h2, .aw-page h3 { color: #111111 !important; line-height: 1.3 !important; }
.aw-page h1 { font-size: 31px !important; font-weight: 700 !important; margin: 16px 0 12px 0 !important; }
.aw-page h2 { font-size: 24px !important; font-weight: 700 !important; margin: 40px 0 14px 0 !important; }
.aw-page h3 { font-size: 19px !important; font-weight: 700 !important; margin: 26px 0 10px 0 !important; }
.aw-page .italic { font-style: italic !important; }
.aw-page .center { text-align: center !important; }
.aw-page b, .aw-page strong { color: #111111 !important; font-weight: 700 !important; }
.aw-page ul { margin: 0 0 20px 22px !important; }
.aw-page li { margin: 0 0 12px 0 !important; color: #333333 !important; line-height: 1.7 !important; }

.aw-banner { background: #10233F !important; padding: 18px 16px !important; text-align: center !important; }
.aw-banner .name { color: #FFCC00 !important; font-style: italic !important; font-weight: 700 !important; font-size: 20px !important; line-height: 1.3 !important; }
.aw-banner .tag { color: #FFCC00 !important; font-style: italic !important; font-size: 13px !important; display: block !important; margin-top: 4px !important; }

.aw-kicker { color: #1F6FB2 !important; font-weight: 700 !important; font-size: 15px !important; text-transform: uppercase !important; letter-spacing: 0.5px !important; margin: 24px 0 0 0 !important; }
.aw-sub { color: #444444 !important; font-size: 17px !important; line-height: 1.6 !important; margin: 0 0 14px 0 !important; }
.aw-byline { color: #888888 !important; font-style: italic !important; font-size: 13px !important; margin: 0 0 22px 0 !important; }

.aw-ph { display: block !important; width: 100% !important; max-width: 320px !important; margin: 24px auto !important; background: #EFEFEF !important; border: 2px dashed #BBBBBB !important; color: #777777 !important; text-align: center !important; font-size: 13px !important; padding: 40px 16px !important; line-height: 1.5 !important; }
.aw-ph.big { max-width: 420px !important; }
.aw-ph-img { display: block !important; width: 100% !important; max-width: 320px !important; height: auto !important; margin: 24px auto !important; }
.aw-ph-img.big { max-width: 420px !important; }
.aw-page img { max-width: 100% !important; height: auto !important; }

.aw-promise { text-align: center !important; font-size: 22px !important; font-weight: 700 !important; color: #10233F !important; margin: 34px 0 !important; line-height: 1.4 !important; }
.aw-flow { background: #EEF3F9 !important; border-left: 5px solid #10233F !important; padding: 18px 20px !important; margin: 24px 0 !important; font-weight: 700 !important; color: #10233F !important; font-size: 17px !important; line-height: 1.6 !important; text-align: center !important; }
.aw-step { background: #F7F9FC !important; border: 1px solid #E3E9F1 !important; border-radius: 8px !important; padding: 16px 18px !important; margin: 0 0 14px 0 !important; }
.aw-step h3 { margin: 0 0 6px 0 !important; color: #10233F !important; }
.aw-step p { margin: 0 !important; }

.aw-cta { display: block !important; width: 100% !important; background: #1F6FB2 !important; color: #FFFFFF !important; text-align: center !important; text-decoration: none !important; font-weight: 700 !important; font-size: 19px !important; padding: 18px 20px !important; border-radius: 8px !important; margin: 28px 0 !important; border: none !important; box-shadow: 0 4px 0 #155E9C !important; line-height: 1.4 !important; }
.aw-cta small { display: block !important; font-weight: 400 !important; font-size: 13px !important; color: #E5EEF6 !important; margin-top: 4px !important; }

.aw-strike { color: #B00020 !important; text-decoration: line-through !important; font-weight: 700 !important; }
.aw-pricebox { text-align: center !important; margin: 28px 0 !important; }
.aw-pricebox .now { font-size: 44px !important; font-weight: 700 !important; color: #1F6FB2 !important; line-height: 1.1 !important; }
.aw-pricebox .was { font-size: 20px !important; }
.aw-scarcity { text-align: center !important; font-weight: 700 !important; color: #B00020 !important; font-size: 17px !important; margin: 18px 0 !important; }

.aw-tsection { background: #F9F9F9 !important; padding: 24px 16px !important; margin: 30px -20px !important; }
.aw-tsection h2 { text-align: center !important; margin-top: 6px !important; }
.aw-comment { background: #FFFFFF !important; border-left: 4px solid #10233F !important; padding: 16px 18px !important; margin: 0 auto 16px auto !important; max-width: 760px !important; box-shadow: 0 1px 3px rgba(0,0,0,0.08) !important; }
.aw-chead { display: flex !important; align-items: center !important; margin-bottom: 8px !important; }
.aw-avatar { width: 44px !important; height: 44px !important; border-radius: 50% !important; color: #FFFFFF !important; font-weight: 700 !important; font-size: 16px !important; display: flex !important; align-items: center !important; justify-content: center !important; margin-right: 12px !important; flex: 0 0 44px !important; }
.aw-av-navy { background: #10233F !important; }
.aw-av-blue { background: #1F6FB2 !important; }
.aw-av-teal { background: #0F766E !important; }
.aw-av-purple { background: #7A4F9C !important; }
.aw-av-orange { background: #C9772A !important; }
.aw-cname { font-weight: 700 !important; color: #111111 !important; font-size: 15px !important; }
.aw-cwhere { color: #777777 !important; font-size: 12px !important; }
.aw-stars { color: #F5A623 !important; font-size: 14px !important; letter-spacing: 1px !important; }
.aw-ctext { color: #333333 !important; font-size: 15px !important; line-height: 1.6 !important; margin: 0 !important; }
.aw-pager { text-align: center !important; margin: 10px 0 !important; }
.aw-pager span { display: inline-block !important; border: 1px solid #CCCCCC !important; padding: 6px 12px !important; margin: 0 3px !important; color: #555555 !important; font-size: 14px !important; border-radius: 4px !important; }
.aw-pager span.on { background: #10233F !important; color: #FFFFFF !important; border-color: #10233F !important; }

.aw-cform { max-width: 760px !important; margin: 16px auto 0 auto !important; background: #FFFFFF !important; padding: 16px !important; border: 1px solid #E5E5E5 !important; border-radius: 6px !important; }
.aw-cform-h { margin-bottom: 10px !important; font-weight: 700 !important; color: #111111 !important; }
.aw-cform input, .aw-cform textarea { width: 100% !important; border: 1px solid #CCCCCC !important; padding: 10px !important; margin-bottom: 10px !important; font-size: 14px !important; border-radius: 4px !important; font-family: inherit !important; }
.aw-cform button { background: #10233F !important; color: #FFFFFF !important; border: none !important; padding: 10px 18px !important; font-weight: 700 !important; border-radius: 4px !important; cursor: pointer !important; }

.aw-wa { max-width: 420px !important; margin: 24px auto !important; background: #0B141A !important; border-radius: 12px !important; overflow: hidden !important; }
.aw-wahead { background: #1F2C34 !important; padding: 12px 14px !important; display: flex !important; align-items: center !important; }
.aw-wadot { width: 38px !important; height: 38px !important; border-radius: 50% !important; background: #2AABEE !important; margin-right: 10px !important; flex: 0 0 38px !important; display: flex !important; align-items: center !important; justify-content: center !important; color: #FFFFFF !important; font-weight: 700 !important; font-size: 13px !important; }
.aw-waname { color: #FFFFFF !important; font-weight: 700 !important; font-size: 15px !important; line-height: 1.2 !important; }
.aw-wamembers { color: #8696A0 !important; font-size: 12px !important; }
.aw-wabody { height: 300px !important; overflow: hidden !important; position: relative !important; padding: 10px 0 !important; }
.aw-wascroll { animation: awWaScroll 22s linear infinite alternate !important; padding: 0 12px !important; }
@keyframes awWaScroll { 0% { transform: translateY(0); } 100% { transform: translateY(-180px); } }
.aw-msg { background: #1F2C34 !important; color: #E9EDEF !important; border-radius: 8px !important; padding: 8px 10px !important; margin-bottom: 10px !important; max-width: 80% !important; font-size: 14px !important; line-height: 1.4 !important; }
.aw-msg .who { color: #53BDEB !important; font-weight: 700 !important; font-size: 13px !important; display: block !important; }
.aw-msg .time { color: #8696A0 !important; font-size: 11px !important; float: right !important; margin-top: 2px !important; }
.aw-tick { color: #53BDEB !important; font-size: 11px !important; margin-left: 2px !important; }
.aw-waback { color: #8696A0 !important; font-size: 20px !important; margin-right: 8px !important; }
.aw-paid { display: inline-block !important; background: #075E54 !important; color: #FFFFFF !important; font-size: 11px !important; font-weight: 700 !important; padding: 1px 7px !important; border-radius: 10px !important; margin-left: 6px !important; }
.aw-msg.me { background: #005C4B !important; margin-left: auto !important; }

.aw-guarantee { border: 3px solid #10233F !important; border-radius: 10px !important; padding: 22px !important; margin: 30px 0 !important; background: #EEF3F9 !important; }
.aw-guarantee h2 { margin-top: 0 !important; }
.aw-twochoice { background: #FFF8E6 !important; border: 1px solid #F5D78A !important; border-radius: 10px !important; padding: 22px !important; margin: 30px 0 !important; }
.aw-copy { text-align: center !important; font-style: italic !important; color: #999999 !important; font-size: 13px !important; margin-top: 30px !important; }
.aw-disclaimer { background: #FAFAFA !important; border: 1px solid #E5E5E5 !important; border-radius: 6px !important; padding: 12px 14px !important; margin: 18px 0 !important; color: #777777 !important; font-size: 12px !important; line-height: 1.6 !important; }

@media (max-width: 600px) {
  .aw-page h1 { font-size: 26px !important; }
  .aw-page h2 { font-size: 21px !important; }
  .aw-pricebox .now { font-size: 36px !important; }
  .aw-banner .name { font-size: 17px !important; }
}
`;

export default function AiWebsiteBusinessModelPage() {
  const CHECKOUT = "REPLACE_WITH_CHECKOUT_URL";

  return (
    <div className="aw-page">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* SECTION 1 — BLOG HEADER BANNER */}
      <div className="aw-banner">
        <span className="name">The Future Income Journal</span>
        <span className="tag">Practical Ways To Build Skills, Find Clients And Create Income In The AI Era</span>
      </div>

      <div className="aw-wrap">
        {/* SECTION 2 — HOOK + HEADLINE + SUBHEAD */}
        <p className="aw-kicker">Stop Watching AI Change The World And Start Getting Paid From It.</p>
        <h1>How Everyday Beginners Are Using AI to Build World-Class Websites for Businesses That Need Them — With No Coding and No WordPress Experience</h1>
        <p className="aw-sub">
          I spent over a decade in sales, funnels and IT. Today, AI lets a complete novice deliver
          the same professional websites businesses pay good money for — and build an income serious
          enough to stop chasing jobs. <b>This is the exact skill, the steps, and what it&apos;s realistically worth.</b>
        </p>
        <p className="aw-byline">3 June 2026 &nbsp;|&nbsp; posted by A. Agbona</p>

        {/* SECTION 3 — HERO IMAGE PLACEHOLDER */}
        <div className="aw-ph">HERO IMAGE — a casual personal photo of A. Agbona at a laptop (about 200×300px)</div>

        {/* SECTION 4 — OPENING HOOK (reader's pain) */}
        <p>Let me ask you something, and be honest with yourself.</p>
        <p>How many hours have you now spent <span className="italic">watching</span> AI?</p>
        <p>The videos. The threads. The &quot;this changes everything&quot; posts. The tools that launch every single week.</p>
        <p>You know AI is a big deal. You can feel it. Everybody keeps saying the people who learn it now will be miles ahead.</p>
        <p>So you&apos;ve been trying.</p>
        <p>But here&apos;s the quiet truth you don&apos;t say out loud:</p>
        <p className="italic">&quot;I know AI is important… but I still don&apos;t know how to actually make money with it.&quot;</p>
        <p>You&apos;ve watched countless tutorials. You still have no clients.</p>
        <p>You don&apos;t know how to code, and every time you try to learn, it feels like a wall built just to keep people like you out.</p>

        <p>And if you&apos;re honest, AI isn&apos;t even the first thing you&apos;ve tried.</p>
        <p>Maybe before this it was affiliate marketing. Or dropshipping. Or forex and crypto that quietly ate your money. Maybe betting. Maybe one of those &quot;investment platforms&quot; that crashed and took people&apos;s savings with it.</p>
        <p>Maybe you opened a Fiverr or Upwork account and got drowned out by thousands of others. Maybe you&apos;ve bought course after course that&apos;s still sitting on your phone, half-opened.</p>
        <p>And in between all of it… you kept applying for jobs that never even replied.</p>
        <p>I understand that pain. Not from a distance — I&apos;ve watched so many good, hungry people live it, and I remember my own early frustration too.</p>
        <p>Here&apos;s what almost all of those things had in common: they leaned on luck, on money you didn&apos;t really have, or on a trend that vanished. None of them left you holding <span className="italic">a skill you actually own.</span></p>
        <p><b>That&apos;s why learning a real, in-demand skill changes the whole game.</b> A skill businesses already pay for. One that&apos;s yours for life, that pays again and again, and that doesn&apos;t disappear when the next shiny thing shows up.</p>

        <p>And deep down what you really want is simple. You want <b>a skill that businesses will actually pay you for.</b> Not a hobby. Not another certificate. Income.</p>
        <p>I&apos;ve watched people climb out of this exact hole with one real skill. So please —</p>
        <p><b>Stop, and read this to the end. It&apos;s the article I wish someone had dropped in front of me a year ago.</b></p>

        {/* SECTION 5 — PROMISE */}
        <p className="aw-promise">Because the problem was never that AI is too hard. The problem is that nobody connected the two halves: <span className="italic">building</span> the thing, and <span className="italic">getting paid</span> for it.</p>

        {/* SECTION 6 — WHO I AM */}
        <p>Hi, my name is A. Agbona.</p>
        <p>For over a decade I&apos;ve worked in <b>sales, marketing funnels, and alongside several IT firms.</b> I&apos;ve seen, from the inside, exactly what businesses spend money on online — and websites sit right at the top of that list.</p>
        <p>Here&apos;s what I want you to hold onto, especially if you feel like a complete beginner:</p>
        <p>The website I can build in <b>60 minutes</b> is the same one you can now build too. Not because you suddenly have my ten years — but because <b>AI collapses those years into a few clear steps.</b> My only job in this guide is to hand you those steps in the right order.</p>
        <p>I&apos;m not a coder selling a dream. I&apos;m someone who knows what businesses actually pay for — now showing you how to deliver it with AI.</p>

        {/* SECTION 7 — PERSONA IMAGE PLACEHOLDER */}
        <div className="aw-ph">PERSONA IMAGE — a second, more personal photo of A. Agbona (about 200×300px)</div>

        {/* SECTION 8 — THE STORY */}
        <h2>What a decade in sales, funnels and IT taught me</h2>
        <p>Let me take you back a little — and I&apos;ll keep it simple, because this matters whether you&apos;re experienced or starting from absolute zero.</p>
        <p>For more than ten years I worked around sales and marketing funnels, and side by side with IT firms building things for businesses.</p>
        <p>In all that time, one thing never changed: <b>businesses always needed websites, and they always paid for them.</b> New businesses. Old businesses with embarrassing sites. Shops with no online presence at all.</p>
        <p>The demand was endless. But the building? Back then it was slow, technical and expensive — you needed developers, time and money.</p>

        <h3>Then I watched everyone chase the wrong thing</h3>
        <p>When AI exploded, I saw so many people — smart, hungry people — do the exact same thing.</p>
        <p>They watched WordPress tutorials for weeks. They opened Fiverr and Upwork accounts and fought thousands of others for scraps. They jumped on affiliate marketing, crypto, one shiny thing after another. They played with AI website builders with no plan, and collected generic prompts like treasure.</p>
        <p>Months later, most of them had the same result: a head full of tutorials, and <b>no clients, no income.</b></p>
        <p>And I understood exactly why. They were chasing the <span className="italic">tool</span> instead of the <span className="italic">customer.</span></p>

        <h3>The simple truth my ten years kept screaming</h3>
        <p>Here it is, plainly:</p>
        <p className="aw-flow">The opportunity isn&apos;t AI. AI is just the tool. The opportunity is helping businesses solve a problem they already pay to solve.</p>
        <p>Businesses were paying for websites long before AI existed. That demand is already there. All AI did was make building them dramatically faster and cheaper — so fast that a complete beginner can now deliver what used to need a whole team.</p>
        <p>So I stopped thinking like a &quot;developer&quot; and started thinking like the businesses I&apos;d spent a decade around. Nobody needs to learn coding for two years. The path is four simple steps:</p>
        <p>Build a professional website with AI. Enhance it with the features businesses actually need. Hunt for businesses that don&apos;t have a good site yet. And monetize by turning them into paying clients.</p>

        <h3>The 60-minute build</h3>
        <p>With AI, I can now build a clean, professional, business-ready website in about <b>60 minutes.</b> Something that once took days.</p>
        <p>Then it&apos;s simply a matter of finding a business nearby with no site — or a broken one — sending one honest message, and showing them what&apos;s possible.</p>
        <p>And here is the part I really need a total beginner to believe: <b>the same site I build in an hour, you can build too</b> — by following the exact steps, prompts and features in this guide. The skill that took me years to truly value, AI now lets you deliver from day one.</p>

        {/* SECTION 9 — THE FRAMEWORK */}
        <h2>The secret was a simple 4-step framework</h2>
        <p>Once I saw the pattern, I gave it a name so I&apos;d never lose it again:</p>
        <p className="aw-flow">The Build → Enhance → Hunt → Monetize Framework™</p>

        <div className="aw-step">
          <h3>STEP 1 — Build</h3>
          <p>Use AI to build professional websites — fast, clean, mobile-ready — without writing code. This is the part everyone fears, and it&apos;s now the easiest part of the whole thing.</p>
        </div>
        <div className="aw-step">
          <h3>STEP 2 — Enhance</h3>
          <p>Add the premium features businesses actually need and will happily pay extra for — booking, contact and lead capture, payments, maps, speed, basic SEO. This is what turns a &quot;nice page&quot; into something worth real money.</p>
        </div>
        <div className="aw-step">
          <h3>STEP 3 — Hunt</h3>
          <p>Find businesses that need a website — the ones with no site, or an old broken one. You stop chasing everyone and start approaching the ones who already have the problem you solve.</p>
        </div>
        <div className="aw-step">
          <h3>STEP 4 — Monetize</h3>
          <p>Turn those prospects into paying clients with simple outreach, a clear offer, and a smooth delivery. This is where the skill finally becomes income.</p>
        </div>
        <p>Most people only ever touch Step 1 — they learn to build and then sit there wondering why nothing happens. The money lives in doing all four, in order.</p>

        {/* WHAT IT MEANS FOR YOU */}
        <h2>Why this works for a complete beginner</h2>
        <p>Read this part slowly, because it&apos;s the whole point:</p>
        <ul>
          <li><b>No coding required.</b> AI does the technical heavy lifting. You guide it.</li>
          <li><b>The demand already exists.</b> Businesses have paid for websites for 20+ years. You&apos;re not creating a need — you&apos;re meeting one.</li>
          <li><b>It&apos;s a real-world skill,</b> not a trend. Every business wants to be found online.</li>
          <li><b>Beginners are genuinely welcome.</b> I started as one. So did most people now doing this.</li>
          <li><b>It&apos;s a real service business</b> you build on your own terms — evenings, weekends, full-time, your choice.</li>
        </ul>
        <p>Whether you&apos;re a <b>graduate</b>, an <b>employee</b> wanting a side income, a <b>freelancer</b> tired of fighting for scraps, or a total <b>beginner</b> who just feels left behind by AI — this is a door you can actually walk through.</p>

        {/* WHAT THIS SKILL IS WORTH (honest opportunity + illustrative scenarios) */}
        <h2>Now here&apos;s what this skill is actually worth</h2>
        <p>Let me show you why I get genuinely excited for beginners here — with real market numbers, not hype.</p>
        <p>A single professional business website in Nigeria commonly sells for around <b>₦150,000 to ₦500,000+</b>, depending on the features. International clients pay several times that. <span className="italic">(EDIT: adjust to your real market rates.)</span></p>
        <p>So do the simple math:</p>
        <p className="aw-flow">Win just 2–3 website projects in a month and you&apos;ve already crossed ₦500,000 — from your laptop, with AI doing the heavy building.</p>
        <p>And the wild part? The core of what makes the real difference, I can hand over in about <b>30 minutes</b>. The rest is simply doing the reps.</p>
        <p>This is the kind of outcome it&apos;s opening up for people who actually put it to work:</p>
        <div className="aw-step"><h3>The complete novice</h3><p>No coding. No WordPress. Following the steps and my short training, delivering world-class sites for businesses that need them — aiming for ₦500k+ a month, until the endless job hunt simply stops mattering.</p></div>
        <div className="aw-step"><h3>The corps member</h3><p>Using the spare hours during NYSC to build sites for nearby businesses — earning monthly while still serving, before the &quot;real&quot; job search has even begun.</p></div>
        <div className="aw-step"><h3>The fast mover</h3><p>Someone who treats it seriously from week one, stacks a few projects, and pushes toward ₦1,000,000 within their first weeks of putting it into practice.</p></div>
        <p className="aw-disclaimer"><b>Please read this carefully:</b> the figures above are <span className="italic">illustrations of what is possible</span>, based on typical market rates for website projects. They are NOT promises, guarantees, or typical results. This is a real skill and a service business — what you actually earn depends entirely on your effort, how good you get, and the clients you win. Plenty of people will earn little or nothing if they don&apos;t do the work.</p>

        {/* SECTION 10 — PRODUCT REVEAL */}
        <h2>So I put the whole thing into one simple guide</h2>
        <p>After helping a few friends do the same, the questions kept coming. <span className="italic">Which tools? What features? How do I find businesses? What do I say to them?</span></p>
        <p>So I wrote everything down — the full framework, the exact steps, the tools, the features, the scripts — in one clear, beginner-friendly guide you can follow from page one.</p>
        <p>Introducing…</p>

        {/* SECTION 11 — PRODUCT MOCKUP PLACEHOLDER */}
        <div className="aw-ph big">PRODUCT MOCKUP — 3D PDF cover of THE AI WEBSITE BUSINESS MODEL (about 768×1152px)</div>

        <h2 className="center">The AI Website Business Model</h2>
        <p className="center"><b>Build websites with AI. Add features businesses pay for. Find clients. Get paid.</b></p>

        {/* SECTION 12 — WHAT'S INSIDE THE GUIDE */}
        <h2>What&apos;s inside the guide</h2>
        <p>Ten focused modules that walk you from &quot;I&apos;ve never coded&quot; to &quot;I just got paid for my first website&quot;:</p>
        <ul>
          <li><b>Module 1 — The AI Website Opportunity.</b> Why this is the simplest, most real way for a beginner to finally monetize AI.</li>
          <li><b>Module 2 — Build Professional Websites With AI.</b> The exact tools and steps to create a clean, modern site without code.</li>
          <li><b>Module 3 — Build Websites Businesses Pay For.</b> The difference between a pretty page and a site a business will actually open their wallet for.</li>
          <li><b>Module 4 — The Professional Feature Stack.</b> The premium features that let you charge more — and how to add them with AI.</li>
          <li><b>Module 5 — Modern Website Visibility.</b> The basics of getting a site found, so your clients see real value.</li>
          <li><b>Module 6 — Find Clients Fast.</b> The prospecting system for finding businesses that need a website right now.</li>
          <li><b>Module 7 — Client Acquisition Scripts.</b> Word-for-word messages that start conversations instead of getting ignored.</li>
          <li><b>Module 8 — Close Your First Client.</b> How to handle &quot;how much?&quot; and turn interest into a confirmed job.</li>
          <li><b>Module 9 — Deliver Like A Pro.</b> A simple process so every project is smooth and gets you referrals.</li>
          <li><b>Module 10 — Scale Into A Real Business.</b> How to go from one client to a steady, growing service business.</li>
        </ul>
        <p><b>And the best part?</b> You don&apos;t need a following, a degree in tech, or money to start. You follow the steps in order — build, enhance, hunt, monetize.</p>

        {/* CTA 1 (early, soft) */}
        <a className="aw-cta" href={CHECKOUT}>
          GET THE AI WEBSITE BUSINESS MODEL
          <small>Instant PDF access · pay by card, transfer or USSD</small>
        </a>

        {/* SECTION 13 — TESTIMONIALS (first set — PLACEHOLDER) */}
        <div className="aw-tsection">
          <h2>What early readers are saying</h2>

          <div className="aw-comment">
            <div className="aw-chead">
              <div className="aw-avatar aw-av-navy">CO</div>
              <div>
                <div className="aw-cname">Chinedu Okeke</div>
                <div className="aw-cwhere">Lagos, Nigeria 🇳🇬 · 4 days ago</div>
              </div>
            </div>
            <div className="aw-stars">★★★★★</div>
            <p className="aw-ctext">For the first time I actually built a complete, professional website — and I can&apos;t code at all. Following the AI steps, I had it done in one evening. My confidence right now is on another level.</p>
          </div>

          <div className="aw-comment">
            <div className="aw-chead">
              <div className="aw-avatar aw-av-blue">AM</div>
              <div>
                <div className="aw-cname">Ama Mensah</div>
                <div className="aw-cwhere">Accra, Ghana 🇬🇭 · 6 days ago</div>
              </div>
            </div>
            <div className="aw-stars">★★★★★</div>
            <p className="aw-ctext">The &quot;hunt&quot; part finally made it click for me. I found three businesses around me with no website at all. Used the script, and one replied the same day. I landed my first website project, charley!</p>
          </div>

          <div className="aw-comment">
            <div className="aw-chead">
              <div className="aw-avatar aw-av-teal">JK</div>
              <div>
                <div className="aw-cname">Joseph Kariuki</div>
                <div className="aw-cwhere">Nairobi, Kenya 🇰🇪 · 1 week ago</div>
              </div>
            </div>
            <div className="aw-stars">★★★★★</div>
            <p className="aw-ctext">I&apos;ve watched so much AI content and never knew how to turn it into anything. This is the first thing that connected AI to actual paying work. Now I finally understand how to monetize the skill.</p>
          </div>

          <div className="aw-comment">
            <div className="aw-chead">
              <div className="aw-avatar aw-av-purple">RT</div>
              <div>
                <div className="aw-cname">Ruth Thompson</div>
                <div className="aw-cwhere">London, United Kingdom 🇬🇧 · 1 week ago</div>
              </div>
            </div>
            <div className="aw-stars">★★★★★</div>
            <p className="aw-ctext">As a complete beginner I was nervous about the tech side. The guide is so clear and beginner-friendly. I built my first site over a weekend and have already reached out to two local businesses.</p>
          </div>

          <div className="aw-comment">
            <div className="aw-chead">
              <div className="aw-avatar aw-av-orange">BA</div>
              <div>
                <div className="aw-cname">Blessing Adeyemi</div>
                <div className="aw-cwhere">Abuja, Nigeria 🇳🇬 · 2 weeks ago</div>
              </div>
            </div>
            <div className="aw-stars">★★★★★</div>
            <p className="aw-ctext">I have a 9-5 and wanted a real side skill. The feature stack module showed me how to make a site businesses take seriously. I got my first client enquiry within days of trying the prospecting steps.</p>
          </div>

          <div className="aw-pager">
            <span className="on">1</span><span>2</span><span>3</span>
          </div>

          <div className="aw-cform">
            <p className="aw-cform-h">Share Your Experience</p>
            <input type="text" placeholder="Your name" />
            <input type="text" placeholder="Your city & country" />
            <textarea rows={3} placeholder="Your experience..."></textarea>
            <button type="button">Post Comment</button>
          </div>
        </div>

        {/* SECTION 14 — COST JUSTIFICATION + PRICING */}
        <h2>Just so you know — this guide cost me over ₦385,000 to put together</h2>
        <p>This isn&apos;t a few notes I typed up in an afternoon. To make it this clear and this practical, here&apos;s what went in:</p>
        <ul>
          <li><b>Months of testing AI tools</b> with real money, to find the few that actually produce client-ready websites.</li>
          <li><b>A professional editor and designer</b> to make the guide clean, simple and easy to follow.</li>
          <li><b>Research into the exact features</b> businesses pay extra for — and how to deliver them with AI.</li>
          <li><b>Real prospecting and outreach testing</b> to build scripts that actually get replies.</li>
          <li><b>The templates, blueprints and prompts</b> refined on real website projects, not theory.</li>
        </ul>
        <p>A skill like this is something people pay serious tuition to learn slowly over months.</p>
        <p>So I&apos;m <span className="italic">not</span> going to charge you <span className="aw-strike">₦385,000</span> — which is less than one good client project can pay back.</p>
        <p>I won&apos;t charge you <span className="aw-strike">₦150,000</span>.</p>
        <p>A fair price for everything inside would honestly be <span className="aw-strike">₦49,800</span>…</p>
        <p className="center">But for the first readers acting on this now, you get the complete guide for just:</p>

        {/* EDIT: confirm your prices here */}
        <div className="aw-pricebox">
          <div className="was"><span className="aw-strike">₦49,800</span></div>
          <div className="now">₦9,800</div>
        </div>

        <p className="aw-scarcity">This discounted price is ONLY for the first 100 buyers — so hurry. <span className="italic">(EDIT: keep this number real and honour it.)</span></p>

        {/* CTA 2 */}
        <a className="aw-cta" href={CHECKOUT}>
          YES — GET THE AI WEBSITE BUSINESS MODEL NOW
          <small>Instant PDF access · pay by card, transfer or USSD</small>
        </a>

        {/* SECTION 15 — BONUS STACK */}
        <h2>WAIT — your free bonuses</h2>
        <p>Get the guide as one of the first 100 buyers and these 7 bonuses come bundled in free — <b>today only</b>:</p>

        <div className="aw-ph">BONUS 1 MOCKUP — 10 Must-Have Features Every Professional Website Needs</div>
        <h3>Bonus 1 — 10 Must-Have Features Every Professional Website Needs</h3>
        <p><b>What it is:</b> the non-negotiable features that make a site look professional. <b>Why it matters:</b> these are what separate &quot;amateur&quot; from &quot;worth paying for.&quot; <b>How it helps:</b> a checklist you apply to every build.</p>

        <div className="aw-ph">BONUS 2 MOCKUP — 50 Website Features Businesses Pay Extra For</div>
        <h3>Bonus 2 — 50 Website Features Businesses Pay Extra For</h3>
        <p><b>What it is:</b> a menu of premium add-ons. <b>Why it matters:</b> more features done right means higher fees. <b>How it helps:</b> you instantly know what to upsell.</p>

        <div className="aw-ph">BONUS 3 MOCKUP — 10 Done-For-You Website Blueprints</div>
        <h3>Bonus 3 — 10 Done-For-You Website Blueprints</h3>
        <p><b>What it is:</b> ready layouts for common business types. <b>Why it matters:</b> no blank-page paralysis. <b>How it helps:</b> start every project with a proven structure.</p>

        <div className="aw-ph">BONUS 4 MOCKUP — AI Website Pricing Guide</div>
        <h3>Bonus 4 — AI Website Pricing Guide</h3>
        <p><b>What it is:</b> what to charge, and how to package it. <b>Why it matters:</b> beginners undercharge and burn out. <b>How it helps:</b> price with confidence from job one.</p>

        <div className="aw-ph">BONUS 5 MOCKUP — Client Prospecting Toolkit</div>
        <h3>Bonus 5 — Client Prospecting Toolkit</h3>
        <p><b>What it is:</b> the tools and trackers for finding and following up with businesses. <b>Why it matters:</b> organised prospecting wins. <b>How it helps:</b> always know who to contact next.</p>

        <div className="aw-ph">BONUS 6 MOCKUP — 100 AI Website Prompts</div>
        <h3>Bonus 6 — 100 AI Website Prompts</h3>
        <p><b>What it is:</b> copy-and-paste prompts for building and writing sites. <b>Why it matters:</b> the right prompt is everything. <b>How it helps:</b> great results without guessing.</p>

        <div className="aw-ph">BONUS 7 MOCKUP — Website Audit Checklist</div>
        <h3>Bonus 7 — Website Audit Checklist</h3>
        <p><b>What it is:</b> a simple checklist to review a site before delivery (or to spot what a prospect&apos;s old site is missing). <b>Why it matters:</b> it makes you look like a pro. <b>How it helps:</b> deliver clean work and win trust.</p>

        <div className="aw-ph big">BUNDLE IMAGE — main guide + all 7 bonuses together</div>

        {/* CTA 3 */}
        <a className="aw-cta" href={CHECKOUT}>
          GET THE GUIDE + ALL 7 BONUSES NOW
          <small>Bonuses included free for the first 100 buyers</small>
        </a>

        {/* SECTION 16 — WHATSAPP CHAT WIDGET (member wins)
            ====================================================================
            PLACEHOLDER CHAT. Replace these with REAL member messages or real
            screenshots before publishing. Do NOT invent specific earnings you
            cannot prove (e.g. "made ₦1,000,000 in a month") — fabricated
            earnings testimonials are illegal and get checkout accounts frozen.
            When you have genuine results (income or otherwise), paste them here.
            ==================================================================== */}
        <h2 className="center">Inside the members&apos; group</h2>
        <p className="center">Real wins get posted here every week. (Sample below — your real member chats go here.)</p>

        <div className="aw-wa">
          <div className="aw-wahead">
            <span className="aw-waback">‹</span>
            <div className="aw-wadot">AW</div>
            <div>
              <div className="aw-waname">AI Website Business 🇳🇬</div>
              <div className="aw-wamembers">You, Tobi, Grace, Samuel +183</div>
            </div>
          </div>
          <div className="aw-wabody">
            <div className="aw-wascroll">
              <div className="aw-msg"><span className="who">Tobi A.</span> Omo I just got my FIRST client 😭🎉 a barber near me, his old site was completely dead. Used the script word for word.<span className="time">09:58</span></div>
              <div className="aw-msg"><span className="who">Grace (Accra)</span> Congrats!! 🔥 I built my entire portfolio with the AI steps this weekend. It looks so professional I can&apos;t believe I made it<span className="time">10:06</span></div>
              <div className="aw-msg"><span className="who">Samuel (Nairobi)</span> Finally finished my own business website too. Zero coding. This is different from everything else I tried<span className="time">10:13</span></div>
              <div className="aw-msg"><span className="who">Promise (PH)</span> Second project this week. Found the business with the hunt method, no chasing 🙌<span className="time">10:20</span></div>
              <div className="aw-msg"><span className="who">Ruth (London)</span> For the first time I actually understand how to get PAID with AI, not just watch videos about it<span className="time">10:27</span></div>
              <div className="aw-msg"><span className="who">David O.</span> Sent 5 outreach messages, 2 replied the same day. First meeting booked 🙏<span className="time">10:34</span></div>
              <div className="aw-msg me">This is what it&apos;s all about 💙 keep posting your wins here, I&apos;m proud of you all<span className="time">10:36 <span className="aw-tick">✓✓</span></span></div>
            </div>
          </div>
        </div>

        <p className="center"><b>71 of the first 100 copies are gone</b> — only <b>29 left</b> at this price. <span className="italic">(EDIT: use real, honest numbers.)</span></p>
        <p className="center">And remember — you&apos;re not the only one reading this page right now.</p>

        {/* CTA 4 */}
        <a className="aw-cta" href={CHECKOUT}>
          CLAIM MY COPY BEFORE THE 100 SPOTS RUN OUT
        </a>

        {/* SECTION 17 — GUARANTEE */}
        <div className="aw-guarantee">
          <h2>Your 30-day money-back guarantee</h2>
          <p>I want this to be an easy yes, so the risk sits with me, not you.</p>
          <p>Get the guide, go through it, and actually try the steps. If within <b>30 days</b> you feel it hasn&apos;t given you a clearer, more practical path to building websites with AI and finding clients than anything you&apos;ve tried before — email me and I&apos;ll refund you. Simple. <span className="italic">(EDIT: match this to your real refund policy and checkout terms.)</span></p>
        </div>

        {/* CTA 5 */}
        <a className="aw-cta" href={CHECKOUT}>GET STARTED RISK-FREE TODAY</a>

        {/* SECTION 18 — SECOND TESTIMONIAL SET (PLACEHOLDER) */}
        <div className="aw-tsection">
          <h2>More from readers</h2>

          <div className="aw-comment">
            <div className="aw-chead">
              <div className="aw-avatar aw-av-navy">PE</div>
              <div>
                <div className="aw-cname">Promise Eze</div>
                <div className="aw-cwhere">Port Harcourt, Nigeria 🇳🇬 · 5 days ago</div>
              </div>
            </div>
            <div className="aw-stars">★★★★★</div>
            <p className="aw-ctext">Before this I was just collecting AI prompts and feeling busy. Now I have an actual skill and a plan. I built my first site and I&apos;m approaching businesses around PH this week. Huge confidence boost.</p>
          </div>

          <div className="aw-comment">
            <div className="aw-chead">
              <div className="aw-avatar aw-av-blue">MA</div>
              <div>
                <div className="aw-cname">Michael Anderson</div>
                <div className="aw-cwhere">Toronto, Canada 🇨🇦 · 1 week ago</div>
              </div>
            </div>
            <div className="aw-stars">★★★★★</div>
            <p className="aw-ctext">Clear, practical, no fluff. I finally understand how AI fits into a real service business. Built my first professional site without touching code and reached out to a local shop with the script.</p>
          </div>

          <div className="aw-comment">
            <div className="aw-chead">
              <div className="aw-avatar aw-av-teal">GA</div>
              <div>
                <div className="aw-cname">Grace Appiah</div>
                <div className="aw-cwhere">Accra, Ghana 🇬🇭 · 1 week ago</div>
              </div>
            </div>
            <div className="aw-stars">★★★★★</div>
            <p className="aw-ctext">I always thought you needed to be a &quot;tech person.&quot; The AI does the heavy part and I follow the steps. Landed my first website project from a caterer who had no site. No cap, it works.</p>
          </div>

          <div className="aw-comment">
            <div className="aw-chead">
              <div className="aw-avatar aw-av-purple">SM</div>
              <div>
                <div className="aw-cname">Samuel Mwangi</div>
                <div className="aw-cwhere">Nairobi, Kenya 🇰🇪 · 2 weeks ago</div>
              </div>
            </div>
            <div className="aw-stars">★★★★★</div>
            <p className="aw-ctext">The prospecting module is the gold. I stopped wasting time on Upwork and started finding real businesses near me that need sites. Got my first client conversation going within days.</p>
          </div>

          <div className="aw-comment">
            <div className="aw-chead">
              <div className="aw-avatar aw-av-orange">TA</div>
              <div>
                <div className="aw-cname">Tobi Akinwale</div>
                <div className="aw-cwhere">Lagos, Nigeria 🇳🇬 · 2 weeks ago</div>
              </div>
            </div>
            <div className="aw-stars">★★★★★</div>
            <p className="aw-ctext">Honestly the most beginner-friendly thing I&apos;ve bought. I went from confused about AI to building a proper site and landing my first project. The scripts removed all my fear of reaching out.</p>
          </div>

          <div className="aw-pager">
            <span>1</span><span>2</span><span className="on">3</span>
          </div>
        </div>

        {/* SECTION 19 — TWO-CHOICE CLOSE */}
        <div className="aw-twochoice">
          <h2>So here&apos;s your choice</h2>
          <p>You&apos;ve got two roads from here.</p>
          <p><b>Road 1:</b> Keep watching AI from the sidelines. Keep collecting tutorials and prompts. Keep telling yourself you&apos;ll &quot;figure out how to monetize it&quot; someday.</p>
          <p><b>Road 2:</b> Pick up a real skill the market already pays for. Let AI do the building. Use the system to find the businesses that need you. And give yourself a genuine shot at your first paying client.</p>
          <p>Ask yourself honestly: <span className="italic">where will I be in 12 months if I keep only watching?</span></p>
          <p>The AI wave isn&apos;t slowing down. The question is whether you&apos;ll get paid from it or just keep reading about it.</p>
        </div>

        {/* CTA 6 — FINAL */}
        <a className="aw-cta" href={CHECKOUT}>
          GET THE AI WEBSITE BUSINESS MODEL + ALL 7 BONUSES
          <small>Instant PDF access · 30-day guarantee · pay by card, transfer or USSD</small>
        </a>

        <p className="aw-disclaimer">Honest note: this is a new release. The testimonials, the WhatsApp payment feed and the &quot;spots left&quot; counter above are placeholders — replace them with real ones and only display them once they are genuinely true. This guide teaches a skill; it does not promise any specific income. What you earn depends on your own effort and many factors outside our control.</p>
        <p className="aw-copy">© 2026 The Future Income Journal · Practical Ways To Build Skills, Find Clients And Create Income In The AI Era</p>
      </div>
    </div>
  );
}
