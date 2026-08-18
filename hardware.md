---
layout: default
title: Hardware
permalink: /hardware/
---

<section class="bg-baby_blue flex justify-center w-full">
	<div class="max-w-screen-xl flex flex-col py-16 md:py-24 w-full gap-6 px-4 sm:px-10 xl:px-0">
		<h1 class="text-4xl md:text-6xl font-bold text-electric_purple">Hi I’m Jiaying</h1>
		<p class="text-xl md:text-3xl leading-snug">
			<span class="font-medium">I’m a </span><span class="font-extrabold">Product Designer</span><span class="font-medium"> looking to pivot into a </span><span class="font-extrabold">Hardware Technician</span><span class="font-medium"> role.</span>
		</p>
		<p class="text-xl md:text-3xl font-medium leading-snug">
			After 8 years of designing digital experiences for people on websites & apps, I’m looking to get back into my maker roots!
		</p>
	</div>
</section>

<section class="bg-gradient-to-b from-grad_purple to-grad_blue w-full flex flex-col items-center py-16 gap-10">

	<h1 class="text-center text-electric_purple">See My Projects</h1>

	<div class="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 lg:gap-10 px-4 lg:px-0 w-full">
		{% for entry in site.data.hardware %}
			{% assign key = entry[0] %}
			{% assign project = entry[1] %}

			<button type="button"
				class="bg-white flex flex-col text-left shadow-xl transition duration-200 transform hover:scale-110 rounded-3xl overflow-hidden cursor-pointer"
				onclick="openHardwareModal('{{ key }}')">
				<img src="{{ site.baseurl }}/assets/images/hardware/{{ project.folder }}/thumbnail.jpg" class="w-full h-64 object-cover" alt="{{ project.title }}">
				<div class="flex flex-col gap-4 p-6">
					<h2 class="font-semibold text-2xl">{{ project.title }}</h2>
					<p class="text-lg"><span class="font-bold">Skills:</span> {{ project.skills }}</p>
				</div>
			</button>
		{% endfor %}
	</div>
</section>

{% include for_fun.html %}

<!-- Hardware project modal -->
<div id="hardware-modal" class="hidden fixed inset-0 z-50 bg-black bg-opacity-75 items-center justify-center sm:px-4 sm:py-10" onclick="closeHardwareModal()">
	<div id="hardware-modal-panel" class="bg-white rounded-none sm:rounded-3xl overflow-y-auto max-w-none sm:max-w-3xl w-full h-full sm:h-auto flex flex-col gap-4 sm:px-10 pb-10 relative" style="padding-top: 56px;" onclick="event.stopPropagation()">

		<button type="button" onclick="closeHardwareModal()" aria-label="Close" class="absolute z-10 hover:opacity-75" style="top: 16px; right: 16px;">
			<img src="{{ site.baseurl }}/assets/images/icons/close-x.svg" alt="" class="h-6 w-6">
		</button>

		<div id="hardware-modal-media" class="relative w-full bg-black overflow-hidden" style="aspect-ratio: 8 / 5;">
			<iframe id="hardware-modal-video" class="hidden absolute inset-0 w-full h-full" src="" title="Project video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<img id="hardware-modal-image" src="" alt="" class="hidden absolute inset-0 w-full h-full object-cover">
		</div>

		<div class="flex flex-col gap-4 w-full px-4 sm:px-0">
			<div class="flex items-center justify-between w-full gap-4">
				<h2 id="hardware-modal-title" class="font-semibold text-2xl"></h2>
				<div class="flex gap-4 flex-shrink-0">
					<button type="button" id="hardware-modal-prev" onclick="hardwarePrevSlide()" aria-label="Previous" class="bg-periwinkle rounded-full h-12 w-12 flex items-center justify-center hover:opacity-90">
						<img src="{{ site.baseurl }}/assets/images/icons/chevron-left.svg" alt="" class="h-6 w-6">
					</button>
					<button type="button" id="hardware-modal-next" onclick="hardwareNextSlide()" aria-label="Next" class="bg-periwinkle rounded-full h-12 w-12 flex items-center justify-center hover:opacity-90">
						<img src="{{ site.baseurl }}/assets/images/icons/chevron-right.svg" alt="" class="h-6 w-6">
					</button>
				</div>
			</div>

			<div class="flex items-start justify-between w-full gap-4 flex-wrap">
				<p id="hardware-modal-skills" class="text-lg"></p>
				<p id="hardware-modal-team" class="hidden sm:inline-block text-lg whitespace-no-wrap"></p>
			</div>
			<p id="hardware-modal-description" class="text-lg"></p>
		</div>
	</div>
</div>

{% capture hardware_json %}[
{% for entry in site.data.hardware %}
	{% assign key = entry[0] %}
	{% assign project = entry[1] %}
	{% assign folder_prefix = "/assets/images/hardware/" | append: project.folder | append: "/" %}
	{% assign proj_images = site.static_files | where_exp: "file", "file.path contains folder_prefix" | where_exp: "file", "file.basename != 'thumbnail'" | sort: "path" %}
	{
		"slug": {{ key | jsonify }},
		"title": {{ project.title | jsonify }},
		"skills": {{ project.skills | jsonify }},
		"team": {{ project.team | default: "" | jsonify }},
		"description": {{ project.description | default: "" | jsonify }},
		"youtube": {{ project.youtube | default: "" | jsonify }},
		"images": [{% for img in proj_images %}{{ img.path | prepend: site.baseurl | jsonify }}{% unless forloop.last %},{% endunless %}{% endfor %}]
	}{% unless forloop.last %},{% endunless %}
{% endfor %}
]{% endcapture %}
<script id="hardware-data" type="application/json">{{ hardware_json }}</script>
<script src="{{ site.baseurl }}/assets/js/hardware.js"></script>
