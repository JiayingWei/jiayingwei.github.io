---
layout: portfolio
title: Gazelle Shopify Replatform
hero_img: gazelle/hero.jpg
folder: gazelle

previous: hybrid_pricing
next: waves
---

# Gazelle Shopify Replatform

<div class="flex flex-row flex-wrap gap-2 mt-4 text-sm font-serif ">
    {% for tag in site.data.portfolio.gazelle.tags %}
        <p class="text-electric_purple bg-robin_gray rounded-sm px-2">{{ tag }}</p>
    {% endfor %}
</div> 

## Background
When Gazelle was launched in 2008, it was one of the first e-commerce websites that sold used & refurbished phones. Because of that we’ve had a good head start in building our brand and developing a base of loyal customers.

However, since then the landscape for electronic re-commerce has shifted quite a bit, from independent competitors like Backmarket & Reebelo popping up, as well as larger tech giants like Amazon & Ebay getting into the game.

Increasingly, Gazelle started to look more and more dated, as our large amount of tech debt made it difficult to revamp our website. 

<img src="{{ site.baseurl }}/assets/images/gazelle/1.png" 
    data-default-src="{{ site.baseurl }}/assets/images/gazelle/1.png"
    data-alt-src="{{ site.baseurl }}/assets/images/gazelle/1 hover.png"
    onclick="toggleImage(this)"
    alt="This is what our site looked like in April of 2024">

<p class="text-electric_purple text-center font-bold">This is what our site looked like in April of 2024 (click to see the new homepage)</p>

In 2023, Shopify had announced that it was deprecating support for the existing theme that Gazelle was running on. This meant that if we didn’t switch themes before the deadline, we could risk our store shutting down. This finally gave us the push to migrate our theme, fix our tech debt, and bring Gazelle back into the race with our competitors. 

## What made this project difficult?

By the time we had decided to take on this endeavor, we had less than 6 months to fully migrate the store to its new theme. We had big ambitions around improving the user experience of the site, but due to the tight deadlines, I had to work closely with our product, development, and marketing teams to ruthlessly prioritize what needed to be accomplished by day one. 

Our team sorted all the features that we had initially wanted for launch into high, medium, and low priority. High priority meant that it was a must launch for day 1, medium & low priority meant that we would launch these features incrementally afterwards.

<img src="{{ site.baseurl }}/assets/images/gazelle/2.png" alt="A sorted list of our priorities">

Keeping our priorities in mind, I facilitated weekly design reviews for the day 1 designs of the new Gazelle store. A lot of the meetings were about reminding stakeholders about our priorities and keeping us on target with our timeline. 

## Working with Shopify themes

For those unfamiliar with Shopify, they have a bunch of themes you can hook up to your product catalogue to quickly spin up a e-commerce website. 

Rather than building out standard e-commerce functionality from scratch, we decided to migrate our previous theme to “Dawn”, Shopify’s reference theme.  Because Dawn had existing pages like collections & product pages already built, along with a library of drag-and-drop components used to customize each page, it heavily simplified the design process for us.

You may be wondering, “well if it already has so many things built in, what was there to design?”

Great question, this is how our product page looks on Dawn right out of the box. It’s pretty decent looking already, however, over the years we had added features to our website that was not included in the default Dawn theme,  therefore we had to create designs & use developer time to get it back to feature parity with our existing site. 

<img src="{{ site.baseurl }}/assets/images/gazelle/3.png" alt="Our product page using default Shopify Dawn Theme">

<p class="text-electric_purple text-center font-bold">Our product page using default Shopify Dawn Theme</p>

Some of the features customized just on the product page were, **cosmetic condition tooltip, improved color swatches, carrier & storage variants, protection plans, unique selling points banner**.

Click the next screenshot to see where we added our customizations.

<img src="{{ site.baseurl }}/assets/images/gazelle/4.png" 
    data-default-src="{{ site.baseurl }}/assets/images/gazelle/4.png"
    data-alt-src="{{ site.baseurl }}/assets/images/gazelle/4 hover.png"
    onclick="toggleImage(this)"
    alt="This is our newly launched product page">

<p class="text-electric_purple text-center font-bold">This is our newly launched product page (Click the image to see annotations)</p>

As you can see, there were a lot of customizations made not only to add existing features to our e-commerce shop, but also to make it match our brand identity.

## Editing in the Shopify CMS

So in addition to the feature customizations, there was a certain amount of work that would be required to edit the default Shopify Theme to have the styling & the sections that we wanted for our site. 

This work was supposed to be done in our Shopify CMS or **Content Management System**. This is the drag-and-drop UI that Shopify provides to edit their theme.

At the beginning of this project, the scope of my work was only to provide designs in Figma for features we wanted to add. The actual building of the various pages in our CMS was to be handled by our developers. 

As it became more clear that we were crunched for time, I decided to step up and also handle the initial round of CMS customizations in Shopify. This ended up saving our developers valuable time that they were able to use on actual development.

<img src="{{ site.baseurl }}/assets/images/gazelle/5.png" alt="This is our newly launched product page">

<p class="text-electric_purple text-center font-bold">This is what the inside of Shopify’s CMS looks like</p>

The CMS work that I did involved:
* Building out our homepage, collections page, and product pages
* Designing and uploading all our initial banners & category images
* Creating additional sections using Pagefly
* Testing for various screen sizes

## Wrapping up

We successfully migrated Gazelle.com to the Dawn theme in the summer of 2024. Shortly after we also launched our Gazelle rebrand with new logos, colors, & fonts. We continue to run A/B experiments on new features to improve the e-commerce experience on our website.