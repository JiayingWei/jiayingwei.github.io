---
layout: portfolio
title: Show Me the Money
hero_img_desktop: /assets/images/ecoatm-app/ecoatm-app_hero.jpg
hero_img_mobile: /assets/images/ecoatm-app/ecoatm-app_thumb.jpg
folder: ecoatm-app

previous: ai-usage
next: EPYD
---

# Show me the money: Optimizing ecoATM’s “Price Your Device” Funnel

<div class="flex flex-row flex-wrap gap-2 mt-4 text-sm font-serif ">
    {% for tag in site.data.portfolio["ecoatm-app"].tags %}
        <p class="text-electric_purple bg-white rounded-sm px-2">{{ tag }}</p>
    {% endfor %}
</div>

<div class="bg-card_lavender rounded-2xl w-full grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 md:gap-16 p-6 mt-10">
    <div class="flex flex-col gap-2">
        <p class="text-lg font-bold text-label_purple">Domain</p>
        <p class="text-lg font-medium">B2C Funnel Optimization</p>
    </div>
    <div class="flex flex-col gap-2">
        <p class="text-lg font-bold text-label_purple">Timeline</p>
        <p class="text-lg font-medium">2025–2026</p>
    </div>
    <div class="flex flex-col gap-2">
        <p class="text-lg font-bold text-label_purple">Role</p>
        <p class="text-lg font-medium">Sr UX Designer</p>
    </div>
    <div class="flex flex-col gap-2">
        <p class="text-lg font-bold text-label_purple">Tools</p>
        <p class="text-lg font-medium">Figma, Figma Make, Lyssna</p>
    </div>
</div>

## Context
{: .text-center}

I led the 2025 redesign of the ecoATM mobile app. Our app helps people selling their old phone get a price, and prep their device to be sold at 7,500+ ecoATM Kiosks.

In our redesign, I removed key blockers in our “Price Your Device” funnel, developed a brand new design system in line with our earlier rebrand, and overhauled the entire UI to the new design system.

<div class="bg-card_lavender rounded-2xl w-full flex flex-col gap-8 p-6 mt-10">
    <p class="text-2xl font-semibold text-electric_purple text-center">Before the redesign: Price Your Device Funnel</p>
    <div class="flex flex-col md:flex-row items-center gap-4">
        <div class="flex flex-col items-center text-center gap-3 w-full md:w-1/4">
            <img src="{{ site.baseurl }}/assets/images/ecoatm-app/funnel_1.svg" class="w-20 h-20" alt="Phone icon">
            <p class="text-sm font-medium">Your phone’s make, model, & capacity is auto detected</p>
        </div>
        <img src="{{ site.baseurl }}/assets/images/ecoatm-app/arrow.svg" class="w-6 flex-shrink-0 transform rotate-90 md:rotate-0" alt="">
        <div class="flex flex-col items-center text-center gap-3 w-full md:w-1/4">
            <img src="{{ site.baseurl }}/assets/images/ecoatm-app/funnel_2.svg" class="w-20 h-20" alt="Chat bubble icon">
            <p class="text-sm font-medium">You answered questions about the condition of your phone</p>
        </div>
        <img src="{{ site.baseurl }}/assets/images/ecoatm-app/arrow.svg" class="w-6 flex-shrink-0 transform rotate-90 md:rotate-0" alt="">
        <div class="flex flex-col items-center text-center gap-3 w-full md:w-1/4">
            <img src="{{ site.baseurl }}/assets/images/ecoatm-app/funnel_3.svg" class="w-20 h-20" alt="Cloud icon">
            <p class="text-sm font-medium">You were asked to remove your iCloud Account</p>
        </div>
        <p class="md:hidden text-electric_purple font-bold text-lg text-center">People were getting stuck here!</p>
        <img src="{{ site.baseurl }}/assets/images/ecoatm-app/arrow.svg" class="w-6 flex-shrink-0 transform rotate-90 md:rotate-0" alt="">
        <div class="flex flex-col items-center text-center gap-3 w-full md:w-1/4">
            <img src="{{ site.baseurl }}/assets/images/ecoatm-app/funnel_4.svg" class="w-20 h-20" alt="Envelope with dollar sign icon">
            <p class="text-sm font-medium">You get your price offer & a drop-off code for the kiosk</p>
        </div>
    </div>
    <div class="hidden md:flex w-full gap-4">
        <div class="flex-1"></div>
        <div class="w-6 flex-shrink-0"></div>
        <div class="flex-1"></div>
        <div class="w-6 flex-shrink-0"></div>
        <div class="flex-1 text-center"><p class="text-electric_purple font-bold text-lg">People were getting stuck here!</p></div>
        <div class="w-6 flex-shrink-0"></div>
        <div class="flex-1"></div>
    </div>
</div>

