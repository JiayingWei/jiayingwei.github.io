---
layout: portfolio
title: "How I'm Using AI as a Design Tool"
folder: ai-tooling

previous: EPYD
next: GPYD
---

# How I'm Using AI as a Design Tool

<div class="flex flex-row flex-wrap gap-2 mt-4 text-sm font-serif ">
    {% for tag in site.data.portfolio["ai-tooling"].tags %}
        <p class="text-electric_purple bg-white rounded-sm px-2">{{ tag }}</p>
    {% endfor %}
</div> 

AI's been shifting the way we designers work in a dramatic way, but from person to person we're all using it very differently. Here are some actual examples of how I'm trying to be creative with AI in my day-to-day.

1. <a href="#figma-make" class="text-electric_purple underline hover:opacity-70">Creating quicker prototypes using Figma Make</a>
2. <a href="#claude-cowork" class="text-electric_purple underline hover:opacity-70">Building production-accurate prototypes with Claude Cowork</a>
3. <a href="#landing-pages" class="text-electric_purple underline hover:opacity-70">Building and deploying landing pages with a custom update tool</a>
4. <a href="#video-transcriber" class="text-electric_purple underline hover:opacity-70">Accurately transcribing user interviews for AI Analysis</a>
5. <a href="#brand-copywriting" class="text-electric_purple underline hover:opacity-70">Creating a Claude Skill for brand-voice copywriting</a>

---

## Creating quicker prototypes using Figma Make {#figma-make}

Figma Make is great at quickly prototyping new interactions. To make this process easier, I've created a boilerplate of our "Price Your Device" tool. This way I'm able to duplicate this file, and have a more accurate starting point when testing out new features.

<img src="{{ site.baseurl }}/assets/images/ai-tooling/Prototyping%20with%20Figma%20Make.png" alt="Figma Make prototype of the Price Your Device tool" class="mx-auto block" style="max-width: 750px; width: 100%;">

Another helpful prompting technique I've found is following the **Task**, **Context**, **Elements**, **Behaviors**, **Constraints** framework described in this [Figma article](https://help.figma.com/hc/en-us/articles/32132968610071-Write-better-prompts-for-Figma-Make).

```
Task:
Context:
Elements:
Behavior:
Constraints:
```

I don't always use every part of the framework, here was my starting prompt:

**Task:** I want you to build me this price your device page. It should have dummy data in it, one of the frames I pasted is the starting state, the second one is when it's all filled out. Once it's filled out, and the user hits "Get Price Estimate" It goes to the screen with the price, auto scrolling down to see the price.

**Context:** The user is getting a quote for an old phone they are trying to sell.

---

## Building production-accurate prototypes with Claude Cowork {#claude-cowork}

<div class="flex flex-col md:flex-row gap-8 items-start mt-4">
<div class="flex-1">
<p class="text-lg my-4 leading-relaxed">Figma Make is great for getting something together quickly, but sometimes I want something that is more accurate to the production tool on our website. For that, I've been using Claude Cowork.</p>
<p class="text-lg my-4 leading-relaxed">To build this prototype I accessed the codebase for our "Price Your Device" tool to create a production-accurate prototype that is able to call our API.</p>
<p class="text-lg my-4 leading-relaxed">I then fed it the code from my Figma Make prototype to replicate the new feature (progress bar + confetti).</p>
<p class="text-lg my-4 leading-relaxed">This allows testing interactions with real devices and prices called from our API. In the case of this prototype, pricing a device with value will toss 💰 💵 🤑 confetti vs. pricing a device that is recyclable will toss ♻️ 🌎 confetti instead.</p>
</div>
<video controls class="rounded-lg shrink-0 mx-auto" style="width: 300px;">
    <source src="{{ site.baseurl }}/assets/images/ai-tooling/Prototyping%20with%20Claude%20Code.mp4" type="video/mp4">
</video>
</div>

---

## Building and deploying landing pages with a custom update tool {#landing-pages}

Our website is built on top of Shopify, and over the years we've used PageFly (a drag and drop page builder) as the primary method of building landing pages. We found it finicky, getting pages to match the Figma designs closely was a real challenge.

When the team member handling this work moved on, I took it as a chance to explore create these landing pages using code. After creating the HTML files, we found the easiest way to upload these pages was still through PageFly. This time by pasting the HTML into its HTML block.

One issue I came upon while previewing pages was that URLs would break unless manually adjusted between local, QA, and production environments. I created a copy-paste tool that made all these adjustments for me, so I didn't have to do any manual editing.

<img src="{{ site.baseurl }}/assets/images/ai-tooling/Creating%20Landing%20Pages.jpg" alt="PageFly Copy Tool showing QA and PROD copy buttons for each page" class="mx-auto block" style="max-width: 750px; width: 100%;">

---

## Accurately transcribing user interviews for AI Analysis {#video-transcriber}

Between internal team members conducting user interviews and external research agencies conducting additional interviews, we have a lot of valuable user research stored in video format. I wanted to be able to analyze the content of these interviews, without having to manually watch every single video.

For a while I was trying to use OpenAI's open-source speech recognition model to transcribe videos. It had the benefit of running locally, and not requiring any token usage.

But the downside was that it would often hallucinate (30% of the time) in the middle of the transcription, rendering the transcription useless.

I created a video-transcriber Claude Skill to improve transcription speed and accuracy. What it does:

- Convert video to audio, and remove leading/trailing silence which often cause hallucinations
- Transcribe the audio using **Whisper** with specific settings aimed at reducing hallucination
- Run a hallucination detector in order to scan transcripts for hallucinations and rerun **Whisper** with stricter (resource intensive) settings

<img src="{{ site.baseurl }}/assets/images/ai-tooling/Skill%20-%20video-transcriber.png" alt="video-transcriber Claude Skill showing the three-stage transcription pipeline" class="mx-auto block" style="max-width: 750px; width: 100%;">

---

## Creating a Claude Skill for brand-voice copywriting {#brand-copywriting}

As a UX designer, I'm often coming up with the first pass for copy on any new pages. I've created a **Claude Skill** that helps me rewrite my words into something that is more brand aligned.

To do so, I used the skill-creator skill and fed it our company's brand voice guidelines. To avoid common tells of AI copywriting, in the skill I also tell it to avoid using em-dash and other AI tells.

<img src="{{ site.baseurl }}/assets/images/ai-tooling/Skill%20-%20Brand%20Copy%20Writing.png" alt="ecoatm-brand Claude Skill showing copywriting and brand review modes" class="mx-auto block" style="max-width: 750px; width: 100%;">