<div class="flex flex-col md:flex-row gap-16 w-full mt-10 items-center">
    <p class="text-2xl font-semibold text-center md:text-right md:w-2/5"><span class="font-extrabold">Problem:</span> Sellers were getting stuck at <span class="text-electric_purple">remove iCloud</span>, and not making it to their <span class="text-electric_purple">price offer</span>.</p>
    <div class="bg-card_lavender rounded-2xl p-6 flex flex-col gap-4 md:w-3/5 w-full">
        <p class="text-2xl font-semibold">Why was it important that people removed iCloud?</p>
        <div class="flex flex-col gap-4 w-full">
            <div class="flex gap-4 items-center">
                <p class="text-label_purple font-bold text-4xl text-center w-8 flex-shrink-0">1</p>
                <p class="text-lg font-medium">Phones with an active iCloud account cannot be sold directly to another person</p>
            </div>
            <div class="flex gap-4 items-center">
                <p class="text-label_purple font-bold text-4xl text-center w-8 flex-shrink-0">2</p>
                <p class="text-lg font-medium">On inspection, the kiosk would lower their price offer because iCloud was still connected</p>
            </div>
            <div class="flex gap-4 items-center">
                <p class="text-label_purple font-bold text-4xl text-center w-8 flex-shrink-0">3</p>
                <p class="text-lg font-medium">50% of sellers with iCloud connected would walk away without selling</p>
            </div>
        </div>
    </div>
</div>

**Hypothesis:** Sellers were using the app to get a price estimate that they could use to shop around. At this point, they were not ready to commit to removing their iCloud in order to get an offer. We believed that moving “remove iCloud” to after they got their drop-off code would improve our funnel.

## Introducing the Prepare to Sell flow
{: .text-center}

<div class="bg-card_lavender rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
    <div class="flex flex-col items-center text-center gap-6">
        <p class="text-2xl font-semibold text-electric_purple">Before</p>
        <p class="text-sm font-medium">Users were asked to remove their iCloud as a prerequisite to getting their price</p>
        <img src="{{ site.baseurl }}/assets/images/ecoatm-app/before.png" class="rounded-2xl w-full" alt="Remove iCloud Account screen, followed by a Drop-off Code screen">
    </div>
    <div class="flex flex-col items-center text-center gap-6">
        <p class="text-2xl font-semibold text-electric_purple">After</p>
        <p class="text-sm font-medium">Users got their price offer first, and then were guided through steps to remove iCloud & select payment method</p>
        <img src="{{ site.baseurl }}/assets/images/ecoatm-app/after.png" class="rounded-2xl w-full" alt="Price Your Device offer screen, followed by a Prepare to Sell task list screen">
    </div>
</div>

<div class="flex flex-col md:flex-row gap-12 items-center mt-10">
<div class="flex-1 w-full flex flex-col items-center gap-10">
<p class="text-2xl font-semibold text-center w-full">Usability testing with Figma Make</p>
<div class="flex flex-col gap-4 w-full">
<p class="text-lg font-medium leading-relaxed">We used Figma Make to test with our users before development. Through this early testing we identified two friction points in our instructions to remove iCloud:</p>
<ul class="list-disc ml-6 flex flex-col gap-1">
<li class="text-lg font-medium">Users had to be connected to Wi-Fi in order to sign out</li>
<li class="text-lg font-medium">Users were not sure if they should erase their data at this step</li>
</ul>
<p class="text-lg font-medium leading-relaxed">We incorporated these findings to improve the completion rate of our prepare steps.</p>
</div>
</div>
<div class="flex-1 min-w-0 w-full flex justify-center">
<div class="w-full max-w-md rounded-2xl border border-gray-300 overflow-hidden" style="height: 690px;">
<iframe src="https://uncut-most-33900315.figma.site/" title="ecoATM Prepare to Sell usability prototype, built in Figma Make" style="width: 133.334%; height: 920px; border: none; display: block; transform: scale(0.75); transform-origin: top left;" loading="lazy"></iframe>
</div>
</div>
</div>

## Outcomes & Impact
{: .text-center}

<div class="flex flex-col md:flex-row gap-16 items-center mt-10 w-full">
<p class="text-2xl font-semibold text-center md:text-right md:w-1/2">After releasing this redesign, we saw huge improvements in our <span class="text-electric_purple">key funnel metrics</span> for our <span class="text-electric_purple">Price Your Device</span> flow.</p>
<div class="bg-card_lavender rounded-2xl p-10 grid grid-cols-1 md:grid-cols-2 md:w-1/2 w-full gap-x-10 gap-y-6">
<div class="flex flex-col items-center">
<div class="flex items-center" style="gap: 9px;">
<p class="text-5xl font-bold text-electric_purple">+26%</p>
<img src="{{ site.baseurl }}/assets/images/ecoatm-app/trending_up.svg" class="h-12 w-auto" alt="">
</div>
<div class="font-semibold text-center" style="font-size: 22px;">
<p class="mb-0">price offer</p>
<p>views on iOS</p>
</div>
</div>
<div class="flex flex-col items-center">
<div class="flex items-center" style="gap: 9px;">
<p class="text-5xl font-bold text-electric_purple">+13%</p>
<img src="{{ site.baseurl }}/assets/images/ecoatm-app/trending_up.svg" class="h-12 w-auto" alt="">
</div>
<div class="font-semibold text-center" style="font-size: 22px;">
<p class="mb-0">price offer</p>
<p>views on Android</p>
</div>
</div>
</div>
</div>

In addition to more overall conversions, we also found that our new “Prepare to Sell” feature coached more users to remove iCloud, resulting in a +3.88% increase in devices with iCloud removed at the kiosk — approximately $100k in incremental annual margin.
